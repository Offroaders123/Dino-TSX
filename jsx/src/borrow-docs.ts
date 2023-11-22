export type gg = 5;

/** {@link gg} */
export type aa = "noice";

export type noice = {
  /** {@link HTMLElementTagNameMap[K]} */
  [K in keyof HTMLElementTagNameMap]: Partial<HTMLElementTagNameMap[K]>;
};

declare const gg: noice["a"];