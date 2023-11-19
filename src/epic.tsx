export default class Epic extends HTMLElement {
  override readonly shadowRoot = this.attachShadow({ mode: "open" });

  constructor() {
    super();
    const demo = <div>This is an epic component, don't you think?</div>;
    console.log(demo);
    this.shadowRoot.append(
      demo
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