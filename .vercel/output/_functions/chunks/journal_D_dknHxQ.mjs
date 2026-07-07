import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { E as createComponent, _ as maybeRenderHead, o as renderComponent, p as renderTemplate, y as addAttribute } from "./server_Chz1CeXz.mjs";
import "./compiler_onR2zt3j.mjs";
import { i as parametres_default, n as $$Header, r as $$Layout, t as $$Footer } from "./Footer_CFEuF_u5.mjs";
import { t as RichText } from "./RichText_G_rJ0ThB.mjs";
//#region src/content/journal/scenographie-lvmh.json
var scenographie_lvmh_exports = /* @__PURE__ */ __exportAll({
	category: () => category$1,
	cover: () => cover$1,
	date: () => date$1,
	dateLabel: () => dateLabel$1,
	default: () => scenographie_lvmh_default,
	excerpt: () => excerpt$1,
	title: () => title$1
});
var title$1 = "Mise en scène d'un espace LVMH";
var date$1 = "2026-03-22";
var dateLabel$1 = "22 Mars 2026";
var category$1 = "SCÉNOGRAPHIE";
var excerpt$1 = [{
	"type": "paragraph",
	"children": [{ "text": "Comment nous avons composé une atmosphère entre passé et présent pour un espace événementiel de la maison LVMH, en mêlant pièces vintage et mobilier contemporain." }]
}];
var cover$1 = "/images/projet2.webp";
var scenographie_lvmh_default = {
	title: title$1,
	date: date$1,
	dateLabel: dateLabel$1,
	category: category$1,
	excerpt: excerpt$1,
	cover: cover$1
};
//#endregion
//#region src/content/journal/sourcing-marche-biennale.json
var sourcing_marche_biennale_exports = /* @__PURE__ */ __exportAll({
	category: () => category,
	cover: () => cover,
	date: () => date,
	dateLabel: () => dateLabel,
	default: () => sourcing_marche_biennale_default,
	excerpt: () => excerpt,
	title: () => title
});
var title = "Biennale des Antiquaires — nos coups de cœur";
var date = "2026-04-10";
var dateLabel = "10 Avril 2026";
var category = "SOURCING";
var excerpt = [{
	"type": "paragraph",
	"children": [{ "text": "Retour sur notre visite de la dernière Biennale. Quelques pièces rares qui ont retenu notre attention et rejoindront bientôt nos collections." }]
}];
var cover = "/images/projet1.jpg";
var sourcing_marche_biennale_default = {
	title,
	date,
	dateLabel,
	category,
	excerpt,
	cover
};
//#endregion
//#region src/pages/journal.astro
var journal_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Journal,
	file: () => $$file,
	url: () => $$url
});
var $$Journal = createComponent(($$result, $$props, $$slots) => {
	const articles = Object.values(/* @__PURE__ */ Object.assign({
		"../content/journal/scenographie-lvmh.json": scenographie_lvmh_exports,
		"../content/journal/sourcing-marche-biennale.json": sourcing_marche_biennale_exports
	})).map((mod) => mod.default).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {
		"title": `Journal — ${parametres_default.nom_site}`,
		"description": "Actualités, découvertes et réflexions de l'Agence Atipics",
		"data-astro-cid-wyllzg5x": true
	}, { "default": ($$result) => renderTemplate`${renderComponent($$result, "Header", $$Header, { "data-astro-cid-wyllzg5x": true })}${maybeRenderHead($$result)}<main style="padding-top: var(--nav-h);" data-astro-cid-wyllzg5x><!-- Header --><section class="page-head" data-astro-cid-wyllzg5x><div class="container" data-astro-cid-wyllzg5x><div class="label-row" data-astro-cid-wyllzg5x><span class="section-stamp" data-astro-cid-wyllzg5x>JOURNAL</span><div class="rule" data-astro-cid-wyllzg5x></div></div><h1 class="page-head__title" data-astro-cid-wyllzg5x>Actualités &amp; Réflexions</h1><p class="page-head__sub" data-astro-cid-wyllzg5x>Nos découvertes, nos coups de cœur, nos chroniques depuis le Village.</p></div></section><!-- Grille articles --><section class="articles" data-astro-cid-wyllzg5x><div class="container" data-astro-cid-wyllzg5x><div class="articles__grid" data-astro-cid-wyllzg5x>${articles.map((a) => renderTemplate`<article class="art-card" data-astro-cid-wyllzg5x><div class="art-card__img-wrap" data-astro-cid-wyllzg5x><img${addAttribute(a.cover, "src")}${addAttribute(a.title, "alt")} class="art-card__img" loading="lazy" data-astro-cid-wyllzg5x></div><div class="art-card__body" data-astro-cid-wyllzg5x><div class="art-card__meta" data-astro-cid-wyllzg5x><span class="art-card__cat" data-astro-cid-wyllzg5x>${a.category}</span><span class="art-card__sep" data-astro-cid-wyllzg5x>—</span><time class="art-card__date"${addAttribute(a.date, "datetime")} data-astro-cid-wyllzg5x>${a.dateLabel}</time></div><h2 class="art-card__title" data-astro-cid-wyllzg5x>${a.title}</h2>${renderComponent($$result, "RichText", RichText, {
		"document": a.excerpt,
		"className": "art-card__excerpt",
		"data-astro-cid-wyllzg5x": true
	})}<div class="art-card__share" data-astro-cid-wyllzg5x><span class="art-card__share-label" data-astro-cid-wyllzg5x>Partager</span><a href="https://instagram.com/atipics" target="_blank" rel="noopener" class="art-card__share-btn" aria-label="Instagram" style="--c:#E1306C" onclick="event.stopPropagation()" data-astro-cid-wyllzg5x><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-wyllzg5x><rect x="2" y="2" width="20" height="20" rx="5" data-astro-cid-wyllzg5x></rect><circle cx="12" cy="12" r="4" data-astro-cid-wyllzg5x></circle><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" data-astro-cid-wyllzg5x></circle></svg></a><a href="https://pinterest.com/" target="_blank" rel="noopener" class="art-card__share-btn" aria-label="Pinterest" style="--c:#E60023" onclick="event.stopPropagation()" data-astro-cid-wyllzg5x><svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" data-astro-cid-wyllzg5x><path d="M12 2C6.48 2 2 6.48 2 12c0 4.24 2.65 7.86 6.39 9.29-.09-.78-.17-1.98.03-2.83.19-.77 1.26-5.33 1.26-5.33s-.32-.64-.32-1.59c0-1.49.87-2.6 1.94-2.6.92 0 1.36.69 1.36 1.51 0 .92-.59 2.3-.89 3.58-.25 1.07.53 1.94 1.58 1.94 1.9 0 3.17-2.43 3.17-5.31 0-2.19-1.47-3.85-4.15-3.85-3.03 0-4.91 2.26-4.91 4.79 0 .87.26 1.48.67 1.96.19.22.21.31.14.57-.05.18-.16.63-.2.8-.06.25-.25.34-.47.25-1.32-.54-1.93-2-1.93-3.63 0-2.7 2.28-5.96 6.8-5.96 3.64 0 6.04 2.64 6.04 5.47 0 3.75-2.07 6.56-5.12 6.56-1.02 0-2-.55-2.33-1.18l-.65 2.53c-.23.86-.68 1.72-1.1 2.39.83.25 1.7.39 2.61.39 5.52 0 10-4.48 10-10S17.52 2 12 2z" data-astro-cid-wyllzg5x></path></svg></a><a href="https://facebook.com/atipics" target="_blank" rel="noopener" class="art-card__share-btn" aria-label="Facebook" style="--c:#1877F2" onclick="event.stopPropagation()" data-astro-cid-wyllzg5x><svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" data-astro-cid-wyllzg5x><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" data-astro-cid-wyllzg5x></path></svg></a><a href="https://linkedin.com/company/atipics" target="_blank" rel="noopener" class="art-card__share-btn" aria-label="LinkedIn" style="--c:#0A66C2" onclick="event.stopPropagation()" data-astro-cid-wyllzg5x><svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" data-astro-cid-wyllzg5x><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" data-astro-cid-wyllzg5x></path></svg></a><a href="https://atipics.substack.com" target="_blank" rel="noopener" class="art-card__share-btn" aria-label="Substack" style="--c:#FF6719" onclick="event.stopPropagation()" data-astro-cid-wyllzg5x><svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" data-astro-cid-wyllzg5x><path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z" data-astro-cid-wyllzg5x></path></svg></a><a href="https://wa.me/33600000000" target="_blank" rel="noopener" class="art-card__share-btn" aria-label="WhatsApp" style="--c:#25D366" onclick="event.stopPropagation()" data-astro-cid-wyllzg5x><svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" data-astro-cid-wyllzg5x><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" data-astro-cid-wyllzg5x></path></svg></a><a href="mailto:contact@atipics.fr" class="art-card__share-btn" aria-label="Email" style="--c:#888884" onclick="event.stopPropagation()" data-astro-cid-wyllzg5x><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-wyllzg5x><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" data-astro-cid-wyllzg5x></path><polyline points="22,6 12,13 2,6" data-astro-cid-wyllzg5x></polyline></svg></a></div><span class="art-card__read" data-astro-cid-wyllzg5x>Lire →</span></div></article>`)}</div></div></section></main>${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-wyllzg5x": true })}` })}`;
}, "C:/Users/ninad/Desktop/atipics/src/pages/journal.astro", void 0);
var $$file = "C:/Users/ninad/Desktop/atipics/src/pages/journal.astro";
var $$url = "/journal";
//#endregion
//#region \0virtual:astro:page:src/pages/journal@_@astro
var page = () => journal_exports;
//#endregion
export { page };
