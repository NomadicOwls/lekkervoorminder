import { g as createVNode, F as Fragment } from './astro.f79604bc.mjs';
import 'html-escaper';

const html = "";

				const frontmatter = {"draft":false,"name":"Marcell Ziemann","title":"Principal Strategist","avatar":{"src":"https://images.unsplash.com/photo-1633332755192-727a05c4013d?&fit=crop&w=280","alt":"Marcell Ziemann"},"publishDate":"2022-11-08 15:39"};
				const file = "/Users/nt-macbook/code/boekhouder-tailwind/src/content/team/marcell-ziemann.md";
				const url = undefined;
				function rawContent() {
					return "";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}
				async function Content() {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;
					const contentFragment = createVNode(Fragment, { 'set:html': html });
					return contentFragment;
				}
				Content[Symbol.for('astro.needsHeadRendering')] = true;

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
