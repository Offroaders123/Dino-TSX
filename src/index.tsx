declare global {
  namespace JSX {
    type Children = Element | Element[];
    type Element = globalThis.Element;
    type Fragment = Node[];

    interface IntrinsicElements extends IntrinsicElementsTagNameMap {}
    
    type IntrinsicElementsTagNameMap = {
      [K in keyof HTMLElementTagNameMap]: Partial<HTMLElementTagNameMap[K]>;
    } & {
      [K in keyof SVGElementTagNameMap]: Partial<SVGElementTagNameMap[K]>;
    };
  }
}

export function createElement<K extends keyof HTMLElementTagNameMap>(tagName: K, attributes?: Partial<HTMLElementTagNameMap[K]> | null, ...children: Node[]): HTMLElementTagNameMap[K] {
  const element = document.createElement(tagName);

  if (attributes !== null && attributes !== undefined){
    Object.assign(element,attributes);
  }

  element.append(...children);

  return element;
}

export class Epic extends HTMLElement {
  get fart() {
    return "lol" as const;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "x-epic": Epic;
  }
}

const myDiv = <div></div> as HTMLDivElement;

// @ts-expect-error
myDiv.Not_a_property;

const myWebComponent = <x-epic></x-epic> as Epic;

console.log(myWebComponent.fart);

const mySVG = <svg>
  <symbol id="myIcon">
    <rect />
  </symbol>
</svg> as SVGSVGElement;

export {};