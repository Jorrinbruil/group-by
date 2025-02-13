// index.ts
function groupBy(items, keyOrGetter) {
  const map = /* @__PURE__ */ new Map();
  for (const item of items) {
    const key = typeof keyOrGetter === "function" ? keyOrGetter(item) : item[keyOrGetter];
    if (!map.has(key)) {
      map.set(key, []);
    }
    map.get(key).push(item);
  }
  return map;
}
export {
  groupBy
};
