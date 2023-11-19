export namespace JSX {
  export type Children = Element | Element[];
  export type Element = globalThis.Element;
  export type Fragment = Node[];

  export interface IntrinsicElements extends IntrinsicElementsTagNameMap {}

  export type IntrinsicElementsTagNameMap = {
    [K in keyof HTMLElementTagNameMap]: Partial<HTMLElementTagNameMap[K]>;
  }
}

export function jsx<K extends keyof JSX.IntrinsicElements>(tagName: K, attributes?: JSX.IntrinsicElementsTagNameMap[K] | null, ...children: Node[]): JSX.IntrinsicElementsTagNameMap[K] {
  const element = document.createElement(tagName);
  console.log(children);

  if (attributes !== null && attributes !== undefined){
    Object.assign(element,attributes);
  }

  element.append(...children);

  return element;
}