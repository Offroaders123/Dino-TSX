export * from "./jsx-runtime.js";
import { JSX, jsx } from "./jsx-runtime.js";

export function jsxDEV<K extends keyof JSX.IntrinsicElements>(tagName: K, { attributes, children }: { attributes?: JSX.IntrinsicElementsTagNameMap[K] | null; children?: Node[]; }, _isStaticChildren: boolean, _source: object, _self: unknown): JSX.IntrinsicElementsTagNameMap[K] {
  return jsx(tagName,attributes,...children ?? []);
}