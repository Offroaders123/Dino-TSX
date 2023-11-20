export * from "./jsx-runtime.js";
import { JSX, jsx } from "./jsx-runtime.js";

export function jsxDEV<K extends keyof JSX.IntrinsicElements>(tagName: K, attributes: JSX.IntrinsicElementsTagNameMap[K] & { children?: Node[]; } | null, _key: unknown, _isStaticChildren: boolean, _source: { fileName: string; lineNumber: number; columnNumber: number; }, _self: JSX.IntrinsicElementsTagNameMap[K]): JSX.IntrinsicElementsTagNameMap[K] {
  const children: Node[] = attributes?.children ?? [] as Node[];
  delete attributes?.children;
  console.log(tagName,attributes,_key,_isStaticChildren,_source,_self);
  return jsx(tagName,attributes,...(Array.isArray(children) ? children : [children]));
}