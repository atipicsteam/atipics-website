import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { E as createComponent, _ as maybeRenderHead, o as renderComponent, p as renderTemplate, r as renderScript, y as addAttribute } from "./server_Chz1CeXz.mjs";
import "./compiler_onR2zt3j.mjs";
import { i as parametres_default, n as $$Header, r as $$Layout, t as $$Footer } from "./Footer_CFEuF_u5.mjs";
import { t as RichText } from "./RichText_G_rJ0ThB.mjs";
var savoir_faire_default = {
	page_label: "EXPERTISES",
	page_titre: "Savoir Faire",
	page_sous_titre: "Plusieurs domaines d'expertise complémentaires, un fil conducteur :\nl'exigence et la passion du travail bien fait.",
	curation_label: "CURATION ET SOURCING",
	curation_titre: "",
	curation_intro: [{
		"type": "paragraph",
		"children": [{ "text": "L'art de trouver ce qui n'existe pas encore sur le marché." }]
	}],
	curation_p1: [{
		"type": "paragraph",
		"children": [{ "text": "L'art de trouver ce qui n'existe pas encore sur le marché.\n\nNotre mission de curation va bien au-delà de la simple sélection. Nous fouillons marchés, ventes aux enchères, ateliers d'artisans et collections privées pour dénicher les pièces qui feront la différence dans votre projet." }]
	}],
	curation_p2: [{
		"type": "paragraph",
		"children": [{ "text": "Mobilier ancien et contemporain, objets de curiosité, textiles rares, œuvres d'art — notre regard transversal nous permet d'assembler des univers cohérents et singuliers, porteurs d'une identité forte." }]
	}],
	conciergerie_label: "",
	conciergerie_titre: "Conciergerie et Propriété",
	conciergerie_intro: [{
		"type": "paragraph",
		"children": [{ "text": "Un interlocuteur unique pour la gestion complète de votre patrimoine." }]
	}],
	conciergerie_p1: [{
		"type": "paragraph",
		"children": [{ "text": "Nous prenons en charge la gestion de vos espaces et de vos biens avec la même exigence que si c'était les nôtres. De l'entretien courant à la coordination de travaux, nous orchestrons chaque détail." }]
	}],
	conciergerie_p2: [{
		"type": "paragraph",
		"children": [{ "text": "Disponibles, réactifs et discrets, nous sommes votre relais de confiance sur place, garantissant que votre propriété est toujours dans un état impeccable." }]
	}],
	events_label: "",
	events_titre: "Events et Scénographie",
	events_intro: [{
		"type": "paragraph",
		"children": [{ "text": "Transformer un espace en expérience mémorable." }]
	}],
	events_p1: [{
		"type": "paragraph",
		"children": [{ "text": "Chaque événement est une opportunité de raconter une histoire. Nous concevons des scénographies qui mêlent mobilier, lumière, matière et narration pour créer des atmosphères inoubliables." }]
	}],
	events_p2: [{
		"type": "paragraph",
		"children": [{ "text": "Soirées privées, lancements de marque, expositions, salons — notre équipe maîtrise toutes les échelles et tous les types de configurations, des plus intimes aux plus spectaculaires." }]
	}],
	intendance_label: "",
	intendance_titre: "Intendance et Logistique",
	intendance_intro: [{
		"type": "paragraph",
		"children": [{ "text": "Les coulisses parfaites pour que l'essentiel brille." }]
	}],
	intendance_p1: [{
		"type": "paragraph",
		"children": [{ "text": "La logistique est souvent le parent pauvre des projets ambitieux. Chez Atipics, nous en avons fait une spécialité. Transport, emballage, stockage, installation — nous gérons l'invisible pour que le visible soit irréprochable." }]
	}],
	intendance_p2: [{
		"type": "paragraph",
		"children": [{ "text": "Notre réseau de transporteurs spécialisés, d'emballeurs experts et de techniciens d'installation garantit que chaque pièce arrive à destination dans les conditions idéales." }]
	}],
	valorisation_label: "",
	valorisation_titre: "Valorisation de Collections",
	valorisation_intro: [{
		"type": "paragraph",
		"children": [{ "text": "Révéler le potentiel de ce que vous possédez déjà." }]
	}],
	valorisation_p1: [{
		"type": "paragraph",
		"children": [{ "text": "Vous possédez une collection, un héritage, un ensemble de pièces dont vous ne savez que faire ? Nous intervenons pour inventorier, expertiser, documenter et valoriser ce patrimoine." }]
	}],
	valorisation_p2: [{
		"type": "paragraph",
		"children": [{ "text": "Qu'il s'agisse de le mettre en scène dans votre intérieur, de le proposer à la vente dans les meilleures conditions ou de le transmettre, nous vous accompagnons à chaque étape avec rigueur et passion." }]
	}],
	form_titre: "aze",
	form_intro_1: [{
		"type": "paragraph",
		"children": [{ "text": "aze" }]
	}],
	form_intro_2: [{
		"type": "paragraph",
		"children": [{ "text": "aze" }]
	}],
	curation_images: [],
	conciergerie_images: [],
	events_images: [],
	intendance_images: [],
	valorisation_images: []
};
//#endregion
//#region src/pages/savoir-faire.astro
var savoir_faire_exports = /* @__PURE__ */ __exportAll({
	default: () => $$SavoirFaire,
	file: () => $$file,
	url: () => $$url
});
var $$SavoirFaire = createComponent(($$result, $$props, $$slots) => {
	const imagesBySection = {
		curation: savoir_faire_default.curation_images || [],
		conciergerie: savoir_faire_default.conciergerie_images || [],
		events: savoir_faire_default.events_images || [],
		intendance: savoir_faire_default.intendance_images || [],
		valorisation: savoir_faire_default.valorisation_images || []
	};
	const pageLabel = savoir_faire_default.page_label || "EXPERTISES";
	const pageTitre = savoir_faire_default.page_titre || "Savoir Faire";
	const pageSousTitre = savoir_faire_default.page_sous_titre || "Cinq domaines d'expertise complémentaires, un fil conducteur : l'exigence et la passion du travail bien fait.";
	const formTitre = savoir_faire_default.form_titre || "Parlons de votre projet";
	const formIntro1 = savoir_faire_default.form_intro_1 || "Vous avez un besoin précis — sourcing, scénographie, logistique, valorisation de collection ? Décrivez-nous votre mission et nous reviendrons vers vous avec une proposition adaptée.";
	const formIntro2 = savoir_faire_default.form_intro_2 || "Ce formulaire est dédié aux demandes de <strong>prestation et de collaboration</strong>. Pour une visite du Village ou une question générale, utilisez le formulaire de contact.";
	const expertises = [
		{
			id: "curation",
			label: savoir_faire_default.curation_label || "CURATION ET SOURCING",
			title: savoir_faire_default.curation_titre || "Curation et Sourcing",
			intro: savoir_faire_default.curation_intro || "L'art de trouver ce qui n'existe pas encore sur le marché.",
			body: [savoir_faire_default.curation_p1 || "Notre mission de curation va bien au-delà de la simple sélection. Nous fouillons marchés, ventes aux enchères, ateliers d'artisans et collections privées pour dénicher les pièces qui feront la différence dans votre projet.", savoir_faire_default.curation_p2 || "Mobilier ancien et contemporain, objets de curiosité, textiles rares, œuvres d'art — notre regard transversal nous permet d'assembler des univers cohérents et singuliers, porteurs d'une identité forte."],
			fallbackImages: [
				"/images/projet1.jpg",
				"/images/projet2.webp",
				"/images/projet3.jpg"
			]
		},
		{
			id: "conciergerie",
			label: savoir_faire_default.conciergerie_label || "CONCIERGERIE ET PROPRIÉTÉ",
			title: savoir_faire_default.conciergerie_titre || "Conciergerie et Propriété",
			intro: savoir_faire_default.conciergerie_intro || "Un interlocuteur unique pour la gestion complète de votre patrimoine.",
			body: [savoir_faire_default.conciergerie_p1 || "Nous prenons en charge la gestion de vos espaces et de vos biens avec la même exigence que si c'était les nôtres. De l'entretien courant à la coordination de travaux, nous orchestrons chaque détail.", savoir_faire_default.conciergerie_p2 || "Disponibles, réactifs et discrets, nous sommes votre relais de confiance sur place, garantissant que votre propriété est toujours dans un état impeccable."],
			fallbackImages: [
				"/images/projet2.webp",
				"/images/projet3.jpg",
				"/images/projet4.webp"
			]
		},
		{
			id: "events",
			label: savoir_faire_default.events_label || "EVENTS ET SCÉNOGRAPHIE",
			title: savoir_faire_default.events_titre || "Events et Scénographie",
			intro: savoir_faire_default.events_intro || "Transformer un espace en expérience mémorable.",
			body: [savoir_faire_default.events_p1 || "Chaque événement est une opportunité de raconter une histoire. Nous concevons des scénographies qui mêlent mobilier, lumière, matière et narration pour créer des atmosphères inoubliables.", savoir_faire_default.events_p2 || "Soirées privées, lancements de marque, expositions, salons — notre équipe maîtrise toutes les échelles et tous les types de configurations, des plus intimes aux plus spectaculaires."],
			fallbackImages: [
				"/images/projet3.jpg",
				"/images/projet4.webp",
				"/images/projet1.jpg"
			]
		},
		{
			id: "intendance",
			label: savoir_faire_default.intendance_label || "INTENDANCE ET LOGISTIQUE",
			title: savoir_faire_default.intendance_titre || "Intendance et Logistique",
			intro: savoir_faire_default.intendance_intro || "Les coulisses parfaites pour que l'essentiel brille.",
			body: [savoir_faire_default.intendance_p1 || "La logistique est souvent le parent pauvre des projets ambitieux. Chez Atipics, nous en avons fait une spécialité. Transport, emballage, stockage, installation — nous gérons l'invisible pour que le visible soit irréprochable.", savoir_faire_default.intendance_p2 || "Notre réseau de transporteurs spécialisés, d'emballeurs experts et de techniciens d'installation garantit que chaque pièce arrive à destination dans les conditions idéales."],
			fallbackImages: [
				"/images/projet4.webp",
				"/images/projet1.jpg",
				"/images/projet2.webp"
			]
		},
		{
			id: "valorisation",
			label: savoir_faire_default.valorisation_label || "VALORISATION DE COLLECTIONS",
			title: savoir_faire_default.valorisation_titre || "Valorisation de Collections",
			intro: savoir_faire_default.valorisation_intro || "Révéler le potentiel de ce que vous possédez déjà.",
			body: [savoir_faire_default.valorisation_p1 || "Vous possédez une collection, un héritage, un ensemble de pièces dont vous ne savez que faire ? Nous intervenons pour inventorier, expertiser, documenter et valoriser ce patrimoine.", savoir_faire_default.valorisation_p2 || "Qu'il s'agisse de le mettre en scène dans votre intérieur, de le proposer à la vente dans les meilleures conditions ou de le transmettre, nous vous accompagnons à chaque étape avec rigueur et passion."],
			fallbackImages: [
				"/images/projet1.jpg",
				"/images/projet3.jpg",
				"/images/projet2.webp"
			]
		}
	];
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {
		"title": `Savoir Faire — ${parametres_default.nom_site}`,
		"description": "Les expertises de l'Agence Atipics",
		"data-astro-cid-uemfal7i": true
	}, { "default": ($$result) => renderTemplate`${renderComponent($$result, "Header", $$Header, { "data-astro-cid-uemfal7i": true })}${maybeRenderHead($$result)}<main style="padding-top: var(--nav-h);" data-astro-cid-uemfal7i><!-- Header page --><section class="page-head" data-astro-cid-uemfal7i><div class="container" data-astro-cid-uemfal7i><div class="label-row" data-astro-cid-uemfal7i><span class="section-stamp" data-astro-cid-uemfal7i>${pageLabel}</span><div class="rule" data-astro-cid-uemfal7i></div></div><h1 class="page-head__title" data-astro-cid-uemfal7i>${pageTitre}</h1><p class="page-head__sub" data-astro-cid-uemfal7i>${pageSousTitre}</p></div></section><!-- Expertises -->${expertises.map((e, i) => renderTemplate`<section${addAttribute(["expertise-block", { "expertise-block--alt": i % 2 !== 0 }], "class:list")}${addAttribute(e.id, "id")} data-astro-cid-uemfal7i><div class="container" data-astro-cid-uemfal7i><div class="label-row" data-astro-cid-uemfal7i><span class="section-stamp" data-astro-cid-uemfal7i>${e.label}</span><div class="rule" data-astro-cid-uemfal7i></div></div><div class="expertise-grid" data-astro-cid-uemfal7i><div class="expertise-text" data-astro-cid-uemfal7i><h2 class="expertise-title" data-astro-cid-uemfal7i>${e.title}</h2>${renderComponent($$result, "RichText", RichText, {
		"document": e.intro,
		"className": "expertise-intro",
		"data-astro-cid-uemfal7i": true
	})}${e.body.map((p) => renderTemplate`${renderComponent($$result, "RichText", RichText, {
		"document": p,
		"className": "expertise-p",
		"data-astro-cid-uemfal7i": true
	})}`)}</div><div class="expertise-carousel" data-carousel data-astro-cid-uemfal7i><div class="ecarousel__track" data-track data-astro-cid-uemfal7i>${(imagesBySection[e.id]?.length > 0 ? imagesBySection[e.id] : e.fallbackImages).map((img, j) => renderTemplate`<div class="ecarousel__slide"${addAttribute(j !== 0, "aria-hidden")} data-astro-cid-uemfal7i><img${addAttribute(img, "src")}${addAttribute(`${e.title} ${j + 1}`, "alt")} class="ecarousel__img" loading="lazy" data-astro-cid-uemfal7i></div>`)}</div><button class="ecarousel__btn ecarousel__btn--prev" aria-label="Précédent" data-astro-cid-uemfal7i><svg width="18" height="18" viewBox="0 0 24 24" fill="none" data-astro-cid-uemfal7i><path d="M15 18l-6-6 6-6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-uemfal7i></path></svg></button><button class="ecarousel__btn ecarousel__btn--next" aria-label="Suivant" data-astro-cid-uemfal7i><svg width="18" height="18" viewBox="0 0 24 24" fill="none" data-astro-cid-uemfal7i><path d="M9 18l6-6-6-6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-uemfal7i></path></svg></button><div class="ecarousel__counter" data-counter data-astro-cid-uemfal7i></div></div></div></div></section>`)}<!-- Formulaire expertise / mission --><section class="form-section" data-astro-cid-uemfal7i><div class="container" data-astro-cid-uemfal7i><div class="label-row" data-astro-cid-uemfal7i><span class="section-stamp" data-astro-cid-uemfal7i>CONFIER UNE MISSION</span><div class="rule" data-astro-cid-uemfal7i></div></div><div class="form-layout" data-astro-cid-uemfal7i><div class="form-intro" data-astro-cid-uemfal7i><h2 class="form-intro__title" data-astro-cid-uemfal7i>${formTitre}</h2>${renderComponent($$result, "RichText", RichText, {
		"document": formIntro1,
		"className": "form-intro__text",
		"data-astro-cid-uemfal7i": true
	})}${renderComponent($$result, "RichText", RichText, {
		"document": formIntro2,
		"className": "form-intro__text",
		"data-astro-cid-uemfal7i": true
	})}<p class="form-intro__text" data-astro-cid-uemfal7i>Contact direct : <a${addAttribute(`mailto:${parametres_default.email}`, "href")} class="form-intro__link" data-astro-cid-uemfal7i>${parametres_default.email}</a></p></div><form class="sf-form" name="savoir-faire-mission" method="POST" data-astro-cid-uemfal7i><div class="sf-row" data-astro-cid-uemfal7i><div class="sf-group" data-astro-cid-uemfal7i><label class="sf-label" for="sf-nom" data-astro-cid-uemfal7i>NOM *</label><input class="sf-input" type="text" id="sf-nom" name="nom" required autocomplete="name" data-astro-cid-uemfal7i></div><div class="sf-group" data-astro-cid-uemfal7i><label class="sf-label" for="sf-societe" data-astro-cid-uemfal7i>SOCIÉTÉ / STRUCTURE</label><input class="sf-input" type="text" id="sf-societe" name="societe" autocomplete="organization" data-astro-cid-uemfal7i></div></div><div class="sf-row" data-astro-cid-uemfal7i><div class="sf-group" data-astro-cid-uemfal7i><label class="sf-label" for="sf-email" data-astro-cid-uemfal7i>EMAIL *</label><input class="sf-input" type="email" id="sf-email" name="email" required autocomplete="email" data-astro-cid-uemfal7i></div><div class="sf-group" data-astro-cid-uemfal7i><label class="sf-label" for="sf-tel" data-astro-cid-uemfal7i>TÉLÉPHONE</label><input class="sf-input" type="tel" id="sf-tel" name="telephone" autocomplete="tel" data-astro-cid-uemfal7i></div></div><div class="sf-group" data-astro-cid-uemfal7i><label class="sf-label" for="sf-expertise" data-astro-cid-uemfal7i>DOMAINE D'EXPERTISE CONCERNÉ</label><select class="sf-input sf-select" id="sf-expertise" name="expertise" data-astro-cid-uemfal7i><option value="" data-astro-cid-uemfal7i>— Sélectionner —</option><option value="curation" data-astro-cid-uemfal7i>Curation et Sourcing</option><option value="conciergerie" data-astro-cid-uemfal7i>Conciergerie et Propriété</option><option value="events" data-astro-cid-uemfal7i>Events et Scénographie</option><option value="intendance" data-astro-cid-uemfal7i>Intendance et Logistique</option><option value="valorisation" data-astro-cid-uemfal7i>Valorisation de Collections</option><option value="autre" data-astro-cid-uemfal7i>Autre / Plusieurs domaines</option></select></div><div class="sf-group" data-astro-cid-uemfal7i><label class="sf-label" for="sf-budget" data-astro-cid-uemfal7i>BUDGET ENVISAGÉ</label><select class="sf-input sf-select" id="sf-budget" name="budget" data-astro-cid-uemfal7i><option value="" data-astro-cid-uemfal7i>— Sélectionner —</option><option value="&lt;5k" data-astro-cid-uemfal7i>Moins de 5 000 €</option><option value="5-15k" data-astro-cid-uemfal7i>5 000 – 15 000 €</option><option value="15-50k" data-astro-cid-uemfal7i>15 000 – 50 000 €</option><option value="&gt;50k" data-astro-cid-uemfal7i>Plus de 50 000 €</option><option value="nc" data-astro-cid-uemfal7i>Non communiqué</option></select></div><div class="sf-group" data-astro-cid-uemfal7i><label class="sf-label" for="sf-mission" data-astro-cid-uemfal7i>DESCRIPTION DE LA MISSION *</label><textarea class="sf-input sf-textarea" id="sf-mission" name="mission" rows="5" required placeholder="Décrivez votre projet, le contexte, les contraintes et vos attentes..." data-astro-cid-uemfal7i></textarea></div><div class="sf-check-group" data-astro-cid-uemfal7i><label class="sf-check" data-astro-cid-uemfal7i><input type="checkbox" name="newsletter" value="oui" class="sf-check__input" data-astro-cid-uemfal7i><span class="sf-check__box" data-astro-cid-uemfal7i></span><span class="sf-check__label" data-astro-cid-uemfal7i>Je souhaite recevoir la newsletter Atipics — actualités, découvertes et nouvelles missions.</span></label></div><button type="submit" class="sf-submit" data-astro-cid-uemfal7i>ENVOYER LA DEMANDE <span aria-hidden="true" data-astro-cid-uemfal7i>→</span></button></form></div></div></section></main>${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-uemfal7i": true })}` })}${renderScript($$result, "C:/Users/ninad/Desktop/atipics/src/pages/savoir-faire.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/ninad/Desktop/atipics/src/pages/savoir-faire.astro", void 0);
var $$file = "C:/Users/ninad/Desktop/atipics/src/pages/savoir-faire.astro";
var $$url = "/savoir-faire";
//#endregion
//#region \0virtual:astro:page:src/pages/savoir-faire@_@astro
var page = () => savoir_faire_exports;
//#endregion
export { page };
