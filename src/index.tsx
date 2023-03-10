declare global {
  namespace JSX {
    type Children = Element | Element[];
    type Element = globalThis.Element;
    type Fragment = Node[];

    interface IntrinsicElements extends IntrinsicElementsTagNameMap {}

    type IntrinsicElementsTagNameMap = {
      [K in keyof HTMLElementTagNameMap]: Partial<HTMLElementTagNameMap[K]>;
    }
  }
}

export function createElement<K extends keyof JSX.IntrinsicElements>(tagName: K, attributes?: JSX.IntrinsicElementsTagNameMap[K] | null, ...children: Node[]): JSX.IntrinsicElementsTagNameMap[K] {
  const element = document.createElement(tagName);

  if (attributes !== null && attributes !== undefined){
    Object.assign(element,attributes);
  }

  element.append(...children);

  return element;
}