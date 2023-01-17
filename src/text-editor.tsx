import { createElement } from "./index.js";

const stylesheet = new CSSStyleSheet();
const styles = fetch(new URL("../src/style.css",import.meta.url));

styles.then(async response => {
  const result = await response.text();
  stylesheet.replace(result);
});

export class TextEditor extends HTMLElement {
  #lineCount = 0;
  #value = this.textContent ?? "";

  #gutter = (
    <ol
      part="gutter"

      onmousedown={event => {
        const index = [...this.#gutter.children].indexOf(event.target as Element);
        const lineIndex = this.lineIndices[index];
        this.#textarea.setSelectionRange(lineIndex,lineIndex);
        this.blur();
      }}

      ondblclick={event => {
        const indices = this.lineIndices;
        const line = [...this.#gutter.children].indexOf(event.target as Element);
        const lineStartIndex = indices[line];
        const lineEndIndex = (line + 1 in indices) ? indices[line + 1] : this.#textarea.value.length;
        this.#textarea.setSelectionRange(lineStartIndex,lineEndIndex);
      }}
    />
  ) as HTMLOListElement;

  #textarea = (
    <textarea
      part="textarea"
      wrap="off"
      spellcheck={false}
      autocomplete="off"
      autocapitalize="none"
      autocorrect="off"
      value={this.#value}

      oninput={() => this.refreshGutter()}
      onscroll={() => this.refreshScroll()}
    />
  ) as HTMLTextAreaElement;

  declare readonly shadowRoot: ShadowRoot;

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.adoptedStyleSheets = [stylesheet];
  }

  connectedCallback() {
    new ResizeObserver(() => {
      this.#gutter.style.height = `${this.#textarea.offsetHeight}px`;
    }).observe(this.#textarea);

    this.shadowRoot.append(this.#gutter,this.#textarea);
    this.#textarea.setSelectionRange(0,0);
    this.refreshGutter();
  }

  getLineCount() {
    return (this.#textarea.value.match(/\n/g) || []).length + 1;
  }

  getStringIndices(string: string) {
    const matches = [...this.#textarea.value.matchAll(new RegExp(string,"g"))];
    const result = matches.map(match => match.index!);
    return result;
  }

  refreshGutter() {
    const previous = this.#lineCount;
    const next = this.getLineCount();
    const difference = next - previous;
    if (difference === 0) return;

    if (difference > 0){
      const line = document.createElement("li");
      line.part.add("line-number");

      const lines = Array.from({ length: difference },() => /** @type { HTMLLIElement } */ (line.cloneNode()));
      this.#gutter.append(...lines);
    } else {
      for (let i = 0; i < Math.abs(difference); i++){
        this.#gutter.lastChild?.remove();
      }
    }

    this.#lineCount = next;
  }

  refreshScroll() {
    const { offsetHeight, clientHeight, scrollHeight, scrollTop } = this.#textarea;

    const scrollBottom = clientHeight + scrollTop;
    const scrollBarHeight = offsetHeight - clientHeight;
    const overScrollY = (scrollTop < 0 || scrollBottom > scrollHeight) ? (scrollTop < 0) ? scrollTop : scrollBottom - scrollHeight : 0;

    if (scrollBarHeight > 0){
      this.#gutter.style.setProperty("--overflow-offset-y",`${scrollBarHeight}px`);
    } else {
      this.#gutter.style.removeProperty("--overflow-offset-y");
    }

    if (overScrollY === 0){
      this.#gutter.style.removeProperty("--overscroll-top");
      this.#gutter.style.removeProperty("--overscroll-bottom");
    } else if (overScrollY < 0){
      this.#gutter.style.setProperty("--overscroll-top",`${Math.abs(overScrollY)}px`);
    } else {
      this.#gutter.style.setProperty("--overscroll-bottom",`${overScrollY}px`);
    }

    if (this.#gutter.scrollTop !== scrollTop){
      this.#gutter.scrollTop = scrollTop;
    }
  }

  get lineIndices() {
    const indices = this.getStringIndices("\n");
    for (const index in indices){
      indices[index]++;
    }
    indices.unshift(0);
    return indices;
  }
}

window.customElements.define("text-editor",TextEditor);

declare global {
  interface HTMLElementTagNameMap {
    "text-editor": TextEditor;
  }
}

export default TextEditor;