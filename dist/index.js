"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// index.ts
var index_exports = {};
__export(index_exports, {
  groupBy: () => groupBy
});
module.exports = __toCommonJS(index_exports);
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  groupBy
});
