/* empty css                          */import 'kleur/colors';
import 'node:fs/promises';
import 'node:path';
import 'node:url';
import 'http-cache-semantics';
import 'node:os';
import 'image-size';
import 'magic-string';
import 'node:stream';
import 'slash';
import mime from 'mime';
import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderSlot, s as spreadAttributes, u as unescapeHTML, e as renderComponent, F as Fragment, f as renderHead, g as createVNode, h as createCollectionToGlobResultMap, i as createGetCollection } from '../astro.f79604bc.mjs';
import { optimize } from 'svgo';
/* empty css                             *//* empty css                                   */
const $$Astro$F = createAstro("https://boekhouder-het-gooi.nl");
const $$Container = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$F, $$props, $$slots);
  Astro2.self = $$Container;
  const { class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<div${addAttribute(["max-w-screen-xl mx-auto px-5", className], "class:list")}>
  ${renderSlot($$result, $$slots["default"])}
</div>`;
}, "/Users/nt-macbook/code/boekhouder-tailwind/src/components/container.astro");

const $$Astro$E = createAstro("https://boekhouder-het-gooi.nl");
const $$PricingTables = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$E, $$props, $$slots);
  Astro2.self = $$PricingTables;
  return renderTemplate`${maybeRenderHead($$result)}<div class="bg-lightblue py-14">

  <div class="container mx-auto px-4 max-w-5xl">

    <div class="text-center my-8">
      <h2 class="text-2xl lg:text-3xl font-bold lg:tracking-tight">
        Hoeveel kost een boekhouder
      </h2>
      <p class="text-lg mt-4 text-slate-600">
        Slechts een fractie van wat jij kunt besparen
      </p>
    </div>



<div class="flex flex-col items-center justify-center mt-16 space-y-8 lg:flex-row lg:items-stretch lg:space-x-8 lg:space-y-0">

    
        <section class="flex flex-col w-full max-w-sm p-12 space-y-6 bg-white rounded-lg shadow-md">
          <!-- Price -->

           <div class="text-center">
            <h2 class="text-2xl font-normal">Starter</h2>
           </div>

          <div class=" pb-6 text-center border-b">
            <span class="text-6xl font-medium ">€69</span>
            <span class="text-gray-400">/maand</span>
          </div>

          <!-- Features -->
          <ul class="space-y-4">
                     
              <li class="flex items-start">
                <svg class="w-6 h-6 text-green-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                <span class="ml-3 text-base font-medium" x-text="feature">10 mutaties per maand</span>
              </li>

              <li class="flex items-start">
                <svg class="w-6 h-6 text-green-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                <span class="ml-3 text-base font-medium" x-text="feature">Boekhouding</span>
              </li>

                            <li class="flex items-start">
                <svg class="w-6 h-6 text-green-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                <span class="ml-3 text-base font-medium" x-text="feature">Jaarcijfers</span>
              </li>

                            <li class="flex items-start">
                <svg class="w-6 h-6 text-green-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                <span class="ml-3 text-base font-medium" x-text="feature">Omzetbelasting (BTW)</span>
              </li>

                            <li class="flex items-start">
                <svg class="w-6 h-6 text-green-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                <span class="ml-3 text-base font-medium" x-text="feature">Inkomstenbelasting (IB)</span>
              </li>
            
            
            </ul>

        </section>

                <section class="flex flex-col w-full max-w-sm p-12 space-y-6 bg-white rounded-lg shadow-md">
          <!-- Price -->

           <div class="text-center">
            <h2 class="text-2xl font-normal">ZZP'er</h2>
           </div>

          <div class=" pb-6 text-center border-b">
            <span class="text-6xl font-medium ">€89</span>
            <span class="text-gray-400">/maand</span>
          </div>

          <!-- Features -->
          <ul class="space-y-4">
                     
              <li class="flex items-start">
                <svg class="w-6 h-6 text-green-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                <span class="ml-3 text-base font-medium" x-text="feature">10 mutaties per maand</span>
              </li>

              <li class="flex items-start">
                <svg class="w-6 h-6 text-green-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                <span class="ml-3 text-base font-medium" x-text="feature">Boekhouding</span>
              </li>

                            <li class="flex items-start">
                <svg class="w-6 h-6 text-green-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                <span class="ml-3 text-base font-medium" x-text="feature">Jaarcijfers</span>
              </li>

                            <li class="flex items-start">
                <svg class="w-6 h-6 text-green-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                <span class="ml-3 text-base font-medium" x-text="feature">Omzetbelasting (BTW)</span>
              </li>

                            <li class="flex items-start">
                <svg class="w-6 h-6 text-green-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                <span class="ml-3 text-base font-medium" x-text="feature">Inkomstenbelasting (IB)</span>
              </li>
            
            
            </ul>

        </section>

                <section class="flex flex-col w-full max-w-sm p-12 space-y-6 bg-white rounded-lg shadow-md">
          <!-- Price -->

           <div class="text-center">
            <h2 class="text-2xl font-normal">VOF / BV</h2>
           </div>

          <div class=" pb-6 text-center border-b">
            <span class="text-6xl font-medium ">€109</span>
            <span class="text-gray-400">/maand</span>
          </div>

          <!-- Features -->
          <ul class="space-y-4">
                     
              <li class="flex items-start">
                <svg class="w-6 h-6 text-green-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                <span class="ml-3 text-base font-medium" x-text="feature">10 mutaties per maand</span>
              </li>

              <li class="flex items-start">
                <svg class="w-6 h-6 text-green-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                <span class="ml-3 text-base font-medium" x-text="feature">Boekhouding</span>
              </li>

              <li class="flex items-start">
                <svg class="w-6 h-6 text-green-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                <span class="ml-3 text-base font-medium" x-text="feature">Jaarcijfers</span>
              </li>

                <li class="flex items-start">
                <svg class="w-6 h-6 text-green-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                <span class="ml-3 text-base font-medium" x-text="feature">Omzetbelasting (BTW)</span>
              </li>

                <li class="flex items-start">
                <svg class="w-6 h-6 text-green-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                <span class="ml-3 text-base font-medium" x-text="feature">Inkomstenbelasting (IB)</span>
              </li>
            
            
            </ul>

        </section>
      
       
      </div>

  </div>
</div>`;
}, "/Users/nt-macbook/code/boekhouder-tailwind/src/components/pricingTables.astro");

const SPRITESHEET_NAMESPACE = `astroicon`;

const baseURL = "https://api.astroicon.dev/v1/";
const requests = /* @__PURE__ */ new Map();
const fetchCache = /* @__PURE__ */ new Map();
async function get(pack, name) {
  const url = new URL(`./${pack}/${name}`, baseURL).toString();
  if (requests.has(url)) {
    return await requests.get(url);
  }
  if (fetchCache.has(url)) {
    return fetchCache.get(url);
  }
  let request = async () => {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(await res.text());
    }
    const contentType = res.headers.get("Content-Type");
    if (!contentType.includes("svg")) {
      throw new Error(`[astro-icon] Unable to load "${name}" because it did not resolve to an SVG!

Recieved the following "Content-Type":
${contentType}`);
    }
    const svg = await res.text();
    fetchCache.set(url, svg);
    requests.delete(url);
    return svg;
  };
  let promise = request();
  requests.set(url, promise);
  return await promise;
}

const splitAttrsTokenizer = /([a-z0-9_\:\-]*)\s*?=\s*?(['"]?)(.*?)\2\s+/gim;
const domParserTokenizer = /(?:<(\/?)([a-zA-Z][a-zA-Z0-9\:]*)(?:\s([^>]*?))?((?:\s*\/)?)>|(<\!\-\-)([\s\S]*?)(\-\->)|(<\!\[CDATA\[)([\s\S]*?)(\]\]>))/gm;
const splitAttrs = (str) => {
  let res = {};
  let token;
  if (str) {
    splitAttrsTokenizer.lastIndex = 0;
    str = " " + (str || "") + " ";
    while (token = splitAttrsTokenizer.exec(str)) {
      res[token[1]] = token[3];
    }
  }
  return res;
};
function optimizeSvg(contents, name, options) {
  return optimize(contents, {
    plugins: [
      "removeDoctype",
      "removeXMLProcInst",
      "removeComments",
      "removeMetadata",
      "removeXMLNS",
      "removeEditorsNSData",
      "cleanupAttrs",
      "minifyStyles",
      "convertStyleToAttrs",
      {
        name: "cleanupIDs",
        params: { prefix: `${SPRITESHEET_NAMESPACE}:${name}` }
      },
      "removeRasterImages",
      "removeUselessDefs",
      "cleanupNumericValues",
      "cleanupListOfValues",
      "convertColors",
      "removeUnknownsAndDefaults",
      "removeNonInheritableGroupAttrs",
      "removeUselessStrokeAndFill",
      "removeViewBox",
      "cleanupEnableBackground",
      "removeHiddenElems",
      "removeEmptyText",
      "convertShapeToPath",
      "moveElemsAttrsToGroup",
      "moveGroupAttrsToElems",
      "collapseGroups",
      "convertPathData",
      "convertTransform",
      "removeEmptyAttrs",
      "removeEmptyContainers",
      "mergePaths",
      "removeUnusedNS",
      "sortAttrs",
      "removeTitle",
      "removeDesc",
      "removeDimensions",
      "removeStyleElement",
      "removeScriptElement"
    ]
  }).data;
}
const preprocessCache = /* @__PURE__ */ new Map();
function preprocess(contents, name, { optimize }) {
  if (preprocessCache.has(contents)) {
    return preprocessCache.get(contents);
  }
  if (optimize) {
    contents = optimizeSvg(contents, name);
  }
  domParserTokenizer.lastIndex = 0;
  let result = contents;
  let token;
  if (contents) {
    while (token = domParserTokenizer.exec(contents)) {
      const tag = token[2];
      if (tag === "svg") {
        const attrs = splitAttrs(token[3]);
        result = contents.slice(domParserTokenizer.lastIndex).replace(/<\/svg>/gim, "").trim();
        const value = { innerHTML: result, defaultProps: attrs };
        preprocessCache.set(contents, value);
        return value;
      }
    }
  }
}
function normalizeProps(inputProps) {
  const size = inputProps.size;
  delete inputProps.size;
  const w = inputProps.width ?? size;
  const h = inputProps.height ?? size;
  const width = w ? toAttributeSize(w) : void 0;
  const height = h ? toAttributeSize(h) : void 0;
  return { ...inputProps, width, height };
}
const toAttributeSize = (size) => String(size).replace(/(?<=[0-9])x$/, "em");
async function load(name, inputProps, optimize) {
  const key = name;
  if (!name) {
    throw new Error("<Icon> requires a name!");
  }
  let svg = "";
  let filepath = "";
  if (name.includes(":")) {
    const [pack, ..._name] = name.split(":");
    name = _name.join(":");
    filepath = `/src/icons/${pack}`;
    let get$1;
    try {
      const files = /* #__PURE__ */ Object.assign({

});
      const keys = Object.fromEntries(
        Object.keys(files).map((key2) => [key2.replace(/\.[cm]?[jt]s$/, ""), key2])
      );
      if (!(filepath in keys)) {
        throw new Error(`Could not find the file "${filepath}"`);
      }
      const mod = files[keys[filepath]];
      if (typeof mod.default !== "function") {
        throw new Error(
          `[astro-icon] "${filepath}" did not export a default function!`
        );
      }
      get$1 = mod.default;
    } catch (e) {
    }
    if (typeof get$1 === "undefined") {
      get$1 = get.bind(null, pack);
    }
    const contents = await get$1(name, inputProps);
    if (!contents) {
      throw new Error(
        `<Icon pack="${pack}" name="${name}" /> did not return an icon!`
      );
    }
    if (!/<svg/gim.test(contents)) {
      throw new Error(
        `Unable to process "<Icon pack="${pack}" name="${name}" />" because an SVG string was not returned!

Recieved the following content:
${contents}`
      );
    }
    svg = contents;
  } else {
    filepath = `/src/icons/${name}.svg`;
    try {
      const files = /* #__PURE__ */ Object.assign({});
      if (!(filepath in files)) {
        throw new Error(`Could not find the file "${filepath}"`);
      }
      const contents = files[filepath];
      if (!/<svg/gim.test(contents)) {
        throw new Error(
          `Unable to process "${filepath}" because it is not an SVG!

Recieved the following content:
${contents}`
        );
      }
      svg = contents;
    } catch (e) {
      throw new Error(
        `[astro-icon] Unable to load "${filepath}". Does the file exist?`
      );
    }
  }
  const { innerHTML, defaultProps } = preprocess(svg, key, { optimize });
  if (!innerHTML.trim()) {
    throw new Error(`Unable to parse "${filepath}"!`);
  }
  return {
    innerHTML,
    props: { ...defaultProps, ...normalizeProps(inputProps) }
  };
}

const $$Astro$D = createAstro("https://boekhouder-het-gooi.nl");
const $$Icon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$D, $$props, $$slots);
  Astro2.self = $$Icon;
  let { name, pack, title, optimize = true, class: className, ...inputProps } = Astro2.props;
  let props = {};
  if (pack) {
    name = `${pack}:${name}`;
  }
  let innerHTML = "";
  try {
    const svg = await load(name, { ...inputProps, class: className }, optimize);
    innerHTML = svg.innerHTML;
    props = svg.props;
  } catch (e) {
    {
      throw new Error(`[astro-icon] Unable to load icon "${name}"!
${e}`);
    }
  }
  return renderTemplate`${maybeRenderHead($$result)}<svg${spreadAttributes(props)}${addAttribute(name, "astro-icon")}>${unescapeHTML((title ? `<title>${title}</title>` : "") + innerHTML)}</svg>`;
}, "/Users/nt-macbook/code/boekhouder-tailwind/node_modules/astro-icon/lib/Icon.astro");

const sprites = /* @__PURE__ */ new WeakMap();
function trackSprite(request, name) {
  let currentSet = sprites.get(request);
  if (!currentSet) {
    currentSet = /* @__PURE__ */ new Set([name]);
  } else {
    currentSet.add(name);
  }
  sprites.set(request, currentSet);
}
const warned = /* @__PURE__ */ new Set();
async function getUsedSprites(request) {
  const currentSet = sprites.get(request);
  if (currentSet) {
    return Array.from(currentSet);
  }
  if (!warned.has(request)) {
    const { pathname } = new URL(request.url);
    console.log(`[astro-icon] No sprites found while rendering "${pathname}"`);
    warned.add(request);
  }
  return [];
}

const $$Astro$C = createAstro("https://boekhouder-het-gooi.nl");
const $$Spritesheet = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$C, $$props, $$slots);
  Astro2.self = $$Spritesheet;
  const { optimize = true, style, ...props } = Astro2.props;
  const names = await getUsedSprites(Astro2.request);
  const icons = await Promise.all(names.map((name) => {
    return load(name, {}, optimize).then((res) => ({ ...res, name })).catch((e) => {
      {
        throw new Error(`[astro-icon] Unable to load icon "${name}"!
${e}`);
      }
    });
  }));
  return renderTemplate`${maybeRenderHead($$result)}<svg${addAttribute(`position: absolute; width: 0; height: 0; overflow: hidden; ${style ?? ""}`.trim(), "style")}${spreadAttributes({ "aria-hidden": true, ...props })} astro-icon-spritesheet>
    ${icons.map((icon) => renderTemplate`<symbol${spreadAttributes(icon.props)}${addAttribute(`${SPRITESHEET_NAMESPACE}:${icon.name}`, "id")}>${unescapeHTML(icon.innerHTML)}</symbol>`)}
</svg>`;
}, "/Users/nt-macbook/code/boekhouder-tailwind/node_modules/astro-icon/lib/Spritesheet.astro");

const $$Astro$B = createAstro("https://boekhouder-het-gooi.nl");
const $$SpriteProvider = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$B, $$props, $$slots);
  Astro2.self = $$SpriteProvider;
  const content = await Astro2.slots.render("default");
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": () => renderTemplate`${unescapeHTML(content)}` })}
${renderComponent($$result, "Spritesheet", $$Spritesheet, {})}`;
}, "/Users/nt-macbook/code/boekhouder-tailwind/node_modules/astro-icon/lib/SpriteProvider.astro");

const $$Astro$A = createAstro("https://boekhouder-het-gooi.nl");
const $$Sprite = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$A, $$props, $$slots);
  Astro2.self = $$Sprite;
  let { name, pack, title, class: className, x, y, ...inputProps } = Astro2.props;
  const props = normalizeProps(inputProps);
  if (pack) {
    name = `${pack}:${name}`;
  }
  const href = `#${SPRITESHEET_NAMESPACE}:${name}`;
  trackSprite(Astro2.request, name);
  return renderTemplate`${maybeRenderHead($$result)}<svg${spreadAttributes(props)}${addAttribute(className, "class")}${addAttribute(name, "astro-icon")}>
    ${title ? renderTemplate`<title>${title}</title>` : ""}
    <use${spreadAttributes({ "xlink:href": href, width: props.width, height: props.height, x, y })}></use>
</svg>`;
}, "/Users/nt-macbook/code/boekhouder-tailwind/node_modules/astro-icon/lib/Sprite.astro");

Object.assign($$Sprite, { Provider: $$SpriteProvider });

const $$Astro$z = createAstro("https://boekhouder-het-gooi.nl");
const $$Usp = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$z, $$props, $$slots);
  Astro2.self = $$Usp;
  const features = [
    {
      title: "Administratie",
      description: "Boekhouder in 't Gooi zorgt ervoor dat uw administratie in onze handen ligt. Hierbij hoeft u zich geen zorgen meer te maken en wordt alles gedaan naar uw wens.",
      icon: "bx:bxs-briefcase"
    },
    {
      title: "Belastingaangifte",
      description: "Meestal ontvangt u automatisch bericht dat u aangifte moet doen. Maar ook als u geen bericht krijgt, kan het zijn dat u aangifte moet doen.",
      icon: "bx:bxs-window-alt"
    },
    {
      title: "Fiscaal advies",
      description: "U weet altijd wat u van ons kunt verwachten en wat het gaat kosten.",
      icon: "bx:bxs-data"
    },
    {
      title: "Jaarrekening",
      description: "Wij kennen uw financi\xEBle situatie en kunnen u duidelijk en helder adviseren bij belangrijke beslissingen.",
      icon: "bx:bxs-bot"
    },
    {
      title: "Bedrijfsadvies",
      description: "Een goed begin is het halve werk! Wij begrijpen dat startende ondernemers meer behoefte hebben aan begeleiding en de mogelijkheid tot het stellen van vragen.",
      icon: "bx:bxs-file-find"
    },
    {
      title: "Lagere kosten",
      description: "Een besparing tot 40% op uw administratiekosten is mogelijk. Wij werken met vaste tarieven en u krijgt geen verassingen achteraf.",
      icon: "bx:bxs-user"
    }
  ];
  return renderTemplate`${maybeRenderHead($$result)}<div class="bg-darkblue py-14">
    <div class="container mx-auto px-4 max-w-5xl">
        <div class="text-center my-8">
            <h2 class="text-white text-2xl lg:text-3xl font-bold lg:tracking-tight">
                Hoeveel kost een boekhouder
            </h2>
            <p class="text-white text-lg mt-4">
                Slechts een fractie van wat jij kunt besparen
            </p>
        </div>
        <div class="grid sm:grid-cols-2 md:grid-cols-3 mt-4 gap-4 ">
            ${features.map((item) => renderTemplate`<div class="flex gap-4 items-start text-center bg-white rounded-lg shadow-md py-20 px-7">
                <div>
                    ${renderComponent($$result, "Icon", $$Icon, { "class": "h-20 w-20 mx-auto", "name": item.icon })}
                    <h3 class="font-bold text-xl mt-4">${item.title}</h3>${" "}
                    <p class="mt-2 py-5">${item.description}</p>
                </div>
            </div>`)}
        </div>
    </div>
</div>`;
}, "/Users/nt-macbook/code/boekhouder-tailwind/src/components/usp.astro");

function isRemoteImage(src) {
  return /^(https?:)?\/\//.test(src);
}
function removeQueryString(src) {
  const index = src.lastIndexOf("?");
  return index > 0 ? src.substring(0, index) : src;
}
function extname(src) {
  const base = basename(src);
  const index = base.lastIndexOf(".");
  if (index <= 0) {
    return "";
  }
  return base.substring(index);
}
function basename(src) {
  return removeQueryString(src.replace(/^.*[\\\/]/, ""));
}

function isOutputFormat(value) {
  return ["avif", "jpeg", "jpg", "png", "webp"].includes(value);
}
function isOutputFormatSupportsAlpha(value) {
  return ["avif", "png", "webp"].includes(value);
}
function isAspectRatioString(value) {
  return /^\d*:\d*$/.test(value);
}
function parseAspectRatio(aspectRatio) {
  if (!aspectRatio) {
    return void 0;
  }
  if (typeof aspectRatio === "number") {
    return aspectRatio;
  } else {
    const [width, height] = aspectRatio.split(":");
    return parseInt(width) / parseInt(height);
  }
}
function isSSRService(service) {
  return "transform" in service;
}
class BaseSSRService {
  async getImageAttributes(transform) {
    const { width, height, src, format, quality, aspectRatio, ...rest } = transform;
    return {
      ...rest,
      width,
      height
    };
  }
  serializeTransform(transform) {
    const searchParams = new URLSearchParams();
    if (transform.quality) {
      searchParams.append("q", transform.quality.toString());
    }
    if (transform.format) {
      searchParams.append("f", transform.format);
    }
    if (transform.width) {
      searchParams.append("w", transform.width.toString());
    }
    if (transform.height) {
      searchParams.append("h", transform.height.toString());
    }
    if (transform.aspectRatio) {
      searchParams.append("ar", transform.aspectRatio.toString());
    }
    if (transform.fit) {
      searchParams.append("fit", transform.fit);
    }
    if (transform.background) {
      searchParams.append("bg", transform.background);
    }
    if (transform.position) {
      searchParams.append("p", encodeURI(transform.position));
    }
    searchParams.append("href", transform.src);
    return { searchParams };
  }
  parseTransform(searchParams) {
    if (!searchParams.has("href")) {
      return void 0;
    }
    let transform = { src: searchParams.get("href") };
    if (searchParams.has("q")) {
      transform.quality = parseInt(searchParams.get("q"));
    }
    if (searchParams.has("f")) {
      const format = searchParams.get("f");
      if (isOutputFormat(format)) {
        transform.format = format;
      }
    }
    if (searchParams.has("w")) {
      transform.width = parseInt(searchParams.get("w"));
    }
    if (searchParams.has("h")) {
      transform.height = parseInt(searchParams.get("h"));
    }
    if (searchParams.has("ar")) {
      const ratio = searchParams.get("ar");
      if (isAspectRatioString(ratio)) {
        transform.aspectRatio = ratio;
      } else {
        transform.aspectRatio = parseFloat(ratio);
      }
    }
    if (searchParams.has("fit")) {
      transform.fit = searchParams.get("fit");
    }
    if (searchParams.has("p")) {
      transform.position = decodeURI(searchParams.get("p"));
    }
    if (searchParams.has("bg")) {
      transform.background = searchParams.get("bg");
    }
    return transform;
  }
}

function resolveSize(transform) {
  if (transform.width && transform.height) {
    return transform;
  }
  if (!transform.width && !transform.height) {
    throw new Error(`"width" and "height" cannot both be undefined`);
  }
  if (!transform.aspectRatio) {
    throw new Error(
      `"aspectRatio" must be included if only "${transform.width ? "width" : "height"}" is provided`
    );
  }
  let aspectRatio;
  if (typeof transform.aspectRatio === "number") {
    aspectRatio = transform.aspectRatio;
  } else {
    const [width, height] = transform.aspectRatio.split(":");
    aspectRatio = Number.parseInt(width) / Number.parseInt(height);
  }
  if (transform.width) {
    return {
      ...transform,
      width: transform.width,
      height: Math.round(transform.width / aspectRatio)
    };
  } else if (transform.height) {
    return {
      ...transform,
      width: Math.round(transform.height * aspectRatio),
      height: transform.height
    };
  }
  return transform;
}
async function resolveTransform(input) {
  if (typeof input.src === "string") {
    return resolveSize(input);
  }
  const metadata = "then" in input.src ? (await input.src).default : input.src;
  let { width, height, aspectRatio, background, format = metadata.format, ...rest } = input;
  if (!width && !height) {
    width = metadata.width;
    height = metadata.height;
  } else if (width) {
    let ratio = parseAspectRatio(aspectRatio) || metadata.width / metadata.height;
    height = height || Math.round(width / ratio);
  } else if (height) {
    let ratio = parseAspectRatio(aspectRatio) || metadata.width / metadata.height;
    width = width || Math.round(height * ratio);
  }
  return {
    ...rest,
    src: metadata.src,
    width,
    height,
    aspectRatio,
    format,
    background
  };
}
async function getImage(transform) {
  var _a, _b, _c;
  if (!transform.src) {
    throw new Error("[@astrojs/image] `src` is required");
  }
  let loader = (_a = globalThis.astroImage) == null ? void 0 : _a.loader;
  if (!loader) {
    const { default: mod } = await import('../sharp.81b1bac2.mjs').catch(() => {
      throw new Error(
        "[@astrojs/image] Builtin image loader not found. (Did you remember to add the integration to your Astro config?)"
      );
    });
    loader = mod;
    globalThis.astroImage = globalThis.astroImage || {};
    globalThis.astroImage.loader = loader;
  }
  const resolved = await resolveTransform(transform);
  const attributes = await loader.getImageAttributes(resolved);
  const isDev = (_b = (Object.assign({"BASE_URL":"/","MODE":"production","DEV":false,"PROD":true},{_:process.env._,SSR:true,}))) == null ? void 0 : _b.DEV;
  const isLocalImage = !isRemoteImage(resolved.src);
  const _loader = isDev && isLocalImage ? globalThis.astroImage.defaultLoader : loader;
  if (!_loader) {
    throw new Error("@astrojs/image: loader not found!");
  }
  const { searchParams } = isSSRService(_loader) ? _loader.serializeTransform(resolved) : globalThis.astroImage.defaultLoader.serializeTransform(resolved);
  const imgSrc = !isLocalImage && resolved.src.startsWith("//") ? `https:${resolved.src}` : resolved.src;
  let src;
  if (/^[\/\\]?@astroimage/.test(imgSrc)) {
    src = `${imgSrc}?${searchParams.toString()}`;
  } else {
    searchParams.set("href", imgSrc);
    src = `/_image?${searchParams.toString()}`;
  }
  if ((_c = globalThis.astroImage) == null ? void 0 : _c.addStaticImage) {
    src = globalThis.astroImage.addStaticImage(resolved);
  }
  return {
    ...attributes,
    src
  };
}

async function resolveAspectRatio({ src, aspectRatio }) {
  if (typeof src === "string") {
    return parseAspectRatio(aspectRatio);
  } else {
    const metadata = "then" in src ? (await src).default : src;
    return parseAspectRatio(aspectRatio) || metadata.width / metadata.height;
  }
}
async function resolveFormats({ src, formats }) {
  const unique = new Set(formats);
  if (typeof src === "string") {
    unique.add(extname(src).replace(".", ""));
  } else {
    const metadata = "then" in src ? (await src).default : src;
    unique.add(extname(metadata.src).replace(".", ""));
  }
  return Array.from(unique).filter(Boolean);
}
async function getPicture(params) {
  const { src, alt, widths, fit, position, background } = params;
  if (!src) {
    throw new Error("[@astrojs/image] `src` is required");
  }
  if (!widths || !Array.isArray(widths)) {
    throw new Error("[@astrojs/image] at least one `width` is required. ex: `widths={[100]}`");
  }
  const aspectRatio = await resolveAspectRatio(params);
  if (!aspectRatio) {
    throw new Error("`aspectRatio` must be provided for remote images");
  }
  const allFormats = await resolveFormats(params);
  const lastFormat = allFormats[allFormats.length - 1];
  const maxWidth = Math.max(...widths);
  let image;
  async function getSource(format) {
    const imgs = await Promise.all(
      widths.map(async (width) => {
        const img = await getImage({
          src,
          alt,
          format,
          width,
          fit,
          position,
          background,
          aspectRatio
        });
        if (format === lastFormat && width === maxWidth) {
          image = img;
        }
        return `${img.src} ${width}w`;
      })
    );
    return {
      type: mime.getType(format) || format,
      srcset: imgs.join(",")
    };
  }
  const sources = await Promise.all(allFormats.map((format) => getSource(format)));
  return {
    sources,
    image
  };
}

const $$Astro$y = createAstro("https://boekhouder-het-gooi.nl");
const $$Image = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$y, $$props, $$slots);
  Astro2.self = $$Image;
  const { loading = "lazy", decoding = "async", ...props } = Astro2.props;
  if (props.alt === void 0 || props.alt === null) {
    warnForMissingAlt();
  }
  const attrs = await getImage(props);
  return renderTemplate`${maybeRenderHead($$result)}<img${spreadAttributes(attrs)}${addAttribute(loading, "loading")}${addAttribute(decoding, "decoding")}>`;
}, "/Users/nt-macbook/code/boekhouder-tailwind/node_modules/@astrojs/image/components/Image.astro");

const $$Astro$x = createAstro("https://boekhouder-het-gooi.nl");
const $$Picture = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$x, $$props, $$slots);
  Astro2.self = $$Picture;
  const {
    src,
    alt,
    sizes,
    widths,
    aspectRatio,
    fit,
    background,
    position,
    formats = ["avif", "webp"],
    loading = "lazy",
    decoding = "async",
    ...attrs
  } = Astro2.props;
  if (alt === void 0 || alt === null) {
    warnForMissingAlt();
  }
  const { image, sources } = await getPicture({
    src,
    widths,
    formats,
    aspectRatio,
    fit,
    background,
    position,
    alt
  });
  delete image.width;
  delete image.height;
  return renderTemplate`${maybeRenderHead($$result)}<picture>
	${sources.map((attrs2) => renderTemplate`<source${spreadAttributes(attrs2)}${addAttribute(sizes, "sizes")}>`)}
	<img${spreadAttributes(image)}${addAttribute(loading, "loading")}${addAttribute(decoding, "decoding")}${addAttribute(alt, "alt")}${spreadAttributes(attrs)}>
</picture>`;
}, "/Users/nt-macbook/code/boekhouder-tailwind/node_modules/@astrojs/image/components/Picture.astro");

let altWarningShown = false;
function warnForMissingAlt() {
  if (altWarningShown === true) {
    return;
  }
  altWarningShown = true;
  console.warn(`
[@astrojs/image] "alt" text was not provided for an <Image> or <Picture> component.

A future release of @astrojs/image may throw a build error when "alt" text is missing.

The "alt" attribute holds a text description of the image, which isn't mandatory but is incredibly useful for accessibility. Set to an empty string (alt="") if the image is not a key part of the content (it's decoration or a tracking pixel).
`);
}

const headerImage = "/_astro/woman-laptop.732d5a50.svg";

const $$Astro$w = createAstro("https://boekhouder-het-gooi.nl");
const $$Hero = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$w, $$props, $$slots);
  Astro2.self = $$Hero;
  return renderTemplate`${maybeRenderHead($$result)}<div class="flex flex-col max-w-5xl mx-auto my-16 lg:flex-row lg:items-stretch lg:space-x-8 lg:space-y-0">
    <section class="flex flex-col w-full space-y-6 flex items-left justify-center ">
        <h1 class="text-5xl lg:text-6xl xl:text-6xl font-bold">
            Boekhouding
        </h1>
        <p class="text-xl mt-4 text-slate-600 font-light">Doe waar je goed in bent, wij doen de rest</p>
    </section>
    <section class="flex flex-col w-full space-y-6 ">
        <div class="py-6 md:order-1 hidden md:block">
           ${renderComponent($$result, "Picture", $$Picture, { "src": headerImage, "alt": "Vrouw met laptop", "widths": [200, 400, 600], "aspectRatio": "4:3", "sizes": "(max-width: 600px) 100vw, 620px", "loading": "eager", "format": "svg" })}
        </div>
    </section>
</div>`;
}, "/Users/nt-macbook/code/boekhouder-tailwind/src/components/hero.astro");

const $$Astro$v = createAstro("https://boekhouder-het-gooi.nl");
const $$OpenGraphArticleTags = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$v, $$props, $$slots);
  Astro2.self = $$OpenGraphArticleTags;
  const { publishedTime, modifiedTime, expirationTime, authors, section, tags } = Astro2.props.openGraph.article;
  return renderTemplate`${publishedTime ? renderTemplate`<meta property="article:published_time"${addAttribute(publishedTime, "content")}>` : null}
${modifiedTime ? renderTemplate`<meta property="article:modified_time"${addAttribute(modifiedTime, "content")}>` : null}
${expirationTime ? renderTemplate`<meta property="article:expiration_time"${addAttribute(expirationTime, "content")}>` : null}
${authors ? authors.map((author) => renderTemplate`<meta property="article:author"${addAttribute(author, "content")}>`) : null}
${section ? renderTemplate`<meta property="article:section"${addAttribute(section, "content")}>` : null}
${tags ? tags.map((tag) => renderTemplate`<meta property="article:tag"${addAttribute(tag, "content")}>`) : null}`;
}, "/Users/nt-macbook/code/boekhouder-tailwind/node_modules/astro-seo/src/components/OpenGraphArticleTags.astro");

const $$Astro$u = createAstro("https://boekhouder-het-gooi.nl");
const $$OpenGraphBasicTags = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$u, $$props, $$slots);
  Astro2.self = $$OpenGraphBasicTags;
  const { openGraph } = Astro2.props;
  return renderTemplate`<meta property="og:title"${addAttribute(openGraph.basic.title, "content")}>
<meta property="og:type"${addAttribute(openGraph.basic.type, "content")}>
<meta property="og:image"${addAttribute(openGraph.basic.image, "content")}>
<meta property="og:url"${addAttribute(openGraph.basic.url || Astro2.url.href, "content")}>`;
}, "/Users/nt-macbook/code/boekhouder-tailwind/node_modules/astro-seo/src/components/OpenGraphBasicTags.astro");

const $$Astro$t = createAstro("https://boekhouder-het-gooi.nl");
const $$OpenGraphImageTags = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$t, $$props, $$slots);
  Astro2.self = $$OpenGraphImageTags;
  const { image } = Astro2.props.openGraph.basic;
  const { url, secureUrl, type, width, height, alt } = Astro2.props.openGraph.image;
  return renderTemplate`<meta property="og:image:url"${addAttribute(image, "content")}>
${secureUrl ? renderTemplate`<meta property="og:image:secure_url"${addAttribute(secureUrl, "content")}>` : null}
${type ? renderTemplate`<meta property="og:image:type"${addAttribute(type, "content")}>` : null}
${width ? renderTemplate`<meta property="og:image:width"${addAttribute(width, "content")}>` : null}
${!(height === null) ? renderTemplate`<meta property="og:image:height"${addAttribute(height, "content")}>` : null}
${!(alt === null) ? renderTemplate`<meta property="og:image:alt"${addAttribute(alt, "content")}>` : null}`;
}, "/Users/nt-macbook/code/boekhouder-tailwind/node_modules/astro-seo/src/components/OpenGraphImageTags.astro");

const $$Astro$s = createAstro("https://boekhouder-het-gooi.nl");
const $$OpenGraphOptionalTags = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$s, $$props, $$slots);
  Astro2.self = $$OpenGraphOptionalTags;
  const { optional } = Astro2.props.openGraph;
  return renderTemplate`${optional.audio ? renderTemplate`<meta property="og:audio"${addAttribute(optional.audio, "content")}>` : null}
${optional.description ? renderTemplate`<meta property="og:description"${addAttribute(optional.description, "content")}>` : null}
${optional.determiner ? renderTemplate`<meta property="og:determiner"${addAttribute(optional.determiner, "content")}>` : null}
${optional.locale ? renderTemplate`<meta property="og:locale"${addAttribute(optional.locale, "content")}>` : null}
${optional.localeAlternate?.map((locale) => renderTemplate`<meta property="og:locale:alternate"${addAttribute(locale, "content")}>`)}
${optional.siteName ? renderTemplate`<meta property="og:site_name"${addAttribute(optional.siteName, "content")}>` : null}
${optional.video ? renderTemplate`<meta property="og:video"${addAttribute(optional.video, "content")}>` : null}`;
}, "/Users/nt-macbook/code/boekhouder-tailwind/node_modules/astro-seo/src/components/OpenGraphOptionalTags.astro");

const $$Astro$r = createAstro("https://boekhouder-het-gooi.nl");
const $$ExtendedTags = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$r, $$props, $$slots);
  Astro2.self = $$ExtendedTags;
  const { props } = Astro2;
  return renderTemplate`${props.extend.link?.map((attributes) => renderTemplate`<link${spreadAttributes(attributes)}>`)}
${props.extend.meta?.map(({ content, httpEquiv, name, property }) => renderTemplate`<meta${addAttribute(content, "content")}${addAttribute(httpEquiv, "http-eqiv")}${addAttribute(name, "name")}${addAttribute(property, "property")}>`)}`;
}, "/Users/nt-macbook/code/boekhouder-tailwind/node_modules/astro-seo/src/components/ExtendedTags.astro");

const $$Astro$q = createAstro("https://boekhouder-het-gooi.nl");
const $$TwitterTags = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$q, $$props, $$slots);
  Astro2.self = $$TwitterTags;
  const { card, site, title, creator, description, image, imageAlt } = Astro2.props.twitter;
  return renderTemplate`${card ? renderTemplate`<meta name="twitter:card"${addAttribute(card, "content")}>` : null}
${site ? renderTemplate`<meta name="twitter:site"${addAttribute(site, "content")}>` : null}
${title ? renderTemplate`<meta name="twitter:title"${addAttribute(title, "content")}>` : null}
${image ? renderTemplate`<meta name="twitter:image"${addAttribute(image, "content")}>` : null}
${imageAlt ? renderTemplate`<meta name="twitter:image:alt"${addAttribute(imageAlt, "content")}>` : null}
${description ? renderTemplate`<meta name="twitter:description"${addAttribute(description, "content")}>` : null}
${creator ? renderTemplate`<meta name="twitter:creator"${addAttribute(creator, "content")}>` : null}`;
}, "/Users/nt-macbook/code/boekhouder-tailwind/node_modules/astro-seo/src/components/TwitterTags.astro");

const $$Astro$p = createAstro("https://boekhouder-het-gooi.nl");
const $$SEO = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$p, $$props, $$slots);
  Astro2.self = $$SEO;
  const { props } = Astro2;
  const { title, description, canonical, noindex, nofollow, charset } = props;
  function validateProps(props2) {
    const { openGraph, description: description2 } = props2;
    if (openGraph) {
      if (!openGraph.basic || openGraph.basic.title == null || openGraph.basic.type == null || openGraph.basic.image == null) {
        throw new Error(
          "If you pass the openGraph prop, you have to at least define the title, type, and image basic properties!"
        );
      }
    }
    if (title && openGraph?.basic.title) {
      if (title == openGraph.basic.title) {
        console.warn(
          "WARNING(astro-seo): You passed the same value to `title` and `openGraph.optional.title`. This is most likely not what you want. See docs for more."
        );
      }
    }
    if (openGraph?.basic?.image && !openGraph?.image?.alt) {
      console.warn(
        "WARNING(astro-seo): You defined `openGraph.basic.image`, but didn't define `openGraph.image.alt`. This is stongly discouraged.'"
      );
    }
  }
  validateProps(props);
  return renderTemplate`${title ? renderTemplate`<title>${unescapeHTML(title)}</title>` : null}

${charset ? renderTemplate`<meta${addAttribute(charset, "charset")}>` : null}

<link rel="canonical"${addAttribute(canonical || Astro2.url.href, "href")}>

${description ? renderTemplate`<meta name="description"${addAttribute(description, "content")}>` : null}

<meta name="robots"${addAttribute(`${noindex ? "noindex" : "index"}, ${nofollow ? "nofollow" : "follow"}`, "content")}>

${props.openGraph && renderTemplate`${renderComponent($$result, "OpenGraphBasicTags", $$OpenGraphBasicTags, { ...props })}`}
${props.openGraph?.optional && renderTemplate`${renderComponent($$result, "OpenGraphOptionalTags", $$OpenGraphOptionalTags, { ...props })}`}
${props.openGraph?.image && renderTemplate`${renderComponent($$result, "OpenGraphImageTags", $$OpenGraphImageTags, { ...props })}`}
${props.openGraph?.article && renderTemplate`${renderComponent($$result, "OpenGraphArticleTags", $$OpenGraphArticleTags, { ...props })}`}
${props.twitter && renderTemplate`${renderComponent($$result, "TwitterTags", $$TwitterTags, { ...props })}`}
${props.extend && renderTemplate`${renderComponent($$result, "ExtendedTags", $$ExtendedTags, { ...props })}`}`;
}, "/Users/nt-macbook/code/boekhouder-tailwind/node_modules/astro-seo/src/SEO.astro");

const $$Astro$o = createAstro("https://boekhouder-het-gooi.nl");
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$o, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead($$result)}<footer class="p-4 sm:p-6 bg-brown">
    <div class="md:flex md:justify-between container mx-auto max-w-5xl">
        <div class="mb-6 md:mb-0">
            <a href="" class="flex items-center">
                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Boekhouder 't Gooi</span>
            </a>
        </div>
        <div class="grid grid-cols-2 gap-5 sm:gap-6 sm:grid-cols-3">
            <div>
                <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Diensten</h2>
                <ul class="text-gray-600 dark:text-gray-400">
                    <li class="mb-4">
                        <a href="https://flowbite.com/" class="hover:underline">Boekhouden</a>
                    </li>
                    <li>
                        <a href="https://tailwindcss.com/" class="hover:underline">Administratie</a>
                    </li>
                </ul>
            </div>
            <div>
                <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Werkgebied</h2>
                <ul class="text-gray-600 dark:text-gray-400">
                    <li class="mb-4">
                        <a href="https://github.com/themesberg/flowbite" class="hover:underline ">Boekhouder in Baarn</a>
                    </li>
                    <li>
                        <a href="https://discord.gg/4eeurUVvTy" class="hover:underline">Boekhouder in Hilversum</a>
                    </li>
                </ul>
            </div>
            <div>
            </div>
        </div>
    </div>
    <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8">
    <div class="sm:flex sm:items-center sm:justify-between mx-auto max-w-5xl">
        <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://e.com/" class="hover:underline">nomadicowls.com</a>
        </span>
</div></footer>`;
}, "/Users/nt-macbook/code/boekhouder-tailwind/src/components/footer.astro");

const $$Astro$n = createAstro("https://boekhouder-het-gooi.nl");
const $$Astronav = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$n, $$props, $$slots);
  Astro2.self = $$Astronav;
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": () => renderTemplate`${renderSlot($$result, $$slots["default"])}` })}

`;
}, "/Users/nt-macbook/code/boekhouder-tailwind/node_modules/astro-navbar/src/Astronav.astro");

const $$Astro$m = createAstro("https://boekhouder-het-gooi.nl");
const $$MenuIcon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$m, $$props, $$slots);
  Astro2.self = $$MenuIcon;
  const { class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<button id="astronav-menu">
  ${renderSlot($$result, $$slots["default"], renderTemplate`
    <svg fill="currentColor"${addAttribute([className], "class:list")} width="24" height="24" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <title>Menu</title>
      <path class="astronav-toggle hidden" fill-rule="evenodd" clip-rule="evenodd" d="M18.278 16.864a1 1 0 01-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 01-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 011.414-1.414l4.829 4.828 4.828-4.828a1 1 0 111.414 1.414l-4.828 4.829 4.828 4.828z"></path>
      <path class="astronav-toggle" fill-rule="evenodd" d="M4 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2z"></path>
    </svg>
  `)}
</button>`;
}, "/Users/nt-macbook/code/boekhouder-tailwind/node_modules/astro-navbar/src/components/MenuIcon.astro");

const $$Astro$l = createAstro("https://boekhouder-het-gooi.nl");
const $$OpenIcon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$l, $$props, $$slots);
  Astro2.self = $$OpenIcon;
  const { class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<span${addAttribute(["astronav-toggle", className], "class:list")}>${renderSlot($$result, $$slots["default"])}</span>`;
}, "/Users/nt-macbook/code/boekhouder-tailwind/node_modules/astro-navbar/src/components/OpenIcon.astro");

const $$Astro$k = createAstro("https://boekhouder-het-gooi.nl");
const $$CloseIcon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$k, $$props, $$slots);
  Astro2.self = $$CloseIcon;
  const { class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<span${addAttribute(["astronav-toggle hidden", className], "class:list")}>${renderSlot($$result, $$slots["default"])}</span>`;
}, "/Users/nt-macbook/code/boekhouder-tailwind/node_modules/astro-navbar/src/components/CloseIcon.astro");

const $$Astro$j = createAstro("https://boekhouder-het-gooi.nl");
const $$MenuItems = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$j, $$props, $$slots);
  Astro2.self = $$MenuItems;
  const { class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<nav${addAttribute(["astronav-toggle", className], "class:list")}>
    ${renderSlot($$result, $$slots["default"])}
</nav>`;
}, "/Users/nt-macbook/code/boekhouder-tailwind/node_modules/astro-navbar/src/components/MenuItems.astro");

const $$Astro$i = createAstro("https://boekhouder-het-gooi.nl");
const $$Dropdown$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$i, $$props, $$slots);
  Astro2.self = $$Dropdown$1;
  const { class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<div${addAttribute(["astronav-dropdown", className], "class:list")} aria-expanded="false">${renderSlot($$result, $$slots["default"])}</div>`;
}, "/Users/nt-macbook/code/boekhouder-tailwind/node_modules/astro-navbar/src/components/Dropdown.astro");

const $$Astro$h = createAstro("https://boekhouder-het-gooi.nl");
const $$DropdownItems = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$h, $$props, $$slots);
  Astro2.self = $$DropdownItems;
  const { class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<div${addAttribute(["dropdown-toggle hidden", className], "class:list")}>${renderSlot($$result, $$slots["default"])}</div>`;
}, "/Users/nt-macbook/code/boekhouder-tailwind/node_modules/astro-navbar/src/components/DropdownItems.astro");

const $$Astro$g = createAstro("https://boekhouder-het-gooi.nl");
const $$Dropdown = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$g, $$props, $$slots);
  Astro2.self = $$Dropdown;
  const { title, lastItem, children } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<li class="relative">
  ${renderComponent($$result, "Dropdown", $$Dropdown$1, { "class": "group" }, { "default": () => renderTemplate`<button class="flex items-center gap-1 w-full lg:w-auto lg:px-3 py-2 text-gray-600 hover:text-gray-900">
      <span>${title}</span>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="w-3 h-3 mt-0.5 group-open:rotate-180">
        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path>
      </svg>
    </button>${renderComponent($$result, "DropdownItems", $$DropdownItems, {}, { "default": () => renderTemplate`<div${addAttribute([
    "lg:absolute  w-full  lg:w-48",
    lastItem ? "lg:right-0 origin-top-right" : "lg:left-0 origin-top-left"
  ], "class:list")}>
        <div class="px-3 lg:py-2 lg:bg-white lg:rounded-md lg:shadow lg:border flex flex-col">
          ${children.map((item) => renderTemplate`<a${addAttribute(item.path, "href")} class="py-1 text-gray-600 hover:text-gray-900">
                ${item.title}
              </a>`)}
        </div>
      </div>` })}` })}
</li>`;
}, "/Users/nt-macbook/code/boekhouder-tailwind/src/components/navbar/dropdown.astro");

const $$Astro$f = createAstro("https://boekhouder-het-gooi.nl");
const $$Navbar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$Navbar;
  const menuitems = [
    {
      title: "Home",
      path: "/"
    },
    {
      title: "Diensten",
      path: "diensten",
      children: [
        { title: "Administratie", path: "/diensten/administratie" },
        { title: "Belastingaangifte", path: "/diensten/belastingaangifte" },
        { title: "Boekhouding", path: "/diensten/boekhouding" },
        { title: "Fiscaal advies", path: "/diensten/fiscaal-advies" },
        { title: "Boekhoudsoftware", path: "/boekhoudsoftware" }
      ]
    },
    {
      title: "Werkgebied",
      path: "Werkgebied",
      children: [
        { title: "Boekhouder in Baarn", path: "/werkgebied/boekhouder-in-baarn" },
        { title: "Boekhouder in Bussum", path: "/werkgebied/boekhouder-in-bussum" },
        { title: "Boekhouder in Hilversum", path: "/werkgebied/boekhouder-in-hilversum" },
        { title: "Boekhouder in Huizen", path: "/werkgebied/Boekhouder-in-huizen" },
        { title: "Boekhouder in Laren", path: "/werkgebied/boekhouder-in-laren" },
        { title: "Boekhouder in Naarden", path: "/werkgebied/boekhouder-in-naarden" }
      ]
    },
    {
      title: "Over ons",
      path: "/over-ons"
    },
    {
      title: "Blog",
      path: "/blog"
    },
    {
      title: "Contact",
      path: "/contact"
    }
  ];
  return renderTemplate`${renderComponent($$result, "Container", $$Container, {}, { "default": () => renderTemplate`${maybeRenderHead($$result)}<header class="flex flex-col lg:flex-row justify-between items-right my-5 max-w-5xl mx-auto">
    ${renderComponent($$result, "Astronav", $$Astronav, {}, { "default": () => renderTemplate`<div class="flex w-full lg:w-auto items-center justify-between">
        <a href="/" class="text-lg"><span class="font-bold text-slate-800">Boekhouder</span><span class="text-slate-500">'t Gooi</span>
        </a>
        <div class="block lg:hidden">
          ${renderComponent($$result, "MenuIcon", $$MenuIcon, { "class": "w-4 h-4 text-gray-800" })}
        </div>
      </div>${renderComponent($$result, "MenuItems", $$MenuItems, { "class": "hidden w-full lg:w-auto mt-2 lg:flex lg:mt-0 z-30" }, { "default": () => renderTemplate`<ul class="flex flex-col lg:flex-row lg:gap-3">
          ${menuitems.map((item, index) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": () => renderTemplate`${item.children && renderTemplate`${renderComponent($$result, "Dropdown", $$Dropdown, { "title": item.title, "children": item.children, "lastItem": index === menuitems.length - 1 })}`}${!item.children && renderTemplate`<li>
                    <a${addAttribute(item.path, "href")} class="flex lg:px-3 py-2 text-gray-600 hover:text-gray-900">
                      ${item.title}
                    </a>
                  </li>`}` })}`)}
        </ul>` })}` })}
    <!-- <div>
      <div class="hidden lg:flex items-center gap-4">
        <a href="#">Log in</a>
        <Link href="#" size="md">Sign up</Link>
      </div>
    </div> -->
  </header>` })}`;
}, "/Users/nt-macbook/code/boekhouder-tailwind/src/components/navbar/navbar.astro");

const $$Astro$e = createAstro("https://boekhouder-het-gooi.nl");
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$Layout;
  const canonicalURL = new URL(Astro2.url.pathname, Astro2.site).toString();
  new URL(
    "/opengraph.jpg",
    Astro2.site
  ).toString();
  const { title } = Astro2.props;
  const makeTitle = title ? title + " | Boekhouder 't Gooi" : "Voor al je boekhoud zaken";
  return renderTemplate`<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width">
    <link rel="icon" type="image/svg+xml" href="/favicon.svg">
    <meta name="generator"${addAttribute(Astro2.generator, "content")}>

    <!-- <link rel="preload" as="image" href={src} alt="Hero" /> -->
    ${renderComponent($$result, "SEO", $$SEO, { "title": makeTitle, "description": "Boekhouder 't Gooi | Boekhouden | ", "canonical": canonicalURL, "}}": true })}
  ${renderHead($$result)}</head>
  <body>
    ${renderComponent($$result, "Navbar", $$Navbar, {})}
    ${renderSlot($$result, $$slots["default"])}
    ${renderComponent($$result, "Footer", $$Footer, {})}
    
  </body>
</html>`;
}, "/Users/nt-macbook/code/boekhouder-tailwind/src/layouts/Layout.astro");

const $$Astro$d = createAstro("https://boekhouder-het-gooi.nl");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Index" }, { "default": () => renderTemplate`${renderComponent($$result, "Container", $$Container, {}, { "default": () => renderTemplate`${renderComponent($$result, "Hero", $$Hero, {})}` })}${renderComponent($$result, "PricingTables", $$PricingTables, {})}${renderComponent($$result, "USP", $$Usp, {})}` })}`;
}, "/Users/nt-macbook/code/boekhouder-tailwind/src/pages/index.astro");

const $$file$5 = "/Users/nt-macbook/code/boekhouder-tailwind/src/pages/index.astro";
const $$url$5 = "";

const _page0 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file$5,
  url: $$url$5
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$c = createAstro("https://boekhouder-het-gooi.nl");
const $$Sticky = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$Sticky;
  Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<section class="flex flex-col w-full  p-12 space-y-6">
    <aside class="sticky top-20 bg-white rounded px-10 py-10" style="margin-top:-40vh">
                 
          <div class="mb-5" id="leadformtitle">
            <span class="text-xl font-semibold">
                Wat kunnen wij voor je betekenen?
            </span>
        </div>

<form class="">

  <div class="mb-6">
    <label for="email" class="block mb-2 text-sm font-medium text-gray-900">Wat is je rechtsvorm?</label>
    <input type="email" id="email" class="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
  </div>

    <div class="mb-6">
    <label for="email" class="block mb-2 text-sm font-medium text-gray-900">Aantal in/verkoop bonnetjes per maand</label>
    <input type="email" id="email" class="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
  </div>

    <div class="mb-6">
    <label for="email" class="block mb-2 text-sm font-medium text-gray-900">Wat wil je graag uitbesteden</label>
    <input type="email" id="email" class="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
  </div>

   <div class="mb-6">
    <label for="email" class="block mb-2 text-sm font-medium text-gray-900">Hoe wil je de administratie aanleveren?</label>
    <input type="email" id="email" class="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
  </div>




  <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Aanvraag versturen</button>
</form>


        
     </aside>

        </section>`;
}, "/Users/nt-macbook/code/boekhouder-tailwind/src/components/sticky.astro");

const $$Astro$b = createAstro("https://boekhouder-het-gooi.nl");
const $$Landingpage = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$Landingpage;
  const { frontmatter } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": () => renderTemplate`${maybeRenderHead($$result)}<div class="bg-babyblue">
        ${renderComponent($$result, "Container", $$Container, {}, { "default": () => renderTemplate`<div class="max-w-5xl mx-auto py-28">
                <h1 class="font-bold text-4xl text-gray-800">
                   ${frontmatter.title}
                </h1>

                  ${frontmatter.description ? renderTemplate`<p>${frontmatter.description}</p>` : renderTemplate`<ul class="benefits lead pt-4 list-unstyled">
                    <li>Volledige boekhouding al vanaf €69,- p/m!</li>
                    <li>Altijd een gratis kennismakingsgesprek</li>
                    <li>24/7 Je administratie inzien</li>
                    <li>Ervaren boekhouders en belastingadviseurs</li>
                    <li>Online Boekhouding met de meest up-to-date softwarepakketten</li>
                </ul>`}
            </div>` })}
    </div>${renderComponent($$result, "Container", $$Container, {}, { "default": () => renderTemplate`<div class="flex flex-col max-w-5xl mx-auto my-16 lg:flex-row lg:items-stretch lg:space-x-8 lg:space-y-0">
            <section class="flex flex-col w-full space-y-6 ">
                 ${renderSlot($$result, $$slots["default"])}
            </section>
            ${renderComponent($$result, "Sticky", $$Sticky, {})}
        </div>` })}${renderComponent($$result, "PricingTables", $$PricingTables, {})}${renderComponent($$result, "USP", $$Usp, {})}` })}`;
}, "/Users/nt-macbook/code/boekhouder-tailwind/src/layouts/landingpage.astro");

const html$6 = "<h1 id=\"title\">Title</h1>\n<h2 id=\"boekhouder-in-baarn-nodig\">Boekhouder in Baarn nodig?</h2>\n<p>Als u op zoek bent naar een betrouwbare boekhouder die een eenvoudige vaste prijsafspraak kan maken, dan heeft u de perfecte match gevonden!</p>\n<p>We weten dat u het druk heeft met uw bedrijf en we willen u de stress uit handen nemen. Het enige wat u nodig heeft zijn betrouwbare professionals die alle financiële administratie voor u verzorgen.</p>\n<p>Boekhouder ‘t Gooi begrijpt dat het runnen van een bedrijf stressvol kan zijn en die last willen we u uit handen nemen. Het enige wat u nodig heeft zijn betrouwbare professionals die alle financiële administratie voor u verzorgen.</p>\n<p>Wanneer u uw boekhouding uitbesteedt aan een professional, hebt u meer tijd om u te concentreren op de groei van uw bedrijf. Heeft u hulp nodig bij de boekhouding? Boekhouders ‘t Gooi Baarn biedt betrouwbare service tegen een betaalbare prijs.</p>\n<h2 id=\"de-beste-boekhouders-in-het-gooi-baarn\">De beste boekhouders in Het Gooi Baarn</h2>\n<p>Wij zijn uw eerste aanspreekpunt voor bedrijven en particulieren die werken of wonen in de regio ‘t Gooi. Neem gerust contact met ons op als u behoefte heeft aan boekhouding en salarisadministratie, belastingadvies of een andere vorm van boekhouding.</p>\n<p>Uw contactpersoon heeft ervaring in de branche en kan ondersteuning bieden bij financiële of fiscale vragen, maar ook een aanspreekpunt zijn voor alle boekhoudkundige vragen.</p>\n<h2 id=\"een-professionele-boekhouder-kan-u-ondersteunen-met\">Een professionele boekhouder kan u ondersteunen met:</h2>\n<ul>\n<li>Zet getallen in een taal die iedereen begrijpt</li>\n<li>Verwerken van financiële administratie en loonadministratie.</li>\n<li>Het opstellen van belastingaangiften en het opstellen van jaarrekeningen kost veel tijd en moeite. Laat uw boekhouder het werk voor u doen, bespaar uzelf wat tijd en krijg meer controle over uw bedrijf.</li>\n<li>Fiscaal en financieel advies door boekhouder Het Gooi Baarn;</li>\n<li>Bewaarde bonnetjes, verkoopfacturen, transacties en jaaropgaven verwerken</li>\n</ul>\n<h2 id=\"meer-informatie-over-boekhouding\">Meer informatie over boekhouding?</h2>\n<p>Een Boekhouder uit het Gooi Baarn maakt samen met uw input en wensen een plan voor u en geeft u een ruwe schatting van wat u maandelijks zou betalen.</p>\n<p>Vul het formulier in en vertel ons je voorkeuren en we nemen zo snel mogelijk, gratis en vrijblijvend contact met je op.</p>";

				const frontmatter$6 = {"layout":"../../layouts/landingpage.astro","title":"Boekhouder in Baarn"};
				const file$6 = "/Users/nt-macbook/code/boekhouder-tailwind/src/pages/werkgebied/boekhouder-in-hilversum.md";
				const url$6 = "/werkgebied/boekhouder-in-hilversum";
				function rawContent$6() {
					return "# Title\n\n## Boekhouder in Baarn nodig?\n\nAls u op zoek bent naar een betrouwbare boekhouder die een eenvoudige vaste prijsafspraak kan maken, dan heeft u de perfecte match gevonden!\n\nWe weten dat u het druk heeft met uw bedrijf en we willen u de stress uit handen nemen. Het enige wat u nodig heeft zijn betrouwbare professionals die alle financiële administratie voor u verzorgen.\n\nBoekhouder ‘t Gooi begrijpt dat het runnen van een bedrijf stressvol kan zijn en die last willen we u uit handen nemen. Het enige wat u nodig heeft zijn betrouwbare professionals die alle financiële administratie voor u verzorgen.\n\nWanneer u uw boekhouding uitbesteedt aan een professional, hebt u meer tijd om u te concentreren op de groei van uw bedrijf. Heeft u hulp nodig bij de boekhouding? Boekhouders ‘t Gooi Baarn biedt betrouwbare service tegen een betaalbare prijs.\n\n## De beste boekhouders in Het Gooi Baarn\n\nWij zijn uw eerste aanspreekpunt voor bedrijven en particulieren die werken of wonen in de regio ‘t Gooi. Neem gerust contact met ons op als u behoefte heeft aan boekhouding en salarisadministratie, belastingadvies of een andere vorm van boekhouding.\n\nUw contactpersoon heeft ervaring in de branche en kan ondersteuning bieden bij financiële of fiscale vragen, maar ook een aanspreekpunt zijn voor alle boekhoudkundige vragen.\n\n## Een professionele boekhouder kan u ondersteunen met:\n\n-   Zet getallen in een taal die iedereen begrijpt\n-   Verwerken van financiële administratie en loonadministratie.\n-   Het opstellen van belastingaangiften en het opstellen van jaarrekeningen kost veel tijd en moeite. Laat uw boekhouder het werk voor u doen, bespaar uzelf wat tijd en krijg meer controle over uw bedrijf.\n-   Fiscaal en financieel advies door boekhouder Het Gooi Baarn;\n-   Bewaarde bonnetjes, verkoopfacturen, transacties en jaaropgaven verwerken\n\n## Meer informatie over boekhouding?\n\nEen Boekhouder uit het Gooi Baarn maakt samen met uw input en wensen een plan voor u en geeft u een ruwe schatting van wat u maandelijks zou betalen.\n\nVul het formulier in en vertel ons je voorkeuren en we nemen zo snel mogelijk, gratis en vrijblijvend contact met je op.";
				}
				function compiledContent$6() {
					return html$6;
				}
				function getHeadings$6() {
					return [{"depth":1,"slug":"title","text":"Title"},{"depth":2,"slug":"boekhouder-in-baarn-nodig","text":"Boekhouder in Baarn nodig?"},{"depth":2,"slug":"de-beste-boekhouders-in-het-gooi-baarn","text":"De beste boekhouders in Het Gooi Baarn"},{"depth":2,"slug":"een-professionele-boekhouder-kan-u-ondersteunen-met","text":"Een professionele boekhouder kan u ondersteunen met:"},{"depth":2,"slug":"meer-informatie-over-boekhouding","text":"Meer informatie over boekhouding?"}];
				}
				async function Content$6() {
					const { layout, ...content } = frontmatter$6;
					content.file = file$6;
					content.url = url$6;
					const contentFragment = createVNode(Fragment, { 'set:html': html$6 });
					return createVNode($$Landingpage, {
									file: file$6,
									url: url$6,
									content,
									frontmatter: content,
									headings: getHeadings$6(),
									rawContent: rawContent$6,
									compiledContent: compiledContent$6,
									'server:root': true,
									children: contentFragment
								});
				}
				Content$6[Symbol.for('astro.needsHeadRendering')] = false;

const _page1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Content: Content$6,
  compiledContent: compiledContent$6,
  default: Content$6,
  file: file$6,
  frontmatter: frontmatter$6,
  getHeadings: getHeadings$6,
  rawContent: rawContent$6,
  url: url$6
}, Symbol.toStringTag, { value: 'Module' }));

const html$5 = "<h1 id=\"title\">Title</h1>\n<h2 id=\"boekhouder-in-baarn-nodig\">Boekhouder in Baarn nodig?</h2>\n<p>Als u op zoek bent naar een betrouwbare boekhouder die een eenvoudige vaste prijsafspraak kan maken, dan heeft u de perfecte match gevonden!</p>\n<p>We weten dat u het druk heeft met uw bedrijf en we willen u de stress uit handen nemen. Het enige wat u nodig heeft zijn betrouwbare professionals die alle financiële administratie voor u verzorgen.</p>\n<p>Boekhouder ‘t Gooi begrijpt dat het runnen van een bedrijf stressvol kan zijn en die last willen we u uit handen nemen. Het enige wat u nodig heeft zijn betrouwbare professionals die alle financiële administratie voor u verzorgen.</p>\n<p>Wanneer u uw boekhouding uitbesteedt aan een professional, hebt u meer tijd om u te concentreren op de groei van uw bedrijf. Heeft u hulp nodig bij de boekhouding? Boekhouders ‘t Gooi Baarn biedt betrouwbare service tegen een betaalbare prijs.</p>\n<h2 id=\"de-beste-boekhouders-in-het-gooi-baarn\">De beste boekhouders in Het Gooi Baarn</h2>\n<p>Wij zijn uw eerste aanspreekpunt voor bedrijven en particulieren die werken of wonen in de regio ‘t Gooi. Neem gerust contact met ons op als u behoefte heeft aan boekhouding en salarisadministratie, belastingadvies of een andere vorm van boekhouding.</p>\n<p>Uw contactpersoon heeft ervaring in de branche en kan ondersteuning bieden bij financiële of fiscale vragen, maar ook een aanspreekpunt zijn voor alle boekhoudkundige vragen.</p>\n<h2 id=\"een-professionele-boekhouder-kan-u-ondersteunen-met\">Een professionele boekhouder kan u ondersteunen met:</h2>\n<ul>\n<li>Zet getallen in een taal die iedereen begrijpt</li>\n<li>Verwerken van financiële administratie en loonadministratie.</li>\n<li>Het opstellen van belastingaangiften en het opstellen van jaarrekeningen kost veel tijd en moeite. Laat uw boekhouder het werk voor u doen, bespaar uzelf wat tijd en krijg meer controle over uw bedrijf.</li>\n<li>Fiscaal en financieel advies door boekhouder Het Gooi Baarn;</li>\n<li>Bewaarde bonnetjes, verkoopfacturen, transacties en jaaropgaven verwerken</li>\n</ul>\n<h2 id=\"meer-informatie-over-boekhouding\">Meer informatie over boekhouding?</h2>\n<p>Een Boekhouder uit het Gooi Baarn maakt samen met uw input en wensen een plan voor u en geeft u een ruwe schatting van wat u maandelijks zou betalen.</p>\n<p>Vul het formulier in en vertel ons je voorkeuren en we nemen zo snel mogelijk, gratis en vrijblijvend contact met je op.</p>";

				const frontmatter$5 = {"layout":"../../layouts/landingpage.astro","title":"Boekhouder in Baarn"};
				const file$5 = "/Users/nt-macbook/code/boekhouder-tailwind/src/pages/werkgebied/boekhouder-in-bussum.md";
				const url$5 = "/werkgebied/boekhouder-in-bussum";
				function rawContent$5() {
					return "# Title\n\n## Boekhouder in Baarn nodig?\n\nAls u op zoek bent naar een betrouwbare boekhouder die een eenvoudige vaste prijsafspraak kan maken, dan heeft u de perfecte match gevonden!\n\nWe weten dat u het druk heeft met uw bedrijf en we willen u de stress uit handen nemen. Het enige wat u nodig heeft zijn betrouwbare professionals die alle financiële administratie voor u verzorgen.\n\nBoekhouder ‘t Gooi begrijpt dat het runnen van een bedrijf stressvol kan zijn en die last willen we u uit handen nemen. Het enige wat u nodig heeft zijn betrouwbare professionals die alle financiële administratie voor u verzorgen.\n\nWanneer u uw boekhouding uitbesteedt aan een professional, hebt u meer tijd om u te concentreren op de groei van uw bedrijf. Heeft u hulp nodig bij de boekhouding? Boekhouders ‘t Gooi Baarn biedt betrouwbare service tegen een betaalbare prijs.\n\n## De beste boekhouders in Het Gooi Baarn\n\nWij zijn uw eerste aanspreekpunt voor bedrijven en particulieren die werken of wonen in de regio ‘t Gooi. Neem gerust contact met ons op als u behoefte heeft aan boekhouding en salarisadministratie, belastingadvies of een andere vorm van boekhouding.\n\nUw contactpersoon heeft ervaring in de branche en kan ondersteuning bieden bij financiële of fiscale vragen, maar ook een aanspreekpunt zijn voor alle boekhoudkundige vragen.\n\n## Een professionele boekhouder kan u ondersteunen met:\n\n-   Zet getallen in een taal die iedereen begrijpt\n-   Verwerken van financiële administratie en loonadministratie.\n-   Het opstellen van belastingaangiften en het opstellen van jaarrekeningen kost veel tijd en moeite. Laat uw boekhouder het werk voor u doen, bespaar uzelf wat tijd en krijg meer controle over uw bedrijf.\n-   Fiscaal en financieel advies door boekhouder Het Gooi Baarn;\n-   Bewaarde bonnetjes, verkoopfacturen, transacties en jaaropgaven verwerken\n\n## Meer informatie over boekhouding?\n\nEen Boekhouder uit het Gooi Baarn maakt samen met uw input en wensen een plan voor u en geeft u een ruwe schatting van wat u maandelijks zou betalen.\n\nVul het formulier in en vertel ons je voorkeuren en we nemen zo snel mogelijk, gratis en vrijblijvend contact met je op.";
				}
				function compiledContent$5() {
					return html$5;
				}
				function getHeadings$5() {
					return [{"depth":1,"slug":"title","text":"Title"},{"depth":2,"slug":"boekhouder-in-baarn-nodig","text":"Boekhouder in Baarn nodig?"},{"depth":2,"slug":"de-beste-boekhouders-in-het-gooi-baarn","text":"De beste boekhouders in Het Gooi Baarn"},{"depth":2,"slug":"een-professionele-boekhouder-kan-u-ondersteunen-met","text":"Een professionele boekhouder kan u ondersteunen met:"},{"depth":2,"slug":"meer-informatie-over-boekhouding","text":"Meer informatie over boekhouding?"}];
				}
				async function Content$5() {
					const { layout, ...content } = frontmatter$5;
					content.file = file$5;
					content.url = url$5;
					const contentFragment = createVNode(Fragment, { 'set:html': html$5 });
					return createVNode($$Landingpage, {
									file: file$5,
									url: url$5,
									content,
									frontmatter: content,
									headings: getHeadings$5(),
									rawContent: rawContent$5,
									compiledContent: compiledContent$5,
									'server:root': true,
									children: contentFragment
								});
				}
				Content$5[Symbol.for('astro.needsHeadRendering')] = false;

const _page2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Content: Content$5,
  compiledContent: compiledContent$5,
  default: Content$5,
  file: file$5,
  frontmatter: frontmatter$5,
  getHeadings: getHeadings$5,
  rawContent: rawContent$5,
  url: url$5
}, Symbol.toStringTag, { value: 'Module' }));

const html$4 = "<h1 id=\"title\">Title</h1>\n<h2 id=\"boekhouder-in-baarn-nodig\">Boekhouder in Baarn nodig?</h2>\n<p>Als u op zoek bent naar een betrouwbare boekhouder die een eenvoudige vaste prijsafspraak kan maken, dan heeft u de perfecte match gevonden!</p>\n<p>We weten dat u het druk heeft met uw bedrijf en we willen u de stress uit handen nemen. Het enige wat u nodig heeft zijn betrouwbare professionals die alle financiële administratie voor u verzorgen.</p>\n<p>Boekhouder ‘t Gooi begrijpt dat het runnen van een bedrijf stressvol kan zijn en die last willen we u uit handen nemen. Het enige wat u nodig heeft zijn betrouwbare professionals die alle financiële administratie voor u verzorgen.</p>\n<p>Wanneer u uw boekhouding uitbesteedt aan een professional, hebt u meer tijd om u te concentreren op de groei van uw bedrijf. Heeft u hulp nodig bij de boekhouding? Boekhouders ‘t Gooi Baarn biedt betrouwbare service tegen een betaalbare prijs.</p>\n<h2 id=\"de-beste-boekhouders-in-het-gooi-baarn\">De beste boekhouders in Het Gooi Baarn</h2>\n<p>Wij zijn uw eerste aanspreekpunt voor bedrijven en particulieren die werken of wonen in de regio ‘t Gooi. Neem gerust contact met ons op als u behoefte heeft aan boekhouding en salarisadministratie, belastingadvies of een andere vorm van boekhouding.</p>\n<p>Uw contactpersoon heeft ervaring in de branche en kan ondersteuning bieden bij financiële of fiscale vragen, maar ook een aanspreekpunt zijn voor alle boekhoudkundige vragen.</p>\n<h2 id=\"een-professionele-boekhouder-kan-u-ondersteunen-met\">Een professionele boekhouder kan u ondersteunen met:</h2>\n<ul>\n<li>Zet getallen in een taal die iedereen begrijpt</li>\n<li>Verwerken van financiële administratie en loonadministratie.</li>\n<li>Het opstellen van belastingaangiften en het opstellen van jaarrekeningen kost veel tijd en moeite. Laat uw boekhouder het werk voor u doen, bespaar uzelf wat tijd en krijg meer controle over uw bedrijf.</li>\n<li>Fiscaal en financieel advies door boekhouder Het Gooi Baarn;</li>\n<li>Bewaarde bonnetjes, verkoopfacturen, transacties en jaaropgaven verwerken</li>\n</ul>\n<h2 id=\"meer-informatie-over-boekhouding\">Meer informatie over boekhouding?</h2>\n<p>Een Boekhouder uit het Gooi Baarn maakt samen met uw input en wensen een plan voor u en geeft u een ruwe schatting van wat u maandelijks zou betalen.</p>\n<p>Vul het formulier in en vertel ons je voorkeuren en we nemen zo snel mogelijk, gratis en vrijblijvend contact met je op.</p>";

				const frontmatter$4 = {"layout":"../../layouts/landingpage.astro","title":"Boekhouder in Baarn"};
				const file$4 = "/Users/nt-macbook/code/boekhouder-tailwind/src/pages/werkgebied/boekhouder-in-baarn.md";
				const url$4 = "/werkgebied/boekhouder-in-baarn";
				function rawContent$4() {
					return "# Title\n\n## Boekhouder in Baarn nodig?\n\nAls u op zoek bent naar een betrouwbare boekhouder die een eenvoudige vaste prijsafspraak kan maken, dan heeft u de perfecte match gevonden!\n\nWe weten dat u het druk heeft met uw bedrijf en we willen u de stress uit handen nemen. Het enige wat u nodig heeft zijn betrouwbare professionals die alle financiële administratie voor u verzorgen.\n\nBoekhouder ‘t Gooi begrijpt dat het runnen van een bedrijf stressvol kan zijn en die last willen we u uit handen nemen. Het enige wat u nodig heeft zijn betrouwbare professionals die alle financiële administratie voor u verzorgen.\n\nWanneer u uw boekhouding uitbesteedt aan een professional, hebt u meer tijd om u te concentreren op de groei van uw bedrijf. Heeft u hulp nodig bij de boekhouding? Boekhouders ‘t Gooi Baarn biedt betrouwbare service tegen een betaalbare prijs.\n\n## De beste boekhouders in Het Gooi Baarn\n\nWij zijn uw eerste aanspreekpunt voor bedrijven en particulieren die werken of wonen in de regio ‘t Gooi. Neem gerust contact met ons op als u behoefte heeft aan boekhouding en salarisadministratie, belastingadvies of een andere vorm van boekhouding.\n\nUw contactpersoon heeft ervaring in de branche en kan ondersteuning bieden bij financiële of fiscale vragen, maar ook een aanspreekpunt zijn voor alle boekhoudkundige vragen.\n\n## Een professionele boekhouder kan u ondersteunen met:\n\n-   Zet getallen in een taal die iedereen begrijpt\n-   Verwerken van financiële administratie en loonadministratie.\n-   Het opstellen van belastingaangiften en het opstellen van jaarrekeningen kost veel tijd en moeite. Laat uw boekhouder het werk voor u doen, bespaar uzelf wat tijd en krijg meer controle over uw bedrijf.\n-   Fiscaal en financieel advies door boekhouder Het Gooi Baarn;\n-   Bewaarde bonnetjes, verkoopfacturen, transacties en jaaropgaven verwerken\n\n## Meer informatie over boekhouding?\n\nEen Boekhouder uit het Gooi Baarn maakt samen met uw input en wensen een plan voor u en geeft u een ruwe schatting van wat u maandelijks zou betalen.\n\nVul het formulier in en vertel ons je voorkeuren en we nemen zo snel mogelijk, gratis en vrijblijvend contact met je op.";
				}
				function compiledContent$4() {
					return html$4;
				}
				function getHeadings$4() {
					return [{"depth":1,"slug":"title","text":"Title"},{"depth":2,"slug":"boekhouder-in-baarn-nodig","text":"Boekhouder in Baarn nodig?"},{"depth":2,"slug":"de-beste-boekhouders-in-het-gooi-baarn","text":"De beste boekhouders in Het Gooi Baarn"},{"depth":2,"slug":"een-professionele-boekhouder-kan-u-ondersteunen-met","text":"Een professionele boekhouder kan u ondersteunen met:"},{"depth":2,"slug":"meer-informatie-over-boekhouding","text":"Meer informatie over boekhouding?"}];
				}
				async function Content$4() {
					const { layout, ...content } = frontmatter$4;
					content.file = file$4;
					content.url = url$4;
					const contentFragment = createVNode(Fragment, { 'set:html': html$4 });
					return createVNode($$Landingpage, {
									file: file$4,
									url: url$4,
									content,
									frontmatter: content,
									headings: getHeadings$4(),
									rawContent: rawContent$4,
									compiledContent: compiledContent$4,
									'server:root': true,
									children: contentFragment
								});
				}
				Content$4[Symbol.for('astro.needsHeadRendering')] = false;

const _page3 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Content: Content$4,
  compiledContent: compiledContent$4,
  default: Content$4,
  file: file$4,
  frontmatter: frontmatter$4,
  getHeadings: getHeadings$4,
  rawContent: rawContent$4,
  url: url$4
}, Symbol.toStringTag, { value: 'Module' }));

const html$3 = "<p><strong>Het voorbereiden van uw belastingaangifte kan tijdrovend zijn, maar met een beetje hulp van een boekhouder kunt u al uw papieren op orde krijgen en het proces soepeler laten verlopen. Wanneer u goed op de hoogte bent van uw situatie en mogelijkheden, kan dit ervoor zorgen dat u minder inkomstenbelasting hoeft te betalen of zelfs geld terug krijgt.</strong></p>\n<p>Hoe werkt het belastingaangifte proces?</p>\n<h2 id=\"1-controleer-je-gegevens\">1. Controleer je gegevens</h2>\n<p>Tegenwoordig doet de Belastingdienst al een groot deel van uw belastingaangifte voor u. Dit betekent echter niet dat deze vooraf ingevulde aangifte automatisch klopt. U moet altijd alles controleren en ervoor zorgen dat het allemaal juist is voordat u het indient.</p>\n<h2 id=\"2-bekijk-de-belastingaangifte-van-vorig-jaar\">2. Bekijk de belastingaangifte van vorig jaar</h2>\n<p>Zijn uw persoonlijke omstandigheden het afgelopen jaar hetzelfde geweest of heeft u niet veel veranderd? Misschien wilt u de belastingaangifte van vorig jaar eens bekijken. Het kan erg handig zijn als je dat doet, want dan onthoud je alle informatie die je hebt ingevoerd en kijk je of er dingen zijn die kunnen worden overgenomen.</p>\n<h2 id=\"3-zorg-dat-je-de-boxen-correct-invult\">3. Zorg dat je de boxen correct invult</h2>\n<p>De eerste stap bij het invullen van uw belastingaangifte is om uw inkomen in drie aparte boxen in te vullen. Er zijn verschillende inkomenscategorieën en soms worden ze anders belast. Om te beslissen of u belasting moet betalen, moet u rekening houden met de bron van uw inkomen en het bedrag ervan – sommige soorten inkomsten worden mogelijk niet belast en voor andere kunt u geld terugkrijgen. Het totale bedrag aan inkomstenbelasting wordt berekend door de drie verschillende tarieven uit elke box bij elkaar op te tellen.</p>\n<h3 id=\"box-1-het-belastbaar-inkomen-van-uw-werk-en-woning\">Box 1: Het belastbaar inkomen van uw werk en woning.</h3>\n<p>In deze box worden al uw inkomsten uit werk en woning bijgehouden. Dit kan loon zijn, maar ook geld dat je hebt verdiend met een bedrijf, een manier van betalen of inkomsten uit andere omstandigheden (zoals een bijbaan).</p>\n<p>Heeft u een huis te koop? Dan worden bij deze inkomsten ook de inkomsten uit de eigen woning (het eigenwoningforfait) opgeteld. Van dit bedrag kunnen aftrekposten worden afgetrokken, zoals betaalde hypotheekrente en andere betaalde kosten.</p>\n<p>Dit tel je uiteindelijk bij elkaar op:</p>\n<ul>\n<li>Loon uit dienstverband</li>\n<li>Winst uit onderneming</li>\n<li>Inkomen uit overige werkzaamheden (bijvoorbeeld een freelanceopdracht)</li>\n<li>Inkomen uit sociale uitkeringen en pensioen</li>\n<li>Inkomen uit lijfrenteproducten</li>\n<li>Ontvangen inkomen uit partneralimentatie</li>\n<li>Eigenwoningforfait (wordt hieronder nog uitgelegd)</li>\n</ul>\n<p>Dit trek je ervan af:</p>\n<ul>\n<li>Betaalde rente over eigen woningschuld, hypotheekrente</li>\n<li>Ondernemersaftrek</li>\n<li>Werknemersaftrek</li>\n<li>Uitgaven voor inkomensvoorzieningen</li>\n<li>Betaalde alimentatie (betaalde kinderalimentatie is niet aftrekbaar)</li>\n<li>Overige persoonsgebonden aftrek</li>\n</ul>\n<h3 id=\"box-2-belastbaar-inkomen-uit-aanmerkelijk-belang\">Box 2: Belastbaar inkomen uit aanmerkelijk belang</h3>\n<p>Box 2 betreft een aanmerkelijk belang in de onderneming. Van een aanmerkelijk belang is sprake wanneer iemand (alleen of met een partner) minimaal 5% van de aandelen van een vennootschap (bijvoorbeeld een BV) bezit.</p>\n<h3 id=\"box-3-belastbaar-inkomen-uit-sparen-en-beleggen\">Box 3: Belastbaar inkomen uit sparen en beleggen</h3>\n<p>Om uw “belastbare inkomen uit sparen en beleggen” voor de belastingaangifte van het huidig jaar te achterhalen, dient u rekening te houden met de bezittingen en schulden zoals deze waren op het jaar ervoor. Uw spaargeld (en beleggingen in aandelen of onroerend goed) vallen hierin mee, maar uw eigen woning niet. Dit valt onder categorie 1.</p>\n<h3 id=\"eigenwoningforfait\">Eigenwoningforfait</h3>\n<p>In box 1 hebben we ook het eigenwoningforfait genoemd. Het is een bedrag dat eigenaren van een eigen woning bij hun inkomen in box 1 moeten optellen. Het is een soort compensatie voor het woongenot. Op de site van de Belastingdienst staat een pagina met uitgebreide voorbeelden voor het berekenen van het eigenwoningforfait.</p>\n<h2 id=\"vraag-om-hulp-als-je-er-niet-uitkomt\">Vraag om hulp als je er niet uitkomt</h2>\n<p>Als je niet zeker weet wat je moet doen, vraag dan om hulp. De Belastingdienst biedt gratis hulp, maar je kunt ook contact met ons opnemen door het contactformulier in te vullen. Wij helpen je graag hiermee.</p>";

				const frontmatter$3 = {"layout":"../../layouts/landingpage.astro","title":"Belastingaangifte","description":"Hoe werkt het belastingaangifte proces?"};
				const file$3 = "/Users/nt-macbook/code/boekhouder-tailwind/src/pages/diensten/belastingaangifte.md";
				const url$3 = "/diensten/belastingaangifte";
				function rawContent$3() {
					return "\n**Het voorbereiden van uw belastingaangifte kan tijdrovend zijn, maar met een beetje hulp van een boekhouder kunt u al uw papieren op orde krijgen en het proces soepeler laten verlopen. Wanneer u goed op de hoogte bent van uw situatie en mogelijkheden, kan dit ervoor zorgen dat u minder inkomstenbelasting hoeft te betalen of zelfs geld terug krijgt.**\n\nHoe werkt het belastingaangifte proces?\n\n## 1. Controleer je gegevens\n\nTegenwoordig doet de Belastingdienst al een groot deel van uw belastingaangifte voor u. Dit betekent echter niet dat deze vooraf ingevulde aangifte automatisch klopt. U moet altijd alles controleren en ervoor zorgen dat het allemaal juist is voordat u het indient.\n\n## 2. Bekijk de belastingaangifte van vorig jaar\n\nZijn uw persoonlijke omstandigheden het afgelopen jaar hetzelfde geweest of heeft u niet veel veranderd? Misschien wilt u de belastingaangifte van vorig jaar eens bekijken. Het kan erg handig zijn als je dat doet, want dan onthoud je alle informatie die je hebt ingevoerd en kijk je of er dingen zijn die kunnen worden overgenomen.\n\n## 3. Zorg dat je de boxen correct invult\n\nDe eerste stap bij het invullen van uw belastingaangifte is om uw inkomen in drie aparte boxen in te vullen. Er zijn verschillende inkomenscategorieën en soms worden ze anders belast. Om te beslissen of u belasting moet betalen, moet u rekening houden met de bron van uw inkomen en het bedrag ervan – sommige soorten inkomsten worden mogelijk niet belast en voor andere kunt u geld terugkrijgen. Het totale bedrag aan inkomstenbelasting wordt berekend door de drie verschillende tarieven uit elke box bij elkaar op te tellen.\n\n### Box 1: Het belastbaar inkomen van uw werk en woning.\n\nIn deze box worden al uw inkomsten uit werk en woning bijgehouden. Dit kan loon zijn, maar ook geld dat je hebt verdiend met een bedrijf, een manier van betalen of inkomsten uit andere omstandigheden (zoals een bijbaan).\n\nHeeft u een huis te koop? Dan worden bij deze inkomsten ook de inkomsten uit de eigen woning (het eigenwoningforfait) opgeteld. Van dit bedrag kunnen aftrekposten worden afgetrokken, zoals betaalde hypotheekrente en andere betaalde kosten.\n\nDit tel je uiteindelijk bij elkaar op:\n\n-   Loon uit dienstverband\n-   Winst uit onderneming\n-   Inkomen uit overige werkzaamheden (bijvoorbeeld een freelanceopdracht)\n-   Inkomen uit sociale uitkeringen en pensioen\n-   Inkomen uit lijfrenteproducten\n-   Ontvangen inkomen uit partneralimentatie\n-   Eigenwoningforfait (wordt hieronder nog uitgelegd)\n\nDit trek je ervan af:\n\n-   Betaalde rente over eigen woningschuld, hypotheekrente\n-   Ondernemersaftrek\n-   Werknemersaftrek\n-   Uitgaven voor inkomensvoorzieningen\n-   Betaalde alimentatie (betaalde kinderalimentatie is niet aftrekbaar)\n-   Overige persoonsgebonden aftrek\n\n### Box 2: Belastbaar inkomen uit aanmerkelijk belang\n\nBox 2 betreft een aanmerkelijk belang in de onderneming. Van een aanmerkelijk belang is sprake wanneer iemand (alleen of met een partner) minimaal 5% van de aandelen van een vennootschap (bijvoorbeeld een BV) bezit.\n\n### Box 3: Belastbaar inkomen uit sparen en beleggen\n\nOm uw “belastbare inkomen uit sparen en beleggen” voor de belastingaangifte van het huidig jaar te achterhalen, dient u rekening te houden met de bezittingen en schulden zoals deze waren op het jaar ervoor. Uw spaargeld (en beleggingen in aandelen of onroerend goed) vallen hierin mee, maar uw eigen woning niet. Dit valt onder categorie 1.\n\n### Eigenwoningforfait\n\nIn box 1 hebben we ook het eigenwoningforfait genoemd. Het is een bedrag dat eigenaren van een eigen woning bij hun inkomen in box 1 moeten optellen. Het is een soort compensatie voor het woongenot. Op de site van de Belastingdienst staat een pagina met uitgebreide voorbeelden voor het berekenen van het eigenwoningforfait.\n\n## Vraag om hulp als je er niet uitkomt\n\nAls je niet zeker weet wat je moet doen, vraag dan om hulp. De Belastingdienst biedt gratis hulp, maar je kunt ook contact met ons opnemen door het contactformulier in te vullen. Wij helpen je graag hiermee.";
				}
				function compiledContent$3() {
					return html$3;
				}
				function getHeadings$3() {
					return [{"depth":2,"slug":"1-controleer-je-gegevens","text":"1. Controleer je gegevens"},{"depth":2,"slug":"2-bekijk-de-belastingaangifte-van-vorig-jaar","text":"2. Bekijk de belastingaangifte van vorig jaar"},{"depth":2,"slug":"3-zorg-dat-je-de-boxen-correct-invult","text":"3. Zorg dat je de boxen correct invult"},{"depth":3,"slug":"box-1-het-belastbaar-inkomen-van-uw-werk-en-woning","text":"Box 1: Het belastbaar inkomen van uw werk en woning."},{"depth":3,"slug":"box-2-belastbaar-inkomen-uit-aanmerkelijk-belang","text":"Box 2: Belastbaar inkomen uit aanmerkelijk belang"},{"depth":3,"slug":"box-3-belastbaar-inkomen-uit-sparen-en-beleggen","text":"Box 3: Belastbaar inkomen uit sparen en beleggen"},{"depth":3,"slug":"eigenwoningforfait","text":"Eigenwoningforfait"},{"depth":2,"slug":"vraag-om-hulp-als-je-er-niet-uitkomt","text":"Vraag om hulp als je er niet uitkomt"}];
				}
				async function Content$3() {
					const { layout, ...content } = frontmatter$3;
					content.file = file$3;
					content.url = url$3;
					const contentFragment = createVNode(Fragment, { 'set:html': html$3 });
					return createVNode($$Landingpage, {
									file: file$3,
									url: url$3,
									content,
									frontmatter: content,
									headings: getHeadings$3(),
									rawContent: rawContent$3,
									compiledContent: compiledContent$3,
									'server:root': true,
									children: contentFragment
								});
				}
				Content$3[Symbol.for('astro.needsHeadRendering')] = false;

const _page4 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Content: Content$3,
  compiledContent: compiledContent$3,
  default: Content$3,
  file: file$3,
  frontmatter: frontmatter$3,
  getHeadings: getHeadings$3,
  rawContent: rawContent$3,
  url: url$3
}, Symbol.toStringTag, { value: 'Module' }));

const html$2 = "<p>Natuurlijk wil je zo min mogelijk belasting betalen en zoveel mogelijk profiteren van de fiscale voordelen. Door de veranderende wet- en regelgeving is dit vaak erg lastig en tijdrovend. Administratiekantoor Dordrecht helpt je graag en zijn erop gebrand om voor jou het onderste uit de kan te halen.</p>\n<p>Wij verzorgen:</p>\n<ul>\n<li>Inkomstenbelasting</li>\n<li>Loonbelasting</li>\n<li>Vennootschapsbelasting</li>\n<li>Omzetbelasting</li>\n</ul>\n<p>Heb jij een belastingadviseur nodig? Wij staan voor alle soorten belastingaangiften voor je klaar. Voor jou kan deze complexe klus elk jaar als een verplichting voelen. Wij halen er juist voldoening uit om jou te helpen met de belastingaangiften en zoveel mogelijk belastingvoordeel te behalen. Dit zijn de voordelen als je jouw belastingaangiften aan ons uitbesteed:</p>\n<h2 id=\"vakkennis-is-up-to-date\">Vakkennis is up to date</h2>\n<p>Uitstel belastingaangiften ten opzichte van het zelf indienen<br>\nBespaart je veel tijd<br>\nVoorkomt onnodige boetes bij het verkeerd aangeven<br>\nLaat je door ons de jaarrekening opstellen? De belastingaangiften liggen in het verlengde hiervan</p>";

				const frontmatter$2 = {"layout":"../../layouts/landingpage.astro","title":"Fiscaal Advies"};
				const file$2 = "/Users/nt-macbook/code/boekhouder-tailwind/src/pages/diensten/fiscaal-advies.md";
				const url$2 = "/diensten/fiscaal-advies";
				function rawContent$2() {
					return "\nNatuurlijk wil je zo min mogelijk belasting betalen en zoveel mogelijk profiteren van de fiscale voordelen. Door de veranderende wet- en regelgeving is dit vaak erg lastig en tijdrovend. Administratiekantoor Dordrecht helpt je graag en zijn erop gebrand om voor jou het onderste uit de kan te halen.\n\nWij verzorgen:\n\n-   Inkomstenbelasting\n-   Loonbelasting\n-   Vennootschapsbelasting\n-   Omzetbelasting\n\nHeb jij een belastingadviseur nodig? Wij staan voor alle soorten belastingaangiften voor je klaar. Voor jou kan deze complexe klus elk jaar als een verplichting voelen. Wij halen er juist voldoening uit om jou te helpen met de belastingaangiften en zoveel mogelijk belastingvoordeel te behalen. Dit zijn de voordelen als je jouw belastingaangiften aan ons uitbesteed:\n\n## Vakkennis is up to date  \nUitstel belastingaangiften ten opzichte van het zelf indienen  \nBespaart je veel tijd  \nVoorkomt onnodige boetes bij het verkeerd aangeven  \nLaat je door ons de jaarrekening opstellen? De belastingaangiften liggen in het verlengde hiervan";
				}
				function compiledContent$2() {
					return html$2;
				}
				function getHeadings$2() {
					return [{"depth":2,"slug":"vakkennis-is-up-to-date","text":"Vakkennis is up to date"}];
				}
				async function Content$2() {
					const { layout, ...content } = frontmatter$2;
					content.file = file$2;
					content.url = url$2;
					const contentFragment = createVNode(Fragment, { 'set:html': html$2 });
					return createVNode($$Landingpage, {
									file: file$2,
									url: url$2,
									content,
									frontmatter: content,
									headings: getHeadings$2(),
									rawContent: rawContent$2,
									compiledContent: compiledContent$2,
									'server:root': true,
									children: contentFragment
								});
				}
				Content$2[Symbol.for('astro.needsHeadRendering')] = false;

const _page5 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Content: Content$2,
  compiledContent: compiledContent$2,
  default: Content$2,
  file: file$2,
  frontmatter: frontmatter$2,
  getHeadings: getHeadings$2,
  rawContent: rawContent$2,
  url: url$2
}, Symbol.toStringTag, { value: 'Module' }));

const html$1 = "<h2 id=\"administratie\">Administratie</h2>\n<p>Als ondernemer in de regio Amsterdam doe je graag waar jij goed in bent. De boekhouding en administratie is vaak een taak die je er ongevraagd bijkrijgt, maar wel noodzakelijk is. Wij helpen je graag bij die taken.</p>\n<p>Daarom laat je je boekhouding en salarisadministratie met een gerust hart achter bij ons: het administratiekantoor in Amsterdam. Wij geven jou meer zekerheid én inzicht in jouw bedrijfsadministratie. Ons administratiekantoor helpt klanten uit alerlei soorten branches: advocatuur, consultancy, retail, aannemerij, handelsondernemingen, zorg enz. Van eenpitter tot een ondernemer met meerdere vennoten en werknemers, nationaal en internationaal.</p>\n<h2 id=\"boekhouder-in-t-gooi-helpt-iedere-ondernemer\">Boekhouder in ‘t Gooi helpt iedere ondernemer</h2>\n<p>Ons administratiekantoor verzorgt de boekhouding voor zzp’ers, mkb en grote organisaties.</p>\n<p>Wij helpen je met:</p>\n<ul>\n<li>\n<p><strong>Inrichten van je boekhouding</strong><br>\nWij verzorgen een structuur waarmee je alle elementen correct registreert. Belangrijk voor de belastingaangiftes, maar ook voor jouw eigen financiële overzicht.</p>\n</li>\n<li>\n<p><strong>Boekhouding</strong><br>\nLever je bonnetjes in bij ons administratiekantoor in Amsterdam of doe dit online. Wij zorgen voor de rest.</p>\n</li>\n<li>\n<p><strong>Jaarrekening, inkomstenbelasting, vennootschapsbelasting en omzetbelasting</strong><br>\nWij controleren je cijfers en maken een correcte uitdraai voor de Belastingdienst.</p>\n</li>\n<li>\n<p><strong>Salarisadministratie</strong><br>\nMaak je een snelle groei door en heb je advies nodig voor je salarisadministratie? Of wil je liever alles uitbesteden? Ons administratiekantoor neemt al het werk uit handen.</p>\n</li>\n<li>\n<p><strong>Fiscale vraagstukken</strong><br>\nHoe stel je een correcte jaarrekening op? Hoe registreer je inkomsten wanneer je internationaal samenwerkt? Wij helpen je met alle fiscale vraagstukken.</p>\n</li>\n<li>\n<p><strong>Financieringsvraagstukken</strong><br>\nIs het verstandig om een nieuwe investering te doen? Is het misschien verstandiger om een bedrijfstak af te stoten? Ons administratiekantoor in Amsterdam rekent de gevolgen voor je door.</p>\n</li>\n<li>\n<p><strong>Rapportages voor kredietverschaffers</strong><br>\nEen duidelijk overzicht van jouw financiële situatie, zodat kredietverschaffers kunnen bepalen of ze jouw kredietaanvraag kunnen goedkeuren.</p>\n</li>\n<li>\n<p><strong>Verzekeringstechnische vraagstukken</strong><br>\nOns administratiekantoor heeft een sterk netwerk in Amsterdam en omgeving, zodat we ook al je vragen rondom verzekeringen kunnen beantwoorden.</p>\n</li>\n<li>\n<p><strong>Brede kennis arbeidsrecht &#x26; sociale wetgeving</strong><br>\nPersoneel een blok aan je been? Niet met ons administratiekantoor aan je zijde! Cijferbaas adviseert je in arbeidsrecht en sociale wetgeving, zodat jouw onderneming aan alle regels voldoet.</p>\n</li>\n</ul>";

				const frontmatter$1 = {"layout":"../../layouts/landingpage.astro","title":"Administratie"};
				const file$1 = "/Users/nt-macbook/code/boekhouder-tailwind/src/pages/diensten/administratie.md";
				const url$1 = "/diensten/administratie";
				function rawContent$1() {
					return "\n## Administratie\n\nAls ondernemer in de regio Amsterdam doe je graag waar jij goed in bent. De boekhouding en administratie is vaak een taak die je er ongevraagd bijkrijgt, maar wel noodzakelijk is. Wij helpen je graag bij die taken.\n\nDaarom laat je je boekhouding en salarisadministratie met een gerust hart achter bij ons: het administratiekantoor in Amsterdam. Wij geven jou meer zekerheid én inzicht in jouw bedrijfsadministratie. Ons administratiekantoor helpt klanten uit alerlei soorten branches: advocatuur, consultancy, retail, aannemerij, handelsondernemingen, zorg enz. Van eenpitter tot een ondernemer met meerdere vennoten en werknemers, nationaal en internationaal.\n\n## Boekhouder in ‘t Gooi helpt iedere ondernemer\n\nOns administratiekantoor verzorgt de boekhouding voor zzp’ers, mkb en grote organisaties.\n\nWij helpen je met:\n\n-   **Inrichten van je boekhouding**  \n    Wij verzorgen een structuur waarmee je alle elementen correct registreert. Belangrijk voor de belastingaangiftes, maar ook voor jouw eigen financiële overzicht.\n\n-   **Boekhouding**  \n    Lever je bonnetjes in bij ons administratiekantoor in Amsterdam of doe dit online. Wij zorgen voor de rest.\n    \n-   **Jaarrekening, inkomstenbelasting, vennootschapsbelasting en omzetbelasting**  \n    Wij controleren je cijfers en maken een correcte uitdraai voor de Belastingdienst.\n-   **Salarisadministratie**  \n    Maak je een snelle groei door en heb je advies nodig voor je salarisadministratie? Of wil je liever alles uitbesteden? Ons administratiekantoor neemt al het werk uit handen.\n-   **Fiscale vraagstukken**  \n    Hoe stel je een correcte jaarrekening op? Hoe registreer je inkomsten wanneer je internationaal samenwerkt? Wij helpen je met alle fiscale vraagstukken.\n-   **Financieringsvraagstukken**  \n    Is het verstandig om een nieuwe investering te doen? Is het misschien verstandiger om een bedrijfstak af te stoten? Ons administratiekantoor in Amsterdam rekent de gevolgen voor je door.\n-   **Rapportages voor kredietverschaffers**  \n    Een duidelijk overzicht van jouw financiële situatie, zodat kredietverschaffers kunnen bepalen of ze jouw kredietaanvraag kunnen goedkeuren.\n-   **Verzekeringstechnische vraagstukken**  \n    Ons administratiekantoor heeft een sterk netwerk in Amsterdam en omgeving, zodat we ook al je vragen rondom verzekeringen kunnen beantwoorden.\n-   **Brede kennis arbeidsrecht & sociale wetgeving**  \n    Personeel een blok aan je been? Niet met ons administratiekantoor aan je zijde! Cijferbaas adviseert je in arbeidsrecht en sociale wetgeving, zodat jouw onderneming aan alle regels voldoet.";
				}
				function compiledContent$1() {
					return html$1;
				}
				function getHeadings$1() {
					return [{"depth":2,"slug":"administratie","text":"Administratie"},{"depth":2,"slug":"boekhouder-in-t-gooi-helpt-iedere-ondernemer","text":"Boekhouder in ‘t Gooi helpt iedere ondernemer"}];
				}
				async function Content$1() {
					const { layout, ...content } = frontmatter$1;
					content.file = file$1;
					content.url = url$1;
					const contentFragment = createVNode(Fragment, { 'set:html': html$1 });
					return createVNode($$Landingpage, {
									file: file$1,
									url: url$1,
									content,
									frontmatter: content,
									headings: getHeadings$1(),
									rawContent: rawContent$1,
									compiledContent: compiledContent$1,
									'server:root': true,
									children: contentFragment
								});
				}
				Content$1[Symbol.for('astro.needsHeadRendering')] = false;

const _page6 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Content: Content$1,
  compiledContent: compiledContent$1,
  default: Content$1,
  file: file$1,
  frontmatter: frontmatter$1,
  getHeadings: getHeadings$1,
  rawContent: rawContent$1,
  url: url$1
}, Symbol.toStringTag, { value: 'Module' }));

const html = "<h2 id=\"waarom-is-boekhouden-nodig\"><strong>Waarom is boekhouden nodig?</strong></h2>\n<h3 id=\"verplicht-voor-de-belastingdienst\">Verplicht voor de Belastingdienst</h3>\n<p>Als ondernemer bent u wettelijk verplicht om een goede en nauwkeurige administratie op te zetten en bij te houden. Het bijhouden van de rekeningen is om verschillende redenen belangrijk. Van belastingdoeleinden tot het oplossen van problemen, boekhouding kan u op de lange termijn, tijd en moeite besparen. Het bijhouden van uw boekhouding is essentieel voor de meeste ondernemers. U moet niet alleen btw-aangifte doen en jaarverslagen maken, maar deze documenten moeten ook worden gebruikt bij het invullen van de aangiften inkomstenbelasting. Als u later in het belastingjaar informatie uit uw archieven moet hergebruiken, bespaart u tijd en moeite. Archieven moeten 7 jaar worden bewaard. Gegevens over onroerend goed en rechten op onroerend goed moet u 10 jaar bewaren</p>\n<h3 id=\"goed-financieel-overzicht\">Goed financieel overzicht</h3>\n<p>Boekhouding is essentieel om ervoor te zorgen dat uw bedrijf op de hoogte blijft van zijn financiën. Het geeft u ook een goed idee over de financiële gezondheid van uw bedrijf, wat uiteindelijk helpt bij het voorspellen van hoe het in de toekomst zou presteren. Door constant gebruik te maken van boekhoudsoftware of een boekhouder, bent u altijd op de hoogte van uw balansen en winst- en verliesrekening zodat u kunt zien wat er in uw bedrijf gebeurt. Bijvoorbeeld als er ruimte is voor investeringen of verbeteringen.</p>\n<h2 id=\"wat-doet-een-boekhouder\">Wat doet een boekhouder?</h2>\n<p>U bent dus een kleine ondernemer en heeft hard gewerkt om uw bedrijf te laten groeien. Je houdt van wat je doet, maar hebt het gevoel dat je meer tijd met je gezin zou kunnen doorbrengen. Een van de neveneffecten hiervan kan een administratieve overbelasting van uw tijd zijn. Daarom besteden veel kleine bedrijven hun boekhouding uit aan een freelancer of bedrijf. Wat een boekhouder precies doet?</p>\n<p>Een boekhouder is verantwoordelijk voor het dagelijks bijhouden van de administratie van een organisatie. Deze records kunnen transacties, facturen, ontvangstbewijzen en salarisadministratie bevatten.</p>\n<h2 id=\"wanneer-heb-je-een-boekhouder-nodig\">Wanneer heb je een boekhouder nodig?</h2>\n<p>Het is gemakkelijk te zien dat veel ondernemers iemand inhuren om hen te helpen bij het doen van hun boekhouding, omdat ze zo productief kunnen zijn. Ze hebben meer tijd voor hun bedrijf en hoeven geen georganiseerde administratie te voeren.</p>\n<p>Daarnaast is specialistische kennis vereist voor het invullen van belastingaangiften. Er zijn veel dingen waar over we belasting moeten betalen, maar er zijn net zoveel regelingen die u belastingvoordelen kunnen opleveren. Boekhouders kennen deze en kunnen uw belastingaangifte zo invullen dat deze in uw voordeel werkt. De kosten van een boekhouder verdient zichzelf terug.</p>";

				const frontmatter = {"layout":"../../layouts/landingpage.astro","title":"Boekhouding"};
				const file = "/Users/nt-macbook/code/boekhouder-tailwind/src/pages/diensten/boekhouding.md";
				const url = "/diensten/boekhouding";
				function rawContent() {
					return "\n## **Waarom is boekhouden nodig?**\n\n### Verplicht voor de Belastingdienst\n\nAls ondernemer bent u wettelijk verplicht om een goede en nauwkeurige administratie op te zetten en bij te houden. Het bijhouden van de rekeningen is om verschillende redenen belangrijk. Van belastingdoeleinden tot het oplossen van problemen, boekhouding kan u op de lange termijn, tijd en moeite besparen. Het bijhouden van uw boekhouding is essentieel voor de meeste ondernemers. U moet niet alleen btw-aangifte doen en jaarverslagen maken, maar deze documenten moeten ook worden gebruikt bij het invullen van de aangiften inkomstenbelasting. Als u later in het belastingjaar informatie uit uw archieven moet hergebruiken, bespaart u tijd en moeite. Archieven moeten 7 jaar worden bewaard. Gegevens over onroerend goed en rechten op onroerend goed moet u 10 jaar bewaren\n\n### Goed financieel overzicht\n\nBoekhouding is essentieel om ervoor te zorgen dat uw bedrijf op de hoogte blijft van zijn financiën. Het geeft u ook een goed idee over de financiële gezondheid van uw bedrijf, wat uiteindelijk helpt bij het voorspellen van hoe het in de toekomst zou presteren. Door constant gebruik te maken van boekhoudsoftware of een boekhouder, bent u altijd op de hoogte van uw balansen en winst- en verliesrekening zodat u kunt zien wat er in uw bedrijf gebeurt. Bijvoorbeeld als er ruimte is voor investeringen of verbeteringen.\n\n## Wat doet een boekhouder?\n\nU bent dus een kleine ondernemer en heeft hard gewerkt om uw bedrijf te laten groeien. Je houdt van wat je doet, maar hebt het gevoel dat je meer tijd met je gezin zou kunnen doorbrengen. Een van de neveneffecten hiervan kan een administratieve overbelasting van uw tijd zijn. Daarom besteden veel kleine bedrijven hun boekhouding uit aan een freelancer of bedrijf. Wat een boekhouder precies doet?\n\nEen boekhouder is verantwoordelijk voor het dagelijks bijhouden van de administratie van een organisatie. Deze records kunnen transacties, facturen, ontvangstbewijzen en salarisadministratie bevatten.\n\n## Wanneer heb je een boekhouder nodig?\n\nHet is gemakkelijk te zien dat veel ondernemers iemand inhuren om hen te helpen bij het doen van hun boekhouding, omdat ze zo productief kunnen zijn. Ze hebben meer tijd voor hun bedrijf en hoeven geen georganiseerde administratie te voeren.\n\nDaarnaast is specialistische kennis vereist voor het invullen van belastingaangiften. Er zijn veel dingen waar over we belasting moeten betalen, maar er zijn net zoveel regelingen die u belastingvoordelen kunnen opleveren. Boekhouders kennen deze en kunnen uw belastingaangifte zo invullen dat deze in uw voordeel werkt. De kosten van een boekhouder verdient zichzelf terug.";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"waarom-is-boekhouden-nodig","text":"Waarom is boekhouden nodig?"},{"depth":3,"slug":"verplicht-voor-de-belastingdienst","text":"Verplicht voor de Belastingdienst"},{"depth":3,"slug":"goed-financieel-overzicht","text":"Goed financieel overzicht"},{"depth":2,"slug":"wat-doet-een-boekhouder","text":"Wat doet een boekhouder?"},{"depth":2,"slug":"wanneer-heb-je-een-boekhouder-nodig","text":"Wanneer heb je een boekhouder nodig?"}];
				}
				async function Content() {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;
					const contentFragment = createVNode(Fragment, { 'set:html': html });
					return createVNode($$Landingpage, {
									file,
									url,
									content,
									frontmatter: content,
									headings: getHeadings(),
									rawContent,
									compiledContent,
									'server:root': true,
									children: contentFragment
								});
				}
				Content[Symbol.for('astro.needsHeadRendering')] = false;

const _page7 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Content,
  compiledContent,
  default: Content,
  file,
  frontmatter,
  getHeadings,
  rawContent,
  url
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$a = createAstro("https://boekhouder-het-gooi.nl");
const $$OverOns = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$OverOns;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "About" }, { "default": () => renderTemplate`${maybeRenderHead($$result)}<div class="bg-babyblue flex h-96">
        <div class="m-auto text-center">
            <h1 class="font-bold text-6xl text-gray-800">
                Over ons
                </h1>
                <p class="text-lg font-light">
                    Wij maken ondernemen weer makkelijk
                </p>
        </div>
    </div>${renderComponent($$result, "Container", $$Container, {}, { "default": () => renderTemplate`<div class="flex my-12 max-w-5xl mx-auto">
            <div class="w-1/2">
                <p class="text-xl mt-4 text-slate-600 font-light">
                    Wij voorzien bedrijven, ondernemers, het MKB en particulieren van administratief, boekhoudkundig, fiscaal en financieel advies. Ons team van professionals helpt u met al uw behoeften.
                </p>
                <p class="text-xl mt-4 text-slate-600 font-light">
                    Ieder bedrijf is anders en vraagt om een andere aanpak. In welke branche u ook actief bent, wij kunnen de boekhouding verzorgen. We hebben een team van allemaal ervaren freelancers en we kunnen een nieuw perspectief op uw bedrijf bieden. Dit betekent dat je meer tijd hebt om te besteden aan de groei van uw bedrijf.
                </p>
                <p class="text-xl mt-4 text-slate-600 font-light">
                    Wilt u snel gaan? Ga dan alleen, wilt u groeien? Ga dan samen is ons motto. Boekhouding voor starters, zzp'ers en particulieren in omgeving van 't Gooi.
                </p>
            </div>
            <div class="w-1/2 px-10">
                <img class="object-contain h-200 w-96" src="https://boekhouder-het-gooi.nl/wp-content/themes/owls_leadgen/assets/img/icons/man-laptop.svg">
            </div>
        </div>` })}${renderComponent($$result, "PricingTables", $$PricingTables, {})}${renderComponent($$result, "USP", $$Usp, {})}` })}`;
}, "/Users/nt-macbook/code/boekhouder-tailwind/src/pages/over-ons.astro");

const $$file$4 = "/Users/nt-macbook/code/boekhouder-tailwind/src/pages/over-ons.astro";
const $$url$4 = "/over-ons";

const _page8 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$OverOns,
  file: $$file$4,
  url: $$url$4
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$9 = createAstro("https://boekhouder-het-gooi.nl");
const $$Button = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Button;
  const {
    size = "md",
    style = "primary",
    block,
    class: className,
    ...rest
  } = Astro2.props;
  const sizes = {
    md: "px-5 py-2.5",
    lg: "px-6 py-3"
  };
  const styles = {
    outline: "border-2 border-black hover:bg-black text-black hover:text-white",
    primary: "bg-black text-white hover:bg-slate-900  border-2 border-transparent"
  };
  return renderTemplate`${maybeRenderHead($$result)}<button${spreadAttributes(rest)}${addAttribute([
    "rounded text-center transition focus-visible:ring-2 ring-offset-2 ring-gray-200",
    block && "w-full",
    sizes[size],
    styles[style],
    className
  ], "class:list")}>${renderSlot($$result, $$slots["default"])}
</button>`;
}, "/Users/nt-macbook/code/boekhouder-tailwind/src/components/ui/button.astro");

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$8 = createAstro("https://boekhouder-het-gooi.nl");
const $$Contactform = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Contactform;
  return renderTemplate(_a || (_a = __template(["<!-- To make this contact form work, create your free access key from https://web3forms.com/\n     Then you will get all form submissions in your email inbox. -->", '<form action="https://api.web3forms.com/submit" method="POST" id="form" class="needs-validation astro-UWNXE3I2" novalidate>\n  <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" class="astro-UWNXE3I2">\n  <!-- Create your free access key from https://web3forms.com/ -->\n  <input type="checkbox" class="hidden astro-UWNXE3I2" style="display:none" name="botcheck">\n  <div class="mb-5 astro-UWNXE3I2">\n    <input type="text" placeholder="Full Name" required class="w-full px-4 py-3 border-2 placeholder:text-gray-800 rounded-md outline-none focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100 astro-UWNXE3I2" name="name">\n    <div class="empty-feedback invalid-feedback text-red-400 text-sm mt-1 astro-UWNXE3I2">\n      Please provide your full name.\n    </div>\n  </div>\n  <div class="mb-5 astro-UWNXE3I2">\n    <label for="email_address" class="sr-only astro-UWNXE3I2">Email Address</label><input id="email_address" type="email" placeholder="Email Address" name="email" required class="w-full px-4 py-3 border-2 placeholder:text-gray-800 rounded-md outline-none focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100 astro-UWNXE3I2">\n    <div class="empty-feedback text-red-400 text-sm mt-1 astro-UWNXE3I2">\n      Please provide your email address.\n    </div>\n    <div class="invalid-feedback text-red-400 text-sm mt-1 astro-UWNXE3I2">\n      Please provide a valid email address.\n    </div>\n  </div>\n  <div class="mb-3 astro-UWNXE3I2">\n    <textarea name="message" required placeholder="Your Message" class="w-full px-4 py-3 border-2 placeholder:text-gray-800 rounded-md outline-none h-36 focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100 astro-UWNXE3I2"></textarea>\n    <div class="empty-feedback invalid-feedback text-red-400 text-sm mt-1 astro-UWNXE3I2">\n      Please enter your message.\n    </div>\n  </div>\n  ', '\n  <div id="result" class="mt-3 text-center astro-UWNXE3I2"></div>\n</form>\n\n\n\n<script>\n  const form = document.getElementById("form");\n  const result = document.getElementById("result");\n\n  form.addEventListener("submit", function (e) {\n    e.preventDefault();\n    form.classList.add("was-validated");\n    if (!form.checkValidity()) {\n      form.querySelectorAll(":invalid")[0].focus();\n      return;\n    }\n    const formData = new FormData(form);\n    const object = Object.fromEntries(formData);\n    const json = JSON.stringify(object);\n\n    result.innerHTML = "Sending...";\n\n    fetch("https://api.web3forms.com/submit", {\n      method: "POST",\n      headers: {\n        "Content-Type": "application/json",\n        Accept: "application/json",\n      },\n      body: json,\n    })\n      .then(async (response) => {\n        let json = await response.json();\n        if (response.status == 200) {\n          result.classList.add("text-green-500");\n          result.innerHTML = json.message;\n        } else {\n          console.log(response);\n          result.classList.add("text-red-500");\n          result.innerHTML = json.message;\n        }\n      })\n      .catch((error) => {\n        console.log(error);\n        result.innerHTML = "Something went wrong!";\n      })\n      .then(function () {\n        form.reset();\n        form.classList.remove("was-validated");\n        setTimeout(() => {\n          result.style.display = "none";\n        }, 5000);\n      });\n  });\n<\/script>'])), maybeRenderHead($$result), renderComponent($$result, "Button", $$Button, { "type": "submit", "size": "lg", "block": true, "class": "astro-UWNXE3I2" }, { "default": () => renderTemplate`Stuur bericht` }));
}, "/Users/nt-macbook/code/boekhouder-tailwind/src/components/contactform.astro");

const $$Astro$7 = createAstro("https://boekhouder-het-gooi.nl");
const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Contact;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Contact" }, { "default": () => renderTemplate`${maybeRenderHead($$result)}<div class="bg-babyblue flex h-96">
        <div class="m-auto text-center">
            <h1 class="font-bold text-6xl text-gray-800">
                Contact
                </h1>
                <p class="text-lg font-light mt-4">
                    Vul het contactformulier in voor meer informatie
                </p>
        </div>
    </div>${renderComponent($$result, "Container", $$Container, {}, { "default": () => renderTemplate`<div class="grid md:grid-cols-2 gap-10 mx-auto max-w-4xl mt-16">
      <div>
        <h2 class="font-medium text-2xl text-gray-800">Boekhouder 't Gooi</h2>
        <p class="text-lg leading-relaxed text-slate-500 mt-3">
          Vul het contactformulier in en wij nemen z.s.m. contact met je op
        </p>
        <div class="mt-5">
          <div class="flex items-center mt-2 space-x-2 text-gray-600">
            ${renderComponent($$result, "Icon", $$Icon, { "class": "text-gray-400 w-4 h-4", "name": "uil:map-marker" })}
            <span>Stationsstraat 14-C 1211 EM
Hilversum</span>
          </div><div class="flex items-center mt-2 space-x-2 text-gray-600">
            ${renderComponent($$result, "Icon", $$Icon, { "class": "text-gray-400 w-4 h-4", "name": "uil:envelope" })}<a href="">info[@]boekhouder-het-gooi.nl</a>
          </div>
        </div>
      </div>
      <div>
        ${renderComponent($$result, "Contactform", $$Contactform, {})}
      </div>
    </div>` })}` })}`;
}, "/Users/nt-macbook/code/boekhouder-tailwind/src/pages/contact.astro");

const $$file$3 = "/Users/nt-macbook/code/boekhouder-tailwind/src/pages/contact.astro";
const $$url$3 = "/contact";

const _page9 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file$3,
  url: $$url$3
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$6 = createAstro("https://boekhouder-het-gooi.nl");
const $$Sectionhead = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Sectionhead;
  const { align = "center" } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<div${addAttribute(["mt-16", align === "center" && "text-center"], "class:list")}>
  <h1 class="text-4xl lg:text-5xl font-bold lg:tracking-tight">
    ${renderSlot($$result, $$slots["title"], renderTemplate`Title`)}
  </h1>
  <p class="text-lg mt-4 text-slate-600">
    ${renderSlot($$result, $$slots["desc"], renderTemplate`Some description goes here`)}
  </p>
</div>`;
}, "/Users/nt-macbook/code/boekhouder-tailwind/src/components/sectionhead.astro");

const $$Astro$5 = createAstro("https://boekhouder-het-gooi.nl");
const $$Tick = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Tick;
  const { class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<svg${addAttribute(className, "class")} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="9" fill="currentColor" fill-opacity=".16"></circle><path fill-rule="evenodd" clip-rule="evenodd" d="M3.75 12a8.25 8.25 0 0 1 11.916-7.393.75.75 0 1 0 .668-1.343A9.713 9.713 0 0 0 12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75c0-.366-.02-.727-.06-1.082a.75.75 0 1 0-1.49.164A8.25 8.25 0 1 1 3.75 12Zm17.78-6.47a.75.75 0 0 0-1.06-1.06L12 12.94l-2.47-2.47a.75.75 0 0 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l9-9Z" fill="currentColor"></path>
</svg>`;
}, "/Users/nt-macbook/code/boekhouder-tailwind/src/components/ui/icons/tick.astro");

const $$Astro$4 = createAstro("https://boekhouder-het-gooi.nl");
const $$Link = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Link;
  const {
    href,
    block,
    size = "lg",
    style = "primary",
    class: className,
    ...rest
  } = Astro2.props;
  const sizes = {
    lg: "px-5 py-2.5",
    md: "px-4 py-2"
  };
  const styles = {
    outline: "bg-white border-2 border-black hover:bg-gray-100 text-black ",
    primary: "bg-black text-white hover:bg-gray-800  border-2 border-transparent",
    inverted: "bg-white text-black   border-2 border-transparent",
    muted: "bg-gray-100 hover:bg-gray-200   border-2 border-transparent"
  };
  return renderTemplate`${maybeRenderHead($$result)}<a${addAttribute(href, "href")}${spreadAttributes(rest)}${addAttribute([
    "rounded text-center transition focus-visible:ring-2 ring-offset-2 ring-gray-200",
    block && "w-full",
    sizes[size],
    styles[style],
    className
  ], "class:list")}>${renderSlot($$result, $$slots["default"])}
</a>`;
}, "/Users/nt-macbook/code/boekhouder-tailwind/src/components/ui/link.astro");

const $$Astro$3 = createAstro("https://boekhouder-het-gooi.nl");
const $$Pricing$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Pricing$1;
  const { plan } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<div>
  <div class="flex flex-col w-full order-first lg:order-none border-2 border-[#D8DEE9] border-opacity-50 py-5 px-6 rounded-md">
    <div class="text-center">
      <h4 class="text-lg font-medium text-gray-400">${plan.name}</h4><p class="mt-3 text-4xl font-bold text-black md:text-4xl">
        ${plan.price && typeof plan.price === "object" ? plan.price.monthly : plan.price}
      </p>
      <!-- {
        plan.price.original && (
          <p class="mt-1 text-xl font-medium text-gray-400 line-through md:text-2xl">
            {plan.price.original}
          </p>
        )
      } -->
    </div><ul class="grid mt-8 text-left gap-y-4">
      ${plan.features.map((item) => renderTemplate`<li class="flex items-start gap-3 text-gray-800">
            ${renderComponent($$result, "Tick", $$Tick, { "class": "w-6 h-6" })}
            <span>${item}</span>
          </li>`)}
    </ul><div class="flex mt-8">
      ${renderComponent($$result, "Link", $$Link, { "href": plan.button.link || "#", "block": true, "style": plan.popular ? "primary" : "outline" }, { "default": () => renderTemplate`${plan.button.text || "Get Started"}` })}
    </div>
  </div>
</div>`;
}, "/Users/nt-macbook/code/boekhouder-tailwind/src/components/pricing.astro");

const $$Astro$2 = createAstro("https://boekhouder-het-gooi.nl");
const $$Pricing = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Pricing;
  const pricing = [
    {
      name: "Personal",
      price: "Free",
      popular: false,
      features: [
        "Lifetime free",
        "Up to 3 users",
        "Unlimited Pages",
        "Astro Sub domain",
        "Basic Integrations",
        "Community Support"
      ],
      button: {
        text: "Get Started",
        link: "/"
      }
    },
    {
      name: "Startup",
      price: {
        monthly: "$19",
        annual: "$16",
        discount: "10%",
        original: "$24"
      },
      popular: true,
      features: [
        "All Free Features",
        "Up to 20 users",
        "20 Custom domains",
        "Unlimited Collaborators",
        "Advanced Integrations",
        "Priority Support"
      ],
      button: {
        text: "Get Started",
        link: "#"
      }
    },
    {
      name: "Enterprise",
      price: "Custom",
      popular: false,
      features: [
        "All Pro Features",
        "Unlimited Custom domains",
        "99.99% Uptime SLA",
        "SAML & SSO Integration",
        "Dedicated Account Manager",
        "24/7 Phone Support"
      ],
      button: {
        text: "Contact us",
        link: "/contact"
      }
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Pricing" }, { "default": () => renderTemplate`${renderComponent($$result, "Container", $$Container, {}, { "default": () => renderTemplate`${renderComponent($$result, "Sectionhead", $$Sectionhead, {}, { "desc": () => renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "slot": "desc" }, { "default": () => renderTemplate`Simple & Predictable pricing. No Surprises.` })}`, "title": () => renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "slot": "title" }, { "default": () => renderTemplate`Pricing` })}` })}${maybeRenderHead($$result)}<div class="grid md:grid-cols-3 gap-10 mx-auto max-w-screen-lg mt-12">
      ${pricing.map((item) => renderTemplate`${renderComponent($$result, "Pricing", $$Pricing$1, { "plan": item })}`)}
    </div>` })}` })}`;
}, "/Users/nt-macbook/code/boekhouder-tailwind/src/pages/pricing.astro");

const $$file$2 = "/Users/nt-macbook/code/boekhouder-tailwind/src/pages/pricing.astro";
const $$url$2 = "/pricing";

const _page10 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Pricing,
  file: $$file$2,
  url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

// astro-head-inject

const contentDir = '/src/content/';

const entryGlob = /* #__PURE__ */ Object.assign({"/src/content/blog/complete-guide-fullstack-development.md": () => import('../complete-guide-fullstack-development.210f441b.mjs'),"/src/content/blog/essential-data-structures-algorithms.md": () => import('../essential-data-structures-algorithms.08fd1f99.mjs'),"/src/content/blog/how-to-become-frontend-master.md": () => import('../how-to-become-frontend-master.04baedc3.mjs'),"/src/content/blog/kitchensink.mdx": () => import('../kitchensink.6a84e01e.mjs'),"/src/content/team/janette-lynch.md": () => import('../janette-lynch.0e20b436.mjs'),"/src/content/team/marcell-ziemann.md": () => import('../marcell-ziemann.bcd93f90.mjs'),"/src/content/team/robert-palmer.md": () => import('../robert-palmer.83210637.mjs')

});
const collectionToEntryMap = createCollectionToGlobResultMap({
	globResult: entryGlob,
	contentDir,
});

const renderEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/blog/complete-guide-fullstack-development.md": () => import('../complete-guide-fullstack-development.8a284f1b.mjs'),"/src/content/blog/essential-data-structures-algorithms.md": () => import('../essential-data-structures-algorithms.65c6bb5d.mjs'),"/src/content/blog/how-to-become-frontend-master.md": () => import('../how-to-become-frontend-master.0a4bf5ab.mjs'),"/src/content/blog/kitchensink.mdx": () => import('../kitchensink.ce1b1ef9.mjs'),"/src/content/team/janette-lynch.md": () => import('../janette-lynch.5b09e4c6.mjs'),"/src/content/team/marcell-ziemann.md": () => import('../marcell-ziemann.c15a1c11.mjs'),"/src/content/team/robert-palmer.md": () => import('../robert-palmer.3d548671.mjs')

});
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const getCollection = createGetCollection({
	collectionToEntryMap,
	collectionToRenderEntryMap,
});

const $$Astro$1 = createAstro("https://boekhouder-het-gooi.nl");
async function getStaticPaths() {
  const blogEntries = await getCollection("blog");
  return blogEntries.map((entry) => ({
    params: { slug: entry.slug },
    props: { entry }
  }));
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$slug;
  const { entry } = Astro2.props;
  const { Content } = await entry.render();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": entry.data.title }, { "default": () => renderTemplate`${renderComponent($$result, "Container", $$Container, {}, { "default": () => renderTemplate`${maybeRenderHead($$result)}<div class="mx-auto max-w-[735px] mt-14">
      <span class="text-blue-400 uppercase tracking-wider text-sm font-medium">
        ${entry.data.category}
      </span>
      <h1 class="text-4xl lg:text-5xl font-bold lg:tracking-tight mt-1 lg:leading-tight">
        ${entry.data.title}
      </h1>
      <div class="flex gap-2 mt-3 items-center flex-wrap md:flex-nowrap">
        <span class="text-gray-400">
          ${entry.data.author}
        </span>
        <span class="text-gray-400">•</span>
        <time class="text-gray-400"${addAttribute(entry.data.publishDate.toISOString(), "datetime")}>
          ${entry.data.publishDate.toDateString()}
        </time>
        <span class="text-gray-400 hidden md:block">•</span>
        <div class="w-full md:w-auto flex flex-wrap gap-3">
          ${entry.data.tags.map((tag) => renderTemplate`<span class="text-sm text-gray-500">#${tag}</span>`)}
        </div>
      </div>
    </div><div class="mx-auto prose prose-lg mt-6">
        ${renderComponent($$result, "Content", Content, {})}
    </div><div class="text-center mt-8">
      <a href="/blog" class="bg-gray-100 px-5 py-3 rounded-md hover:bg-gray-200 transition">← Back to Blog</a>
    </div>` })}` })}`;
}, "/Users/nt-macbook/code/boekhouder-tailwind/src/pages/blog/[slug].astro");

const $$file$1 = "/Users/nt-macbook/code/boekhouder-tailwind/src/pages/blog/[slug].astro";
const $$url$1 = "/blog/[slug]";

const _page11 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file$1,
  getStaticPaths,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro("https://boekhouder-het-gooi.nl");
const $$Blog = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Blog;
  const publishedBlogEntries = await getCollection("blog", ({ data }) => {
    return !data.draft && data.publishDate < new Date();
  });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Blog" }, { "default": () => renderTemplate`${maybeRenderHead($$result)}<div class="bg-babyblue flex h-96">
        <div class="m-auto text-center">
            <h1 class="font-bold text-6xl text-gray-800">
                Blog
                </h1>
                <p class="text-lg font-light mt-4">
                    Alles over ZZP'ers, boekhouden, fiscaal advies en meer
                </p>
        </div>
    </div>${renderComponent($$result, "Container", $$Container, {}, { "default": () => renderTemplate`<section class="bg-white">
            <div class="container max-w-5xl p-6 mx-auto space-y-6 sm:space-y-12">
                <div class="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    ${publishedBlogEntries.map((blogPostEntry, index) => renderTemplate`<a rel="noopener noreferrer"${addAttribute(`/blog/${blogPostEntry.slug}`, "href")} class="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-white rounded shadow">
                        ${renderComponent($$result, "Picture", $$Picture, { "src": blogPostEntry.data.image.src, "alt": blogPostEntry.data.image.alt, "sizes": "(max-width: 800px) 100vw, 800px", "widths": [200, 400, 800], "aspectRatio": "16:9", "background": "#ffffff", "fit": "cover", "position": "center", "loading": index <= 2 ? "eager" : "lazy", "decoding": index <= 2 ? "sync" : "async", "class": "w-full rounded-md" })}
                        <div class="p-6 space-y-2">
                            <h3 class="text-2xl font-semibold group-hover:underline group-focus:underline"> ${blogPostEntry.data.title}</h3>
                        </div>
                    </a>`)}
                </div>
        </div>
    </section>` })}` })}`;
}, "/Users/nt-macbook/code/boekhouder-tailwind/src/pages/blog.astro");

const $$file = "/Users/nt-macbook/code/boekhouder-tailwind/src/pages/blog.astro";
const $$url = "/blog";

const _page12 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Blog,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Button as $, BaseSSRService as B, _page0 as _, _page1 as a, _page2 as b, _page3 as c, _page4 as d, _page5 as e, _page6 as f, _page7 as g, _page8 as h, _page9 as i, _page10 as j, _page11 as k, _page12 as l, isOutputFormatSupportsAlpha as m };
