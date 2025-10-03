// store.js
export const store = (() => {
  const state = { user: { name: "Гость" }, counter: 0 };
  const subs = new Set();
  function set(partial){ Object.assign(state, partial); subs.forEach(fn => fn({...state})); }
  function subscribe(fn){ subs.add(fn); return () => subs.delete(fn); }
  return { get: () => ({...state}), set, subscribe };
})();
