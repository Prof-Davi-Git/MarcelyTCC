(() => {
  "use strict";

  const STORAGE = {
    theme: "lia-theme",
    contrast: "lia-contrast",
    font: "lia-font-size",
    language: "lia-language"
  };

  const translations = {
    pt: {
      accessibility: "Acessibilidade",
      close: "Fechar",
      fontSize: "Tamanho do texto",
      fontIncrease: "A+ Aumentar",
      fontDecrease: "A− Diminuir",
      language: "Idioma",
      visual: "Visual",
      theme: "Tema claro/escuro",
      contrast: "Alto contraste",
      openMenu: "Abrir acessibilidade",
      closeMenu: "Fechar acessibilidade"
    },

    en: {
      accessibility: "Accessibility",
      close: "Close",
      fontSize: "Text size",
      fontIncrease: "A+ Increase",
      fontDecrease: "A− Decrease",
      language: "Language",
      visual: "Appearance",
      theme: "Light/dark theme",
      contrast: "High contrast",
      openMenu: "Open accessibility",
      closeMenu: "Close accessibility"
    },

    es: {
      accessibility: "Accesibilidad",
      close: "Cerrar",
      fontSize: "Tamaño del texto",
      fontIncrease: "A+ Aumentar",
      fontDecrease: "A− Disminuir",
      language: "Idioma",
      visual: "Apariencia",
      theme: "Tema claro/oscuro",
      contrast: "Alto contraste",
      openMenu: "Abrir accesibilidad",
      closeMenu: "Cerrar accesibilidad"
    }
  };

  function getSaved(key, fallback) {
    try {
      return localStorage.getItem(key) || fallback;
    } catch (error) {
      return fallback;
    }
  }

  function save(key, value) {
    try {
      localStorage.setItem(key, value);
    } catch (error) {
      // O site continua funcionando mesmo sem armazenamento.
    }
  }

  function getLanguage() {
    const language = getSaved(STORAGE.language, "pt");
    return translations[language] ? language : "pt";
  }

  function applyTheme(theme) {
    const selected =
      theme === "escuro" || theme === "dark" ? "escuro" : "claro";

    document.documentElement.dataset.liaTheme = selected;

    document.documentElement.dataset.theme =
      selected === "escuro" ? "dark" : "light";

    document.body.setAttribute(
      "data-theme",
      selected === "escuro" ? "dark" : "light"
    );

    save(STORAGE.theme, selected);
  }

  function applyContrast(enabled) {
    document.documentElement.classList.toggle(
      "lia-alto-contraste",
      enabled
    );

    document.documentElement.classList.toggle(
      "high-contrast",
      enabled
    );

    save(STORAGE.contrast, String(enabled));
  }

  function applyFont(size) {
    const safeSize = Math.min(1.25, Math.max(0.9, size));

    document.documentElement.style.setProperty(
      "--lia-font-scale",
      String(safeSize)
    );

    document.documentElement.style.setProperty(
      "--base-font",
      `${safeSize * 16}px`
    );

    save(STORAGE.font, String(safeSize));
  }

  function applyLanguage(language) {
    const selected = translations[language] ? language : "pt";
    const words = translations[selected];

    document.documentElement.lang =
      selected === "pt" ? "pt-BR" : selected;

    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const key = element.dataset.i18n;

      if (words[key]) {
        element.textContent = words[key];
      }
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
      const key = element.dataset.i18nPlaceholder;

      if (words[key]) {
        element.setAttribute("placeholder", words[key]);
      }
    });

    document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
      const key = element.dataset.i18nAriaLabel;

      if (words[key]) {
        element.setAttribute("aria-label", words[key]);
      }
    });

    const languageSelects = [
      document.getElementById("lia-idioma"),
      document.getElementById("languageSelect")
    ];

    languageSelects.forEach((select) => {
      if (select) {
        select.value = selected;
      }
    });

    const button = document.getElementById("lia-acessibilidade-botao");
    const panel = document.getElementById("lia-acessibilidade-painel");

    if (button) {
      button.textContent = words.accessibility;

      button.setAttribute(
        "aria-label",
        panel && !panel.hidden ? words.closeMenu : words.openMenu
      );
    }

    if (panel) {
      panel.querySelector(".lia-acessibilidade-fechar").textContent =
        words.close;

      panel.querySelector("h2").textContent = words.accessibility;

      panel.querySelector("#lia-label-fonte").textContent =
        words.fontSize;

      panel.querySelector("#lia-fonte-menos").textContent =
        words.fontDecrease;

      panel.querySelector("#lia-fonte-mais").textContent =
        words.fontIncrease;

      panel.querySelector("#lia-label-idioma").textContent =
        words.language;

      panel.querySelector("#lia-label-visual").textContent =
        words.visual;

      panel.querySelector("#lia-tema").textContent =
        words.theme;

      panel.querySelector("#lia-contraste").textContent =
        words.contrast;
    }

    save(STORAGE.language, selected);
  }

  function adicionarEstilos() {
    if (document.getElementById("lia-acessibilidade-estilos")) {
      return;
    }

    const style = document.createElement("style");
    style.id = "lia-acessibilidade-estilos";

    style.textContent = `
      html {
        scroll-behavior: smooth;
      }

      html[data-lia-theme="escuro"] body {
        background: #211d25;
        color: #f8f1fa;
      }

      html[data-lia-theme="escuro"] header,
      html[data-lia-theme="escuro"] main,
      html[data-lia-theme="escuro"] section,
      html[data-lia-theme="escuro"] article,
      html[data-lia-theme="escuro"] footer,
      html[data-lia-theme="escuro"] .card,
      html[data-lia-theme="escuro"] .news-card,
      html[data-lia-theme="escuro"] .help-panel {
        background-color: #302a35;
        color: #f8f1fa;
      }

      html[data-lia-theme="escuro"] p,
      html[data-lia-theme="escuro"] small,
      html[data-lia-theme="escuro"] label,
      html[data-lia-theme="escuro"] h1,
      html[data-lia-theme="escuro"] h2,
      html[data-lia-theme="escuro"] h3 {
        color: inherit;
      }

      html.lia-alto-contraste body,
      html.high-contrast body {
        background: #000 !important;
        color: #fff !important;
      }

      html.lia-alto-contraste body *,
      html.high-contrast body * {
        border-color: #ffeb3b !important;
      }

      html.lia-alto-contraste a,
      html.lia-alto-contraste button,
      html.high-contrast a,
      html.high-contrast button {
        color: #ffeb3b !important;
        outline-color: #ffeb3b !important;
      }

      .lia-controles-topo {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        flex-wrap: wrap;
        gap: 10px;
      }

      .lia-acessibilidade-abrir {
        position: static !important;
        inset: auto !important;
        transform: none !important;
        display: inline-flex !important;
        align-items: center;
        justify-content: center;
        gap: 7px;
        min-height: 40px;
        box-sizing: border-box;
        padding: 8px 15px;
        border: 1px solid #e5d7e8 !important;
        border-radius: 30px;
        background: #fbf7fc !important;
        color: #765d80 !important;
        font-family: "DM Sans", Arial, sans-serif;
        font-size: .86rem;
        font-weight: 400;
        letter-spacing: 0;
        box-shadow: none !important;
        cursor: pointer;
      }

      .lia-acessibilidade-abrir:hover {
        background: #f3ebf6 !important;
        border-color: #d7c4df !important;
      }

      .lia-acessibilidade-painel {
        position: fixed;
        z-index: 99999;
        top: 88px;
        right: 4%;
        width: min(340px, calc(100vw - 32px));
        max-height: 75vh;
        overflow-y: auto;
        box-sizing: border-box;
        padding: 22px;
        background: #fffafd;
        color: #51445a;
        border: 1px solid #eaddec;
        border-radius: 18px;
        box-shadow: 0 12px 35px rgba(70, 45, 75, .12);
        font-family: "DM Sans", Arial, sans-serif;
      }

      .lia-acessibilidade-painel[hidden] {
        display: none !important;
      }

      .lia-acessibilidade-painel h2 {
        margin: 0 0 18px;
        color: #795e86;
        font-family: "Playfair Display", Georgia, serif;
        font-size: 1.3rem;
        font-weight: 400;
      }

      .lia-acessibilidade-painel label {
        display: block;
        margin: 15px 0 7px;
        color: #685a6d;
        font-size: .9rem;
        font-weight: 400;
      }

      .lia-acessibilidade-painel button,
      .lia-acessibilidade-painel select {
        min-height: 39px;
        padding: 8px 12px;
        border: 1px solid #e5d8e9;
        border-radius: 9px;
        background: #fbf7fc;
        color: #65536d;
        font-family: "DM Sans", Arial, sans-serif;
        font-size: .85rem;
        font-weight: 400;
        cursor: pointer;
      }

      .lia-acessibilidade-painel button:hover {
        background: #f2eaf5;
      }

      .lia-acessibilidade-acoes {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
      }

      .lia-acessibilidade-fechar {
        float: right;
      }

      .lia-acessibilidade-painel button:focus-visible,
      .lia-acessibilidade-painel select:focus-visible,
      .lia-acessibilidade-abrir:focus-visible {
        outline: 3px solid #9b72aa;
        outline-offset: 3px;
      }

      @media (max-width: 650px) {
        .lia-acessibilidade-abrir {
          min-height: 36px;
          padding: 7px 11px;
          font-size: .78rem;
        }

        .lia-acessibilidade-painel {
          top: 80px;
          right: 12px;
          width: min(340px, calc(100vw - 24px));
        }
      }
    `;

    document.head.appendChild(style);
  }

  function prepararAreaDosBotoes() {
    let header = document.querySelector("header");

    if (!header) {
      header = document.createElement("header");
      header.className = "lia-cabecalho-global";
      document.body.prepend(header);
    }

    let controles = header.querySelector(".lia-controles-topo");

    if (!controles) {
      controles = document.createElement("div");
      controles.className = "lia-controles-topo";
      header.appendChild(controles);
    }

    const voltar = header.querySelector(".lia-voltar-pagina");

    if (voltar && voltar.parentElement !== controles) {
      controles.prepend(voltar);
    }

    return controles;
  }

  function localizarBotoesAntigos() {
    const todos = Array.from(
      document.querySelectorAll("button, a, [role='button']")
    );

    return todos.filter((element) => {
      const id = (element.id || "").toLowerCase();

      const classe = (element.className || "")
        .toString()
        .toLowerCase();

      const texto = (element.textContent || "")
        .trim()
        .toLowerCase();

      const aria = (element.getAttribute("aria-label") || "")
        .toLowerCase();

      const identificador =
        id.includes("accessibility") ||
        id.includes("acessibilidade") ||
        classe.includes("accessibility") ||
        classe.includes("acessibilidade") ||
        aria.includes("accessibility") ||
        aria.includes("acessibilidade");

      const textoDeAcessibilidade =
        /^(♿\s*)?(acessibilidade|accessibility)$/.test(texto);

      return identificador || textoDeAcessibilidade;
    });
  }

  function criarBotaoUnico(controles) {
    const antigos = localizarBotoesAntigos();

    let button = antigos.find(
      (item) => item.tagName.toLowerCase() === "button"
    );

    if (button) {
      const novoBotao = button.cloneNode(true);
      button.replaceWith(novoBotao);
      button = novoBotao;
    } else {
      button = document.createElement("button");
    }

    antigos.forEach((item) => {
      if (item !== button && item.isConnected) {
        item.remove();
      }
    });

    button.type = "button";
    button.id = "lia-acessibilidade-botao";
    button.className = "lia-acessibilidade-abrir";
    button.textContent = "Acessibilidade";

    button.setAttribute("aria-expanded", "false");
    button.setAttribute(
      "aria-controls",
      "lia-acessibilidade-painel"
    );

    controles.appendChild(button);

    return button;
  }

  function criarPainel() {
    document.getElementById("accessibilityPanel")?.remove();
    document.getElementById("lia-acessibilidade-painel")?.remove();

    const panel = document.createElement("section");

    panel.id = "lia-acessibilidade-painel";
    panel.className = "lia-acessibilidade-painel";

    panel.setAttribute(
      "aria-label",
      "Configurações de acessibilidade"
    );

    panel.setAttribute("aria-labelledby", "lia-acessibilidade-titulo");
    panel.hidden = true;

    panel.innerHTML = `
      <button
        type="button"
        class="lia-acessibilidade-fechar"
        aria-label="Fechar acessibilidade"
      >
        Fechar
      </button>

      <h2 id="lia-acessibilidade-titulo">Acessibilidade</h2>

      <label id="lia-label-fonte" for="lia-fonte-menos">
        Tamanho do texto
      </label>

      <div class="lia-acessibilidade-acoes">
        <button type="button" id="lia-fonte-menos">
          A− Diminuir
        </button>

        <button type="button" id="lia-fonte-mais">
          A+ Aumentar
        </button>
      </div>

      <label id="lia-label-idioma" for="lia-idioma">
        Idioma
      </label>

      <select id="lia-idioma">
        <option value="pt">Português</option>
        <option value="en">English</option>
        <option value="es">Español</option>
      </select>

      <label id="lia-label-visual">Visual</label>

      <div class="lia-acessibilidade-acoes">
        <button type="button" id="lia-tema">
          Tema claro/escuro
        </button>

        <button type="button" id="lia-contraste">
          Alto contraste
        </button>
      </div>
    `;

    document.body.appendChild(panel);

    return panel;
  }

  function conectarEventos(button, panel) {
    button.addEventListener("click", () => {
      panel.hidden = !panel.hidden;

      button.setAttribute(
        "aria-expanded",
        String(!panel.hidden)
      );

      applyLanguage(getLanguage());

      if (!panel.hidden) {
        panel.querySelector(".lia-acessibilidade-fechar").focus();
      }
    });

    panel.querySelector(".lia-acessibilidade-fechar")
      .addEventListener("click", () => {
        fecharPainel(button, panel);
      });

    panel.querySelector("#lia-fonte-mais")
      .addEventListener("click", () => {
        const atual = Number(getSaved(STORAGE.font, "1"));
        applyFont(atual + 0.05);
      });

    panel.querySelector("#lia-fonte-menos")
      .addEventListener("click", () => {
        const atual = Number(getSaved(STORAGE.font, "1"));
        applyFont(atual - 0.05);
      });

    panel.querySelector("#lia-tema")
      .addEventListener("click", () => {
        const atual = getSaved(STORAGE.theme, "claro");

        applyTheme(
          atual === "escuro" || atual === "dark"
            ? "claro"
            : "escuro"
        );
      });

    panel.querySelector("#lia-contraste")
      .addEventListener("click", () => {
        const atual =
          getSaved(STORAGE.contrast, "false") === "true";

        applyContrast(!atual);
      });

    panel.querySelector("#lia-idioma")
      .addEventListener("change", (event) => {
        applyLanguage(event.target.value);
      });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && !panel.hidden) {
        fecharPainel(button, panel);
      }
    });

    document.addEventListener("click", (event) => {
      if (
        !panel.hidden &&
        !panel.contains(event.target) &&
        !button.contains(event.target)
      ) {
        fecharPainel(button, panel);
      }
    });
  }

  function fecharPainel(button, panel) {
    panel.hidden = true;

    button.setAttribute("aria-expanded", "false");

    applyLanguage(getLanguage());

    button.focus();
  }

  function init() {
    if (document.getElementById("lia-acessibilidade-botao")) {
      return;
    }

    adicionarEstilos();

    const controles = prepararAreaDosBotoes();
    const button = criarBotaoUnico(controles);
    const panel = criarPainel();

    conectarEventos(button, panel);

    applyTheme(getSaved(STORAGE.theme, "claro"));

    applyContrast(
      getSaved(STORAGE.contrast, "false") === "true"
    );

    applyFont(
      Number(getSaved(STORAGE.font, "1"))
    );

    applyLanguage(getLanguage());

    const mainLanguage =
      document.getElementById("languageSelect");

    if (mainLanguage) {
      mainLanguage.addEventListener("change", (event) => {
        applyLanguage(event.target.value);
      });
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();