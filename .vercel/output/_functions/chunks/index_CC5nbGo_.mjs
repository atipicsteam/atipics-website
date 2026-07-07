import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { E as createComponent, _ as maybeRenderHead, b as defineScriptVars, o as renderComponent, p as renderTemplate, y as addAttribute } from "./server_Chz1CeXz.mjs";
import "./compiler_onR2zt3j.mjs";
import { i as parametres_default, n as $$Header, r as $$Layout, t as $$Footer } from "./Footer_CFEuF_u5.mjs";
var carousel_default = { slides: [
	{
		"title": "Projet A",
		"category": "Artisanat",
		"year": "2024",
		"image": "/images/projet1.jpg"
	},
	{
		"title": "Projet B",
		"category": "Design circulaire",
		"year": "2024",
		"image": "/images/projet2.webp"
	},
	{
		"title": "Projet C",
		"category": "Architecture",
		"year": "2023",
		"image": "/images/projet3.jpg"
	},
	{
		"title": "Projet D",
		"category": "Textile",
		"year": "2023",
		"image": "/images/projet4.webp"
	}
] };
//#endregion
//#region src/components/Carousel.astro
var $$Carousel = createComponent(($$result, $$props, $$slots) => {
	const slides = carousel_default.slides;
	return renderTemplate`${maybeRenderHead($$result)}<section class="carousel" aria-label="Projets en vedette" data-astro-cid-oulirr76><div class="carousel__track" data-astro-cid-oulirr76>${slides.map((slide, i) => renderTemplate`<div${addAttribute(["carousel__slide", { "is-active": i === 0 }], "class:list")}${addAttribute(i !== 0, "aria-hidden")} data-astro-cid-oulirr76><img${addAttribute(slide.image, "src")}${addAttribute(slide.title, "alt")} class="carousel__img" data-astro-cid-oulirr76><div class="carousel__overlay" data-astro-cid-oulirr76></div><div class="carousel__content" data-astro-cid-oulirr76><span class="carousel__category" data-astro-cid-oulirr76>${slide.category} — ${slide.year}</span><h2 class="carousel__title" data-astro-cid-oulirr76>${slide.title}</h2></div></div>`)}</div><button class="carousel__arrow carousel__arrow--prev" aria-label="Projet précédent" data-astro-cid-oulirr76><svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true" data-astro-cid-oulirr76><path d="M15 18l-6-6 6-6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-oulirr76></path></svg></button><button class="carousel__arrow carousel__arrow--next" aria-label="Projet suivant" data-astro-cid-oulirr76><svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true" data-astro-cid-oulirr76><path d="M9 18l6-6-6-6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-oulirr76></path></svg></button><div class="carousel__dots" data-astro-cid-oulirr76>${slides.map((_, i) => renderTemplate`<button${addAttribute(["carousel__dot", { "is-active": i === 0 }], "class:list")}${addAttribute(`Projet ${i + 1}`, "aria-label")} data-astro-cid-oulirr76></button>`)}</div><div class="carousel__progress" data-astro-cid-oulirr76><div class="carousel__progress-bar" data-astro-cid-oulirr76></div></div></section><script>(function(){${defineScriptVars({ interval: 5e3 })}
  (function () {
    const slides = document.querySelectorAll(".carousel__slide");
    const dots = document.querySelectorAll(".carousel__dot");
    const bar = document.querySelector(".carousel__progress-bar");
    const prevBtn = document.querySelector(".carousel__arrow--prev");
    const nextBtn = document.querySelector(".carousel__arrow--next");
    let current = 0;
    let timer;

    function goTo(n) {
      slides[current].classList.remove("is-active");
      slides[current].setAttribute("aria-hidden", "true");
      dots[current]?.classList.remove("is-active");
      current = ((n % slides.length) + slides.length) % slides.length;
      slides[current].classList.add("is-active");
      slides[current].setAttribute("aria-hidden", "false");
      dots[current]?.classList.add("is-active");
      resetBar();
    }

    function resetBar() {
      if (!bar) return;
      bar.style.transition = "none";
      bar.style.width = "0%";
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          bar.style.transition = \`width \${interval}ms linear\`;
          bar.style.width = "100%";
        });
      });
    }

    function start() {
      timer = setInterval(() => goTo(current + 1), interval);
      resetBar();
    }
    function stop() {
      clearInterval(timer);
      if (bar) bar.style.transition = "none";
    }

    dots.forEach((dot, i) => {
      dot.addEventListener("click", () => { stop(); goTo(i); start(); });
    });

    prevBtn?.addEventListener("click", () => { stop(); goTo(current - 1); start(); });
    nextBtn?.addEventListener("click", () => { stop(); goTo(current + 1); start(); });

    const carousel = document.querySelector(".carousel");
    carousel?.addEventListener("mouseenter", stop);
    carousel?.addEventListener("mouseleave", start);

    start();
  })();
})();<\/script>`;
}, "C:/Users/ninad/Desktop/atipics/src/components/Carousel.astro", void 0);
//#endregion
//#region src/pages/index.astro
var pages_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	url: () => ""
});
var $$Index = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {
		"title": parametres_default.nom_site,
		"description": parametres_default.description_site
	}, { "default": ($$result) => renderTemplate`${renderComponent($$result, "Header", $$Header, {})}${maybeRenderHead($$result)}<main style="padding-top: var(--nav-h);">${renderComponent($$result, "Carousel", $$Carousel, {})}</main>${renderComponent($$result, "Footer", $$Footer, { "fixed": true })}` })}`;
}, "C:/Users/ninad/Desktop/atipics/src/pages/index.astro", void 0);
var $$file = "C:/Users/ninad/Desktop/atipics/src/pages/index.astro";
//#endregion
//#region \0virtual:astro:page:src/pages/index@_@astro
var page = () => pages_exports;
//#endregion
export { page };
