/** @jsx createElement */

declare global {
  namespace JSX {
    type Element<K extends keyof HTMLElementTagNameMap> = HTMLElementTagNameMap[K];
    type IntrinsicElements = {
      [Element in keyof HTMLElementTagNameMap]: {
        [Property in keyof HTMLElementTagNameMap[Element]]?: HTMLElementTagNameMap[Element][Property];
      };
    };
  }
}

const test = <textarea rows={5}></textarea>;
test.rows;

const thingo = createElement("textarea",{ rows: 5 });
thingo.rows;

export function createElement<K extends keyof HTMLElementTagNameMap>(tagName: K, attributes: JSX.IntrinsicElements[K] | null, ...children: (string | Node)[]): HTMLElementTagNameMap[K] {
  const element = document.createElement(tagName);
  
  if (attributes !== null){
    Object.assign(element,attributes);
  }

  element.append(...children);

  return element;
}

export {};