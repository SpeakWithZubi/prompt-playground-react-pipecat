type AnyRecord = Record<string, unknown>;

const jsonHeaders = { 'content-type': 'application/json' };

async function readBody(req: any): Promise<unknown> {
  if (req.body !== undefined) {
    return req.body;
  }

  const chunks: Buffer[] = [];
  for await (const chunk of req) {
    chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk);
  }

  if (chunks.length === 0) {
    return {};
  }

  const raw = Buffer.concat(chunks).toString('utf-8').trim();
  if (!raw) {
    return {};
  }

  try {
    return JSON.parse(raw);
  } catch {
    return raw;
  }
}

function toFetchBody(input: unknown): string {
  if (typeof input === 'string') {
    return input;
  }

  if (input && typeof input === 'object') {
    return JSON.stringify(input);
  }

  return JSON.stringify({});
}

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const backendStartUrl = process.env.BACKEND_START_URL;
  if (!backendStartUrl) {
    return res.status(500).json({
      error: 'BACKEND_START_URL is not configured on the server.',
    });
  }

  try {
    const requestBody = await readBody(req);

    const upstream = await fetch(backendStartUrl, {
      method: 'POST',
      headers: jsonHeaders,
      body: toFetchBody(requestBody),
    });

    const text = await upstream.text();
    const contentType = upstream.headers.get('content-type') ?? 'application/json';

    res.status(upstream.status);
    res.setHeader('content-type', contentType);

    if (!text) {
      return res.end();
    }

    if (contentType.includes('application/json')) {
      try {
        return res.send(JSON.parse(text) as AnyRecord);
      } catch {
        return res.send(text);
      }
    }

    return res.send(text);
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown proxy error';
    return res.status(502).json({ error: message });
  }
}
