import "./epic.js";

import type { JSX } from "jsx/jsx-runtime";
import type Epic from "./epic.js";

const myDiv = await <div></div> as HTMLDivElement;

// @ts-expect-error
myDiv.Not_a_property;

const myWebComponent = await <x-epic onclick={console.log}></x-epic> as Epic;

console.log(myWebComponent.fart);

document.body.append(myWebComponent);

const fragment = (
  <>
    <div class="soy you" part="gg">
      <button class="hi" style="fill: red"/>
    </div>
  </>
) as unknown as JSX.Fragment;
console.log(fragment);

async function Functionality(){
  return (
    <button style="background: red;">Heya!</button>
  );
}

const functionality = await <Functionality/>;
console.log(functionality);

document.body.append(functionality);