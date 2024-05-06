import { _ as __astro_tag_component__ } from './astro.f79604bc.mjs';
import 'html-escaper';

async function getMod() {
  return import('./kitchensink.72535cd6.mjs');
}
const collectedLinks = "@@ASTRO-LINKS@@";
const collectedStyles = "@@ASTRO-STYLES@@";
const collectedScripts = "@@ASTRO-SCRIPTS@@";
__astro_tag_component__(getMod, "astro:jsx");

export { collectedLinks, collectedScripts, collectedStyles, getMod };
