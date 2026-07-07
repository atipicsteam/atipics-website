import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { E as createComponent, T as createAstro, _ as maybeRenderHead, p as renderTemplate, r as renderScript, t as defineStyleVars, u as renderSlot, v as renderHead, y as addAttribute } from "./server_Chz1CeXz.mjs";
import "./compiler_onR2zt3j.mjs";
var parametres_default = {
	nom_site: "ATIPICS",
	description_site: "Ressourcerie éclectique et polyvalente — 10 ans de savoir-faire",
	font: "manrope"
};
var theme_default = {
	c_bg: "#CCC4BA",
	c_text: "#081881",
	c_accent: "#2E4D3F",
	c_accent_lt: "#4A7A65",
	c_muted: "#888884",
	c_border: "#E4E1DA",
	c_surface: "#F0EDE7"
};
//#endregion
//#region src/layouts/Layout.astro
createAstro("https://astro.build");
var FONTS = {
	helvetica: {
		family: "'Helvetica Neue', Helvetica, Arial, sans-serif",
		url: null
	},
	inter: {
		family: "'Inter', sans-serif",
		url: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
	},
	playfair: {
		family: "'Playfair Display', serif",
		url: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@300;400;500;700&display=swap"
	},
	cormorant: {
		family: "'Cormorant Garamond', serif",
		url: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600&display=swap"
	},
	"dm-sans": {
		family: "'DM Sans', sans-serif",
		url: "https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&display=swap"
	},
	josefin: {
		family: "'Josefin Sans', sans-serif",
		url: "https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400;500;600;700&display=swap"
	},
	manrope: {
		family: "'Manrope', sans-serif",
		url: "https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap"
	},
	"eb-garamond": {
		family: "'EB Garamond', serif",
		url: "https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600;1,700;1,800&display=swap"
	}
};
var $$Layout = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Layout;
	const font = FONTS[parametres_default.font || "helvetica"] || FONTS.helvetica;
	const { title = "ATIPICS", description = "Ressourcerie éclectique et polyvalente", ogImage = "/images/projet1.jpg" } = Astro.props;
	`${parametres_default.email || "contact@atipics.fr"}`;
	const $$definedVars = defineStyleVars([{
		fontFamily: font.family,
		cBg: theme_default.c_bg,
		cText: theme_default.c_text,
		cAccent: theme_default.c_accent,
		cAccentLt: theme_default.c_accent_lt,
		cMuted: theme_default.c_muted,
		cBorder: theme_default.c_border,
		cSurface: theme_default.c_surface,
		cHeading: theme_default.c_heading || theme_default.c_text
	}]);
	return renderTemplate`<html lang="fr"${addAttribute($$definedVars, "style")} data-astro-cid-ju4pidww><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="description"${addAttribute(description, "content")}><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="icon" href="/favicon.ico"><title>${title}</title><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:image"${addAttribute(ogImage, "content")}><meta property="og:type" content="website"><meta name="twitter:card" content="summary_large_image"><meta name="twitter:image"${addAttribute(ogImage, "content")}>${font.url && renderTemplate`<link rel="stylesheet"${addAttribute(font.url, "href")}>`}${renderHead($$result)}</head><body${addAttribute($$definedVars, "style")} data-astro-cid-ju4pidww>${renderSlot($$result, $$slots["default"])}</body></html>`;
}, "C:/Users/ninad/Desktop/atipics/src/layouts/Layout.astro", void 0);
//#endregion
//#region src/content/nav/nav-3.json
var nav_3_exports = /* @__PURE__ */ __exportAll({
	default: () => nav_3_default,
	href: () => href$2,
	label: () => label$2,
	sort: () => 0,
	sub: () => sub$2
});
var label$2 = "Agence Atipics";
var href$2 = "/agence";
var sub$2 = [{
	"label": "À propos",
	"href": "/agence#apropos"
}, {
	"label": "Réseaux",
	"href": "/agence#reseaux"
}];
var nav_3_default = {
	label: label$2,
	href: href$2,
	sort: 0,
	sub: sub$2
};
//#endregion
//#region src/content/nav/nav-4.json
var nav_4_exports = /* @__PURE__ */ __exportAll({
	default: () => nav_4_default,
	href: () => href$1,
	label: () => label$1,
	sort: () => 0,
	sub: () => sub$1
});
var label$1 = "Savoir Faire";
var href$1 = "/savoir-faire";
var sub$1 = [
	{
		"label": "Curation et Sourcing",
		"href": "/savoir-faire#curation"
	},
	{
		"label": "Conciergerie et Propriété",
		"href": "/savoir-faire#conciergerie"
	},
	{
		"label": "Events et Scénographie",
		"href": "/savoir-faire#events"
	},
	{
		"label": "Intendance et Logistique",
		"href": "/savoir-faire#intendance"
	},
	{
		"label": "Valorisation de Collections",
		"href": "/savoir-faire#valorisation"
	}
];
var nav_4_default = {
	label: label$1,
	href: href$1,
	sort: 0,
	sub: sub$1
};
//#endregion
//#region src/content/nav/nav-5.json
var nav_5_exports = /* @__PURE__ */ __exportAll({
	default: () => nav_5_default,
	href: () => href,
	label: () => label,
	sort: () => 0,
	sub: () => sub
});
var label = "Village Atipics";
var href = "/village";
var sub = [
	{
		"label": "Entrepôt",
		"href": "/village#entrepot"
	},
	{
		"label": "Studio Design",
		"href": "/village#studiodesign"
	},
	{
		"label": "Atelier",
		"href": "/village#atelier"
	}
];
var nav_5_default = {
	label,
	href,
	sort: 0,
	sub
};
//#endregion
//#region src/components/Header.astro
createAstro("https://astro.build");
var $$Header = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Header;
	const name = parametres_default.nom_site || "ATIPICS";
	let navItems = Object.values(/* @__PURE__ */ Object.assign({
		"../content/nav/nav-3.json": nav_3_exports,
		"../content/nav/nav-4.json": nav_4_exports,
		"../content/nav/nav-5.json": nav_5_exports
	})).map((mod) => mod.default || mod).sort((a, b) => a.sort - b.sort);
	const currentPath = Astro.url.pathname;
	return renderTemplate`${maybeRenderHead($$result)}<header class="header" id="top" data-astro-cid-nen7h5rs><div class="header__inner" data-astro-cid-nen7h5rs><a href="/" class="header__logo" data-astro-cid-nen7h5rs>${name}</a><nav class="nav" aria-label="Navigation principale" data-astro-cid-nen7h5rs><ul class="nav__list" data-astro-cid-nen7h5rs>${navItems.map((item) => renderTemplate`<li class="nav__item" data-astro-cid-nen7h5rs><a${addAttribute(item.href, "href")}${addAttribute(["nav__link", { "nav__link--active": currentPath === item.href || currentPath.startsWith(item.href + "/") || currentPath.startsWith(item.href + "#") }], "class:list")} data-astro-cid-nen7h5rs>${item.label}</a>${item.sub && item.sub.length > 0 && renderTemplate`<ul class="nav__sub" data-astro-cid-nen7h5rs>${item.sub.map((sub) => renderTemplate`<li data-astro-cid-nen7h5rs><a${addAttribute(sub.href, "href")} class="nav__sub-link" data-astro-cid-nen7h5rs>${sub.label}</a></li>`)}</ul>`}</li>`)}</ul></nav><button class="menu-toggle" aria-label="Menu" aria-expanded="false" data-astro-cid-nen7h5rs><span data-astro-cid-nen7h5rs></span><span data-astro-cid-nen7h5rs></span><span data-astro-cid-nen7h5rs></span></button></div></header>${renderScript($$result, "C:/Users/ninad/Desktop/atipics/src/components/Header.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/ninad/Desktop/atipics/src/components/Header.astro", void 0);
var footer_default = {
	legal: "© 2026 Atipics — Ressourcerie éclectique et polyvalente",
	links: [
		{
			"label": "Projets",
			"href": "/projets"
		},
		{
			"label": "Journal",
			"href": "/journal"
		},
		{
			"label": "Contact",
			"href": "/contact"
		}
	]
};
//#endregion
//#region src/components/Footer.astro
createAstro("https://astro.build");
var $$Footer = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Footer;
	const { fixed = false } = Astro.props;
	const footerLinks = footer_default.links;
	const footerLegal = footer_default.legal;
	return renderTemplate`${maybeRenderHead($$result)}<footer${addAttribute(["footer", { "footer--fixed": fixed }], "class:list")} data-astro-cid-jo6i4kqk><div class="footer__inner" data-astro-cid-jo6i4kqk><!-- Liens nav --><nav class="footer__nav" aria-label="Liens rapides" data-astro-cid-jo6i4kqk><ul class="footer__links" data-astro-cid-jo6i4kqk>${footerLinks.map((item) => renderTemplate`<li data-astro-cid-jo6i4kqk><a${addAttribute(item.href, "href")} class="footer__link" data-astro-cid-jo6i4kqk>${item.label}</a></li>`)}</ul></nav><!-- Bas : langue gauche · copyright droite --><div class="footer__bottom" data-astro-cid-jo6i4kqk><div class="footer__lang" id="lang-switcher" role="group" aria-label="Langue" data-astro-cid-jo6i4kqk><button class="footer__lang-btn footer__lang-btn--active" data-lang="fr" aria-pressed="true" data-astro-cid-jo6i4kqk><span class="footer__lang-flag" aria-hidden="true" data-astro-cid-jo6i4kqk>🇫🇷</span><span data-astro-cid-jo6i4kqk>FR</span></button><span class="footer__lang-sep" aria-hidden="true" data-astro-cid-jo6i4kqk>/</span><button class="footer__lang-btn" data-lang="en" aria-pressed="false" data-astro-cid-jo6i4kqk><span class="footer__lang-flag" aria-hidden="true" data-astro-cid-jo6i4kqk>🇬🇧</span><span data-astro-cid-jo6i4kqk>EN</span></button></div><span class="footer__copyright" data-astro-cid-jo6i4kqk>${footerLegal}</span></div></div></footer>${renderScript($$result, "C:/Users/ninad/Desktop/atipics/src/components/Footer.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/ninad/Desktop/atipics/src/components/Footer.astro", void 0);
//#endregion
export { parametres_default as i, $$Header as n, $$Layout as r, $$Footer as t };
