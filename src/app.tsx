import "./epic.js";

import type Epic from "./epic.js";

const myDiv = <div></div> as HTMLDivElement;

// @ts-expect-error
myDiv.Not_a_property;

const myWebComponent = <x-epic onclick={console.log}></x-epic> as Epic;

console.log(myWebComponent.fart);

document.body.append(myWebComponent);

console.log(
  <>
    <div class="soy you" part="gg">
      <button class="hi" style="fill: red"/>
    </div>
  </>
);