MIME-Version: 1.0
Date: Fri, 30 Oct 2026 17:12:59 -0300
Message-ID: <CADa5m5z1TxM310ktFXp9z53vJuhyT_CfKpDnAFZQo6_65Uf-6w@mail.gmail.com>
Subject: tcc atualizado navegacao js
From: Marcely Castro Rodrigues <castrorodriguesmarcely@gmail.com>
To: Marcely Castro Rodrigues <castrorodriguesmarcely@gmail.com>
Content-Type: multipart/alternative; boundary="000000000000721a6e065f1469f8"

--000000000000721a6e065f1469f8
Content-Type: text/plain; charset="UTF-8"
Content-Transfer-Encoding: quoted-printable

(() =3D> {
  "use strict";

  const arquivo =3D window.location.pathname.split("/").pop().toLowerCase()=
;

  if (["modo-discreto.html", "discreto.html"].includes(arquivo)) return;

  const paginaInicial =3D arquivo =3D=3D=3D "" || arquivo =3D=3D=3D "index.=
html";

  function adicionarEstilos() {
    if (document.getElementById("lia-cabecalho-global-css")) return;

    const style =3D document.createElement("style");
    style.id =3D "lia-cabecalho-global-css";

    style.textContent =3D `
      .lia-cabecalho-global {
        position: relative;
        z-index: 100;
        width: 100%;
        min-height: 76px;
        box-sizing: border-box;
        padding: 12px 4%;
        display: grid;
        grid-template-columns: minmax(180px, 1fr) auto;
        grid-template-rows: auto;
        align-items: center;
        column-gap: 24px;
        row-gap: 12px;
        background: #fffafd;
        border-bottom: 1px solid #eee2ef;
      }

      .lia-marca {
        grid-column: 1;
        grid-row: 1;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-self: start;
        gap: 2px;
        min-width: 0;
      }

      .lia-logo {
        color: #805d91 !important;
        font-family: "Playfair Display", Georgia, serif;
        font-size: 2rem;
        font-weight: 400 !important;
        line-height: 1.05;
        letter-spacing: 1px;
        text-decoration: none !important;
      }

      .lia-descricao {
        color: #897b8d;
        font-family: "DM Sans", Arial, sans-serif;
        font-size: .72rem;
        font-weight: 400;
        letter-spacing: .2px;
      }

      .lia-controles-topo {
        grid-column: 2;
        grid-row: 1;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        flex-wrap: wrap;
        gap: 10px;
        justify-self: end;
        margin: 0;
      }

      .lia-voltar-pagina {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        min-height: 40px;
        box-sizing: border-box;
        padding: 8px 16px;
        border: 1px solid #e5d7e8;
        border-radius: 30px;
        background: #fff;
        color: #76558b;
        font-family: "DM Sans", Arial, sans-serif;
        font-size: .88rem;
        font-weight: 400;
        cursor: pointer;
        transition: background .2s ease;
      }

      .lia-voltar-pagina:hover {
        background: #f5edf7;
      }

      .lia-navegacao {
        grid-column: 1 / -1;
        grid-row: 2;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        gap: 12px 30px;
        padding: 8px 0 2px;
      }

      .lia-navegacao a {
        color: #594b60;
        font-family: "DM Sans", Arial, sans-serif;
        font-size: .92rem;
        font-weight: 400;
        text-decoration: none;
      }

      .lia-navegacao a:hover {
        color: #956eaa;
      }

      @media (max-width: 650px) {
        .lia-cabecalho-global {
          grid-template-columns: minmax(0, 1fr) auto;
          column-gap: 10px;
          padding: 12px 16px;
        }

        .lia-logo {
          font-size: 1.8rem;
        }

        .lia-descricao {
          font-size: .62rem;
        }

        .lia-controles-topo {
          gap: 7px;
        }

        .lia-voltar-pagina {
          min-height: 36px;
          padding: 7px 10px;
          font-size: .8rem;
        }

        .lia-navegacao {
          justify-content: flex-start;
          gap: 12px 18px;
        }
      }

      @media (max-width: 380px) {
        .lia-cabecalho-global {
          grid-template-columns: 1fr;
          row-gap: 10px;
        }

        .lia-marca {
          grid-column: 1;
          grid-row: 1;
        }

        .lia-controles-topo {
          grid-column: 1;
          grid-row: 2;
          justify-self: start;
        }

        .lia-navegacao {
          grid-row: 3;
        }
      }
    `;

    document.head.appendChild(style);
  }

  function prepararNavegacao() {
    let header =3D document.querySelector("header");

    if (!header) {
      header =3D document.createElement("header");
      document.body.prepend(header);
    }

    header.classList.add("lia-cabecalho-global");

    // Marca e identidade da LIA.
    let marca =3D header.querySelector(".lia-marca");

    if (!marca) {
      marca =3D document.createElement("div");
      marca.className =3D "lia-marca";
      header.prepend(marca);
    }

    let logo =3D marca.querySelector(".lia-logo");

    if (!logo) {
      logo =3D header.querySelector(".lia-logo") ||
        header.querySelector('a[href=3D"index.html"], a[href=3D"./index.htm=
l"]'
);
    }

    if (!logo) {
      logo =3D document.createElement("a");
      logo.textContent =3D "LIA";
    }

    logo.href =3D "index.html";
    logo.classList.add("lia-logo");
    logo.setAttribute("aria-label", "LIA - P=C3=A1gina inicial");

    if (!marca.contains(logo)) marca.prepend(logo);

    let descricao =3D marca.querySelector(".lia-descricao");

    if (!descricao) {
      descricao =3D document.createElement("span");
      descricao.className =3D "lia-descricao";
      descricao.textContent =3D "Local de Informa=C3=A7=C3=A3o e Apoio";
      marca.appendChild(descricao);
    }

    // =C3=81rea =C3=BAnica dos controles.
    let controles =3D header.querySelector(".lia-controles-topo");

    if (!controles) {
      controles =3D document.createElement("div");
      controles.className =3D "lia-controles-topo";
      header.appendChild(controles);
    }

    // Remove bot=C3=B5es antigos de voltar para evitar duplica=C3=A7=C3=B5=
es.
    const botoesVoltar =3D header.querySelectorAll(
      ".lia-voltar-pagina, #lia-voltar, .btn-voltar"
    );

    let voltar =3D controles.querySelector(".lia-voltar-pagina");

    botoesVoltar.forEach((botao) =3D> {
      if (botao !=3D=3D voltar) botao.remove();
    });

    if (!paginaInicial) {
      if (!voltar) {
        voltar =3D document.createElement("button");
        voltar.type =3D "button";
        voltar.className =3D "lia-voltar-pagina";
        voltar.textContent =3D "=E2=86=90 Voltar";
      }

      voltar.addEventListener("click", () =3D> {
        if (window.history.length > 1) {
          window.history.back();
        } else {
          window.location.href =3D "index.html";
        }
      });

      if (voltar.parentElement !=3D=3D controles) {
        controles.prepend(voltar);
      }
    } else if (voltar) {
      voltar.remove();
    }

    // Menu principal apenas na p=C3=A1gina inicial.
    const seletoresMenu =3D [
      'nav[aria-label=3D"Navega=C3=A7=C3=A3o principal"]',
      "nav.lia-menu",
      "nav.lia-navegacao",
      "#mainNav"
    ].join(",");

    let menus =3D Array.from(header.querySelectorAll(seletoresMenu));

    if (paginaInicial) {
      let menu =3D menus.shift();

      menus.forEach((item) =3D> item.remove());

      if (!menu) {
        menu =3D document.createElement("nav");
        menu.className =3D "lia-navegacao";
        menu.setAttribute("aria-label", "Navega=C3=A7=C3=A3o principal");
        menu.innerHTML =3D `
          <a href=3D"index.html">In=C3=ADcio</a>
          <a href=3D"historia.html">Hist=C3=B3ria da LIA</a>
          <a href=3D"projeto.html">Projeto</a>
          <a href=3D"violencias.html">Tipos de viol=C3=AAncia</a>
          <a href=3D"noticias.html">Not=C3=ADcias</a>
          <a href=3D"apoio.html">Preciso de apoio</a>
        `;
      }

      if (!header.contains(menu)) header.appendChild(menu);
    } else {
      menus.forEach((menu) =3D> menu.remove());
    }

    adicionarEstilos();
  }

  if (document.readyState =3D=3D=3D "loading") {
    document.addEventListener("DOMContentLoaded", prepararNavegacao);
  } else {
    prepararNavegacao();
  }
})();

--000000000000721a6e065f1469f8
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
1,192,255)">arquivo</span><span style=3D"color:rgb(201,209,217)"> </span><s=
pan style=3D"color:rgb(212,212,212)">=3D</span><span style=3D"color:rgb(201=
,209,217)"> window.location.pathname.</span><span style=3D"color:rgb(210,16=
8,255)">split</span><span style=3D"color:rgb(201,209,217)">(</span><span st=
yle=3D"color:rgb(165,214,255)">&quot;/&quot;</span><span style=3D"color:rgb=
(201,209,217)">).</span><span style=3D"color:rgb(210,168,255)">pop</span><s=
pan style=3D"color:rgb(201,209,217)">().</span><span style=3D"color:rgb(210=
,168,255)">toLowerCase</span><span style=3D"color:rgb(201,209,217)">();</sp=
an></div><br><div><span style=3D"color:rgb(201,209,217)">=C2=A0 </span><spa=
n style=3D"color:rgb(197,134,192)">if</span><span style=3D"color:rgb(201,20=
9,217)"> ([</span><span style=3D"color:rgb(165,214,255)">&quot;modo-discret=
o.html&quot;</span><span style=3D"color:rgb(201,209,217)">, </span><span st=
yle=3D"color:rgb(165,214,255)">&quot;discreto.html&quot;</span><span style=
=3D"color:rgb(201,209,217)">].</span><span style=3D"color:rgb(210,168,255)"=
>includes</span><span style=3D"color:rgb(201,209,217)">(arquivo)) </span><s=
pan style=3D"color:rgb(197,134,192)">return</span><span style=3D"color:rgb(=
201,209,217)">;</span></div><br><div><span style=3D"color:rgb(201,209,217)"=
>=C2=A0 </span><span style=3D"color:rgb(255,123,114)">const</span><span sty=
le=3D"color:rgb(201,209,217)"> </span><span style=3D"color:rgb(121,192,255)=
">paginaInicial</span><span style=3D"color:rgb(201,209,217)"> </span><span =
style=3D"color:rgb(212,212,212)">=3D</span><span style=3D"color:rgb(201,209=
,217)"> arquivo </span><span style=3D"color:rgb(212,212,212)">=3D=3D=3D</sp=
an><span style=3D"color:rgb(201,209,217)"> </span><span style=3D"color:rgb(=
165,214,255)">&quot;&quot;</span><span style=3D"color:rgb(201,209,217)"> </=
span><span style=3D"color:rgb(212,212,212)">||</span><span style=3D"color:r=
gb(201,209,217)"> arquivo </span><span style=3D"color:rgb(212,212,212)">=3D=
=3D=3D</span><span style=3D"color:rgb(201,209,217)"> </span><span style=3D"=
color:rgb(165,214,255)">&quot;index.html&quot;</span><span style=3D"color:r=
gb(201,209,217)">;</span></div><br><div><span style=3D"color:rgb(201,209,21=
7)">=C2=A0 </span><span style=3D"color:rgb(255,123,114)">function</span><sp=
an style=3D"color:rgb(201,209,217)"> </span><span style=3D"color:rgb(210,16=
8,255)">adicionarEstilos</span><span style=3D"color:rgb(201,209,217)">() {<=
/span></div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 </spa=
n><span style=3D"color:rgb(197,134,192)">if</span><span style=3D"color:rgb(=
201,209,217)"> (document.</span><span style=3D"color:rgb(210,168,255)">getE=
lementById</span><span style=3D"color:rgb(201,209,217)">(</span><span style=
=3D"color:rgb(165,214,255)">&quot;lia-cabecalho-global-css&quot;</span><spa=
n style=3D"color:rgb(201,209,217)">)) </span><span style=3D"color:rgb(197,1=
34,192)">return</span><span style=3D"color:rgb(201,209,217)">;</span></div>=
<br><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 </span><span =
style=3D"color:rgb(255,123,114)">const</span><span style=3D"color:rgb(201,2=
09,217)"> </span><span style=3D"color:rgb(121,192,255)">style</span><span s=
tyle=3D"color:rgb(201,209,217)"> </span><span style=3D"color:rgb(212,212,21=
2)">=3D</span><span style=3D"color:rgb(201,209,217)"> document.</span><span=
 style=3D"color:rgb(210,168,255)">createElement</span><span style=3D"color:=
rgb(201,209,217)">(</span><span style=3D"color:rgb(165,214,255)">&quot;styl=
e&quot;</span><span style=3D"color:rgb(201,209,217)">);</span></div><div><s=
pan style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 <a href=3D"http://style.=
id">style.id</a> </span><span style=3D"color:rgb(212,212,212)">=3D</span><s=
pan style=3D"color:rgb(201,209,217)"> </span><span style=3D"color:rgb(165,2=
14,255)">&quot;lia-cabecalho-global-css&quot;</span><span style=3D"color:rg=
b(201,209,217)">;</span></div><br><div><span style=3D"color:rgb(201,209,217=
)">=C2=A0 =C2=A0 style.textContent </span><span style=3D"color:rgb(212,212,=
212)">=3D</span><span style=3D"color:rgb(201,209,217)"> </span><span style=
=3D"color:rgb(165,214,255)">`</span></div><div><span style=3D"color:rgb(165=
,214,255)">=C2=A0 =C2=A0 =C2=A0 .lia-cabecalho-global {</span></div><div><s=
pan style=3D"color:rgb(165,214,255)">=C2=A0 =C2=A0 =C2=A0 =C2=A0 position: =
relative;</span></div><div><span style=3D"color:rgb(165,214,255)">=C2=A0 =
=C2=A0 =C2=A0 =C2=A0 z-index: 100;</span></div><div><span style=3D"color:rg=
b(165,214,255)">=C2=A0 =C2=A0 =C2=A0 =C2=A0 width: 100%;</span></div><div><=
span style=3D"color:rgb(165,214,255)">=C2=A0 =C2=A0 =C2=A0 =C2=A0 min-heigh=
t: 76px;</span></div><div><span style=3D"color:rgb(165,214,255)">=C2=A0 =C2=
=A0 =C2=A0 =C2=A0 box-sizing: border-box;</span></div><div><span style=3D"c=
olor:rgb(165,214,255)">=C2=A0 =C2=A0 =C2=A0 =C2=A0 padding: 12px 4%;</span>=
</div><div><span style=3D"color:rgb(165,214,255)">=C2=A0 =C2=A0 =C2=A0 =C2=
=A0 display: grid;</span></div><div><span style=3D"color:rgb(165,214,255)">=
=C2=A0 =C2=A0 =C2=A0 =C2=A0 grid-template-columns: minmax(180px, 1fr) auto;=
</span></div><div><span style=3D"color:rgb(165,214,255)">=C2=A0 =C2=A0 =C2=
=A0 =C2=A0 grid-template-rows: auto;</span></div><div><span style=3D"color:=
rgb(165,214,255)">=C2=A0 =C2=A0 =C2=A0 =C2=A0 align-items: center;</span></=
div><div><span style=3D"color:rgb(165,214,255)">=C2=A0 =C2=A0 =C2=A0 =C2=A0=
 column-gap: 24px;</span></div><div><span style=3D"color:rgb(165,214,255)">=
=C2=A0 =C2=A0 =C2=A0 =C2=A0 row-gap: 12px;</span></div><div><span style=3D"=
color:rgb(165,214,255)">=C2=A0 =C2=A0 =C2=A0 =C2=A0 background: #fffafd;</s=
pan></div><div><span style=3D"color:rgb(165,214,255)">=C2=A0 =C2=A0 =C2=A0 =
=C2=A0 border-bottom: 1px solid #eee2ef;</span></div><div><span style=3D"co=
lor:rgb(165,214,255)">=C2=A0 =C2=A0 =C2=A0 }</span></div><br><div><span sty=
le=3D"color:rgb(165,214,255)">=C2=A0 =C2=A0 =C2=A0 .lia-marca {</span></div=
><div><span style=3D"color:rgb(165,214,255)">=C2=A0 =C2=A0 =C2=A0 =C2=A0 gr=
id-column: 1;</span></div><div><span style=3D"color:rgb(165,214,255)">=C2=
=A0 =C2=A0 =C2=A0 =C2=A0 grid-row: 1;</span></div><div><span style=3D"color=
:rgb(165,214,255)">=C2=A0 =C2=A0 =C2=A0 =C2=A0 display: flex;</span></div><=
div><span style=3D"color:rgb(165,214,255)">=C2=A0 =C2=A0 =C2=A0 =C2=A0 flex=
-direction: column;</span></div><div><span style=3D"color:rgb(165,214,255)"=
>=C2=A0 =C2=A0 =C2=A0 =C2=A0 align-items: flex-start;</span></div><div><spa=
n style=3D"color:rgb(165,214,255)">=C2=A0 =C2=A0 =C2=A0 =C2=A0 justify-self=
: start;</span></div><div><span style=3D"color:rgb(165,214,255)">=C2=A0 =C2=
=A0 =C2=A0 =C2=A0 gap: 2px;</span></div><div><span style=3D"color:rgb(165,2=
14,255)">=C2=A0 =C2=A0 =C2=A0 =C2=A0 min-width: 0;</span></div><div><span s=
tyle=3D"color:rgb(165,214,255)">=C2=A0 =C2=A0 =C2=A0 }</span></div><br><div=
><span style=3D"color:rgb(165,214,255)">=C2=A0 =C2=A0 =C2=A0 .lia-logo {</s=
pan></div><div><span style=3D"color:rgb(165,214,255)">=C2=A0 =C2=A0 =C2=A0 =
=C2=A0 color: #805d91 !important;</span></div><div><span style=3D"color:rgb=
(165,214,255)">=C2=A0 =C2=A0 =C2=A0 =C2=A0 font-family: &quot;Playfair Disp=
lay&quot;, Georgia, serif;</span></div><div><span style=3D"color:rgb(165,21=
4,255)">=C2=A0 =C2=A0 =C2=A0 =C2=A0 font-size: 2rem;</span></div><div><span=
 style=3D"color:rgb(165,214,255)">=C2=A0 =C2=A0 =C2=A0 =C2=A0 font-weight: =
400 !important;</span></div><div><span style=3D"color:rgb(165,214,255)">=C2=
=A0 =C2=A0 =C2=A0 =C2=A0 line-height: 1.05;</span></div><div><span style=3D=
"color:rgb(165,214,255)">=C2=A0 =C2=A0 =C2=A0 =C2=A0 letter-spacing: 1px;</=
span></div><div><span style=3D"color:rgb(165,214,255)">=C2=A0 =C2=A0 =C2=A0=
 =C2=A0 text-decoration: none !important;</span></div><div><span style=3D"c=
olor:rgb(165,214,255)">=C2=A0 =C2=A0 =C2=A0 }</span></div><br><div><span st=
yle=3D"color:rgb(165,214,255)">=C2=A0 =C2=A0 =C2=A0 .lia-descricao {</span>=
</div><div><span style=3D"color:rgb(165,214,255)">=C2=A0 =C2=A0 =C2=A0 =C2=
=A0 color: #897b8d;</span></div><div><span style=3D"color:rgb(165,214,255)"=
>=C2=A0 =C2=A0 =C2=A0 =C2=A0 font-family: &quot;DM Sans&quot;, Arial, sans-=
serif;</span></div><div><span style=3D"color:rgb(165,214,255)">=C2=A0 =C2=
=A0 =C2=A0 =C2=A0 font-size: .72rem;</span></div><div><span style=3D"color:=
rgb(165,214,255)">=C2=A0 =C2=A0 =C2=A0 =C2=A0 font-weight: 400;</span></div=
><div><span style=3D"color:rgb(165,214,255)">=C2=A0 =C2=A0 =C2=A0 =C2=A0 le=
tter-spacing: .2px;</span></div><div><span style=3D"color:rgb(165,214,255)"=
>=C2=A0 =C2=A0 =C2=A0 }</span></div><br><div><span style=3D"color:rgb(165,2=
14,255)">=C2=A0 =C2=A0 =C2=A0 .lia-controles-topo {</span></div><div><span =
style=3D"color:rgb(165,214,255)">=C2=A0 =C2=A0 =C2=A0 =C2=A0 grid-column: 2=
;</span></div><div><span style=3D"color:rgb(165,214,255)">=C2=A0 =C2=A0 =C2=
=A0 =C2=A0 grid-row: 1;</span></div><div><span style=3D"color:rgb(165,214,2=
55)">=C2=A0 =C2=A0 =C2=A0 =C2=A0 display: flex;</span></div><div><span styl=
e=3D"color:rgb(165,214,255)">=C2=A0 =C2=A0 =C2=A0 =C2=A0 align-items: cente=
r;</span></div><div><span style=3D"color:rgb(165,214,255)">=C2=A0 =C2=A0 =
=C2=A0 =C2=A0 justify-content: flex-end;</span></div><div><span style=3D"co=
lor:rgb(165,214,255)">=C2=A0 =C2=A0 =C2=A0 =C2=A0 flex-wrap: wrap;</span></=
div><div><span style=3D"color:rgb(165,214,255)">=C2=A0 =C2=A0 =C2=A0 =C2=A0=
 gap: 10px;</span></div><div><span style=3D"color:rgb(165,214,255)">=C2=A0 =
=C2=A0 =C2=A0 =C2=A0 justify-self: end;</span></div><div><span style=3D"col=
or:rgb(165,214,255)">=C2=A0 =C2=A0 =C2=A0 =C2=A0 margin: 0;</span></div><di=
v><span style=3D"color:rgb(165,214,255)">=C2=A0 =C2=A0 =C2=A0 }</span></div=
><br><div><span style=3D"color:rgb(165,214,255)">=C2=A0 =C2=A0 =C2=A0 .lia-=
voltar-pagina {</span></div><div><span style=3D"color:rgb(165,214,255)">=C2=
=A0 =C2=A0 =C2=A0 =C2=A0 display: inline-flex;</span></div><div><span style=
=3D"color:rgb(165,214,255)">=C2=A0 =C2=A0 =C2=A0 =C2=A0 align-items: center=
;</span></div><div><span style=3D"color:rgb(165,214,255)">=C2=A0 =C2=A0 =C2=
=A0 =C2=A0 justify-content: center;</span></div><div><span style=3D"color:r=
gb(165,214,255)">=C2=A0 =C2=A0 =C2=A0 =C2=A0 min-height: 40px;</span></div>=
<div><span style=3D"color:rgb(165,214,255)">=C2=A0 =C2=A0 =C2=A0 =C2=A0 box=
-sizing: border-box;</span></div><div><span style=3D"color:rgb(165,214,255)=
">=C2=A0 =C2=A0 =C2=A0 =C2=A0 padding: 8px 16px;</span></div><div><span sty=
le=3D"color:rgb(165,214,255)">=C2=A0 =C2=A0 =C2=A0 =C2=A0 border: 1px solid=
 #e5d7e8;</span></div><div><span style=3D"color:rgb(165,214,255)">=C2=A0 =
=C2=A0 =C2=A0 =C2=A0 border-radius: 30px;</span></div><div><span style=3D"c=
olor:rgb(165,214,255)">=C2=A0 =C2=A0 =C2=A0 =C2=A0 background: #fff;</span>=
</div><div><span style=3D"color:rgb(165,214,255)">=C2=A0 =C2=A0 =C2=A0 =C2=
=A0 color: #76558b;</span></div><div><span style=3D"color:rgb(165,214,255)"=
>=C2=A0 =C2=A0 =C2=A0 =C2=A0 font-family: &quot;DM Sans&quot;, Arial, sans-=
serif;</span></div><div><span style=3D"color:rgb(165,214,255)">=C2=A0 =C2=
=A0 =C2=A0 =C2=A0 font-size: .88rem;</span></div><div><span style=3D"color:=
rgb(165,214,255)">=C2=A0 =C2=A0 =C2=A0 =C2=A0 font-weight: 400;</span></div=
><div><span style=3D"color:rgb(165,214,255)">=C2=A0 =C2=A0 =C2=A0 =C2=A0 cu=
rsor: pointer;</span></div><div><span style=3D"color:rgb(165,214,255)">=C2=
=A0 =C2=A0 =C2=A0 =C2=A0 transition: background .2s ease;</span></div><div>=
<span style=3D"color:rgb(165,214,255)">=C2=A0 =C2=A0 =C2=A0 }</span></div><=
br><div><span style=3D"color:rgb(165,214,255)">=C2=A0 =C2=A0 =C2=A0 .lia-vo=
ltar-pagina:hover {</span></div><div><span style=3D"color:rgb(165,214,255)"=
>=C2=A0 =C2=A0 =C2=A0 =C2=A0 background: #f5edf7;</span></div><div><span st=
yle=3D"color:rgb(165,214,255)">=C2=A0 =C2=A0 =C2=A0 }</span></div><br><div>=
<span style=3D"color:rgb(165,214,255)">=C2=A0 =C2=A0 =C2=A0 .lia-navegacao =
{</span></div><div><span style=3D"color:rgb(165,214,255)">=C2=A0 =C2=A0 =C2=
=A0 =C2=A0 grid-column: 1 / -1;</span></div><div><span style=3D"color:rgb(1=
65,214,255)">=C2=A0 =C2=A0 =C2=A0 =C2=A0 grid-row: 2;</span></div><div><spa=
n style=3D"color:rgb(165,214,255)">=C2=A0 =C2=A0 =C2=A0 =C2=A0 width: 100%;=
</span></div><div><span style=3D"color:rgb(165,214,255)">=C2=A0 =C2=A0 =C2=
=A0 =C2=A0 display: flex;</span></div><div><span style=3D"color:rgb(165,214=
,255)">=C2=A0 =C2=A0 =C2=A0 =C2=A0 justify-content: center;</span></div><di=
v><span style=3D"color:rgb(165,214,255)">=C2=A0 =C2=A0 =C2=A0 =C2=A0 align-=
items: center;</span></div><div><span style=3D"color:rgb(165,214,255)">=C2=
=A0 =C2=A0 =C2=A0 =C2=A0 flex-wrap: wrap;</span></div><div><span style=3D"c=
olor:rgb(165,214,255)">=C2=A0 =C2=A0 =C2=A0 =C2=A0 gap: 12px 30px;</span></=
div><div><span style=3D"color:rgb(165,214,255)">=C2=A0 =C2=A0 =C2=A0 =C2=A0=
 padding: 8px 0 2px;</span></div><div><span style=3D"color:rgb(165,214,255)=
">=C2=A0 =C2=A0 =C2=A0 }</span></div><br><div><span style=3D"color:rgb(165,=
214,255)">=C2=A0 =C2=A0 =C2=A0 .lia-navegacao a {</span></div><div><span st=
yle=3D"color:rgb(165,214,255)">=C2=A0 =C2=A0 =C2=A0 =C2=A0 color: #594b60;<=
/span></div><div><span style=3D"color:rgb(165,214,255)">=C2=A0 =C2=A0 =C2=
=A0 =C2=A0 font-family: &quot;DM Sans&quot;, Arial, sans-serif;</span></div=
><div><span style=3D"color:rgb(165,214,255)">=C2=A0 =C2=A0 =C2=A0 =C2=A0 fo=
nt-size: .92rem;</span></div><div><span style=3D"color:rgb(165,214,255)">=
=C2=A0 =C2=A0 =C2=A0 =C2=A0 font-weight: 400;</span></div><div><span style=
=3D"color:rgb(165,214,255)">=C2=A0 =C2=A0 =C2=A0 =C2=A0 text-decoration: no=
ne;</span></div><div><span style=3D"color:rgb(165,214,255)">=C2=A0 =C2=A0 =
=C2=A0 }</span></div><br><div><span style=3D"color:rgb(165,214,255)">=C2=A0=
 =C2=A0 =C2=A0 .lia-navegacao a:hover {</span></div><div><span style=3D"col=
or:rgb(165,214,255)">=C2=A0 =C2=A0 =C2=A0 =C2=A0 color: #956eaa;</span></di=
v><div><span style=3D"color:rgb(165,214,255)">=C2=A0 =C2=A0 =C2=A0 }</span>=
</div><br><div><span style=3D"color:rgb(165,214,255)">=C2=A0 =C2=A0 =C2=A0 =
@media (max-width: 650px) {</span></div><div><span style=3D"color:rgb(165,2=
14,255)">=C2=A0 =C2=A0 =C2=A0 =C2=A0 .lia-cabecalho-global {</span></div><d=
iv><span style=3D"color:rgb(165,214,255)">=C2=A0 =C2=A0 =C2=A0 =C2=A0 =C2=
=A0 grid-template-columns: minmax(0, 1fr) auto;</span></div><div><span styl=
e=3D"color:rgb(165,214,255)">=C2=A0 =C2=A0 =C2=A0 =C2=A0 =C2=A0 column-gap:=
 10px;</span></div><div><span style=3D"color:rgb(165,214,255)">=C2=A0 =C2=
=A0 =C2=A0 =C2=A0 =C2=A0 padding: 12px 16px;</span></div><div><span style=
=3D"color:rgb(165,214,255)">=C2=A0 =C2=A0 =C2=A0 =C2=A0 }</span></div><br><=
div><span style=3D"color:rgb(165,214,255)">=C2=A0 =C2=A0 =C2=A0 =C2=A0 .lia=
-logo {</span></div><div><span style=3D"color:rgb(165,214,255)">=C2=A0 =C2=
=A0 =C2=A0 =C2=A0 =C2=A0 font-size: 1.8rem;</span></div><div><span style=3D=
"color:rgb(165,214,255)">=C2=A0 =C2=A0 =C2=A0 =C2=A0 }</span></div><br><div=
><span style=3D"color:rgb(165,214,255)">=C2=A0 =C2=A0 =C2=A0 =C2=A0 .lia-de=
scricao {</span></div><div><span style=3D"color:rgb(165,214,255)">=C2=A0 =
=C2=A0 =C2=A0 =C2=A0 =C2=A0 font-size: .62rem;</span></div><div><span style=
=3D"color:rgb(165,214,255)">=C2=A0 =C2=A0 =C2=A0 =C2=A0 }</span></div><br><=
div><span style=3D"color:rgb(165,214,255)">=C2=A0 =C2=A0 =C2=A0 =C2=A0 .lia=
-controles-topo {</span></div><div><span style=3D"color:rgb(165,214,255)">=
=C2=A0 =C2=A0 =C2=A0 =C2=A0 =C2=A0 gap: 7px;</span></div><div><span style=
=3D"color:rgb(165,214,255)">=C2=A0 =C2=A0 =C2=A0 =C2=A0 }</span></div><br><=
div><span style=3D"color:rgb(165,214,255)">=C2=A0 =C2=A0 =C2=A0 =C2=A0 .lia=
-voltar-pagina {</span></div><div><span style=3D"color:rgb(165,214,255)">=
=C2=A0 =C2=A0 =C2=A0 =C2=A0 =C2=A0 min-height: 36px;</span></div><div><span=
 style=3D"color:rgb(165,214,255)">=C2=A0 =C2=A0 =C2=A0 =C2=A0 =C2=A0 paddin=
g: 7px 10px;</span></div><div><span style=3D"color:rgb(165,214,255)">=C2=A0=
 =C2=A0 =C2=A0 =C2=A0 =C2=A0 font-size: .8rem;</span></div><div><span style=
=3D"color:rgb(165,214,255)">=C2=A0 =C2=A0 =C2=A0 =C2=A0 }</span></div><br><=
div><span style=3D"color:rgb(165,214,255)">=C2=A0 =C2=A0 =C2=A0 =C2=A0 .lia=
-navegacao {</span></div><div><span style=3D"color:rgb(165,214,255)">=C2=A0=
 =C2=A0 =C2=A0 =C2=A0 =C2=A0 justify-content: flex-start;</span></div><div>=
<span style=3D"color:rgb(165,214,255)">=C2=A0 =C2=A0 =C2=A0 =C2=A0 =C2=A0 g=
ap: 12px 18px;</span></div><div><span style=3D"color:rgb(165,214,255)">=C2=
=A0 =C2=A0 =C2=A0 =C2=A0 }</span></div><div><span style=3D"color:rgb(165,21=
4,255)">=C2=A0 =C2=A0 =C2=A0 }</span></div><br><div><span style=3D"color:rg=
b(165,214,255)">=C2=A0 =C2=A0 =C2=A0 @media (max-width: 380px) {</span></di=
v><div><span style=3D"color:rgb(165,214,255)">=C2=A0 =C2=A0 =C2=A0 =C2=A0 .=
lia-cabecalho-global {</span></div><div><span style=3D"color:rgb(165,214,25=
5)">=C2=A0 =C2=A0 =C2=A0 =C2=A0 =C2=A0 grid-template-columns: 1fr;</span></=
div><div><span style=3D"color:rgb(165,214,255)">=C2=A0 =C2=A0 =C2=A0 =C2=A0=
 =C2=A0 row-gap: 10px;</span></div><div><span style=3D"color:rgb(165,214,25=
5)">=C2=A0 =C2=A0 =C2=A0 =C2=A0 }</span></div><br><div><span style=3D"color=
:rgb(165,214,255)">=C2=A0 =C2=A0 =C2=A0 =C2=A0 .lia-marca {</span></div><di=
v><span style=3D"color:rgb(165,214,255)">=C2=A0 =C2=A0 =C2=A0 =C2=A0 =C2=A0=
 grid-column: 1;</span></div><div><span style=3D"color:rgb(165,214,255)">=
=C2=A0 =C2=A0 =C2=A0 =C2=A0 =C2=A0 grid-row: 1;</span></div><div><span styl=
e=3D"color:rgb(165,214,255)">=C2=A0 =C2=A0 =C2=A0 =C2=A0 }</span></div><br>=
<div><span style=3D"color:rgb(165,214,255)">=C2=A0 =C2=A0 =C2=A0 =C2=A0 .li=
a-controles-topo {</span></div><div><span style=3D"color:rgb(165,214,255)">=
=C2=A0 =C2=A0 =C2=A0 =C2=A0 =C2=A0 grid-column: 1;</span></div><div><span s=
tyle=3D"color:rgb(165,214,255)">=C2=A0 =C2=A0 =C2=A0 =C2=A0 =C2=A0 grid-row=
: 2;</span></div><div><span style=3D"color:rgb(165,214,255)">=C2=A0 =C2=A0 =
=C2=A0 =C2=A0 =C2=A0 justify-self: start;</span></div><div><span style=3D"c=
olor:rgb(165,214,255)">=C2=A0 =C2=A0 =C2=A0 =C2=A0 }</span></div><br><div><=
span style=3D"color:rgb(165,214,255)">=C2=A0 =C2=A0 =C2=A0 =C2=A0 .lia-nave=
gacao {</span></div><div><span style=3D"color:rgb(165,214,255)">=C2=A0 =C2=
=A0 =C2=A0 =C2=A0 =C2=A0 grid-row: 3;</span></div><div><span style=3D"color=
:rgb(165,214,255)">=C2=A0 =C2=A0 =C2=A0 =C2=A0 }</span></div><div><span sty=
le=3D"color:rgb(165,214,255)">=C2=A0 =C2=A0 =C2=A0 }</span></div><div><span=
 style=3D"color:rgb(165,214,255)">=C2=A0 =C2=A0 `</span><span style=3D"colo=
r:rgb(201,209,217)">;</span></div><br><div><span style=3D"color:rgb(201,209=
,217)">=C2=A0 =C2=A0 document.head.</span><span style=3D"color:rgb(210,168,=
255)">appendChild</span><span style=3D"color:rgb(201,209,217)">(style);</sp=
an></div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 }</span></div><=
br><div><span style=3D"color:rgb(201,209,217)">=C2=A0 </span><span style=3D=
"color:rgb(255,123,114)">function</span><span style=3D"color:rgb(201,209,21=
7)"> </span><span style=3D"color:rgb(210,168,255)">prepararNavegacao</span>=
<span style=3D"color:rgb(201,209,217)">() {</span></div><div><span style=3D=
"color:rgb(201,209,217)">=C2=A0 =C2=A0 </span><span style=3D"color:rgb(255,=
123,114)">let</span><span style=3D"color:rgb(201,209,217)"> header </span><=
span style=3D"color:rgb(212,212,212)">=3D</span><span style=3D"color:rgb(20=
1,209,217)"> document.</span><span style=3D"color:rgb(210,168,255)">querySe=
lector</span><span style=3D"color:rgb(201,209,217)">(</span><span style=3D"=
color:rgb(165,214,255)">&quot;header&quot;</span><span style=3D"color:rgb(2=
01,209,217)">);</span></div><br><div><span style=3D"color:rgb(201,209,217)"=
>=C2=A0 =C2=A0 </span><span style=3D"color:rgb(197,134,192)">if</span><span=
 style=3D"color:rgb(201,209,217)"> (</span><span style=3D"color:rgb(212,212=
,212)">!</span><span style=3D"color:rgb(201,209,217)">header) {</span></div=
><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 header </=
span><span style=3D"color:rgb(212,212,212)">=3D</span><span style=3D"color:=
rgb(201,209,217)"> document.</span><span style=3D"color:rgb(210,168,255)">c=
reateElement</span><span style=3D"color:rgb(201,209,217)">(</span><span sty=
le=3D"color:rgb(165,214,255)">&quot;header&quot;</span><span style=3D"color=
:rgb(201,209,217)">);</span></div><div><span style=3D"color:rgb(201,209,217=
)">=C2=A0 =C2=A0 =C2=A0 document.body.</span><span style=3D"color:rgb(210,1=
68,255)">prepend</span><span style=3D"color:rgb(201,209,217)">(header);</sp=
an></div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 }</span>=
</div><br><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 header.=
classList.</span><span style=3D"color:rgb(210,168,255)">add</span><span sty=
le=3D"color:rgb(201,209,217)">(</span><span style=3D"color:rgb(165,214,255)=
">&quot;lia-cabecalho-global&quot;</span><span style=3D"color:rgb(201,209,2=
17)">);</span></div><br><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =
=C2=A0 </span><span style=3D"color:rgb(139,148,158)">// Marca e identidade =
da LIA.</span></div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=
=A0 </span><span style=3D"color:rgb(255,123,114)">let</span><span style=3D"=
color:rgb(201,209,217)"> marca </span><span style=3D"color:rgb(212,212,212)=
">=3D</span><span style=3D"color:rgb(201,209,217)"> header.</span><span sty=
le=3D"color:rgb(210,168,255)">querySelector</span><span style=3D"color:rgb(=
201,209,217)">(</span><span style=3D"color:rgb(165,214,255)">&quot;.lia-mar=
ca&quot;</span><span style=3D"color:rgb(201,209,217)">);</span></div><br><d=
iv><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 </span><span style=
=3D"color:rgb(197,134,192)">if</span><span style=3D"color:rgb(201,209,217)"=
> (</span><span style=3D"color:rgb(212,212,212)">!</span><span style=3D"col=
or:rgb(201,209,217)">marca) {</span></div><div><span style=3D"color:rgb(201=
,209,217)">=C2=A0 =C2=A0 =C2=A0 marca </span><span style=3D"color:rgb(212,2=
12,212)">=3D</span><span style=3D"color:rgb(201,209,217)"> document.</span>=
<span style=3D"color:rgb(210,168,255)">createElement</span><span style=3D"c=
olor:rgb(201,209,217)">(</span><span style=3D"color:rgb(165,214,255)">&quot=
;div&quot;</span><span style=3D"color:rgb(201,209,217)">);</span></div><div=
><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 marca.classNam=
e </span><span style=3D"color:rgb(212,212,212)">=3D</span><span style=3D"co=
lor:rgb(201,209,217)"> </span><span style=3D"color:rgb(165,214,255)">&quot;=
lia-marca&quot;</span><span style=3D"color:rgb(201,209,217)">;</span></div>=
<div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 header.</s=
pan><span style=3D"color:rgb(210,168,255)">prepend</span><span style=3D"col=
or:rgb(201,209,217)">(marca);</span></div><div><span style=3D"color:rgb(201=
,209,217)">=C2=A0 =C2=A0 }</span></div><br><div><span style=3D"color:rgb(20=
1,209,217)">=C2=A0 =C2=A0 </span><span style=3D"color:rgb(255,123,114)">let=
</span><span style=3D"color:rgb(201,209,217)"> logo </span><span style=3D"c=
olor:rgb(212,212,212)">=3D</span><span style=3D"color:rgb(201,209,217)"> ma=
rca.</span><span style=3D"color:rgb(210,168,255)">querySelector</span><span=
 style=3D"color:rgb(201,209,217)">(</span><span style=3D"color:rgb(165,214,=
255)">&quot;.lia-logo&quot;</span><span style=3D"color:rgb(201,209,217)">);=
</span></div><br><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =
</span><span style=3D"color:rgb(197,134,192)">if</span><span style=3D"color=
:rgb(201,209,217)"> (</span><span style=3D"color:rgb(212,212,212)">!</span>=
<span style=3D"color:rgb(201,209,217)">logo) {</span></div><div><span style=
=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 logo </span><span style=3D=
"color:rgb(212,212,212)">=3D</span><span style=3D"color:rgb(201,209,217)"> =
header.</span><span style=3D"color:rgb(210,168,255)">querySelector</span><s=
pan style=3D"color:rgb(201,209,217)">(</span><span style=3D"color:rgb(165,2=
14,255)">&quot;.lia-logo&quot;</span><span style=3D"color:rgb(201,209,217)"=
>) </span><span style=3D"color:rgb(212,212,212)">||</span></div><div><span =
style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 =C2=A0 header.</span>=
<span style=3D"color:rgb(210,168,255)">querySelector</span><span style=3D"c=
olor:rgb(201,209,217)">(</span><span style=3D"color:rgb(165,214,255)">&#39;=
a[href=3D&quot;index.html&quot;], a[href=3D&quot;./index.html&quot;]&#39;</=
span><span style=3D"color:rgb(201,209,217)">);</span></div><div><span style=
=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 }</span></div><br><div><span styl=
e=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 </span><span style=3D"color:rgb(=
197,134,192)">if</span><span style=3D"color:rgb(201,209,217)"> (</span><spa=
n style=3D"color:rgb(212,212,212)">!</span><span style=3D"color:rgb(201,209=
,217)">logo) {</span></div><div><span style=3D"color:rgb(201,209,217)">=C2=
=A0 =C2=A0 =C2=A0 logo </span><span style=3D"color:rgb(212,212,212)">=3D</s=
pan><span style=3D"color:rgb(201,209,217)"> document.</span><span style=3D"=
color:rgb(210,168,255)">createElement</span><span style=3D"color:rgb(201,20=
9,217)">(</span><span style=3D"color:rgb(165,214,255)">&quot;a&quot;</span>=
<span style=3D"color:rgb(201,209,217)">);</span></div><div><span style=3D"c=
olor:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 logo.textContent </span><span s=
tyle=3D"color:rgb(212,212,212)">=3D</span><span style=3D"color:rgb(201,209,=
217)"> </span><span style=3D"color:rgb(165,214,255)">&quot;LIA&quot;</span>=
<span style=3D"color:rgb(201,209,217)">;</span></div><div><span style=3D"co=
lor:rgb(201,209,217)">=C2=A0 =C2=A0 }</span></div><br><div><span style=3D"c=
olor:rgb(201,209,217)">=C2=A0 =C2=A0 logo.href </span><span style=3D"color:=
rgb(212,212,212)">=3D</span><span style=3D"color:rgb(201,209,217)"> </span>=
<span style=3D"color:rgb(165,214,255)">&quot;index.html&quot;</span><span s=
tyle=3D"color:rgb(201,209,217)">;</span></div><div><span style=3D"color:rgb=
(201,209,217)">=C2=A0 =C2=A0 logo.classList.</span><span style=3D"color:rgb=
(210,168,255)">add</span><span style=3D"color:rgb(201,209,217)">(</span><sp=
an style=3D"color:rgb(165,214,255)">&quot;lia-logo&quot;</span><span style=
=3D"color:rgb(201,209,217)">);</span></div><div><span style=3D"color:rgb(20=
1,209,217)">=C2=A0 =C2=A0 logo.</span><span style=3D"color:rgb(210,168,255)=
">setAttribute</span><span style=3D"color:rgb(201,209,217)">(</span><span s=
tyle=3D"color:rgb(165,214,255)">&quot;aria-label&quot;</span><span style=3D=
"color:rgb(201,209,217)">, </span><span style=3D"color:rgb(165,214,255)">&q=
uot;LIA - P=C3=A1gina inicial&quot;</span><span style=3D"color:rgb(201,209,=
217)">);</span></div><br><div><span style=3D"color:rgb(201,209,217)">=C2=A0=
 =C2=A0 </span><span style=3D"color:rgb(197,134,192)">if</span><span style=
=3D"color:rgb(201,209,217)"> (</span><span style=3D"color:rgb(212,212,212)"=
>!</span><span style=3D"color:rgb(201,209,217)">marca.</span><span style=3D=
"color:rgb(210,168,255)">contains</span><span style=3D"color:rgb(201,209,21=
7)">(logo)) marca.</span><span style=3D"color:rgb(210,168,255)">prepend</sp=
an><span style=3D"color:rgb(201,209,217)">(logo);</span></div><br><div><spa=
n style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 </span><span style=3D"colo=
r:rgb(255,123,114)">let</span><span style=3D"color:rgb(201,209,217)"> descr=
icao </span><span style=3D"color:rgb(212,212,212)">=3D</span><span style=3D=
"color:rgb(201,209,217)"> marca.</span><span style=3D"color:rgb(210,168,255=
)">querySelector</span><span style=3D"color:rgb(201,209,217)">(</span><span=
 style=3D"color:rgb(165,214,255)">&quot;.lia-descricao&quot;</span><span st=
yle=3D"color:rgb(201,209,217)">);</span></div><br><div><span style=3D"color=
:rgb(201,209,217)">=C2=A0 =C2=A0 </span><span style=3D"color:rgb(197,134,19=
2)">if</span><span style=3D"color:rgb(201,209,217)"> (</span><span style=3D=
"color:rgb(212,212,212)">!</span><span style=3D"color:rgb(201,209,217)">des=
cricao) {</span></div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =
=C2=A0 =C2=A0 descricao </span><span style=3D"color:rgb(212,212,212)">=3D</=
span><span style=3D"color:rgb(201,209,217)"> document.</span><span style=3D=
"color:rgb(210,168,255)">createElement</span><span style=3D"color:rgb(201,2=
09,217)">(</span><span style=3D"color:rgb(165,214,255)">&quot;span&quot;</s=
pan><span style=3D"color:rgb(201,209,217)">);</span></div><div><span style=
=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 descricao.className </span=
><span style=3D"color:rgb(212,212,212)">=3D</span><span style=3D"color:rgb(=
201,209,217)"> </span><span style=3D"color:rgb(165,214,255)">&quot;lia-desc=
ricao&quot;</span><span style=3D"color:rgb(201,209,217)">;</span></div><div=
><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span s=
tyle=3D"color:rgb(201,209,217)">descricao</span><span style=3D"color:rgb(20=
1,209,217)">.</span><span style=3D"color:rgb(121,192,255)">textContent</spa=
n><span style=3D"color:rgb(201,209,217)"> </span><span style=3D"color:rgb(2=
12,212,212)">=3D</span><span style=3D"color:rgb(201,209,217)"> </span><span=
 style=3D"color:rgb(165,214,255)">&quot;Local de Informa=C3=A7=C3=A3o e Apo=
io&quot;</span><span style=3D"color:rgb(201,209,217)">;</span></div><div><s=
pan style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span styl=
e=3D"color:rgb(201,209,217)">marca</span><span style=3D"color:rgb(201,209,2=
17)">.</span><span style=3D"color:rgb(210,168,255)">appendChild</span><span=
 style=3D"color:rgb(201,209,217)">(</span><span style=3D"color:rgb(201,209,=
217)">descricao</span><span style=3D"color:rgb(201,209,217)">);</span></div=
><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 }</span></div><b=
r><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 </span><span st=
yle=3D"color:rgb(139,148,158)">// =C3=81rea =C3=BAnica dos controles.</span=
></div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 </span><sp=
an style=3D"color:rgb(255,123,114)">let</span><span style=3D"color:rgb(201,=
209,217)"> </span><span style=3D"color:rgb(201,209,217)">controles</span><s=
pan style=3D"color:rgb(201,209,217)"> </span><span style=3D"color:rgb(212,2=
12,212)">=3D</span><span style=3D"color:rgb(201,209,217)"> </span><span sty=
le=3D"color:rgb(201,209,217)">header</span><span style=3D"color:rgb(201,209=
,217)">.</span><span style=3D"color:rgb(210,168,255)">querySelector</span><=
span style=3D"color:rgb(201,209,217)">(</span><span style=3D"color:rgb(165,=
214,255)">&quot;.lia-controles-topo&quot;</span><span style=3D"color:rgb(20=
1,209,217)">);</span></div><br><div><span style=3D"color:rgb(201,209,217)">=
=C2=A0 =C2=A0 </span><span style=3D"color:rgb(197,134,192)">if</span><span =
style=3D"color:rgb(201,209,217)"> (</span><span style=3D"color:rgb(212,212,=
212)">!</span><span style=3D"color:rgb(201,209,217)">controles</span><span =
style=3D"color:rgb(201,209,217)">) {</span></div><div><span style=3D"color:=
rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:rgb(201,=
209,217)">controles</span><span style=3D"color:rgb(201,209,217)"> </span><s=
pan style=3D"color:rgb(212,212,212)">=3D</span><span style=3D"color:rgb(201=
,209,217)"> </span><span style=3D"color:rgb(121,192,255)">document</span><s=
pan style=3D"color:rgb(201,209,217)">.</span><span style=3D"color:rgb(210,1=
68,255)">createElement</span><span style=3D"color:rgb(201,209,217)">(</span=
><span style=3D"color:rgb(165,214,255)">&quot;div&quot;</span><span style=
=3D"color:rgb(201,209,217)">);</span></div><div><span style=3D"color:rgb(20=
1,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:rgb(201,209,21=
7)">controles</span><span style=3D"color:rgb(201,209,217)">.</span><span st=
yle=3D"color:rgb(121,192,255)">className</span><span style=3D"color:rgb(201=
,209,217)"> </span><span style=3D"color:rgb(212,212,212)">=3D</span><span s=
tyle=3D"color:rgb(201,209,217)"> </span><span style=3D"color:rgb(165,214,25=
5)">&quot;lia-controles-topo&quot;</span><span style=3D"color:rgb(201,209,2=
17)">;</span></div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=
=A0 =C2=A0 </span><span style=3D"color:rgb(201,209,217)">header</span><span=
 style=3D"color:rgb(201,209,217)">.</span><span style=3D"color:rgb(210,168,=
255)">appendChild</span><span style=3D"color:rgb(201,209,217)">(</span><spa=
n style=3D"color:rgb(201,209,217)">controles</span><span style=3D"color:rgb=
(201,209,217)">);</span></div><div><span style=3D"color:rgb(201,209,217)">=
=C2=A0 =C2=A0 }</span></div><br><div><span style=3D"color:rgb(201,209,217)"=
>=C2=A0 =C2=A0 </span><span style=3D"color:rgb(139,148,158)">// Remove bot=
=C3=B5es antigos de voltar para evitar duplica=C3=A7=C3=B5es.</span></div><=
div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 </span><span style=
=3D"color:rgb(255,123,114)">const</span><span style=3D"color:rgb(201,209,21=
7)"> </span><span style=3D"color:rgb(121,192,255)">botoesVoltar</span><span=
 style=3D"color:rgb(201,209,217)"> </span><span style=3D"color:rgb(212,212,=
212)">=3D</span><span style=3D"color:rgb(201,209,217)"> </span><span style=
=3D"color:rgb(201,209,217)">header</span><span style=3D"color:rgb(201,209,2=
17)">.</span><span style=3D"color:rgb(210,168,255)">querySelectorAll</span>=
<span style=3D"color:rgb(201,209,217)">(</span></div><div><span style=3D"co=
lor:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:rgb(=
165,214,255)">&quot;.lia-voltar-pagina, #lia-voltar, .btn-voltar&quot;</spa=
n></div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 );</span>=
</div><br><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 </span>=
<span style=3D"color:rgb(255,123,114)">let</span><span style=3D"color:rgb(2=
01,209,217)"> </span><span style=3D"color:rgb(201,209,217)">voltar</span><s=
pan style=3D"color:rgb(201,209,217)"> </span><span style=3D"color:rgb(212,2=
12,212)">=3D</span><span style=3D"color:rgb(201,209,217)"> </span><span sty=
le=3D"color:rgb(201,209,217)">controles</span><span style=3D"color:rgb(201,=
209,217)">.</span><span style=3D"color:rgb(210,168,255)">querySelector</spa=
n><span style=3D"color:rgb(201,209,217)">(</span><span style=3D"color:rgb(1=
65,214,255)">&quot;.lia-voltar-pagina&quot;</span><span style=3D"color:rgb(=
201,209,217)">);</span></div><br><div><span style=3D"color:rgb(201,209,217)=
">=C2=A0 =C2=A0 </span><span style=3D"color:rgb(121,192,255)">botoesVoltar<=
/span><span style=3D"color:rgb(201,209,217)">.</span><span style=3D"color:r=
gb(210,168,255)">forEach</span><span style=3D"color:rgb(201,209,217)">((</s=
pan><span style=3D"color:rgb(255,166,87)">botao</span><span style=3D"color:=
rgb(201,209,217)">) </span><span style=3D"color:rgb(255,123,114)">=3D&gt;</=
span><span style=3D"color:rgb(201,209,217)"> {</span></div><div><span style=
=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"colo=
r:rgb(197,134,192)">if</span><span style=3D"color:rgb(201,209,217)"> (</spa=
n><span style=3D"color:rgb(255,166,87)">botao</span><span style=3D"color:rg=
b(201,209,217)"> </span><span style=3D"color:rgb(212,212,212)">!=3D=3D</spa=
n><span style=3D"color:rgb(201,209,217)"> </span><span style=3D"color:rgb(2=
01,209,217)">voltar</span><span style=3D"color:rgb(201,209,217)">) </span><=
span style=3D"color:rgb(255,166,87)">botao</span><span style=3D"color:rgb(2=
01,209,217)">.</span><span style=3D"color:rgb(210,168,255)">remove</span><s=
pan style=3D"color:rgb(201,209,217)">();</span></div><div><span style=3D"co=
lor:rgb(201,209,217)">=C2=A0 =C2=A0 });</span></div><br><div><span style=3D=
"color:rgb(201,209,217)">=C2=A0 =C2=A0 </span><span style=3D"color:rgb(197,=
134,192)">if</span><span style=3D"color:rgb(201,209,217)"> (</span><span st=
yle=3D"color:rgb(212,212,212)">!</span><span style=3D"color:rgb(121,192,255=
)">paginaInicial</span><span style=3D"color:rgb(201,209,217)">) {</span></d=
iv><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span>=
<span style=3D"color:rgb(197,134,192)">if</span><span style=3D"color:rgb(20=
1,209,217)"> (</span><span style=3D"color:rgb(212,212,212)">!</span><span s=
tyle=3D"color:rgb(201,209,217)">voltar</span><span style=3D"color:rgb(201,2=
09,217)">) {</span></div><div><span style=3D"color:rgb(201,209,217)">=C2=A0=
 =C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:rgb(201,209,217)">voltar<=
/span><span style=3D"color:rgb(201,209,217)"> </span><span style=3D"color:r=
gb(212,212,212)">=3D</span><span style=3D"color:rgb(201,209,217)"> </span><=
span style=3D"color:rgb(121,192,255)">document</span><span style=3D"color:r=
gb(201,209,217)">.</span><span style=3D"color:rgb(210,168,255)">createEleme=
nt</span><span style=3D"color:rgb(201,209,217)">(</span><span style=3D"colo=
r:rgb(165,214,255)">&quot;button&quot;</span><span style=3D"color:rgb(201,2=
09,217)">);</span></div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =
=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:rgb(201,209,217)">voltar</=
span><span style=3D"color:rgb(201,209,217)">.type </span><span style=3D"col=
or:rgb(212,212,212)">=3D</span><span style=3D"color:rgb(201,209,217)"> </sp=
an><span style=3D"color:rgb(165,214,255)">&quot;button&quot;</span><span st=
yle=3D"color:rgb(201,209,217)">;</span></div><div><span style=3D"color:rgb(=
201,209,217)">=C2=A0 =C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:rgb(2=
01,209,217)">voltar</span><span style=3D"color:rgb(201,209,217)">.</span><s=
pan style=3D"color:rgb(121,192,255)">className</span><span style=3D"color:r=
gb(201,209,217)"> </span><span style=3D"color:rgb(212,212,212)">=3D</span><=
span style=3D"color:rgb(201,209,217)"> </span><span style=3D"color:rgb(165,=
214,255)">&quot;lia-voltar-pagina&quot;</span><span style=3D"color:rgb(201,=
209,217)">;</span></div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =
=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:rgb(201,209,217)">voltar</=
span><span style=3D"color:rgb(201,209,217)">.</span><span style=3D"color:rg=
b(121,192,255)">textContent</span><span style=3D"color:rgb(201,209,217)"> <=
/span><span style=3D"color:rgb(212,212,212)">=3D</span><span style=3D"color=
:rgb(201,209,217)"> </span><span style=3D"color:rgb(165,214,255)">&quot;=E2=
=86=90 Voltar&quot;</span><span style=3D"color:rgb(201,209,217)">;</span></=
div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 }</spa=
n></div><br><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=
=A0 </span><span style=3D"color:rgb(201,209,217)">voltar</span><span style=
=3D"color:rgb(201,209,217)">.</span><span style=3D"color:rgb(210,168,255)">=
addEventListener</span><span style=3D"color:rgb(201,209,217)">(</span><span=
 style=3D"color:rgb(165,214,255)">&quot;click&quot;</span><span style=3D"co=
lor:rgb(201,209,217)">, () </span><span style=3D"color:rgb(255,123,114)">=
=3D&gt;</span><span style=3D"color:rgb(201,209,217)"> {</span></div><div><s=
pan style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 =C2=A0 </span><sp=
an style=3D"color:rgb(197,134,192)">if</span><span style=3D"color:rgb(201,2=
09,217)"> (</span><span style=3D"color:rgb(121,192,255)">window</span><span=
 style=3D"color:rgb(201,209,217)">.</span><span style=3D"color:rgb(121,192,=
255)">history</span><span style=3D"color:rgb(201,209,217)">.</span><span st=
yle=3D"color:rgb(121,192,255)">length</span><span style=3D"color:rgb(201,20=
9,217)"> </span><span style=3D"color:rgb(212,212,212)">&gt;</span><span sty=
le=3D"color:rgb(201,209,217)"> </span><span style=3D"color:rgb(181,206,168)=
">1</span><span style=3D"color:rgb(201,209,217)">) {</span></div><div><span=
 style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 =C2=A0 =C2=A0 </span=
><span style=3D"color:rgb(121,192,255)">window</span><span style=3D"color:r=
gb(201,209,217)">.</span><span style=3D"color:rgb(121,192,255)">history</sp=
an><span style=3D"color:rgb(201,209,217)">.</span><span style=3D"color:rgb(=
210,168,255)">back</span><span style=3D"color:rgb(201,209,217)">();</span><=
/div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 =C2=
=A0 } </span><span style=3D"color:rgb(197,134,192)">else</span><span style=
=3D"color:rgb(201,209,217)"> {</span></div><div><span style=3D"color:rgb(20=
1,209,217)">=C2=A0 =C2=A0 =C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:=
rgb(121,192,255)">window</span><span style=3D"color:rgb(201,209,217)">.</sp=
an><span style=3D"color:rgb(121,192,255)">location</span><span style=3D"col=
or:rgb(201,209,217)">.</span><span style=3D"color:rgb(121,192,255)">href</s=
pan><span style=3D"color:rgb(201,209,217)"> </span><span style=3D"color:rgb=
(212,212,212)">=3D</span><span style=3D"color:rgb(201,209,217)"> </span><sp=
an style=3D"color:rgb(165,214,255)">&quot;index.html&quot;</span><span styl=
e=3D"color:rgb(201,209,217)">;</span></div><div><span style=3D"color:rgb(20=
1,209,217)">=C2=A0 =C2=A0 =C2=A0 =C2=A0 }</span></div><div><span style=3D"c=
olor:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 });</span></div><br><div><span =
style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D=
"color:rgb(197,134,192)">if</span><span style=3D"color:rgb(201,209,217)"> (=
</span><span style=3D"color:rgb(201,209,217)">voltar</span><span style=3D"c=
olor:rgb(201,209,217)">.</span><span style=3D"color:rgb(121,192,255)">paren=
tElement</span><span style=3D"color:rgb(201,209,217)"> </span><span style=
=3D"color:rgb(212,212,212)">!=3D=3D</span><span style=3D"color:rgb(201,209,=
217)"> </span><span style=3D"color:rgb(201,209,217)">controles</span><span =
style=3D"color:rgb(201,209,217)">) {</span></div><div><span style=3D"color:=
rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:r=
gb(201,209,217)">controles</span><span style=3D"color:rgb(201,209,217)">.</=
span><span style=3D"color:rgb(210,168,255)">prepend</span><span style=3D"co=
lor:rgb(201,209,217)">(</span><span style=3D"color:rgb(201,209,217)">voltar=
</span><span style=3D"color:rgb(201,209,217)">);</span></div><div><span sty=
le=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 }</span></div><div><span=
 style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 } </span><span style=3D"col=
or:rgb(197,134,192)">else</span><span style=3D"color:rgb(201,209,217)"> </s=
pan><span style=3D"color:rgb(197,134,192)">if</span><span style=3D"color:rg=
b(201,209,217)"> (</span><span style=3D"color:rgb(201,209,217)">voltar</spa=
n><span style=3D"color:rgb(201,209,217)">) {</span></div><div><span style=
=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"colo=
r:rgb(201,209,217)">voltar</span><span style=3D"color:rgb(201,209,217)">.</=
span><span style=3D"color:rgb(210,168,255)">remove</span><span style=3D"col=
or:rgb(201,209,217)">();</span></div><div><span style=3D"color:rgb(201,209,=
217)">=C2=A0 =C2=A0 }</span></div><br><div><span style=3D"color:rgb(201,209=
,217)">=C2=A0 =C2=A0 </span><span style=3D"color:rgb(139,148,158)">// Menu =
principal apenas na p=C3=A1gina inicial.</span></div><div><span style=3D"co=
lor:rgb(201,209,217)">=C2=A0 =C2=A0 </span><span style=3D"color:rgb(255,123=
,114)">const</span><span style=3D"color:rgb(201,209,217)"> </span><span sty=
le=3D"color:rgb(121,192,255)">seletoresMenu</span><span style=3D"color:rgb(=
201,209,217)"> </span><span style=3D"color:rgb(212,212,212)">=3D</span><spa=
n style=3D"color:rgb(201,209,217)"> [</span></div><div><span style=3D"color=
:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:rgb(165=
,214,255)">&#39;nav[aria-label=3D&quot;Navega=C3=A7=C3=A3o principal&quot;]=
&#39;</span><span style=3D"color:rgb(201,209,217)">,</span></div><div><span=
 style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span style=
=3D"color:rgb(165,214,255)">&quot;nav.lia-menu&quot;</span><span style=3D"c=
olor:rgb(201,209,217)">,</span></div><div><span style=3D"color:rgb(201,209,=
217)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:rgb(165,214,255)">&q=
uot;nav.lia-navegacao&quot;</span><span style=3D"color:rgb(201,209,217)">,<=
/span></div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=
=A0 </span><span style=3D"color:rgb(165,214,255)">&quot;#mainNav&quot;</spa=
n></div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 ].</span>=
<span style=3D"color:rgb(210,168,255)">join</span><span style=3D"color:rgb(=
201,209,217)">(</span><span style=3D"color:rgb(165,214,255)">&quot;,&quot;<=
/span><span style=3D"color:rgb(201,209,217)">);</span></div><br><div><span =
style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 </span><span style=3D"color:=
rgb(255,123,114)">let</span><span style=3D"color:rgb(201,209,217)"> </span>=
<span style=3D"color:rgb(201,209,217)">menus</span><span style=3D"color:rgb=
(201,209,217)"> </span><span style=3D"color:rgb(212,212,212)">=3D</span><sp=
an style=3D"color:rgb(201,209,217)"> </span><span style=3D"color:rgb(78,201=
,176)">Array</span><span style=3D"color:rgb(201,209,217)">.</span><span sty=
le=3D"color:rgb(210,168,255)">from</span><span style=3D"color:rgb(201,209,2=
17)">(</span><span style=3D"color:rgb(201,209,217)">header</span><span styl=
e=3D"color:rgb(201,209,217)">.</span><span style=3D"color:rgb(210,168,255)"=
>querySelectorAll</span><span style=3D"color:rgb(201,209,217)">(</span><spa=
n style=3D"color:rgb(121,192,255)">seletoresMenu</span><span style=3D"color=
:rgb(201,209,217)">));</span></div><br><div><span style=3D"color:rgb(201,20=
9,217)">=C2=A0 =C2=A0 </span><span style=3D"color:rgb(197,134,192)">if</spa=
n><span style=3D"color:rgb(201,209,217)"> (</span><span style=3D"color:rgb(=
121,192,255)">paginaInicial</span><span style=3D"color:rgb(201,209,217)">) =
{</span></div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=
=A0 </span><span style=3D"color:rgb(255,123,114)">let</span><span style=3D"=
color:rgb(201,209,217)"> </span><span style=3D"color:rgb(201,209,217)">menu=
</span><span style=3D"color:rgb(201,209,217)"> </span><span style=3D"color:=
rgb(212,212,212)">=3D</span><span style=3D"color:rgb(201,209,217)"> </span>=
<span style=3D"color:rgb(201,209,217)">menus</span><span style=3D"color:rgb=
(201,209,217)">.</span><span style=3D"color:rgb(210,168,255)">shift</span><=
span style=3D"color:rgb(201,209,217)">();</span></div><br><div><span style=
=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"colo=
r:rgb(201,209,217)">menus</span><span style=3D"color:rgb(201,209,217)">.</s=
pan><span style=3D"color:rgb(210,168,255)">forEach</span><span style=3D"col=
or:rgb(201,209,217)">((</span><span style=3D"color:rgb(255,166,87)">item</s=
pan><span style=3D"color:rgb(201,209,217)">) </span><span style=3D"color:rg=
b(255,123,114)">=3D&gt;</span><span style=3D"color:rgb(201,209,217)"> </spa=
n><span style=3D"color:rgb(255,166,87)">item</span><span style=3D"color:rgb=
(201,209,217)">.</span><span style=3D"color:rgb(210,168,255)">remove</span>=
<span style=3D"color:rgb(201,209,217)">());</span></div><br><div><span styl=
e=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"col=
or:rgb(197,134,192)">if</span><span style=3D"color:rgb(201,209,217)"> (</sp=
an><span style=3D"color:rgb(212,212,212)">!</span><span style=3D"color:rgb(=
201,209,217)">menu</span><span style=3D"color:rgb(201,209,217)">) {</span><=
/div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 =C2=
=A0 </span><span style=3D"color:rgb(201,209,217)">menu</span><span style=3D=
"color:rgb(201,209,217)"> </span><span style=3D"color:rgb(212,212,212)">=3D=
</span><span style=3D"color:rgb(201,209,217)"> </span><span style=3D"color:=
rgb(121,192,255)">document</span><span style=3D"color:rgb(201,209,217)">.</=
span><span style=3D"color:rgb(210,168,255)">createElement</span><span style=
=3D"color:rgb(201,209,217)">(</span><span style=3D"color:rgb(165,214,255)">=
&quot;nav&quot;</span><span style=3D"color:rgb(201,209,217)">);</span></div=
><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 =C2=A0 </=
span><span style=3D"color:rgb(201,209,217)">menu</span><span style=3D"color=
:rgb(201,209,217)">.</span><span style=3D"color:rgb(121,192,255)">className=
</span><span style=3D"color:rgb(201,209,217)"> </span><span style=3D"color:=
rgb(212,212,212)">=3D</span><span style=3D"color:rgb(201,209,217)"> </span>=
<span style=3D"color:rgb(165,214,255)">&quot;lia-navegacao&quot;</span><spa=
n style=3D"color:rgb(201,209,217)">;</span></div><div><span style=3D"color:=
rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:r=
gb(201,209,217)">menu</span><span style=3D"color:rgb(201,209,217)">.</span>=
<span style=3D"color:rgb(210,168,255)">setAttribute</span><span style=3D"co=
lor:rgb(201,209,217)">(</span><span style=3D"color:rgb(165,214,255)">&quot;=
aria-label&quot;</span><span style=3D"color:rgb(201,209,217)">, </span><spa=
n style=3D"color:rgb(165,214,255)">&quot;Navega=C3=A7=C3=A3o principal&quot=
;</span><span style=3D"color:rgb(201,209,217)">);</span></div><div><span st=
yle=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 =C2=A0 </span><span sty=
le=3D"color:rgb(201,209,217)">menu</span><span style=3D"color:rgb(201,209,2=
17)">.</span><span style=3D"color:rgb(121,192,255)">innerHTML</span><span s=
tyle=3D"color:rgb(201,209,217)"> </span><span style=3D"color:rgb(212,212,21=
2)">=3D</span><span style=3D"color:rgb(201,209,217)"> </span><span style=3D=
"color:rgb(165,214,255)">`</span></div><div><span style=3D"color:rgb(165,21=
4,255)">=C2=A0 =C2=A0 =C2=A0 =C2=A0 =C2=A0 &lt;a href=3D&quot;index.html&qu=
ot;&gt;In=C3=ADcio&lt;/a&gt;</span></div><div><span style=3D"color:rgb(165,=
214,255)">=C2=A0 =C2=A0 =C2=A0 =C2=A0 =C2=A0 &lt;a href=3D&quot;historia.ht=
ml&quot;&gt;Hist=C3=B3ria da LIA&lt;/a&gt;</span></div><div><span style=3D"=
color:rgb(165,214,255)">=C2=A0 =C2=A0 =C2=A0 =C2=A0 =C2=A0 &lt;a href=3D&qu=
ot;projeto.html&quot;&gt;Projeto&lt;/a&gt;</span></div><div><span style=3D"=
color:rgb(165,214,255)">=C2=A0 =C2=A0 =C2=A0 =C2=A0 =C2=A0 &lt;a href=3D&qu=
ot;violencias.html&quot;&gt;Tipos de viol=C3=AAncia&lt;/a&gt;</span></div><=
div><span style=3D"color:rgb(165,214,255)">=C2=A0 =C2=A0 =C2=A0 =C2=A0 =C2=
=A0 &lt;a href=3D&quot;noticias.html&quot;&gt;Not=C3=ADcias&lt;/a&gt;</span=
></div><div><span style=3D"color:rgb(165,214,255)">=C2=A0 =C2=A0 =C2=A0 =C2=
=A0 =C2=A0 &lt;a href=3D&quot;apoio.html&quot;&gt;Preciso de apoio&lt;/a&gt=
;</span></div><div><span style=3D"color:rgb(165,214,255)">=C2=A0 =C2=A0 =C2=
=A0 =C2=A0 `</span><span style=3D"color:rgb(201,209,217)">;</span></div><di=
v><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 }</span></div=
><br><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </spa=
n><span style=3D"color:rgb(197,134,192)">if</span><span style=3D"color:rgb(=
201,209,217)"> (</span><span style=3D"color:rgb(212,212,212)">!</span><span=
 style=3D"color:rgb(201,209,217)">header</span><span style=3D"color:rgb(201=
,209,217)">.</span><span style=3D"color:rgb(210,168,255)">contains</span><s=
pan style=3D"color:rgb(201,209,217)">(</span><span style=3D"color:rgb(201,2=
09,217)">menu</span><span style=3D"color:rgb(201,209,217)">)) </span><span =
style=3D"color:rgb(201,209,217)">header</span><span style=3D"color:rgb(201,=
209,217)">.</span><span style=3D"color:rgb(210,168,255)">appendChild</span>=
<span style=3D"color:rgb(201,209,217)">(</span><span style=3D"color:rgb(201=
,209,217)">menu</span><span style=3D"color:rgb(201,209,217)">);</span></div=
><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 } </span><span s=
tyle=3D"color:rgb(197,134,192)">else</span><span style=3D"color:rgb(201,209=
,217)"> {</span></div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =
=C2=A0 =C2=A0 </span><span style=3D"color:rgb(201,209,217)">menus</span><sp=
an style=3D"color:rgb(201,209,217)">.</span><span style=3D"color:rgb(210,16=
8,255)">forEach</span><span style=3D"color:rgb(201,209,217)">((</span><span=
 style=3D"color:rgb(255,166,87)">menu</span><span style=3D"color:rgb(201,20=
9,217)">) </span><span style=3D"color:rgb(255,123,114)">=3D&gt;</span><span=
 style=3D"color:rgb(201,209,217)"> </span><span style=3D"color:rgb(255,166,=
87)">menu</span><span style=3D"color:rgb(201,209,217)">.</span><span style=
=3D"color:rgb(210,168,255)">remove</span><span style=3D"color:rgb(201,209,2=
17)">());</span></div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =
=C2=A0 }</span></div><br><div><span style=3D"color:rgb(201,209,217)">=C2=A0=
 =C2=A0 </span><span style=3D"color:rgb(210,168,255)">adicionarEstilos</spa=
n><span style=3D"color:rgb(201,209,217)">();</span></div><div><span style=
=3D"color:rgb(201,209,217)">=C2=A0 }</span></div><br><div><span style=3D"co=
lor:rgb(201,209,217)">=C2=A0 </span><span style=3D"color:rgb(197,134,192)">=
if</span><span style=3D"color:rgb(201,209,217)"> (</span><span style=3D"col=
or:rgb(121,192,255)">document</span><span style=3D"color:rgb(201,209,217)">=
.</span><span style=3D"color:rgb(121,192,255)">readyState</span><span style=
=3D"color:rgb(201,209,217)"> </span><span style=3D"color:rgb(212,212,212)">=
=3D=3D=3D</span><span style=3D"color:rgb(201,209,217)"> </span><span style=
=3D"color:rgb(165,214,255)">&quot;loading&quot;</span><span style=3D"color:=
rgb(201,209,217)">) {</span></div><div><span style=3D"color:rgb(201,209,217=
)">=C2=A0 =C2=A0 </span><span style=3D"color:rgb(121,192,255)">document</sp=
an><span style=3D"color:rgb(201,209,217)">.</span><span style=3D"color:rgb(=
210,168,255)">addEventListener</span><span style=3D"color:rgb(201,209,217)"=
>(</span><span style=3D"color:rgb(165,214,255)">&quot;DOMContentLoaded&quot=
;</span><span style=3D"color:rgb(201,209,217)">, </span><span style=3D"colo=
r:rgb(210,168,255)">prepararNavegacao</span><span style=3D"color:rgb(201,20=
9,217)">);</span></div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 }=
 </span><span style=3D"color:rgb(197,134,192)">else</span><span style=3D"co=
lor:rgb(201,209,217)"> {</span></div><div><span style=3D"color:rgb(201,209,=
217)">=C2=A0 =C2=A0 </span><span style=3D"color:rgb(210,168,255)">prepararN=
avegacao</span><span style=3D"color:rgb(201,209,217)">();</span></div><div>=
<span style=3D"color:rgb(201,209,217)">=C2=A0 }</span></div><div><span styl=
e=3D"color:rgb(201,209,217)">}</span>)();</div><br></div></div>

--000000000000721a6e065f1469f8--