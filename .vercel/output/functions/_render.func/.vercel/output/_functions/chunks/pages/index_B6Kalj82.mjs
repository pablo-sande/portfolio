/* empty css                            */
import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, j as renderComponent, i as addAttribute, k as renderHead, l as renderSlot, u as unescapeHTML, n as Fragment$1 } from '../astro_DAHCdQnY.mjs';
import { ApolloClient, InMemoryCache } from '@apollo/client/core/index.js';
import graph from 'graphql-tag';
/* empty css                          */
import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { useState } from 'react';
import { Dialog } from '@headlessui/react';

const $$Astro$8 = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead()}<div class="p-8 relative h-28 z-10"> <p class="text-center text-white">Pablo Sande Pena © 2024</p> <div class="flex items-center justify-center space-x-2 mt-3"> <a href="" class="text-white">Some rights reserved</a> </div> </div>`;
}, "C:/Users/sande/Documents/GitHub/portfolio/src/components/Footer.astro", void 0);

const MobileHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("button", { onClick: () => setIsOpen(!isOpen), children: /* @__PURE__ */ jsx(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.75,
        stroke: "currentColor",
        className: "w-8 h-8 text-white hover:text-blue-400 " + (isOpen ? "hidden" : ""),
        children: /* @__PURE__ */ jsx(
          "path",
          {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          }
        )
      }
    ) }),
    /* @__PURE__ */ jsx(Dialog, { open: isOpen, onClose: () => setIsOpen(false), children: /* @__PURE__ */ jsxs(Dialog.Panel, { className: "fixed top-0 left-0 h-full w-full flex flex-col justify-center items-center z-10", children: [
      /* @__PURE__ */ jsx("div", { className: "fixed left-0 top-0 -z-10 h-full w-full", children: /* @__PURE__ */ jsx("div", { className: "absolute h-full w-full top-0 z-[-2] bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" }) }),
      /* @__PURE__ */ jsx("button", { onClick: () => setIsOpen(false), children: /* @__PURE__ */ jsx(
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          fill: "white",
          viewBox: "0 0 24 24",
          strokeWidth: 1.5,
          stroke: "currentColor",
          className: "w-8 h-8 fixed top-[36px] right-[32px] text-white hover:text-blue-400",
          children: /* @__PURE__ */ jsx(
            "path",
            {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "M6 18 18 6M6 6l12 12"
            }
          )
        }
      ) }),
      /* @__PURE__ */ jsx(Dialog.Title, { className: "text-white text-3xl", children: "Menu" }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center space-3", children: [
        /* @__PURE__ */ jsx(
          "a",
          {
            href: "#about",
            className: "text-white text-xl mt-6",
            onClick: () => setIsOpen(false),
            children: "About Me"
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
            href: "/site",
            className: "text-white text-xl mt-6",
            onClick: () => setIsOpen(false),
            children: "About this site"
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
            href: "/cv",
            className: "text-white text-xl mt-6",
            onClick: () => setIsOpen(false),
            children: "Download CV"
          }
        )
      ] })
    ] }) })
  ] });
};

const $$Astro$7 = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`${maybeRenderHead()}<header id="header" class="flex items-center flex-row justify-between h-28 w-full p-8 z-10 top-0 fixed transition-all duration-500" data-astro-cid-3ef6ksr2> <div class="flex" data-astro-cid-3ef6ksr2> <a href="/" class="type-in text-4xl font-bold text-white" data-astro-cid-3ef6ksr2>Pablo Sande</a> </div> <nav class="lg:flex items-center space-x-4 hidden" data-astro-cid-3ef6ksr2> <a href="/#about" class="text-white hover:text-powercyan" data-astro-cid-3ef6ksr2>About Me</a> <a href="/#experience" class="text-white hover:text-powercyan" data-astro-cid-3ef6ksr2>Experience</a> <a href="/skills" class="text-white hover:text-powercyan" data-astro-cid-3ef6ksr2>Skills</a> <!-- <a href="/site" class="text-white hover:text-powercyan"
            >About this site</a
        > --> <a href="/contact" class="text-white hover:text-powercyan" data-astro-cid-3ef6ksr2>Contact</a> <a href="/" class="text-white hover:text-powercyan" data-astro-cid-3ef6ksr2>Download CV</a> </nav> <div class="lg:hidden flex" data-astro-cid-3ef6ksr2> ${renderComponent($$result, "MobileHeader", MobileHeader, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Users/sande/Documents/GitHub/portfolio/src/components/MobileHeader", "client:component-export": "MobileHeader", "data-astro-cid-3ef6ksr2": true })} </div> </header> `;
}, "C:/Users/sande/Documents/GitHub/portfolio/src/components/Header.astro", void 0);

const $$Astro$6 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en" class="bg-black scroll-smooth"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Anta&display=swap" rel="stylesheet"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <!-- #229a24
    #0fe011 --> <body class="anta-regular text-white"> <!-- <div
            class="blur-sm bg-[url('/home-background.png')] bg-cover bg-norepeat fixed w-full h-full top-0"
        > --> <div class="fixed left-0 top-0 -z-10 h-full w-full"> <div class="relative h-full w-full bg-slate-950"> <div class="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div> </div> </div> <div class="flex flex-col h-screen justify-between pt-28"> ${renderComponent($$result, "Header", $$Header, {})} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, {})} </div>  </body> </html> `;
}, "C:/Users/sande/Documents/GitHub/portfolio/src/layouts/Layout.astro", void 0);

const client = new ApolloClient({
  uri: "http://localhost:3000/api/graphql",
  // Use env var
  cache: new InMemoryCache()
});

const $$Astro$5 = createAstro();
const $$Section = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
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

const $$Astro$4 = createAstro();
const $$Badge = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Badge;
  const { icon, title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="rounded-2xl bg-lightgray flex flex-row p-1 m-1 items-center"> <div class="size-6 rounded-full flex p-1"> ${renderComponent($$result, "Fragment", Fragment$1, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(icon)}` })} </div> <p class="px-2 text-sm text-black">${title}</p> </div>`;
}, "C:/Users/sande/Documents/GitHub/portfolio/src/components/Badge.astro", void 0);

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
      description: "This site has insane traffic and that requires an <span class='text-softcyan'>excellent performance</span> optimization and <span class='text-softcyan'>100% uptime</span>. To achive this, as a <span class='text-softcyan'>Solutions Architect</span>, I do Chaos Engineering, Dev Teams mentoring, metrics tracking, architecture and performance improvements, Give support to Engineering Teams by reviewing their code and helping them with decission making... ",
      technologies: [
        "React",
        "Svelte",
        "Astro",
        "Typescript",
        "Docker",
        "Kubernetes",
        "NextJS"
      ],
      image: "betonline.png",
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
      image: "davitri.png",
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
        "NodeJS"
      ],
      image: "orange.png",
      link: "https://www.orange.es"
    },
    {
      name: "Bixby",
      title: "Version 2 development",
      position: "Software Engineer/Technical Lead",
      description: "The version 2 was developed from scratch in order to compete with the leaeding Voice Assistants in the industry. Working as a <span class='text-softcyan'>Tech Lead</span>, I was responsible for <span class='text-softcyan'>leading the technical roadmap</span> for the Spanish team version of Bixby v2. One of the biggest challenges was to <span class='text-softcyan'>integrate with several service providers</span>, most of them requiring a specific integration layer",
      technologies: ["Javascript", "Java", "NodeJS"],
      image: "bixby.png",
      link: "https://www.samsung.com/us/apps/bixby/"
    }
  ];
  const getTechnologyIcon = (technology) => technologyItem.find(
    (item) => item.title.toLowerCase() === technology.toLowerCase()
  )?.thumbnail || "";
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "idName": "experience", "wrapperClass": "bg-darkblue", "title": "Experience Highlights" }, { "default": ($$result2) => renderTemplate`${PROJECTS.map((project) => renderTemplate`${maybeRenderHead()}<article class="flex flex-col justify-center w-full h-full sm:max-w-xl lg:max-w-3xl py-12 group"> <h3 class="text-3xl text-bold pb-4 text-softcyan"> ${project.name} </h3> <p class="text-xl pb-4">${project.title}</p> <div id="project-description" class="inline"> ${renderComponent($$result2, "Fragment", Fragment$1, {}, { "default": ($$result3) => renderTemplate`${unescapeHTML(project.description)}` })} </div> <ul class="flex flex-row flex-wrap pt-4"> ${project.technologies.map((technology) => renderTemplate`<li class="relative flex"> ${renderComponent($$result2, "Badge", $$Badge, { "icon": getTechnologyIcon(technology), "title": technology })} </li>`)} </ul> <a class="mt-8"${addAttribute(project.link, "href")}> <div class="transition duration-500 ease-in-out transform shadow-xl overflow-clip rounded-xl sm:rounded-xl md:group-hover:-translate-y-1 md:group-hover:shadow-2xl lg:border lg:border-gray-800 lg:hover:border-gray-700 lg:hover:bg-gray-800/50"> <img${addAttribute(project.image, "src")} loading="lazy" alt="" class="md:scale-105 md:group-hover:scale-100 object-cover transition duration-500 flex relative justify-center h-64 sm:h-128 w-full rounded-lg shadow-xl shadow-white/10"> </div> </a> </article>`)}` })}`;
}, "C:/Users/sande/Documents/GitHub/portfolio/src/components/Experience.astro", void 0);

const $$Astro$2 = createAstro();
const $$MainSection = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$MainSection;
  return renderTemplate`${maybeRenderHead()}<section id="main-section"${addAttribute(`overflow-x-hidden overflow-y-auto
            flex flex-col items-center max-w-screen h-section p-5 z-200`, "class")} data-astro-cid-xjpubisi> <div class="flex relative justify-center items-center w-full h-96" data-astro-cid-xjpubisi> <div class="ellipse ellipse-out" data-astro-cid-xjpubisi> <div class="electron" data-astro-cid-xjpubisi></div> </div> <div class="ellipse ellipse-out" data-astro-cid-xjpubisi> <div class="electron" data-astro-cid-xjpubisi></div> </div> <div class="ellipse pablo-ellipse" data-astro-cid-xjpubisi> <img src="/pablo.png" alt="Pablo Sande"${addAttribute(`pablo max-w-72 max-h-72 md:max-w-96 md:max-h-96 
                    rounded-full shadow-[0_0_10px_5px] shadow-gray-500"`, "class")} data-astro-cid-xjpubisi> </div> </div> <div class="flex" data-astro-cid-xjpubisi> <h1 class="show-up text-4xl xs:text-5xl sm:text-6xl font-bold text-center md:pt-12 text-softcyan" data-astro-cid-xjpubisi>
Frontend
</h1> </div> <div class="flex" data-astro-cid-xjpubisi> <h1 class="show-up text-4xl xs:text-5xl sm:text-6xl font-bold text-center pt-4 sm:pb-12" data-astro-cid-xjpubisi>
Architect
</h1> </div> <a href="#experience" class="rounded-3xl bg-bluegray relative flex p-4 mt-6 show-up" data-astro-cid-xjpubisi>View my Work</a> </section> `;
}, "C:/Users/sande/Documents/GitHub/portfolio/src/components/MainSection.astro", void 0);

const $$Astro$1 = createAstro();
const $$AboutMe = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$AboutMe;
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "title": "About me", "wrapperClass": "bg-[#181818]", "idName": "about" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<article class="pt-12 text-lg"> <p>
I'm Pablo, a Software Engineer with <span class="text-softcyan">10 years of experience</span> based in Madrid (Spain).
</p> <p class="pt-8">
Over the years I have worked for many different companies, <span class="text-softcyan">from startups to multinationals</span>, for different industrial areas.
</p> <p class="pt-8">
I love to develop code and teams that create solutions through
<span class="text-softcyan">technical excellence</span>. Mastering
            the art of making trade-offs between cost and benefit, I always put
            quality over quantity, delivery over promises.
</p> <p class="pt-8">
I have extensive experience working in Agile environments, giving
            mentorship and training other developers.
</p> <p class="pt-8">
I make sure to always maintain healthy communication between the
            product/stakeholders and the development side and have a constant
            delivery/review/validation process.
</p> </article> ` })}`;
}, "C:/Users/sande/Documents/GitHub/portfolio/src/components/AboutMe.astro", void 0);

const $$Astro = createAstro();
const prerender = false;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome to Astro." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class=""> ${renderComponent($$result2, "MainSection", $$MainSection, {})} ${renderComponent($$result2, "Experience", $$Experience, {})} ${renderComponent($$result2, "AboutMe", $$AboutMe, {})} </main> ` })}`;
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

export { $$Layout as $, client as c, index as i };
