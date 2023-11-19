import "./epic.js";

import type Epic from "./epic.js";

const myDiv = <div></div> as HTMLDivElement;

// @ts-expect-error
myDiv.Not_a_property;

const myWebComponent = <x-epic></x-epic> as Epic;

console.log(myWebComponent.fart);

document.body.append(myWebComponent);