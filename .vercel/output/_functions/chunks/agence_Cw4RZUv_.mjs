import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { C as unescapeHTML, E as createComponent, _ as maybeRenderHead, o as renderComponent, p as renderTemplate, r as renderScript, s as Fragment, y as addAttribute } from "./server_Chz1CeXz.mjs";
import "./compiler_onR2zt3j.mjs";
import { i as parametres_default, n as $$Header, r as $$Layout, t as $$Footer } from "./Footer_CFEuF_u5.mjs";
import { t as RichText } from "./RichText_G_rJ0ThB.mjs";
var agence_default = {
	bandeau_image: null,
	bandeau_label: "L'Agence",
	bandeau_titre: "Atipics",
	intro: [{
		"type": "paragraph",
		"children": [{ "text": "" }]
	}],
	manifeste_label: "À PROPOS",
	manifeste_titre: "Architecte de valeur.",
	manifeste_p1: [{
		"type": "paragraph",
		"children": [{ "text": "Une agence de services clé en main.\n " }]
	}],
	manifeste_p2: [{
		"type": "paragraph",
		"children": [{ "text": "Du sourcing approfondi à la production d'événements, de la gestion de domaines et de collections — notre force va au delà du conseil, en nous appuyant sur un réseau de savoir-faire rigoureusement sélectionnés, une logistique maîtrisée et une valorisation active à chaque étape." }]
	}],
	manifeste_p3: [{
		"type": "paragraph",
		"children": [{ "text": "Au cœur de l'Atipics Village\xA0— 4 500 m² d'entrepôts, d'ateliers et d'un studio de design en région parisienne — nos équipes conçoivent et façonnent sur mesure." }]
	}],
	reseaux_label: "RÉSEAUX",
	reseaux_titre: "Un réseau d'exception",
	reseaux_p1: [{
		"type": "paragraph",
		"children": [{ "text": "Artisans, antiquaires, architectes, musiciens — notre carnet d'adresses est le fruit de dix années de rencontres et de confiance mutuelle. Un réseau humain, construit sur la durée." }]
	}],
	reseaux_p2: [{
		"type": "paragraph",
		"children": [{ "text": "Vast network in France and across Europe that is our foundation on which we build our other services. Luxury transportation, auctioneers, book experts. Musicians, performers, and locations. Carpenters, gold-leaf gilders, stone-masons. " }]
	}],
	reseaux_p3: [{
		"type": "paragraph",
		"children": [{ "text": "Des collaborations croisées avec architectes et designers pour des projets qui mêlent structure, espace et objet. Une discrétion absolue pour accompagner les projets les plus sensibles." }]
	}],
	reseaux_p4: [{
		"type": "paragraph",
		"children": [{ "text": " " }]
	}],
	manifeste_images: [],
	reseaux_images: []
};
//#endregion
//#region src/pages/agence.astro
var agence_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Agence,
	file: () => $$file,
	url: () => $$url
});
var $$Agence = createComponent(($$result, $$props, $$slots) => {
	const bandeauAgence = agence_default.bandeau_image ? `/images/${agence_default.bandeau_image}` : "/images/projet1.jpg";
	const bandeauLabel = agence_default.bandeau_label || "L'Agence";
	const bandeauTitre = agence_default.bandeau_titre || "Atipics";
	const intro = agence_default.intro || "Ressourcerie éclectique et polyvalente — dix ans de savoir-faire au service de projets singuliers, pour particuliers, collectionneurs et professionnels.";
	const agenceImages = {
		manifeste: agence_default.manifeste_images || [],
		reseaux: agence_default.reseaux_images || []
	};
	const sections = [{
		slug: "manifeste",
		label: agence_default.manifeste_label || "MANIFESTE",
		titre: agence_default.manifeste_titre || "Une agence hors des sentiers battus",
		paragraphes: [
			agence_default.manifeste_p1 || "Atipics est née d'une conviction : chaque espace, chaque objet, chaque projet mérite une attention singulière. Nous cultivons l'art de la trouvaille, du détail inattendu, du savoir-faire transmis.",
			agence_default.manifeste_p2 || "Curateurs, logisticiens, scénographes — nous sommes avant tout des passionnés animés par la conviction que les objets ont une histoire, et que cette histoire mérite d'être racontée.",
			agence_default.manifeste_p3 || "Notre ancrage au Village Atipics, véritable hub de créativité et de compétences, nous permet d'offrir un écosystème complet, du sourcing à la mise en valeur finale."
		].filter(Boolean),
		reverse: false,
		fallbackImg: "/images/projet2.webp"
	}, {
		slug: "reseaux",
		label: agence_default.reseaux_label || "RÉSEAUX",
		titre: agence_default.reseaux_titre || "Un réseau d'exception",
		paragraphes: [
			agence_default.reseaux_p1 || "Artisans, antiquaires, architectes, artistes — notre carnet d'adresses est le fruit de dix années de rencontres et de confiance mutuelle. Un réseau humain, construit sur la durée.",
			agence_default.reseaux_p2 || "Ébénistes, tapissiers, ferronniers, doreurs — des mains expertes qui perpétuent les savoir-faire. Un accès privilégié aux meilleures sources, en France et à l'international.",
			agence_default.reseaux_p3 || "Des collaborations croisées avec architectes et designers pour des projets qui mêlent structure, espace et objet. Une discrétion absolue pour accompagner les projets les plus sensibles.",
			agence_default.reseaux_p4 || `Pour toute demande, contactez-nous à <a href="mailto:${parametres_default.email}" class="text-link">${parametres_default.email}</a>.`
		].filter(Boolean),
		reverse: true,
		fallbackImg: "/images/projet3.jpg"
	}];
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {
		"title": `Agence Atipics — ${parametres_default.nom_site}`,
		"description": "Manifeste et réseaux de l'Agence Atipics",
		"data-astro-cid-lzj5ban7": true
	}, { "default": ($$result) => renderTemplate`${renderComponent($$result, "Header", $$Header, { "data-astro-cid-lzj5ban7": true })}${maybeRenderHead($$result)}<main style="padding-top: var(--nav-h);" data-astro-cid-lzj5ban7><!-- Bandeau pleine largeur --><section class="bandeau" data-astro-cid-lzj5ban7><img${addAttribute(bandeauAgence, "src")} alt="Atipics" class="bandeau__img" data-astro-cid-lzj5ban7><div class="bandeau__overlay" data-astro-cid-lzj5ban7><div class="container bandeau__text" data-astro-cid-lzj5ban7><p class="bandeau__label" data-astro-cid-lzj5ban7>${bandeauLabel}</p><h1 class="bandeau__title" data-astro-cid-lzj5ban7>${bandeauTitre}</h1></div></div></section><!-- Intro --><section class="intro-section" data-astro-cid-lzj5ban7><div class="container" data-astro-cid-lzj5ban7>${renderComponent($$result, "RichText", RichText, {
		"document": intro,
		"className": "intro-desc",
		"data-astro-cid-lzj5ban7": true
	})}</div></section><!-- Sections dynamiques -->${sections.map((s) => {
		const imgs = agenceImages[s.slug] ?? [];
		const paragraphes = s.paragraphes;
		return renderTemplate`<section${addAttribute(["split-block", { "split-block--alt": s.reverse }], "class:list")}${addAttribute(s.slug, "id")} data-astro-cid-lzj5ban7><div class="container" data-astro-cid-lzj5ban7><div class="label-row" data-astro-cid-lzj5ban7><span class="stamp" data-astro-cid-lzj5ban7>${s.label}</span><div class="rule" data-astro-cid-lzj5ban7></div></div><div${addAttribute(["split-grid", { "split-grid--reverse": s.reverse }], "class:list")} data-astro-cid-lzj5ban7>${s.reverse && renderTemplate`<div class="split-img-col" data-astro-cid-lzj5ban7>${imgs.length > 0 ? renderTemplate`<div class="acarousel" data-acarousel data-astro-cid-lzj5ban7><div class="acarousel__track" data-astro-cid-lzj5ban7>${imgs.map((src, j) => renderTemplate`<div${addAttribute(["acarousel__slide", { "is-active": j === 0 }], "class:list")}${addAttribute(j !== 0, "aria-hidden")} data-astro-cid-lzj5ban7><img${addAttribute(src, "src")}${addAttribute(`${s.label} ${j + 1}`, "alt")} class="split-img" loading="lazy" data-astro-cid-lzj5ban7></div>`)}</div>${imgs.length > 1 && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`<button class="acarousel__btn acarousel__btn--prev" aria-label="Précédent" data-astro-cid-lzj5ban7><svg width="16" height="16" viewBox="0 0 24 24" fill="none" data-astro-cid-lzj5ban7><path d="M15 18l-6-6 6-6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-lzj5ban7></path></svg></button><button class="acarousel__btn acarousel__btn--next" aria-label="Suivant" data-astro-cid-lzj5ban7><svg width="16" height="16" viewBox="0 0 24 24" fill="none" data-astro-cid-lzj5ban7><path d="M9 18l6-6-6-6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-lzj5ban7></path></svg></button><div class="acarousel__counter" data-acounter data-astro-cid-lzj5ban7></div>` })}`}</div>` : renderTemplate`<img src="/images/projet3.jpg"${addAttribute(s.titre, "alt")} class="split-img" loading="lazy" data-astro-cid-lzj5ban7>`}</div>`}<div class="split-text" data-astro-cid-lzj5ban7><h2 class="split-title" data-astro-cid-lzj5ban7>${unescapeHTML(s.titre)}</h2>${paragraphes.map((p) => renderTemplate`${renderComponent($$result, "RichText", RichText, {
			"document": p,
			"className": "split-p",
			"data-astro-cid-lzj5ban7": true
		})}`)}</div>${!s.reverse && renderTemplate`<div class="split-img-col" data-astro-cid-lzj5ban7>${imgs.length > 0 ? renderTemplate`<div class="acarousel" data-acarousel data-astro-cid-lzj5ban7><div class="acarousel__track" data-astro-cid-lzj5ban7>${imgs.map((src, j) => renderTemplate`<div${addAttribute(["acarousel__slide", { "is-active": j === 0 }], "class:list")}${addAttribute(j !== 0, "aria-hidden")} data-astro-cid-lzj5ban7><img${addAttribute(src, "src")}${addAttribute(`${s.label} ${j + 1}`, "alt")} class="split-img" loading="lazy" data-astro-cid-lzj5ban7></div>`)}</div>${imgs.length > 1 && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`<button class="acarousel__btn acarousel__btn--prev" aria-label="Précédent" data-astro-cid-lzj5ban7><svg width="16" height="16" viewBox="0 0 24 24" fill="none" data-astro-cid-lzj5ban7><path d="M15 18l-6-6 6-6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-lzj5ban7></path></svg></button><button class="acarousel__btn acarousel__btn--next" aria-label="Suivant" data-astro-cid-lzj5ban7><svg width="16" height="16" viewBox="0 0 24 24" fill="none" data-astro-cid-lzj5ban7><path d="M9 18l6-6-6-6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-lzj5ban7></path></svg></button><div class="acarousel__counter" data-acounter data-astro-cid-lzj5ban7></div>` })}`}</div>` : renderTemplate`<img src="/images/projet2.webp"${addAttribute(s.titre, "alt")} class="split-img" loading="lazy" data-astro-cid-lzj5ban7>`}</div>`}</div></div></section>`;
	})}</main>${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-lzj5ban7": true })}` })}${renderScript($$result, "C:/Users/ninad/Desktop/atipics/src/pages/agence.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/ninad/Desktop/atipics/src/pages/agence.astro", void 0);
var $$file = "C:/Users/ninad/Desktop/atipics/src/pages/agence.astro";
var $$url = "/agence";
//#endregion
//#region \0virtual:astro:page:src/pages/agence@_@astro
var page = () => agence_exports;
//#endregion
export { page };
