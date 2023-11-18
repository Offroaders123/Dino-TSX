import * as JSX from "./index.js";

export default class Epic extends HTMLElement {
  override readonly shadowRoot = this.attachShadow({ mode: "open" });

  constructor() {
    super();
    this.shadowRoot.append(
      <div>This is an epic component, don't you think?</div>
    );
  }

  get fart() {
    return "lol" as const;
  }
}

customElements.define("x-epic",Epic);

declare global {
  interface HTMLElementTagNameMap {
    "x-epic": Epic;
  }
}