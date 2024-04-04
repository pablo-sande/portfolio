/* empty css                            */
import { e as createAstro, f as createComponent, o as defineStyleVars, r as renderTemplate, m as maybeRenderHead, i as addAttribute, j as renderComponent, u as unescapeHTML, n as Fragment } from '../astro_BtCTiNGV.mjs';
/* empty css                           */
import { c as client, $ as $$Layout } from './index_B4esv-_P.mjs';
import graph from 'graphql-tag';

const $$Astro$1 = createAstro();
const $$SkillCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$SkillCard;
  const { item } = Astro2.props;
  const MAX_ROTATION_RADIUS = 270;
  const MAX_ANIMATION_DURATION = 1;
  const getBorderColor = (offset) => {
    return item.skillLevel > offset ? borderColor : "transparent";
  };
  const borderColor = "#33abc0";
  const borderRightColor = getBorderColor(25);
  const borderBottomColor = getBorderColor(65);
  const borderLeftColor = getBorderColor(99);
  const borderRotationDegrees = item.skillLevel * MAX_ROTATION_RADIUS / 100 + "deg";
  const animationDuration = item.skillLevel * MAX_ANIMATION_DURATION / 100 + "s";
  const $$definedVars = defineStyleVars([{
    borderBottomColor,
    borderLeftColor,
    borderRightColor,
    borderRotationDegrees,
    animationDuration,
    borderColor
  }]);
  return renderTemplate`${maybeRenderHead()}<div class="p-[12px] rounded-full skillbox spin relative h-[150px] w-[150px] m-auto" role="button" tabindex="0" data-astro-cid-u5aykeor${addAttribute($$definedVars, "style")}> <div class="bg-gray-200 relative rounded-full flex flex-col justify-center items-center w-full h-full" data-astro-cid-u5aykeor${addAttribute($$definedVars, "style")}> <div class="w-16 h-16" data-astro-cid-u5aykeor${addAttribute($$definedVars, "style")}> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(item.thumbnail)}` })} </div> <h2 class="font-bold text:sm sm:text-lg text-gray-800 text-center" data-astro-cid-u5aykeor${addAttribute($$definedVars, "style")}> ${item.title} </h2> </div> </div> `;
}, "C:/Users/sande/Documents/GitHub/portfolio/src/components/SkillCard.astro", void 0);

const $$Astro = createAstro();
const prerender = false;
const $$Skills = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Skills;
  const { data, loading } = await client.query({
    query: graph`
        query SkillLevels {
            skills {
                title,
                thumbnail,
                skillLevel
            }
        }
    `
  });
  const skillCardItems = data.skills;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Skills", "data-astro-cid-xahix5fp": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<article id="skills" class="max-w-screen-lg m-auto p-4 sm:p-6 relative" data-astro-cid-xahix5fp> <h1 class="enter-animation-title text-2xl sm:text-4xl font-bold text-gray-300" data-astro-cid-xahix5fp> <span class="lg:inline hidden" data-astro-cid-xahix5fp>Hover</span> <span class="lg:hidden block inline" data-astro-cid-xahix5fp>Click</span>
to check my expertise
</h1> ${loading && renderTemplate`<p data-astro-cid-xahix5fp>Loading...</p>`} ${!loading && renderTemplate`<ul class="overflow-hidden grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-10 mt-4 sm:mt-8" data-astro-cid-xahix5fp> ${skillCardItems.map((item) => renderTemplate`<li class="enter-animation" data-astro-cid-xahix5fp> ${renderComponent($$result2, "SkillCard", $$SkillCard, { "item": item, "data-astro-cid-xahix5fp": true })} </li>`)} </ul>`} </article> ` })} `;
}, "C:/Users/sande/Documents/GitHub/portfolio/src/pages/skills.astro", void 0);

const $$file = "C:/Users/sande/Documents/GitHub/portfolio/src/pages/skills.astro";
const $$url = "/skills";

export { $$Skills as default, $$file as file, prerender, $$url as url };
