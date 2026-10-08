(function () {
  const M = window.MENU;
  const UI = {
    es: { menu: "Menú", lang: "EN", langLabel: "Switch to English", follow: "Síguenos", close: "Cerrar" },
    en: { menu: "Menu", lang: "ES", langLabel: "Cambiar a español", follow: "Follow us", close: "Close" }
  };
  let lang = "es";
  try {
    lang = new URLSearchParams(location.search).get("lang") || localStorage.getItem("malabar-lang") ||
      ((navigator.language || "es").toLowerCase().startsWith("es") ? "es" : "en");
  } catch (e) {}
  if (lang !== "en") lang = "es";

  const $ = (s, r = document) => r.querySelector(s);
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const price = (p) => (p == null ? "" : `<span class="price">${M.currency}${Number(p).toFixed(2)}</span>`);
  const squiggle = `<svg class="squiggle" viewBox="0 0 120 12" aria-hidden="true"><path d="M2 6c6-6 12-6 18 0s12 6 18 0 12-6 18 0 12 6 18 0 12-6 18 0 12 6 18 0" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"/></svg>`;

  function render() {
    document.documentElement.lang = lang;
    $("#tagline").textContent = M.tagline[lang];
    $("#menuLabel").textContent = UI[lang].menu;
    const lb = $("#lang");
    lb.textContent = UI[lang].lang;
    lb.setAttribute("aria-label", UI[lang].langLabel);
    $("#follow").textContent = UI[lang].follow;

    $("#tabs").innerHTML = M.sections.map((s) =>
      `<a href="#${s.id}" class="tab c-${s.color}" data-id="${s.id}">${esc(s.name[lang])}</a>`).join("");

    $("#menu").innerHTML = M.sections.map((s) => `
      <section id="${s.id}" class="sec c-${s.color}">
        <h2><span>${esc(s.name[lang])}</span>${squiggle}</h2>
        <div class="items">
          ${s.items.map((it) => `
            <article class="dish">
              <button class="ph" data-img="${it.img}" aria-label="${esc(it.name[lang])}">
                <img src="img/${it.img}.jpg" alt="${esc(it.name[lang])}" loading="lazy" width="400" height="300">
              </button>
              <div class="txt">
                <div class="row"><h3>${esc(it.name[lang])}</h3>${price(it.price)}</div>
                <p>${esc(it.desc[lang])}</p>
              </div>
            </article>`).join("")}
        </div>
      </section>`).join("");
    spy();
  }

  // Resalta la pestaña de la sección visible
  let io;
  function spy() {
    if (io) io.disconnect();
    io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        document.querySelectorAll(".tab").forEach((t) => {
          const on = t.dataset.id === e.target.id;
          t.classList.toggle("on", on);
          // Solo desplaza la barra de pestañas (scrollIntoView movía la página entera)
          if (on) {
            const bar = t.parentElement;
            bar.scrollTo({ left: t.offsetLeft - bar.offsetLeft - (bar.clientWidth - t.offsetWidth) / 2, behavior: "smooth" });
          }
        });
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    document.querySelectorAll(".sec").forEach((s) => io.observe(s));
  }

  // Foto en grande
  document.addEventListener("click", (e) => {
    const b = e.target.closest(".ph");
    if (b) {
      const d = b.closest(".dish");
      $("#lb-img").src = `img/${b.dataset.img}.jpg`;
      $("#lb-img").alt = $("h3", d).textContent;
      $("#lb-cap").textContent = $("h3", d).textContent;
      $("#lb").classList.add("open");
      return;
    }
    if (e.target.closest("#lb")) $("#lb").classList.remove("open");
  });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") $("#lb").classList.remove("open"); });

  $("#lang").addEventListener("click", () => {
    lang = lang === "es" ? "en" : "es";
    try { localStorage.setItem("malabar-lang", lang); } catch (e) {}
    render();
  });

  render();
})();
