export namespace JSX {
  export type Children = Element | Element[];
  export type Element = globalThis.Element;
  export type Fragment = Node[];

  export interface IntrinsicElements extends IntrinsicElementsTagNameMap {}

  export type IntrinsicElementsTagNameMap = {
    [K in keyof HTMLElementTagNameMap]: Partial<HTMLElementTagNameMap[K]>;
  }
}

export function jsx<K extends keyof JSX.IntrinsicElements>(tagName: K, attributes?: JSX.IntrinsicElementsTagNameMap[K] & { children?: Node[]; } | null): JSX.IntrinsicElementsTagNameMap[K] {
  const element = document.createElement(tagName);
  const children: Node[] = attributes?.children ?? [] as Node[];
  delete attributes?.children;
  console.log(tagName,attributes,children);

  if (attributes !== null && attributes !== undefined){
    Object.assign(element,attributes);
  }

  element.append(...(Array.isArray(children) ? children : [children]));

  return element;
}