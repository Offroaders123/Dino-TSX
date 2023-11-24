import "./epic.js";
import DataAPIView from "./DataAPIView.js";

import type { JSX } from "jsx/jsx-runtime";
import type Epic from "./epic.js";

const myDiv = <div></div> as HTMLDivElement;

// @ts-expect-error
myDiv.Not_a_property;

const myWebComponent = <x-epic onclick={console.log}></x-epic> as Epic;

// console.log(myWebComponent.fart);

document.body.append(myWebComponent);

const fragment = (
  <>
    <div class="soy you" part="gg">
      <button class="hi" style="fill: red"/>
    </div>
  </>
) as unknown as JSX.Fragment;
// console.log(fragment);

function Functionality(){
  return (
    <button style="background: red;">Heya!</button>
  );
}

const functionality = <Functionality/>;
// console.log(functionality);

document.body.append(functionality);

document.body.append(<DataAPIView/>);