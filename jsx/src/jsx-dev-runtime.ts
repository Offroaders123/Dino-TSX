export * from "./jsx-runtime.js";
import { JSX, jsx } from "./jsx-runtime.js";

export async function jsxDEV<K extends keyof JSX.IntrinsicElements>(tagName: K, attributes: JSX.IntrinsicElementsTagNameMap[K] & { children?: Node[]; } | null, _key: unknown, _isStaticChildren: boolean, _source: { fileName: string; lineNumber: number; columnNumber: number; }, _self: JSX.IntrinsicElementsTagNameMap[K]): Promise<JSX.IntrinsicElementsTagNameMap[K]> {
  // console.log(tagName,attributes,_key,_isStaticChildren,_source,_self);
  return jsx(tagName,attributes);
}