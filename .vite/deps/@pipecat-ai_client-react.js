import {
  require_react
} from "./chunk-NO6UH6X3.js";
import {
  $c0d10c4690969999$export$e4036f9b8ddb7379,
  $c1b4da4af54f4fa1$export$6b4624d233c61fcb
} from "./chunk-7KXNQTIL.js";
import {
  __commonJS,
  __toESM
} from "./chunk-5WRI5ZAA.js";

// node_modules/react/cjs/react-jsx-runtime.development.js
var require_react_jsx_runtime_development = __commonJS({
  "node_modules/react/cjs/react-jsx-runtime.development.js"(exports) {
    "use strict";
    (function() {
      function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type)
          return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch (type) {
          case REACT_FRAGMENT_TYPE:
            return "Fragment";
          case REACT_PROFILER_TYPE:
            return "Profiler";
          case REACT_STRICT_MODE_TYPE:
            return "StrictMode";
          case REACT_SUSPENSE_TYPE:
            return "Suspense";
          case REACT_SUSPENSE_LIST_TYPE:
            return "SuspenseList";
          case REACT_ACTIVITY_TYPE:
            return "Activity";
        }
        if ("object" === typeof type)
          switch ("number" === typeof type.tag && console.error(
            "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
          ), type.$$typeof) {
            case REACT_PORTAL_TYPE:
              return "Portal";
            case REACT_CONTEXT_TYPE:
              return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
              return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
              var innerType = type.render;
              type = type.displayName;
              type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
              return type;
            case REACT_MEMO_TYPE:
              return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
              innerType = type._payload;
              type = type._init;
              try {
                return getComponentNameFromType(type(innerType));
              } catch (x) {
              }
          }
        return null;
      }
      function testStringCoercion(value) {
        return "" + value;
      }
      function checkKeyStringCoercion(value) {
        try {
          testStringCoercion(value);
          var JSCompiler_inline_result = false;
        } catch (e) {
          JSCompiler_inline_result = true;
        }
        if (JSCompiler_inline_result) {
          JSCompiler_inline_result = console;
          var JSCompiler_temp_const = JSCompiler_inline_result.error;
          var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
          JSCompiler_temp_const.call(
            JSCompiler_inline_result,
            "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
            JSCompiler_inline_result$jscomp$0
          );
          return testStringCoercion(value);
        }
      }
      function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE)
          return "<...>";
        try {
          var name = getComponentNameFromType(type);
          return name ? "<" + name + ">" : "<...>";
        } catch (x) {
          return "<...>";
        }
      }
      function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
      }
      function UnknownOwner() {
        return Error("react-stack-top-frame");
      }
      function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
          var getter = Object.getOwnPropertyDescriptor(config, "key").get;
          if (getter && getter.isReactWarning) return false;
        }
        return void 0 !== config.key;
      }
      function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
          specialPropKeyWarningShown || (specialPropKeyWarningShown = true, console.error(
            "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
            displayName
          ));
        }
        warnAboutAccessingKey.isReactWarning = true;
        Object.defineProperty(props, "key", {
          get: warnAboutAccessingKey,
          configurable: true
        });
      }
      function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = true, console.error(
          "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
        ));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
      }
      function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
          $$typeof: REACT_ELEMENT_TYPE,
          type,
          key,
          props,
          _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
          enumerable: false,
          get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", { enumerable: false, value: null });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
          configurable: false,
          enumerable: false,
          writable: true,
          value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
          configurable: false,
          enumerable: false,
          writable: true,
          value: null
        });
        Object.defineProperty(type, "_debugStack", {
          configurable: false,
          enumerable: false,
          writable: true,
          value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
          configurable: false,
          enumerable: false,
          writable: true,
          value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
      }
      function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children)
          if (isStaticChildren)
            if (isArrayImpl(children)) {
              for (isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)
                validateChildKeys(children[isStaticChildren]);
              Object.freeze && Object.freeze(children);
            } else
              console.error(
                "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
              );
          else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
          children = getComponentNameFromType(type);
          var keys = Object.keys(config).filter(function(k) {
            return "key" !== k;
          });
          isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
          didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error(
            'A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />',
            isStaticChildren,
            children,
            keys,
            children
          ), didWarnAboutKeySpread[children + isStaticChildren] = true);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
          maybeKey = {};
          for (var propName in config)
            "key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(
          maybeKey,
          "function" === typeof type ? type.displayName || type.name || "Unknown" : type
        );
        return ReactElement(
          type,
          children,
          maybeKey,
          getOwner(),
          debugStack,
          debugTask
        );
      }
      function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
      }
      function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
      }
      var React2 = require_react(), REACT_ELEMENT_TYPE = /* @__PURE__ */ Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = /* @__PURE__ */ Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = /* @__PURE__ */ Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = /* @__PURE__ */ Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = /* @__PURE__ */ Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = /* @__PURE__ */ Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = /* @__PURE__ */ Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = /* @__PURE__ */ Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = /* @__PURE__ */ Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = /* @__PURE__ */ Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = /* @__PURE__ */ Symbol.for("react.memo"), REACT_LAZY_TYPE = /* @__PURE__ */ Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = /* @__PURE__ */ Symbol.for("react.activity"), REACT_CLIENT_REFERENCE = /* @__PURE__ */ Symbol.for("react.client.reference"), ReactSharedInternals = React2.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
      };
      React2 = {
        react_stack_bottom_frame: function(callStackForError) {
          return callStackForError();
        }
      };
      var specialPropKeyWarningShown;
      var didWarnAboutElementRef = {};
      var unknownOwnerDebugStack = React2.react_stack_bottom_frame.bind(
        React2,
        UnknownOwner
      )();
      var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
      var didWarnAboutKeySpread = {};
      exports.Fragment = REACT_FRAGMENT_TYPE;
      exports.jsx = function(type, config, maybeKey) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        return jsxDEVImpl(
          type,
          config,
          maybeKey,
          false,
          trackActualOwner ? Error("react-stack-top-frame") : unknownOwnerDebugStack,
          trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask
        );
      };
      exports.jsxs = function(type, config, maybeKey) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        return jsxDEVImpl(
          type,
          config,
          maybeKey,
          true,
          trackActualOwner ? Error("react-stack-top-frame") : unknownOwnerDebugStack,
          trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask
        );
      };
    })();
  }
});

// node_modules/react/jsx-runtime.js
var require_jsx_runtime = __commonJS({
  "node_modules/react/jsx-runtime.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_react_jsx_runtime_development();
    }
  }
});

// node_modules/@pipecat-ai/client-react/dist/index.module.js
var import_jsx_runtime = __toESM(require_jsx_runtime());
var import_react4 = __toESM(require_react());

// node_modules/jotai/esm/vanilla/internals.mjs
function hasInitialValue(atom2) {
  return "init" in atom2;
}
function isActuallyWritableAtom(atom2) {
  return !!atom2.write;
}
function isAtomStateInitialized(atomState) {
  return "v" in atomState || "e" in atomState;
}
function returnAtomValue(atomState) {
  if ("e" in atomState) {
    throw atomState.e;
  }
  if ((import.meta.env ? import.meta.env.MODE : void 0) !== "production" && !("v" in atomState)) {
    throw new Error("[Bug] atom state is not initialized");
  }
  return atomState.v;
}
function isPromiseLike(p) {
  return typeof (p == null ? void 0 : p.then) === "function";
}
function addPendingPromiseToDependency(atom2, promise, dependencyAtomState) {
  if (!dependencyAtomState.p.has(atom2)) {
    dependencyAtomState.p.add(atom2);
    const cleanup = () => dependencyAtomState.p.delete(atom2);
    promise.then(cleanup, cleanup);
  }
}
function getMountedOrPendingDependents(atom2, atomState, mountedMap) {
  var _a;
  const dependents = /* @__PURE__ */ new Set();
  for (const a of ((_a = mountedMap.get(atom2)) == null ? void 0 : _a.t) || []) {
    dependents.add(a);
  }
  for (const atomWithPendingPromise of atomState.p) {
    dependents.add(atomWithPendingPromise);
  }
  return dependents;
}
var BUILDING_BLOCK_atomRead = (_store, atom2, ...params) => atom2.read(...params);
var BUILDING_BLOCK_atomWrite = (_store, atom2, ...params) => atom2.write(...params);
var BUILDING_BLOCK_atomOnInit = (store, atom2) => {
  var _a;
  return (_a = atom2.INTERNAL_onInit) == null ? void 0 : _a.call(atom2, store);
};
var BUILDING_BLOCK_atomOnMount = (_store, atom2, setAtom) => {
  var _a;
  return (_a = atom2.onMount) == null ? void 0 : _a.call(atom2, setAtom);
};
var BUILDING_BLOCK_ensureAtomState = (store, atom2) => {
  var _a;
  const buildingBlocks = getInternalBuildingBlocks(store);
  const atomStateMap = buildingBlocks[0];
  const storeHooks = buildingBlocks[6];
  const atomOnInit = buildingBlocks[9];
  if ((import.meta.env ? import.meta.env.MODE : void 0) !== "production" && !atom2) {
    throw new Error("Atom is undefined or null");
  }
  let atomState = atomStateMap.get(atom2);
  if (!atomState) {
    atomState = { d: /* @__PURE__ */ new Map(), p: /* @__PURE__ */ new Set(), n: 0 };
    atomStateMap.set(atom2, atomState);
    (_a = storeHooks.i) == null ? void 0 : _a.call(storeHooks, atom2);
    atomOnInit == null ? void 0 : atomOnInit(store, atom2);
  }
  return atomState;
};
var BUILDING_BLOCK_flushCallbacks = (store) => {
  const buildingBlocks = getInternalBuildingBlocks(store);
  const mountedMap = buildingBlocks[1];
  const changedAtoms = buildingBlocks[3];
  const mountCallbacks = buildingBlocks[4];
  const unmountCallbacks = buildingBlocks[5];
  const storeHooks = buildingBlocks[6];
  const recomputeInvalidatedAtoms = buildingBlocks[13];
  const errors = [];
  const call = (fn) => {
    try {
      fn();
    } catch (e) {
      errors.push(e);
    }
  };
  do {
    if (storeHooks.f) {
      call(storeHooks.f);
    }
    const callbacks = /* @__PURE__ */ new Set();
    const add = callbacks.add.bind(callbacks);
    changedAtoms.forEach((atom2) => {
      var _a;
      return (_a = mountedMap.get(atom2)) == null ? void 0 : _a.l.forEach(add);
    });
    changedAtoms.clear();
    unmountCallbacks.forEach(add);
    unmountCallbacks.clear();
    mountCallbacks.forEach(add);
    mountCallbacks.clear();
    callbacks.forEach(call);
    if (changedAtoms.size) {
      recomputeInvalidatedAtoms(store);
    }
  } while (changedAtoms.size || unmountCallbacks.size || mountCallbacks.size);
  if (errors.length) {
    throw new AggregateError(errors);
  }
};
var BUILDING_BLOCK_recomputeInvalidatedAtoms = (store) => {
  const buildingBlocks = getInternalBuildingBlocks(store);
  const mountedMap = buildingBlocks[1];
  const invalidatedAtoms = buildingBlocks[2];
  const changedAtoms = buildingBlocks[3];
  const ensureAtomState = buildingBlocks[11];
  const readAtomState = buildingBlocks[14];
  const mountDependencies = buildingBlocks[17];
  const topSortedReversed = [];
  const visiting = /* @__PURE__ */ new WeakSet();
  const visited = /* @__PURE__ */ new WeakSet();
  const stack = Array.from(changedAtoms);
  while (stack.length) {
    const a = stack[stack.length - 1];
    const aState = ensureAtomState(store, a);
    if (visited.has(a)) {
      stack.pop();
      continue;
    }
    if (visiting.has(a)) {
      if (invalidatedAtoms.get(a) === aState.n) {
        topSortedReversed.push([a, aState]);
      } else if ((import.meta.env ? import.meta.env.MODE : void 0) !== "production" && invalidatedAtoms.has(a)) {
        throw new Error("[Bug] invalidated atom exists");
      }
      visited.add(a);
      stack.pop();
      continue;
    }
    visiting.add(a);
    for (const d of getMountedOrPendingDependents(a, aState, mountedMap)) {
      if (!visiting.has(d)) {
        stack.push(d);
      }
    }
  }
  for (let i = topSortedReversed.length - 1; i >= 0; --i) {
    const [a, aState] = topSortedReversed[i];
    let hasChangedDeps = false;
    for (const dep of aState.d.keys()) {
      if (dep !== a && changedAtoms.has(dep)) {
        hasChangedDeps = true;
        break;
      }
    }
    if (hasChangedDeps) {
      invalidatedAtoms.set(a, aState.n);
      readAtomState(store, a);
      mountDependencies(store, a);
    }
    invalidatedAtoms.delete(a);
  }
};
var storeMutationSet = /* @__PURE__ */ new WeakSet();
var BUILDING_BLOCK_readAtomState = (store, atom2) => {
  var _a, _b;
  const buildingBlocks = getInternalBuildingBlocks(store);
  const mountedMap = buildingBlocks[1];
  const invalidatedAtoms = buildingBlocks[2];
  const changedAtoms = buildingBlocks[3];
  const storeHooks = buildingBlocks[6];
  const atomRead = buildingBlocks[7];
  const ensureAtomState = buildingBlocks[11];
  const flushCallbacks = buildingBlocks[12];
  const recomputeInvalidatedAtoms = buildingBlocks[13];
  const readAtomState = buildingBlocks[14];
  const writeAtomState = buildingBlocks[16];
  const mountDependencies = buildingBlocks[17];
  const setAtomStateValueOrPromise = buildingBlocks[20];
  const registerAbortHandler = buildingBlocks[26];
  const atomState = ensureAtomState(store, atom2);
  if (isAtomStateInitialized(atomState)) {
    if (mountedMap.has(atom2) && invalidatedAtoms.get(atom2) !== atomState.n) {
      return atomState;
    }
    let hasChangedDeps = false;
    for (const [a, n] of atomState.d) {
      if (readAtomState(store, a).n !== n) {
        hasChangedDeps = true;
        break;
      }
    }
    if (!hasChangedDeps) {
      return atomState;
    }
  }
  let isSync = true;
  const prevDeps = new Set(atomState.d.keys());
  const nextDeps = /* @__PURE__ */ new Map();
  const pruneDependencies = () => {
    for (const a of prevDeps) {
      if (!nextDeps.has(a)) {
        atomState.d.delete(a);
      }
    }
  };
  const mountDependenciesIfAsync = () => {
    if (mountedMap.has(atom2)) {
      const shouldRecompute = !changedAtoms.size;
      mountDependencies(store, atom2);
      if (shouldRecompute) {
        recomputeInvalidatedAtoms(store);
        flushCallbacks(store);
      }
    }
  };
  const getter = (a) => {
    var _a2;
    if (a === atom2) {
      const aState2 = ensureAtomState(store, a);
      if (!isAtomStateInitialized(aState2)) {
        if (hasInitialValue(a)) {
          setAtomStateValueOrPromise(store, a, a.init);
        } else {
          throw new Error("no atom init");
        }
      }
      return returnAtomValue(aState2);
    }
    const aState = readAtomState(store, a);
    try {
      return returnAtomValue(aState);
    } finally {
      nextDeps.set(a, aState.n);
      atomState.d.set(a, aState.n);
      if (isPromiseLike(atomState.v)) {
        addPendingPromiseToDependency(atom2, atomState.v, aState);
      }
      if (mountedMap.has(atom2)) {
        (_a2 = mountedMap.get(a)) == null ? void 0 : _a2.t.add(atom2);
      }
      if (!isSync) {
        mountDependenciesIfAsync();
      }
    }
  };
  let controller;
  let setSelf;
  const options = {
    get signal() {
      if (!controller) {
        controller = new AbortController();
      }
      return controller.signal;
    },
    get setSelf() {
      if ((import.meta.env ? import.meta.env.MODE : void 0) !== "production") {
        console.warn(
          "[DEPRECATED] setSelf is deprecated and will be removed in v3."
        );
      }
      if ((import.meta.env ? import.meta.env.MODE : void 0) !== "production" && !isActuallyWritableAtom(atom2)) {
        console.warn("setSelf function cannot be used with read-only atom");
      }
      if (!setSelf && isActuallyWritableAtom(atom2)) {
        setSelf = (...args) => {
          if ((import.meta.env ? import.meta.env.MODE : void 0) !== "production" && isSync) {
            console.warn("setSelf function cannot be called in sync");
          }
          if (!isSync) {
            try {
              return writeAtomState(store, atom2, ...args);
            } finally {
              recomputeInvalidatedAtoms(store);
              flushCallbacks(store);
            }
          }
        };
      }
      return setSelf;
    }
  };
  const prevEpochNumber = atomState.n;
  const prevInvalidated = invalidatedAtoms.get(atom2) === prevEpochNumber;
  try {
    if ((import.meta.env ? import.meta.env.MODE : void 0) !== "production") {
      storeMutationSet.delete(store);
    }
    const valueOrPromise = atomRead(store, atom2, getter, options);
    if ((import.meta.env ? import.meta.env.MODE : void 0) !== "production" && storeMutationSet.has(store)) {
      console.warn(
        "Detected store mutation during atom read. This is not supported."
      );
    }
    setAtomStateValueOrPromise(store, atom2, valueOrPromise);
    if (isPromiseLike(valueOrPromise)) {
      registerAbortHandler(store, valueOrPromise, () => controller == null ? void 0 : controller.abort());
      const settle = () => {
        pruneDependencies();
        mountDependenciesIfAsync();
      };
      valueOrPromise.then(settle, settle);
    } else {
      pruneDependencies();
    }
    (_a = storeHooks.r) == null ? void 0 : _a.call(storeHooks, atom2);
    return atomState;
  } catch (error) {
    delete atomState.v;
    atomState.e = error;
    ++atomState.n;
    return atomState;
  } finally {
    isSync = false;
    if (atomState.n !== prevEpochNumber && prevInvalidated) {
      invalidatedAtoms.set(atom2, atomState.n);
      changedAtoms.add(atom2);
      (_b = storeHooks.c) == null ? void 0 : _b.call(storeHooks, atom2);
    }
  }
};
var BUILDING_BLOCK_invalidateDependents = (store, atom2) => {
  const buildingBlocks = getInternalBuildingBlocks(store);
  const mountedMap = buildingBlocks[1];
  const invalidatedAtoms = buildingBlocks[2];
  const ensureAtomState = buildingBlocks[11];
  const stack = [atom2];
  while (stack.length) {
    const a = stack.pop();
    const aState = ensureAtomState(store, a);
    for (const d of getMountedOrPendingDependents(a, aState, mountedMap)) {
      const dState = ensureAtomState(store, d);
      if (invalidatedAtoms.get(d) !== dState.n) {
        invalidatedAtoms.set(d, dState.n);
        stack.push(d);
      }
    }
  }
};
var BUILDING_BLOCK_writeAtomState = (store, atom2, ...args) => {
  const buildingBlocks = getInternalBuildingBlocks(store);
  const changedAtoms = buildingBlocks[3];
  const storeHooks = buildingBlocks[6];
  const atomWrite = buildingBlocks[8];
  const ensureAtomState = buildingBlocks[11];
  const flushCallbacks = buildingBlocks[12];
  const recomputeInvalidatedAtoms = buildingBlocks[13];
  const readAtomState = buildingBlocks[14];
  const invalidateDependents = buildingBlocks[15];
  const writeAtomState = buildingBlocks[16];
  const mountDependencies = buildingBlocks[17];
  const setAtomStateValueOrPromise = buildingBlocks[20];
  let isSync = true;
  const getter = (a) => returnAtomValue(readAtomState(store, a));
  const setter = (a, ...args2) => {
    var _a;
    const aState = ensureAtomState(store, a);
    try {
      if (a === atom2) {
        if (!hasInitialValue(a)) {
          throw new Error("atom not writable");
        }
        if ((import.meta.env ? import.meta.env.MODE : void 0) !== "production") {
          storeMutationSet.add(store);
        }
        const prevEpochNumber = aState.n;
        const v = args2[0];
        setAtomStateValueOrPromise(store, a, v);
        mountDependencies(store, a);
        if (prevEpochNumber !== aState.n) {
          changedAtoms.add(a);
          invalidateDependents(store, a);
          (_a = storeHooks.c) == null ? void 0 : _a.call(storeHooks, a);
        }
        return void 0;
      } else {
        return writeAtomState(store, a, ...args2);
      }
    } finally {
      if (!isSync) {
        recomputeInvalidatedAtoms(store);
        flushCallbacks(store);
      }
    }
  };
  try {
    return atomWrite(store, atom2, getter, setter, ...args);
  } finally {
    isSync = false;
  }
};
var BUILDING_BLOCK_mountDependencies = (store, atom2) => {
  var _a;
  const buildingBlocks = getInternalBuildingBlocks(store);
  const mountedMap = buildingBlocks[1];
  const changedAtoms = buildingBlocks[3];
  const storeHooks = buildingBlocks[6];
  const ensureAtomState = buildingBlocks[11];
  const invalidateDependents = buildingBlocks[15];
  const mountAtom = buildingBlocks[18];
  const unmountAtom = buildingBlocks[19];
  const atomState = ensureAtomState(store, atom2);
  const mounted = mountedMap.get(atom2);
  if (mounted) {
    for (const [a, n] of atomState.d) {
      if (!mounted.d.has(a)) {
        const aState = ensureAtomState(store, a);
        const aMounted = mountAtom(store, a);
        aMounted.t.add(atom2);
        mounted.d.add(a);
        if (n !== aState.n) {
          changedAtoms.add(a);
          invalidateDependents(store, a);
          (_a = storeHooks.c) == null ? void 0 : _a.call(storeHooks, a);
        }
      }
    }
    for (const a of mounted.d) {
      if (!atomState.d.has(a)) {
        mounted.d.delete(a);
        const aMounted = unmountAtom(store, a);
        aMounted == null ? void 0 : aMounted.t.delete(atom2);
      }
    }
  }
};
var BUILDING_BLOCK_mountAtom = (store, atom2) => {
  var _a;
  const buildingBlocks = getInternalBuildingBlocks(store);
  const mountedMap = buildingBlocks[1];
  const mountCallbacks = buildingBlocks[4];
  const storeHooks = buildingBlocks[6];
  const atomOnMount = buildingBlocks[10];
  const ensureAtomState = buildingBlocks[11];
  const flushCallbacks = buildingBlocks[12];
  const recomputeInvalidatedAtoms = buildingBlocks[13];
  const readAtomState = buildingBlocks[14];
  const writeAtomState = buildingBlocks[16];
  const mountAtom = buildingBlocks[18];
  const atomState = ensureAtomState(store, atom2);
  let mounted = mountedMap.get(atom2);
  if (!mounted) {
    readAtomState(store, atom2);
    for (const a of atomState.d.keys()) {
      const aMounted = mountAtom(store, a);
      aMounted.t.add(atom2);
    }
    mounted = {
      l: /* @__PURE__ */ new Set(),
      d: new Set(atomState.d.keys()),
      t: /* @__PURE__ */ new Set()
    };
    mountedMap.set(atom2, mounted);
    if (isActuallyWritableAtom(atom2)) {
      const processOnMount = () => {
        let isSync = true;
        const setAtom = (...args) => {
          try {
            return writeAtomState(store, atom2, ...args);
          } finally {
            if (!isSync) {
              recomputeInvalidatedAtoms(store);
              flushCallbacks(store);
            }
          }
        };
        try {
          const onUnmount = atomOnMount(store, atom2, setAtom);
          if (onUnmount) {
            mounted.u = () => {
              isSync = true;
              try {
                onUnmount();
              } finally {
                isSync = false;
              }
            };
          }
        } finally {
          isSync = false;
        }
      };
      mountCallbacks.add(processOnMount);
    }
    (_a = storeHooks.m) == null ? void 0 : _a.call(storeHooks, atom2);
  }
  return mounted;
};
var BUILDING_BLOCK_unmountAtom = (store, atom2) => {
  var _a, _b;
  const buildingBlocks = getInternalBuildingBlocks(store);
  const mountedMap = buildingBlocks[1];
  const unmountCallbacks = buildingBlocks[5];
  const storeHooks = buildingBlocks[6];
  const ensureAtomState = buildingBlocks[11];
  const unmountAtom = buildingBlocks[19];
  const atomState = ensureAtomState(store, atom2);
  let mounted = mountedMap.get(atom2);
  if (!mounted || mounted.l.size) {
    return mounted;
  }
  let isDependent = false;
  for (const a of mounted.t) {
    if ((_a = mountedMap.get(a)) == null ? void 0 : _a.d.has(atom2)) {
      isDependent = true;
      break;
    }
  }
  if (!isDependent) {
    if (mounted.u) {
      unmountCallbacks.add(mounted.u);
    }
    mounted = void 0;
    mountedMap.delete(atom2);
    for (const a of atomState.d.keys()) {
      const aMounted = unmountAtom(store, a);
      aMounted == null ? void 0 : aMounted.t.delete(atom2);
    }
    (_b = storeHooks.u) == null ? void 0 : _b.call(storeHooks, atom2);
    return void 0;
  }
  return mounted;
};
var BUILDING_BLOCK_setAtomStateValueOrPromise = (store, atom2, valueOrPromise) => {
  const buildingBlocks = getInternalBuildingBlocks(store);
  const ensureAtomState = buildingBlocks[11];
  const abortPromise = buildingBlocks[27];
  const atomState = ensureAtomState(store, atom2);
  const hasPrevValue = "v" in atomState;
  const prevValue = atomState.v;
  if (isPromiseLike(valueOrPromise)) {
    for (const a of atomState.d.keys()) {
      addPendingPromiseToDependency(
        atom2,
        valueOrPromise,
        ensureAtomState(store, a)
      );
    }
  }
  atomState.v = valueOrPromise;
  delete atomState.e;
  if (!hasPrevValue || !Object.is(prevValue, atomState.v)) {
    ++atomState.n;
    if (isPromiseLike(prevValue)) {
      abortPromise(store, prevValue);
    }
  }
};
var BUILDING_BLOCK_storeGet = (store, atom2) => {
  const readAtomState = getInternalBuildingBlocks(store)[14];
  return returnAtomValue(readAtomState(store, atom2));
};
var BUILDING_BLOCK_storeSet = (store, atom2, ...args) => {
  const buildingBlocks = getInternalBuildingBlocks(store);
  const changedAtoms = buildingBlocks[3];
  const flushCallbacks = buildingBlocks[12];
  const recomputeInvalidatedAtoms = buildingBlocks[13];
  const writeAtomState = buildingBlocks[16];
  const prevChangedAtomsSize = changedAtoms.size;
  try {
    return writeAtomState(store, atom2, ...args);
  } finally {
    if (changedAtoms.size !== prevChangedAtomsSize) {
      recomputeInvalidatedAtoms(store);
      flushCallbacks(store);
    }
  }
};
var BUILDING_BLOCK_storeSub = (store, atom2, listener) => {
  const buildingBlocks = getInternalBuildingBlocks(store);
  const flushCallbacks = buildingBlocks[12];
  const mountAtom = buildingBlocks[18];
  const unmountAtom = buildingBlocks[19];
  const mounted = mountAtom(store, atom2);
  const listeners = mounted.l;
  listeners.add(listener);
  flushCallbacks(store);
  return () => {
    listeners.delete(listener);
    unmountAtom(store, atom2);
    flushCallbacks(store);
  };
};
var BUILDING_BLOCK_registerAbortHandler = (store, promise, abortHandler) => {
  const buildingBlocks = getInternalBuildingBlocks(store);
  const abortHandlersMap = buildingBlocks[25];
  let abortHandlers = abortHandlersMap.get(promise);
  if (!abortHandlers) {
    abortHandlers = /* @__PURE__ */ new Set();
    abortHandlersMap.set(promise, abortHandlers);
    const cleanup = () => abortHandlersMap.delete(promise);
    promise.then(cleanup, cleanup);
  }
  abortHandlers.add(abortHandler);
};
var BUILDING_BLOCK_abortPromise = (store, promise) => {
  const buildingBlocks = getInternalBuildingBlocks(store);
  const abortHandlersMap = buildingBlocks[25];
  const abortHandlers = abortHandlersMap.get(promise);
  abortHandlers == null ? void 0 : abortHandlers.forEach((fn) => fn());
};
var buildingBlockMap = /* @__PURE__ */ new WeakMap();
var getInternalBuildingBlocks = (store) => {
  const buildingBlocks = buildingBlockMap.get(store);
  if ((import.meta.env ? import.meta.env.MODE : void 0) !== "production" && !buildingBlocks) {
    throw new Error(
      "Store must be created by buildStore to read its building blocks"
    );
  }
  return buildingBlocks;
};
function getBuildingBlocks(store) {
  const buildingBlocks = getInternalBuildingBlocks(store);
  const enhanceBuildingBlocks = buildingBlocks[24];
  if (enhanceBuildingBlocks) {
    return enhanceBuildingBlocks(buildingBlocks);
  }
  return buildingBlocks;
}
function buildStore(...buildArgs) {
  const store = {
    get(atom2) {
      const storeGet = getInternalBuildingBlocks(store)[21];
      return storeGet(store, atom2);
    },
    set(atom2, ...args) {
      const storeSet = getInternalBuildingBlocks(store)[22];
      return storeSet(store, atom2, ...args);
    },
    sub(atom2, listener) {
      const storeSub = getInternalBuildingBlocks(store)[23];
      return storeSub(store, atom2, listener);
    }
  };
  const buildingBlocks = [
    // store state
    /* @__PURE__ */ new WeakMap(),
    // atomStateMap
    /* @__PURE__ */ new WeakMap(),
    // mountedMap
    /* @__PURE__ */ new WeakMap(),
    // invalidatedAtoms
    /* @__PURE__ */ new Set(),
    // changedAtoms
    /* @__PURE__ */ new Set(),
    // mountCallbacks
    /* @__PURE__ */ new Set(),
    // unmountCallbacks
    {},
    // storeHooks
    // atom interceptors
    BUILDING_BLOCK_atomRead,
    BUILDING_BLOCK_atomWrite,
    BUILDING_BLOCK_atomOnInit,
    BUILDING_BLOCK_atomOnMount,
    // building-block functions
    BUILDING_BLOCK_ensureAtomState,
    BUILDING_BLOCK_flushCallbacks,
    BUILDING_BLOCK_recomputeInvalidatedAtoms,
    BUILDING_BLOCK_readAtomState,
    BUILDING_BLOCK_invalidateDependents,
    BUILDING_BLOCK_writeAtomState,
    BUILDING_BLOCK_mountDependencies,
    BUILDING_BLOCK_mountAtom,
    BUILDING_BLOCK_unmountAtom,
    BUILDING_BLOCK_setAtomStateValueOrPromise,
    BUILDING_BLOCK_storeGet,
    BUILDING_BLOCK_storeSet,
    BUILDING_BLOCK_storeSub,
    void 0,
    // abortable promise support
    /* @__PURE__ */ new WeakMap(),
    // abortHandlersMap
    BUILDING_BLOCK_registerAbortHandler,
    BUILDING_BLOCK_abortPromise
  ].map((fn, i) => buildArgs[i] || fn);
  buildingBlockMap.set(store, Object.freeze(buildingBlocks));
  return store;
}

// node_modules/jotai/esm/vanilla.mjs
var keyCount = 0;
function atom(read, write) {
  const key = `atom${++keyCount}`;
  const config = {
    toString() {
      return (import.meta.env ? import.meta.env.MODE : void 0) !== "production" && this.debugLabel ? key + ":" + this.debugLabel : key;
    }
  };
  if (typeof read === "function") {
    config.read = read;
  } else {
    config.init = read;
    config.read = defaultRead;
    config.write = defaultWrite;
  }
  if (write) {
    config.write = write;
  }
  return config;
}
function defaultRead(get) {
  return get(this);
}
function defaultWrite(get, set, arg) {
  return set(
    this,
    typeof arg === "function" ? arg(get(this)) : arg
  );
}
var overriddenCreateStore;
function createStore() {
  if (overriddenCreateStore) {
    return overriddenCreateStore();
  }
  return buildStore();
}
var defaultStore;
function getDefaultStore() {
  if (!defaultStore) {
    defaultStore = createStore();
    if ((import.meta.env ? import.meta.env.MODE : void 0) !== "production") {
      globalThis.__JOTAI_DEFAULT_STORE__ || (globalThis.__JOTAI_DEFAULT_STORE__ = defaultStore);
      if (globalThis.__JOTAI_DEFAULT_STORE__ !== defaultStore) {
        console.warn(
          "Detected multiple Jotai instances. It may cause unexpected behavior with the default store. https://github.com/pmndrs/jotai/discussions/2044"
        );
      }
    }
  }
  return defaultStore;
}

// node_modules/jotai/esm/react.mjs
var import_react = __toESM(require_react(), 1);
var StoreContext = (0, import_react.createContext)(
  void 0
);
function useStore(options) {
  const store = (0, import_react.useContext)(StoreContext);
  return (options == null ? void 0 : options.store) || store || getDefaultStore();
}
function Provider({
  children,
  store
}) {
  const storeRef = (0, import_react.useRef)(null);
  if (store) {
    return (0, import_react.createElement)(StoreContext.Provider, { value: store }, children);
  }
  if (storeRef.current === null) {
    storeRef.current = createStore();
  }
  return (0, import_react.createElement)(
    StoreContext.Provider,
    {
      // TODO: If this is not a false positive, consider using useState instead of useRef like https://github.com/pmndrs/jotai/pull/2771
      // eslint-disable-next-line react-hooks/refs
      value: storeRef.current
    },
    children
  );
}
var isPromiseLike2 = (x) => typeof (x == null ? void 0 : x.then) === "function";
var attachPromiseStatus = (promise) => {
  if (!promise.status) {
    promise.status = "pending";
    promise.then(
      (v) => {
        promise.status = "fulfilled";
        promise.value = v;
      },
      (e) => {
        promise.status = "rejected";
        promise.reason = e;
      }
    );
  }
};
var use = import_react.default.use || // A shim for older React versions
((promise) => {
  if (promise.status === "pending") {
    throw promise;
  } else if (promise.status === "fulfilled") {
    return promise.value;
  } else if (promise.status === "rejected") {
    throw promise.reason;
  } else {
    attachPromiseStatus(promise);
    throw promise;
  }
});
var continuablePromiseMap = /* @__PURE__ */ new WeakMap();
var createContinuablePromise = (store, promise, getValue) => {
  const buildingBlocks = getBuildingBlocks(store);
  const registerAbortHandler = buildingBlocks[26];
  let continuablePromise = continuablePromiseMap.get(promise);
  if (!continuablePromise) {
    continuablePromise = new Promise((resolve, reject) => {
      let curr = promise;
      const onFulfilled = (me) => (v) => {
        if (curr === me) {
          resolve(v);
        }
      };
      const onRejected = (me) => (e) => {
        if (curr === me) {
          reject(e);
        }
      };
      const onAbort = () => {
        try {
          const nextValue = getValue();
          if (isPromiseLike2(nextValue)) {
            continuablePromiseMap.set(nextValue, continuablePromise);
            curr = nextValue;
            nextValue.then(onFulfilled(nextValue), onRejected(nextValue));
            registerAbortHandler(store, nextValue, onAbort);
          } else {
            resolve(nextValue);
          }
        } catch (e) {
          reject(e);
        }
      };
      promise.then(onFulfilled(promise), onRejected(promise));
      registerAbortHandler(store, promise, onAbort);
    });
    continuablePromiseMap.set(promise, continuablePromise);
  }
  return continuablePromise;
};
function useAtomValue(atom2, options) {
  const { delay, unstable_promiseStatus: promiseStatus = !import_react.default.use } = options || {};
  const store = useStore(options);
  const [[valueFromReducer, storeFromReducer, atomFromReducer], rerender] = (0, import_react.useReducer)(
    (prev) => {
      const nextValue = store.get(atom2);
      if (Object.is(prev[0], nextValue) && prev[1] === store && prev[2] === atom2) {
        return prev;
      }
      return [nextValue, store, atom2];
    },
    void 0,
    () => [store.get(atom2), store, atom2]
  );
  let value = valueFromReducer;
  if (storeFromReducer !== store || atomFromReducer !== atom2) {
    rerender();
    value = store.get(atom2);
  }
  (0, import_react.useEffect)(() => {
    const unsub = store.sub(atom2, () => {
      if (promiseStatus) {
        try {
          const value2 = store.get(atom2);
          if (isPromiseLike2(value2)) {
            attachPromiseStatus(
              createContinuablePromise(store, value2, () => store.get(atom2))
            );
          }
        } catch (e) {
        }
      }
      if (typeof delay === "number") {
        setTimeout(rerender, delay);
        return;
      }
      rerender();
    });
    rerender();
    return unsub;
  }, [store, atom2, delay, promiseStatus]);
  (0, import_react.useDebugValue)(value);
  if (isPromiseLike2(value)) {
    const promise = createContinuablePromise(
      store,
      value,
      () => store.get(atom2)
    );
    if (promiseStatus) {
      attachPromiseStatus(promise);
    }
    return use(promise);
  }
  return value;
}
function useSetAtom(atom2, options) {
  const store = useStore(options);
  const setAtom = (0, import_react.useCallback)(
    (...args) => {
      if ((import.meta.env ? import.meta.env.MODE : void 0) !== "production" && !("write" in atom2)) {
        throw new Error("not writable atom");
      }
      return store.set(atom2, ...args);
    },
    [store, atom2]
  );
  return setAtom;
}

// node_modules/jotai/esm/vanilla/utils.mjs
var RESET = /* @__PURE__ */ Symbol(
  (import.meta.env ? import.meta.env.MODE : void 0) !== "production" ? "RESET" : ""
);
var didWarnDeprecation$1 = false;
function atomFamily(initializeAtom, areEqual) {
  if ((import.meta.env ? import.meta.env.MODE : void 0) !== "production" && !didWarnDeprecation$1) {
    console.warn(
      "[DEPRECATED] atomFamily is deprecated and will be removed in v3. Please use the `jotai-family` package instead: https://github.com/jotaijs/jotai-family"
    );
    didWarnDeprecation$1 = true;
  }
  let shouldRemove = null;
  const atoms = /* @__PURE__ */ new Map();
  const listeners = /* @__PURE__ */ new Set();
  const createAtom = (param) => {
    let item;
    if (areEqual === void 0) {
      item = atoms.get(param);
    } else {
      for (const [key, value] of atoms) {
        if (areEqual(key, param)) {
          item = value;
          break;
        }
      }
    }
    if (item !== void 0) {
      if (shouldRemove == null ? void 0 : shouldRemove(item[1], param)) {
        createAtom.remove(param);
      } else {
        return item[0];
      }
    }
    const newAtom = initializeAtom(param);
    atoms.set(param, [newAtom, Date.now()]);
    notifyListeners("CREATE", param, newAtom);
    return newAtom;
  };
  const notifyListeners = (type, param, atom2) => {
    for (const listener of listeners) {
      listener({ type, param, atom: atom2 });
    }
  };
  createAtom.unstable_listen = (callback) => {
    listeners.add(callback);
    return () => {
      listeners.delete(callback);
    };
  };
  createAtom.getParams = () => atoms.keys();
  createAtom.remove = (param) => {
    if (areEqual === void 0) {
      if (!atoms.has(param)) return;
      const [atom2] = atoms.get(param);
      atoms.delete(param);
      notifyListeners("REMOVE", param, atom2);
    } else {
      for (const [key, [atom2]] of atoms) {
        if (areEqual(key, param)) {
          atoms.delete(key);
          notifyListeners("REMOVE", key, atom2);
          break;
        }
      }
    }
  };
  createAtom.setShouldRemove = (fn) => {
    shouldRemove = fn;
    if (!shouldRemove) return;
    for (const [key, [atom2, createdAt]] of atoms) {
      if (shouldRemove(createdAt, key)) {
        atoms.delete(key);
        notifyListeners("REMOVE", key, atom2);
      }
    }
  };
  return createAtom;
}
var isPromiseLike$2 = (x) => typeof (x == null ? void 0 : x.then) === "function";
function createJSONStorage(getStringStorage = () => {
  try {
    return window.localStorage;
  } catch (e) {
    if ((import.meta.env ? import.meta.env.MODE : void 0) !== "production") {
      if (typeof window !== "undefined") {
        console.warn(e);
      }
    }
    return void 0;
  }
}, options) {
  var _a;
  let lastStr;
  let lastValue;
  const storage = {
    getItem: (key, initialValue) => {
      var _a2, _b;
      const parse = (str2) => {
        str2 = str2 || "";
        if (lastStr !== str2) {
          try {
            lastValue = JSON.parse(str2, options == null ? void 0 : options.reviver);
          } catch (e) {
            return initialValue;
          }
          lastStr = str2;
        }
        return lastValue;
      };
      const str = (_b = (_a2 = getStringStorage()) == null ? void 0 : _a2.getItem(key)) != null ? _b : null;
      if (isPromiseLike$2(str)) {
        return str.then(parse);
      }
      return parse(str);
    },
    setItem: (key, newValue) => {
      var _a2;
      return (_a2 = getStringStorage()) == null ? void 0 : _a2.setItem(
        key,
        JSON.stringify(newValue, options == null ? void 0 : options.replacer)
      );
    },
    removeItem: (key) => {
      var _a2;
      return (_a2 = getStringStorage()) == null ? void 0 : _a2.removeItem(key);
    }
  };
  const createHandleSubscribe = (subscriber2) => (key, callback, initialValue) => subscriber2(key, (v) => {
    let newValue;
    try {
      newValue = JSON.parse(v || "");
    } catch (e) {
      newValue = initialValue;
    }
    callback(newValue);
  });
  let subscriber;
  try {
    subscriber = (_a = getStringStorage()) == null ? void 0 : _a.subscribe;
  } catch (e) {
  }
  if (!subscriber && typeof window !== "undefined" && typeof window.addEventListener === "function" && window.Storage) {
    subscriber = (key, callback) => {
      if (!(getStringStorage() instanceof window.Storage)) {
        return () => {
        };
      }
      const storageEventCallback = (e) => {
        if (e.storageArea === getStringStorage() && e.key === key) {
          callback(e.newValue);
        }
      };
      window.addEventListener("storage", storageEventCallback);
      return () => {
        window.removeEventListener("storage", storageEventCallback);
      };
    };
  }
  if (subscriber) {
    storage.subscribe = createHandleSubscribe(subscriber);
  }
  return storage;
}
var defaultStorage = createJSONStorage();

// node_modules/jotai/esm/react/utils.mjs
var import_react2 = __toESM(require_react(), 1);
function useAtomCallback(callback, options) {
  const anAtom = (0, import_react2.useMemo)(
    () => atom(null, (get, set, ...args) => callback(get, set, ...args)),
    [callback]
  );
  return useSetAtom(anAtom, options);
}

// node_modules/@pipecat-ai/client-react/dist/index.module.js
var $ad20387e24e513d4$exports = {};
$ad20387e24e513d4$exports = JSON.parse(`{"name":"@pipecat-ai/client-react","version":"1.1.0","license":"BSD-2-Clause","main":"dist/index.js","module":"dist/index.module.js","types":"dist/index.d.ts","source":"src/index.ts","repository":{"type":"git","url":"git+https://github.com/pipecat-ai/pipecat-client-web.git"},"files":["dist","package.json","README.md"],"scripts":{"build":"parcel build --no-cache","dev":"parcel watch","lint":"eslint . --report-unused-disable-directives --max-warnings 0 --ignore-pattern 'dist/'"},"devDependencies":{"@pipecat-ai/client-js":"*","@types/react":"^18.3.3","@types/react-dom":"^18.3.0","@typescript-eslint/eslint-plugin":"^8.32.0","eslint":"^9.11.1","eslint-config-prettier":"^9.1.0","eslint-plugin-react-hooks":"^5.2.0","eslint-plugin-simple-import-sort":"^12.1.1","parcel":"^2.12.0","react":"^18.3.1","react-dom":"^18.3.1","typescript":"^5.2.2"},"peerDependencies":{"@pipecat-ai/client-js":"*","react":">=18","react-dom":">=18"},"dependencies":{"jotai":"^2.9.0"}}`);
var $33f16f27e37c90bc$export$fe23d0ef95286467 = (0, import_react4.createContext)({
  on: () => {
  },
  off: () => {
  }
});
var $824ea64b5f757259$export$33a6ac53b8f02625 = (event, handler) => {
  const { on, off } = (0, import_react4.useContext)((0, $33f16f27e37c90bc$export$fe23d0ef95286467));
  (0, import_react4.useEffect)(() => {
    on(event, handler);
    return () => {
      off(event, handler);
    };
  }, [
    event,
    handler,
    on,
    off
  ]);
};
var $a90aa7250c094218$export$d6bdcccacef16204 = (0, import_react4.createContext)({
  enableCam: () => {
    throw new Error("PipecatClientCamStateContext: enableCam() called outside of provider");
  },
  isCamEnabled: false
});
var $a90aa7250c094218$export$802b42df0e0d8153 = (0, import_react4.createContext)({
  enableMic: () => {
    throw new Error("PipecatClientMicStateContext: enableMic() called outside of provider");
  },
  isMicEnabled: false
});
var $a90aa7250c094218$export$8e633e67c760098b = (0, import_react4.createContext)({
  enableScreenShare: () => {
    throw new Error("PipecatClientScreenShareStateContext: enableScreenShare() called outside of provider");
  },
  isScreenShareEnabled: false
});
var $a90aa7250c094218$export$db79fdf85ddd6b65 = (0, import_react4.createContext)("disconnected");
var $a90aa7250c094218$export$4777554fda61c378 = ({ children }) => {
  const client = (0, $034a56e7ee1b7bed$export$777fa8498be78705)();
  const [isCamEnabled, setIsCamEnabled] = (0, import_react4.useState)(false);
  const [isMicEnabled, setIsMicEnabled] = (0, import_react4.useState)(false);
  const [isScreenShareEnabled, setIsScreenShareEnabled] = (0, import_react4.useState)(false);
  const [transportState, setTransportState] = (0, import_react4.useState)("disconnected");
  (0, $824ea64b5f757259$export$33a6ac53b8f02625)((0, $c1b4da4af54f4fa1$export$6b4624d233c61fcb).TransportStateChanged, (state) => {
    setTransportState(state);
    if (state === "initialized" && client) {
      setIsCamEnabled(client.isCamEnabled ?? false);
      setIsMicEnabled(client.isMicEnabled ?? false);
      setIsScreenShareEnabled(client.isSharingScreen ?? false);
    }
  });
  const enableCam = (0, import_react4.useCallback)((enabled) => {
    setIsCamEnabled(enabled);
    client?.enableCam?.(enabled);
  }, [
    client
  ]);
  const enableMic = (0, import_react4.useCallback)((enabled) => {
    setIsMicEnabled(enabled);
    client?.enableMic?.(enabled);
  }, [
    client
  ]);
  const enableScreenShare = (0, import_react4.useCallback)((enabled) => {
    client?.enableScreenShare?.(enabled);
  }, [
    client
  ]);
  (0, $824ea64b5f757259$export$33a6ac53b8f02625)((0, $c1b4da4af54f4fa1$export$6b4624d233c61fcb).ScreenTrackStarted, (_track, participant) => {
    if (participant?.local) setIsScreenShareEnabled(true);
  });
  (0, $824ea64b5f757259$export$33a6ac53b8f02625)((0, $c1b4da4af54f4fa1$export$6b4624d233c61fcb).ScreenTrackStopped, (_track, participant) => {
    if (participant?.local) setIsScreenShareEnabled(false);
  });
  return (0, import_jsx_runtime.jsx)($a90aa7250c094218$export$db79fdf85ddd6b65.Provider, {
    value: transportState,
    children: (0, import_jsx_runtime.jsx)($a90aa7250c094218$export$d6bdcccacef16204.Provider, {
      value: {
        enableCam,
        isCamEnabled
      },
      children: (0, import_jsx_runtime.jsx)($a90aa7250c094218$export$802b42df0e0d8153.Provider, {
        value: {
          enableMic,
          isMicEnabled
        },
        children: (0, import_jsx_runtime.jsx)($a90aa7250c094218$export$8e633e67c760098b.Provider, {
          value: {
            enableScreenShare,
            isScreenShareEnabled
          },
          children
        })
      })
    })
  });
};
var $d2e362c5a07ee3c5$var$defaultStore = (0, createStore)();
var $d2e362c5a07ee3c5$export$67f6d73bc6cd7bb1 = (0, import_react4.createContext)({});
var $d2e362c5a07ee3c5$export$bb43666ced7a20d0 = ({ children, client, jotaiStore = $d2e362c5a07ee3c5$var$defaultStore }) => {
  (0, import_react4.useEffect)(() => {
    (0, $c0d10c4690969999$export$e4036f9b8ddb7379)({
      library: (0, $ad20387e24e513d4$exports.name),
      library_version: (0, $ad20387e24e513d4$exports.version)
    });
  }, []);
  const eventHandlersMap = (0, import_react4.useRef)({});
  (0, import_react4.useEffect)(() => {
    if (!client) return;
    const allEvents = Object.values((0, $c1b4da4af54f4fa1$export$6b4624d233c61fcb)).filter((value) => isNaN(Number(value)));
    const allHandlers = {};
    allEvents.forEach((event) => {
      const handler = (...payload) => {
        const handlers = eventHandlersMap.current[event];
        if (!handlers) return;
        handlers.forEach((h) => {
          h(...payload);
        });
      };
      allHandlers[event] = handler;
      client.on(event, handler);
    });
    return () => {
      allEvents.forEach((event) => {
        client.off(event, allHandlers[event]);
      });
    };
  }, [
    client
  ]);
  const on = (0, import_react4.useCallback)((event, handler) => {
    if (!eventHandlersMap.current[event]) eventHandlersMap.current[event] = /* @__PURE__ */ new Set();
    eventHandlersMap.current[event].add(handler);
  }, []);
  const off = (0, import_react4.useCallback)((event, handler) => {
    eventHandlersMap.current[event]?.delete(handler);
  }, []);
  return (0, import_jsx_runtime.jsx)((0, Provider), {
    store: jotaiStore,
    children: (0, import_jsx_runtime.jsx)($d2e362c5a07ee3c5$export$67f6d73bc6cd7bb1.Provider, {
      value: {
        client
      },
      children: (0, import_jsx_runtime.jsx)((0, $33f16f27e37c90bc$export$fe23d0ef95286467).Provider, {
        value: {
          on,
          off
        },
        children: (0, import_jsx_runtime.jsx)((0, $a90aa7250c094218$export$4777554fda61c378), {
          children
        })
      })
    })
  });
};
$d2e362c5a07ee3c5$export$bb43666ced7a20d0.displayName = "PipecatClientProvider";
var $034a56e7ee1b7bed$export$777fa8498be78705 = () => {
  const { client } = (0, import_react4.useContext)((0, $d2e362c5a07ee3c5$export$67f6d73bc6cd7bb1));
  return client;
};
var $4b4b9099cdb5b776$var$localAudioTrackAtom = (0, atom)(null);
var $4b4b9099cdb5b776$var$localVideoTrackAtom = (0, atom)(null);
var $4b4b9099cdb5b776$var$localScreenAudioTrackAtom = (0, atom)(null);
var $4b4b9099cdb5b776$var$localScreenVideoTrackAtom = (0, atom)(null);
var $4b4b9099cdb5b776$var$botAudioTrackAtom = (0, atom)(null);
var $4b4b9099cdb5b776$var$botVideoTrackAtom = (0, atom)(null);
var $4b4b9099cdb5b776$var$trackAtom = (0, atomFamily)(({ local, trackType }) => {
  if (local) switch (trackType) {
    case "audio":
      return $4b4b9099cdb5b776$var$localAudioTrackAtom;
    case "screenAudio":
      return $4b4b9099cdb5b776$var$localScreenAudioTrackAtom;
    case "screenVideo":
      return $4b4b9099cdb5b776$var$localScreenVideoTrackAtom;
    case "video":
      return $4b4b9099cdb5b776$var$localVideoTrackAtom;
  }
  return trackType === "audio" ? $4b4b9099cdb5b776$var$botAudioTrackAtom : $4b4b9099cdb5b776$var$botVideoTrackAtom;
});
var $4b4b9099cdb5b776$export$9813dcd2d0c26814 = (trackType, participantType) => {
  const client = (0, $034a56e7ee1b7bed$export$777fa8498be78705)();
  const track = (0, useAtomValue)($4b4b9099cdb5b776$var$trackAtom({
    local: participantType === "local",
    trackType
  }));
  const updateTrack = (0, useAtomCallback)((0, import_react4.useCallback)((get, set, track2, trackType2, local) => {
    const atom2 = $4b4b9099cdb5b776$var$trackAtom({
      local,
      trackType: trackType2
    });
    const oldTrack = get(atom2);
    if (oldTrack?.id === track2.id) return;
    set(atom2, track2);
  }, []));
  (0, $824ea64b5f757259$export$33a6ac53b8f02625)((0, $c1b4da4af54f4fa1$export$6b4624d233c61fcb).TrackStarted, (0, import_react4.useCallback)((track2, participant) => {
    updateTrack(track2, track2.kind, Boolean(participant?.local));
  }, [
    updateTrack
  ]));
  (0, $824ea64b5f757259$export$33a6ac53b8f02625)((0, $c1b4da4af54f4fa1$export$6b4624d233c61fcb).ScreenTrackStarted, (0, import_react4.useCallback)((track2, participant) => {
    const trackType2 = track2.kind === "audio" ? "screenAudio" : "screenVideo";
    updateTrack(track2, trackType2, Boolean(participant?.local));
  }, [
    updateTrack
  ]));
  (0, import_react4.useEffect)(() => {
    if (!client) return;
    const tracks = client.tracks();
    const track2 = tracks?.[participantType]?.[trackType];
    if (!track2) return;
    updateTrack(track2, trackType, participantType === "local");
  }, [
    participantType,
    trackType,
    updateTrack,
    client
  ]);
  return track;
};
var $f209aa7ddb77dcb2$export$b52250cb73ff4de1 = () => {
  const botAudioRef = (0, import_react4.useRef)(null);
  const botAudioTrack = (0, $4b4b9099cdb5b776$export$9813dcd2d0c26814)("audio", "bot");
  (0, import_react4.useEffect)(() => {
    if (!botAudioRef.current || !botAudioTrack) return;
    if (botAudioRef.current.srcObject) {
      const oldTrack = botAudioRef.current.srcObject.getAudioTracks()[0];
      if (oldTrack.id === botAudioTrack.id) return;
    }
    botAudioRef.current.srcObject = new MediaStream([
      botAudioTrack
    ]);
  }, [
    botAudioTrack
  ]);
  (0, $824ea64b5f757259$export$33a6ac53b8f02625)((0, $c1b4da4af54f4fa1$export$6b4624d233c61fcb).SpeakerUpdated, (0, import_react4.useCallback)((speaker) => {
    if (!botAudioRef.current) return;
    if (typeof botAudioRef.current.setSinkId !== "function") return;
    botAudioRef.current.setSinkId(speaker.deviceId);
  }, []));
  return (0, import_jsx_runtime.jsx)((0, import_jsx_runtime.Fragment), {
    children: (0, import_jsx_runtime.jsx)("audio", {
      ref: botAudioRef,
      autoPlay: true
    })
  });
};
$f209aa7ddb77dcb2$export$b52250cb73ff4de1.displayName = "PipecatClientAudio";
var $e76ee2f021b54325$export$3ea2601427f0430f = () => (0, import_react4.useContext)((0, $a90aa7250c094218$export$d6bdcccacef16204));
var $7cb2ce2c4cbfb401$export$dc9a029eeca8213f = ({ onCamEnabledChanged, disabled = false, children }) => {
  const { isCamEnabled, enableCam } = (0, $e76ee2f021b54325$export$3ea2601427f0430f)();
  const handleToggleCam = (0, import_react4.useCallback)(() => {
    if (disabled) return;
    const newEnabledState = !isCamEnabled;
    enableCam(newEnabledState);
    onCamEnabledChanged?.(newEnabledState);
  }, [
    disabled,
    enableCam,
    isCamEnabled,
    onCamEnabledChanged
  ]);
  return (0, import_jsx_runtime.jsx)((0, import_jsx_runtime.Fragment), {
    children: children({
      isCamEnabled,
      onClick: handleToggleCam,
      disabled
    })
  });
};
var $5905c001b0dc8d25$export$388e706586309ef0 = () => (0, import_react4.useContext)((0, $a90aa7250c094218$export$802b42df0e0d8153));
var $2984fdfc31bad375$export$bc8133b69ff660a2 = ({ onMicEnabledChanged, disabled = false, children }) => {
  const { enableMic, isMicEnabled } = (0, $5905c001b0dc8d25$export$388e706586309ef0)();
  const handleToggleMic = (0, import_react4.useCallback)(() => {
    if (disabled) return;
    const newEnabledState = !isMicEnabled;
    enableMic(newEnabledState);
    onMicEnabledChanged?.(newEnabledState);
  }, [
    disabled,
    enableMic,
    isMicEnabled,
    onMicEnabledChanged
  ]);
  return (0, import_jsx_runtime.jsx)((0, import_jsx_runtime.Fragment), {
    children: children({
      isMicEnabled,
      onClick: handleToggleMic,
      disabled
    })
  });
};
var $d39c0bc3744ea030$export$be63b19bd7f7d4f5 = () => (0, import_react4.useContext)((0, $a90aa7250c094218$export$8e633e67c760098b));
var $d6dc7e80e6e976a0$export$93764714dfab3a46 = ({ onScreenShareEnabledChanged, disabled = false, children }) => {
  const { enableScreenShare, isScreenShareEnabled } = (0, $d39c0bc3744ea030$export$be63b19bd7f7d4f5)();
  const handleToggleScreenShare = (0, import_react4.useCallback)(() => {
    if (disabled) return;
    enableScreenShare(!isScreenShareEnabled);
  }, [
    disabled,
    enableScreenShare,
    isScreenShareEnabled
  ]);
  (0, import_react4.useEffect)(() => {
    onScreenShareEnabledChanged?.(isScreenShareEnabled);
  }, [
    isScreenShareEnabled,
    onScreenShareEnabledChanged
  ]);
  return (0, import_jsx_runtime.jsx)((0, import_jsx_runtime.Fragment), {
    children: children({
      isScreenShareEnabled,
      onClick: handleToggleScreenShare,
      disabled
    })
  });
};
function $9098519210cf34e2$var$useMergedRef(...refs) {
  return (0, import_react4.useCallback)(
    (element) => {
      for (let i = 0; i < refs.length; i++) {
        const ref = refs[i];
        if (typeof ref === "function") ref(element);
        else if (ref && typeof ref === "object") ref.current = element;
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    refs
  );
}
var $9098519210cf34e2$export$2e2bcd8739ae039 = $9098519210cf34e2$var$useMergedRef;
var $6a65deb8615a2ad7$export$85974db6d0cc43b3 = (0, import_react4.forwardRef)(function VoiceClientVideo({ participant = "local", fit = "contain", mirror, onResize, style = {}, trackType = "video", ...props }, ref) {
  const videoTrack = (0, $4b4b9099cdb5b776$export$9813dcd2d0c26814)(trackType, participant);
  const videoEl = (0, import_react4.useRef)(null);
  const videoRef = (0, $9098519210cf34e2$export$2e2bcd8739ae039)(videoEl, ref);
  (0, import_react4.useEffect)(function setupVideoEvents() {
    const video = videoEl.current;
    if (!video) return;
    const playVideo = () => {
      const promise = video.play();
      if (promise !== void 0) promise.then(() => {
        video.controls = false;
      }).catch((error) => {
        video.controls = true;
        console.warn("Failed to play video", error);
      });
    };
    const handleCanPlay = () => {
      if (!video.paused) return;
      playVideo();
    };
    const handleEnterPIP = () => {
      video.style.transform = "scale(1)";
    };
    const handleLeavePIP = () => {
      video.style.transform = "";
      setTimeout(() => {
        if (video.paused) playVideo();
      }, 100);
    };
    const handleVisibilityChange = () => {
      if (document.visibilityState === "hidden") return;
      if (!video.paused) return;
      playVideo();
    };
    video.addEventListener("canplay", handleCanPlay);
    video.addEventListener("enterpictureinpicture", handleEnterPIP);
    video.addEventListener("leavepictureinpicture", handleLeavePIP);
    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      video.removeEventListener("canplay", handleCanPlay);
      video.removeEventListener("enterpictureinpicture", handleEnterPIP);
      video.removeEventListener("leavepictureinpicture", handleLeavePIP);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);
  (0, import_react4.useEffect)(function updateSrcObject() {
    const video = videoEl.current;
    if (!video || !videoTrack) return;
    video.srcObject = new MediaStream([
      videoTrack
    ]);
    video.load();
    return () => {
      video.srcObject = null;
      video.load();
    };
  }, [
    videoTrack,
    videoTrack?.id
  ]);
  (0, import_react4.useEffect)(function reportVideoDimensions() {
    const video = videoEl.current;
    if (!onResize || !video) return;
    let frame;
    function handleResize() {
      if (frame) cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const video2 = videoEl.current;
        if (!video2 || document.hidden) return;
        const videoWidth = video2.videoWidth;
        const videoHeight = video2.videoHeight;
        if (videoWidth && videoHeight) onResize?.({
          aspectRatio: videoWidth / videoHeight,
          height: videoHeight,
          width: videoWidth
        });
      });
    }
    handleResize();
    video.addEventListener("loadedmetadata", handleResize);
    video.addEventListener("resize", handleResize);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      video.removeEventListener("loadedmetadata", handleResize);
      video.removeEventListener("resize", handleResize);
    };
  }, [
    onResize
  ]);
  return (0, import_jsx_runtime.jsx)("video", {
    autoPlay: true,
    muted: true,
    playsInline: true,
    ref: videoRef,
    style: {
      objectFit: fit,
      transform: mirror ? "scale(-1, 1)" : "",
      ...style
    },
    ...props
  });
});
$6a65deb8615a2ad7$export$85974db6d0cc43b3.displayName = "PipecatClientVideo";
var $f934f1f8b10aaf19$var$availableMicsAtom = (0, atom)([]);
var $f934f1f8b10aaf19$var$availableCamsAtom = (0, atom)([]);
var $f934f1f8b10aaf19$var$availableSpeakersAtom = (0, atom)([]);
var $f934f1f8b10aaf19$var$selectedMicAtom = (0, atom)({});
var $f934f1f8b10aaf19$var$selectedCamAtom = (0, atom)({});
var $f934f1f8b10aaf19$var$selectedSpeakerAtom = (0, atom)({});
var $f934f1f8b10aaf19$export$642bc4d2d2a376f1 = () => {
  const client = (0, $034a56e7ee1b7bed$export$777fa8498be78705)();
  const availableCams = (0, useAtomValue)($f934f1f8b10aaf19$var$availableCamsAtom);
  const availableMics = (0, useAtomValue)($f934f1f8b10aaf19$var$availableMicsAtom);
  const availableSpeakers = (0, useAtomValue)($f934f1f8b10aaf19$var$availableSpeakersAtom);
  const selectedCam = (0, useAtomValue)($f934f1f8b10aaf19$var$selectedCamAtom);
  const selectedMic = (0, useAtomValue)($f934f1f8b10aaf19$var$selectedMicAtom);
  const selectedSpeaker = (0, useAtomValue)($f934f1f8b10aaf19$var$selectedSpeakerAtom);
  const initDevices = (0, useAtomCallback)((0, import_react4.useCallback)(async (_get, set) => {
    if (!client) return;
    const availableCams2 = await client.getAllCams();
    const availableMics2 = await client.getAllMics();
    const availableSpeakers2 = await client.getAllSpeakers();
    set($f934f1f8b10aaf19$var$availableCamsAtom, availableCams2);
    set($f934f1f8b10aaf19$var$availableMicsAtom, availableMics2);
    set($f934f1f8b10aaf19$var$availableSpeakersAtom, availableSpeakers2);
    set($f934f1f8b10aaf19$var$selectedCamAtom, client.selectedCam);
    set($f934f1f8b10aaf19$var$selectedMicAtom, client.selectedMic);
    set($f934f1f8b10aaf19$var$selectedSpeakerAtom, client.selectedSpeaker);
  }, [
    client
  ]));
  (0, import_react4.useEffect)(() => {
    initDevices();
  }, [
    initDevices
  ]);
  (0, $824ea64b5f757259$export$33a6ac53b8f02625)((0, $c1b4da4af54f4fa1$export$6b4624d233c61fcb).AvailableCamsUpdated, (0, useAtomCallback)((0, import_react4.useCallback)((_get, set, cams) => {
    set($f934f1f8b10aaf19$var$availableCamsAtom, cams);
  }, [])));
  (0, $824ea64b5f757259$export$33a6ac53b8f02625)((0, $c1b4da4af54f4fa1$export$6b4624d233c61fcb).AvailableMicsUpdated, (0, useAtomCallback)((0, import_react4.useCallback)((_get, set, mics) => {
    set($f934f1f8b10aaf19$var$availableMicsAtom, mics);
  }, [])));
  (0, $824ea64b5f757259$export$33a6ac53b8f02625)((0, $c1b4da4af54f4fa1$export$6b4624d233c61fcb).AvailableSpeakersUpdated, (0, useAtomCallback)((0, import_react4.useCallback)((_get, set, speakers) => {
    set($f934f1f8b10aaf19$var$availableSpeakersAtom, speakers);
  }, [])));
  (0, $824ea64b5f757259$export$33a6ac53b8f02625)((0, $c1b4da4af54f4fa1$export$6b4624d233c61fcb).CamUpdated, (0, useAtomCallback)((0, import_react4.useCallback)((_get, set, cam) => {
    set($f934f1f8b10aaf19$var$selectedCamAtom, cam);
  }, [])));
  (0, $824ea64b5f757259$export$33a6ac53b8f02625)((0, $c1b4da4af54f4fa1$export$6b4624d233c61fcb).MicUpdated, (0, useAtomCallback)((0, import_react4.useCallback)((_get, set, mic) => {
    set($f934f1f8b10aaf19$var$selectedMicAtom, mic);
  }, [])));
  (0, $824ea64b5f757259$export$33a6ac53b8f02625)((0, $c1b4da4af54f4fa1$export$6b4624d233c61fcb).SpeakerUpdated, (0, useAtomCallback)((0, import_react4.useCallback)((_get, set, speaker) => {
    set($f934f1f8b10aaf19$var$selectedSpeakerAtom, speaker);
  }, [])));
  const updateCam = (0, import_react4.useCallback)((id) => {
    client?.updateCam(id);
  }, [
    client
  ]);
  const updateMic = (0, import_react4.useCallback)((id) => {
    client?.updateMic(id);
  }, [
    client
  ]);
  const updateSpeaker = (0, import_react4.useCallback)((id) => {
    client?.updateSpeaker(id);
  }, [
    client
  ]);
  return {
    availableCams,
    availableMics,
    availableSpeakers,
    selectedCam,
    selectedMic,
    selectedSpeaker,
    updateCam,
    updateMic,
    updateSpeaker
  };
};
var $33f3729bbe9f09df$export$30aee278309a867b = () => (0, import_react4.useContext)((0, $a90aa7250c094218$export$db79fdf85ddd6b65));
var $993a744193844a95$export$59bf27bd43679db6 = (0, import_react4.default).memo(({ backgroundColor = "transparent", barColor = "black", barCount = 5, barGap = 12, barLineCap = "round", barMaxHeight = 120, barOrigin = "center", barWidth = 30, participantType }) => {
  const canvasRef = (0, import_react4.useRef)(null);
  const track = (0, $4b4b9099cdb5b776$export$9813dcd2d0c26814)("audio", participantType);
  (0, import_react4.useEffect)(() => {
    if (!canvasRef.current) return;
    const canvasWidth = barCount * barWidth + (barCount - 1) * barGap;
    const canvasHeight = barMaxHeight;
    const canvas = canvasRef.current;
    const scaleFactor = 2;
    const resizeCanvas = () => {
      canvas.width = canvasWidth * scaleFactor;
      canvas.height = canvasHeight * scaleFactor;
      canvas.style.width = `${canvasWidth}px`;
      canvas.style.height = `${canvasHeight}px`;
      canvasCtx.lineCap = barLineCap;
      canvasCtx.scale(scaleFactor, scaleFactor);
    };
    const canvasCtx = canvas.getContext("2d");
    resizeCanvas();
    if (!track) return;
    const audioContext = new AudioContext();
    const source = audioContext.createMediaStreamSource(new MediaStream([
      track
    ]));
    const analyser = audioContext.createAnalyser();
    analyser.fftSize = 1024;
    source.connect(analyser);
    const frequencyData = new Uint8Array(analyser.frequencyBinCount);
    canvasCtx.lineCap = barLineCap;
    const bands = Array.from({
      length: barCount
    }, (_, i) => {
      const minFreq = barCount > 20 ? 200 : 80;
      const maxFreq = 1e4;
      const melMin = 2595 * Math.log10(1 + minFreq / 700);
      const melMax = 2595 * Math.log10(1 + maxFreq / 700);
      const melStep = (melMax - melMin) / barCount;
      const melValue = melMin + i * melStep;
      const startFreq = 700 * (Math.pow(10, melValue / 2595) - 1);
      const endFreq = 700 * (Math.pow(10, (melValue + melStep) / 2595) - 1);
      return {
        startFreq,
        endFreq,
        smoothValue: 0
      };
    });
    const getFrequencyBinIndex = (frequency) => {
      const nyquist = audioContext.sampleRate / 2;
      return Math.round(frequency / nyquist * (analyser.frequencyBinCount - 1));
    };
    function drawSpectrum() {
      analyser.getByteFrequencyData(frequencyData);
      canvasCtx.clearRect(0, 0, canvas.width / scaleFactor, canvas.height / scaleFactor);
      canvasCtx.fillStyle = backgroundColor;
      canvasCtx.fillRect(0, 0, canvas.width / scaleFactor, canvas.height / scaleFactor);
      let isActive = false;
      const totalBarsWidth = bands.length * barWidth + (bands.length - 1) * barGap;
      const startX = (canvas.width / scaleFactor - totalBarsWidth) / 2;
      const adjustedCircleRadius = barWidth / 2;
      bands.forEach((band, i) => {
        const startIndex = getFrequencyBinIndex(band.startFreq);
        const endIndex = getFrequencyBinIndex(band.endFreq);
        const bandData = frequencyData.slice(startIndex, endIndex);
        const bandValue = bandData.reduce((acc, val) => acc + val, 0) / bandData.length;
        const smoothingFactor = 0.2;
        if (bandValue < 1) band.smoothValue = Math.max(band.smoothValue - smoothingFactor * 5, 0);
        else {
          band.smoothValue = band.smoothValue + (bandValue - band.smoothValue) * smoothingFactor;
          isActive = true;
        }
        const x = startX + i * (barWidth + barGap);
        const minHeight = 0;
        const barHeight = Math.max(minHeight, Math.min(band.smoothValue / 255 * barMaxHeight, barMaxHeight));
        let yTop, yBottom;
        const canvasHeight2 = canvas.height / scaleFactor;
        switch (barOrigin) {
          case "top":
            yTop = adjustedCircleRadius;
            yBottom = Math.min(adjustedCircleRadius + barHeight, canvasHeight2 - adjustedCircleRadius);
            break;
          case "bottom":
            yBottom = canvasHeight2 - adjustedCircleRadius;
            yTop = Math.max(yBottom - barHeight, adjustedCircleRadius);
            break;
          case "center":
          default:
            yTop = Math.max(canvasHeight2 / 2 - barHeight / 2, adjustedCircleRadius);
            yBottom = Math.min(canvasHeight2 / 2 + barHeight / 2, canvasHeight2 - adjustedCircleRadius);
            break;
        }
        if (band.smoothValue > 0) {
          canvasCtx.beginPath();
          canvasCtx.moveTo(x + barWidth / 2, yTop);
          canvasCtx.lineTo(x + barWidth / 2, yBottom);
          canvasCtx.lineWidth = barWidth;
          canvasCtx.strokeStyle = barColor;
          canvasCtx.stroke();
        } else drawInactiveCircle(adjustedCircleRadius, barColor, x, yTop);
      });
      if (!isActive) drawInactiveCircles(adjustedCircleRadius, barColor);
      requestAnimationFrame(drawSpectrum);
    }
    function drawInactiveCircle(circleRadius, color, x, y) {
      switch (barLineCap) {
        case "square":
          canvasCtx.fillStyle = color;
          canvasCtx.fillRect(x + barWidth / 2 - circleRadius, y - circleRadius, circleRadius * 2, circleRadius * 2);
          break;
        case "round":
        default:
          canvasCtx.beginPath();
          canvasCtx.arc(x + barWidth / 2, y, circleRadius, 0, 2 * Math.PI);
          canvasCtx.fillStyle = color;
          canvasCtx.fill();
          canvasCtx.closePath();
          break;
      }
    }
    function drawInactiveCircles(circleRadius, color) {
      const totalBarsWidth = bands.length * barWidth + (bands.length - 1) * barGap;
      const startX = (canvas.width / scaleFactor - totalBarsWidth) / 2;
      const canvasHeight2 = canvas.height / scaleFactor;
      let y;
      switch (barOrigin) {
        case "top":
          y = circleRadius;
          break;
        case "bottom":
          y = canvasHeight2 - circleRadius;
          break;
        case "center":
        default:
          y = canvasHeight2 / 2;
          break;
      }
      bands.forEach((_, i) => {
        const x = startX + i * (barWidth + barGap);
        drawInactiveCircle(circleRadius, color, x, y);
      });
    }
    drawSpectrum();
    window.addEventListener("resize", resizeCanvas);
    return () => {
      audioContext.close();
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [
    backgroundColor,
    barColor,
    barCount,
    barGap,
    barLineCap,
    barMaxHeight,
    barOrigin,
    barWidth,
    track
  ]);
  return (0, import_jsx_runtime.jsx)("canvas", {
    ref: canvasRef,
    style: {
      display: "block",
      width: "100%",
      height: "100%"
    }
  });
});
$993a744193844a95$export$59bf27bd43679db6.displayName = "VoiceVisualizer";
export {
  $f209aa7ddb77dcb2$export$b52250cb73ff4de1 as PipecatClientAudio,
  $7cb2ce2c4cbfb401$export$dc9a029eeca8213f as PipecatClientCamToggle,
  $2984fdfc31bad375$export$bc8133b69ff660a2 as PipecatClientMicToggle,
  $d2e362c5a07ee3c5$export$bb43666ced7a20d0 as PipecatClientProvider,
  $d6dc7e80e6e976a0$export$93764714dfab3a46 as PipecatClientScreenShareToggle,
  $6a65deb8615a2ad7$export$85974db6d0cc43b3 as PipecatClientVideo,
  $993a744193844a95$export$59bf27bd43679db6 as VoiceVisualizer,
  $034a56e7ee1b7bed$export$777fa8498be78705 as usePipecatClient,
  $e76ee2f021b54325$export$3ea2601427f0430f as usePipecatClientCamControl,
  $f934f1f8b10aaf19$export$642bc4d2d2a376f1 as usePipecatClientMediaDevices,
  $4b4b9099cdb5b776$export$9813dcd2d0c26814 as usePipecatClientMediaTrack,
  $5905c001b0dc8d25$export$388e706586309ef0 as usePipecatClientMicControl,
  $d39c0bc3744ea030$export$be63b19bd7f7d4f5 as usePipecatClientScreenShareControl,
  $33f3729bbe9f09df$export$30aee278309a867b as usePipecatClientTransportState,
  $824ea64b5f757259$export$33a6ac53b8f02625 as useRTVIClientEvent
};
//# sourceMappingURL=@pipecat-ai_client-react.js.map
