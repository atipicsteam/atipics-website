import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import "react";
import { makeGenericAPIRouteHandler } from "@keystatic/core/api/generic";
import { parseString } from "set-cookie-parser";
import { collection, config, fields, singleton } from "@keystatic/core";
import { jsx } from "react/jsx-runtime";
//#region node_modules/@keystatic/astro/dist/keystatic-astro-api.js
function makeHandler(_config) {
	return async function keystaticAPIRoute(context) {
		var _context$locals, _ref, _config$clientId, _ref2, _config$clientSecret, _ref3, _config$secret;
		const envVarsForCf = (_context$locals = context.locals) === null || _context$locals === void 0 || (_context$locals = _context$locals.runtime) === null || _context$locals === void 0 ? void 0 : _context$locals.env;
		const { body, headers, status } = await makeGenericAPIRouteHandler({
			..._config,
			clientId: (_ref = (_config$clientId = _config.clientId) !== null && _config$clientId !== void 0 ? _config$clientId : envVarsForCf === null || envVarsForCf === void 0 ? void 0 : envVarsForCf.KEYSTATIC_GITHUB_CLIENT_ID) !== null && _ref !== void 0 ? _ref : tryOrUndefined(() => {
				return "Iv23liI5eJlSfler3x0U";
			}),
			clientSecret: (_ref2 = (_config$clientSecret = _config.clientSecret) !== null && _config$clientSecret !== void 0 ? _config$clientSecret : envVarsForCf === null || envVarsForCf === void 0 ? void 0 : envVarsForCf.KEYSTATIC_GITHUB_CLIENT_SECRET) !== null && _ref2 !== void 0 ? _ref2 : tryOrUndefined(() => {
				return "5d33296e441cb2d0579e02df772e7cc5e3e87428";
			}),
			secret: (_ref3 = (_config$secret = _config.secret) !== null && _config$secret !== void 0 ? _config$secret : envVarsForCf === null || envVarsForCf === void 0 ? void 0 : envVarsForCf.KEYSTATIC_SECRET) !== null && _ref3 !== void 0 ? _ref3 : tryOrUndefined(() => {
				return "9fa125616f044805588f7891e27bfd225356489d2befd4a734a44266210155d015f9c41e5466b3e0";
			})
		}, { slugEnvName: "PUBLIC_KEYSTATIC_GITHUB_APP_SLUG" })(context.request);
		let headersInADifferentStructure = /* @__PURE__ */ new Map();
		if (headers) if (Array.isArray(headers)) for (const [key, value] of headers) {
			if (!headersInADifferentStructure.has(key.toLowerCase())) headersInADifferentStructure.set(key.toLowerCase(), []);
			headersInADifferentStructure.get(key.toLowerCase()).push(value);
		}
		else if (typeof headers.entries === "function") {
			for (const [key, value] of headers.entries()) headersInADifferentStructure.set(key.toLowerCase(), [value]);
			if ("getSetCookie" in headers && typeof headers.getSetCookie === "function") {
				const setCookieHeaders2 = headers.getSetCookie();
				if (setCookieHeaders2 !== null && setCookieHeaders2 !== void 0 && setCookieHeaders2.length) headersInADifferentStructure.set("set-cookie", setCookieHeaders2);
			}
		} else for (const [key, value] of Object.entries(headers)) headersInADifferentStructure.set(key.toLowerCase(), [value]);
		const setCookieHeaders = headersInADifferentStructure.get("set-cookie");
		headersInADifferentStructure.delete("set-cookie");
		if (setCookieHeaders) for (const setCookieValue of setCookieHeaders) {
			var _options$sameSite;
			const { name, value, ...options } = parseString(setCookieValue);
			const sameSite = (_options$sameSite = options.sameSite) === null || _options$sameSite === void 0 ? void 0 : _options$sameSite.toLowerCase();
			context.cookies.set(name, value, {
				domain: options.domain,
				expires: options.expires,
				httpOnly: options.httpOnly,
				maxAge: options.maxAge,
				path: options.path,
				sameSite: sameSite === "lax" || sameSite === "strict" || sameSite === "none" ? sameSite : void 0
			});
		}
		return new Response(body, {
			status,
			headers: [...headersInADifferentStructure.entries()].flatMap(([key, val]) => val.map((x) => [key, x]))
		});
	};
}
function tryOrUndefined(fn) {
	try {
		return fn();
	} catch {
		return;
	}
}
//#endregion
//#region keystatic.config.tsx
var keystatic_config_default = config({
	storage: {
		kind: "github",
		repo: "atipicsteam/atipics-website"
	},
	ui: {
		brand: {
			name: "Atipics",
			mark: () => /* @__PURE__ */ jsx("img", {
				src: "/favicon.svg",
				alt: "Atipics",
				style: { height: 24 }
			})
		},
		navigation: {
			"Contenu Principal": [
				"projets",
				"journal",
				"carousel"
			],
			"Pages": [
				"agence_page",
				"savoir_faire_page",
				"village_page",
				"contact_page"
			],
			"Configuration": [
				"parametres",
				"theme",
				"nav_principale",
				"footer"
			]
		}
	},
	collections: {
		projets: collection({
			label: "Projets",
			slugField: "title",
			path: "src/content/projets/*",
			format: { data: "json" },
			schema: {
				title: fields.text({ label: "Titre du projet" }),
				category: fields.text({ label: "Catégorie" }),
				year: fields.text({ label: "Année" }),
				description: fields.document({
					label: "Texte enrichi",
					formatting: { inlineMarks: {
						bold: true,
						italic: true
					} }
				}),
				cover: fields.image({
					label: "Image de couverture",
					directory: "public/images/projets",
					publicPath: "/images/projets/"
				}),
				medias: fields.array(fields.object({
					type: fields.select({
						label: "Type de média",
						options: [{
							label: "Image",
							value: "image"
						}, {
							label: "Vidéo",
							value: "video"
						}],
						defaultValue: "image"
					}),
					src: fields.image({
						label: "Fichier Média",
						directory: "public/images/projets",
						publicPath: "/images/projets/"
					}),
					alt: fields.text({ label: "Texte alternatif" })
				}), {
					label: "Médias du projet",
					itemLabel: (props) => props.fields.alt.value || "Nouveau média"
				})
			}
		}),
		nav_principale: collection({
			label: "Navigation Principale",
			slugField: "label",
			path: "src/content/nav/*",
			format: { data: "json" },
			schema: {
				label: fields.text({ label: "Label" }),
				href: fields.text({ label: "Lien" }),
				sort: fields.integer({ label: "Ordre" }),
				sub: fields.array(fields.object({
					label: fields.text({ label: "Label" }),
					href: fields.text({ label: "Lien" })
				}), {
					label: "Sous-menus",
					itemLabel: (props) => props.fields.label.value
				})
			}
		}),
		journal: collection({
			label: "Journal",
			slugField: "title",
			path: "src/content/journal/*",
			format: { data: "json" },
			schema: {
				title: fields.text({ label: "Titre de l'article" }),
				date: fields.date({ label: "Date" }),
				dateLabel: fields.text({ label: "Label de la date (ex: 10 Avril 2026)" }),
				category: fields.text({ label: "Catégorie" }),
				excerpt: fields.document({
					label: "Texte enrichi",
					formatting: { inlineMarks: {
						bold: true,
						italic: true
					} }
				}),
				cover: fields.image({
					label: "Image de couverture",
					directory: "public/images/journal",
					publicPath: "/images/journal/"
				})
			}
		})
	},
	singletons: {
		parametres: singleton({
			label: "Paramètres du site",
			path: "src/content/parametres/index",
			format: { data: "json" },
			schema: {
				nom_site: fields.text({ label: "Nom du site" }),
				description_site: fields.document({
					label: "Texte enrichi",
					formatting: { inlineMarks: {
						bold: true,
						italic: true
					} }
				}),
				email: fields.text({ label: "Email" }),
				telephone: fields.text({ label: "Téléphone" }),
				adresse: fields.document({
					label: "Texte enrichi",
					formatting: { inlineMarks: {
						bold: true,
						italic: true
					} }
				}),
				font: fields.select({
					label: "Police du site",
					options: [
						{
							label: "Helvetica",
							value: "helvetica"
						},
						{
							label: "Inter",
							value: "inter"
						},
						{
							label: "Playfair Display",
							value: "playfair"
						},
						{
							label: "Cormorant Garamond",
							value: "cormorant"
						},
						{
							label: "DM Sans",
							value: "dm-sans"
						},
						{
							label: "Josefin Sans",
							value: "josefin"
						},
						{
							label: "Manrope",
							value: "manrope"
						},
						{
							label: "EB Garamond",
							value: "eb-garamond"
						}
					],
					defaultValue: "helvetica"
				})
			}
		}),
		agence_page: singleton({
			label: "Page Agence",
			path: "src/content/pages/agence",
			format: { data: "json" },
			schema: {
				bandeau_image: fields.image({
					label: "Image du bandeau",
					directory: "public/images/pages",
					publicPath: "/images/pages/"
				}),
				bandeau_label: fields.text({ label: "Label du bandeau" }),
				bandeau_titre: fields.text({ label: "Titre du bandeau" }),
				intro: fields.document({
					label: "Texte enrichi",
					formatting: { inlineMarks: {
						bold: true,
						italic: true
					} }
				}),
				manifeste_label: fields.text({ label: "Label Manifeste" }),
				manifeste_titre: fields.text({ label: "Titre Manifeste" }),
				manifeste_p1: fields.document({
					label: "Texte enrichi",
					formatting: { inlineMarks: {
						bold: true,
						italic: true
					} }
				}),
				manifeste_p2: fields.document({
					label: "Texte enrichi",
					formatting: { inlineMarks: {
						bold: true,
						italic: true
					} }
				}),
				manifeste_p3: fields.document({
					label: "Texte enrichi",
					formatting: { inlineMarks: {
						bold: true,
						italic: true
					} }
				}),
				manifeste_images: fields.array(fields.image({
					label: "Image",
					directory: "public/images/agence",
					publicPath: "/images/agence/"
				}), {
					label: "Images Manifeste",
					itemLabel: (props) => "Image"
				}),
				reseaux_label: fields.text({ label: "Label Réseaux" }),
				reseaux_titre: fields.text({ label: "Titre Réseaux" }),
				reseaux_p1: fields.document({
					label: "Texte enrichi",
					formatting: { inlineMarks: {
						bold: true,
						italic: true
					} }
				}),
				reseaux_p2: fields.document({
					label: "Texte enrichi",
					formatting: { inlineMarks: {
						bold: true,
						italic: true
					} }
				}),
				reseaux_p3: fields.document({
					label: "Texte enrichi",
					formatting: { inlineMarks: {
						bold: true,
						italic: true
					} }
				}),
				reseaux_p4: fields.document({
					label: "Texte enrichi",
					formatting: { inlineMarks: {
						bold: true,
						italic: true
					} }
				}),
				reseaux_images: fields.array(fields.image({
					label: "Image",
					directory: "public/images/agence",
					publicPath: "/images/agence/"
				}), {
					label: "Images Réseaux",
					itemLabel: (props) => "Image"
				})
			}
		}),
		savoir_faire_page: singleton({
			label: "Page Savoir Faire",
			path: "src/content/pages/savoir-faire",
			format: { data: "json" },
			schema: {
				page_label: fields.text({ label: "Label de la page" }),
				page_titre: fields.text({ label: "Titre de la page" }),
				page_sous_titre: fields.text({ label: "Sous-titre" }),
				curation_label: fields.text({ label: "Curation - Label" }),
				curation_titre: fields.text({ label: "Curation - Titre" }),
				curation_intro: fields.document({
					label: "Texte enrichi",
					formatting: { inlineMarks: {
						bold: true,
						italic: true
					} }
				}),
				curation_p1: fields.document({
					label: "Texte enrichi",
					formatting: { inlineMarks: {
						bold: true,
						italic: true
					} }
				}),
				curation_p2: fields.document({
					label: "Texte enrichi",
					formatting: { inlineMarks: {
						bold: true,
						italic: true
					} }
				}),
				curation_images: fields.array(fields.image({
					label: "Image",
					directory: "public/images/savoir",
					publicPath: "/images/savoir/"
				}), { label: "Images Curation" }),
				conciergerie_label: fields.text({ label: "Conciergerie - Label" }),
				conciergerie_titre: fields.text({ label: "Conciergerie - Titre" }),
				conciergerie_intro: fields.document({
					label: "Texte enrichi",
					formatting: { inlineMarks: {
						bold: true,
						italic: true
					} }
				}),
				conciergerie_p1: fields.document({
					label: "Texte enrichi",
					formatting: { inlineMarks: {
						bold: true,
						italic: true
					} }
				}),
				conciergerie_p2: fields.document({
					label: "Texte enrichi",
					formatting: { inlineMarks: {
						bold: true,
						italic: true
					} }
				}),
				conciergerie_images: fields.array(fields.image({
					label: "Image",
					directory: "public/images/savoir",
					publicPath: "/images/savoir/"
				}), { label: "Images Conciergerie" }),
				events_label: fields.text({ label: "Events - Label" }),
				events_titre: fields.text({ label: "Events - Titre" }),
				events_intro: fields.document({
					label: "Texte enrichi",
					formatting: { inlineMarks: {
						bold: true,
						italic: true
					} }
				}),
				events_p1: fields.document({
					label: "Texte enrichi",
					formatting: { inlineMarks: {
						bold: true,
						italic: true
					} }
				}),
				events_p2: fields.document({
					label: "Texte enrichi",
					formatting: { inlineMarks: {
						bold: true,
						italic: true
					} }
				}),
				events_images: fields.array(fields.image({
					label: "Image",
					directory: "public/images/savoir",
					publicPath: "/images/savoir/"
				}), { label: "Images Events" }),
				intendance_label: fields.text({ label: "Intendance - Label" }),
				intendance_titre: fields.text({ label: "Intendance - Titre" }),
				intendance_intro: fields.document({
					label: "Texte enrichi",
					formatting: { inlineMarks: {
						bold: true,
						italic: true
					} }
				}),
				intendance_p1: fields.document({
					label: "Texte enrichi",
					formatting: { inlineMarks: {
						bold: true,
						italic: true
					} }
				}),
				intendance_p2: fields.document({
					label: "Texte enrichi",
					formatting: { inlineMarks: {
						bold: true,
						italic: true
					} }
				}),
				intendance_images: fields.array(fields.image({
					label: "Image",
					directory: "public/images/savoir",
					publicPath: "/images/savoir/"
				}), { label: "Images Intendance" }),
				valorisation_label: fields.text({ label: "Valorisation - Label" }),
				valorisation_titre: fields.text({ label: "Valorisation - Titre" }),
				valorisation_intro: fields.document({
					label: "Texte enrichi",
					formatting: { inlineMarks: {
						bold: true,
						italic: true
					} }
				}),
				valorisation_p1: fields.document({
					label: "Texte enrichi",
					formatting: { inlineMarks: {
						bold: true,
						italic: true
					} }
				}),
				valorisation_p2: fields.document({
					label: "Texte enrichi",
					formatting: { inlineMarks: {
						bold: true,
						italic: true
					} }
				}),
				valorisation_images: fields.array(fields.image({
					label: "Image",
					directory: "public/images/savoir",
					publicPath: "/images/savoir/"
				}), { label: "Images Valorisation" }),
				form_titre: fields.text({ label: "Formulaire - Titre" }),
				form_intro_1: fields.document({
					label: "Texte enrichi",
					formatting: { inlineMarks: {
						bold: true,
						italic: true
					} }
				}),
				form_intro_2: fields.document({
					label: "Texte enrichi",
					formatting: { inlineMarks: {
						bold: true,
						italic: true
					} }
				})
			}
		}),
		village_page: singleton({
			label: "Page Village",
			path: "src/content/pages/village",
			format: { data: "json" },
			schema: {
				bandeau_image: fields.image({
					label: "Image du bandeau",
					directory: "public/images/pages",
					publicPath: "/images/pages/"
				}),
				bandeau_label: fields.text({ label: "Label du bandeau" }),
				bandeau_titre: fields.text({ label: "Titre du bandeau" }),
				intro: fields.document({
					label: "Texte enrichi",
					formatting: { inlineMarks: {
						bold: true,
						italic: true
					} }
				}),
				entrepot_label: fields.text({ label: "Entrepôt - Label" }),
				entrepot_titre: fields.text({ label: "Entrepôt - Titre" }),
				entrepot_p1: fields.document({
					label: "Texte enrichi",
					formatting: { inlineMarks: {
						bold: true,
						italic: true
					} }
				}),
				entrepot_p2: fields.document({
					label: "Texte enrichi",
					formatting: { inlineMarks: {
						bold: true,
						italic: true
					} }
				}),
				entrepot_p3: fields.document({
					label: "Texte enrichi",
					formatting: { inlineMarks: {
						bold: true,
						italic: true
					} }
				}),
				entrepot_images: fields.array(fields.image({
					label: "Image",
					directory: "public/images/village",
					publicPath: "/images/village/"
				}), { label: "Images Entrepôt" }),
				studiodesign_label: fields.text({ label: "Studio Design - Label" }),
				studiodesign_titre: fields.text({ label: "Studio Design - Titre" }),
				studiodesign_p1: fields.document({
					label: "Texte enrichi",
					formatting: { inlineMarks: {
						bold: true,
						italic: true
					} }
				}),
				studiodesign_p2: fields.document({
					label: "Texte enrichi",
					formatting: { inlineMarks: {
						bold: true,
						italic: true
					} }
				}),
				studiodesign_p3: fields.document({
					label: "Texte enrichi",
					formatting: { inlineMarks: {
						bold: true,
						italic: true
					} }
				}),
				studiodesign_images: fields.array(fields.image({
					label: "Image",
					directory: "public/images/village",
					publicPath: "/images/village/"
				}), { label: "Images Studio Design" }),
				atelier_label: fields.text({ label: "Atelier - Label" }),
				atelier_titre: fields.text({ label: "Atelier - Titre" }),
				atelier_p1: fields.document({
					label: "Texte enrichi",
					formatting: { inlineMarks: {
						bold: true,
						italic: true
					} }
				}),
				atelier_p2: fields.document({
					label: "Texte enrichi",
					formatting: { inlineMarks: {
						bold: true,
						italic: true
					} }
				}),
				atelier_p3: fields.document({
					label: "Texte enrichi",
					formatting: { inlineMarks: {
						bold: true,
						italic: true
					} }
				}),
				atelier_images: fields.array(fields.image({
					label: "Image",
					directory: "public/images/village",
					publicPath: "/images/village/"
				}), { label: "Images Atelier" }),
				form_intro: fields.document({
					label: "Texte enrichi",
					formatting: { inlineMarks: {
						bold: true,
						italic: true
					} }
				})
			}
		}),
		contact_page: singleton({
			label: "Page Contact",
			path: "src/content/pages/contact",
			format: { data: "json" },
			schema: {
				form_tab_message: fields.text({
					label: "Onglet Message",
					defaultValue: "Message"
				}),
				form_tab_mission: fields.text({
					label: "Onglet Mission",
					defaultValue: "Confier une mission"
				}),
				form_titre_message: fields.text({
					label: "Titre Formulaire",
					defaultValue: "ENVOYER UN MESSAGE"
				}),
				form_titre_mission: fields.text({
					label: "Titre Mission",
					defaultValue: "CONFIER UNE MISSION"
				}),
				info_rdv_label: fields.text({
					label: "Label RDV",
					defaultValue: "PRENDRE RENDEZ-VOUS"
				}),
				rdv_texte: fields.document({
					label: "Texte enrichi",
					formatting: { inlineMarks: {
						bold: true,
						italic: true
					} }
				}),
				info_email_label: fields.text({
					label: "Label Email",
					defaultValue: "EMAIL"
				}),
				info_tel_label: fields.text({
					label: "Label Téléphone",
					defaultValue: "TÉLÉPHONE"
				}),
				info_adresse_label: fields.text({
					label: "Label Adresse",
					defaultValue: "NOUS TROUVER"
				}),
				info_bouton_label: fields.text({
					label: "Label Bouton Village",
					defaultValue: "VISITER LE VILLAGE"
				})
			}
		}),
		theme: singleton({
			label: "Thème et Couleurs",
			path: "src/content/theme/index",
			format: { data: "json" },
			schema: {
				c_bg: fields.text({
					label: "Couleur de fond (ex: #FAFAF8)",
					defaultValue: "#FAFAF8"
				}),
				c_text: fields.text({
					label: "Couleur du texte (ex: #1A1A18)",
					defaultValue: "#1A1A18"
				}),
				c_accent: fields.text({
					label: "Couleur d'accent (ex: #2E4D3F)",
					defaultValue: "#2E4D3F"
				}),
				c_accent_lt: fields.text({
					label: "Couleur d'accent clair (ex: #4A7A65)",
					defaultValue: "#4A7A65"
				}),
				c_muted: fields.text({
					label: "Couleur muette (ex: #888884)",
					defaultValue: "#888884"
				}),
				c_border: fields.text({
					label: "Couleur de bordure (ex: #E4E1DA)",
					defaultValue: "#E4E1DA"
				}),
				c_surface: fields.text({
					label: "Couleur de surface (ex: #F0EDE7)",
					defaultValue: "#F0EDE7"
				})
			}
		}),
		carousel: singleton({
			label: "Carousel Accueil",
			path: "src/content/carousel/index",
			format: { data: "json" },
			schema: { slides: fields.array(fields.object({
				title: fields.text({ label: "Titre" }),
				category: fields.text({ label: "Catégorie" }),
				year: fields.text({ label: "Année" }),
				image: fields.image({
					label: "Image",
					directory: "public/images/carousel",
					publicPath: "/images/carousel/"
				})
			}), {
				label: "Slides",
				itemLabel: (props) => props.fields.title.value || "Nouveau slide"
			}) }
		}),
		footer: singleton({
			label: "Pied de page",
			path: "src/content/footer/index",
			format: { data: "json" },
			schema: {
				legal: fields.text({
					label: "Texte légal",
					defaultValue: "© 2026 Atipics — Ressourcerie éclectique et polyvalente"
				}),
				links: fields.array(fields.object({
					label: fields.text({ label: "Label du lien" }),
					href: fields.text({ label: "URL" })
				}), {
					label: "Liens rapides",
					itemLabel: (props) => props.fields.label.value || "Nouveau lien"
				})
			}
		})
	}
});
//#endregion
//#region node_modules/@keystatic/astro/internal/keystatic-api.js
var keystatic_api_exports = /* @__PURE__ */ __exportAll({
	ALL: () => ALL,
	all: () => all,
	prerender: () => false
});
var all = makeHandler({ config: keystatic_config_default });
var ALL = all;
//#endregion
//#region \0virtual:astro:page:node_modules/@keystatic/astro/internal/keystatic-api@_@js
var page = () => keystatic_api_exports;
//#endregion
export { page };
