// https://stackoverflow.com/questions/41557309/typescript-jsx-without-react
// https://github.com/ConnorJamesLow/texsaur

/** @jsx createElement */

declare namespace JSX {
  type Element<K extends keyof HTMLElementTagNameMap> = HTMLElementTagNameMap[K];

  type IntrinsicElements = {
    [K in keyof HTMLElementTagNameMap]: {
      [k: string]: any;
    }
  };
  
  type Component = (properties?: { [key: string]: any; }, children?: Node[]) => Node;
}

function createElement<K extends keyof HTMLElementTagNameMap>(tag: K, properties?: { [key: string]: any; } | null, ...children: Node[]): HTMLElementTagNameMap[K] {
  const element = document.createElement(tag);

  Object.assign(element,properties);

  element.append(...children);

  return element;
}

const thingo = <div></div>;

export {};