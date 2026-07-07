import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { E as createComponent, _ as maybeRenderHead, b as defineScriptVars, o as renderComponent, p as renderTemplate, y as addAttribute } from "./server_Chz1CeXz.mjs";
import "./compiler_onR2zt3j.mjs";
import { i as parametres_default, n as $$Header, r as $$Layout, t as $$Footer } from "./Footer_CFEuF_u5.mjs";
//#region src/content/projets/projet-a.json
var projet_a_exports = /* @__PURE__ */ __exportAll({
	category: () => category$3,
	cover: () => cover$3,
	default: () => projet_a_default,
	description: () => description$3,
	medias: () => medias$3,
	title: () => title$3,
	year: () => year$3
});
var title$3 = "Projet A";
var category$3 = "Artisanat";
var year$3 = "2024";
var description$3 = [{
	"type": "paragraph",
	"children": [{ "text": "Sélection et mise en scène d'objets artisanaux pour une résidence privée dans le sud de la France. Sourcing, restauration et scénographie sur-mesure." }]
}];
var cover$3 = "/images/projet1.jpg";
var medias$3 = [
	{
		"type": "image",
		"src": "/images/projet1.jpg",
		"alt": "Vue principale"
	},
	{
		"type": "image",
		"src": "/images/projet2.webp",
		"alt": "Détail"
	},
	{
		"type": "image",
		"src": "/images/projet3.jpg",
		"alt": "Ambiance générale"
	}
];
var projet_a_default = {
	title: title$3,
	category: category$3,
	year: year$3,
	description: description$3,
	cover: cover$3,
	medias: medias$3
};
//#endregion
//#region src/content/projets/projet-b.json
var projet_b_exports = /* @__PURE__ */ __exportAll({
	category: () => category$2,
	cover: () => cover$2,
	default: () => projet_b_default,
	description: () => description$2,
	medias: () => medias$2,
	title: () => title$2,
	year: () => year$2
});
var title$2 = "Projet B";
var category$2 = "Design circulaire";
var year$2 = "2024";
var description$2 = [{
	"type": "paragraph",
	"children": [{ "text": "Valorisation d'une collection de mobilier des années 70 pour un client collectionneur. Restauration complète, documentation et mise en vente sélective." }]
}];
var cover$2 = "/images/projet2.webp";
var medias$2 = [
	{
		"type": "image",
		"src": "/images/projet2.webp",
		"alt": "Vue principale"
	},
	{
		"type": "image",
		"src": "/images/projet4.webp",
		"alt": "Détail pièce"
	},
	{
		"type": "image",
		"src": "/images/projet1.jpg",
		"alt": "Contexte"
	}
];
var projet_b_default = {
	title: title$2,
	category: category$2,
	year: year$2,
	description: description$2,
	cover: cover$2,
	medias: medias$2
};
//#endregion
//#region src/content/projets/projet-c.json
var projet_c_exports = /* @__PURE__ */ __exportAll({
	category: () => category$1,
	cover: () => cover$1,
	default: () => projet_c_default,
	description: () => description$1,
	medias: () => medias$1,
	title: () => title$1,
	year: () => year$1
});
var title$1 = "Projet C";
var category$1 = "Architecture";
var year$1 = "2023";
var description$1 = [{
	"type": "paragraph",
	"children": [{ "text": "Scénographie d'une galerie éphémère pour une exposition d'architectures intérieures. Conception spatiale, sélection des œuvres et coordination logistique." }]
}];
var cover$1 = "/images/projet3.jpg";
var medias$1 = [
	{
		"type": "image",
		"src": "/images/projet3.jpg",
		"alt": "Vue d'ensemble"
	},
	{
		"type": "image",
		"src": "/images/projet1.jpg",
		"alt": "Détail installation"
	},
	{
		"type": "image",
		"src": "/images/projet2.webp",
		"alt": "Vue latérale"
	}
];
var projet_c_default = {
	title: title$1,
	category: category$1,
	year: year$1,
	description: description$1,
	cover: cover$1,
	medias: medias$1
};
//#endregion
//#region src/content/projets/projet-d.json
var projet_d_exports = /* @__PURE__ */ __exportAll({
	category: () => category,
	cover: () => cover,
	default: () => projet_d_default,
	description: () => description,
	medias: () => medias,
	title: () => title,
	year: () => year
});
var title = "Projet D";
var category = "Textile";
var year = "2023";
var description = [{
	"type": "paragraph",
	"children": [{ "text": "Curation d'une collection textile rare pour un hôtel de luxe. Recherche, acquisition et mise en valeur de pièces uniques tissées à la main." }]
}];
var cover = "/images/projet4.webp";
var medias = [
	{
		"type": "image",
		"src": "/images/projet4.webp",
		"alt": "Vue principale"
	},
	{
		"type": "image",
		"src": "/images/projet3.jpg",
		"alt": "Détail tissu"
	},
	{
		"type": "image",
		"src": "/images/projet2.webp",
		"alt": "Mise en scène"
	}
];
var projet_d_default = {
	title,
	category,
	year,
	description,
	cover,
	medias
};
//#endregion
//#region src/pages/projets.astro
var projets_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Projets,
	file: () => $$file,
	url: () => $$url
});
var $$Projets = createComponent(($$result, $$props, $$slots) => {
	const projets = Object.values(/* @__PURE__ */ Object.assign({
		"../content/projets/projet-a.json": projet_a_exports,
		"../content/projets/projet-b.json": projet_b_exports,
		"../content/projets/projet-c.json": projet_c_exports,
		"../content/projets/projet-d.json": projet_d_exports
	})).map((p) => p.default || p);
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {
		"title": `Projets — ${parametres_default.nom_site}`,
		"description": "Réalisations et projets de l'Agence Atipics",
		"data-astro-cid-tf46bhb6": true
	}, { "default": ($$result) => renderTemplate`${renderComponent($$result, "Header", $$Header, { "data-astro-cid-tf46bhb6": true })}${maybeRenderHead($$result)}<main style="padding-top: var(--nav-h); min-height: calc(100vh - var(--footer-h) - var(--social-bar-h));" data-astro-cid-tf46bhb6><!-- En-tête --><section class="page-header" data-astro-cid-tf46bhb6><div class="container" data-astro-cid-tf46bhb6><div class="page-header__row" data-astro-cid-tf46bhb6><span class="page-label" data-astro-cid-tf46bhb6>PROJETS</span><div class="page-rule" data-astro-cid-tf46bhb6></div></div></div></section><!-- Grille projets --><section class="projets" data-astro-cid-tf46bhb6><div class="container" data-astro-cid-tf46bhb6><div class="projets__grid" id="projets-grid" data-astro-cid-tf46bhb6>${projets.map((p, i) => renderTemplate`<article class="proj-card"${addAttribute(i, "data-index")} role="button" tabindex="0"${addAttribute(`Ouvrir ${p.title}`, "aria-label")} data-astro-cid-tf46bhb6><div class="proj-card__media" data-astro-cid-tf46bhb6><img${addAttribute(p.cover, "src")}${addAttribute(p.title, "alt")} class="proj-card__img" loading="lazy" data-astro-cid-tf46bhb6></div><div class="proj-card__info" data-astro-cid-tf46bhb6><span class="proj-card__cat" data-astro-cid-tf46bhb6>${p.category} — ${p.year}</span><h2 class="proj-card__title" data-astro-cid-tf46bhb6>${p.title}</h2></div></article>`)}</div></div></section></main>${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-tf46bhb6": true })}` })}<!-- Lightbox --><div class="lightbox" id="lightbox" role="dialog" aria-modal="true" aria-label="Visionneuse projet" hidden data-astro-cid-tf46bhb6><div class="lightbox__inner" data-astro-cid-tf46bhb6><button class="lightbox__close" id="lb-close" aria-label="Fermer" data-astro-cid-tf46bhb6><svg width="16" height="16" viewBox="0 0 18 18" fill="none" data-astro-cid-tf46bhb6><path d="M1 1l16 16M17 1L1 17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" data-astro-cid-tf46bhb6></path></svg></button><!-- Média principal --><div class="lightbox__stage" data-astro-cid-tf46bhb6><button class="lightbox__nav lightbox__nav--prev" id="lb-prev" aria-label="Précédent" data-astro-cid-tf46bhb6><svg width="20" height="20" viewBox="0 0 24 24" fill="none" data-astro-cid-tf46bhb6><path d="M15 18l-6-6 6-6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-tf46bhb6></path></svg></button><div class="lightbox__media-wrap" id="lb-media-wrap" data-astro-cid-tf46bhb6><!-- injecté par JS --></div><button class="lightbox__nav lightbox__nav--next" id="lb-next" aria-label="Suivant" data-astro-cid-tf46bhb6><svg width="20" height="20" viewBox="0 0 24 24" fill="none" data-astro-cid-tf46bhb6><path d="M9 18l6-6-6-6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-tf46bhb6></path></svg></button></div><!-- Miniatures --><div class="lightbox__thumbs" id="lb-thumbs" data-astro-cid-tf46bhb6></div><!-- Infos projet --><div class="lightbox__meta" id="lb-meta" data-astro-cid-tf46bhb6></div></div></div><div class="lightbox__backdrop" id="lb-backdrop" data-astro-cid-tf46bhb6></div><script>(function(){${defineScriptVars({ projets })}
  const lb        = document.getElementById('lightbox');
  const backdrop  = document.getElementById('lb-backdrop');
  const closeBtn  = document.getElementById('lb-close');
  const prevBtn   = document.getElementById('lb-prev');
  const nextBtn   = document.getElementById('lb-next');
  const mediaWrap = document.getElementById('lb-media-wrap');
  const thumbsEl  = document.getElementById('lb-thumbs');
  const metaEl    = document.getElementById('lb-meta');

  let currentProjet = null;
  let currentMedia  = 0;

  // ── helpers ──────────────────────────────────────────
  function mediaEl(m) {
    if (m.type === 'video') {
      const v = document.createElement('video');
      v.src = m.src; v.controls = true; v.autoplay = false;
      v.style.cssText = 'width:100%;aspect-ratio:16/9;background:#000;display:block;';
      return v;
    }
    const img = document.createElement('img');
    img.src = m.src; img.alt = m.alt || '';
    img.style.cssText = 'width:100%;aspect-ratio:16/10;object-fit:cover;display:block;';
    return img;
  }

  function renderAstToHtml(ast) {
    if (!Array.isArray(ast)) return ast || '';
    return ast.map(node => {
      if (node.type === 'paragraph') {
        return '<p>' + node.children.map(child => {
          let text = child.text || '';
          if (child.bold) text = '<strong>' + text + '</strong>';
          if (child.italic) text = '<em>' + text + '</em>';
          return text;
        }).join('') + '</p>';
      }
      return '';
    }).join('');
  }

  function renderMedia(idx) {
    const m = currentProjet.medias[idx];
    mediaWrap.innerHTML = '';
    mediaWrap.appendChild(mediaEl(m));
    currentMedia = idx;
    // counter
    const counter = mediaWrap.parentElement.querySelector('.lb-counter');
    if (counter) counter.textContent = \`\${idx + 1} / \${currentProjet.medias.length}\`;
    // thumbs active
    thumbsEl.querySelectorAll('.lb-thumb').forEach((t, i) => {
      t.classList.toggle('lb-thumb--active', i === idx);
    });
  }

  function openLightbox(projet, startMedia = 0) {
    currentProjet = projet;
    const single = projet.medias.length <= 1;

    // arrows — masqués si une seule image
    prevBtn.style.display = single ? 'none' : '';
    nextBtn.style.display = single ? 'none' : '';

    // thumbs
    thumbsEl.innerHTML = '';
    thumbsEl.style.display = single ? 'none' : '';
    if (!single) {
      projet.medias.forEach((m, i) => {
        const btn = document.createElement('button');
        btn.className = 'lb-thumb';
        btn.setAttribute('aria-label', \`Média \${i + 1}\`);
        if (m.type === 'video') {
          btn.innerHTML = \`<span class="lb-thumb__play">▶</span>\`;
        } else {
          const img = document.createElement('img');
          img.src = m.src; img.alt = ''; img.loading = 'lazy';
          btn.appendChild(img);
        }
        btn.addEventListener('click', () => renderMedia(i));
        thumbsEl.appendChild(btn);
      });
    }

    // meta redessinée
    const pageUrl = encodeURIComponent(window.location.href);
    const pageTitle = encodeURIComponent(projet.title);
    const coverUrl = encodeURIComponent(projet.medias[0]?.src ?? '');
    metaEl.innerHTML = \`
      <div class="lb-meta__header">
        <h2 class="lb-meta__title">\${projet.title}</h2>
        <span class="lb-meta__tag">\${projet.category} — \${projet.year}</span>
      </div>
      \${projet.description ? \`<div class="lb-meta__desc">\${renderAstToHtml(projet.description)}</div>\` : ''}
      <div class="lb-meta__share">
        <span class="lb-meta__share-label">Partager</span>
        <a href="https://instagram.com/atipics" target="_blank" rel="noopener" class="lb-share-btn" aria-label="Instagram" style="--c:#E1306C"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/></svg></a>
        <a href="https://pinterest.com/pin/create/button/?url=\${pageUrl}&media=\${coverUrl}&description=\${pageTitle}" target="_blank" rel="noopener" class="lb-share-btn" aria-label="Pinterest" style="--c:#E60023"><svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.24 2.65 7.86 6.39 9.29-.09-.78-.17-1.98.03-2.83.19-.77 1.26-5.33 1.26-5.33s-.32-.64-.32-1.59c0-1.49.87-2.6 1.94-2.6.92 0 1.36.69 1.36 1.51 0 .92-.59 2.3-.89 3.58-.25 1.07.53 1.94 1.58 1.94 1.9 0 3.17-2.43 3.17-5.31 0-2.19-1.47-3.85-4.15-3.85-3.03 0-4.91 2.26-4.91 4.79 0 .87.26 1.48.67 1.96.19.22.21.31.14.57-.05.18-.16.63-.2.8-.06.25-.25.34-.47.25-1.32-.54-1.93-2-1.93-3.63 0-2.7 2.28-5.96 6.8-5.96 3.64 0 6.04 2.64 6.04 5.47 0 3.75-2.07 6.56-5.12 6.56-1.02 0-2-.55-2.33-1.18l-.65 2.53c-.23.86-.68 1.72-1.1 2.39.83.25 1.7.39 2.61.39 5.52 0 10-4.48 10-10S17.52 2 12 2z"/></svg></a>
        <a href="https://www.facebook.com/sharer/sharer.php?u=\${pageUrl}" target="_blank" rel="noopener" class="lb-share-btn" aria-label="Facebook" style="--c:#1877F2"><svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg></a>
        <a href="https://www.linkedin.com/sharing/share-offsite/?url=\${pageUrl}" target="_blank" rel="noopener" class="lb-share-btn" aria-label="LinkedIn" style="--c:#0A66C2"><svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg></a>
        <a href="https://atipics.substack.com" target="_blank" rel="noopener" class="lb-share-btn" aria-label="Substack" style="--c:#FF6719"><svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z"/></svg></a>
        <a href="https://wa.me/?text=\${pageTitle}%20\${pageUrl}" target="_blank" rel="noopener" class="lb-share-btn" aria-label="WhatsApp" style="--c:#25D366"><svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg></a>
        <a href="mailto:contact@atipics.fr" class="lb-share-btn" aria-label="Email" style="--c:#888884"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg></a>
      </div>
    \`;

    renderMedia(startMedia);

    lb.hidden = false;
    backdrop.classList.add('is-visible');
    document.body.style.overflow = 'hidden';
    closeBtn.focus();
  }

  function closeLightbox() {
    lb.hidden = true;
    backdrop.classList.remove('is-visible');
    document.body.style.overflow = '';
    currentProjet = null;
    // stop any video
    mediaWrap.querySelectorAll('video').forEach(v => v.pause());
  }

  // ── events ───────────────────────────────────────────
  document.querySelectorAll('.proj-card').forEach((card) => {
    const handler = () => {
      const idx = parseInt(card.dataset.index, 10);
      openLightbox(projets[idx]);
    };
    card.addEventListener('click', handler);
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); handler(); }
    });
  });

  closeBtn.addEventListener('click', closeLightbox);
  backdrop.addEventListener('click', closeLightbox);
  lb.addEventListener('click', (e) => { if (e.target === lb) closeLightbox(); });

  prevBtn.addEventListener('click', () => {
    const n = (currentMedia - 1 + currentProjet.medias.length) % currentProjet.medias.length;
    renderMedia(n);
  });
  nextBtn.addEventListener('click', () => {
    const n = (currentMedia + 1) % currentProjet.medias.length;
    renderMedia(n);
  });

  document.addEventListener('keydown', (e) => {
    if (lb.hidden) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') prevBtn.click();
    if (e.key === 'ArrowRight') nextBtn.click();
  });
})();<\/script>`;
}, "C:/Users/ninad/Desktop/atipics/src/pages/projets.astro", void 0);
var $$file = "C:/Users/ninad/Desktop/atipics/src/pages/projets.astro";
var $$url = "/projets";
//#endregion
//#region \0virtual:astro:page:src/pages/projets@_@astro
var page = () => projets_exports;
//#endregion
export { page };
