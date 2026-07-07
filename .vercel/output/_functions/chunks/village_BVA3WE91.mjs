import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { E as createComponent, _ as maybeRenderHead, o as renderComponent, p as renderTemplate, r as renderScript, s as Fragment, y as addAttribute } from "./server_Chz1CeXz.mjs";
import "./compiler_onR2zt3j.mjs";
import { i as parametres_default, n as $$Header, r as $$Layout, t as $$Footer } from "./Footer_CFEuF_u5.mjs";
import { t as RichText } from "./RichText_G_rJ0ThB.mjs";
var village_default = {
	bandeau_image: "directus/village-bandeau-d8b6ecec-a0f3-40d6-b532-131d15068219.jpg",
	bandeau_label: "",
	bandeau_titre: "Village Atipics",
	intro: [{
		"type": "paragraph",
		"children": [{ "text": "Un écosystème complet réunissant sous un même toit tous les outils et les expertises nécessaires à vos projets les plus ambitieux — entrepôt, studio de création et atelier de restauration." }]
	}],
	entrepot_label: "ATIPICS ENTREPÔT",
	entrepot_titre: "L'Entrepôt",
	entrepot_p1: [{
		"type": "paragraph",
		"children": [{ "text": "Vaste espace de stockage, de tri et de curation, l'Entrepôt est le point de départ de toutes nos histoires. C'est ici que les pièces arrivent, sont répertoriées, nettoyées et préparées avant de prendre leur place dans un projet." }]
	}],
	entrepot_p2: [{
		"type": "paragraph",
		"children": [{ "text": "Plus de 800 m² dédiés à la réception, au conditionnement et à la conservation d'un inventaire toujours renouvelé. Chaque centimètre carré est pensé pour le mouvement et la praticité." }]
	}],
	entrepot_p3: [{
		"type": "paragraph",
		"children": [{ "text": "L'accès est possible sur rendez-vous pour les clients et partenaires souhaitant découvrir les pièces disponibles directement en entrepôt." }]
	}],
	studiodesign_label: "STUDIO ATIPICS ",
	studiodesign_titre: "Studio Design",
	studiodesign_p1: [{
		"type": "paragraph",
		"children": [{ "text": "Les objets ont une mémoire.\nUn meuble marqué par le temps, une matière brute travaillée par des mains expertes, une pièce que l'histoire a traversée — chacun porte en lui quelque chose d'irremplaçable. Notre travail est de le reconnaître, de le préserver, et de lui trouver la place qu'il mérite." }]
	}],
	studiodesign_p2: [{
		"type": "paragraph",
		"children": [{ "text": "Nous sourçons, restaurons et transformons des pièces d'exception pour des collections privées, des intérieurs exigeants et des projets qui refusent l'ordinaire. Chaque collaboration est conduite avec les artisans, les artistes et les experts qui maintiennent vivant le savoir-faire français. Elle est portée, de bout en bout, par un accompagnement qui ne lâche pas l'objet — de sa découverte jusqu'à sa juste place dans le monde, qu'il s'agisse d'une collection, d'un intérieur ou d'un moment.\n" }]
	}],
	studiodesign_p3: [{
		"type": "paragraph",
		"children": [{ "text": "C'est cela, notre supplément d'âme — non pas l'objet seul, mais ce qu'il devient entre de bonnes mains." }]
	}],
	atelier_label: "ATELIERS ATIPICS",
	atelier_titre: "Les Ateliers",
	atelier_p1: [{
		"type": "paragraph",
		"children": [{ "text": "Les ateliers Atipics sont le sanctuaire des savoir-faire manuels. Menuiserie, tapisserie, dorure, restauration — c'est ici que nos artisans partenaires interviennent pour redonner vie aux pièces qui ont besoin d'attention.\n\n" }]
	}],
	atelier_p2: [{
		"type": "paragraph",
		"children": [{ "text": "Équipé de machines-outils professionnelles et organisé pour accueillir des artisans spécialisés en résidence, l'Atelier est le maillon essentiel entre la trouvaille brute et la pièce aboutie." }]
	}],
	atelier_p3: [{
		"type": "paragraph",
		"children": [{ "text": "" }]
	}],
	form_intro: [{
		"type": "paragraph",
		"children": [{ "text": "" }]
	}],
	entrepot_images: [],
	studiodesign_images: [],
	atelier_images: []
};
//#endregion
//#region src/pages/village.astro
var village_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Village,
	file: () => $$file,
	url: () => $$url
});
var $$Village = createComponent(($$result, $$props, $$slots) => {
	const bandeauVillage = village_default.bandeau_image ? `/images/${village_default.bandeau_image}` : "/images/droneImageBandeau.jpg";
	const bandeauLabel = village_default.bandeau_label || "Le Village";
	const bandeauTitre = village_default.bandeau_titre || "Village Atipics";
	const intro = village_default.intro || "Un écosystème complet réunissant sous un même toit tous les outils et les expertises nécessaires à vos projets les plus ambitieux — entrepôt, studio de création et atelier de restauration.";
	const formIntro = village_default.form_intro || "Vous souhaitez visiter le Village, collaborer avec nous ou en savoir plus sur nos espaces ? Remplissez le formulaire ci-dessous, nous reviendrons vers vous rapidement.";
	const villageImages = {
		entrepot: village_default.entrepot_images || [],
		studiodesign: village_default.studiodesign_images || [],
		atelier: village_default.atelier_images || []
	};
	const espaces = [
		{
			slug: "entrepot",
			label: village_default.entrepot_label || "ENTREPÔT",
			title: village_default.entrepot_titre || "L'Entrepôt",
			fallbackImg: "/images/projet1.jpg",
			paragraphs: [
				village_default.entrepot_p1 || "Vaste espace de stockage, de tri et de curation, l'Entrepôt est le point de départ de toutes nos histoires. C'est ici que les pièces arrivent, sont répertoriées, nettoyées et préparées avant de prendre leur place dans un projet.",
				village_default.entrepot_p2 || "Plus de 800 m² dédiés à la réception, au conditionnement et à la conservation d'un inventaire toujours renouvelé. Chaque centimètre carré est pensé pour le mouvement et la praticité.",
				village_default.entrepot_p3 || "L'accès est possible sur rendez-vous pour les clients et partenaires souhaitant découvrir les pièces disponibles directement en entrepôt."
			],
			reverse: false
		},
		{
			slug: "studiodesign",
			label: village_default.studiodesign_label || "STUDIO DESIGN",
			title: village_default.studiodesign_titre || "Studio Design",
			fallbackImg: "/images/projet2.webp",
			paragraphs: [
				village_default.studiodesign_p1 || "Le Studio Design est notre laboratoire créatif. C'est ici que nous concevons les scénographies, testons les associations de pièces et imaginons les compositions qui seront déployées sur vos espaces.",
				village_default.studiodesign_p2 || "Lumière naturelle zénithale, fonds neutres modulables, zone de photographie professionnelle — le Studio est conçu pour mettre en valeur chaque pièce dans les meilleures conditions.",
				village_default.studiodesign_p3 || "Le Studio accueille également des sessions de travail collaboratif avec architectes et décorateurs, dans un cadre propice à la réflexion créative."
			],
			reverse: true
		},
		{
			slug: "atelier",
			label: village_default.atelier_label || "ATELIER",
			title: village_default.atelier_titre || "L'Atelier",
			fallbackImg: "/images/projet3.jpg",
			paragraphs: [
				village_default.atelier_p1 || "L'Atelier est le sanctuaire des savoir-faire manuels. Menuiserie, tapisserie, dorure, restauration — c'est ici que nos artisans partenaires interviennent pour redonner vie aux pièces qui ont besoin d'attention.",
				village_default.atelier_p2 || "Équipé de machines-outils professionnelles et organisé pour accueillir des artisans spécialisés en résidence, l'Atelier est le maillon essentiel entre la trouvaille brute et la pièce aboutie.",
				village_default.atelier_p3 || "Nous travaillons avec un réseau d'artisans sélectionnés pour leur excellence technique et leur respect des matériaux d'origine."
			],
			reverse: false
		}
	];
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {
		"title": `Village Atipics — ${parametres_default.nom_site}`,
		"description": "L'Entrepôt, le Studio Design et l'Atelier du Village Atipics",
		"data-astro-cid-iwjtt7g3": true
	}, { "default": ($$result) => renderTemplate`${renderComponent($$result, "Header", $$Header, { "data-astro-cid-iwjtt7g3": true })}${maybeRenderHead($$result)}<main style="padding-top: var(--nav-h);" data-astro-cid-iwjtt7g3><!-- Bandeau drone --><section class="bandeau" data-astro-cid-iwjtt7g3><img${addAttribute(bandeauVillage, "src")} alt="Vue aérienne du Village Atipics" class="bandeau__img" data-astro-cid-iwjtt7g3><div class="bandeau__overlay" data-astro-cid-iwjtt7g3><div class="container bandeau__text" data-astro-cid-iwjtt7g3><p class="bandeau__label" data-astro-cid-iwjtt7g3>${bandeauLabel}</p><h1 class="bandeau__title" data-astro-cid-iwjtt7g3>${bandeauTitre}</h1></div></div></section><!-- Intro --><section class="intro-section" data-astro-cid-iwjtt7g3><div class="container" data-astro-cid-iwjtt7g3>${renderComponent($$result, "RichText", RichText, {
		"document": intro,
		"className": "intro-desc",
		"data-astro-cid-iwjtt7g3": true
	})}</div></section><!-- Espaces — alternance photo/texte -->${espaces.map((e) => renderTemplate`<section class="espace"${addAttribute(e.slug, "id")} data-astro-cid-iwjtt7g3><div class="container" data-astro-cid-iwjtt7g3><div class="espace__label-row" data-astro-cid-iwjtt7g3><span class="espace__section-label" data-astro-cid-iwjtt7g3>${e.label}</span><div class="espace__rule" data-astro-cid-iwjtt7g3></div></div><div${addAttribute(["espace__grid", { "espace__grid--reverse": e.reverse }], "class:list")} data-astro-cid-iwjtt7g3><div class="espace__img-col" data-astro-cid-iwjtt7g3>${(villageImages[e.slug]?.length > 0 ? villageImages[e.slug] : null) ? renderTemplate`<div class="vcarousel" data-vcarousel data-astro-cid-iwjtt7g3><div class="vcarousel__track" data-vtrack data-astro-cid-iwjtt7g3>${villageImages[e.slug].map((src, j) => renderTemplate`<div${addAttribute(["vcarousel__slide", { "is-active": j === 0 }], "class:list")}${addAttribute(j !== 0, "aria-hidden")} data-astro-cid-iwjtt7g3><img${addAttribute(src, "src")}${addAttribute(`${e.title} ${j + 1}`, "alt")} class="espace__img" loading="lazy" data-astro-cid-iwjtt7g3></div>`)}</div>${villageImages[e.slug].length > 1 && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`<button class="vcarousel__btn vcarousel__btn--prev" aria-label="Précédent" data-astro-cid-iwjtt7g3><svg width="16" height="16" viewBox="0 0 24 24" fill="none" data-astro-cid-iwjtt7g3><path d="M15 18l-6-6 6-6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-iwjtt7g3></path></svg></button><button class="vcarousel__btn vcarousel__btn--next" aria-label="Suivant" data-astro-cid-iwjtt7g3><svg width="16" height="16" viewBox="0 0 24 24" fill="none" data-astro-cid-iwjtt7g3><path d="M9 18l6-6-6-6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-iwjtt7g3></path></svg></button><div class="vcarousel__counter" data-vcounter data-astro-cid-iwjtt7g3></div>` })}`}</div>` : renderTemplate`<img${addAttribute(e.fallbackImg, "src")}${addAttribute(e.title, "alt")} class="espace__img" loading="lazy" data-astro-cid-iwjtt7g3>`}</div><div class="espace__text-col" data-astro-cid-iwjtt7g3><h2 class="espace__title" data-astro-cid-iwjtt7g3>${e.title}</h2>${e.paragraphs.map((p) => renderTemplate`${renderComponent($$result, "RichText", RichText, {
		"document": p,
		"className": "espace__p",
		"data-astro-cid-iwjtt7g3": true
	})}`)}</div></div></div></section>`)}<!-- Formulaire de contact --><section class="form-section" id="contact-village" data-astro-cid-iwjtt7g3><div class="container" data-astro-cid-iwjtt7g3><div class="form-label-row" data-astro-cid-iwjtt7g3><span class="espace__section-label" data-astro-cid-iwjtt7g3>CONTACT</span><div class="espace__rule" data-astro-cid-iwjtt7g3></div></div><div class="form-layout" data-astro-cid-iwjtt7g3><div class="form-intro" data-astro-cid-iwjtt7g3>${renderComponent($$result, "RichText", RichText, {
		"document": formIntro,
		"className": "form-intro__text",
		"data-astro-cid-iwjtt7g3": true
	})}<p class="form-intro__text" data-astro-cid-iwjtt7g3>Pour toute question urgente, vous pouvez nous écrire directement à <a${addAttribute(`mailto:${parametres_default.email}`, "href")} class="form-intro__link" data-astro-cid-iwjtt7g3>${parametres_default.email}</a>.</p></div><form class="vform" name="village-contact" method="POST" data-astro-cid-iwjtt7g3><div class="vform__row" data-astro-cid-iwjtt7g3><div class="vform__group" data-astro-cid-iwjtt7g3><label class="vform__label" for="vc-nom" data-astro-cid-iwjtt7g3>NOM</label><input class="vform__input" type="text" id="vc-nom" name="nom" required autocomplete="name" data-astro-cid-iwjtt7g3></div><div class="vform__group" data-astro-cid-iwjtt7g3><label class="vform__label" for="vc-societe" data-astro-cid-iwjtt7g3>SOCIÉTÉ</label><input class="vform__input" type="text" id="vc-societe" name="societe" autocomplete="organization" data-astro-cid-iwjtt7g3></div></div><div class="vform__row" data-astro-cid-iwjtt7g3><div class="vform__group" data-astro-cid-iwjtt7g3><label class="vform__label" for="vc-email" data-astro-cid-iwjtt7g3>EMAIL</label><input class="vform__input" type="email" id="vc-email" name="email" required autocomplete="email" data-astro-cid-iwjtt7g3></div><div class="vform__group" data-astro-cid-iwjtt7g3><label class="vform__label" for="vc-tel" data-astro-cid-iwjtt7g3>TÉLÉPHONE</label><input class="vform__input" type="tel" id="vc-tel" name="telephone" autocomplete="tel" data-astro-cid-iwjtt7g3></div></div><div class="vform__group" data-astro-cid-iwjtt7g3><label class="vform__label" for="vc-projet" data-astro-cid-iwjtt7g3>PROJET</label><input class="vform__input" type="text" id="vc-projet" name="projet" data-astro-cid-iwjtt7g3></div><div class="vform__group" data-astro-cid-iwjtt7g3><label class="vform__label" for="vc-message" data-astro-cid-iwjtt7g3>MESSAGE</label><textarea class="vform__input vform__textarea" id="vc-message" name="message" rows="5" required data-astro-cid-iwjtt7g3></textarea></div><label class="vform__check" data-astro-cid-iwjtt7g3><input class="vform__check-input" type="checkbox" name="newsletter" data-astro-cid-iwjtt7g3><span class="vform__check-box" aria-hidden="true" data-astro-cid-iwjtt7g3></span><span class="vform__check-label" data-astro-cid-iwjtt7g3>J'accepte de recevoir la newsletter Atipics</span></label><button type="submit" class="vform__submit" data-astro-cid-iwjtt7g3>ENVOYER <span class="vform__arrow" aria-hidden="true" data-astro-cid-iwjtt7g3>→</span></button></form></div></div></section></main>${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-iwjtt7g3": true })}` })}${renderScript($$result, "C:/Users/ninad/Desktop/atipics/src/pages/village.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/ninad/Desktop/atipics/src/pages/village.astro", void 0);
var $$file = "C:/Users/ninad/Desktop/atipics/src/pages/village.astro";
var $$url = "/village";
//#endregion
//#region \0virtual:astro:page:src/pages/village@_@astro
var page = () => village_exports;
//#endregion
export { page };
