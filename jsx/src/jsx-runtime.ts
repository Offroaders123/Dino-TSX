export namespace JSX {
  export type Children = Element | Element[];
  export type Element = globalThis.Element;
  export type Fragment = Node[];

  export interface IntrinsicElements extends IntrinsicElementsTagNameMap {}

  export type IntrinsicElementsTagNameMap = {
    [K in keyof HTMLElementTagNameMap]: Partial<Omit<HTMLElementTagNameMap[K],IntrinsicElementsOmittedProperties>>;
  }

  export type IntrinsicElementsOmittedProperties =
    /// Object
    /// EventTarget
    | "addEventListener"
    | "dispatchEvent"
    | "removeEventListener"
    /// Node
    | "nodeType"
    | "nodeName"
    | "baseURI"
    | "isConnected"
    | "ownerDocument"
    | "parentNode"
    | "parentElement"
    | "childNodes"
    | "firstChild"
    | "lastChild"
    | "previousSibling"
    | "nextSibling"
    | "nodeValue"
    | "textContent"
    | "ELEMENT_NODE"
    | "ATTRIBUTE_NODE"
    | "TEXT_NODE"
    | "CDATA_SECTION_NODE"
    | "ENTITY_REFERENCE_NODE"
    | "ENTITY_NODE"
    | "PROCESSING_INSTRUCTION_NODE"
    | "COMMENT_NODE"
    | "DOCUMENT_NODE"
    | "DOCUMENT_TYPE_NODE"
    | "DOCUMENT_FRAGMENT_NODE"
    | "NOTATION_NODE"
    | "DOCUMENT_POSITION_DISCONNECTED"
    | "DOCUMENT_POSITION_PRECEDING"
    | "DOCUMENT_POSITION_FOLLOWING"
    | "DOCUMENT_POSITION_CONTAINS"
    | "DOCUMENT_POSITION_CONTAINED_BY"
    | "DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC"
    | "appendChild"
    | "cloneNode"
    | "compareDocumentPosition"
    | "contains"
    | "getRootNode"
    | "hasChildNodes"
    | "insertBefore"
    | "isDefaultNamespace"
    | "isEqualNode"
    | "isSameNode"
    | "lookupNamespaceURI"
    | "lookupPrefix"
    | "normalize"
    | "removeChild"
    | "replaceChild"
    /// Element
    | "namespaceURI"
    | "prefix"
    | "localName"
    | "tagName"
    // | "id"
    // | "className"
    | "classList"
    // | "slot"
    | "attributes"
    | "shadowRoot"
    // | "part"
    | "assignedSlot"
    | "innerHTML"
    | "outerHTML"
    | "scrollTop"
    | "scrollLeft"
    | "scrollWidth"
    | "scrollHeight"
    | "clientTop"
    | "clientLeft"
    | "clientWidth"
    | "clientHeight"
    // | "onbeforecopy"
    // | "onbeforecut"
    // | "onbeforepaste"
    // | "onsearch"
    // | "elementTiming"
    // | "onfullscreenchange"
    // | "onfullscreenerror"
    // | "onwebkitfullscreenchange"
    // | "onwebkitfullscreenerror"
    // | "role"
    // | "ariaAtomic"
    // | "ariaAutoComplete"
    // | "ariaBusy"
    // | "ariaBrailleLabel"
    // | "ariaBrailleRoleDescription"
    // | "ariaChecked"
    // | "ariaColCount"
    // | "ariaColIndex"
    // | "ariaColSpan"
    // | "ariaCurrent"
    // | "ariaDescription"
    // | "ariaDisabled"
    // | "ariaExpanded"
    // | "ariaHasPopup"
    // | "ariaHidden"
    // | "ariaInvalid"
    // | "ariaKeyShortcuts"
    // | "ariaLabel"
    // | "ariaLevel"
    // | "ariaLive"
    // | "ariaModal"
    // | "ariaMultiLine"
    // | "ariaMultiSelectable"
    // | "ariaOrientation"
    // | "ariaPlaceholder"
    // | "ariaPosInSet"
    // | "ariaPressed"
    // | "ariaReadOnly"
    // | "ariaRelevant"
    // | "ariaRequired"
    // | "ariaRoleDescription"
    // | "ariaRowCount"
    // | "ariaRowIndex"
    // | "ariaRowSpan"
    // | "ariaSelected"
    // | "ariaSetSize"
    // | "ariaSort"
    // | "ariaValueMax"
    // | "ariaValueMin"
    // | "ariaValueNow"
    // | "ariaValueText"
    | "children"
    | "firstElementChild"
    | "lastElementChild"
    | "childElementCount"
    | "previousElementSibling"
    | "nextElementSibling"
    | "after"
    | "animate"
    | "append"
    | "attachShadow"
    | "before"
    | "closest"
    | "computedStyleMap"
    | "getAttribute"
    | "getAttributeNS"
    | "getAttributeNames"
    | "getAttributeNode"
    | "getAttributeNodeNS"
    | "getBoundingClientRect"
    | "getClientRects"
    | "getElementsByClassName"
    | "getElementsByTagName"
    | "getElementsByTagNameNS"
    | "getInnerHTML"
    | "hasAttribute"
    | "hasAttributeNS"
    | "hasAttributes"
    | "hasPointerCapture"
    | "insertAdjacentElement"
    | "insertAdjacentHTML"
    | "insertAdjacentText"
    | "matches"
    | "prepend"
    | "querySelector"
    | "querySelectorAll"
    | "releasePointerCapture"
    | "remove"
    | "removeAttribute"
    | "removeAttributeNS"
    | "removeAttributeNode"
    | "replaceChildren"
    | "replaceWith"
    | "requestFullscreen"
    | "requestPointerLock"
    | "scroll"
    | "scrollBy"
    | "scrollIntoView"
    | "scrollIntoViewIfNeeded"
    | "scrollTo"
    | "setAttribute"
    | "setAttributeNS"
    | "setAttributeNode"
    | "setAttributeNodeNS"
    | "setPointerCapture"
    | "toggleAttribute"
    | "webkitMatchesSelector"
    | "webkitRequestFullScreen"
    | "webkitRequestFullscreen"
    | "checkVisibility"
    | "getAnimations"
    /// HTMLElement
    // | "title"
    // | "lang"
    // | "translate"
    // | "dir"
    // | "hidden"
    // | "accessKey"
    // | "draggable"
    // | "spellcheck"
    // | "autocapitalize"
    // | "contentEditable"
    // | "enterKeyHint"
    | "isContentEditable"
    // | "inputMode"
    | "virtualKeyboardPolicy"
    | "offsetParent"
    | "offsetTop"
    | "offsetLeft"
    | "offsetWidth"
    | "offsetHeight"
    // | "popover"
    | "innerText"
    | "outerText"
    // | "onbeforexrselect"
    // | "onabort"
    // | "onbeforeinput"
    // | "onbeforetoggle"
    // | "onblur"
    // | "oncancel"
    // | "oncanplay"
    // | "oncanplaythrough"
    // | "onchange"
    // | "onclick"
    // | "onclose"
    // | "oncontextlost"
    // | "oncontextmenu"
    // | "oncontextrestored"
    // | "oncuechange"
    // | "ondblclick"
    // | "ondrag"
    // | "ondragend"
    // | "ondragenter"
    // | "ondragleave"
    // | "ondragover"
    // | "ondragstart"
    // | "ondrop"
    // | "ondurationchange"
    // | "onemptied"
    // | "onended"
    // | "onerror"
    // | "onfocus"
    // | "onformdata"
    // | "oninput"
    // | "oninvalid"
    // | "onkeydown"
    // | "onkeypress"
    // | "onkeyup"
    // | "onload"
    // | "onloadeddata"
    // | "onloadedmetadata"
    // | "onloadstart"
    // | "onmousedown"
    // | "onmouseenter"
    // | "onmouseleave"
    // | "onmousemove"
    // | "onmouseout"
    // | "onmouseover"
    // | "onmouseup"
    // | "onmousewheel"
    // | "onpause"
    // | "onplay"
    // | "onplaying"
    // | "onprogress"
    // | "onratechange"
    // | "onreset"
    // | "onresize"
    // | "onscroll"
    // | "onsecuritypolicyviolation"
    // | "onseeked"
    // | "onseeking"
    // | "onselect"
    // | "onslotchange"
    // | "onstalled"
    // | "onsubmit"
    // | "onsuspend"
    // | "ontimeupdate"
    // | "ontoggle"
    // | "onvolumechange"
    // | "onwaiting"
    // | "onwebkitanimationend"
    // | "onwebkitanimationiteration"
    // | "onwebkitanimationstart"
    // | "onwebkittransitionend"
    // | "onwheel"
    // | "onauxclick"
    // | "ongotpointercapture"
    // | "onlostpointercapture"
    // | "onpointerdown"
    // | "onpointermove"
    // | "onpointerrawupdate"
    // | "onpointerup"
    // | "onpointercancel"
    // | "onpointerover"
    // | "onpointerout"
    // | "onpointerenter"
    // | "onpointerleave"
    // | "onselectstart"
    // | "onselectionchange"
    // | "onanimationend"
    // | "onanimationiteration"
    // | "onanimationstart"
    // | "ontransitionrun"
    // | "ontransitionstart"
    // | "ontransitionend"
    // | "ontransitioncancel"
    // | "oncopy"
    // | "oncut"
    // | "onpaste"
    | "dataset"
    // | "nonce"
    // | "autofocus"
    // | "tabIndex"
    // | "style"
    | "attributeStyleMap"
    | "attachInternals"
    | "blur"
    | "click"
    | "focus"
    | "hidePopover"
    | "showPopover"
    | "togglePopover"
    // | "inert"
    // | "oncontentvisibilityautostatechange"
    // | "onscrollend"
    // | "onbeforematch"
  ;
}

export function jsx<K extends keyof JSX.IntrinsicElements>(tagName: K, attributes?: JSX.IntrinsicElementsTagNameMap[K] & { children?: Node[]; } | null): JSX.IntrinsicElementsTagNameMap[K] {
  const element = document.createElement(tagName);
  const children: Node[] = attributes?.children ?? [] as Node[];
  delete attributes?.children;
  console.log(tagName,attributes,children);

  if (attributes !== null && attributes !== undefined){
    Object.assign(element,attributes);
  }

  element.append(...(Array.isArray(children) ? children : [children]));

  return element;
}