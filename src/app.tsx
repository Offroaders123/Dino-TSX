import jsx from "texsaur";
import "./text-editor.js";

const mySVG = <svg>
  <use href=""/>
</svg> as SVGElement;

document.body.append(
  <text-editor class="custom-css-class"/>,
  mySVG
);