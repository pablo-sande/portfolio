import 'os';
import 'util';
import 'tty';
/* empty css                            */
import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, j as renderComponent, k as renderSlot, l as renderHead, i as addAttribute, s as spreadAttributes, u as unescapeHTML, n as Fragment$1 } from '../astro_BtCTiNGV.mjs';
import { ApolloClient, InMemoryCache } from '@apollo/client/core/index.js';
import graph from 'graphql-tag';
/* empty css                          */
import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { useState } from 'react';

const $$Astro$a = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col items-center justify-center p-8 relative h-28 z-10"> <a href="#top" class="text-white">Back to top</a> <div class="flex flex-row items-center justify-between w-full max-w-md space-x-2 mt-3"> <p class="text-center text-white">Pablo Sande © 2024</p> <p class="text-center text-white">Some rights reserved</p> </div> </div>`;
}, "C:/Users/sande/Documents/GitHub/portfolio/src/components/Footer.astro", void 0);

const MobileHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "box h-5 w-8 text-white z-30 m-auto",
        onClick: () => {
          setIsOpen(!isOpen);
          setIsActive(!isActive);
        },
        children: /* @__PURE__ */ jsxs("div", { className: "btn " + (isActive ? "active" : "not-active"), children: [
          /* @__PURE__ */ jsx("span", { className: "menu-icon" }),
          /* @__PURE__ */ jsx("span", { className: "menu-icon" }),
          /* @__PURE__ */ jsx("span", { className: "menu-icon" })
        ] })
      }
    ),
    isOpen && /* @__PURE__ */ jsxs("div", { className: "fixed left-0 h-full top-0 w-full flex flex-col justify-center items-center z-10 menu-in", children: [
      /* @__PURE__ */ jsx("div", { className: "fixed left-0 -z-10 h-full top-0 w-full", children: /* @__PURE__ */ jsx("div", { className: "absolute h-full top-0 w-full z-[-2] bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" }) }),
      /* @__PURE__ */ jsx("div", { className: "text-white text-3xl", children: "Menu" }),
      /* @__PURE__ */ jsxs("nav", { className: "flex flex-col items-center justify-center space-3", children: [
        /* @__PURE__ */ jsx(
          "a",
          {
            href: "/#about",
            className: "text-white text-xl mt-6",
            onClick: () => setIsOpen(false),
            children: "About Me"
          }
        ),
        /* @__PURE__ */ jsx(
          "a",
          {
            href: "/#experience",
            className: "text-white text-xl mt-6",
            onClick: () => setIsOpen(false),
            children: "Experience"
          }
        ),
        /* @__PURE__ */ jsx(
          "a",
          {
            href: "/skills",
            className: "text-white text-xl mt-6",
            onClick: () => setIsOpen(false),
            children: "Skills"
          }
        ),
        /* @__PURE__ */ jsx(
          "a",
          {
            href: "/contact",
            className: "text-white text-xl mt-6",
            onClick: () => setIsOpen(false),
            children: "Contact"
          }
        ),
        /* @__PURE__ */ jsx(
          "a",
          {
            href: "cv.pdf",
            className: "text-white text-xl mt-6",
            onClick: () => setIsOpen(false),
            download: "PabloSande2024",
            children: "Download CV"
          }
        )
      ] })
    ] })
  ] });
};

const $$Astro$9 = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`${maybeRenderHead()}<header id="header" class="flex items-center flex-row justify-between h-28 w-full p-8 z-20 top-0 fixed transition-all duration-500" data-astro-cid-3ef6ksr2> <div class="flex" data-astro-cid-3ef6ksr2> <a href="/" class="type-in text-4xl font-bold text-white" data-astro-cid-3ef6ksr2>Pablo Sande</a> </div> <nav class="lg:flex items-center space-x-4 hidden" data-astro-cid-3ef6ksr2> <a href="/#about" class="text-white hover:text-powercyan" data-astro-cid-3ef6ksr2>About Me</a> <a href="/#experience" class="text-white hover:text-powercyan" data-astro-cid-3ef6ksr2>Experience</a> <a href="/skills" class="text-white hover:text-powercyan" data-astro-cid-3ef6ksr2>Skills</a> <!-- <a href="/site" class="text-white hover:text-powercyan"
            >About this site</a
        > --> <a href="/contact" class="text-white hover:text-powercyan" data-astro-cid-3ef6ksr2>Contact</a> <a href="cv.pdf" class="text-white hover:text-powercyan" download="PabloSande2024" data-astro-cid-3ef6ksr2>Download CV</a> </nav> <div class="lg:hidden flex" data-astro-cid-3ef6ksr2> ${renderComponent($$result, "MobileHeader", MobileHeader, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Users/sande/Documents/GitHub/portfolio/src/components/MobileHeader", "client:component-export": "MobileHeader", "data-astro-cid-3ef6ksr2": true })} </div> </header> `;
}, "C:/Users/sande/Documents/GitHub/portfolio/src/components/Header.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$8 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate(_a || (_a = __template([`<html lang="en" class="bg-black scroll-smooth"> <head><meta charset="UTF-8"><meta name="description" content="Pablo Sande's Portfolio"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Anta&display=swap" rel="stylesheet"><meta name="generator"`, "><title>", "</title>", '</head> <body class="anta-regular text-white"> <div class="fixed left-0 top-0 -z-10 h-full w-full"> <div class="relative h-full w-full bg-slate-950"> <div class="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div> </div> </div> <div id="top" class="flex flex-col h-screen justify-between pt-28"> ', " ", " ", ' </div>  <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"></script> <script type="text/javascript">\n			;(function () {\n				emailjs.init({\n					publicKey: import.meta.env.PUBLIC_EMAILJS_PUBLIC_KEY,\n				})\n			})()\n		</script> </body> </html> '])), addAttribute(Astro2.generator, "content"), title, renderHead(), renderComponent($$result, "Header", $$Header, {}), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, {}));
}, "C:/Users/sande/Documents/GitHub/portfolio/src/layouts/Layout.astro", void 0);

const icons = {"local":{"prefix":"local","lastModified":1712232759,"icons":{"cats":{"body":"<defs><style>.cls-1{fill:#333}</style></defs><path d=\"M21.15 3.35 19 5.5h-4l-2.15-2.15a.5.5 0 0 0-.85.36V9a5 5 0 0 0 10 0V3.71a.5.5 0 0 0-.85-.36ZM15 10a1 1 0 1 1 1-1 1 1 0 0 1-1 1Zm4 0a1 1 0 1 1 1-1 1 1 0 0 1-1 1Z\" class=\"cls-1\"/><path d=\"M18.4 22H17a1 1 0 0 1-.84-.46l-2.51-3.91-.05-.09c-.27-.55-1.37-.95-2.6-.95s-2.33.4-2.6.95l-2 3.92a1 1 0 0 1-.9.54H4.11a2 2 0 0 1-1.49-.66 2 2 0 0 1-.5-1.54L3 11l-.72-5.8a2.85 2.85 0 0 1 5.65-.78l.37 2.42A1 1 0 0 1 7.45 8a1 1 0 0 1-1.14-.84l-.37-2.43A.84.84 0 0 0 5.1 4a.82.82 0 0 0-.64.29.85.85 0 0 0-.21.71L5 10.88a1.55 1.55 0 0 1 0 .22L4.11 20h.78l1.72-3.36c.76-1.51 2.76-2.05 4.39-2.05s3.59.53 4.36 2L17.55 20h.85l-.4-3.9a1 1 0 0 1 2-.2l.39 3.9a2 2 0 0 1-.51 1.54 2 2 0 0 1-1.48.66Z\" class=\"cls-1\"/><path d=\"M12.5 11a.93.93 0 0 1-.5-.14 8.67 8.67 0 0 0-4.78-.1 1 1 0 1 1-.44-2c2.34-.52 5-.37 6.23.34a1 1 0 0 1-.51 1.9Z\" class=\"cls-1\"/>"},"cinema":{"body":"<defs><style>.cls-1{fill:#333}</style></defs><path d=\"M10 9a1 1 0 0 1-1-1 3 3 0 0 1 3-3 1 1 0 0 1 0 2 1 1 0 0 0-1 1 1 1 0 0 1-1 1Zm8 13H6a1 1 0 0 1-1-.9l-1-10a1 1 0 0 1 .26-.77A1 1 0 0 1 5 10h14a1 1 0 0 1 0 2H6.1l.8 8h10.2l.61-6.1a1 1 0 0 1 1.09-.9 1 1 0 0 1 .9 1.1l-.7 7a1 1 0 0 1-1 .9Z\" class=\"cls-1\"/><path d=\"M13.9 22a1 1 0 0 1-1-1l.4-10a1 1 0 0 1 2 .08l-.4 10a1 1 0 0 1-1 .92ZM10 22a1 1 0 0 1-1-.95l-.5-10a1 1 0 1 1 2-.1L11 21a1 1 0 0 1-.95 1ZM5 12H4a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2Zm15 0h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2Z\" class=\"cls-1\"/><path d=\"M5.17 11a1 1 0 0 1-.91-.58 3.27 3.27 0 0 1 1.11-4.07 3.15 3.15 0 0 1 0-1.64 3.26 3.26 0 0 1 3.94-2.28 3.26 3.26 0 0 1 5.39 0 3.26 3.26 0 0 1 3.77 2 3.26 3.26 0 0 1 .16 2 3.24 3.24 0 0 1 1.27 1.64 1 1 0 1 1-1.91.6 1.3 1.3 0 0 0-.9-.86 1 1 0 0 1-.67-.6 1 1 0 0 1 .09-.9c0-.06.07-.12.1-.19a1.24 1.24 0 0 0 0-1 1.28 1.28 0 0 0-.69-.7 1.26 1.26 0 0 0-1.19.1 1 1 0 0 1-1.5-.52v-.17a1.29 1.29 0 0 0-2.38 0l-.1.17a1 1 0 0 1-.61.64 1 1 0 0 1-.88-.09A1.28 1.28 0 0 0 8 4.49a1.27 1.27 0 0 0-.61.77 1.24 1.24 0 0 0 .11 1v.06a1 1 0 0 1 .1.9 1 1 0 0 1-.68.61 1.26 1.26 0 0 0-.92.81 1.28 1.28 0 0 0 .06.94 1 1 0 0 1-.5 1.33 1 1 0 0 1-.39.09Z\" class=\"cls-1\"/>"},"coding":{"body":"<path fill=\"currentColor\" d=\"M128 96h384v256h64V80c0-26.37-21.6-48-48-48H112c-26.37 0-48 21.63-48 48v272h64V96zm496 288H16c-8.75 0-16 7.3-16 16v16c0 35.25 28.75 64 64 64h512c35.25 0 64-28.75 64-64v-16c0-8.7-7.2-16-16-16zm-258.1-97.8c3.9 3.9 9 5.8 14.1 5.8s10.23-1.938 14.14-5.844l48-48c7.812-7.813 7.812-20.5 0-28.31l-48-48c-7.812-7.813-20.47-7.813-28.28 0-7.812 7.813-7.812 20.5 0 28.31l33.86 33.84-33.86 33.84C358 265.7 358 278.4 365.9 286.2zm-91.8-124.3c-7.812-7.813-20.47-7.813-28.28 0l-48 48c-7.812 7.813-7.812 20.5 0 28.31l48 48C249.8 290.1 254.9 292 260 292s10.23-1.938 14.14-5.844c7.812-7.813 7.812-20.5 0-28.31L240.3 224l33.86-33.84c6.94-7.76 6.94-20.46-.06-28.26z\"/>","width":640,"height":512},"coffee":{"body":"<g fill=\"currentColor\"><path d=\"M6 2.5a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-2a1 1 0 0 0-1-1Z\"/><path fill-rule=\"evenodd\" d=\"M13 21.5a6.002 6.002 0 0 0 5.917-5H19a4 4 0 0 0 0-8v-1H1v8a6 6 0 0 0 6 6h6ZM3 9.5v6a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4v-6H3Zm18 3a2 2 0 0 1-2 2v-4a2 2 0 0 1 2 2Z\" clip-rule=\"evenodd\"/><path d=\"M9 3.5a1 1 0 1 1 2 0v2a1 1 0 1 1-2 0v-2Zm5-1a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0v-2a1 1 0 0 0-1-1Z\"/></g>"},"cv":{"body":"<path fill=\"currentColor\" d=\"M30.88 111.05h784.9c11.4 0 20.64 9.24 20.64 20.64v583.28c0 11.4-9.24 20.64-20.64 20.64H30.88c-11.4 0-20.64-9.24-20.64-20.64V131.69c0-11.4 9.24-20.64 20.64-20.64zm146.05 288.17c0 27.16-41.29 27.16-41.29 0 0-32.49 15.12-63.05 40.68-82.92a82.067 82.067 0 0 1-4.48-7.04 78.471 78.471 0 0 1-10.12-38.63c0-43.57 35.32-78.89 78.89-78.89 43.56 0 78.89 35.32 78.89 78.89 0 16.39-5.09 32.34-14.61 45.67 25.57 19.87 40.69 50.43 40.69 82.92 0 27.16-41.29 27.16-41.29 0 0-23.44-12.59-44.7-33.14-55.92-9.59 4.06-20.13 6.22-30.54 6.22s-20.96-2.16-30.55-6.22c-20.54 11.22-33.13 32.48-33.13 55.92zm-55.14 91.99h237.63c11.4 0 20.65 9.25 20.65 20.65v122.41c0 11.4-9.25 20.65-20.65 20.65H121.79c-11.4 0-20.64-9.25-20.64-20.65V511.86c0-11.4 9.24-20.65 20.64-20.65zm216.99 41.29H142.44v81.13h196.34V532.5zm-98.17-299.47c-20.77 0-37.6 16.83-37.6 37.6 0 21.09 16.9 37.6 37.6 37.6 20.72 0 37.6-16.69 37.6-37.6 0-20.77-16.84-37.6-37.6-37.6zm183.62 29.12c-27.15 0-27.15-41.29 0-41.29h300.64c27.15 0 27.15 41.29 0 41.29H424.23zm46.81 363.65c-27.16 0-27.16-41.3 0-41.3h253.83c27.15 0 27.15 41.3 0 41.3H471.04zm-46.81-272.74c-27.15 0-27.15-41.29 0-41.29h300.64c27.15 0 27.15 41.29 0 41.29H424.23zm46.81 90.91c-27.16 0-27.16-41.29 0-41.29h253.83c27.15 0 27.15 41.29 0 41.29H471.04zm0 90.92c-27.16 0-27.16-41.3 0-41.3h253.83c27.15 0 27.15 41.3 0 41.3H471.04zm324.09-382.55H51.53v541.98h743.6V152.34z\"/>","width":846.66,"height":846.66},"gaming":{"body":"<g fill=\"currentColor\"><path d=\"M18 6h-5c0-1.7-1.3-3-3-3H6c-.6 0-1-.4-1-1s.4-1 1-1h13.5c.3 0 .5-.2.5-.5s-.2-.5-.5-.5H6C4.9 0 4 .9 4 2s.9 2 2 2h4c1.1 0 2 .9 2 2H6c-3.3 0-6 2.7-6 6v8c0 2.2 1.8 4 4 4 1.1 0 2.1-.4 2.8-1.2l4.6-4.7c.2-.1.3-.2.5-.2s.4.1.5.2l4.6 4.7c.7.7 1.7 1.2 2.8 1.2 2.2 0 4-1.8 4-4v-8c.2-3.3-2.5-6-5.8-6zm4 14c0 1.1-.9 2-2 2-.6 0-1.1-.2-1.4-.6l-4.5-4.5s-.9-.9-2.1-.9-2.1.9-2.1.9l-4.5 4.5c-.3.4-.8.6-1.4.6-1.1 0-2-.9-2-2v-8c0-2.2 1.8-4 4-4h12c2.2 0 4 1.8 4 4v8z\"/><circle cx=\"17\" cy=\"15\" r=\"1\"/><circle cx=\"17\" cy=\"11\" r=\"1\"/><circle cx=\"15\" cy=\"13\" r=\"1\"/><circle cx=\"19\" cy=\"13\" r=\"1\"/><path d=\"M9 12H8v-1c0-.6-.4-1-1-1s-1 .4-1 1v1H5c-.6 0-1 .4-1 1s.4 1 1 1h1v1c0 .6.4 1 1 1s1-.4 1-1v-1h1c.6 0 1-.4 1-1s-.4-1-1-1z\"/></g>"},"linkedin":{"body":"<path fill=\"currentColor\" d=\"M8 19H5V9h3v10zm11 0h-3v-5.342c0-1.392-.496-2.085-1.479-2.085-.779 0-1.273.388-1.521 1.165V19h-3s.04-9 0-10h2.368l.183 2h.062c.615-1 1.598-1.678 2.946-1.678 1.025 0 1.854.285 2.487 1.001.637.717.954 1.679.954 3.03V19z\"/><ellipse cx=\"6.5\" cy=\"6.5\" fill=\"currentColor\" rx=\"1.55\" ry=\"1.5\"/>"},"motorbikes":{"body":"<defs><style>.cls-1{fill:#333}</style></defs><path d=\"M19 21a4 4 0 1 1 4-4 4 4 0 0 1-4 4Zm0-6a2 2 0 1 0 2 2 2 2 0 0 0-2-2ZM5 21a4 4 0 1 1 4-4 4 4 0 0 1-4 4Zm0-6a2 2 0 1 0 2 2 2 2 0 0 0-2-2Z\" class=\"cls-1\"/><path d=\"M12 18H6a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2Zm1-3h-2a1 1 0 0 1-.71-.29L6.59 11H4a1 1 0 0 1-.71-.29l-1-1a1 1 0 0 1 1.42-1.42l.7.71H7a1 1 0 0 1 .71.29l3.7 3.71h1.22l3.22-2.76a1 1 0 0 1 .65-.24h3.09a.42.42 0 0 0 .41-.41.42.42 0 0 0-.12-.3l-4.59-4.58a1 1 0 0 1 1.42-1.42l4.58 4.59A2.37 2.37 0 0 1 22 9.59 2.41 2.41 0 0 1 19.59 12h-2.72l-3.22 2.76A1 1 0 0 1 13 15Z\" class=\"cls-1\"/><path d=\"M11 11H4a1 1 0 0 1 0-2h6.59l1.7-1.71A1 1 0 0 1 13 7h2a1 1 0 0 1 0 2h-1.59l-1.7 1.71A1 1 0 0 1 11 11Zm7-5v5h1.59a1.41 1.41 0 0 0 1-2.41Z\" class=\"cls-1\"/>"},"quantum":{"body":"<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\".265\"><path d=\"M2.799 2.117a.682 1.72 0 0 1-.682 1.72.682 1.72 0 0 1-.682-1.72.682 1.72 0 0 1 .682-1.72.682 1.72 0 0 1 .682 1.72z\"/><path d=\"M2.117 1.35c.698-.324 1.327-.375 1.489-.093.114.198-.03.515-.345.84M2.083 2.9c-.684.309-1.296.353-1.456.077-.115-.2.033-.522.355-.85\"/><path d=\"M1.776 2.707c.822.475 1.642.596 1.83.27C3.794 2.65 3.28 2 2.458 1.526a4.264 4.264 0 0 0-.341-.177C1.42 1.026.789.976.627 1.257c-.188.326.326.976 1.149 1.45zm1.928-1.464a.132.132 0 0 1-.132.133.132.132 0 0 1-.132-.133.132.132 0 0 1 .132-.132.132.132 0 0 1 .132.132zM.794 2.986a.132.132 0 0 1-.133.132.132.132 0 0 1-.132-.132.132.132 0 0 1 .132-.133.132.132 0 0 1 .133.133z\"/><path d=\"M2.249 2.117a.132.132 0 0 1-.132.132.132.132 0 0 1-.133-.132.132.132 0 0 1 .133-.133.132.132 0 0 1 .132.133z\"/></g>","width":4.233,"height":4.233},"space":{"body":"<path d=\"M3.3 19.7c.4.4 1 .7 1.9.7.9 0 2-.3 3.6-1.1 1 .5 2.2.7 3.3.7 4.4 0 8-3.6 8-8 0-1.1-.3-2.3-.7-3.3 1.6-3.1 1.1-4.7.3-5.4-1.2-1.2-3.3-.8-6.2.9-.5-.1-1-.2-1.5-.2-4.4 0-8 3.6-8 8 0 .5.1 1 .2 1.5-1.7 2.9-2.1 5.1-.9 6.2zM12 18c-.4 0-.7 0-1.1-.1 1.3-.9 2.5-2 3.8-3.2 1.2-1.2 2.3-2.5 3.2-3.8.1.4.1.7.1 1.1 0 3.3-2.7 6-6 6zm-6.2-1c.2.2.5.4.8.4.2 0 .4-.1.6-.2.4-.3.5-1 .1-1.4C6.5 14.7 6 13.4 6 12c0-3.3 2.7-6 6-6 1.4 0 2.8.5 3.9 1.4.4.4 1.1.3 1.4-.1s.3-1.1-.1-1.4c-.3-.3-.7-.6-1.1-.8 1.3-.6 2.1-.6 2.3-.4.2.2.2 1.3-1 3.5-.9 1.6-2.4 3.4-4 5.1-1.7 1.7-3.5 3.1-5.1 4-2.1 1.2-3.3 1.2-3.5 1-.2-.2-.2-.9.4-2.3.1.4.3.7.6 1z\"/>"}},"width":24,"height":24}};

const defaultIconDimensions = Object.freeze(
  {
    left: 0,
    top: 0,
    width: 16,
    height: 16
  }
);
const defaultIconTransformations = Object.freeze({
  rotate: 0,
  vFlip: false,
  hFlip: false
});
const defaultIconProps = Object.freeze({
  ...defaultIconDimensions,
  ...defaultIconTransformations
});
const defaultExtendedIconProps = Object.freeze({
  ...defaultIconProps,
  body: "",
  hidden: false
});

const defaultIconSizeCustomisations = Object.freeze({
  width: null,
  height: null
});
const defaultIconCustomisations = Object.freeze({
  // Dimensions
  ...defaultIconSizeCustomisations,
  // Transformations
  ...defaultIconTransformations
});

function mergeIconTransformations(obj1, obj2) {
  const result = {};
  if (!obj1.hFlip !== !obj2.hFlip) {
    result.hFlip = true;
  }
  if (!obj1.vFlip !== !obj2.vFlip) {
    result.vFlip = true;
  }
  const rotate = ((obj1.rotate || 0) + (obj2.rotate || 0)) % 4;
  if (rotate) {
    result.rotate = rotate;
  }
  return result;
}

function mergeIconData(parent, child) {
  const result = mergeIconTransformations(parent, child);
  for (const key in defaultExtendedIconProps) {
    if (key in defaultIconTransformations) {
      if (key in parent && !(key in result)) {
        result[key] = defaultIconTransformations[key];
      }
    } else if (key in child) {
      result[key] = child[key];
    } else if (key in parent) {
      result[key] = parent[key];
    }
  }
  return result;
}

function getIconsTree(data, names) {
  const icons = data.icons;
  const aliases = data.aliases || /* @__PURE__ */ Object.create(null);
  const resolved = /* @__PURE__ */ Object.create(null);
  function resolve(name) {
    if (icons[name]) {
      return resolved[name] = [];
    }
    if (!(name in resolved)) {
      resolved[name] = null;
      const parent = aliases[name] && aliases[name].parent;
      const value = parent && resolve(parent);
      if (value) {
        resolved[name] = [parent].concat(value);
      }
    }
    return resolved[name];
  }
  (names || Object.keys(icons).concat(Object.keys(aliases))).forEach(resolve);
  return resolved;
}

function internalGetIconData(data, name, tree) {
  const icons = data.icons;
  const aliases = data.aliases || /* @__PURE__ */ Object.create(null);
  let currentProps = {};
  function parse(name2) {
    currentProps = mergeIconData(
      icons[name2] || aliases[name2],
      currentProps
    );
  }
  parse(name);
  tree.forEach(parse);
  return mergeIconData(data, currentProps);
}
function getIconData(data, name) {
  if (data.icons[name]) {
    return internalGetIconData(data, name, []);
  }
  const tree = getIconsTree(data, [name])[name];
  return tree ? internalGetIconData(data, name, tree) : null;
}

const unitsSplit = /(-?[0-9.]*[0-9]+[0-9.]*)/g;
const unitsTest = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
function calculateSize(size, ratio, precision) {
  if (ratio === 1) {
    return size;
  }
  precision = precision || 100;
  if (typeof size === "number") {
    return Math.ceil(size * ratio * precision) / precision;
  }
  if (typeof size !== "string") {
    return size;
  }
  const oldParts = size.split(unitsSplit);
  if (oldParts === null || !oldParts.length) {
    return size;
  }
  const newParts = [];
  let code = oldParts.shift();
  let isNumber = unitsTest.test(code);
  while (true) {
    if (isNumber) {
      const num = parseFloat(code);
      if (isNaN(num)) {
        newParts.push(code);
      } else {
        newParts.push(Math.ceil(num * ratio * precision) / precision);
      }
    } else {
      newParts.push(code);
    }
    code = oldParts.shift();
    if (code === void 0) {
      return newParts.join("");
    }
    isNumber = !isNumber;
  }
}

function splitSVGDefs(content, tag = "defs") {
  let defs = "";
  const index = content.indexOf("<" + tag);
  while (index >= 0) {
    const start = content.indexOf(">", index);
    const end = content.indexOf("</" + tag);
    if (start === -1 || end === -1) {
      break;
    }
    const endEnd = content.indexOf(">", end);
    if (endEnd === -1) {
      break;
    }
    defs += content.slice(start + 1, end).trim();
    content = content.slice(0, index).trim() + content.slice(endEnd + 1);
  }
  return {
    defs,
    content
  };
}
function mergeDefsAndContent(defs, content) {
  return defs ? "<defs>" + defs + "</defs>" + content : content;
}
function wrapSVGContent(body, start, end) {
  const split = splitSVGDefs(body);
  return mergeDefsAndContent(split.defs, start + split.content + end);
}

const isUnsetKeyword = (value) => value === "unset" || value === "undefined" || value === "none";
function iconToSVG(icon, customisations) {
  const fullIcon = {
    ...defaultIconProps,
    ...icon
  };
  const fullCustomisations = {
    ...defaultIconCustomisations,
    ...customisations
  };
  const box = {
    left: fullIcon.left,
    top: fullIcon.top,
    width: fullIcon.width,
    height: fullIcon.height
  };
  let body = fullIcon.body;
  [fullIcon, fullCustomisations].forEach((props) => {
    const transformations = [];
    const hFlip = props.hFlip;
    const vFlip = props.vFlip;
    let rotation = props.rotate;
    if (hFlip) {
      if (vFlip) {
        rotation += 2;
      } else {
        transformations.push(
          "translate(" + (box.width + box.left).toString() + " " + (0 - box.top).toString() + ")"
        );
        transformations.push("scale(-1 1)");
        box.top = box.left = 0;
      }
    } else if (vFlip) {
      transformations.push(
        "translate(" + (0 - box.left).toString() + " " + (box.height + box.top).toString() + ")"
      );
      transformations.push("scale(1 -1)");
      box.top = box.left = 0;
    }
    let tempValue;
    if (rotation < 0) {
      rotation -= Math.floor(rotation / 4) * 4;
    }
    rotation = rotation % 4;
    switch (rotation) {
      case 1:
        tempValue = box.height / 2 + box.top;
        transformations.unshift(
          "rotate(90 " + tempValue.toString() + " " + tempValue.toString() + ")"
        );
        break;
      case 2:
        transformations.unshift(
          "rotate(180 " + (box.width / 2 + box.left).toString() + " " + (box.height / 2 + box.top).toString() + ")"
        );
        break;
      case 3:
        tempValue = box.width / 2 + box.left;
        transformations.unshift(
          "rotate(-90 " + tempValue.toString() + " " + tempValue.toString() + ")"
        );
        break;
    }
    if (rotation % 2 === 1) {
      if (box.left !== box.top) {
        tempValue = box.left;
        box.left = box.top;
        box.top = tempValue;
      }
      if (box.width !== box.height) {
        tempValue = box.width;
        box.width = box.height;
        box.height = tempValue;
      }
    }
    if (transformations.length) {
      body = wrapSVGContent(
        body,
        '<g transform="' + transformations.join(" ") + '">',
        "</g>"
      );
    }
  });
  const customisationsWidth = fullCustomisations.width;
  const customisationsHeight = fullCustomisations.height;
  const boxWidth = box.width;
  const boxHeight = box.height;
  let width;
  let height;
  if (customisationsWidth === null) {
    height = customisationsHeight === null ? "1em" : customisationsHeight === "auto" ? boxHeight : customisationsHeight;
    width = calculateSize(height, boxWidth / boxHeight);
  } else {
    width = customisationsWidth === "auto" ? boxWidth : customisationsWidth;
    height = customisationsHeight === null ? calculateSize(width, boxHeight / boxWidth) : customisationsHeight === "auto" ? boxHeight : customisationsHeight;
  }
  const attributes = {};
  const setAttr = (prop, value) => {
    if (!isUnsetKeyword(value)) {
      attributes[prop] = value.toString();
    }
  };
  setAttr("width", width);
  setAttr("height", height);
  const viewBox = [box.left, box.top, boxWidth, boxHeight];
  attributes.viewBox = viewBox.join(" ");
  return {
    attributes,
    viewBox,
    body
  };
}

const cache = /* @__PURE__ */ new WeakMap();

const $$Astro$7 = createAstro();
const $$Icon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Icon;
  class AstroIconError extends Error {
    constructor(message) {
      super(message);
    }
  }
  const req = Astro2.request;
  const { name = "", title, "is:inline": inline = false, ...props } = Astro2.props;
  const map = cache.get(req) ?? /* @__PURE__ */ new Map();
  const i = map.get(name) ?? 0;
  map.set(name, i + 1);
  cache.set(req, map);
  const includeSymbol = !inline && i === 0;
  let [setName, iconName] = name.split(":");
  if (!setName && iconName) {
    const err = new AstroIconError(`Invalid "name" provided!`);
    throw err;
  }
  if (!iconName) {
    iconName = setName;
    setName = "local";
    if (!icons[setName]) {
      const err = new AstroIconError('Unable to load the "local" icon set!');
      throw err;
    }
    if (!(iconName in icons[setName].icons)) {
      const err = new AstroIconError(`Unable to locate "${name}" icon!`);
      throw err;
    }
  }
  const collection = icons[setName];
  if (!collection) {
    const err = new AstroIconError(`Unable to locate the "${setName}" icon set!`);
    throw err;
  }
  const iconData = getIconData(collection, iconName ?? setName);
  if (!iconData) {
    const err = new AstroIconError(`Unable to locate "${name}" icon!`);
    throw err;
  }
  const id = `ai:${collection.prefix}:${iconName ?? setName}`;
  if (props.size) {
    props.width = props.size;
    props.height = props.size;
    delete props.size;
  }
  const renderData = iconToSVG(iconData);
  const normalizedProps = { ...renderData.attributes, ...props };
  const normalizedBody = renderData.body;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(normalizedProps)}${addAttribute(name, "data-icon")}> ${title && renderTemplate`<title>${title}</title>`} ${inline ? renderTemplate`${renderComponent($$result, "Fragment", Fragment$1, { "id": id }, { "default": ($$result2) => renderTemplate`${unescapeHTML(normalizedBody)}` })}` : renderTemplate`${renderComponent($$result, "Fragment", Fragment$1, {}, { "default": ($$result2) => renderTemplate`${includeSymbol && renderTemplate`<symbol${addAttribute(id, "id")}>${unescapeHTML(normalizedBody)}</symbol>`}<use${addAttribute(`#${id}`, "xlink:href")}></use> ` })}`} </svg>`;
}, "C:/Users/sande/Documents/GitHub/portfolio/node_modules/.pnpm/astro-icon@1.1.0/node_modules/astro-icon/components/Icon.astro", void 0);

const $$Astro$6 = createAstro();
const $$Badge = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Badge;
  const { icon, title, iconType, customClass, large } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`${customClass} rounded-3xl flex flex-row p-1 m-1 items-center`, "class")}> <div${addAttribute([{ "size-8": large }, { "size-6": !large }, " flex p-1 "], "class:list")}> ${iconType === "html" && renderTemplate`${renderComponent($$result, "Fragment", Fragment$1, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(icon)}` })}`} ${iconType === "path" && renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "name": icon, "class": "w-full h-full" })}`} </div> <p class="px-2 text-sm m-auto">${title}</p> </div>`;
}, "C:/Users/sande/Documents/GitHub/portfolio/src/components/Badge.astro", void 0);

const $$Astro$5 = createAstro();
const $$ContactButtons = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$ContactButtons;
  const { customBadgeClass } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<ul class="flex flex-row w-full items-center justify-center"> <a href="https://linkedin.com/in/pablo-sande-0024857b"> <li class="relative"> ${renderComponent($$result, "Badge", $$Badge, { "iconType": "path", "icon": "linkedin", "title": "Linkedin", "customClass": customBadgeClass, "large": true })} </li> </a> <a href="cv.pdf" download="PabloSande2024"> <li class="relative"> ${renderComponent($$result, "Badge", $$Badge, { "iconType": "path", "icon": "cv", "title": "Download CV", "customClass": customBadgeClass, "large": true })} </li> </a> </ul>`;
}, "C:/Users/sande/Documents/GitHub/portfolio/src/components/ContactButtons.astro", void 0);

const client = new ApolloClient({
  uri: "http://localhost:3000/api/graphql",
  // Use env var
  cache: new InMemoryCache()
});

const $$Astro$4 = createAstro();
const $$Section = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Section;
  const { idName, wrapperClass, title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(idName, "id")}${addAttribute([
    `
        flex flex-col relative items-center 
        px-6 w-full 
        scroll-mt-24
        justify-center items-center
    `,
    wrapperClass
  ], "class:list")}> <div class="flex flex-col relative sm:max-w-xl lg:max-w-3xl py-8"> <h2${addAttribute(`w-full sm:max-w-xl lg:max-w-3xl text-3xl sm:text-4xl text-bold 
                after:h-px after:mt-2 after:block after:bg-powercyan after:w-full`, "class")}> ${title} </h2> ${renderSlot($$result, $$slots["default"])} </div> </section>`;
}, "C:/Users/sande/Documents/GitHub/portfolio/src/components/Section.astro", void 0);

const $$Astro$3 = createAstro();
const $$Experience = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Experience;
  const { data, loading } = await client.query({
    query: graph`
        query SkillLevels {
            skills {
                title,
                thumbnail,
            }
        }
    `
  });
  const technologyItem = data.skills;
  const PROJECTS = [
    {
      name: "Betonline",
      title: "Website optimization",
      position: "Solutions Architect",
      description: "This site has insane traffic and that requires an <span class='text-softcyan'>excellent performance</span> optimization and <span class='text-softcyan'>100% uptime</span>. To achieve this, as a <span class='text-softcyan'>Solutions Architect</span>, I do Chaos Engineering, Dev Teams mentoring, metrics tracking, architecture and performance improvements, Give support to Engineering Teams by reviewing their code and helping them with decission making... ",
      technologies: [
        "React",
        "Svelte",
        "NextJS",
        "Astro",
        "Typescript",
        "Docker",
        "Kubernetes"
      ],
      imageName: "betonline.webp",
      link: "https://betonline.ag"
    },
    {
      name: "DaVitri",
      title: "Embeded Software with custom Interface",
      position: "Software Engineer/Team Lead",
      description: "<span class='text-softcyan'>Leading the Frontend Team</span>, I built the <span class='text-softcyan'>low-level interface</span> using Chromium, enabling communication with the hardware's physical actions. Additionally, I developed a React Single Page Application (SPA) that served as the user interface. The hardware was <span class='text-softcyan'>connected to AWS</span> and could trigger remote software updates. I also ensured that the system met all the <span class='text-softcyan'>robustness, fail-proof, and security checks</span> required in the healthcare industry.",
      technologies: [
        "React",
        "Chromium",
        "NodeJS",
        "Javascript",
        "AWS",
        "Tailwind"
      ],
      imageName: "davitri.webp",
      link: "https://overture.life/davitri"
    },
    {
      name: "Orange",
      title: "Full website refactor",
      position: "Frontend Architect",
      description: "As part of the <span class='text-softcyan'>Architecture Core Team</span>, my job consisted on orchestating the <span class='text-softcyan'>hole refactoring</span> of the main website. Among others, I helped to define and create the global architecture, CI/CD, style guides, performance metrics, scaffolding tools and lead technical improvement plans.",
      technologies: [
        "Angular",
        "Typescript",
        "Docker",
        "Kubernetes",
        "NodeJS",
        "React"
      ],
      imageName: "orange.webp",
      link: "https://www.orange.es"
    },
    {
      name: "Bixby",
      title: "Version 2 development",
      position: "Software Engineer/Technical Lead",
      description: "The version 2 was developed from scratch in order to compete with the leaeding Voice Assistants in the industry. Working as a <span class='text-softcyan'>Tech Lead</span>, I was responsible for <span class='text-softcyan'>leading the technical roadmap</span> for the Spanish team version of Bixby v2. One of the biggest challenges was to <span class='text-softcyan'>integrate with several service providers</span>, most of them requiring a specific integration layer",
      technologies: ["Javascript", "Java", "NodeJS"],
      imageName: "bixby.webp",
      link: "https://www.samsung.com/us/apps/bixby/"
    }
  ];
  const getTechnologyIcon = (technology) => technologyItem.find(
    (item) => item.title.toLowerCase() === technology.toLowerCase()
  )?.thumbnail || "";
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "idName": "experience", "wrapperClass": "bg-darkblue", "title": "Experience Highlights" }, { "default": ($$result2) => renderTemplate`${PROJECTS.map((project) => renderTemplate`${maybeRenderHead()}<article class="flex flex-col justify-center w-full h-full sm:max-w-xl lg:max-w-3xl py-12 group"> <h3 class="text-3xl text-bold pb-4 text-softcyan"> ${project.name} </h3> <p class="text-xl pb-4">${project.title}</p> <div id="project-description" class="inline"> ${renderComponent($$result2, "Fragment", Fragment$1, {}, { "default": ($$result3) => renderTemplate`${unescapeHTML(project.description)}` })} </div> <ul class="flex flex-row flex-wrap pt-4"> ${project.technologies.map((technology) => renderTemplate`<li class="relative flex"> ${renderComponent($$result2, "Badge", $$Badge, { "icon": getTechnologyIcon(technology), "title": technology, "iconType": "html", "customClass": "bg-lightgray text-black" })} </li>`)} </ul> <a class="mt-8"${addAttribute(project.link, "href")}> <div class="transition duration-500 ease-in-out transform shadow-xl overflow-clip rounded-xl sm:rounded-xl md:group-hover:-translate-y-1 md:group-hover:shadow-2xl lg:border lg:border-gray-800 lg:hover:border-gray-700 lg:hover:bg-gray-800/50"> <img${addAttribute(project.imageName, "src")}${addAttribute(project.name, "alt")} class="md:scale-105 md:group-hover:scale-100 object-cover transition duration-500 flex relative justify-center h-64 sm:h-128 w-full rounded-lg shadow-xl shadow-white/10"> </div> </a> </article>`)}` })}`;
}, "C:/Users/sande/Documents/GitHub/portfolio/src/components/Experience.astro", void 0);

const $$Astro$2 = createAstro();
const $$MainSection = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$MainSection;
  return renderTemplate`${maybeRenderHead()}<section id="main-section"${addAttribute(`overflow-x-hidden overflow-y-auto
            flex flex-col items-center max-w-screen h-section p-5 z-200`, "class")} data-astro-cid-xjpubisi> <div class="block relative w-full min-h-72 sm:min-h-96 max-h-72 md:max-h-96" data-astro-cid-xjpubisi> <div class="ellipse ellipse-out" data-astro-cid-xjpubisi> <div class="electron" data-astro-cid-xjpubisi></div> </div> <div class="ellipse ellipse-out" data-astro-cid-xjpubisi> <div class="electron" data-astro-cid-xjpubisi></div> </div> <div class="ellipse pablo-ellipse" data-astro-cid-xjpubisi> <div class="pablo max-w-72 max-h-72 md:max-w-96 md:max-h-96 rounded-full shadow-[0_0_10px_5px] shadow-gray-500" data-astro-cid-xjpubisi> <img src="/pablo.webp" alt="Pablo Sande" class="rounded-full" data-astro-cid-xjpubisi> </div> </div> </div> <div class="flex" data-astro-cid-xjpubisi> <h1 class="show-up text-4xl xs:text-5xl sm:text-6xl font-bold text-center pt-6 md:pt-12 text-softcyan" data-astro-cid-xjpubisi>
Frontend
</h1> </div> <div class="flex" data-astro-cid-xjpubisi> <h1 class="show-up text-4xl xs:text-5xl sm:text-6xl font-bold text-center pt-4 sm:pb-12" data-astro-cid-xjpubisi>
Architect
</h1> </div> <a href="#experience" class="rounded-3xl bg-bluegray relative flex p-4 mt-6 show-up" data-astro-cid-xjpubisi>View my Work</a> </section> `;
}, "C:/Users/sande/Documents/GitHub/portfolio/src/components/MainSection.astro", void 0);

const $$Astro$1 = createAstro();
const $$AboutMe = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$AboutMe;
  const INTERESTS = [
    "Cats",
    "Motorbikes",
    "Space",
    "Coffee",
    "Gaming",
    "Quantum",
    "Coding"
  ];
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "title": "About me", "wrapperClass": "bg-[#181818]", "idName": "about" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<article class="pt-12 text-lg"> <div class="pb-6"> <p>
I'm Pablo, a Software Engineer with <span class="text-softcyan">10 years of experience</span> based in Madrid (Spain).
</p> <p class="pt-8">
Over the years <span class="text-softcyan">I have worked for many different companies</span>, from startups to multinationals, for different industrial
				areas.
</p> <p class="pt-8">
I love to develop code and teams that create solutions through
<span class="text-softcyan">technical excellence</span>.
				Mastering the art of making trade-offs between cost and benefit,
				I always put <span class="text-softcyan">quality over quantity, delivery over promises.</span> </p> <p class="pt-8">
I have <span class="text-softcyan">extensive experience</span> working
				in <span class="text-softcyan">Agile</span> environments, giving
<span class="text-softcyan">mentorship</span> and <span class="text-softcyan">training</span> other developers.
</p> <p class="pt-8">
I make sure to always<span class="text-softcyan">
maintain a healthy communication
</span>between the product/stakeholders and the development side
				in order to have a constant delivery/review/validation process.
</p> </div> ${renderComponent($$result2, "ContactButtons", $$ContactButtons, { "customBadgeClass": "p-2 bg-bluegray text-lightgray [&>svg]:fill-lightgray" })} <h3 class="text-2xl pt-8 text-softcyan">My Interests</h3> <ul class="pt-4 flex flex-wrap w-full"> ${INTERESTS.map((interest) => renderTemplate`<li class="relative"> ${renderComponent($$result2, "Badge", $$Badge, { "iconType": "path", "icon": interest.toLowerCase(), "title": interest, "customClass": "bg-lightgray text-black" })} </li>`)} </ul> </article> ` })}`;
}, "C:/Users/sande/Documents/GitHub/portfolio/src/components/AboutMe.astro", void 0);

const $$Astro = createAstro();
const prerender = false;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Hey, I'm Pablo!" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class=""> ${renderComponent($$result2, "MainSection", $$MainSection, {})} ${renderComponent($$result2, "Experience", $$Experience, {})} ${renderComponent($$result2, "AboutMe", $$AboutMe, {})} </main> ` })}`;
}, "C:/Users/sande/Documents/GitHub/portfolio/src/pages/index.astro", void 0);

const $$file = "C:/Users/sande/Documents/GitHub/portfolio/src/pages/index.astro";
const $$url = "";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	prerender,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, $$ContactButtons as a, client as c, index as i };
