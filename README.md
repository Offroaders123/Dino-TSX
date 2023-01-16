# Dino-TSX

A test project to use JSX outside of React!

This feels like a weird idea, but I think it could be very powerful if setup right. I mostly want to look into it because I think it could work nicely for templating HTML for Web Components prettier. Rather than using an `innerHTML` string, or direct `document.createElement()` and property assignment properties, why not use JSX for that? I could reduce JSX down to `document.createElement()`, `Object.assign()`, and `Node.append()` calls, and the JSX would simply return the resulting `HTMLElement` kind of class back.

I think this works great with Web Components, since you simply just define the tag name on the `HTMLElementTagNameMap` interface, then you can use the tag name directly in your JSX, and you get type definitions for it, and everything!

You may be asking, why use JSX if you're going for Web Components then? Doesn't that defeat the purpose?

And I think, well, it depends. If I'm already using TypeScript, meaning that I'll have to transpile down to JavaScript again either way, might as well take advantage of what you can do when that is your setup. So, rather than transpiling to a bundled framework output, wny not transpile to vanilla DOM calls that Web Components are built with? Then you get the nice DX that comes with things like React, but you transpile back down to native Web Component code.

Not sure if this has anything gravity to work towards/look into, but it's a neat idea to look into before I probably eventually just start using React like everyone else XD

I really like the idea of this working directly with ES Modules in the browser too.