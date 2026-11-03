MIME-Version: 1.0
Date: Fri, 30 Oct 2026 17:12:04 -0300
Message-ID: <CADa5m5woB3pKh9mRE5hTzbRJ6pA3w=62XBYyUeUUniuo0ztqDg@mail.gmail.com>
Subject: tcc atualizado acessibilidade js 
From: Marcely Castro Rodrigues <castrorodriguesmarcely@gmail.com>
To: Marcely Castro Rodrigues <castrorodriguesmarcely@gmail.com>
Content-Type: multipart/alternative; boundary="00000000000031cf3e065f1466d4"

--00000000000031cf3e065f1466d4
Content-Type: text/plain; charset="UTF-8"
Content-Transfer-Encoding: quoted-printable

(() =3D> {
  "use strict";

  const STORAGE =3D {
    theme: "lia-theme",
    contrast: "lia-contrast",
    font: "lia-font-size",
    language: "lia-language"
  };

  const translations =3D {
    pt: {
      home: "In=C3=ADcio",
      history: "Hist=C3=B3ria",
      project: "Projeto",
      violences: "Tipos de viol=C3=AAncia",
      news: "Not=C3=ADcias",
      support: "Preciso de apoio",
      accessibility: "Acessibilidade",
      close: "Fechar",
      fontIncrease: "Aumentar fonte",
      fontDecrease: "Diminuir fonte",
      contrast: "Alto contraste",
      darkTheme: "Tema escuro",
      language: "Idioma",
      back: "=E2=86=90 Voltar"
    },
    en: {
      home: "Home",
      history: "History",
      project: "Project",
      violences: "Types of violence",
      news: "News",
      support: "I need support",
      accessibility: "Accessibility",
      close: "Close",
      fontIncrease: "Increase font",
      fontDecrease: "Decrease font",
      contrast: "High contrast",
      darkTheme: "Dark theme",
      language: "Language",
      back: "=E2=86=90 Back"
    },
    es: {
      home: "Inicio",
      history: "Historia",
      project: "Proyecto",
      violences: "Tipos de violencia",
      news: "Noticias",
      support: "Necesito ayuda",
      accessibility: "Accesibilidad",
      close: "Cerrar",
      fontIncrease: "Aumentar fuente",
      fontDecrease: "Disminuir fuente",
      contrast: "Alto contraste",
      darkTheme: "Tema oscuro",
      language: "Idioma",
      back: "=E2=86=90 Volver"
    }
  };

  function getSaved(key, fallback) {
    try {
      return localStorage.getItem(key) || fallback;
    } catch {
      return fallback;
    }
  }

  function save(key, value) {
    try {
      localStorage.setItem(key, value);
    } catch {
      // Continua funcionando sem armazenamento.
    }
  }

  function applyTheme(theme) {
    const selected =3D
      theme =3D=3D=3D "escuro" || theme =3D=3D=3D "dark" ? "escuro" : "clar=
o";

    document.documentElement.dataset.liaTheme =3D selected;
    document.documentElement.dataset.theme =3D
      selected =3D=3D=3D "escuro" ? "dark" : "light";

    document.body.setAttribute(
      "data-theme",
      selected =3D=3D=3D "escuro" ? "dark" : "light"
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
    const safeSize =3D Math.min(1.25, Math.max(0.9, size));

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
    const selected =3D translations[language] ? language : "pt";

    document.documentElement.lang =3D
      selected =3D=3D=3D "pt" ? "pt-BR" : selected;

    document.querySelectorAll("[data-i18n]").forEach((element) =3D> {
      const translated =3D translations[selected][element.dataset.i18n];
      if (translated) element.textContent =3D translated;
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach((element)
=3D> {
      const translated =3D
        translations[selected][element.dataset.i18nPlaceholder];

      if (translated) element.setAttribute("placeholder", translated);
    });

    document.querySelectorAll("[data-i18n-aria-label]").forEach((element) =
=3D>
{
      const translated =3D
        translations[selected][element.dataset.i18nAriaLabel];

      if (translated) element.setAttribute("aria-label", translated);
    });

    const selects =3D [
      document.getElementById("lia-idioma"),
      document.getElementById("languageSelect")
    ];

    selects.forEach((select) =3D> {
      if (select) select.value =3D selected;
    });

    save(STORAGE.language, selected);
  }

  function adicionarEstilos() {
    if (document.getElementById("lia-acessibilidade-estilos")) return;

    const style =3D document.createElement("style");
    style.id =3D "lia-acessibilidade-estilos";

    style.textContent =3D `
      html { scroll-behavior: smooth; }

      html[data-lia-theme=3D"escuro"] body {
        background: #211d25;
        color: #f8f1fa;
      }

      html[data-lia-theme=3D"escuro"] header,
      html[data-lia-theme=3D"escuro"] main,
      html[data-lia-theme=3D"escuro"] section,
      html[data-lia-theme=3D"escuro"] article,
      html[data-lia-theme=3D"escuro"] footer,
      html[data-lia-theme=3D"escuro"] .card,
      html[data-lia-theme=3D"escuro"] .news-card,
      html[data-lia-theme=3D"escuro"] .help-panel {
        background-color: #302a35;
        color: #f8f1fa;
      }

      html[data-lia-theme=3D"escuro"] p,
      html[data-lia-theme=3D"escuro"] small,
      html[data-lia-theme=3D"escuro"] label,
      html[data-lia-theme=3D"escuro"] h1,
      html[data-lia-theme=3D"escuro"] h2,
      html[data-lia-theme=3D"escuro"] h3 {
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
    let header =3D document.querySelector("header");

    if (!header) {
      header =3D document.createElement("header");
      header.className =3D "lia-cabecalho-global";
      document.body.prepend(header);
    }

    let controles =3D header.querySelector(".lia-controles-topo");

    if (!controles) {
      controles =3D document.createElement("div");
      controles.className =3D "lia-controles-topo";
      header.appendChild(controles);
    }

    const voltar =3D header.querySelector(".lia-voltar-pagina");

    if (voltar && voltar.parentElement !=3D=3D controles) {
      controles.prepend(voltar);
    }

    return { header, controles };
  }

  function localizarBotoesAntigos(header) {
    const todos =3D Array.from(
      document.querySelectorAll("button, a, [role=3D'button']")
    );

    return todos.filter((element) =3D> {
      const id =3D (element.id || "").toLowerCase();
      const classe =3D (element.className || "").toString().toLowerCase();
      const texto =3D (element.textContent || "").trim().toLowerCase();
      const aria =3D (element.getAttribute("aria-label") || "").toLowerCase=
();

      const identificador =3D
        id.includes("accessibility") ||
        id.includes("acessibilidade") ||
        classe.includes("accessibility") ||
        classe.includes("acessibilidade") ||
        aria.includes("accessibility") ||
        aria.includes("acessibilidade");

      const textoDeAcessibilidade =3D
        /^(=E2=99=BF\s*)?(acessibilidade|accessibility)$/.test(texto);

      return identificador || textoDeAcessibilidade;
    });
  }

  function criarBotaoUnico(header, controles) {
    const antigos =3D localizarBotoesAntigos(header);

    let button =3D antigos.find((item) =3D>
      item.tagName.toLowerCase() =3D=3D=3D "button"
    );

    if (button) {
      // Remove eventos antigos e mant=C3=A9m os atributos visuais do bot=
=C3=A3o.
      const novoBotao =3D button.cloneNode(true);
      button.replaceWith(novoBotao);
      button =3D novoBotao;
    } else {
      button =3D document.createElement("button");
    }

    antigos.forEach((item) =3D> {
      if (item !=3D=3D button && item.isConnected) item.remove();
    });

    button.type =3D "button";
    button.id =3D "lia-acessibilidade-botao";
    button.className =3D "lia-acessibilidade-abrir";
    button.textContent =3D "Acessibilidade";
    button.setAttribute("aria-expanded", "false");
    button.setAttribute("aria-controls", "lia-acessibilidade-painel");

    controles.appendChild(button);

    return button;
  }

  function criarPainel() {
    // Remove vers=C3=B5es antigas do painel para n=C3=A3o deixar dois sist=
emas
ativos.
    document.getElementById("accessibilityPanel")?.remove();
    document.getElementById("lia-acessibilidade-painel")?.remove();

    const panel =3D document.createElement("section");
    panel.id =3D "lia-acessibilidade-painel";
    panel.className =3D "lia-acessibilidade-painel";
    panel.setAttribute("aria-label", "Configura=C3=A7=C3=B5es de acessibili=
dade");
    panel.hidden =3D true;

    panel.innerHTML =3D `
      <button type=3D"button" class=3D"lia-acessibilidade-fechar">
        Fechar
      </button>

      <h2>Acessibilidade</h2>

      <label for=3D"lia-fonte-menos">Tamanho do texto</label>
      <div class=3D"lia-acessibilidade-acoes">
        <button type=3D"button" id=3D"lia-fonte-menos">A=E2=88=92 Diminuir<=
/button>
        <button type=3D"button" id=3D"lia-fonte-mais">A+ Aumentar</button>
      </div>

      <label for=3D"lia-idioma">Idioma</label>
      <select id=3D"lia-idioma">
        <option value=3D"pt">Portugu=C3=AAs</option>
        <option value=3D"en">English</option>
        <option value=3D"es">Espa=C3=B1ol</option>
      </select>

      <label>Visual</label>
      <div class=3D"lia-acessibilidade-acoes">
        <button type=3D"button" id=3D"lia-tema">Tema claro/escuro</button>
        <button type=3D"button" id=3D"lia-contraste">Alto contraste</button=
>
      </div>
    `;

    document.body.appendChild(panel);
    return panel;
  }

  function conectarEventos(button, panel) {
    button.addEventListener("click", () =3D> {
      panel.hidden =3D !panel.hidden;
      button.setAttribute("aria-expanded", String(!panel.hidden));
    });

    panel.querySelector(".lia-acessibilidade-fechar")
      .addEventListener("click", () =3D> {
        panel.hidden =3D true;
        button.setAttribute("aria-expanded", "false");
        button.focus();
      });

    panel.querySelector("#lia-fonte-mais")
      .addEventListener("click", () =3D> {
        applyFont(Number(getSaved(STORAGE.font, "1")) + .05);
      });

    panel.querySelector("#lia-fonte-menos")
      .addEventListener("click", () =3D> {
        applyFont(Number(getSaved(STORAGE.font, "1")) - .05);
      });

    panel.querySelector("#lia-tema")
      .addEventListener("click", () =3D> {
        const atual =3D getSaved(STORAGE.theme, "claro");
        applyTheme(
          atual =3D=3D=3D "escuro" || atual =3D=3D=3D "dark" ? "claro" : "e=
scuro"
        );
      });

    panel.querySelector("#lia-contraste")
      .addEventListener("click", () =3D> {
        const atual =3D getSaved(STORAGE.contrast, "false") =3D=3D=3D "true=
";
        applyContrast(!atual);
      });

    panel.querySelector("#lia-idioma")
      .addEventListener("change", (event) =3D> {
        applyLanguage(event.target.value);
      });
  }

  function init() {
    adicionarEstilos();

    const { header, controles } =3D prepararAreaDosBotoes();
    const button =3D criarBotaoUnico(header, controles);
    const panel =3D criarPainel();

    conectarEventos(button, panel);

    applyTheme(getSaved(STORAGE.theme, "claro"));
    applyContrast(getSaved(STORAGE.contrast, "false") =3D=3D=3D "true");
    applyFont(Number(getSaved(STORAGE.font, "1")));
    applyLanguage(getSaved(STORAGE.language, "pt"));

    const mainLanguage =3D document.getElementById("languageSelect");

    if (mainLanguage) {
      mainLanguage.addEventListener("change", (event) =3D> {
        applyLanguage(event.target.value);
      });
    }
  }

  if (document.readyState =3D=3D=3D "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();

--00000000000031cf3e065f1466d4
Content-Type: text/html; charset="UTF-8"
Content-Transfer-Encoding: quoted-printable

<div dir=3D"ltr"><div style=3D"color:rgb(187,190,191);background-color:rgb(=
18,19,20);font-family:Consolas,&quot;Courier New&quot;,monospace;font-size:=
14px;line-height:19px;white-space:pre"><br><div>(() <span style=3D"color:rg=
b(255,123,114)">=3D&gt;</span> <span style=3D"color:rgb(201,209,217)">{</sp=
an></div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 </span><span st=
yle=3D"color:rgb(165,214,255)">&quot;use strict&quot;</span><span style=3D"=
color:rgb(201,209,217)">;</span></div><br><div><span style=3D"color:rgb(201=
,209,217)">=C2=A0 </span><span style=3D"color:rgb(255,123,114)">const</span=
><span style=3D"color:rgb(201,209,217)"> </span><span style=3D"color:rgb(12=
1,192,255)">STORAGE</span><span style=3D"color:rgb(201,209,217)"> </span><s=
pan style=3D"color:rgb(212,212,212)">=3D</span><span style=3D"color:rgb(201=
,209,217)"> {</span></div><div><span style=3D"color:rgb(201,209,217)">=C2=
=A0 =C2=A0 </span><span style=3D"color:rgb(156,220,254)">theme:</span><span=
 style=3D"color:rgb(201,209,217)"> </span><span style=3D"color:rgb(165,214,=
255)">&quot;lia-theme&quot;</span><span style=3D"color:rgb(201,209,217)">,<=
/span></div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 </spa=
n><span style=3D"color:rgb(156,220,254)">contrast:</span><span style=3D"col=
or:rgb(201,209,217)"> </span><span style=3D"color:rgb(165,214,255)">&quot;l=
ia-contrast&quot;</span><span style=3D"color:rgb(201,209,217)">,</span></di=
v><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 </span><span st=
yle=3D"color:rgb(156,220,254)">font:</span><span style=3D"color:rgb(201,209=
,217)"> </span><span style=3D"color:rgb(165,214,255)">&quot;lia-font-size&q=
uot;</span><span style=3D"color:rgb(201,209,217)">,</span></div><div><span =
style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 </span><span style=3D"color:=
rgb(156,220,254)">language:</span><span style=3D"color:rgb(201,209,217)"> <=
/span><span style=3D"color:rgb(165,214,255)">&quot;lia-language&quot;</span=
></div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 };</span></div><b=
r><div><span style=3D"color:rgb(201,209,217)">=C2=A0 </span><span style=3D"=
color:rgb(255,123,114)">const</span><span style=3D"color:rgb(201,209,217)">=
 </span><span style=3D"color:rgb(121,192,255)">translations</span><span sty=
le=3D"color:rgb(201,209,217)"> </span><span style=3D"color:rgb(212,212,212)=
">=3D</span><span style=3D"color:rgb(201,209,217)"> {</span></div><div><spa=
n style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 </span><span style=3D"colo=
r:rgb(156,220,254)">pt:</span><span style=3D"color:rgb(201,209,217)"> {</sp=
an></div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 <=
/span><span style=3D"color:rgb(156,220,254)">home:</span><span style=3D"col=
or:rgb(201,209,217)"> </span><span style=3D"color:rgb(165,214,255)">&quot;I=
n=C3=ADcio&quot;</span><span style=3D"color:rgb(201,209,217)">,</span></div=
><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><s=
pan style=3D"color:rgb(156,220,254)">history:</span><span style=3D"color:rg=
b(201,209,217)"> </span><span style=3D"color:rgb(165,214,255)">&quot;Hist=
=C3=B3ria&quot;</span><span style=3D"color:rgb(201,209,217)">,</span></div>=
<div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><sp=
an style=3D"color:rgb(156,220,254)">project:</span><span style=3D"color:rgb=
(201,209,217)"> </span><span style=3D"color:rgb(165,214,255)">&quot;Projeto=
&quot;</span><span style=3D"color:rgb(201,209,217)">,</span></div><div><spa=
n style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span style=
=3D"color:rgb(156,220,254)">violences:</span><span style=3D"color:rgb(201,2=
09,217)"> </span><span style=3D"color:rgb(165,214,255)">&quot;Tipos de viol=
=C3=AAncia&quot;</span><span style=3D"color:rgb(201,209,217)">,</span></div=
><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><s=
pan style=3D"color:rgb(156,220,254)">news:</span><span style=3D"color:rgb(2=
01,209,217)"> </span><span style=3D"color:rgb(165,214,255)">&quot;Not=C3=AD=
cias&quot;</span><span style=3D"color:rgb(201,209,217)">,</span></div><div>=
<span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span st=
yle=3D"color:rgb(156,220,254)">support:</span><span style=3D"color:rgb(201,=
209,217)"> </span><span style=3D"color:rgb(165,214,255)">&quot;Preciso de a=
poio&quot;</span><span style=3D"color:rgb(201,209,217)">,</span></div><div>=
<span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span st=
yle=3D"color:rgb(156,220,254)">accessibility:</span><span style=3D"color:rg=
b(201,209,217)"> </span><span style=3D"color:rgb(165,214,255)">&quot;Acessi=
bilidade&quot;</span><span style=3D"color:rgb(201,209,217)">,</span></div><=
div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><spa=
n style=3D"color:rgb(156,220,254)">close:</span><span style=3D"color:rgb(20=
1,209,217)"> </span><span style=3D"color:rgb(165,214,255)">&quot;Fechar&quo=
t;</span><span style=3D"color:rgb(201,209,217)">,</span></div><div><span st=
yle=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"c=
olor:rgb(156,220,254)">fontIncrease:</span><span style=3D"color:rgb(201,209=
,217)"> </span><span style=3D"color:rgb(165,214,255)">&quot;Aumentar fonte&=
quot;</span><span style=3D"color:rgb(201,209,217)">,</span></div><div><span=
 style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span style=
=3D"color:rgb(156,220,254)">fontDecrease:</span><span style=3D"color:rgb(20=
1,209,217)"> </span><span style=3D"color:rgb(165,214,255)">&quot;Diminuir f=
onte&quot;</span><span style=3D"color:rgb(201,209,217)">,</span></div><div>=
<span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span st=
yle=3D"color:rgb(156,220,254)">contrast:</span><span style=3D"color:rgb(201=
,209,217)"> </span><span style=3D"color:rgb(165,214,255)">&quot;Alto contra=
ste&quot;</span><span style=3D"color:rgb(201,209,217)">,</span></div><div><=
span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span sty=
le=3D"color:rgb(156,220,254)">darkTheme:</span><span style=3D"color:rgb(201=
,209,217)"> </span><span style=3D"color:rgb(165,214,255)">&quot;Tema escuro=
&quot;</span><span style=3D"color:rgb(201,209,217)">,</span></div><div><spa=
n style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span style=
=3D"color:rgb(156,220,254)">language:</span><span style=3D"color:rgb(201,20=
9,217)"> </span><span style=3D"color:rgb(165,214,255)">&quot;Idioma&quot;</=
span><span style=3D"color:rgb(201,209,217)">,</span></div><div><span style=
=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"colo=
r:rgb(156,220,254)">back:</span><span style=3D"color:rgb(201,209,217)"> </s=
pan><span style=3D"color:rgb(165,214,255)">&quot;=E2=86=90 Voltar&quot;</sp=
an></div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 },</span=
></div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 </span><sp=
an style=3D"color:rgb(156,220,254)">en:</span><span style=3D"color:rgb(201,=
209,217)"> {</span></div><div><span style=3D"color:rgb(201,209,217)">=C2=A0=
 =C2=A0 =C2=A0 </span><span style=3D"color:rgb(156,220,254)">home:</span><s=
pan style=3D"color:rgb(201,209,217)"> </span><span style=3D"color:rgb(165,2=
14,255)">&quot;Home&quot;</span><span style=3D"color:rgb(201,209,217)">,</s=
pan></div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 =
</span><span style=3D"color:rgb(156,220,254)">history:</span><span style=3D=
"color:rgb(201,209,217)"> </span><span style=3D"color:rgb(165,214,255)">&qu=
ot;History&quot;</span><span style=3D"color:rgb(201,209,217)">,</span></div=
><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><s=
pan style=3D"color:rgb(156,220,254)">project:</span><span style=3D"color:rg=
b(201,209,217)"> </span><span style=3D"color:rgb(165,214,255)">&quot;Projec=
t&quot;</span><span style=3D"color:rgb(201,209,217)">,</span></div><div><sp=
an style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span style=
=3D"color:rgb(156,220,254)">violences:</span><span style=3D"color:rgb(201,2=
09,217)"> </span><span style=3D"color:rgb(165,214,255)">&quot;Types of viol=
ence&quot;</span><span style=3D"color:rgb(201,209,217)">,</span></div><div>=
<span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span st=
yle=3D"color:rgb(156,220,254)">news:</span><span style=3D"color:rgb(201,209=
,217)"> </span><span style=3D"color:rgb(165,214,255)">&quot;News&quot;</spa=
n><span style=3D"color:rgb(201,209,217)">,</span></div><div><span style=3D"=
color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:rg=
b(156,220,254)">support:</span><span style=3D"color:rgb(201,209,217)"> </sp=
an><span style=3D"color:rgb(165,214,255)">&quot;I need support&quot;</span>=
<span style=3D"color:rgb(201,209,217)">,</span></div><div><span style=3D"co=
lor:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:rgb(=
156,220,254)">accessibility:</span><span style=3D"color:rgb(201,209,217)"> =
</span><span style=3D"color:rgb(165,214,255)">&quot;Accessibility&quot;</sp=
an><span style=3D"color:rgb(201,209,217)">,</span></div><div><span style=3D=
"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:r=
gb(156,220,254)">close:</span><span style=3D"color:rgb(201,209,217)"> </spa=
n><span style=3D"color:rgb(165,214,255)">&quot;Close&quot;</span><span styl=
e=3D"color:rgb(201,209,217)">,</span></div><div><span style=3D"color:rgb(20=
1,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:rgb(156,220,25=
4)">fontIncrease:</span><span style=3D"color:rgb(201,209,217)"> </span><spa=
n style=3D"color:rgb(165,214,255)">&quot;Increase font&quot;</span><span st=
yle=3D"color:rgb(201,209,217)">,</span></div><div><span style=3D"color:rgb(=
201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:rgb(156,220,=
254)">fontDecrease:</span><span style=3D"color:rgb(201,209,217)"> </span><s=
pan style=3D"color:rgb(165,214,255)">&quot;Decrease font&quot;</span><span =
style=3D"color:rgb(201,209,217)">,</span></div><div><span style=3D"color:rg=
b(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:rgb(156,22=
0,254)">contrast:</span><span style=3D"color:rgb(201,209,217)"> </span><spa=
n style=3D"color:rgb(165,214,255)">&quot;High contrast&quot;</span><span st=
yle=3D"color:rgb(201,209,217)">,</span></div><div><span style=3D"color:rgb(=
201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:rgb(156,220,=
254)">darkTheme:</span><span style=3D"color:rgb(201,209,217)"> </span><span=
 style=3D"color:rgb(165,214,255)">&quot;Dark theme&quot;</span><span style=
=3D"color:rgb(201,209,217)">,</span></div><div><span style=3D"color:rgb(201=
,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:rgb(156,220,254=
)">language:</span><span style=3D"color:rgb(201,209,217)"> </span><span sty=
le=3D"color:rgb(165,214,255)">&quot;Language&quot;</span><span style=3D"col=
or:rgb(201,209,217)">,</span></div><div><span style=3D"color:rgb(201,209,21=
7)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:rgb(156,220,254)">back=
:</span><span style=3D"color:rgb(201,209,217)"> </span><span style=3D"color=
:rgb(165,214,255)">&quot;=E2=86=90 Back&quot;</span></div><div><span style=
=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 },</span></div><div><span style=
=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 </span><span style=3D"color:rgb(1=
56,220,254)">es:</span><span style=3D"color:rgb(201,209,217)"> {</span></di=
v><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><=
span style=3D"color:rgb(156,220,254)">home:</span><span style=3D"color:rgb(=
201,209,217)"> </span><span style=3D"color:rgb(165,214,255)">&quot;Inicio&q=
uot;</span><span style=3D"color:rgb(201,209,217)">,</span></div><div><span =
style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D=
"color:rgb(156,220,254)">history:</span><span style=3D"color:rgb(201,209,21=
7)"> </span><span style=3D"color:rgb(165,214,255)">&quot;Historia&quot;</sp=
an><span style=3D"color:rgb(201,209,217)">,</span></div><div><span style=3D=
"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:r=
gb(156,220,254)">project:</span><span style=3D"color:rgb(201,209,217)"> </s=
pan><span style=3D"color:rgb(165,214,255)">&quot;Proyecto&quot;</span><span=
 style=3D"color:rgb(201,209,217)">,</span></div><div><span style=3D"color:r=
gb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:rgb(156,2=
20,254)">violences:</span><span style=3D"color:rgb(201,209,217)"> </span><s=
pan style=3D"color:rgb(165,214,255)">&quot;Tipos de violencia&quot;</span><=
span style=3D"color:rgb(201,209,217)">,</span></div><div><span style=3D"col=
or:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:rgb(1=
56,220,254)">news:</span><span style=3D"color:rgb(201,209,217)"> </span><sp=
an style=3D"color:rgb(165,214,255)">&quot;Noticias&quot;</span><span style=
=3D"color:rgb(201,209,217)">,</span></div><div><span style=3D"color:rgb(201=
,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:rgb(156,220,254=
)">support:</span><span style=3D"color:rgb(201,209,217)"> </span><span styl=
e=3D"color:rgb(165,214,255)">&quot;Necesito ayuda&quot;</span><span style=
=3D"color:rgb(201,209,217)">,</span></div><div><span style=3D"color:rgb(201=
,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:rgb(156,220,254=
)">accessibility:</span><span style=3D"color:rgb(201,209,217)"> </span><spa=
n style=3D"color:rgb(165,214,255)">&quot;Accesibilidad&quot;</span><span st=
yle=3D"color:rgb(201,209,217)">,</span></div><div><span style=3D"color:rgb(=
201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:rgb(156,220,=
254)">close:</span><span style=3D"color:rgb(201,209,217)"> </span><span sty=
le=3D"color:rgb(165,214,255)">&quot;Cerrar&quot;</span><span style=3D"color=
:rgb(201,209,217)">,</span></div><div><span style=3D"color:rgb(201,209,217)=
">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:rgb(156,220,254)">fontIn=
crease:</span><span style=3D"color:rgb(201,209,217)"> </span><span style=3D=
"color:rgb(165,214,255)">&quot;Aumentar fuente&quot;</span><span style=3D"c=
olor:rgb(201,209,217)">,</span></div><div><span style=3D"color:rgb(201,209,=
217)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:rgb(156,220,254)">fo=
ntDecrease:</span><span style=3D"color:rgb(201,209,217)"> </span><span styl=
e=3D"color:rgb(165,214,255)">&quot;Disminuir fuente&quot;</span><span style=
=3D"color:rgb(201,209,217)">,</span></div><div><span style=3D"color:rgb(201=
,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:rgb(156,220,254=
)">contrast:</span><span style=3D"color:rgb(201,209,217)"> </span><span sty=
le=3D"color:rgb(165,214,255)">&quot;Alto contraste&quot;</span><span style=
=3D"color:rgb(201,209,217)">,</span></div><div><span style=3D"color:rgb(201=
,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:rgb(156,220,254=
)">darkTheme:</span><span style=3D"color:rgb(201,209,217)"> </span><span st=
yle=3D"color:rgb(165,214,255)">&quot;Tema oscuro&quot;</span><span style=3D=
"color:rgb(201,209,217)">,</span></div><div><span style=3D"color:rgb(201,20=
9,217)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:rgb(156,220,254)">=
language:</span><span style=3D"color:rgb(201,209,217)"> </span><span style=
=3D"color:rgb(165,214,255)">&quot;Idioma&quot;</span><span style=3D"color:r=
gb(201,209,217)">,</span></div><div><span style=3D"color:rgb(201,209,217)">=
=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:rgb(156,220,254)">back:</s=
pan><span style=3D"color:rgb(201,209,217)"> </span><span style=3D"color:rgb=
(165,214,255)">&quot;=E2=86=90 Volver&quot;</span></div><div><span style=3D=
"color:rgb(201,209,217)">=C2=A0 =C2=A0 }</span></div><div><span style=3D"co=
lor:rgb(201,209,217)">=C2=A0 };</span></div><br><div><span style=3D"color:r=
gb(201,209,217)">=C2=A0 </span><span style=3D"color:rgb(255,123,114)">funct=
ion</span><span style=3D"color:rgb(201,209,217)"> </span><span style=3D"col=
or:rgb(210,168,255)">getSaved</span><span style=3D"color:rgb(201,209,217)">=
(</span><span style=3D"color:rgb(255,166,87)">key</span><span style=3D"colo=
r:rgb(201,209,217)">, </span><span style=3D"color:rgb(255,166,87)">fallback=
</span><span style=3D"color:rgb(201,209,217)">) {</span></div><div><span st=
yle=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 </span><span style=3D"color:rg=
b(197,134,192)">try</span><span style=3D"color:rgb(201,209,217)"> {</span><=
/div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </spa=
n><span style=3D"color:rgb(197,134,192)">return</span><span style=3D"color:=
rgb(201,209,217)"> localStorage.</span><span style=3D"color:rgb(210,168,255=
)">getItem</span><span style=3D"color:rgb(201,209,217)">(key) </span><span =
style=3D"color:rgb(212,212,212)">||</span><span style=3D"color:rgb(201,209,=
217)"> fallback;</span></div><div><span style=3D"color:rgb(201,209,217)">=
=C2=A0 =C2=A0 } </span><span style=3D"color:rgb(197,134,192)">catch</span><=
span style=3D"color:rgb(201,209,217)"> {</span></div><div><span style=3D"co=
lor:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:rgb(=
197,134,192)">return</span><span style=3D"color:rgb(201,209,217)"> fallback=
;</span></div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 }</=
span></div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 }</span></div=
><br><div><span style=3D"color:rgb(201,209,217)">=C2=A0 </span><span style=
=3D"color:rgb(255,123,114)">function</span><span style=3D"color:rgb(201,209=
,217)"> </span><span style=3D"color:rgb(210,168,255)">save</span><span styl=
e=3D"color:rgb(201,209,217)">(</span><span style=3D"color:rgb(255,166,87)">=
key</span><span style=3D"color:rgb(201,209,217)">, </span><span style=3D"co=
lor:rgb(255,166,87)">value</span><span style=3D"color:rgb(201,209,217)">) {=
</span></div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 </sp=
an><span style=3D"color:rgb(197,134,192)">try</span><span style=3D"color:rg=
b(201,209,217)"> {</span></div><div><span style=3D"color:rgb(201,209,217)">=
=C2=A0 =C2=A0 =C2=A0 localStorage.</span><span style=3D"color:rgb(210,168,2=
55)">setItem</span><span style=3D"color:rgb(201,209,217)">(key, value);</sp=
an></div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 } </span=
><span style=3D"color:rgb(197,134,192)">catch</span><span style=3D"color:rg=
b(201,209,217)"> {</span></div><div><span style=3D"color:rgb(201,209,217)">=
=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:rgb(139,148,158)">// Conti=
nua funcionando sem armazenamento.</span></div><div><span style=3D"color:rg=
b(201,209,217)">=C2=A0 =C2=A0 }</span></div><div><span style=3D"color:rgb(2=
01,209,217)">=C2=A0 }</span></div><br><div><span style=3D"color:rgb(201,209=
,217)">=C2=A0 </span><span style=3D"color:rgb(255,123,114)">function</span>=
<span style=3D"color:rgb(201,209,217)"> </span><span style=3D"color:rgb(210=
,168,255)">applyTheme</span><span style=3D"color:rgb(201,209,217)">(</span>=
<span style=3D"color:rgb(255,166,87)">theme</span><span style=3D"color:rgb(=
201,209,217)">) {</span></div><div><span style=3D"color:rgb(201,209,217)">=
=C2=A0 =C2=A0 </span><span style=3D"color:rgb(255,123,114)">const</span><sp=
an style=3D"color:rgb(201,209,217)"> </span><span style=3D"color:rgb(121,19=
2,255)">selected</span><span style=3D"color:rgb(201,209,217)"> </span><span=
 style=3D"color:rgb(212,212,212)">=3D</span></div><div><span style=3D"color=
:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 theme </span><span style=3D"color:r=
gb(212,212,212)">=3D=3D=3D</span><span style=3D"color:rgb(201,209,217)"> </=
span><span style=3D"color:rgb(165,214,255)">&quot;escuro&quot;</span><span =
style=3D"color:rgb(201,209,217)"> </span><span style=3D"color:rgb(212,212,2=
12)">||</span><span style=3D"color:rgb(201,209,217)"> theme </span><span st=
yle=3D"color:rgb(212,212,212)">=3D=3D=3D</span><span style=3D"color:rgb(201=
,209,217)"> </span><span style=3D"color:rgb(165,214,255)">&quot;dark&quot;<=
/span><span style=3D"color:rgb(201,209,217)"> </span><span style=3D"color:r=
gb(212,212,212)">?</span><span style=3D"color:rgb(201,209,217)"> </span><sp=
an style=3D"color:rgb(165,214,255)">&quot;escuro&quot;</span><span style=3D=
"color:rgb(201,209,217)"> </span><span style=3D"color:rgb(212,212,212)">:</=
span><span style=3D"color:rgb(201,209,217)"> </span><span style=3D"color:rg=
b(165,214,255)">&quot;claro&quot;</span><span style=3D"color:rgb(201,209,21=
7)">;</span></div><br><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =
=C2=A0 document.documentElement.dataset.liaTheme </span><span style=3D"colo=
r:rgb(212,212,212)">=3D</span><span style=3D"color:rgb(201,209,217)"> selec=
ted;</span></div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =
document.documentElement.dataset.theme </span><span style=3D"color:rgb(212,=
212,212)">=3D</span></div><div><span style=3D"color:rgb(201,209,217)">=C2=
=A0 =C2=A0 =C2=A0 selected </span><span style=3D"color:rgb(212,212,212)">=
=3D=3D=3D</span><span style=3D"color:rgb(201,209,217)"> </span><span style=
=3D"color:rgb(165,214,255)">&quot;escuro&quot;</span><span style=3D"color:r=
gb(201,209,217)"> </span><span style=3D"color:rgb(212,212,212)">?</span><sp=
an style=3D"color:rgb(201,209,217)"> </span><span style=3D"color:rgb(165,21=
4,255)">&quot;dark&quot;</span><span style=3D"color:rgb(201,209,217)"> </sp=
an><span style=3D"color:rgb(212,212,212)">:</span><span style=3D"color:rgb(=
201,209,217)"> </span><span style=3D"color:rgb(165,214,255)">&quot;light&qu=
ot;</span><span style=3D"color:rgb(201,209,217)">;</span></div><br><div><sp=
an style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 document.body.</span><spa=
n style=3D"color:rgb(210,168,255)">setAttribute</span><span style=3D"color:=
rgb(201,209,217)">(</span></div><div><span style=3D"color:rgb(201,209,217)"=
>=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:rgb(165,214,255)">&quot;d=
ata-theme&quot;</span><span style=3D"color:rgb(201,209,217)">,</span></div>=
<div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 selected <=
/span><span style=3D"color:rgb(212,212,212)">=3D=3D=3D</span><span style=3D=
"color:rgb(201,209,217)"> </span><span style=3D"color:rgb(165,214,255)">&qu=
ot;escuro&quot;</span><span style=3D"color:rgb(201,209,217)"> </span><span =
style=3D"color:rgb(212,212,212)">?</span><span style=3D"color:rgb(201,209,2=
17)"> </span><span style=3D"color:rgb(165,214,255)">&quot;dark&quot;</span>=
<span style=3D"color:rgb(201,209,217)"> </span><span style=3D"color:rgb(212=
,212,212)">:</span><span style=3D"color:rgb(201,209,217)"> </span><span sty=
le=3D"color:rgb(165,214,255)">&quot;light&quot;</span></div><div><span styl=
e=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 );</span></div><br><div><span st=
yle=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 </span><span style=3D"color:rg=
b(210,168,255)">save</span><span style=3D"color:rgb(201,209,217)">(</span><=
span style=3D"color:rgb(121,192,255)">STORAGE</span><span style=3D"color:rg=
b(201,209,217)">.theme, selected);</span></div><div><span style=3D"color:rg=
b(201,209,217)">=C2=A0 }</span></div><br><div><span style=3D"color:rgb(201,=
209,217)">=C2=A0 </span><span style=3D"color:rgb(255,123,114)">function</sp=
an><span style=3D"color:rgb(201,209,217)"> </span><span style=3D"color:rgb(=
210,168,255)">applyContrast</span><span style=3D"color:rgb(201,209,217)">(<=
/span><span style=3D"color:rgb(255,166,87)">enabled</span><span style=3D"co=
lor:rgb(201,209,217)">) {</span></div><div><span style=3D"color:rgb(201,209=
,217)">=C2=A0 =C2=A0 document.documentElement.classList.</span><span style=
=3D"color:rgb(210,168,255)">toggle</span><span style=3D"color:rgb(201,209,2=
17)">(</span></div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=
=A0 =C2=A0 </span><span style=3D"color:rgb(165,214,255)">&quot;lia-alto-con=
traste&quot;</span><span style=3D"color:rgb(201,209,217)">,</span></div><di=
v><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 enabled</span=
></div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 );</span><=
/div><br><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 document=
.documentElement.classList.</span><span style=3D"color:rgb(210,168,255)">to=
ggle</span><span style=3D"color:rgb(201,209,217)">(</span></div><div><span =
style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D=
"color:rgb(165,214,255)">&quot;high-contrast&quot;</span><span style=3D"col=
or:rgb(201,209,217)">,</span></div><div><span style=3D"color:rgb(201,209,21=
7)">=C2=A0 =C2=A0 =C2=A0 enabled</span></div><div><span style=3D"color:rgb(=
201,209,217)">=C2=A0 =C2=A0 );</span></div><br><div><span style=3D"color:rg=
b(201,209,217)">=C2=A0 =C2=A0 </span><span style=3D"color:rgb(210,168,255)"=
>save</span><span style=3D"color:rgb(201,209,217)">(</span><span style=3D"c=
olor:rgb(121,192,255)">STORAGE</span><span style=3D"color:rgb(201,209,217)"=
>.contrast, </span><span style=3D"color:rgb(210,168,255)">String</span><spa=
n style=3D"color:rgb(201,209,217)">(enabled));</span></div><div><span style=
=3D"color:rgb(201,209,217)">=C2=A0 }</span></div><br><div><span style=3D"co=
lor:rgb(201,209,217)">=C2=A0 </span><span style=3D"color:rgb(255,123,114)">=
function</span><span style=3D"color:rgb(201,209,217)"> </span><span style=
=3D"color:rgb(210,168,255)">applyFont</span><span style=3D"color:rgb(201,20=
9,217)">(</span><span style=3D"color:rgb(255,166,87)">size</span><span styl=
e=3D"color:rgb(201,209,217)">) {</span></div><div><span style=3D"color:rgb(=
201,209,217)">=C2=A0 =C2=A0 </span><span style=3D"color:rgb(255,123,114)">c=
onst</span><span style=3D"color:rgb(201,209,217)"> </span><span style=3D"co=
lor:rgb(121,192,255)">safeSize</span><span style=3D"color:rgb(201,209,217)"=
> </span><span style=3D"color:rgb(212,212,212)">=3D</span><span style=3D"co=
lor:rgb(201,209,217)"> Math.</span><span style=3D"color:rgb(210,168,255)">m=
in</span><span style=3D"color:rgb(201,209,217)">(</span><span style=3D"colo=
r:rgb(181,206,168)">1.25</span><span style=3D"color:rgb(201,209,217)">, Mat=
h.</span><span style=3D"color:rgb(210,168,255)">max</span><span style=3D"co=
lor:rgb(201,209,217)">(</span><span style=3D"color:rgb(181,206,168)">0.9</s=
pan><span style=3D"color:rgb(201,209,217)">, size));</span></div><br><div><=
span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 document.documentElemen=
t.style.</span><span style=3D"color:rgb(210,168,255)">setProperty</span><sp=
an style=3D"color:rgb(201,209,217)">(</span></div><div><span style=3D"color=
:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:rgb(165=
,214,255)">&quot;--lia-font-scale&quot;</span><span style=3D"color:rgb(201,=
209,217)">,</span></div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =
=C2=A0 =C2=A0 </span><span style=3D"color:rgb(210,168,255)">String</span><s=
pan style=3D"color:rgb(201,209,217)">(safeSize)</span></div><div><span styl=
e=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 );</span></div><br><div><span st=
yle=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 document.documentElement.style=
.</span><span style=3D"color:rgb(210,168,255)">setProperty</span><span styl=
e=3D"color:rgb(201,209,217)">(</span></div><div><span style=3D"color:rgb(20=
1,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:rgb(165,214,25=
5)">&quot;--base-font&quot;</span><span style=3D"color:rgb(201,209,217)">,<=
/span></div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=
=A0 </span><span style=3D"color:rgb(165,214,255)">`</span><span style=3D"co=
lor:rgb(86,156,214)">${</span><span style=3D"color:rgb(201,209,217)">safeSi=
ze</span><span style=3D"color:rgb(212,212,212)"> * </span><span style=3D"co=
lor:rgb(181,206,168)">16</span><span style=3D"color:rgb(86,156,214)">}</spa=
n><span style=3D"color:rgb(165,214,255)">px`</span></div><div><span style=
=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 );</span></div><br><div><span sty=
le=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 </span><span style=3D"color:rgb=
(210,168,255)">save</span><span style=3D"color:rgb(201,209,217)">(</span><s=
pan style=3D"color:rgb(121,192,255)">STORAGE</span><span style=3D"color:rgb=
(201,209,217)">.font, </span><span style=3D"color:rgb(210,168,255)">String<=
/span><span style=3D"color:rgb(201,209,217)">(safeSize));</span></div><div>=
<span style=3D"color:rgb(201,209,217)">=C2=A0 }</span></div><br><div><span =
style=3D"color:rgb(201,209,217)">=C2=A0 </span><span style=3D"color:rgb(255=
,123,114)">function</span><span style=3D"color:rgb(201,209,217)"> </span><s=
pan style=3D"color:rgb(210,168,255)">applyLanguage</span><span style=3D"col=
or:rgb(201,209,217)">(</span><span style=3D"color:rgb(255,166,87)">language=
</span><span style=3D"color:rgb(201,209,217)">) {</span></div><div><span st=
yle=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 </span><span style=3D"color:rg=
b(255,123,114)">const</span><span style=3D"color:rgb(201,209,217)"> </span>=
<span style=3D"color:rgb(121,192,255)">selected</span><span style=3D"color:=
rgb(201,209,217)"> </span><span style=3D"color:rgb(212,212,212)">=3D</span>=
<span style=3D"color:rgb(201,209,217)"> translations[language] </span><span=
 style=3D"color:rgb(212,212,212)">?</span><span style=3D"color:rgb(201,209,=
217)"> language </span><span style=3D"color:rgb(212,212,212)">:</span><span=
 style=3D"color:rgb(201,209,217)"> </span><span style=3D"color:rgb(165,214,=
255)">&quot;pt&quot;</span><span style=3D"color:rgb(201,209,217)">;</span><=
/div><br><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 document=
.documentElement.lang </span><span style=3D"color:rgb(212,212,212)">=3D</sp=
an></div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 s=
elected </span><span style=3D"color:rgb(212,212,212)">=3D=3D=3D</span><span=
 style=3D"color:rgb(201,209,217)"> </span><span style=3D"color:rgb(165,214,=
255)">&quot;pt&quot;</span><span style=3D"color:rgb(201,209,217)"> </span><=
span style=3D"color:rgb(212,212,212)">?</span><span style=3D"color:rgb(201,=
209,217)"> </span><span style=3D"color:rgb(165,214,255)">&quot;pt-BR&quot;<=
/span><span style=3D"color:rgb(201,209,217)"> </span><span style=3D"color:r=
gb(212,212,212)">:</span><span style=3D"color:rgb(201,209,217)"> selected;<=
/span></div><br><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 d=
ocument.</span><span style=3D"color:rgb(210,168,255)">querySelectorAll</spa=
n><span style=3D"color:rgb(201,209,217)">(</span><span style=3D"color:rgb(1=
65,214,255)">&quot;[data-i18n]&quot;</span><span style=3D"color:rgb(201,209=
,217)">).</span><span style=3D"color:rgb(210,168,255)">forEach</span><span =
style=3D"color:rgb(201,209,217)">((</span><span style=3D"color:rgb(255,166,=
87)">element</span><span style=3D"color:rgb(201,209,217)">) </span><span st=
yle=3D"color:rgb(255,123,114)">=3D&gt;</span><span style=3D"color:rgb(201,2=
09,217)"> {</span></div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =
=C2=A0 =C2=A0 </span><span style=3D"color:rgb(255,123,114)">const</span><sp=
an style=3D"color:rgb(201,209,217)"> </span><span style=3D"color:rgb(121,19=
2,255)">translated</span><span style=3D"color:rgb(201,209,217)"> </span><sp=
an style=3D"color:rgb(212,212,212)">=3D</span><span style=3D"color:rgb(201,=
209,217)"> translations[selected][element.dataset.i18n];</span></div><div><=
span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span sty=
le=3D"color:rgb(197,134,192)">if</span><span style=3D"color:rgb(201,209,217=
)"> (translated) element.textContent </span><span style=3D"color:rgb(212,21=
2,212)">=3D</span><span style=3D"color:rgb(201,209,217)"> translated;</span=
></div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 });</span>=
</div><br><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 documen=
t.</span><span style=3D"color:rgb(210,168,255)">querySelectorAll</span><spa=
n style=3D"color:rgb(201,209,217)">(</span><span style=3D"color:rgb(165,214=
,255)">&quot;[data-i18n-placeholder]&quot;</span><span style=3D"color:rgb(2=
01,209,217)">).</span><span style=3D"color:rgb(210,168,255)">forEach</span>=
<span style=3D"color:rgb(201,209,217)">((</span><span style=3D"color:rgb(25=
5,166,87)">element</span><span style=3D"color:rgb(201,209,217)">) </span><s=
pan style=3D"color:rgb(255,123,114)">=3D&gt;</span><span style=3D"color:rgb=
(201,209,217)"> {</span></div><div><span style=3D"color:rgb(201,209,217)">=
=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:rgb(255,123,114)">const</s=
pan><span style=3D"color:rgb(201,209,217)"> </span><span style=3D"color:rgb=
(121,192,255)">translated</span><span style=3D"color:rgb(201,209,217)"> </s=
pan><span style=3D"color:rgb(212,212,212)">=3D</span></div><div><span style=
=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 =C2=A0 translations[select=
ed][element.dataset.i18nPlaceholder];</span></div><br><div><span style=3D"c=
olor:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:rgb=
(197,134,192)">if</span><span style=3D"color:rgb(201,209,217)"> (translated=
) element.</span><span style=3D"color:rgb(210,168,255)">setAttribute</span>=
<span style=3D"color:rgb(201,209,217)">(</span><span style=3D"color:rgb(165=
,214,255)">&quot;placeholder&quot;</span><span style=3D"color:rgb(201,209,2=
17)">, translated);</span></div><div><span style=3D"color:rgb(201,209,217)"=
>=C2=A0 =C2=A0 });</span></div><br><div><span style=3D"color:rgb(201,209,21=
7)">=C2=A0 =C2=A0 document.</span><span style=3D"color:rgb(210,168,255)">qu=
erySelectorAll</span><span style=3D"color:rgb(201,209,217)">(</span><span s=
tyle=3D"color:rgb(165,214,255)">&quot;[data-i18n-aria-label]&quot;</span><s=
pan style=3D"color:rgb(201,209,217)">).</span><span style=3D"color:rgb(210,=
168,255)">forEach</span><span style=3D"color:rgb(201,209,217)">((</span><sp=
an style=3D"color:rgb(255,166,87)">element</span><span style=3D"color:rgb(2=
01,209,217)">) </span><span style=3D"color:rgb(255,123,114)">=3D&gt;</span>=
<span style=3D"color:rgb(201,209,217)"> {</span></div><div><span style=3D"c=
olor:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:rgb=
(255,123,114)">const</span><span style=3D"color:rgb(201,209,217)"> </span><=
span style=3D"color:rgb(121,192,255)">translated</span><span style=3D"color=
:rgb(201,209,217)"> </span><span style=3D"color:rgb(212,212,212)">=3D</span=
></div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 =C2=
=A0 translations[selected][element.dataset.i18nAriaLabel];</span></div><br>=
<div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><sp=
an style=3D"color:rgb(197,134,192)">if</span><span style=3D"color:rgb(201,2=
09,217)"> (translated) element.</span><span style=3D"color:rgb(210,168,255)=
">setAttribute</span><span style=3D"color:rgb(201,209,217)">(</span><span s=
tyle=3D"color:rgb(165,214,255)">&quot;aria-label&quot;</span><span style=3D=
"color:rgb(201,209,217)">, translated);</span></div><div><span style=3D"col=
or:rgb(201,209,217)">=C2=A0 =C2=A0 });</span></div><br><div><span style=3D"=
color:rgb(201,209,217)">=C2=A0 =C2=A0 </span><span style=3D"color:rgb(255,1=
23,114)">const</span><span style=3D"color:rgb(201,209,217)"> </span><span s=
tyle=3D"color:rgb(121,192,255)">selects</span><span style=3D"color:rgb(201,=
209,217)"> </span><span style=3D"color:rgb(212,212,212)">=3D</span><span st=
yle=3D"color:rgb(201,209,217)"> [</span></div><div><span style=3D"color:rgb=
(201,209,217)">=C2=A0 =C2=A0 =C2=A0 document.</span><span style=3D"color:rg=
b(210,168,255)">getElementById</span><span style=3D"color:rgb(201,209,217)"=
>(</span><span style=3D"color:rgb(165,214,255)">&quot;lia-idioma&quot;</spa=
n><span style=3D"color:rgb(201,209,217)">),</span></div><div><span style=3D=
"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 document.</span><span style=
=3D"color:rgb(210,168,255)">getElementById</span><span style=3D"color:rgb(2=
01,209,217)">(</span><span style=3D"color:rgb(165,214,255)">&quot;languageS=
elect&quot;</span><span style=3D"color:rgb(201,209,217)">)</span></div><div=
><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 ];</span></div><br><d=
iv><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 selects.</span><spa=
n style=3D"color:rgb(210,168,255)">forEach</span><span style=3D"color:rgb(2=
01,209,217)">((</span><span style=3D"color:rgb(255,166,87)">select</span><s=
pan style=3D"color:rgb(201,209,217)">) </span><span style=3D"color:rgb(255,=
123,114)">=3D&gt;</span><span style=3D"color:rgb(201,209,217)"> {</span></d=
iv><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span>=
<span style=3D"color:rgb(197,134,192)">if</span><span style=3D"color:rgb(20=
1,209,217)"> (select) select.value </span><span style=3D"color:rgb(212,212,=
212)">=3D</span><span style=3D"color:rgb(201,209,217)"> selected;</span></d=
iv><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 });</span></di=
v><br><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 </span><spa=
n style=3D"color:rgb(210,168,255)">save</span><span style=3D"color:rgb(201,=
209,217)">(</span><span style=3D"color:rgb(121,192,255)">STORAGE</span><spa=
n style=3D"color:rgb(201,209,217)">.language, selected);</span></div><div><=
span style=3D"color:rgb(201,209,217)">=C2=A0 }</span></div><br><div><span s=
tyle=3D"color:rgb(201,209,217)">=C2=A0 </span><span style=3D"color:rgb(255,=
123,114)">function</span><span style=3D"color:rgb(201,209,217)"> </span><sp=
an style=3D"color:rgb(210,168,255)">adicionarEstilos</span><span style=3D"c=
olor:rgb(201,209,217)">() {</span></div><div><span style=3D"color:rgb(201,2=
09,217)">=C2=A0 =C2=A0 </span><span style=3D"color:rgb(197,134,192)">if</sp=
an><span style=3D"color:rgb(201,209,217)"> (document.</span><span style=3D"=
color:rgb(210,168,255)">getElementById</span><span style=3D"color:rgb(201,2=
09,217)">(</span><span style=3D"color:rgb(165,214,255)">&quot;lia-acessibil=
idade-estilos&quot;</span><span style=3D"color:rgb(201,209,217)">)) </span>=
<span style=3D"color:rgb(197,134,192)">return</span><span style=3D"color:rg=
b(201,209,217)">;</span></div><br><div><span style=3D"color:rgb(201,209,217=
)">=C2=A0 =C2=A0 </span><span style=3D"color:rgb(255,123,114)">const</span>=
<span style=3D"color:rgb(201,209,217)"> </span><span style=3D"color:rgb(121=
,192,255)">style</span><span style=3D"color:rgb(201,209,217)"> </span><span=
 style=3D"color:rgb(212,212,212)">=3D</span><span style=3D"color:rgb(201,20=
9,217)"> document.</span><span style=3D"color:rgb(210,168,255)">createEleme=
nt</span><span style=3D"color:rgb(201,209,217)">(</span><span style=3D"colo=
r:rgb(165,214,255)">&quot;style&quot;</span><span style=3D"color:rgb(201,20=
9,217)">);</span></div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =
=C2=A0 <a href=3D"http://style.id">style.id</a> </span><span style=3D"color=
:rgb(212,212,212)">=3D</span><span style=3D"color:rgb(201,209,217)"> </span=
><span style=3D"color:rgb(165,214,255)">&quot;lia-acessibilidade-estilos&qu=
ot;</span><span style=3D"color:rgb(201,209,217)">;</span></div><br><div><sp=
an style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 style.textContent </span>=
<span style=3D"color:rgb(212,212,212)">=3D</span><span style=3D"color:rgb(2=
01,209,217)"> </span><span style=3D"color:rgb(165,214,255)">`</span></div><=
div><span style=3D"color:rgb(165,214,255)">=C2=A0 =C2=A0 =C2=A0 html { scro=
ll-behavior: smooth; }</span></div><br><div><span style=3D"color:rgb(165,21=
4,255)">=C2=A0 =C2=A0 =C2=A0 html[data-lia-theme=3D&quot;escuro&quot;] body=
 {</span></div><div><span style=3D"color:rgb(165,214,255)">=C2=A0 =C2=A0 =
=C2=A0 =C2=A0 background: #211d25;</span></div><div><span style=3D"color:rg=
b(165,214,255)">=C2=A0 =C2=A0 =C2=A0 =C2=A0 color: #f8f1fa;</span></div><di=
v><span style=3D"color:rgb(165,214,255)">=C2=A0 =C2=A0 =C2=A0 }</span></div=
><br><div><span style=3D"color:rgb(165,214,255)">=C2=A0 =C2=A0 =C2=A0 html[=
data-lia-theme=3D&quot;escuro&quot;] header,</span></div><div><span style=
=3D"color:rgb(165,214,255)">=C2=A0 =C2=A0 =C2=A0 html[data-lia-theme=3D&quo=
t;escuro&quot;] main,</span></div><div><span style=3D"color:rgb(165,214,255=
)">=C2=A0 =C2=A0 =C2=A0 html[data-lia-theme=3D&quot;escuro&quot;] section,<=
/span></div><div><span style=3D"color:rgb(165,214,255)">=C2=A0 =C2=A0 =C2=
=A0 html[data-lia-theme=3D&quot;escuro&quot;] article,</span></div><div><sp=
an style=3D"color:rgb(165,214,255)">=C2=A0 =C2=A0 =C2=A0 html[data-lia-them=
e=3D&quot;escuro&quot;] footer,</span></div><div><span style=3D"color:rgb(1=
65,214,255)">=C2=A0 =C2=A0 =C2=A0 html[data-lia-theme=3D&quot;escuro&quot;]=
 .card,</span></div><div><span style=3D"color:rgb(165,214,255)">=C2=A0 =C2=
=A0 =C2=A0 html[data-lia-theme=3D&quot;escuro&quot;] .news-card,</span></di=
v><div><span style=3D"color:rgb(165,214,255)">=C2=A0 =C2=A0 =C2=A0 html[dat=
a-lia-theme=3D&quot;escuro&quot;] .help-panel {</span></div><div><span styl=
e=3D"color:rgb(165,214,255)">=C2=A0 =C2=A0 =C2=A0 =C2=A0 background-color: =
#302a35;</span></div><div><span style=3D"color:rgb(165,214,255)">=C2=A0 =C2=
=A0 =C2=A0 =C2=A0 color: #f8f1fa;</span></div><div><span style=3D"color:rgb=
(165,214,255)">=C2=A0 =C2=A0 =C2=A0 }</span></div><br><div><span style=3D"c=
olor:rgb(165,214,255)">=C2=A0 =C2=A0 =C2=A0 html[data-lia-theme=3D&quot;esc=
uro&quot;] p,</span></div><div><span style=3D"color:rgb(165,214,255)">=C2=
=A0 =C2=A0 =C2=A0 html[data-lia-theme=3D&quot;escuro&quot;] small,</span></=
div><div><span style=3D"color:rgb(165,214,255)">=C2=A0 =C2=A0 =C2=A0 html[d=
ata-lia-theme=3D&quot;escuro&quot;] label,</span></div><div><span style=3D"=
color:rgb(165,214,255)">=C2=A0 =C2=A0 =C2=A0 html[data-lia-theme=3D&quot;es=
curo&quot;] h1,</span></div><div><span style=3D"color:rgb(165,214,255)">=C2=
=A0 =C2=A0 =C2=A0 html[data-lia-theme=3D&quot;escuro&quot;] h2,</span></div=
><div><span style=3D"color:rgb(165,214,255)">=C2=A0 =C2=A0 =C2=A0 html[data=
-lia-theme=3D&quot;escuro&quot;] h3 {</span></div><div><span style=3D"color=
:rgb(165,214,255)">=C2=A0 =C2=A0 =C2=A0 =C2=A0 color: inherit;</span></div>=
<div><span style=3D"color:rgb(165,214,255)">=C2=A0 =C2=A0 =C2=A0 }</span></=
div><br><div><span style=3D"color:rgb(165,214,255)">=C2=A0 =C2=A0 =C2=A0 ht=
ml.lia-alto-contraste body,</span></div><div><span style=3D"color:rgb(165,2=
14,255)">=C2=A0 =C2=A0 =C2=A0 html.high-contrast body {</span></div><div><s=
pan style=3D"color:rgb(165,214,255)">=C2=A0 =C2=A0 =C2=A0 =C2=A0 background=
: #000 !important;</span></div><div><span style=3D"color:rgb(165,214,255)">=
=C2=A0 =C2=A0 =C2=A0 =C2=A0 color: #fff !important;</span></div><div><span =
style=3D"color:rgb(165,214,255)">=C2=A0 =C2=A0 =C2=A0 }</span></div><br><di=
v><span style=3D"color:rgb(165,214,255)">=C2=A0 =C2=A0 =C2=A0 html.lia-alto=
-contraste body *,</span></div><div><span style=3D"color:rgb(165,214,255)">=
=C2=A0 =C2=A0 =C2=A0 html.high-contrast body * {</span></div><div><span sty=
le=3D"color:rgb(165,214,255)">=C2=A0 =C2=A0 =C2=A0 =C2=A0 border-color: #ff=
eb3b !important;</span></div><div><span style=3D"color:rgb(165,214,255)">=
=C2=A0 =C2=A0 =C2=A0 }</span></div><br><div><span style=3D"color:rgb(165,21=
4,255)">=C2=A0 =C2=A0 =C2=A0 html.lia-alto-contraste a,</span></div><div><s=
pan style=3D"color:rgb(165,214,255)">=C2=A0 =C2=A0 =C2=A0 html.lia-alto-con=
traste button,</span></div><div><span style=3D"color:rgb(165,214,255)">=C2=
=A0 =C2=A0 =C2=A0 html.high-contrast a,</span></div><div><span style=3D"col=
or:rgb(165,214,255)">=C2=A0 =C2=A0 =C2=A0 html.high-contrast button {</span=
></div><div><span style=3D"color:rgb(165,214,255)">=C2=A0 =C2=A0 =C2=A0 =C2=
=A0 color: #ffeb3b !important;</span></div><div><span style=3D"color:rgb(16=
5,214,255)">=C2=A0 =C2=A0 =C2=A0 =C2=A0 outline-color: #ffeb3b !important;<=
/span></div><div><span style=3D"color:rgb(165,214,255)">=C2=A0 =C2=A0 =C2=
=A0 }</span></div><br><div><span style=3D"color:rgb(165,214,255)">=C2=A0 =
=C2=A0 =C2=A0 .lia-acessibilidade-abrir {</span></div><div><span style=3D"c=
olor:rgb(165,214,255)">=C2=A0 =C2=A0 =C2=A0 =C2=A0 position: static !import=
ant;</span></div><div><span style=3D"color:rgb(165,214,255)">=C2=A0 =C2=A0 =
=C2=A0 =C2=A0 inset: auto !important;</span></div><div><span style=3D"color=
:rgb(165,214,255)">=C2=A0 =C2=A0 =C2=A0 =C2=A0 transform: none !important;<=
/span></div><div><span style=3D"color:rgb(165,214,255)">=C2=A0 =C2=A0 =C2=
=A0 =C2=A0 display: inline-flex !important;</span></div><div><span style=3D=
"color:rgb(165,214,255)">=C2=A0 =C2=A0 =C2=A0 =C2=A0 align-items: center;</=
span></div><div><span style=3D"color:rgb(165,214,255)">=C2=A0 =C2=A0 =C2=A0=
 =C2=A0 justify-content: center;</span></div><div><span style=3D"color:rgb(=
165,214,255)">=C2=A0 =C2=A0 =C2=A0 =C2=A0 gap: 7px;</span></div><div><span =
style=3D"color:rgb(165,214,255)">=C2=A0 =C2=A0 =C2=A0 =C2=A0 min-height: 40=
px;</span></div><div><span style=3D"color:rgb(165,214,255)">=C2=A0 =C2=A0 =
=C2=A0 =C2=A0 box-sizing: border-box;</span></div><div><span style=3D"color=
:rgb(165,214,255)">=C2=A0 =C2=A0 =C2=A0 =C2=A0 padding: 8px 15px;</span></d=
iv><div><span style=3D"color:rgb(165,214,255)">=C2=A0 =C2=A0 =C2=A0 =C2=A0 =
border: 1px solid #e5d7e8 !important;</span></div><div><span style=3D"color=
:rgb(165,214,255)">=C2=A0 =C2=A0 =C2=A0 =C2=A0 border-radius: 30px;</span><=
/div><div><span style=3D"color:rgb(165,214,255)">=C2=A0 =C2=A0 =C2=A0 =C2=
=A0 background: #fbf7fc !important;</span></div><div><span style=3D"color:r=
gb(165,214,255)">=C2=A0 =C2=A0 =C2=A0 =C2=A0 color: #765d80 !important;</sp=
an></div><div><span style=3D"color:rgb(165,214,255)">=C2=A0 =C2=A0 =C2=A0 =
=C2=A0 font-family: &quot;DM Sans&quot;, Arial, sans-serif;</span></div><di=
v><span style=3D"color:rgb(165,214,255)">=C2=A0 =C2=A0 =C2=A0 =C2=A0 font-s=
ize: .86rem;</span></div><div><span style=3D"color:rgb(165,214,255)">=C2=A0=
 =C2=A0 =C2=A0 =C2=A0 font-weight: 400;</span></div><div><span style=3D"col=
or:rgb(165,214,255)">=C2=A0 =C2=A0 =C2=A0 =C2=A0 letter-spacing: 0;</span><=
/div><div><span style=3D"color:rgb(165,214,255)">=C2=A0 =C2=A0 =C2=A0 =C2=
=A0 box-shadow: none !important;</span></div><div><span style=3D"color:rgb(=
165,214,255)">=C2=A0 =C2=A0 =C2=A0 =C2=A0 cursor: pointer;</span></div><div=
><span style=3D"color:rgb(165,214,255)">=C2=A0 =C2=A0 =C2=A0 }</span></div>=
<br><div><span style=3D"color:rgb(165,214,255)">=C2=A0 =C2=A0 =C2=A0 .lia-a=
cessibilidade-abrir:hover {</span></div><div><span style=3D"color:rgb(165,2=
14,255)">=C2=A0 =C2=A0 =C2=A0 =C2=A0 background: #f3ebf6 !important;</span>=
</div><div><span style=3D"color:rgb(165,214,255)">=C2=A0 =C2=A0 =C2=A0 =C2=
=A0 border-color: #d7c4df !important;</span></div><div><span style=3D"color=
:rgb(165,214,255)">=C2=A0 =C2=A0 =C2=A0 }</span></div><br><div><span style=
=3D"color:rgb(165,214,255)">=C2=A0 =C2=A0 =C2=A0 .lia-acessibilidade-painel=
 {</span></div><div><span style=3D"color:rgb(165,214,255)">=C2=A0 =C2=A0 =
=C2=A0 =C2=A0 position: fixed;</span></div><div><span style=3D"color:rgb(16=
5,214,255)">=C2=A0 =C2=A0 =C2=A0 =C2=A0 z-index: 99999;</span></div><div><s=
pan style=3D"color:rgb(165,214,255)">=C2=A0 =C2=A0 =C2=A0 =C2=A0 top: 88px;=
</span></div><div><span style=3D"color:rgb(165,214,255)">=C2=A0 =C2=A0 =C2=
=A0 =C2=A0 right: 4%;</span></div><div><span style=3D"color:rgb(165,214,255=
)">=C2=A0 =C2=A0 =C2=A0 =C2=A0 width: min(340px, calc(100vw - 32px));</span=
></div><div><span style=3D"color:rgb(165,214,255)">=C2=A0 =C2=A0 =C2=A0 =C2=
=A0 max-height: 75vh;</span></div><div><span style=3D"color:rgb(165,214,255=
)">=C2=A0 =C2=A0 =C2=A0 =C2=A0 overflow-y: auto;</span></div><div><span sty=
le=3D"color:rgb(165,214,255)">=C2=A0 =C2=A0 =C2=A0 =C2=A0 box-sizing: borde=
r-box;</span></div><div><span style=3D"color:rgb(165,214,255)">=C2=A0 =C2=
=A0 =C2=A0 =C2=A0 padding: 22px;</span></div><div><span style=3D"color:rgb(=
165,214,255)">=C2=A0 =C2=A0 =C2=A0 =C2=A0 background: #fffafd;</span></div>=
<div><span style=3D"color:rgb(165,214,255)">=C2=A0 =C2=A0 =C2=A0 =C2=A0 col=
or: #51445a;</span></div><div><span style=3D"color:rgb(165,214,255)">=C2=A0=
 =C2=A0 =C2=A0 =C2=A0 border: 1px solid #eaddec;</span></div><div><span sty=
le=3D"color:rgb(165,214,255)">=C2=A0 =C2=A0 =C2=A0 =C2=A0 border-radius: 18=
px;</span></div><div><span style=3D"color:rgb(165,214,255)">=C2=A0 =C2=A0 =
=C2=A0 =C2=A0 box-shadow: 0 12px 35px rgba(70, 45, 75, .12);</span></div><d=
iv><span style=3D"color:rgb(165,214,255)">=C2=A0 =C2=A0 =C2=A0 =C2=A0 font-=
family: &quot;DM Sans&quot;, Arial, sans-serif;</span></div><div><span styl=
e=3D"color:rgb(165,214,255)">=C2=A0 =C2=A0 =C2=A0 }</span></div><br><div><s=
pan style=3D"color:rgb(165,214,255)">=C2=A0 =C2=A0 =C2=A0 .lia-acessibilida=
de-painel[hidden] {</span></div><div><span style=3D"color:rgb(165,214,255)"=
>=C2=A0 =C2=A0 =C2=A0 =C2=A0 display: none !important;</span></div><div><sp=
an style=3D"color:rgb(165,214,255)">=C2=A0 =C2=A0 =C2=A0 }</span></div><br>=
<div><span style=3D"color:rgb(165,214,255)">=C2=A0 =C2=A0 =C2=A0 .lia-acess=
ibilidade-painel h2 {</span></div><div><span style=3D"color:rgb(165,214,255=
)">=C2=A0 =C2=A0 =C2=A0 =C2=A0 margin: 0 0 18px;</span></div><div><span sty=
le=3D"color:rgb(165,214,255)">=C2=A0 =C2=A0 =C2=A0 =C2=A0 color: #795e86;</=
span></div><div><span style=3D"color:rgb(165,214,255)">=C2=A0 =C2=A0 =C2=A0=
 =C2=A0 font-family: &quot;Playfair Display&quot;, Georgia, serif;</span></=
div><div><span style=3D"color:rgb(165,214,255)">=C2=A0 =C2=A0 =C2=A0 =C2=A0=
 font-size: 1.3rem;</span></div><div><span style=3D"color:rgb(165,214,255)"=
>=C2=A0 =C2=A0 =C2=A0 =C2=A0 font-weight: 400;</span></div><div><span style=
=3D"color:rgb(165,214,255)">=C2=A0 =C2=A0 =C2=A0 }</span></div><br><div><sp=
an style=3D"color:rgb(165,214,255)">=C2=A0 =C2=A0 =C2=A0 .lia-acessibilidad=
e-painel label {</span></div><div><span style=3D"color:rgb(165,214,255)">=
=C2=A0 =C2=A0 =C2=A0 =C2=A0 display: block;</span></div><div><span style=3D=
"color:rgb(165,214,255)">=C2=A0 =C2=A0 =C2=A0 =C2=A0 margin: 15px 0 7px;</s=
pan></div><div><span style=3D"color:rgb(165,214,255)">=C2=A0 =C2=A0 =C2=A0 =
=C2=A0 color: #685a6d;</span></div><div><span style=3D"color:rgb(165,214,25=
5)">=C2=A0 =C2=A0 =C2=A0 =C2=A0 font-size: .9rem;</span></div><div><span st=
yle=3D"color:rgb(165,214,255)">=C2=A0 =C2=A0 =C2=A0 =C2=A0 font-weight: 400=
;</span></div><div><span style=3D"color:rgb(165,214,255)">=C2=A0 =C2=A0 =C2=
=A0 }</span></div><br><div><span style=3D"color:rgb(165,214,255)">=C2=A0 =
=C2=A0 =C2=A0 .lia-acessibilidade-painel button,</span></div><div><span sty=
le=3D"color:rgb(165,214,255)">=C2=A0 =C2=A0 =C2=A0 .lia-acessibilidade-pain=
el select {</span></div><div><span style=3D"color:rgb(165,214,255)">=C2=A0 =
=C2=A0 =C2=A0 =C2=A0 min-height: 39px;</span></div><div><span style=3D"colo=
r:rgb(165,214,255)">=C2=A0 =C2=A0 =C2=A0 =C2=A0 padding: 8px 12px;</span></=
div><div><span style=3D"color:rgb(165,214,255)">=C2=A0 =C2=A0 =C2=A0 =C2=A0=
 border: 1px solid #e5d8e9;</span></div><div><span style=3D"color:rgb(165,2=
14,255)">=C2=A0 =C2=A0 =C2=A0 =C2=A0 border-radius: 9px;</span></div><div><=
span style=3D"color:rgb(165,214,255)">=C2=A0 =C2=A0 =C2=A0 =C2=A0 backgroun=
d: #fbf7fc;</span></div><div><span style=3D"color:rgb(165,214,255)">=C2=A0 =
=C2=A0 =C2=A0 =C2=A0 color: #65536d;</span></div><div><span style=3D"color:=
rgb(165,214,255)">=C2=A0 =C2=A0 =C2=A0 =C2=A0 font-family: &quot;DM Sans&qu=
ot;, Arial, sans-serif;</span></div><div><span style=3D"color:rgb(165,214,2=
55)">=C2=A0 =C2=A0 =C2=A0 =C2=A0 font-size: .85rem;</span></div><div><span =
style=3D"color:rgb(165,214,255)">=C2=A0 =C2=A0 =C2=A0 =C2=A0 font-weight: 4=
00;</span></div><div><span style=3D"color:rgb(165,214,255)">=C2=A0 =C2=A0 =
=C2=A0 =C2=A0 cursor: pointer;</span></div><div><span style=3D"color:rgb(16=
5,214,255)">=C2=A0 =C2=A0 =C2=A0 }</span></div><br><div><span style=3D"colo=
r:rgb(165,214,255)">=C2=A0 =C2=A0 =C2=A0 .lia-acessibilidade-painel button:=
hover {</span></div><div><span style=3D"color:rgb(165,214,255)">=C2=A0 =C2=
=A0 =C2=A0 =C2=A0 background: #f2eaf5;</span></div><div><span style=3D"colo=
r:rgb(165,214,255)">=C2=A0 =C2=A0 =C2=A0 }</span></div><br><div><span style=
=3D"color:rgb(165,214,255)">=C2=A0 =C2=A0 =C2=A0 .lia-acessibilidade-acoes =
{</span></div><div><span style=3D"color:rgb(165,214,255)">=C2=A0 =C2=A0 =C2=
=A0 =C2=A0 display: flex;</span></div><div><span style=3D"color:rgb(165,214=
,255)">=C2=A0 =C2=A0 =C2=A0 =C2=A0 flex-wrap: wrap;</span></div><div><span =
style=3D"color:rgb(165,214,255)">=C2=A0 =C2=A0 =C2=A0 =C2=A0 gap: 8px;</spa=
n></div><div><span style=3D"color:rgb(165,214,255)">=C2=A0 =C2=A0 =C2=A0 }<=
/span></div><br><div><span style=3D"color:rgb(165,214,255)">=C2=A0 =C2=A0 =
=C2=A0 .lia-acessibilidade-fechar {</span></div><div><span style=3D"color:r=
gb(165,214,255)">=C2=A0 =C2=A0 =C2=A0 =C2=A0 float: right;</span></div><div=
><span style=3D"color:rgb(165,214,255)">=C2=A0 =C2=A0 =C2=A0 }</span></div>=
<br><div><span style=3D"color:rgb(165,214,255)">=C2=A0 =C2=A0 =C2=A0 @media=
 (max-width: 650px) {</span></div><div><span style=3D"color:rgb(165,214,255=
)">=C2=A0 =C2=A0 =C2=A0 =C2=A0 .lia-acessibilidade-abrir {</span></div><div=
><span style=3D"color:rgb(165,214,255)">=C2=A0 =C2=A0 =C2=A0 =C2=A0 =C2=A0 =
min-height: 36px;</span></div><div><span style=3D"color:rgb(165,214,255)">=
=C2=A0 =C2=A0 =C2=A0 =C2=A0 =C2=A0 padding: 7px 11px;</span></div><div><spa=
n style=3D"color:rgb(165,214,255)">=C2=A0 =C2=A0 =C2=A0 =C2=A0 =C2=A0 font-=
size: .78rem;</span></div><div><span style=3D"color:rgb(165,214,255)">=C2=
=A0 =C2=A0 =C2=A0 =C2=A0 }</span></div><br><div><span style=3D"color:rgb(16=
5,214,255)">=C2=A0 =C2=A0 =C2=A0 =C2=A0 .lia-acessibilidade-painel {</span>=
</div><div><span style=3D"color:rgb(165,214,255)">=C2=A0 =C2=A0 =C2=A0 =C2=
=A0 =C2=A0 top: 80px;</span></div><div><span style=3D"color:rgb(165,214,255=
)">=C2=A0 =C2=A0 =C2=A0 =C2=A0 =C2=A0 right: 12px;</span></div><div><span s=
tyle=3D"color:rgb(165,214,255)">=C2=A0 =C2=A0 =C2=A0 =C2=A0 =C2=A0 width: m=
in(340px, calc(100vw - 24px));</span></div><div><span style=3D"color:rgb(16=
5,214,255)">=C2=A0 =C2=A0 =C2=A0 =C2=A0 }</span></div><div><span style=3D"c=
olor:rgb(165,214,255)">=C2=A0 =C2=A0 =C2=A0 }</span></div><div><span style=
=3D"color:rgb(165,214,255)">=C2=A0 =C2=A0 `</span><span style=3D"color:rgb(=
201,209,217)">;</span></div><br><div><span style=3D"color:rgb(201,209,217)"=
>=C2=A0 =C2=A0 document.head.</span><span style=3D"color:rgb(210,168,255)">=
appendChild</span><span style=3D"color:rgb(201,209,217)">(style);</span></d=
iv><div><span style=3D"color:rgb(201,209,217)">=C2=A0 }</span></div><br><di=
v><span style=3D"color:rgb(201,209,217)">=C2=A0 </span><span style=3D"color=
:rgb(255,123,114)">function</span><span style=3D"color:rgb(201,209,217)"> <=
/span><span style=3D"color:rgb(210,168,255)">prepararAreaDosBotoes</span><s=
pan style=3D"color:rgb(201,209,217)">() {</span></div><div><span style=3D"c=
olor:rgb(201,209,217)">=C2=A0 =C2=A0 </span><span style=3D"color:rgb(255,12=
3,114)">let</span><span style=3D"color:rgb(201,209,217)"> header </span><sp=
an style=3D"color:rgb(212,212,212)">=3D</span><span style=3D"color:rgb(201,=
209,217)"> document.</span><span style=3D"color:rgb(210,168,255)">querySele=
ctor</span><span style=3D"color:rgb(201,209,217)">(</span><span style=3D"co=
lor:rgb(165,214,255)">&quot;header&quot;</span><span style=3D"color:rgb(201=
,209,217)">);</span></div><br><div><span style=3D"color:rgb(201,209,217)">=
=C2=A0 =C2=A0 </span><span style=3D"color:rgb(197,134,192)">if</span><span =
style=3D"color:rgb(201,209,217)"> (</span><span style=3D"color:rgb(212,212,=
212)">!</span><span style=3D"color:rgb(201,209,217)">header) {</span></div>=
<div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 header </s=
pan><span style=3D"color:rgb(212,212,212)">=3D</span><span style=3D"color:r=
gb(201,209,217)"> document.</span><span style=3D"color:rgb(210,168,255)">cr=
eateElement</span><span style=3D"color:rgb(201,209,217)">(</span><span styl=
e=3D"color:rgb(165,214,255)">&quot;header&quot;</span><span style=3D"color:=
rgb(201,209,217)">);</span></div><div><span style=3D"color:rgb(201,209,217)=
">=C2=A0 =C2=A0 =C2=A0 header.className </span><span style=3D"color:rgb(212=
,212,212)">=3D</span><span style=3D"color:rgb(201,209,217)"> </span><span s=
tyle=3D"color:rgb(165,214,255)">&quot;lia-cabecalho-global&quot;</span><spa=
n style=3D"color:rgb(201,209,217)">;</span></div><div><span style=3D"color:=
rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 document.body.</span><span style=3D"=
color:rgb(210,168,255)">prepend</span><span style=3D"color:rgb(201,209,217)=
">(header);</span></div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =
=C2=A0 }</span></div><br><div><span style=3D"color:rgb(201,209,217)">=C2=A0=
 =C2=A0 </span><span style=3D"color:rgb(255,123,114)">let</span><span style=
=3D"color:rgb(201,209,217)"> controles </span><span style=3D"color:rgb(212,=
212,212)">=3D</span><span style=3D"color:rgb(201,209,217)"> header.</span><=
span style=3D"color:rgb(210,168,255)">querySelector</span><span style=3D"co=
lor:rgb(201,209,217)">(</span><span style=3D"color:rgb(165,214,255)">&quot;=
.lia-controles-topo&quot;</span><span style=3D"color:rgb(201,209,217)">);</=
span></div><br><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 </=
span><span style=3D"color:rgb(197,134,192)">if</span><span style=3D"color:r=
gb(201,209,217)"> (</span><span style=3D"color:rgb(212,212,212)">!</span><s=
pan style=3D"color:rgb(201,209,217)">controles) {</span></div><div><span st=
yle=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 controles </span><span =
style=3D"color:rgb(212,212,212)">=3D</span><span style=3D"color:rgb(201,209=
,217)"> document.</span><span style=3D"color:rgb(210,168,255)">createElemen=
t</span><span style=3D"color:rgb(201,209,217)">(</span><span style=3D"color=
:rgb(165,214,255)">&quot;div&quot;</span><span style=3D"color:rgb(201,209,2=
17)">);</span></div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=
=A0 =C2=A0 controles.className </span><span style=3D"color:rgb(212,212,212)=
">=3D</span><span style=3D"color:rgb(201,209,217)"> </span><span style=3D"c=
olor:rgb(165,214,255)">&quot;lia-controles-topo&quot;</span><span style=3D"=
color:rgb(201,209,217)">;</span></div><div><span style=3D"color:rgb(201,209=
,217)">=C2=A0 =C2=A0 =C2=A0 header.</span><span style=3D"color:rgb(210,168,=
255)">appendChild</span><span style=3D"color:rgb(201,209,217)">(controles);=
</span></div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 }</s=
pan></div><br><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 </s=
pan><span style=3D"color:rgb(255,123,114)">const</span><span style=3D"color=
:rgb(201,209,217)"> </span><span style=3D"color:rgb(121,192,255)">voltar</s=
pan><span style=3D"color:rgb(201,209,217)"> </span><span style=3D"color:rgb=
(212,212,212)">=3D</span><span style=3D"color:rgb(201,209,217)"> header.</s=
pan><span style=3D"color:rgb(210,168,255)">querySelector</span><span style=
=3D"color:rgb(201,209,217)">(</span><span style=3D"color:rgb(165,214,255)">=
&quot;.lia-voltar-pagina&quot;</span><span style=3D"color:rgb(201,209,217)"=
>);</span></div><br><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=
=A0 </span><span style=3D"color:rgb(197,134,192)">if</span><span style=3D"c=
olor:rgb(201,209,217)"> (voltar </span><span style=3D"color:rgb(212,212,212=
)">&amp;&amp;</span><span style=3D"color:rgb(201,209,217)"> voltar.parentEl=
ement </span><span style=3D"color:rgb(212,212,212)">!=3D=3D</span><span sty=
le=3D"color:rgb(201,209,217)"> controles) {</span></div><div><span style=3D=
"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 controles.</span><span style=
=3D"color:rgb(210,168,255)">prepend</span><span style=3D"color:rgb(201,209,=
217)">(voltar);</span></div><div><span style=3D"color:rgb(201,209,217)">=C2=
=A0 =C2=A0 }</span></div><br><div><span style=3D"color:rgb(201,209,217)">=
=C2=A0 =C2=A0 </span><span style=3D"color:rgb(197,134,192)">return</span><s=
pan style=3D"color:rgb(201,209,217)"> { header, controles };</span></div><d=
iv><span style=3D"color:rgb(201,209,217)">=C2=A0 }</span></div><br><div><sp=
an style=3D"color:rgb(201,209,217)">=C2=A0 </span><span style=3D"color:rgb(=
255,123,114)">function</span><span style=3D"color:rgb(201,209,217)"> </span=
><span style=3D"color:rgb(210,168,255)">localizarBotoesAntigos</span><span =
style=3D"color:rgb(201,209,217)">(</span><span style=3D"color:rgb(255,166,8=
7)">header</span><span style=3D"color:rgb(201,209,217)">) {</span></div><di=
v><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 </span><span style=
=3D"color:rgb(255,123,114)">const</span><span style=3D"color:rgb(201,209,21=
7)"> </span><span style=3D"color:rgb(121,192,255)">todos</span><span style=
=3D"color:rgb(201,209,217)"> </span><span style=3D"color:rgb(212,212,212)">=
=3D</span><span style=3D"color:rgb(201,209,217)"> Array.</span><span style=
=3D"color:rgb(210,168,255)">from</span><span style=3D"color:rgb(201,209,217=
)">(</span></div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =
=C2=A0 document.</span><span style=3D"color:rgb(210,168,255)">querySelector=
All</span><span style=3D"color:rgb(201,209,217)">(</span><span style=3D"col=
or:rgb(165,214,255)">&quot;button, a, [role=3D&#39;button&#39;]&quot;</span=
><span style=3D"color:rgb(201,209,217)">)</span></div><div><span style=3D"c=
olor:rgb(201,209,217)">=C2=A0 =C2=A0 );</span></div><br><div><span style=3D=
"color:rgb(201,209,217)">=C2=A0 =C2=A0 </span><span style=3D"color:rgb(197,=
134,192)">return</span><span style=3D"color:rgb(201,209,217)"> todos.</span=
><span style=3D"color:rgb(210,168,255)">filter</span><span style=3D"color:r=
gb(201,209,217)">((</span><span style=3D"color:rgb(255,166,87)">element</sp=
an><span style=3D"color:rgb(201,209,217)">) </span><span style=3D"color:rgb=
(255,123,114)">=3D&gt;</span><span style=3D"color:rgb(201,209,217)"> {</spa=
n></div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </=
span><span style=3D"color:rgb(255,123,114)">const</span><span style=3D"colo=
r:rgb(201,209,217)"> </span><span style=3D"color:rgb(121,192,255)">id</span=
><span style=3D"color:rgb(201,209,217)"> </span><span style=3D"color:rgb(21=
2,212,212)">=3D</span><span style=3D"color:rgb(201,209,217)"> (<a href=3D"h=
ttp://element.id">element.id</a> </span><span style=3D"color:rgb(212,212,21=
2)">||</span><span style=3D"color:rgb(201,209,217)"> </span><span style=3D"=
color:rgb(165,214,255)">&quot;&quot;</span><span style=3D"color:rgb(201,209=
,217)">).</span><span style=3D"color:rgb(210,168,255)">toLowerCase</span><s=
pan style=3D"color:rgb(201,209,217)">();</span></div><div><span style=3D"co=
lor:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:rgb(=
255,123,114)">const</span><span style=3D"color:rgb(201,209,217)"> </span><s=
pan style=3D"color:rgb(121,192,255)">classe</span><span style=3D"color:rgb(=
201,209,217)"> </span><span style=3D"color:rgb(212,212,212)">=3D</span><spa=
n style=3D"color:rgb(201,209,217)"> (element.className </span><span style=
=3D"color:rgb(212,212,212)">||</span><span style=3D"color:rgb(201,209,217)"=
> </span><span style=3D"color:rgb(165,214,255)">&quot;&quot;</span><span st=
yle=3D"color:rgb(201,209,217)">).</span><span style=3D"color:rgb(210,168,25=
5)">toString</span><span style=3D"color:rgb(201,209,217)">().</span><span s=
tyle=3D"color:rgb(210,168,255)">toLowerCase</span><span style=3D"color:rgb(=
201,209,217)">();</span></div><div><span style=3D"color:rgb(201,209,217)">=
=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:rgb(255,123,114)">const</s=
pan><span style=3D"color:rgb(201,209,217)"> </span><span style=3D"color:rgb=
(121,192,255)">texto</span><span style=3D"color:rgb(201,209,217)"> </span><=
span style=3D"color:rgb(212,212,212)">=3D</span><span style=3D"color:rgb(20=
1,209,217)"> (element.textContent </span><span style=3D"color:rgb(212,212,2=
12)">||</span><span style=3D"color:rgb(201,209,217)"> </span><span style=3D=
"color:rgb(165,214,255)">&quot;&quot;</span><span style=3D"color:rgb(201,20=
9,217)">).</span><span style=3D"color:rgb(210,168,255)">trim</span><span st=
yle=3D"color:rgb(201,209,217)">().</span><span style=3D"color:rgb(210,168,2=
55)">toLowerCase</span><span style=3D"color:rgb(201,209,217)">();</span></d=
iv><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span>=
<span style=3D"color:rgb(255,123,114)">const</span><span style=3D"color:rgb=
(201,209,217)"> </span><span style=3D"color:rgb(121,192,255)">aria</span><s=
pan style=3D"color:rgb(201,209,217)"> </span><span style=3D"color:rgb(212,2=
12,212)">=3D</span><span style=3D"color:rgb(201,209,217)"> (element.</span>=
<span style=3D"color:rgb(210,168,255)">getAttribute</span><span style=3D"co=
lor:rgb(201,209,217)">(</span><span style=3D"color:rgb(165,214,255)">&quot;=
aria-label&quot;</span><span style=3D"color:rgb(201,209,217)">) </span><spa=
n style=3D"color:rgb(212,212,212)">||</span><span style=3D"color:rgb(201,20=
9,217)"> </span><span style=3D"color:rgb(165,214,255)">&quot;&quot;</span><=
span style=3D"color:rgb(201,209,217)">).</span><span style=3D"color:rgb(210=
,168,255)">toLowerCase</span><span style=3D"color:rgb(201,209,217)">();</sp=
an></div><br><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=
=A0 </span><span style=3D"color:rgb(255,123,114)">const</span><span style=
=3D"color:rgb(201,209,217)"> </span><span style=3D"color:rgb(121,192,255)">=
identificador</span><span style=3D"color:rgb(201,209,217)"> </span><span st=
yle=3D"color:rgb(212,212,212)">=3D</span></div><div><span style=3D"color:rg=
b(201,209,217)">=C2=A0 =C2=A0 =C2=A0 =C2=A0 id.</span><span style=3D"color:=
rgb(210,168,255)">includes</span><span style=3D"color:rgb(201,209,217)">(</=
span><span style=3D"color:rgb(165,214,255)">&quot;accessibility&quot;</span=
><span style=3D"color:rgb(201,209,217)">) </span><span style=3D"color:rgb(2=
12,212,212)">||</span></div><div><span style=3D"color:rgb(201,209,217)">=C2=
=A0 =C2=A0 =C2=A0 =C2=A0 id.</span><span style=3D"color:rgb(210,168,255)">i=
ncludes</span><span style=3D"color:rgb(201,209,217)">(</span><span style=3D=
"color:rgb(165,214,255)">&quot;acessibilidade&quot;</span><span style=3D"co=
lor:rgb(201,209,217)">) </span><span style=3D"color:rgb(212,212,212)">||</s=
pan></div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 =
=C2=A0 classe.</span><span style=3D"color:rgb(210,168,255)">includes</span>=
<span style=3D"color:rgb(201,209,217)">(</span><span style=3D"color:rgb(165=
,214,255)">&quot;accessibility&quot;</span><span style=3D"color:rgb(201,209=
,217)">) </span><span style=3D"color:rgb(212,212,212)">||</span></div><div>=
<span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 =C2=A0 classe.<=
/span><span style=3D"color:rgb(210,168,255)">includes</span><span style=3D"=
color:rgb(201,209,217)">(</span><span style=3D"color:rgb(165,214,255)">&quo=
t;acessibilidade&quot;</span><span style=3D"color:rgb(201,209,217)">) </spa=
n><span style=3D"color:rgb(212,212,212)">||</span></div><div><span style=3D=
"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 =C2=A0 aria.</span><span styl=
e=3D"color:rgb(210,168,255)">includes</span><span style=3D"color:rgb(201,20=
9,217)">(</span><span style=3D"color:rgb(165,214,255)">&quot;accessibility&=
quot;</span><span style=3D"color:rgb(201,209,217)">) </span><span style=3D"=
color:rgb(212,212,212)">||</span></div><div><span style=3D"color:rgb(201,20=
9,217)">=C2=A0 =C2=A0 =C2=A0 =C2=A0 aria.</span><span style=3D"color:rgb(21=
0,168,255)">includes</span><span style=3D"color:rgb(201,209,217)">(</span><=
span style=3D"color:rgb(165,214,255)">&quot;acessibilidade&quot;</span><spa=
n style=3D"color:rgb(201,209,217)">);</span></div><br><div><span style=3D"c=
olor:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:rgb=
(255,123,114)">const</span><span style=3D"color:rgb(201,209,217)"> </span><=
span style=3D"color:rgb(121,192,255)">textoDeAcessibilidade</span><span sty=
le=3D"color:rgb(201,209,217)"> </span><span style=3D"color:rgb(212,212,212)=
">=3D</span></div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0=
 =C2=A0 =C2=A0 </span><span style=3D"color:rgb(165,214,255)">/</span><span =
style=3D"color:rgb(220,220,170)">^</span><span style=3D"color:rgb(206,145,1=
20)">(</span><span style=3D"color:rgb(165,214,255)">=E2=99=BF</span><span s=
tyle=3D"color:rgb(209,105,105)">\s</span><span style=3D"color:rgb(215,186,1=
25)">*</span><span style=3D"color:rgb(206,145,120)">)</span><span style=3D"=
color:rgb(215,186,125)">?</span><span style=3D"color:rgb(206,145,120)">(</s=
pan><span style=3D"color:rgb(165,214,255)">acessibilidade</span><span style=
=3D"color:rgb(220,220,170)">|</span><span style=3D"color:rgb(165,214,255)">=
accessibility</span><span style=3D"color:rgb(206,145,120)">)</span><span st=
yle=3D"color:rgb(220,220,170)">$</span><span style=3D"color:rgb(165,214,255=
)">/</span><span style=3D"color:rgb(201,209,217)">.</span><span style=3D"co=
lor:rgb(210,168,255)">test</span><span style=3D"color:rgb(201,209,217)">(te=
xto);</span></div><br><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =
=C2=A0 =C2=A0 </span><span style=3D"color:rgb(197,134,192)">return</span><s=
pan style=3D"color:rgb(201,209,217)"> identificador </span><span style=3D"c=
olor:rgb(212,212,212)">||</span><span style=3D"color:rgb(201,209,217)"> tex=
toDeAcessibilidade;</span></div><div><span style=3D"color:rgb(201,209,217)"=
>=C2=A0 =C2=A0 });</span></div><div><span style=3D"color:rgb(201,209,217)">=
=C2=A0 }</span></div><br><div><span style=3D"color:rgb(201,209,217)">=C2=A0=
 </span><span style=3D"color:rgb(255,123,114)">function</span><span style=
=3D"color:rgb(201,209,217)"> </span><span style=3D"color:rgb(210,168,255)">=
criarBotaoUnico</span><span style=3D"color:rgb(201,209,217)">(</span><span =
style=3D"color:rgb(255,166,87)">header</span><span style=3D"color:rgb(201,2=
09,217)">, </span><span style=3D"color:rgb(255,166,87)">controles</span><sp=
an style=3D"color:rgb(201,209,217)">) {</span></div><div><span style=3D"col=
or:rgb(201,209,217)">=C2=A0 =C2=A0 </span><span style=3D"color:rgb(255,123,=
114)">const</span><span style=3D"color:rgb(201,209,217)"> </span><span styl=
e=3D"color:rgb(121,192,255)">antigos</span><span style=3D"color:rgb(201,209=
,217)"> </span><span style=3D"color:rgb(212,212,212)">=3D</span><span style=
=3D"color:rgb(201,209,217)"> </span><span style=3D"color:rgb(210,168,255)">=
localizarBotoesAntigos</span><span style=3D"color:rgb(201,209,217)">(header=
);</span></div><br><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=
=A0 </span><span style=3D"color:rgb(255,123,114)">let</span><span style=3D"=
color:rgb(201,209,217)"> button </span><span style=3D"color:rgb(212,212,212=
)">=3D</span><span style=3D"color:rgb(201,209,217)"> antigos.</span><span s=
tyle=3D"color:rgb(210,168,255)">find</span><span style=3D"color:rgb(201,209=
,217)">((</span><span style=3D"color:rgb(255,166,87)">item</span><span styl=
e=3D"color:rgb(201,209,217)">) </span><span style=3D"color:rgb(255,123,114)=
">=3D&gt;</span></div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =
=C2=A0 =C2=A0 item.tagName.</span><span style=3D"color:rgb(210,168,255)">to=
LowerCase</span><span style=3D"color:rgb(201,209,217)">() </span><span styl=
e=3D"color:rgb(212,212,212)">=3D=3D=3D</span><span style=3D"color:rgb(201,2=
09,217)"> </span><span style=3D"color:rgb(165,214,255)">&quot;button&quot;<=
/span></div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 );</s=
pan></div><br><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 </s=
pan><span style=3D"color:rgb(197,134,192)">if</span><span style=3D"color:rg=
b(201,209,217)"> (button) {</span></div><div><span style=3D"color:rgb(201,2=
09,217)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:rgb(139,148,158)"=
>// Remove eventos antigos e mant=C3=A9m os atributos visuais do bot=C3=A3o=
.</span></div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=
=A0 </span><span style=3D"color:rgb(255,123,114)">const</span><span style=
=3D"color:rgb(201,209,217)"> </span><span style=3D"color:rgb(121,192,255)">=
novoBotao</span><span style=3D"color:rgb(201,209,217)"> </span><span style=
=3D"color:rgb(212,212,212)">=3D</span><span style=3D"color:rgb(201,209,217)=
"> button.</span><span style=3D"color:rgb(210,168,255)">cloneNode</span><sp=
an style=3D"color:rgb(201,209,217)">(</span><span style=3D"color:rgb(86,156=
,214)">true</span><span style=3D"color:rgb(201,209,217)">);</span></div><di=
v><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 button.</span=
><span style=3D"color:rgb(210,168,255)">replaceWith</span><span style=3D"co=
lor:rgb(201,209,217)">(novoBotao);</span></div><div><span style=3D"color:rg=
b(201,209,217)">=C2=A0 =C2=A0 =C2=A0 button </span><span style=3D"color:rgb=
(212,212,212)">=3D</span><span style=3D"color:rgb(201,209,217)"> novoBotao;=
</span></div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 } </=
span><span style=3D"color:rgb(197,134,192)">else</span><span style=3D"color=
:rgb(201,209,217)"> {</span></div><div><span style=3D"color:rgb(201,209,217=
)">=C2=A0 =C2=A0 =C2=A0 button </span><span style=3D"color:rgb(212,212,212)=
">=3D</span><span style=3D"color:rgb(201,209,217)"> document.</span><span s=
tyle=3D"color:rgb(210,168,255)">createElement</span><span style=3D"color:rg=
b(201,209,217)">(</span><span style=3D"color:rgb(165,214,255)">&quot;button=
&quot;</span><span style=3D"color:rgb(201,209,217)">);</span></div><div><sp=
an style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 }</span></div><br><div><s=
pan style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 antigos.</span><span sty=
le=3D"color:rgb(210,168,255)">forEach</span><span style=3D"color:rgb(201,20=
9,217)">((</span><span style=3D"color:rgb(255,166,87)">item</span><span sty=
le=3D"color:rgb(201,209,217)">) </span><span style=3D"color:rgb(255,123,114=
)">=3D&gt;</span><span style=3D"color:rgb(201,209,217)"> {</span></div><div=
><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span s=
tyle=3D"color:rgb(197,134,192)">if</span><span style=3D"color:rgb(201,209,2=
17)"> (item </span><span style=3D"color:rgb(212,212,212)">!=3D=3D</span><sp=
an style=3D"color:rgb(201,209,217)"> button </span><span style=3D"color:rgb=
(212,212,212)">&amp;&amp;</span><span style=3D"color:rgb(201,209,217)"> ite=
m.isConnected) item.</span><span style=3D"color:rgb(210,168,255)">remove</s=
pan><span style=3D"color:rgb(201,209,217)">();</span></div><div><span style=
=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 });</span></div><br><div><span st=
yle=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 button.type </span><span style=
=3D"color:rgb(212,212,212)">=3D</span><span style=3D"color:rgb(201,209,217)=
"> </span><span style=3D"color:rgb(165,214,255)">&quot;button&quot;</span><=
span style=3D"color:rgb(201,209,217)">;</span></div><div><span style=3D"col=
or:rgb(201,209,217)">=C2=A0 =C2=A0 <a href=3D"http://button.id">button.id</=
a> </span><span style=3D"color:rgb(212,212,212)">=3D</span><span style=3D"c=
olor:rgb(201,209,217)"> </span><span style=3D"color:rgb(165,214,255)">&quot=
;lia-acessibilidade-botao&quot;</span><span style=3D"color:rgb(201,209,217)=
">;</span></div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 b=
utton.className </span><span style=3D"color:rgb(212,212,212)">=3D</span><sp=
an style=3D"color:rgb(201,209,217)"> </span><span style=3D"color:rgb(165,21=
4,255)">&quot;lia-acessibilidade-abrir&quot;</span><span style=3D"color:rgb=
(201,209,217)">;</span></div><div><span style=3D"color:rgb(201,209,217)">=
=C2=A0 =C2=A0 button.textContent </span><span style=3D"color:rgb(212,212,21=
2)">=3D</span><span style=3D"color:rgb(201,209,217)"> </span><span style=3D=
"color:rgb(165,214,255)">&quot;Acessibilidade&quot;</span><span style=3D"co=
lor:rgb(201,209,217)">;</span></div><div><span style=3D"color:rgb(201,209,2=
17)">=C2=A0 =C2=A0 button.</span><span style=3D"color:rgb(210,168,255)">set=
Attribute</span><span style=3D"color:rgb(201,209,217)">(</span><span style=
=3D"color:rgb(165,214,255)">&quot;aria-expanded&quot;</span><span style=3D"=
color:rgb(201,209,217)">, </span><span style=3D"color:rgb(165,214,255)">&qu=
ot;false&quot;</span><span style=3D"color:rgb(201,209,217)">);</span></div>=
<div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 button.</span><sp=
an style=3D"color:rgb(210,168,255)">setAttribute</span><span style=3D"color=
:rgb(201,209,217)">(</span><span style=3D"color:rgb(165,214,255)">&quot;ari=
a-controls&quot;</span><span style=3D"color:rgb(201,209,217)">, </span><spa=
n style=3D"color:rgb(165,214,255)">&quot;lia-acessibilidade-painel&quot;</s=
pan><span style=3D"color:rgb(201,209,217)">);</span></div><br><div><span st=
yle=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 controles.</span><span style=
=3D"color:rgb(210,168,255)">appendChild</span><span style=3D"color:rgb(201,=
209,217)">(button);</span></div><br><div><span style=3D"color:rgb(201,209,2=
17)">=C2=A0 =C2=A0 </span><span style=3D"color:rgb(197,134,192)">return</sp=
an><span style=3D"color:rgb(201,209,217)"> button;</span></div><div><span s=
tyle=3D"color:rgb(201,209,217)">=C2=A0 }</span></div><br><div><span style=
=3D"color:rgb(201,209,217)">=C2=A0 </span><span style=3D"color:rgb(255,123,=
114)">function</span><span style=3D"color:rgb(201,209,217)"> </span><span s=
tyle=3D"color:rgb(210,168,255)">criarPainel</span><span style=3D"color:rgb(=
201,209,217)">() {</span></div><div><span style=3D"color:rgb(201,209,217)">=
=C2=A0 =C2=A0 </span><span style=3D"color:rgb(139,148,158)">// Remove vers=
=C3=B5es antigas do painel para n=C3=A3o deixar dois sistemas ativos.</span=
></div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 document.<=
/span><span style=3D"color:rgb(210,168,255)">getElementById</span><span sty=
le=3D"color:rgb(201,209,217)">(</span><span style=3D"color:rgb(165,214,255)=
">&quot;accessibilityPanel&quot;</span><span style=3D"color:rgb(201,209,217=
)">)?.</span><span style=3D"color:rgb(210,168,255)">remove</span><span styl=
e=3D"color:rgb(201,209,217)">();</span></div><div><span style=3D"color:rgb(=
201,209,217)">=C2=A0 =C2=A0 document.</span><span style=3D"color:rgb(210,16=
8,255)">getElementById</span><span style=3D"color:rgb(201,209,217)">(</span=
><span style=3D"color:rgb(165,214,255)">&quot;lia-acessibilidade-painel&quo=
t;</span><span style=3D"color:rgb(201,209,217)">)?.</span><span style=3D"co=
lor:rgb(210,168,255)">remove</span><span style=3D"color:rgb(201,209,217)">(=
);</span></div><br><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=
=A0 </span><span style=3D"color:rgb(255,123,114)">const</span><span style=
=3D"color:rgb(201,209,217)"> </span><span style=3D"color:rgb(121,192,255)">=
panel</span><span style=3D"color:rgb(201,209,217)"> </span><span style=3D"c=
olor:rgb(212,212,212)">=3D</span><span style=3D"color:rgb(201,209,217)"> do=
cument.</span><span style=3D"color:rgb(210,168,255)">createElement</span><s=
pan style=3D"color:rgb(201,209,217)">(</span><span style=3D"color:rgb(165,2=
14,255)">&quot;section&quot;</span><span style=3D"color:rgb(201,209,217)">)=
;</span></div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 <a =
href=3D"http://panel.id">panel.id</a> </span><span style=3D"color:rgb(212,2=
12,212)">=3D</span><span style=3D"color:rgb(201,209,217)"> </span><span sty=
le=3D"color:rgb(165,214,255)">&quot;lia-acessibilidade-painel&quot;</span><=
span style=3D"color:rgb(201,209,217)">;</span></div><div><span style=3D"col=
or:rgb(201,209,217)">=C2=A0 =C2=A0 panel.className </span><span style=3D"co=
lor:rgb(212,212,212)">=3D</span><span style=3D"color:rgb(201,209,217)"> </s=
pan><span style=3D"color:rgb(165,214,255)">&quot;lia-acessibilidade-painel&=
quot;</span><span style=3D"color:rgb(201,209,217)">;</span></div><div><span=
 style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 panel.</span><span style=3D=
"color:rgb(210,168,255)">setAttribute</span><span style=3D"color:rgb(201,20=
9,217)">(</span><span style=3D"color:rgb(165,214,255)">&quot;aria-label&quo=
t;</span><span style=3D"color:rgb(201,209,217)">, </span><span style=3D"col=
or:rgb(165,214,255)">&quot;Configura=C3=A7=C3=B5es de acessibilidade&quot;<=
/span><span style=3D"color:rgb(201,209,217)">);</span></div><div><span styl=
e=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 panel.hidden </span><span style=
=3D"color:rgb(212,212,212)">=3D</span><span style=3D"color:rgb(201,209,217)=
"> </span><span style=3D"color:rgb(86,156,214)">true</span><span style=3D"c=
olor:rgb(201,209,217)">;</span></div><br><div><span style=3D"color:rgb(201,=
209,217)">=C2=A0 =C2=A0 panel.innerHTML </span><span style=3D"color:rgb(212=
,212,212)">=3D</span><span style=3D"color:rgb(201,209,217)"> </span><span s=
tyle=3D"color:rgb(165,214,255)">`</span></div><div><span style=3D"color:rgb=
(165,214,255)">=C2=A0 =C2=A0 =C2=A0 &lt;button type=3D&quot;button&quot; cl=
ass=3D&quot;lia-acessibilidade-fechar&quot;&gt;</span></div><div><span styl=
e=3D"color:rgb(165,214,255)">=C2=A0 =C2=A0 =C2=A0 =C2=A0 Fechar</span></div=
><div><span style=3D"color:rgb(165,214,255)">=C2=A0 =C2=A0 =C2=A0 &lt;/butt=
on&gt;</span></div><br><div><span style=3D"color:rgb(165,214,255)">=C2=A0 =
=C2=A0 =C2=A0 &lt;h2&gt;Acessibilidade&lt;/h2&gt;</span></div><br><div><spa=
n style=3D"color:rgb(165,214,255)">=C2=A0 =C2=A0 =C2=A0 &lt;label for=3D&qu=
ot;lia-fonte-menos&quot;&gt;Tamanho do texto&lt;/label&gt;</span></div><div=
><span style=3D"color:rgb(165,214,255)">=C2=A0 =C2=A0 =C2=A0 &lt;div class=
=3D&quot;lia-acessibilidade-acoes&quot;&gt;</span></div><div><span style=3D=
"color:rgb(165,214,255)">=C2=A0 =C2=A0 =C2=A0 =C2=A0 &lt;button type=3D&quo=
t;button&quot; id=3D&quot;lia-fonte-menos&quot;&gt;A=E2=88=92 Diminuir&lt;/=
button&gt;</span></div><div><span style=3D"color:rgb(165,214,255)">=C2=A0 =
=C2=A0 =C2=A0 =C2=A0 &lt;button type=3D&quot;button&quot; id=3D&quot;lia-fo=
nte-mais&quot;&gt;A+ Aumentar&lt;/button&gt;</span></div><div><span style=
=3D"color:rgb(165,214,255)">=C2=A0 =C2=A0 =C2=A0 &lt;/div&gt;</span></div><=
br><div><span style=3D"color:rgb(165,214,255)">=C2=A0 =C2=A0 =C2=A0 &lt;lab=
el for=3D&quot;lia-idioma&quot;&gt;Idioma&lt;/label&gt;</span></div><div><s=
pan style=3D"color:rgb(165,214,255)">=C2=A0 =C2=A0 =C2=A0 &lt;select id=3D&=
quot;lia-idioma&quot;&gt;</span></div><div><span style=3D"color:rgb(165,214=
,255)">=C2=A0 =C2=A0 =C2=A0 =C2=A0 &lt;option value=3D&quot;pt&quot;&gt;Por=
tugu=C3=AAs&lt;/option&gt;</span></div><div><span style=3D"color:rgb(165,21=
4,255)">=C2=A0 =C2=A0 =C2=A0 =C2=A0 &lt;option value=3D&quot;en&quot;&gt;En=
glish&lt;/option&gt;</span></div><div><span style=3D"color:rgb(165,214,255)=
">=C2=A0 =C2=A0 =C2=A0 =C2=A0 &lt;option value=3D&quot;es&quot;&gt;Espa=C3=
=B1ol&lt;/option&gt;</span></div><div><span style=3D"color:rgb(165,214,255)=
">=C2=A0 =C2=A0 =C2=A0 &lt;/select&gt;</span></div><br><div><span style=3D"=
color:rgb(165,214,255)">=C2=A0 =C2=A0 =C2=A0 &lt;label&gt;Visual&lt;/label&=
gt;</span></div><div><span style=3D"color:rgb(165,214,255)">=C2=A0 =C2=A0 =
=C2=A0 &lt;div class=3D&quot;lia-acessibilidade-acoes&quot;&gt;</span></div=
><div><span style=3D"color:rgb(165,214,255)">=C2=A0 =C2=A0 =C2=A0 =C2=A0 &l=
t;button type=3D&quot;button&quot; id=3D&quot;lia-tema&quot;&gt;Tema claro/=
escuro&lt;/button&gt;</span></div><div><span style=3D"color:rgb(165,214,255=
)">=C2=A0 =C2=A0 =C2=A0 =C2=A0 &lt;button type=3D&quot;button&quot; id=3D&q=
uot;lia-contraste&quot;&gt;Alto contraste&lt;/button&gt;</span></div><div><=
span style=3D"color:rgb(165,214,255)">=C2=A0 =C2=A0 =C2=A0 &lt;/div&gt;</sp=
an></div><div><span style=3D"color:rgb(165,214,255)">=C2=A0 =C2=A0 `</span>=
<span style=3D"color:rgb(201,209,217)">;</span></div><br><div><span style=
=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 </span><span style=3D"color:rgb(1=
21,192,255)">document</span><span style=3D"color:rgb(201,209,217)">.</span>=
<span style=3D"color:rgb(121,192,255)">body</span><span style=3D"color:rgb(=
201,209,217)">.</span><span style=3D"color:rgb(210,168,255)">appendChild</s=
pan><span style=3D"color:rgb(201,209,217)">(</span><span style=3D"color:rgb=
(121,192,255)">panel</span><span style=3D"color:rgb(201,209,217)">);</span>=
</div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 </span><spa=
n style=3D"color:rgb(197,134,192)">return</span><span style=3D"color:rgb(20=
1,209,217)"> </span><span style=3D"color:rgb(121,192,255)">panel</span><spa=
n style=3D"color:rgb(201,209,217)">;</span></div><div><span style=3D"color:=
rgb(201,209,217)">=C2=A0 }</span></div><br><div><span style=3D"color:rgb(20=
1,209,217)">=C2=A0 </span><span style=3D"color:rgb(255,123,114)">function</=
span><span style=3D"color:rgb(201,209,217)"> </span><span style=3D"color:rg=
b(210,168,255)">conectarEventos</span><span style=3D"color:rgb(201,209,217)=
">(</span><span style=3D"color:rgb(255,166,87)">button</span><span style=3D=
"color:rgb(201,209,217)">, </span><span style=3D"color:rgb(255,166,87)">pan=
el</span><span style=3D"color:rgb(201,209,217)">) {</span></div><div><span =
style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 </span><span style=3D"color:=
rgb(255,166,87)">button</span><span style=3D"color:rgb(201,209,217)">.</spa=
n><span style=3D"color:rgb(210,168,255)">addEventListener</span><span style=
=3D"color:rgb(201,209,217)">(</span><span style=3D"color:rgb(165,214,255)">=
&quot;click&quot;</span><span style=3D"color:rgb(201,209,217)">, () </span>=
<span style=3D"color:rgb(255,123,114)">=3D&gt;</span><span style=3D"color:r=
gb(201,209,217)"> {</span></div><div><span style=3D"color:rgb(201,209,217)"=
>=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:rgb(255,166,87)">panel</s=
pan><span style=3D"color:rgb(201,209,217)">.hidden </span><span style=3D"co=
lor:rgb(212,212,212)">=3D</span><span style=3D"color:rgb(201,209,217)"> </s=
pan><span style=3D"color:rgb(212,212,212)">!</span><span style=3D"color:rgb=
(255,166,87)">panel</span><span style=3D"color:rgb(201,209,217)">.hidden;</=
span></div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0=
 </span><span style=3D"color:rgb(255,166,87)">button</span><span style=3D"c=
olor:rgb(201,209,217)">.</span><span style=3D"color:rgb(210,168,255)">setAt=
tribute</span><span style=3D"color:rgb(201,209,217)">(</span><span style=3D=
"color:rgb(165,214,255)">&quot;aria-expanded&quot;</span><span style=3D"col=
or:rgb(201,209,217)">, </span><span style=3D"color:rgb(78,201,176)">String<=
/span><span style=3D"color:rgb(201,209,217)">(</span><span style=3D"color:r=
gb(212,212,212)">!</span><span style=3D"color:rgb(255,166,87)">panel</span>=
<span style=3D"color:rgb(201,209,217)">.hidden));</span></div><div><span st=
yle=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 });</span></div><br><div><span=
 style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 </span><span style=3D"color=
:rgb(255,166,87)">panel</span><span style=3D"color:rgb(201,209,217)">.</spa=
n><span style=3D"color:rgb(210,168,255)">querySelector</span><span style=3D=
"color:rgb(201,209,217)">(</span><span style=3D"color:rgb(165,214,255)">&qu=
ot;.lia-acessibilidade-fechar&quot;</span><span style=3D"color:rgb(201,209,=
217)">)</span></div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=
=A0 =C2=A0 .</span><span style=3D"color:rgb(210,168,255)">addEventListener<=
/span><span style=3D"color:rgb(201,209,217)">(</span><span style=3D"color:r=
gb(165,214,255)">&quot;click&quot;</span><span style=3D"color:rgb(201,209,2=
17)">, () </span><span style=3D"color:rgb(255,123,114)">=3D&gt;</span><span=
 style=3D"color:rgb(201,209,217)"> {</span></div><div><span style=3D"color:=
rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:r=
gb(255,166,87)">panel</span><span style=3D"color:rgb(201,209,217)">.hidden =
</span><span style=3D"color:rgb(212,212,212)">=3D</span><span style=3D"colo=
r:rgb(201,209,217)"> </span><span style=3D"color:rgb(86,156,214)">true</spa=
n><span style=3D"color:rgb(201,209,217)">;</span></div><div><span style=3D"=
color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 =C2=A0 </span><span style=3D"c=
olor:rgb(255,166,87)">button</span><span style=3D"color:rgb(201,209,217)">.=
</span><span style=3D"color:rgb(210,168,255)">setAttribute</span><span styl=
e=3D"color:rgb(201,209,217)">(</span><span style=3D"color:rgb(165,214,255)"=
>&quot;aria-expanded&quot;</span><span style=3D"color:rgb(201,209,217)">, <=
/span><span style=3D"color:rgb(165,214,255)">&quot;false&quot;</span><span =
style=3D"color:rgb(201,209,217)">);</span></div><div><span style=3D"color:r=
gb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:rg=
b(255,166,87)">button</span><span style=3D"color:rgb(201,209,217)">.</span>=
<span style=3D"color:rgb(210,168,255)">focus</span><span style=3D"color:rgb=
(201,209,217)">();</span></div><div><span style=3D"color:rgb(201,209,217)">=
=C2=A0 =C2=A0 =C2=A0 });</span></div><br><div><span style=3D"color:rgb(201,=
209,217)">=C2=A0 =C2=A0 </span><span style=3D"color:rgb(255,166,87)">panel<=
/span><span style=3D"color:rgb(201,209,217)">.</span><span style=3D"color:r=
gb(210,168,255)">querySelector</span><span style=3D"color:rgb(201,209,217)"=
>(</span><span style=3D"color:rgb(165,214,255)">&quot;#lia-fonte-mais&quot;=
</span><span style=3D"color:rgb(201,209,217)">)</span></div><div><span styl=
e=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 .</span><span style=3D"co=
lor:rgb(210,168,255)">addEventListener</span><span style=3D"color:rgb(201,2=
09,217)">(</span><span style=3D"color:rgb(165,214,255)">&quot;click&quot;</=
span><span style=3D"color:rgb(201,209,217)">, () </span><span style=3D"colo=
r:rgb(255,123,114)">=3D&gt;</span><span style=3D"color:rgb(201,209,217)"> {=
</span></div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=
=A0 =C2=A0 </span><span style=3D"color:rgb(210,168,255)">applyFont</span><s=
pan style=3D"color:rgb(201,209,217)">(</span><span style=3D"color:rgb(78,20=
1,176)">Number</span><span style=3D"color:rgb(201,209,217)">(</span><span s=
tyle=3D"color:rgb(210,168,255)">getSaved</span><span style=3D"color:rgb(201=
,209,217)">(</span><span style=3D"color:rgb(121,192,255)">STORAGE</span><sp=
an style=3D"color:rgb(201,209,217)">.</span><span style=3D"color:rgb(201,20=
9,217)">font</span><span style=3D"color:rgb(201,209,217)">, </span><span st=
yle=3D"color:rgb(165,214,255)">&quot;1&quot;</span><span style=3D"color:rgb=
(201,209,217)">)) </span><span style=3D"color:rgb(212,212,212)">+</span><sp=
an style=3D"color:rgb(201,209,217)"> </span><span style=3D"color:rgb(181,20=
6,168)">.05</span><span style=3D"color:rgb(201,209,217)">);</span></div><di=
v><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 });</span></d=
iv><br><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 </span><sp=
an style=3D"color:rgb(255,166,87)">panel</span><span style=3D"color:rgb(201=
,209,217)">.</span><span style=3D"color:rgb(210,168,255)">querySelector</sp=
an><span style=3D"color:rgb(201,209,217)">(</span><span style=3D"color:rgb(=
165,214,255)">&quot;#lia-fonte-menos&quot;</span><span style=3D"color:rgb(2=
01,209,217)">)</span></div><div><span style=3D"color:rgb(201,209,217)">=C2=
=A0 =C2=A0 =C2=A0 .</span><span style=3D"color:rgb(210,168,255)">addEventLi=
stener</span><span style=3D"color:rgb(201,209,217)">(</span><span style=3D"=
color:rgb(165,214,255)">&quot;click&quot;</span><span style=3D"color:rgb(20=
1,209,217)">, () </span><span style=3D"color:rgb(255,123,114)">=3D&gt;</spa=
n><span style=3D"color:rgb(201,209,217)"> {</span></div><div><span style=3D=
"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 =C2=A0 </span><span style=3D"=
color:rgb(210,168,255)">applyFont</span><span style=3D"color:rgb(201,209,21=
7)">(</span><span style=3D"color:rgb(78,201,176)">Number</span><span style=
=3D"color:rgb(201,209,217)">(</span><span style=3D"color:rgb(210,168,255)">=
getSaved</span><span style=3D"color:rgb(201,209,217)">(</span><span style=
=3D"color:rgb(121,192,255)">STORAGE</span><span style=3D"color:rgb(201,209,=
217)">.</span><span style=3D"color:rgb(201,209,217)">font</span><span style=
=3D"color:rgb(201,209,217)">, </span><span style=3D"color:rgb(165,214,255)"=
>&quot;1&quot;</span><span style=3D"color:rgb(201,209,217)">)) </span><span=
 style=3D"color:rgb(212,212,212)">-</span><span style=3D"color:rgb(201,209,=
217)"> </span><span style=3D"color:rgb(181,206,168)">.05</span><span style=
=3D"color:rgb(201,209,217)">);</span></div><div><span style=3D"color:rgb(20=
1,209,217)">=C2=A0 =C2=A0 =C2=A0 });</span></div><br><div><span style=3D"co=
lor:rgb(201,209,217)">=C2=A0 =C2=A0 </span><span style=3D"color:rgb(255,166=
,87)">panel</span><span style=3D"color:rgb(201,209,217)">.</span><span styl=
e=3D"color:rgb(210,168,255)">querySelector</span><span style=3D"color:rgb(2=
01,209,217)">(</span><span style=3D"color:rgb(165,214,255)">&quot;#lia-tema=
&quot;</span><span style=3D"color:rgb(201,209,217)">)</span></div><div><spa=
n style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 .</span><span style=
=3D"color:rgb(210,168,255)">addEventListener</span><span style=3D"color:rgb=
(201,209,217)">(</span><span style=3D"color:rgb(165,214,255)">&quot;click&q=
uot;</span><span style=3D"color:rgb(201,209,217)">, () </span><span style=
=3D"color:rgb(255,123,114)">=3D&gt;</span><span style=3D"color:rgb(201,209,=
217)"> {</span></div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=
=A0 =C2=A0 =C2=A0 </span><span style=3D"color:rgb(255,123,114)">const</span=
><span style=3D"color:rgb(201,209,217)"> </span><span style=3D"color:rgb(12=
1,192,255)">atual</span><span style=3D"color:rgb(201,209,217)"> </span><spa=
n style=3D"color:rgb(212,212,212)">=3D</span><span style=3D"color:rgb(201,2=
09,217)"> </span><span style=3D"color:rgb(210,168,255)">getSaved</span><spa=
n style=3D"color:rgb(201,209,217)">(</span><span style=3D"color:rgb(121,192=
,255)">STORAGE</span><span style=3D"color:rgb(201,209,217)">.</span><span s=
tyle=3D"color:rgb(201,209,217)">theme</span><span style=3D"color:rgb(201,20=
9,217)">, </span><span style=3D"color:rgb(165,214,255)">&quot;claro&quot;</=
span><span style=3D"color:rgb(201,209,217)">);</span></div><div><span style=
=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 =C2=A0 </span><span style=
=3D"color:rgb(210,168,255)">applyTheme</span><span style=3D"color:rgb(201,2=
09,217)">(</span></div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =
=C2=A0 =C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:rgb(121,192,255)">a=
tual</span><span style=3D"color:rgb(201,209,217)"> </span><span style=3D"co=
lor:rgb(212,212,212)">=3D=3D=3D</span><span style=3D"color:rgb(201,209,217)=
"> </span><span style=3D"color:rgb(165,214,255)">&quot;escuro&quot;</span><=
span style=3D"color:rgb(201,209,217)"> </span><span style=3D"color:rgb(212,=
212,212)">||</span><span style=3D"color:rgb(201,209,217)"> </span><span sty=
le=3D"color:rgb(121,192,255)">atual</span><span style=3D"color:rgb(201,209,=
217)"> </span><span style=3D"color:rgb(212,212,212)">=3D=3D=3D</span><span =
style=3D"color:rgb(201,209,217)"> </span><span style=3D"color:rgb(165,214,2=
55)">&quot;dark&quot;</span><span style=3D"color:rgb(201,209,217)"> </span>=
<span style=3D"color:rgb(212,212,212)">?</span><span style=3D"color:rgb(201=
,209,217)"> </span><span style=3D"color:rgb(165,214,255)">&quot;claro&quot;=
</span><span style=3D"color:rgb(201,209,217)"> </span><span style=3D"color:=
rgb(212,212,212)">:</span><span style=3D"color:rgb(201,209,217)"> </span><s=
pan style=3D"color:rgb(165,214,255)">&quot;escuro&quot;</span></div><div><s=
pan style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 =C2=A0 );</span><=
/div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 });</=
span></div><br><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 </=
span><span style=3D"color:rgb(255,166,87)">panel</span><span style=3D"color=
:rgb(201,209,217)">.</span><span style=3D"color:rgb(210,168,255)">querySele=
ctor</span><span style=3D"color:rgb(201,209,217)">(</span><span style=3D"co=
lor:rgb(165,214,255)">&quot;#lia-contraste&quot;</span><span style=3D"color=
:rgb(201,209,217)">)</span></div><div><span style=3D"color:rgb(201,209,217)=
">=C2=A0 =C2=A0 =C2=A0 .</span><span style=3D"color:rgb(210,168,255)">addEv=
entListener</span><span style=3D"color:rgb(201,209,217)">(</span><span styl=
e=3D"color:rgb(165,214,255)">&quot;click&quot;</span><span style=3D"color:r=
gb(201,209,217)">, () </span><span style=3D"color:rgb(255,123,114)">=3D&gt;=
</span><span style=3D"color:rgb(201,209,217)"> {</span></div><div><span sty=
le=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 =C2=A0 </span><span styl=
e=3D"color:rgb(255,123,114)">const</span><span style=3D"color:rgb(201,209,2=
17)"> </span><span style=3D"color:rgb(121,192,255)">atual</span><span style=
=3D"color:rgb(201,209,217)"> </span><span style=3D"color:rgb(212,212,212)">=
=3D</span><span style=3D"color:rgb(201,209,217)"> </span><span style=3D"col=
or:rgb(210,168,255)">getSaved</span><span style=3D"color:rgb(201,209,217)">=
(</span><span style=3D"color:rgb(121,192,255)">STORAGE</span><span style=3D=
"color:rgb(201,209,217)">.</span><span style=3D"color:rgb(201,209,217)">con=
trast</span><span style=3D"color:rgb(201,209,217)">, </span><span style=3D"=
color:rgb(165,214,255)">&quot;false&quot;</span><span style=3D"color:rgb(20=
1,209,217)">) </span><span style=3D"color:rgb(212,212,212)">=3D=3D=3D</span=
><span style=3D"color:rgb(201,209,217)"> </span><span style=3D"color:rgb(16=
5,214,255)">&quot;true&quot;</span><span style=3D"color:rgb(201,209,217)">;=
</span></div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=
=A0 =C2=A0 </span><span style=3D"color:rgb(210,168,255)">applyContrast</spa=
n><span style=3D"color:rgb(201,209,217)">(</span><span style=3D"color:rgb(2=
12,212,212)">!</span><span style=3D"color:rgb(121,192,255)">atual</span><sp=
an style=3D"color:rgb(201,209,217)">);</span></div><div><span style=3D"colo=
r:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 });</span></div><br><div><span sty=
le=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 </span><span style=3D"color:rgb=
(255,166,87)">panel</span><span style=3D"color:rgb(201,209,217)">.</span><s=
pan style=3D"color:rgb(210,168,255)">querySelector</span><span style=3D"col=
or:rgb(201,209,217)">(</span><span style=3D"color:rgb(165,214,255)">&quot;#=
lia-idioma&quot;</span><span style=3D"color:rgb(201,209,217)">)</span></div=
><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 .</span><=
span style=3D"color:rgb(210,168,255)">addEventListener</span><span style=3D=
"color:rgb(201,209,217)">(</span><span style=3D"color:rgb(165,214,255)">&qu=
ot;change&quot;</span><span style=3D"color:rgb(201,209,217)">, (</span><spa=
n style=3D"color:rgb(255,166,87)">event</span><span style=3D"color:rgb(201,=
209,217)">) </span><span style=3D"color:rgb(255,123,114)">=3D&gt;</span><sp=
an style=3D"color:rgb(201,209,217)"> {</span></div><div><span style=3D"colo=
r:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color=
:rgb(210,168,255)">applyLanguage</span><span style=3D"color:rgb(201,209,217=
)">(</span><span style=3D"color:rgb(255,166,87)">event</span><span style=3D=
"color:rgb(201,209,217)">.target.value);</span></div><div><span style=3D"co=
lor:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 });</span></div><div><span style=
=3D"color:rgb(201,209,217)">=C2=A0 }</span></div><br><div><span style=3D"co=
lor:rgb(201,209,217)">=C2=A0 </span><span style=3D"color:rgb(255,123,114)">=
function</span><span style=3D"color:rgb(201,209,217)"> </span><span style=
=3D"color:rgb(210,168,255)">init</span><span style=3D"color:rgb(201,209,217=
)">() {</span></div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=
=A0 </span><span style=3D"color:rgb(210,168,255)">adicionarEstilos</span><s=
pan style=3D"color:rgb(201,209,217)">();</span></div><br><div><span style=
=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 </span><span style=3D"color:rgb(2=
55,123,114)">const</span><span style=3D"color:rgb(201,209,217)"> { </span><=
span style=3D"color:rgb(121,192,255)">header</span><span style=3D"color:rgb=
(201,209,217)">, </span><span style=3D"color:rgb(121,192,255)">controles</s=
pan><span style=3D"color:rgb(201,209,217)"> } </span><span style=3D"color:r=
gb(212,212,212)">=3D</span><span style=3D"color:rgb(201,209,217)"> </span><=
span style=3D"color:rgb(210,168,255)">prepararAreaDosBotoes</span><span sty=
le=3D"color:rgb(201,209,217)">();</span></div><div><span style=3D"color:rgb=
(201,209,217)">=C2=A0 =C2=A0 </span><span style=3D"color:rgb(255,123,114)">=
const</span><span style=3D"color:rgb(201,209,217)"> </span><span style=3D"c=
olor:rgb(121,192,255)">button</span><span style=3D"color:rgb(201,209,217)">=
 </span><span style=3D"color:rgb(212,212,212)">=3D</span><span style=3D"col=
or:rgb(201,209,217)"> </span><span style=3D"color:rgb(210,168,255)">criarBo=
taoUnico</span><span style=3D"color:rgb(201,209,217)">(</span><span style=
=3D"color:rgb(121,192,255)">header</span><span style=3D"color:rgb(201,209,2=
17)">, </span><span style=3D"color:rgb(121,192,255)">controles</span><span =
style=3D"color:rgb(201,209,217)">);</span></div><div><span style=3D"color:r=
gb(201,209,217)">=C2=A0 =C2=A0 </span><span style=3D"color:rgb(255,123,114)=
">const</span><span style=3D"color:rgb(201,209,217)"> </span><span style=3D=
"color:rgb(121,192,255)">panel</span><span style=3D"color:rgb(201,209,217)"=
> </span><span style=3D"color:rgb(212,212,212)">=3D</span><span style=3D"co=
lor:rgb(201,209,217)"> </span><span style=3D"color:rgb(210,168,255)">criarP=
ainel</span><span style=3D"color:rgb(201,209,217)">();</span></div><br><div=
><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 </span><span style=3D=
"color:rgb(210,168,255)">conectarEventos</span><span style=3D"color:rgb(201=
,209,217)">(</span><span style=3D"color:rgb(121,192,255)">button</span><spa=
n style=3D"color:rgb(201,209,217)">, </span><span style=3D"color:rgb(121,19=
2,255)">panel</span><span style=3D"color:rgb(201,209,217)">);</span></div><=
br><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 </span><span s=
tyle=3D"color:rgb(210,168,255)">applyTheme</span><span style=3D"color:rgb(2=
01,209,217)">(</span><span style=3D"color:rgb(210,168,255)">getSaved</span>=
<span style=3D"color:rgb(201,209,217)">(</span><span style=3D"color:rgb(121=
,192,255)">STORAGE</span><span style=3D"color:rgb(201,209,217)">.</span><sp=
an style=3D"color:rgb(201,209,217)">theme</span><span style=3D"color:rgb(20=
1,209,217)">, </span><span style=3D"color:rgb(165,214,255)">&quot;claro&quo=
t;</span><span style=3D"color:rgb(201,209,217)">));</span></div><div><span =
style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 </span><span style=3D"color:=
rgb(210,168,255)">applyContrast</span><span style=3D"color:rgb(201,209,217)=
">(</span><span style=3D"color:rgb(210,168,255)">getSaved</span><span style=
=3D"color:rgb(201,209,217)">(</span><span style=3D"color:rgb(121,192,255)">=
STORAGE</span><span style=3D"color:rgb(201,209,217)">.</span><span style=3D=
"color:rgb(201,209,217)">contrast</span><span style=3D"color:rgb(201,209,21=
7)">, </span><span style=3D"color:rgb(165,214,255)">&quot;false&quot;</span=
><span style=3D"color:rgb(201,209,217)">) </span><span style=3D"color:rgb(2=
12,212,212)">=3D=3D=3D</span><span style=3D"color:rgb(201,209,217)"> </span=
><span style=3D"color:rgb(165,214,255)">&quot;true&quot;</span><span style=
=3D"color:rgb(201,209,217)">);</span></div><div><span style=3D"color:rgb(20=
1,209,217)">=C2=A0 =C2=A0 </span><span style=3D"color:rgb(210,168,255)">app=
lyFont</span><span style=3D"color:rgb(201,209,217)">(</span><span style=3D"=
color:rgb(78,201,176)">Number</span><span style=3D"color:rgb(201,209,217)">=
(</span><span style=3D"color:rgb(210,168,255)">getSaved</span><span style=
=3D"color:rgb(201,209,217)">(</span><span style=3D"color:rgb(121,192,255)">=
STORAGE</span><span style=3D"color:rgb(201,209,217)">.</span><span style=3D=
"color:rgb(201,209,217)">font</span><span style=3D"color:rgb(201,209,217)">=
, </span><span style=3D"color:rgb(165,214,255)">&quot;1&quot;</span><span s=
tyle=3D"color:rgb(201,209,217)">)));</span></div><div><span style=3D"color:=
rgb(201,209,217)">=C2=A0 =C2=A0 </span><span style=3D"color:rgb(210,168,255=
)">applyLanguage</span><span style=3D"color:rgb(201,209,217)">(</span><span=
 style=3D"color:rgb(210,168,255)">getSaved</span><span style=3D"color:rgb(2=
01,209,217)">(</span><span style=3D"color:rgb(121,192,255)">STORAGE</span><=
span style=3D"color:rgb(201,209,217)">.</span><span style=3D"color:rgb(201,=
209,217)">language</span><span style=3D"color:rgb(201,209,217)">, </span><s=
pan style=3D"color:rgb(165,214,255)">&quot;pt&quot;</span><span style=3D"co=
lor:rgb(201,209,217)">));</span></div><br><div><span style=3D"color:rgb(201=
,209,217)">=C2=A0 =C2=A0 </span><span style=3D"color:rgb(255,123,114)">cons=
t</span><span style=3D"color:rgb(201,209,217)"> </span><span style=3D"color=
:rgb(121,192,255)">mainLanguage</span><span style=3D"color:rgb(201,209,217)=
"> </span><span style=3D"color:rgb(212,212,212)">=3D</span><span style=3D"c=
olor:rgb(201,209,217)"> </span><span style=3D"color:rgb(121,192,255)">docum=
ent</span><span style=3D"color:rgb(201,209,217)">.</span><span style=3D"col=
or:rgb(210,168,255)">getElementById</span><span style=3D"color:rgb(201,209,=
217)">(</span><span style=3D"color:rgb(165,214,255)">&quot;languageSelect&q=
uot;</span><span style=3D"color:rgb(201,209,217)">);</span></div><br><div><=
span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 </span><span style=3D"c=
olor:rgb(197,134,192)">if</span><span style=3D"color:rgb(201,209,217)"> (</=
span><span style=3D"color:rgb(121,192,255)">mainLanguage</span><span style=
=3D"color:rgb(201,209,217)">) {</span></div><div><span style=3D"color:rgb(2=
01,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:rgb(121,192,2=
55)">mainLanguage</span><span style=3D"color:rgb(201,209,217)">.</span><spa=
n style=3D"color:rgb(210,168,255)">addEventListener</span><span style=3D"co=
lor:rgb(201,209,217)">(</span><span style=3D"color:rgb(165,214,255)">&quot;=
change&quot;</span><span style=3D"color:rgb(201,209,217)">, (</span><span s=
tyle=3D"color:rgb(255,166,87)">event</span><span style=3D"color:rgb(201,209=
,217)">) </span><span style=3D"color:rgb(255,123,114)">=3D&gt;</span><span =
style=3D"color:rgb(201,209,217)"> {</span></div><div><span style=3D"color:r=
gb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:rg=
b(210,168,255)">applyLanguage</span><span style=3D"color:rgb(201,209,217)">=
(</span><span style=3D"color:rgb(255,166,87)">event</span><span style=3D"co=
lor:rgb(201,209,217)">.</span><span style=3D"color:rgb(121,192,255)">target=
</span><span style=3D"color:rgb(201,209,217)">.value);</span></div><div><sp=
an style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 });</span></div><d=
iv><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 }</span></div><div>=
<span style=3D"color:rgb(201,209,217)">=C2=A0 }</span></div><br><div><span =
style=3D"color:rgb(201,209,217)">=C2=A0 </span><span style=3D"color:rgb(197=
,134,192)">if</span><span style=3D"color:rgb(201,209,217)"> (</span><span s=
tyle=3D"color:rgb(121,192,255)">document</span><span style=3D"color:rgb(201=
,209,217)">.</span><span style=3D"color:rgb(121,192,255)">readyState</span>=
<span style=3D"color:rgb(201,209,217)"> </span><span style=3D"color:rgb(212=
,212,212)">=3D=3D=3D</span><span style=3D"color:rgb(201,209,217)"> </span><=
span style=3D"color:rgb(165,214,255)">&quot;loading&quot;</span><span style=
=3D"color:rgb(201,209,217)">) {</span></div><div><span style=3D"color:rgb(2=
01,209,217)">=C2=A0 =C2=A0 </span><span style=3D"color:rgb(121,192,255)">do=
cument</span><span style=3D"color:rgb(201,209,217)">.</span><span style=3D"=
color:rgb(210,168,255)">addEventListener</span><span style=3D"color:rgb(201=
,209,217)">(</span><span style=3D"color:rgb(165,214,255)">&quot;DOMContentL=
oaded&quot;</span><span style=3D"color:rgb(201,209,217)">, </span><span sty=
le=3D"color:rgb(210,168,255)">init</span><span style=3D"color:rgb(201,209,2=
17)">);</span></div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 } </=
span><span style=3D"color:rgb(197,134,192)">else</span><span style=3D"color=
:rgb(201,209,217)"> {</span></div><div><span style=3D"color:rgb(201,209,217=
)">=C2=A0 =C2=A0 </span><span style=3D"color:rgb(210,168,255)">init</span><=
span style=3D"color:rgb(201,209,217)">();</span></div><div><span style=3D"c=
olor:rgb(201,209,217)">=C2=A0 }</span></div><div><span style=3D"color:rgb(2=
01,209,217)">}</span>)();</div><br></div></div>

--00000000000031cf3e065f1466d4--