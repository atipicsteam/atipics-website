import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { C as unescapeHTML, E as createComponent, _ as maybeRenderHead, o as renderComponent, p as renderTemplate, r as renderScript, y as addAttribute } from "./server_Chz1CeXz.mjs";
import "./compiler_onR2zt3j.mjs";
import { i as parametres_default, n as $$Header, r as $$Layout, t as $$Footer } from "./Footer_CFEuF_u5.mjs";
import { t as RichText } from "./RichText_G_rJ0ThB.mjs";
var contact_default = {
	form_tab_message: "Message",
	form_tab_mission: "Confier une mission",
	form_titre_message: "ENVOYER UN MESSAGE",
	form_titre_mission: "CONFIER UNE MISSION",
	info_rdv_label: "PRENDRE RENDEZ-VOUS",
	rdv_texte: [{
		"type": "paragraph",
		"children": [{ "text": "Les visites sont sur rendez-vous uniquement, du lundi au vendredi, de 10h à 17h." }]
	}],
	info_email_label: "EMAIL",
	info_tel_label: "TÉLÉPHONE",
	info_adresse_label: "NOUS TROUVER",
	info_bouton_label: "VISITER LE VILLAGE"
};
//#endregion
//#region src/pages/contact.astro
var contact_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Contact,
	file: () => $$file,
	url: () => $$url
});
var $$Contact = createComponent(($$result, $$props, $$slots) => {
	const rdvTexte = contact_default.rdv_texte || "Les visites sont sur rendez-vous uniquement, du lundi au vendredi, de 10h à 17h.";
	const email = parametres_default.email || "contact@atipics.fr";
	const tel = parametres_default.telephone || "+33 6 00 00 00 00";
	const adresse = parametres_default.adresse || "Village Atipics\nZone Artisanale\nFrance";
	const form_tab_message = contact_default.form_tab_message || "Message";
	const form_tab_mission = contact_default.form_tab_mission || "Confier une mission";
	const form_titre_message = contact_default.form_titre_message || "ENVOYER UN MESSAGE";
	const form_titre_mission = contact_default.form_titre_mission || "CONFIER UNE MISSION";
	const info_rdv_label = contact_default.info_rdv_label || "PRENDRE RENDEZ-VOUS";
	const info_email_label = contact_default.info_email_label || "EMAIL";
	const info_tel_label = contact_default.info_tel_label || "TÉLÉPHONE";
	const info_adresse_label = contact_default.info_adresse_label || "NOUS TROUVER";
	const info_bouton_label = contact_default.info_bouton_label || "VISITER LE VILLAGE";
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {
		"title": `Contact — ${parametres_default.nom_site}`,
		"description": "Contactez l'Agence Atipics",
		"data-astro-cid-6bfsojfh": true
	}, { "default": ($$result) => renderTemplate`${renderComponent($$result, "Header", $$Header, { "data-astro-cid-6bfsojfh": true })}${maybeRenderHead($$result)}<main style="padding-top: var(--nav-h);" data-astro-cid-6bfsojfh><section class="contact-section" data-astro-cid-6bfsojfh><div class="container contact-grid" data-astro-cid-6bfsojfh><!-- ── Colonne gauche : formulaire ── --><div class="col-form" data-astro-cid-6bfsojfh><!-- Titre + switch --><div class="form-header" data-astro-cid-6bfsojfh><div class="label-row" data-astro-cid-6bfsojfh><span class="stamp" id="form-stamp" data-astro-cid-6bfsojfh>${form_titre_message}</span><div class="rule" data-astro-cid-6bfsojfh></div></div><div class="form-tabs" role="group" aria-label="Type de contact"${addAttribute(form_titre_message, "data-label-message")}${addAttribute(form_titre_mission, "data-label-mission")} data-astro-cid-6bfsojfh><button class="tab tab--active" data-tab="message" data-astro-cid-6bfsojfh>${form_tab_message}</button><span class="tab-sep" aria-hidden="true" data-astro-cid-6bfsojfh>/</span><button class="tab" data-tab="mission" data-astro-cid-6bfsojfh>${form_tab_mission}</button></div></div><!-- Formulaire — Message général --><form class="cform" id="form-message" name="contact-message" method="POST" data-astro-cid-6bfsojfh><div class="cform__group" data-astro-cid-6bfsojfh><label class="cform__label" for="msg-nom" data-astro-cid-6bfsojfh>NOM</label><input class="cform__input" type="text" id="msg-nom" name="nom" required autocomplete="name" data-astro-cid-6bfsojfh></div><div class="cform__group" data-astro-cid-6bfsojfh><label class="cform__label" for="msg-email" data-astro-cid-6bfsojfh>EMAIL</label><input class="cform__input" type="email" id="msg-email" name="email" required autocomplete="email" data-astro-cid-6bfsojfh></div><div class="cform__group" data-astro-cid-6bfsojfh><label class="cform__label" for="msg-message" data-astro-cid-6bfsojfh>MESSAGE</label><textarea class="cform__input cform__textarea" id="msg-message" name="message" rows="6" required data-astro-cid-6bfsojfh></textarea></div><label class="cform__check" data-astro-cid-6bfsojfh><input class="cform__check-input" type="checkbox" name="newsletter" data-astro-cid-6bfsojfh><span class="cform__check-box" aria-hidden="true" data-astro-cid-6bfsojfh></span><span class="cform__check-label" data-astro-cid-6bfsojfh>J'accepte de recevoir la newsletter Atipics</span></label><button type="submit" class="cform__submit" data-astro-cid-6bfsojfh>ENVOYER LE MESSAGE <span class="cform__arrow" aria-hidden="true" data-astro-cid-6bfsojfh>→</span></button></form><!-- Formulaire — Confier une mission --><form class="cform cform--hidden" id="form-mission" name="contact-mission" method="POST" data-astro-cid-6bfsojfh><div class="cform__row" data-astro-cid-6bfsojfh><div class="cform__group" data-astro-cid-6bfsojfh><label class="cform__label" for="ms-nom" data-astro-cid-6bfsojfh>NOM</label><input class="cform__input" type="text" id="ms-nom" name="nom" required autocomplete="name" data-astro-cid-6bfsojfh></div><div class="cform__group" data-astro-cid-6bfsojfh><label class="cform__label" for="ms-societe" data-astro-cid-6bfsojfh>SOCIÉTÉ</label><input class="cform__input" type="text" id="ms-societe" name="societe" autocomplete="organization" data-astro-cid-6bfsojfh></div></div><div class="cform__row" data-astro-cid-6bfsojfh><div class="cform__group" data-astro-cid-6bfsojfh><label class="cform__label" for="ms-email" data-astro-cid-6bfsojfh>EMAIL</label><input class="cform__input" type="email" id="ms-email" name="email" required autocomplete="email" data-astro-cid-6bfsojfh></div><div class="cform__group" data-astro-cid-6bfsojfh><label class="cform__label" for="ms-tel" data-astro-cid-6bfsojfh>TÉLÉPHONE</label><input class="cform__input" type="tel" id="ms-tel" name="telephone" autocomplete="tel" data-astro-cid-6bfsojfh></div></div><div class="cform__row" data-astro-cid-6bfsojfh><div class="cform__group" data-astro-cid-6bfsojfh><label class="cform__label" for="ms-expertise" data-astro-cid-6bfsojfh>DOMAINE D'EXPERTISE</label><select class="cform__input cform__select" id="ms-expertise" name="expertise" data-astro-cid-6bfsojfh><option value="" data-astro-cid-6bfsojfh>Sélectionner…</option><option data-astro-cid-6bfsojfh>Sourcing & chinage</option><option data-astro-cid-6bfsojfh>Scénographie & décoration</option><option data-astro-cid-6bfsojfh>Restauration & artisanat</option><option data-astro-cid-6bfsojfh>Logistique & transport</option><option data-astro-cid-6bfsojfh>Conseil & curation</option><option data-astro-cid-6bfsojfh>Autre</option></select></div><div class="cform__group" data-astro-cid-6bfsojfh><label class="cform__label" for="ms-budget" data-astro-cid-6bfsojfh>BUDGET ESTIMÉ</label><select class="cform__input cform__select" id="ms-budget" name="budget" data-astro-cid-6bfsojfh><option value="" data-astro-cid-6bfsojfh>Sélectionner…</option><option data-astro-cid-6bfsojfh>Moins de 5 000 €</option><option data-astro-cid-6bfsojfh>5 000 – 15 000 €</option><option data-astro-cid-6bfsojfh>15 000 – 50 000 €</option><option data-astro-cid-6bfsojfh>Plus de 50 000 €</option><option data-astro-cid-6bfsojfh>À définir</option></select></div></div><div class="cform__group" data-astro-cid-6bfsojfh><label class="cform__label" for="ms-mission" data-astro-cid-6bfsojfh>DESCRIPTION DE LA MISSION</label><textarea class="cform__input cform__textarea" id="ms-mission" name="mission" rows="5" required data-astro-cid-6bfsojfh></textarea></div><label class="cform__check" data-astro-cid-6bfsojfh><input class="cform__check-input" type="checkbox" name="newsletter" data-astro-cid-6bfsojfh><span class="cform__check-box" aria-hidden="true" data-astro-cid-6bfsojfh></span><span class="cform__check-label" data-astro-cid-6bfsojfh>J'accepte de recevoir la newsletter Atipics</span></label><button type="submit" class="cform__submit" data-astro-cid-6bfsojfh>ENVOYER LA DEMANDE <span class="cform__arrow" aria-hidden="true" data-astro-cid-6bfsojfh>→</span></button></form></div><!-- ── Colonne droite : infos ── --><div class="col-info" data-astro-cid-6bfsojfh><div class="info-block" data-astro-cid-6bfsojfh><p class="info-label" data-astro-cid-6bfsojfh>${info_rdv_label}</p>${renderComponent($$result, "RichText", RichText, {
		"document": rdvTexte,
		"className": "info-text",
		"data-astro-cid-6bfsojfh": true
	})}</div><div class="info-block" data-astro-cid-6bfsojfh><p class="info-label" data-astro-cid-6bfsojfh>${info_email_label}</p><a${addAttribute(`mailto:${email}`, "href")} class="info-link" data-astro-cid-6bfsojfh>${email}</a></div><div class="info-block" data-astro-cid-6bfsojfh><p class="info-label" data-astro-cid-6bfsojfh>${info_tel_label}</p><a${addAttribute(`tel:${tel.replace(/\s/g, "")}`, "href")} class="info-link" data-astro-cid-6bfsojfh>${tel}</a></div><div class="info-block" data-astro-cid-6bfsojfh><p class="info-label" data-astro-cid-6bfsojfh>${info_adresse_label}</p><p class="info-text" data-astro-cid-6bfsojfh>${unescapeHTML(adresse.replace(/\n/g, "<br/>"))}</p></div><a href="/village" class="info-btn" data-astro-cid-6bfsojfh>${info_bouton_label} <span aria-hidden="true" data-astro-cid-6bfsojfh>→</span></a></div></div></section></main>${renderComponent($$result, "Footer", $$Footer, {
		"fixed": true,
		"data-astro-cid-6bfsojfh": true
	})}` })}${renderScript($$result, "C:/Users/ninad/Desktop/atipics/src/pages/contact.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/ninad/Desktop/atipics/src/pages/contact.astro", void 0);
var $$file = "C:/Users/ninad/Desktop/atipics/src/pages/contact.astro";
var $$url = "/contact";
//#endregion
//#region \0virtual:astro:page:src/pages/contact@_@astro
var page = () => contact_exports;
//#endregion
export { page };
