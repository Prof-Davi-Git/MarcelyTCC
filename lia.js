MIME-Version: 1.0
Date: Fri, 30 Oct 2026 17:12:35 -0300
Message-ID: <CADa5m5z=ys-WB02-99BYVcoZbXP_f9-4xiywSAYBJdmYbHAzMQ@mail.gmail.com>
Subject: tcc atualizado lia.js
From: Marcely Castro Rodrigues <castrorodriguesmarcely@gmail.com>
To: Marcely Castro Rodrigues <castrorodriguesmarcely@gmail.com>
Content-Type: multipart/alternative; boundary="00000000000009d134065f146864"

--00000000000009d134065f146864
Content-Type: text/plain; charset="UTF-8"
Content-Transfer-Encoding: quoted-printable

"use strict";

document.addEventListener("DOMContentLoaded", () =3D> {
  const $ =3D (selector) =3D> document.querySelector(selector);
  const $$ =3D (selector) =3D> document.querySelectorAll(selector);

  const menuToggle =3D $("#menuToggle");
  const mainNav =3D $("#mainNav");
  const accessibilityToggle =3D $("#accessibilityToggle");
  const accessibilityPanel =3D $("#accessibilityPanel");
  const accessibilityClose =3D $("#accessibilityClose");
  const languageSelect =3D $("#languageSelect");
  const themeSelect =3D $("#themeSelect");
  const contrastToggle =3D $("#contrastToggle");
  const speechToggle =3D $("#speechToggle");
  const toast =3D $("#siteToast");

  // Tradu=C3=A7=C3=B5es da p=C3=A1gina inicial.
  const translations =3D {
    pt: {
      skip: "Pular para o conte=C3=BAdo",
      navHome: "In=C3=ADcio",
      navAbout: "Sobre a LIA",
      navHistory: "Nossa hist=C3=B3ria",
      navViolence: "Viol=C3=AAncias",
      navResources: "Recursos",
      navNews: "Not=C3=ADcias",
      navAccount: "Conta",
      languageLabel: "Idioma",

      accessEyebrow: "PERSONALIZE SUA EXPERI=C3=8ANCIA",
      accessTitle: "Acessibilidade",
      fontSize: "Tamanho do texto",
      reset: "Padr=C3=A3o",
      theme: "Tema visual",
      lightTheme: "Claro",
      darkTheme: "Escuro",
      contrast: "Alto contraste",
      readAloud: "Leitura em voz alta",
      accessNote: "Os ajustes visuais podem ser alterados a qualquer
momento.",

      heroEyebrow: "VOC=C3=8A N=C3=83O EST=C3=81 SOZINHA",
      heroTitle: 'LIA =C3=A9 mais que um site, =C3=A9 uma <span>rede de apo=
io.</span>'
,
      heroDescription: "Um espa=C3=A7o de informa=C3=A7=C3=A3o, acolhimento=
 e orienta=C3=A7=C3=A3o
para mulheres que precisam ser ouvidas, compreender seus direitos e
encontrar caminhos para viver com mais seguran=C3=A7a.",
      heroHelp: "Preciso de apoio",
      heroKnow: "Conhe=C3=A7a a LIA",
      heroNote: "Um espa=C3=A7o de informa=C3=A7=C3=A3o, respeito e acolhim=
ento.",
      heroQuote: "Voc=C3=AA tem direito de ser feliz!",

      resourceKicker: "UM CAMINHO DE CADA VEZ",
      resourceInfoTitle: "Informa=C3=A7=C3=A3o",
      resourceInfoText: "Entenda os tipos de viol=C3=AAncia e reconhe=C3=A7=
a sinais.",
      resourceSafetyTitle: "Seguran=C3=A7a",
      resourceSafetyText: "Conhe=C3=A7a orienta=C3=A7=C3=B5es para planejar=
 sua seguran=C3=A7a."
,
      resourceSupportTitle: "Acolhimento",
      resourceSupportText: "Encontre caminhos para buscar apoio.",
      resourceToolsTitle: "Recursos",
      resourceToolsText: "Conhe=C3=A7a as ferramentas da plataforma.",

      aboutEyebrow: "SOBRE A LIA",
      aboutTitle: "Uma amiga virtual, um espa=C3=A7o de orienta=C3=A7=C3=A3=
o.",
      aboutText: "A LIA =C3=A9 um projeto que re=C3=BAne informa=C3=A7=C3=
=A3o, acolhimento e
caminhos para que mulheres possam conhecer seus direitos e identificar
recursos de apoio. A proposta =C3=A9 tornar informa=C3=A7=C3=B5es important=
es mais
acess=C3=ADveis, em um ambiente organizado e cuidadoso.",
      aboutPoint1: "Informa=C3=A7=C3=A3o acess=C3=ADvel e organizada",
      aboutPoint2: "Orienta=C3=A7=C3=A3o com respeito e acolhimento",
      aboutPoint3: "Informa=C3=A7=C3=B5es sobre recursos de seguran=C3=A7a"=
,
      aboutPoint4: "Caminhos para conhecer servi=C3=A7os de apoio",
      aboutLink: "Descubra a hist=C3=B3ria da LIA",
      phoneMessage: "Voc=C3=AA merece ser ouvida.",
      phoneInfo: "Informa=C3=A7=C3=A3o acess=C3=ADvel",
      phoneGuidance: "Orienta=C3=A7=C3=A3o acolhedora",
      phoneSafety: "Recursos de seguran=C3=A7a",

      storyEyebrow: "NOSSA HIST=C3=93RIA",
      storyTitle: "De uma ideia, nasceu uma miss=C3=A3o.",
      storyText: "A LIA nasceu com o prop=C3=B3sito de aproximar mulheres d=
a
informa=C3=A7=C3=A3o, do acolhimento e dos caminhos de apoio. Este projeto =
busca
mostrar como a tecnologia pode ser usada com responsabilidade para tornar
conte=C3=BAdos importantes mais acess=C3=ADveis.",
      storyButton: "Conhe=C3=A7a a hist=C3=B3ria da LIA",

      violenceEyebrow: "INFORMA=C3=87=C3=83O =C3=89 UM DIREITO",
      violenceTitle: "Toda forma de viol=C3=AAncia precisa ser reconhecida.=
",
      violenceDescription: "Conhecer os sinais pode ajudar a compreender
uma situa=C3=A7=C3=A3o e buscar orienta=C3=A7=C3=A3o. A responsabilidade pe=
la viol=C3=AAncia nunca =C3=A9
da v=C3=ADtima.",
      physicalTitle: "Viol=C3=AAncia f=C3=ADsica",
      physicalText: "A=C3=A7=C3=B5es que prejudicam a integridade ou a sa=
=C3=BAde
corporal.",
      psychTitle: "Viol=C3=AAncia psicol=C3=B3gica",
      psychText: "Amea=C3=A7as, humilha=C3=A7=C3=B5es, controle e a=C3=A7=
=C3=B5es que causam dano
emocional.",
      sexualTitle: "Viol=C3=AAncia sexual",
      sexualText: "Atos ou situa=C3=A7=C3=B5es que violam a liberdade sexua=
l.",
      propertyTitle: "Viol=C3=AAncia patrimonial",
      propertyText: "Controle, reten=C3=A7=C3=A3o ou destrui=C3=A7=C3=A3o d=
e bens, documentos e
recursos.",
      moralTitle: "Viol=C3=AAncia moral",
      moralText: "Condutas como cal=C3=BAnia, difama=C3=A7=C3=A3o e inj=C3=
=BAria.",
      digitalTitle: "Viol=C3=AAncia digital",
      digitalText: "Abusos e amea=C3=A7as praticados com recursos digitais.=
",
      vicariousTitle: "Viol=C3=AAncia vic=C3=A1ria",
      vicariousText: "Viol=C3=AAncia contra pessoas pr=C3=B3ximas para caus=
ar
sofrimento =C3=A0 mulher.",
      cycleTitle: "Ciclo da viol=C3=AAncia",
      cycleText: "Entenda padr=C3=B5es que podem ocorrer em rela=C3=A7=C3=
=B5es abusivas.",
      learnMore: "Saiba mais",

      supportEyebrow: "VOC=C3=8A MERECE SER OUVIDA",
      supportTitle: "Voc=C3=AA n=C3=A3o precisa passar por isso sozinha.",
      supportText: "Se voc=C3=AA precisa de orienta=C3=A7=C3=A3o, existem s=
ervi=C3=A7os e
pessoas que podem ajudar. Escolha o caminho mais adequado =C3=A0 sua situa=
=C3=A7=C3=A3o,
respeitando seu tempo e sua seguran=C3=A7a.",
      supportButton: "Conhe=C3=A7a as op=C3=A7=C3=B5es de apoio",
      helplineTitle: "Ligue 180",
      helplineText: "Central de Atendimento =C3=A0 Mulher",
      psychSupportTitle: "Apoio psicol=C3=B3gico",
      psychSupportText: "Informa=C3=A7=C3=B5es para buscar acolhimento",
      legalTitle: "Orienta=C3=A7=C3=A3o jur=C3=ADdica",
      legalText: "Conhe=C3=A7a caminhos e servi=C3=A7os de orienta=C3=A7=C3=
=A3o",
      socialTitle: "Servi=C3=A7os sociais",
      socialText: "Encontre informa=C3=A7=C3=B5es sobre atendimento",

      toolsEyebrow: "RECURSOS DA PLATAFORMA",
      toolsTitle: "Informa=C3=A7=C3=A3o e ferramentas em um s=C3=B3 lugar."=
,
      toolsDescription: "Conhe=C3=A7a os recursos previstos para apoiar a
organiza=C3=A7=C3=A3o de informa=C3=A7=C3=B5es e o acesso a orienta=C3=A7=
=C3=B5es =C3=BAteis.",
      discreetTitle: "Modo discreto",
      discreetText: "Conhe=C3=A7a a proposta de uma interface com apar=C3=
=AAncia de
agenda.",
      diaryTitle: "Di=C3=A1rio pessoal",
      diaryText: "Conhe=C3=A7a a proposta de organiza=C3=A7=C3=A3o de anota=
=C3=A7=C3=B5es pessoais.",
      trustedTitle: "Pessoas de confian=C3=A7a",
      trustedText: "Planeje como organizar contatos de pessoas escolhidas
por voc=C3=AA.",

      safetyEyebrow: "SUA SEGURAN=C3=87A IMPORTA",
      safetyTitle: "Informa=C3=A7=C3=A3o para fazer escolhas com mais segur=
an=C3=A7a.",
      safetyText: "Se houver perigo imediato, procure um local seguro e
acione os servi=C3=A7os de emerg=C3=AAncia quando puder faz=C3=AA-lo com se=
guran=C3=A7a.",
      safetyButton: "Orienta=C3=A7=C3=B5es de emerg=C3=AAncia",

      footerDescription: "Informa=C3=A7=C3=A3o, acolhimento e orienta=C3=A7=
=C3=A3o para
mulheres. Uma iniciativa que acredita no poder do conhecimento.",
      footerExplore: "Explore",
      footerHelp: "Encontre apoio",
      footerProject: "O projeto",
      projectLink: "Sobre o projeto",
      collaboratorsLink: "Colaboradores",
      tutorialLink: "Tutorial do modo discreto",
      copyright: "Projeto acad=C3=AAmico de informa=C3=A7=C3=A3o e orienta=
=C3=A7=C3=A3o.",
      footerDisclaimer: "A LIA =C3=A9 uma plataforma informativa e n=C3=A3o=
 substitui
atendimento profissional ou servi=C3=A7os de emerg=C3=AAncia.",
      backTop: "Voltar ao in=C3=ADcio =E2=86=91",

      menuOpen: "Abrir menu",
      menuClose: "Fechar menu",
      accessOpen: "Abrir acessibilidade",
      accessClose: "Fechar acessibilidade",
      increaseFont: "Aumentar fonte",
      decreaseFont: "Diminuir fonte",
      selectLanguage: "Selecionar idioma",
      closeButton: "Fechar"
    },

    en: {
      skip: "Skip to content",
      navHome: "Home",
      navAbout: "About LIA",
      navHistory: "Our story",
      navViolence: "Types of abuse",
      navResources: "Resources",
      navNews: "News",
      navAccount: "Account",
      languageLabel: "Language",

      accessEyebrow: "PERSONALIZE YOUR EXPERIENCE",
      accessTitle: "Accessibility",
      fontSize: "Text size",
      reset: "Default",
      theme: "Appearance",
      lightTheme: "Light",
      darkTheme: "Dark",
      contrast: "High contrast",
      readAloud: "Read aloud",
      accessNote: "Visual settings can be changed at any time.",

      heroEyebrow: "YOU ARE NOT ALONE",
      heroTitle: 'LIA is more than a website. It is a <span>support
network.</span>',
      heroDescription: "A space for information, care and guidance for
women who need to be heard, understand their rights and find ways to live
more safely.",
      heroHelp: "I need support",
      heroKnow: "Discover LIA",
      heroNote: "A space for information, respect and care.",
      heroQuote: "You deserve to be happy!",

      resourceKicker: "ONE STEP AT A TIME",
      resourceInfoTitle: "Information",
      resourceInfoText: "Learn about types of abuse and recognize warning
signs.",
      resourceSafetyTitle: "Safety",
      resourceSafetyText: "Explore guidance for planning your safety.",
      resourceSupportTitle: "Support",
      resourceSupportText: "Find ways to seek support.",
      resourceToolsTitle: "Resources",
      resourceToolsText: "Explore the platform's tools.",

      aboutEyebrow: "ABOUT LIA",
      aboutTitle: "A virtual companion and a space for guidance.",
      aboutText: "LIA is a project that brings together information, care
and pathways to help women understand their rights and identify support
resources. Its goal is to make important information more accessible in an
organized and thoughtful environment.",
      aboutPoint1: "Accessible, organized information",
      aboutPoint2: "Respectful and supportive guidance",
      aboutPoint3: "Information about safety resources",
      aboutPoint4: "Ways to find support services",
      aboutLink: "Discover LIA's story",
      phoneMessage: "You deserve to be heard.",
      phoneInfo: "Accessible information",
      phoneGuidance: "Supportive guidance",
      phoneSafety: "Safety resources",

      storyEyebrow: "OUR STORY",
      storyTitle: "A mission grew from an idea.",
      storyText: "LIA was created to bring women closer to information,
support and pathways to assistance. This project explores how technology
can be used responsibly to make important information more accessible.",
      storyButton: "Discover LIA's story",

      violenceEyebrow: "INFORMATION IS A RIGHT",
      violenceTitle: "Every form of abuse deserves recognition.",
      violenceDescription: "Recognizing warning signs can help people
understand a situation and seek guidance. Responsibility for abuse never
lies with the victim.",
      physicalTitle: "Physical abuse",
      physicalText: "Actions that harm physical integrity or health.",
      psychTitle: "Psychological abuse",
      psychText: "Threats, humiliation, control and actions that cause
emotional harm.",
      sexualTitle: "Sexual abuse",
      sexualText: "Acts or situations that violate sexual freedom.",
      propertyTitle: "Economic or property abuse",
      propertyText: "Control, withholding or destruction of property,
documents or resources.",
      moralTitle: "Reputational abuse",
      moralText: "Conduct such as slander, defamation and insult.",
      digitalTitle: "Digital abuse",
      digitalText: "Abuse and threats carried out using digital tools.",
      vicariousTitle: "Vicarious abuse",
      vicariousText: "Harming people close to a woman to cause her
suffering.",
      cycleTitle: "Cycle of abuse",
      cycleText: "Understand patterns that may occur in abusive
relationships.",
      learnMore: "Learn more",

      supportEyebrow: "YOU DESERVE TO BE HEARD",
      supportTitle: "You do not have to go through this alone.",
      supportText: "If you need guidance, services and people may be able
to help. Choose a path that suits your situation while considering your
time and safety.",
      supportButton: "Explore support options",
      helplineTitle: "Call 180",
      helplineText: "Women's Support Center in Brazil",
      psychSupportTitle: "Psychological support",
      psychSupportText: "Information on finding support",
      legalTitle: "Legal guidance",
      legalText: "Explore guidance services and options",
      socialTitle: "Social services",
      socialText: "Find information about available services",

      toolsEyebrow: "PLATFORM RESOURCES",
      toolsTitle: "Information and tools in one place.",
      toolsDescription: "Explore planned resources for organizing
information and accessing useful guidance.",
      discreetTitle: "Discreet mode",
      discreetText: "Learn about an interface designed to look like a
personal planner.",
      diaryTitle: "Personal journal",
      diaryText: "Explore the concept of organizing personal notes.",
      trustedTitle: "Trusted people",
      trustedText: "Plan how to organize contacts chosen by you.",

      safetyEyebrow: "YOUR SAFETY MATTERS",
      safetyTitle: "Information to help you make safer choices.",
      safetyText: "If you are in immediate danger, seek a safe place and
contact emergency services when you can do so safely.",
      safetyButton: "Emergency guidance",

      footerDescription: "Information, care and guidance for women. An
initiative that believes in the power of knowledge.",
      footerExplore: "Explore",
      footerHelp: "Find support",
      footerProject: "The project",
      projectLink: "About the project",
      collaboratorsLink: "Project contributors",
      tutorialLink: "Discreet mode tutorial",
      copyright: "An academic information and guidance project.",
      footerDisclaimer: "LIA is an informational platform and does not
replace professional care or emergency services.",
      backTop: "Back to top =E2=86=91",

      menuOpen: "Open menu",
      menuClose: "Close menu",
      accessOpen: "Open accessibility",
      accessClose: "Close accessibility",
      increaseFont: "Increase font",
      decreaseFont: "Decrease font",
      selectLanguage: "Select language",
      closeButton: "Close"
    },

    es: {
      skip: "Saltar al contenido",
      navHome: "Inicio",
      navAbout: "Sobre LIA",
      navHistory: "Nuestra historia",
      navViolence: "Violencias",
      navResources: "Recursos",
      navNews: "Noticias",
      navAccount: "Cuenta",
      languageLabel: "Idioma",

      accessEyebrow: "PERSONALIZA TU EXPERIENCIA",
      accessTitle: "Accesibilidad",
      fontSize: "Tama=C3=B1o del texto",
      reset: "Predeterminado",
      theme: "Tema visual",
      lightTheme: "Claro",
      darkTheme: "Oscuro",
      contrast: "Alto contraste",
      readAloud: "Lectura en voz alta",
      accessNote: "Puedes cambiar los ajustes visuales en cualquier
momento.",

      heroEyebrow: "NO EST=C3=81S SOLA",
      heroTitle: 'LIA es m=C3=A1s que un sitio web, es una <span>red de
apoyo.</span>',
      heroDescription: "Un espacio de informaci=C3=B3n, acogida y orientaci=
=C3=B3n
para mujeres que necesitan ser escuchadas, comprender sus derechos y
encontrar caminos para vivir con m=C3=A1s seguridad.",
      heroHelp: "Necesito apoyo",
      heroKnow: "Conoce LIA",
      heroNote: "Un espacio de informaci=C3=B3n, respeto y acogida.",
      heroQuote: "=C2=A1Tienes derecho a ser feliz!",

      resourceKicker: "UN PASO A LA VEZ",
      resourceInfoTitle: "Informaci=C3=B3n",
      resourceInfoText: "Conoce los tipos de violencia y reconoce las
se=C3=B1ales.",
      resourceSafetyTitle: "Seguridad",
      resourceSafetyText: "Encuentra orientaci=C3=B3n para planificar tu
seguridad.",
      resourceSupportTitle: "Acogida",
      resourceSupportText: "Encuentra maneras de buscar apoyo.",
      resourceToolsTitle: "Recursos",
      resourceToolsText: "Conoce las herramientas de la plataforma.",

      aboutEyebrow: "SOBRE LIA",
      aboutTitle: "Una compa=C3=B1=C3=ADa virtual y un espacio de orientaci=
=C3=B3n.",
      aboutText: "LIA es un proyecto que re=C3=BAne informaci=C3=B3n, acogi=
da y
caminos para que las mujeres conozcan sus derechos e identifiquen recursos
de apoyo. Su objetivo es facilitar el acceso a informaci=C3=B3n importante =
en un
entorno organizado y cuidadoso.",
      aboutPoint1: "Informaci=C3=B3n accesible y organizada",
      aboutPoint2: "Orientaci=C3=B3n respetuosa y acogedora",
      aboutPoint3: "Informaci=C3=B3n sobre recursos de seguridad",
      aboutPoint4: "Caminos para encontrar servicios de apoyo",
      aboutLink: "Descubre la historia de LIA",
      phoneMessage: "Mereces ser escuchada.",
      phoneInfo: "Informaci=C3=B3n accesible",
      phoneGuidance: "Orientaci=C3=B3n acogedora",
      phoneSafety: "Recursos de seguridad",

      storyEyebrow: "NUESTRA HISTORIA",
      storyTitle: "De una idea naci=C3=B3 una misi=C3=B3n.",
      storyText: "LIA naci=C3=B3 con el prop=C3=B3sito de acercar a las muj=
eres a la
informaci=C3=B3n, la acogida y las v=C3=ADas de apoyo. Este proyecto busca =
mostrar
c=C3=B3mo utilizar la tecnolog=C3=ADa responsablemente para facilitar el ac=
ceso a
informaci=C3=B3n importante.",
      storyButton: "Conoce la historia de LIA",

      violenceEyebrow: "LA INFORMACI=C3=93N ES UN DERECHO",
      violenceTitle: "Toda forma de violencia debe ser reconocida.",
      violenceDescription: "Reconocer las se=C3=B1ales puede ayudar a compr=
ender
una situaci=C3=B3n y buscar orientaci=C3=B3n. La responsabilidad de la viol=
encia
nunca es de la v=C3=ADctima.",
      physicalTitle: "Violencia f=C3=ADsica",
      physicalText: "Acciones que perjudican la integridad o la salud
corporal.",
      psychTitle: "Violencia psicol=C3=B3gica",
      psychText: "Amenazas, humillaciones, control y acciones que causan
da=C3=B1o emocional.",
      sexualTitle: "Violencia sexual",
      sexualText: "Actos o situaciones que vulneran la libertad sexual.",
      propertyTitle: "Violencia patrimonial",
      propertyText: "Control, retenci=C3=B3n o destrucci=C3=B3n de bienes, =
documentos
y recursos.",
      moralTitle: "Violencia moral",
      moralText: "Conductas como calumnia, difamaci=C3=B3n e injuria.",
      digitalTitle: "Violencia digital",
      digitalText: "Abusos y amenazas realizados mediante recursos
digitales.",
      vicariousTitle: "Violencia vicaria",
      vicariousText: "Violencia contra personas cercanas para causar
sufrimiento a la mujer.",
      cycleTitle: "Ciclo de la violencia",
      cycleText: "Comprende patrones que pueden aparecer en relaciones
abusivas.",
      learnMore: "Saber m=C3=A1s",

      supportEyebrow: "MERECES SER ESCUCHADA",
      supportTitle: "No tienes que pasar por esto sola.",
      supportText: "Si necesitas orientaci=C3=B3n, existen servicios y pers=
onas
que pueden ayudar. Elige el camino adecuado para tu situaci=C3=B3n, respeta=
ndo
tu tiempo y tu seguridad.",
      supportButton: "Conoce las opciones de apoyo",
      helplineTitle: "Llama al 180",
      helplineText: "Centro de Atenci=C3=B3n a la Mujer en Brasil",
      psychSupportTitle: "Apoyo psicol=C3=B3gico",
      psychSupportText: "Informaci=C3=B3n para encontrar apoyo",
      legalTitle: "Orientaci=C3=B3n jur=C3=ADdica",
      legalText: "Conoce las v=C3=ADas y los servicios de orientaci=C3=B3n"=
,
      socialTitle: "Servicios sociales",
      socialText: "Encuentra informaci=C3=B3n sobre atenci=C3=B3n",

      toolsEyebrow: "RECURSOS DE LA PLATAFORMA",
      toolsTitle: "Informaci=C3=B3n y herramientas en un solo lugar.",
      toolsDescription: "Conoce los recursos previstos para organizar
informaci=C3=B3n y acceder a orientaci=C3=B3n =C3=BAtil.",
      discreetTitle: "Modo discreto",
      discreetText: "Conoce la propuesta de una interfaz con apariencia de
agenda.",
      diaryTitle: "Diario personal",
      diaryText: "Conoce la propuesta para organizar notas personales.",
      trustedTitle: "Personas de confianza",
      trustedText: "Planifica c=C3=B3mo organizar los contactos que t=C3=BA=
 elijas.",

      safetyEyebrow: "TU SEGURIDAD IMPORTA",
      safetyTitle: "Informaci=C3=B3n para tomar decisiones m=C3=A1s seguras=
.",
      safetyText: "Si existe peligro inmediato, busca un lugar seguro y
contacta con los servicios de emergencia cuando puedas hacerlo con
seguridad.",
      safetyButton: "Orientaci=C3=B3n para emergencias",

      footerDescription: "Informaci=C3=B3n, acogida y orientaci=C3=B3n para=
 mujeres.
Una iniciativa que cree en el poder del conocimiento.",
      footerExplore: "Explora",
      footerHelp: "Encuentra apoyo",
      footerProject: "El proyecto",
      projectLink: "Sobre el proyecto",
      collaboratorsLink: "Colaboradores",
      tutorialLink: "Tutorial del modo discreto",
      copyright: "Proyecto acad=C3=A9mico de informaci=C3=B3n y orientaci=
=C3=B3n.",
      footerDisclaimer: "LIA es una plataforma informativa y no sustituye
la atenci=C3=B3n profesional ni los servicios de emergencia.",
      backTop: "Volver al inicio =E2=86=91",

      menuOpen: "Abrir men=C3=BA",
      menuClose: "Cerrar men=C3=BA",
      accessOpen: "Abrir accesibilidad",
      accessClose: "Cerrar accesibilidad",
      increaseFont: "Aumentar fuente",
      decreaseFont: "Disminuir fuente",
      selectLanguage: "Seleccionar idioma",
      closeButton: "Cerrar"
    }
  };

  function readPreference(key, fallback) {
    try {
      return localStorage.getItem(key) ?? fallback;
    } catch {
      return fallback;
    }
  }

  function savePreference(key, value) {
    try {
      localStorage.setItem(key, value);
    } catch {
      // O site continua funcionando sem armazenamento local.
    }
  }

  let currentLanguage =3D readPreference("lia-language", "pt");
  if (!translations[currentLanguage]) currentLanguage =3D "pt";

  let fontSize =3D Number(readPreference("lia-font-size", "16"));
  if (!Number.isFinite(fontSize)) fontSize =3D 16;
  fontSize =3D Math.min(20, Math.max(14, fontSize));

  let toastTimeout;

  function showToast(message) {
    if (!toast) return;

    toast.textContent =3D message;
    toast.classList.add("is-visible");

    clearTimeout(toastTimeout);
    toastTimeout =3D setTimeout(() =3D> {
      toast.classList.remove("is-visible");
    }, 3000);
  }

  function applyLanguage(language) {
    if (!translations[language]) language =3D "pt";

    currentLanguage =3D language;
    const dictionary =3D translations[language];

    $$("[data-i18n]").forEach((element) =3D> {
      const key =3D element.dataset.i18n;

      if (Object.prototype.hasOwnProperty.call(dictionary, key)) {
        // Conte=C3=BAdo HTML permitido apenas nas tradu=C3=A7=C3=B5es escr=
itas no c=C3=B3digo.
        element.innerHTML =3D dictionary[key];
      }
    });

    // Traduz atributos quando o HTML tiver data-i18n-aria-label.
    $$("[data-i18n-aria-label]").forEach((element) =3D> {
      const key =3D element.dataset.i18nAriaLabel;
      if (dictionary[key]) {
        element.setAttribute("aria-label", dictionary[key]);
      }
    });

    // Traduz dicas de preenchimento quando o HTML tiver
data-i18n-placeholder.
    $$("[data-i18n-placeholder]").forEach((element) =3D> {
      const key =3D element.dataset.i18nPlaceholder;
      if (dictionary[key]) {
        element.setAttribute("placeholder", dictionary[key]);
      }
    });

    document.documentElement.lang =3D
      language =3D=3D=3D "pt" ? "pt-BR" : language =3D=3D=3D "en" ? "en" : =
"es";

    if (languageSelect) languageSelect.value =3D language;

    if (menuToggle) {
      menuToggle.setAttribute(
        "aria-label",
        mainNav?.classList.contains("is-open")
          ? dictionary.menuClose
          : dictionary.menuOpen
      );
    }

    if (accessibilityToggle) {
      accessibilityToggle.setAttribute("aria-label", dictionary.accessOpen)=
;
    }

    if (accessibilityClose) {
      accessibilityClose.setAttribute("aria-label", dictionary.closeButton)=
;
    }

    $("#fontIncrease")?.setAttribute("aria-label", dictionary.increaseFont)=
;
    $("#fontDecrease")?.setAttribute("aria-label", dictionary.decreaseFont)=
;

    languageSelect?.setAttribute("aria-label", dictionary.selectLanguage);

    savePreference("lia-language", language);
    updateSpeechLanguage();
  }

  function applyTheme(theme) {
    const selectedTheme =3D theme =3D=3D=3D "dark" ? "dark" : "light";

    document.body.dataset.theme =3D selectedTheme;
    document.documentElement.dataset.theme =3D selectedTheme;

    if (themeSelect) themeSelect.value =3D selectedTheme;

    savePreference("lia-theme", selectedTheme);
  }

  function applyFontSize(size) {
    fontSize =3D Math.min(20, Math.max(14, size));

    document.documentElement.style.setProperty(
      "--base-font",
      `${fontSize}px`
    );

    savePreference("lia-font-size", String(fontSize));
  }

  function applyContrast(enabled) {
    document.body.classList.toggle("high-contrast", enabled);
    document.documentElement.classList.toggle("high-contrast", enabled);

    if (contrastToggle) contrastToggle.checked =3D enabled;

    savePreference("lia-contrast", enabled ? "on" : "off");
  }

  function closeMenu() {
    if (!mainNav || !menuToggle) return;

    mainNav.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute(
      "aria-label",
      translations[currentLanguage].menuOpen
    );
  }

  function closeAccessibilityPanel() {
    if (!accessibilityPanel || !accessibilityToggle) return;

    accessibilityPanel.hidden =3D true;
    accessibilityToggle.setAttribute("aria-expanded", "false");
  }

  function updateSpeechLanguage() {
    const voiceLanguages =3D {
      pt: "pt-BR",
      en: "en-US",
      es: "es-ES"
    };

    document.documentElement.dataset.speechLanguage =3D
      voiceLanguages[currentLanguage] || "pt-BR";

    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    }
  }

  function speakPage() {
    if (
      !("speechSynthesis" in window) ||
      !("SpeechSynthesisUtterance" in window)
    ) {
      const messages =3D {
        pt: "Este navegador n=C3=A3o oferece suporte =C3=A0 leitura em voz =
alta.",
        en: "Speech reading is not supported in this browser.",
        es: "Este navegador no admite la lectura en voz alta."
      };

      showToast(messages[currentLanguage]);

      if (speechToggle) speechToggle.checked =3D false;
      return;
    }

    window.speechSynthesis.cancel();

    const content =3D $("#conteudo");
    if (!content) return;

    const text =3D content.innerText.trim();
    if (!text) return;

    const utterance =3D new SpeechSynthesisUtterance(text);

    utterance.lang =3D
      document.documentElement.dataset.speechLanguage || "pt-BR";
    utterance.rate =3D 0.92;

    utterance.onend =3D () =3D> {
      if (speechToggle) speechToggle.checked =3D false;
    };

    utterance.onerror =3D () =3D> {
      if (speechToggle) speechToggle.checked =3D false;
    };

    window.speechSynthesis.speak(utterance);
  }

  // Inicializa as prefer=C3=AAncias salvas.
  applyLanguage(currentLanguage);
  applyFontSize(fontSize);
  applyTheme(readPreference("lia-theme", "light"));
  applyContrast(readPreference("lia-contrast", "off") =3D=3D=3D "on");

  if ($("#currentYear")) {
    $("#currentYear").textContent =3D new Date().getFullYear();
  }

  // Menu para celular.
  menuToggle?.addEventListener("click", () =3D> {
    if (!mainNav) return;

    const isOpen =3D mainNav.classList.toggle("is-open");

    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute(
      "aria-label",
      isOpen
        ? translations[currentLanguage].menuClose
        : translations[currentLanguage].menuOpen
    );
  });

  $$("#mainNav a").forEach((link) =3D> {
    link.addEventListener("click", closeMenu);
  });

  // Fecha os pain=C3=A9is com Escape.
  document.addEventListener("keydown", (event) =3D> {
    if (event.key =3D=3D=3D "Escape") {
      closeMenu();
      closeAccessibilityPanel();
    }
  });

  // Painel de acessibilidade.
  accessibilityToggle?.addEventListener("click", () =3D> {
    if (!accessibilityPanel) return;

    const willOpen =3D accessibilityPanel.hidden;
    accessibilityPanel.hidden =3D !willOpen;

    accessibilityToggle.setAttribute("aria-expanded", String(willOpen));

    if (willOpen) accessibilityClose?.focus();
  });

  accessibilityClose?.addEventListener("click", () =3D> {
    closeAccessibilityPanel();
    accessibilityToggle?.focus();
  });

  document.addEventListener("click", (event) =3D> {
    if (
      accessibilityPanel &&
      !accessibilityPanel.hidden &&
      !accessibilityPanel.contains(event.target) &&
      accessibilityToggle &&
      !accessibilityToggle.contains(event.target)
    ) {
      closeAccessibilityPanel();
    }
  });

  // Troca de idioma.
  languageSelect?.addEventListener("change", () =3D> {
    applyLanguage(languageSelect.value);
  });

  // Tema claro ou escuro.
  themeSelect?.addEventListener("change", () =3D> {
    applyTheme(themeSelect.value);
  });

  // Tamanho do texto.
  $("#fontIncrease")?.addEventListener("click", () =3D> {
    applyFontSize(fontSize + 1);
  });

  $("#fontDecrease")?.addEventListener("click", () =3D> {
    applyFontSize(fontSize - 1);
  });

  $("#fontReset")?.addEventListener("click", () =3D> {
    applyFontSize(16);
  });

  // Alto contraste.
  contrastToggle?.addEventListener("change", () =3D> {
    applyContrast(contrastToggle.checked);
  });

  // Leitura em voz alta.
  speechToggle?.addEventListener("change", () =3D> {
    if (speechToggle.checked) {
      speakPage();
    } else if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    }
  });

  // Interrompe a leitura ao sair da p=C3=A1gina.
  window.addEventListener("pagehide", () =3D> {
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    }
  });
});

/* =3D=3D=3D=3D=3D=3D=3D=3D=3D=3D=3D=3D=3D=3D=3D=3D=3D=3D=3D=3D=3D=3D=3D=3D=
=3D=3D=3D=3D=3D=3D=3D=3D=3D=3D=3D=3D=3D
   LIA =E2=80=94 BOAS-VINDAS E PRIMEIRO ACESSO
   =3D=3D=3D=3D=3D=3D=3D=3D=3D=3D=3D=3D=3D=3D=3D=3D=3D=3D=3D=3D=3D=3D=3D=3D=
=3D=3D=3D=3D=3D=3D=3D=3D=3D=3D=3D=3D=3D */

document.addEventListener("DOMContentLoaded", function () {
  const screen =3D document.getElementById("welcomeScreen");
  const continueButton =3D document.getElementById("welcomeContinue");
  const phrase =3D document.getElementById("welcomePhrase");

  // S=C3=B3 funciona na p=C3=A1gina que cont=C3=A9m a tela de boas-vindas.
  if (!screen || !continueButton) return;

  const accountCreated =3D localStorage.getItem("lia-account-created");
  const dismissedThisVisit =3D sessionStorage.getItem("lia-welcome-dismisse=
d"
);

  // Depois do cadastro, n=C3=A3o mostra mais a tela inicial.
  if (accountCreated =3D=3D=3D "true" || dismissedThisVisit =3D=3D=3D "true=
") {
    screen.hidden =3D true;
    return;
  }

  // Frases acolhedoras que mudam a cada visita.
  const phrases =3D [
    "Voc=C3=AA n=C3=A3o precisa ter todas as respostas hoje.",
    "Sua voz importa. Seus sentimentos importam.",
    "Voc=C3=AA merece respeito, seguran=C3=A7a e tranquilidade.",
    "Pedir ajuda n=C3=A3o =C3=A9 fraqueza. Voc=C3=AA merece acolhimento.",
    "Um pequeno passo tamb=C3=A9m =C3=A9 um come=C3=A7o.",
    "Voc=C3=AA merece ser tratada com carinho e respeito."
  ];

  if (phrase) {
    const index =3D Math.floor(Math.random() * phrases.length);
    phrase.textContent =3D phrases[index];
  }

  screen.hidden =3D false;

  // Permite conhecer o site sem criar uma conta.
  // A tela pode aparecer novamente em uma pr=C3=B3xima visita.
  continueButton.addEventListener("click", function () {
    screen.hidden =3D true;
    sessionStorage.setItem("lia-welcome-dismissed", "true");
  });
});

--00000000000009d134065f146864
Content-Type: text/html; charset="UTF-8"
Content-Transfer-Encoding: quoted-printable

<div dir=3D"ltr"><div style=3D"color:rgb(187,190,191);background-color:rgb(=
18,19,20);font-family:Consolas,&quot;Courier New&quot;,monospace;font-size:=
14px;line-height:19px;white-space:pre"><br><div><span style=3D"color:rgb(16=
5,214,255)">&quot;use strict&quot;</span>;</div><br><div><span style=3D"col=
or:rgb(201,209,217)">document</span>.<span style=3D"color:rgb(210,168,255)"=
>addEventListener</span>(<span style=3D"color:rgb(165,214,255)">&quot;DOMCo=
ntentLoaded&quot;</span>, () <span style=3D"color:rgb(255,123,114)">=3D&gt;=
</span> <span style=3D"color:rgb(201,209,217)">{</span></div><div><span sty=
le=3D"color:rgb(201,209,217)">=C2=A0 </span><span style=3D"color:rgb(255,12=
3,114)">const</span><span style=3D"color:rgb(201,209,217)"> </span><span st=
yle=3D"color:rgb(210,168,255)">$</span><span style=3D"color:rgb(201,209,217=
)"> </span><span style=3D"color:rgb(212,212,212)">=3D</span><span style=3D"=
color:rgb(201,209,217)"> (</span><span style=3D"color:rgb(255,166,87)">sele=
ctor</span><span style=3D"color:rgb(201,209,217)">) </span><span style=3D"c=
olor:rgb(255,123,114)">=3D&gt;</span><span style=3D"color:rgb(201,209,217)"=
> document.</span><span style=3D"color:rgb(210,168,255)">querySelector</spa=
n><span style=3D"color:rgb(201,209,217)">(selector);</span></div><div><span=
 style=3D"color:rgb(201,209,217)">=C2=A0 </span><span style=3D"color:rgb(25=
5,123,114)">const</span><span style=3D"color:rgb(201,209,217)"> </span><spa=
n style=3D"color:rgb(210,168,255)">$$</span><span style=3D"color:rgb(201,20=
9,217)"> </span><span style=3D"color:rgb(212,212,212)">=3D</span><span styl=
e=3D"color:rgb(201,209,217)"> (</span><span style=3D"color:rgb(255,166,87)"=
>selector</span><span style=3D"color:rgb(201,209,217)">) </span><span style=
=3D"color:rgb(255,123,114)">=3D&gt;</span><span style=3D"color:rgb(201,209,=
217)"> document.</span><span style=3D"color:rgb(210,168,255)">querySelector=
All</span><span style=3D"color:rgb(201,209,217)">(selector);</span></div><b=
r><div><span style=3D"color:rgb(201,209,217)">=C2=A0 </span><span style=3D"=
color:rgb(255,123,114)">const</span><span style=3D"color:rgb(201,209,217)">=
 </span><span style=3D"color:rgb(121,192,255)">menuToggle</span><span style=
=3D"color:rgb(201,209,217)"> </span><span style=3D"color:rgb(212,212,212)">=
=3D</span><span style=3D"color:rgb(201,209,217)"> </span><span style=3D"col=
or:rgb(210,168,255)">$</span><span style=3D"color:rgb(201,209,217)">(</span=
><span style=3D"color:rgb(165,214,255)">&quot;#menuToggle&quot;</span><span=
 style=3D"color:rgb(201,209,217)">);</span></div><div><span style=3D"color:=
rgb(201,209,217)">=C2=A0 </span><span style=3D"color:rgb(255,123,114)">cons=
t</span><span style=3D"color:rgb(201,209,217)"> </span><span style=3D"color=
:rgb(121,192,255)">mainNav</span><span style=3D"color:rgb(201,209,217)"> </=
span><span style=3D"color:rgb(212,212,212)">=3D</span><span style=3D"color:=
rgb(201,209,217)"> </span><span style=3D"color:rgb(210,168,255)">$</span><s=
pan style=3D"color:rgb(201,209,217)">(</span><span style=3D"color:rgb(165,2=
14,255)">&quot;#mainNav&quot;</span><span style=3D"color:rgb(201,209,217)">=
);</span></div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 </span><s=
pan style=3D"color:rgb(255,123,114)">const</span><span style=3D"color:rgb(2=
01,209,217)"> </span><span style=3D"color:rgb(121,192,255)">accessibilityTo=
ggle</span><span style=3D"color:rgb(201,209,217)"> </span><span style=3D"co=
lor:rgb(212,212,212)">=3D</span><span style=3D"color:rgb(201,209,217)"> </s=
pan><span style=3D"color:rgb(210,168,255)">$</span><span style=3D"color:rgb=
(201,209,217)">(</span><span style=3D"color:rgb(165,214,255)">&quot;#access=
ibilityToggle&quot;</span><span style=3D"color:rgb(201,209,217)">);</span><=
/div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 </span><span style=
=3D"color:rgb(255,123,114)">const</span><span style=3D"color:rgb(201,209,21=
7)"> </span><span style=3D"color:rgb(121,192,255)">accessibilityPanel</span=
><span style=3D"color:rgb(201,209,217)"> </span><span style=3D"color:rgb(21=
2,212,212)">=3D</span><span style=3D"color:rgb(201,209,217)"> </span><span =
style=3D"color:rgb(210,168,255)">$</span><span style=3D"color:rgb(201,209,2=
17)">(</span><span style=3D"color:rgb(165,214,255)">&quot;#accessibilityPan=
el&quot;</span><span style=3D"color:rgb(201,209,217)">);</span></div><div><=
span style=3D"color:rgb(201,209,217)">=C2=A0 </span><span style=3D"color:rg=
b(255,123,114)">const</span><span style=3D"color:rgb(201,209,217)"> </span>=
<span style=3D"color:rgb(121,192,255)">accessibilityClose</span><span style=
=3D"color:rgb(201,209,217)"> </span><span style=3D"color:rgb(212,212,212)">=
=3D</span><span style=3D"color:rgb(201,209,217)"> </span><span style=3D"col=
or:rgb(210,168,255)">$</span><span style=3D"color:rgb(201,209,217)">(</span=
><span style=3D"color:rgb(165,214,255)">&quot;#accessibilityClose&quot;</sp=
an><span style=3D"color:rgb(201,209,217)">);</span></div><div><span style=
=3D"color:rgb(201,209,217)">=C2=A0 </span><span style=3D"color:rgb(255,123,=
114)">const</span><span style=3D"color:rgb(201,209,217)"> </span><span styl=
e=3D"color:rgb(121,192,255)">languageSelect</span><span style=3D"color:rgb(=
201,209,217)"> </span><span style=3D"color:rgb(212,212,212)">=3D</span><spa=
n style=3D"color:rgb(201,209,217)"> </span><span style=3D"color:rgb(210,168=
,255)">$</span><span style=3D"color:rgb(201,209,217)">(</span><span style=
=3D"color:rgb(165,214,255)">&quot;#languageSelect&quot;</span><span style=
=3D"color:rgb(201,209,217)">);</span></div><div><span style=3D"color:rgb(20=
1,209,217)">=C2=A0 </span><span style=3D"color:rgb(255,123,114)">const</spa=
n><span style=3D"color:rgb(201,209,217)"> </span><span style=3D"color:rgb(1=
21,192,255)">themeSelect</span><span style=3D"color:rgb(201,209,217)"> </sp=
an><span style=3D"color:rgb(212,212,212)">=3D</span><span style=3D"color:rg=
b(201,209,217)"> </span><span style=3D"color:rgb(210,168,255)">$</span><spa=
n style=3D"color:rgb(201,209,217)">(</span><span style=3D"color:rgb(165,214=
,255)">&quot;#themeSelect&quot;</span><span style=3D"color:rgb(201,209,217)=
">);</span></div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 </span>=
<span style=3D"color:rgb(255,123,114)">const</span><span style=3D"color:rgb=
(201,209,217)"> </span><span style=3D"color:rgb(121,192,255)">contrastToggl=
e</span><span style=3D"color:rgb(201,209,217)"> </span><span style=3D"color=
:rgb(212,212,212)">=3D</span><span style=3D"color:rgb(201,209,217)"> </span=
><span style=3D"color:rgb(210,168,255)">$</span><span style=3D"color:rgb(20=
1,209,217)">(</span><span style=3D"color:rgb(165,214,255)">&quot;#contrastT=
oggle&quot;</span><span style=3D"color:rgb(201,209,217)">);</span></div><di=
v><span style=3D"color:rgb(201,209,217)">=C2=A0 </span><span style=3D"color=
:rgb(255,123,114)">const</span><span style=3D"color:rgb(201,209,217)"> </sp=
an><span style=3D"color:rgb(121,192,255)">speechToggle</span><span style=3D=
"color:rgb(201,209,217)"> </span><span style=3D"color:rgb(212,212,212)">=3D=
</span><span style=3D"color:rgb(201,209,217)"> </span><span style=3D"color:=
rgb(210,168,255)">$</span><span style=3D"color:rgb(201,209,217)">(</span><s=
pan style=3D"color:rgb(165,214,255)">&quot;#speechToggle&quot;</span><span =
style=3D"color:rgb(201,209,217)">);</span></div><div><span style=3D"color:r=
gb(201,209,217)">=C2=A0 </span><span style=3D"color:rgb(255,123,114)">const=
</span><span style=3D"color:rgb(201,209,217)"> </span><span style=3D"color:=
rgb(121,192,255)">toast</span><span style=3D"color:rgb(201,209,217)"> </spa=
n><span style=3D"color:rgb(212,212,212)">=3D</span><span style=3D"color:rgb=
(201,209,217)"> </span><span style=3D"color:rgb(210,168,255)">$</span><span=
 style=3D"color:rgb(201,209,217)">(</span><span style=3D"color:rgb(165,214,=
255)">&quot;#siteToast&quot;</span><span style=3D"color:rgb(201,209,217)">)=
;</span></div><br><div><span style=3D"color:rgb(201,209,217)">=C2=A0 </span=
><span style=3D"color:rgb(139,148,158)">// Tradu=C3=A7=C3=B5es da p=C3=A1gi=
na inicial.</span></div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =
</span><span style=3D"color:rgb(255,123,114)">const</span><span style=3D"co=
lor:rgb(201,209,217)"> </span><span style=3D"color:rgb(121,192,255)">transl=
ations</span><span style=3D"color:rgb(201,209,217)"> </span><span style=3D"=
color:rgb(212,212,212)">=3D</span><span style=3D"color:rgb(201,209,217)"> {=
</span></div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 </sp=
an><span style=3D"color:rgb(156,220,254)">pt:</span><span style=3D"color:rg=
b(201,209,217)"> {</span></div><div><span style=3D"color:rgb(201,209,217)">=
=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:rgb(156,220,254)">skip:</s=
pan><span style=3D"color:rgb(201,209,217)"> </span><span style=3D"color:rgb=
(165,214,255)">&quot;Pular para o conte=C3=BAdo&quot;</span><span style=3D"=
color:rgb(201,209,217)">,</span></div><div><span style=3D"color:rgb(201,209=
,217)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:rgb(156,220,254)">n=
avHome:</span><span style=3D"color:rgb(201,209,217)"> </span><span style=3D=
"color:rgb(165,214,255)">&quot;In=C3=ADcio&quot;</span><span style=3D"color=
:rgb(201,209,217)">,</span></div><div><span style=3D"color:rgb(201,209,217)=
">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:rgb(156,220,254)">navAbo=
ut:</span><span style=3D"color:rgb(201,209,217)"> </span><span style=3D"col=
or:rgb(165,214,255)">&quot;Sobre a LIA&quot;</span><span style=3D"color:rgb=
(201,209,217)">,</span></div><div><span style=3D"color:rgb(201,209,217)">=
=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:rgb(156,220,254)">navHisto=
ry:</span><span style=3D"color:rgb(201,209,217)"> </span><span style=3D"col=
or:rgb(165,214,255)">&quot;Nossa hist=C3=B3ria&quot;</span><span style=3D"c=
olor:rgb(201,209,217)">,</span></div><div><span style=3D"color:rgb(201,209,=
217)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:rgb(156,220,254)">na=
vViolence:</span><span style=3D"color:rgb(201,209,217)"> </span><span style=
=3D"color:rgb(165,214,255)">&quot;Viol=C3=AAncias&quot;</span><span style=
=3D"color:rgb(201,209,217)">,</span></div><div><span style=3D"color:rgb(201=
,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:rgb(156,220,254=
)">navResources:</span><span style=3D"color:rgb(201,209,217)"> </span><span=
 style=3D"color:rgb(165,214,255)">&quot;Recursos&quot;</span><span style=3D=
"color:rgb(201,209,217)">,</span></div><div><span style=3D"color:rgb(201,20=
9,217)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:rgb(156,220,254)">=
navNews:</span><span style=3D"color:rgb(201,209,217)"> </span><span style=
=3D"color:rgb(165,214,255)">&quot;Not=C3=ADcias&quot;</span><span style=3D"=
color:rgb(201,209,217)">,</span></div><div><span style=3D"color:rgb(201,209=
,217)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:rgb(156,220,254)">n=
avAccount:</span><span style=3D"color:rgb(201,209,217)"> </span><span style=
=3D"color:rgb(165,214,255)">&quot;Conta&quot;</span><span style=3D"color:rg=
b(201,209,217)">,</span></div><div><span style=3D"color:rgb(201,209,217)">=
=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:rgb(156,220,254)">language=
Label:</span><span style=3D"color:rgb(201,209,217)"> </span><span style=3D"=
color:rgb(165,214,255)">&quot;Idioma&quot;</span><span style=3D"color:rgb(2=
01,209,217)">,</span></div><br><div><span style=3D"color:rgb(201,209,217)">=
=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:rgb(156,220,254)">accessEy=
ebrow:</span><span style=3D"color:rgb(201,209,217)"> </span><span style=3D"=
color:rgb(165,214,255)">&quot;PERSONALIZE SUA EXPERI=C3=8ANCIA&quot;</span>=
<span style=3D"color:rgb(201,209,217)">,</span></div><div><span style=3D"co=
lor:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:rgb(=
156,220,254)">accessTitle:</span><span style=3D"color:rgb(201,209,217)"> </=
span><span style=3D"color:rgb(165,214,255)">&quot;Acessibilidade&quot;</spa=
n><span style=3D"color:rgb(201,209,217)">,</span></div><div><span style=3D"=
color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:rg=
b(156,220,254)">fontSize:</span><span style=3D"color:rgb(201,209,217)"> </s=
pan><span style=3D"color:rgb(165,214,255)">&quot;Tamanho do texto&quot;</sp=
an><span style=3D"color:rgb(201,209,217)">,</span></div><div><span style=3D=
"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:r=
gb(156,220,254)">reset:</span><span style=3D"color:rgb(201,209,217)"> </spa=
n><span style=3D"color:rgb(165,214,255)">&quot;Padr=C3=A3o&quot;</span><spa=
n style=3D"color:rgb(201,209,217)">,</span></div><div><span style=3D"color:=
rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:rgb(156,=
220,254)">theme:</span><span style=3D"color:rgb(201,209,217)"> </span><span=
 style=3D"color:rgb(165,214,255)">&quot;Tema visual&quot;</span><span style=
=3D"color:rgb(201,209,217)">,</span></div><div><span style=3D"color:rgb(201=
,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:rgb(156,220,254=
)">lightTheme:</span><span style=3D"color:rgb(201,209,217)"> </span><span s=
tyle=3D"color:rgb(165,214,255)">&quot;Claro&quot;</span><span style=3D"colo=
r:rgb(201,209,217)">,</span></div><div><span style=3D"color:rgb(201,209,217=
)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:rgb(156,220,254)">darkT=
heme:</span><span style=3D"color:rgb(201,209,217)"> </span><span style=3D"c=
olor:rgb(165,214,255)">&quot;Escuro&quot;</span><span style=3D"color:rgb(20=
1,209,217)">,</span></div><div><span style=3D"color:rgb(201,209,217)">=C2=
=A0 =C2=A0 =C2=A0 </span><span style=3D"color:rgb(156,220,254)">contrast:</=
span><span style=3D"color:rgb(201,209,217)"> </span><span style=3D"color:rg=
b(165,214,255)">&quot;Alto contraste&quot;</span><span style=3D"color:rgb(2=
01,209,217)">,</span></div><div><span style=3D"color:rgb(201,209,217)">=C2=
=A0 =C2=A0 =C2=A0 </span><span style=3D"color:rgb(156,220,254)">readAloud:<=
/span><span style=3D"color:rgb(201,209,217)"> </span><span style=3D"color:r=
gb(165,214,255)">&quot;Leitura em voz alta&quot;</span><span style=3D"color=
:rgb(201,209,217)">,</span></div><div><span style=3D"color:rgb(201,209,217)=
">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:rgb(156,220,254)">access=
Note:</span><span style=3D"color:rgb(201,209,217)"> </span><span style=3D"c=
olor:rgb(165,214,255)">&quot;Os ajustes visuais podem ser alterados a qualq=
uer momento.&quot;</span><span style=3D"color:rgb(201,209,217)">,</span></d=
iv><br><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </s=
pan><span style=3D"color:rgb(156,220,254)">heroEyebrow:</span><span style=
=3D"color:rgb(201,209,217)"> </span><span style=3D"color:rgb(165,214,255)">=
&quot;VOC=C3=8A N=C3=83O EST=C3=81 SOZINHA&quot;</span><span style=3D"color=
:rgb(201,209,217)">,</span></div><div><span style=3D"color:rgb(201,209,217)=
">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:rgb(156,220,254)">heroTi=
tle:</span><span style=3D"color:rgb(201,209,217)"> </span><span style=3D"co=
lor:rgb(165,214,255)">&#39;LIA =C3=A9 mais que um site, =C3=A9 uma &lt;span=
&gt;rede de apoio.&lt;/span&gt;&#39;</span><span style=3D"color:rgb(201,209=
,217)">,</span></div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=
=A0 =C2=A0 </span><span style=3D"color:rgb(156,220,254)">heroDescription:</=
span><span style=3D"color:rgb(201,209,217)"> </span><span style=3D"color:rg=
b(165,214,255)">&quot;Um espa=C3=A7o de informa=C3=A7=C3=A3o, acolhimento e=
 orienta=C3=A7=C3=A3o para mulheres que precisam ser ouvidas, compreender s=
eus direitos e encontrar caminhos para viver com mais seguran=C3=A7a.&quot;=
</span><span style=3D"color:rgb(201,209,217)">,</span></div><div><span styl=
e=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"col=
or:rgb(156,220,254)">heroHelp:</span><span style=3D"color:rgb(201,209,217)"=
> </span><span style=3D"color:rgb(165,214,255)">&quot;Preciso de apoio&quot=
;</span><span style=3D"color:rgb(201,209,217)">,</span></div><div><span sty=
le=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"co=
lor:rgb(156,220,254)">heroKnow:</span><span style=3D"color:rgb(201,209,217)=
"> </span><span style=3D"color:rgb(165,214,255)">&quot;Conhe=C3=A7a a LIA&q=
uot;</span><span style=3D"color:rgb(201,209,217)">,</span></div><div><span =
style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D=
"color:rgb(156,220,254)">heroNote:</span><span style=3D"color:rgb(201,209,2=
17)"> </span><span style=3D"color:rgb(165,214,255)">&quot;Um espa=C3=A7o de=
 informa=C3=A7=C3=A3o, respeito e acolhimento.&quot;</span><span style=3D"c=
olor:rgb(201,209,217)">,</span></div><div><span style=3D"color:rgb(201,209,=
217)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:rgb(156,220,254)">he=
roQuote:</span><span style=3D"color:rgb(201,209,217)"> </span><span style=
=3D"color:rgb(165,214,255)">&quot;Voc=C3=AA tem direito de ser feliz!&quot;=
</span><span style=3D"color:rgb(201,209,217)">,</span></div><br><div><span =
style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D=
"color:rgb(156,220,254)">resourceKicker:</span><span style=3D"color:rgb(201=
,209,217)"> </span><span style=3D"color:rgb(165,214,255)">&quot;UM CAMINHO =
DE CADA VEZ&quot;</span><span style=3D"color:rgb(201,209,217)">,</span></di=
v><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><=
span style=3D"color:rgb(156,220,254)">resourceInfoTitle:</span><span style=
=3D"color:rgb(201,209,217)"> </span><span style=3D"color:rgb(165,214,255)">=
&quot;Informa=C3=A7=C3=A3o&quot;</span><span style=3D"color:rgb(201,209,217=
)">,</span></div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =
=C2=A0 </span><span style=3D"color:rgb(156,220,254)">resourceInfoText:</spa=
n><span style=3D"color:rgb(201,209,217)"> </span><span style=3D"color:rgb(1=
65,214,255)">&quot;Entenda os tipos de viol=C3=AAncia e reconhe=C3=A7a sina=
is.&quot;</span><span style=3D"color:rgb(201,209,217)">,</span></div><div><=
span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span sty=
le=3D"color:rgb(156,220,254)">resourceSafetyTitle:</span><span style=3D"col=
or:rgb(201,209,217)"> </span><span style=3D"color:rgb(165,214,255)">&quot;S=
eguran=C3=A7a&quot;</span><span style=3D"color:rgb(201,209,217)">,</span></=
div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span=
><span style=3D"color:rgb(156,220,254)">resourceSafetyText:</span><span sty=
le=3D"color:rgb(201,209,217)"> </span><span style=3D"color:rgb(165,214,255)=
">&quot;Conhe=C3=A7a orienta=C3=A7=C3=B5es para planejar sua seguran=C3=A7a=
.&quot;</span><span style=3D"color:rgb(201,209,217)">,</span></div><div><sp=
an style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span style=
=3D"color:rgb(156,220,254)">resourceSupportTitle:</span><span style=3D"colo=
r:rgb(201,209,217)"> </span><span style=3D"color:rgb(165,214,255)">&quot;Ac=
olhimento&quot;</span><span style=3D"color:rgb(201,209,217)">,</span></div>=
<div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><sp=
an style=3D"color:rgb(156,220,254)">resourceSupportText:</span><span style=
=3D"color:rgb(201,209,217)"> </span><span style=3D"color:rgb(165,214,255)">=
&quot;Encontre caminhos para buscar apoio.&quot;</span><span style=3D"color=
:rgb(201,209,217)">,</span></div><div><span style=3D"color:rgb(201,209,217)=
">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:rgb(156,220,254)">resour=
ceToolsTitle:</span><span style=3D"color:rgb(201,209,217)"> </span><span st=
yle=3D"color:rgb(165,214,255)">&quot;Recursos&quot;</span><span style=3D"co=
lor:rgb(201,209,217)">,</span></div><div><span style=3D"color:rgb(201,209,2=
17)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:rgb(156,220,254)">res=
ourceToolsText:</span><span style=3D"color:rgb(201,209,217)"> </span><span =
style=3D"color:rgb(165,214,255)">&quot;Conhe=C3=A7a as ferramentas da plata=
forma.&quot;</span><span style=3D"color:rgb(201,209,217)">,</span></div><br=
><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><s=
pan style=3D"color:rgb(156,220,254)">aboutEyebrow:</span><span style=3D"col=
or:rgb(201,209,217)"> </span><span style=3D"color:rgb(165,214,255)">&quot;S=
OBRE A LIA&quot;</span><span style=3D"color:rgb(201,209,217)">,</span></div=
><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><s=
pan style=3D"color:rgb(156,220,254)">aboutTitle:</span><span style=3D"color=
:rgb(201,209,217)"> </span><span style=3D"color:rgb(165,214,255)">&quot;Uma=
 amiga virtual, um espa=C3=A7o de orienta=C3=A7=C3=A3o.&quot;</span><span s=
tyle=3D"color:rgb(201,209,217)">,</span></div><div><span style=3D"color:rgb=
(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:rgb(156,220=
,254)">aboutText:</span><span style=3D"color:rgb(201,209,217)"> </span><spa=
n style=3D"color:rgb(165,214,255)">&quot;A LIA =C3=A9 um projeto que re=C3=
=BAne informa=C3=A7=C3=A3o, acolhimento e caminhos para que mulheres possam=
 conhecer seus direitos e identificar recursos de apoio. A proposta =C3=A9 =
tornar informa=C3=A7=C3=B5es importantes mais acess=C3=ADveis, em um ambien=
te organizado e cuidadoso.&quot;</span><span style=3D"color:rgb(201,209,217=
)">,</span></div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =
=C2=A0 </span><span style=3D"color:rgb(156,220,254)">aboutPoint1:</span><sp=
an style=3D"color:rgb(201,209,217)"> </span><span style=3D"color:rgb(165,21=
4,255)">&quot;Informa=C3=A7=C3=A3o acess=C3=ADvel e organizada&quot;</span>=
<span style=3D"color:rgb(201,209,217)">,</span></div><div><span style=3D"co=
lor:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:rgb(=
156,220,254)">aboutPoint2:</span><span style=3D"color:rgb(201,209,217)"> </=
span><span style=3D"color:rgb(165,214,255)">&quot;Orienta=C3=A7=C3=A3o com =
respeito e acolhimento&quot;</span><span style=3D"color:rgb(201,209,217)">,=
</span></div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=
=A0 </span><span style=3D"color:rgb(156,220,254)">aboutPoint3:</span><span =
style=3D"color:rgb(201,209,217)"> </span><span style=3D"color:rgb(165,214,2=
55)">&quot;Informa=C3=A7=C3=B5es sobre recursos de seguran=C3=A7a&quot;</sp=
an><span style=3D"color:rgb(201,209,217)">,</span></div><div><span style=3D=
"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:r=
gb(156,220,254)">aboutPoint4:</span><span style=3D"color:rgb(201,209,217)">=
 </span><span style=3D"color:rgb(165,214,255)">&quot;Caminhos para conhecer=
 servi=C3=A7os de apoio&quot;</span><span style=3D"color:rgb(201,209,217)">=
,</span></div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=
=A0 </span><span style=3D"color:rgb(156,220,254)">aboutLink:</span><span st=
yle=3D"color:rgb(201,209,217)"> </span><span style=3D"color:rgb(165,214,255=
)">&quot;Descubra a hist=C3=B3ria da LIA&quot;</span><span style=3D"color:r=
gb(201,209,217)">,</span></div><div><span style=3D"color:rgb(201,209,217)">=
=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:rgb(156,220,254)">phoneMes=
sage:</span><span style=3D"color:rgb(201,209,217)"> </span><span style=3D"c=
olor:rgb(165,214,255)">&quot;Voc=C3=AA merece ser ouvida.&quot;</span><span=
 style=3D"color:rgb(201,209,217)">,</span></div><div><span style=3D"color:r=
gb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:rgb(156,2=
20,254)">phoneInfo:</span><span style=3D"color:rgb(201,209,217)"> </span><s=
pan style=3D"color:rgb(165,214,255)">&quot;Informa=C3=A7=C3=A3o acess=C3=AD=
vel&quot;</span><span style=3D"color:rgb(201,209,217)">,</span></div><div><=
span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span sty=
le=3D"color:rgb(156,220,254)">phoneGuidance:</span><span style=3D"color:rgb=
(201,209,217)"> </span><span style=3D"color:rgb(165,214,255)">&quot;Orienta=
=C3=A7=C3=A3o acolhedora&quot;</span><span style=3D"color:rgb(201,209,217)"=
>,</span></div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =
=C2=A0 </span><span style=3D"color:rgb(156,220,254)">phoneSafety:</span><sp=
an style=3D"color:rgb(201,209,217)"> </span><span style=3D"color:rgb(165,21=
4,255)">&quot;Recursos de seguran=C3=A7a&quot;</span><span style=3D"color:r=
gb(201,209,217)">,</span></div><br><div><span style=3D"color:rgb(201,209,21=
7)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:rgb(156,220,254)">stor=
yEyebrow:</span><span style=3D"color:rgb(201,209,217)"> </span><span style=
=3D"color:rgb(165,214,255)">&quot;NOSSA HIST=C3=93RIA&quot;</span><span sty=
le=3D"color:rgb(201,209,217)">,</span></div><div><span style=3D"color:rgb(2=
01,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:rgb(156,220,2=
54)">storyTitle:</span><span style=3D"color:rgb(201,209,217)"> </span><span=
 style=3D"color:rgb(165,214,255)">&quot;De uma ideia, nasceu uma miss=C3=A3=
o.&quot;</span><span style=3D"color:rgb(201,209,217)">,</span></div><div><s=
pan style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span styl=
e=3D"color:rgb(156,220,254)">storyText:</span><span style=3D"color:rgb(201,=
209,217)"> </span><span style=3D"color:rgb(165,214,255)">&quot;A LIA nasceu=
 com o prop=C3=B3sito de aproximar mulheres da informa=C3=A7=C3=A3o, do aco=
lhimento e dos caminhos de apoio. Este projeto busca mostrar como a tecnolo=
gia pode ser usada com responsabilidade para tornar conte=C3=BAdos importan=
tes mais acess=C3=ADveis.&quot;</span><span style=3D"color:rgb(201,209,217)=
">,</span></div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =
=C2=A0 </span><span style=3D"color:rgb(156,220,254)">storyButton:</span><sp=
an style=3D"color:rgb(201,209,217)"> </span><span style=3D"color:rgb(165,21=
4,255)">&quot;Conhe=C3=A7a a hist=C3=B3ria da LIA&quot;</span><span style=
=3D"color:rgb(201,209,217)">,</span></div><br><div><span style=3D"color:rgb=
(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:rgb(156,220=
,254)">violenceEyebrow:</span><span style=3D"color:rgb(201,209,217)"> </spa=
n><span style=3D"color:rgb(165,214,255)">&quot;INFORMA=C3=87=C3=83O =C3=89 =
UM DIREITO&quot;</span><span style=3D"color:rgb(201,209,217)">,</span></div=
><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><s=
pan style=3D"color:rgb(156,220,254)">violenceTitle:</span><span style=3D"co=
lor:rgb(201,209,217)"> </span><span style=3D"color:rgb(165,214,255)">&quot;=
Toda forma de viol=C3=AAncia precisa ser reconhecida.&quot;</span><span sty=
le=3D"color:rgb(201,209,217)">,</span></div><div><span style=3D"color:rgb(2=
01,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:rgb(156,220,2=
54)">violenceDescription:</span><span style=3D"color:rgb(201,209,217)"> </s=
pan><span style=3D"color:rgb(165,214,255)">&quot;Conhecer os sinais pode aj=
udar a compreender uma situa=C3=A7=C3=A3o e buscar orienta=C3=A7=C3=A3o. A =
responsabilidade pela viol=C3=AAncia nunca =C3=A9 da v=C3=ADtima.&quot;</sp=
an><span style=3D"color:rgb(201,209,217)">,</span></div><div><span style=3D=
"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:r=
gb(156,220,254)">physicalTitle:</span><span style=3D"color:rgb(201,209,217)=
"> </span><span style=3D"color:rgb(165,214,255)">&quot;Viol=C3=AAncia f=C3=
=ADsica&quot;</span><span style=3D"color:rgb(201,209,217)">,</span></div><d=
iv><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span=
 style=3D"color:rgb(156,220,254)">physicalText:</span><span style=3D"color:=
rgb(201,209,217)"> </span><span style=3D"color:rgb(165,214,255)">&quot;A=C3=
=A7=C3=B5es que prejudicam a integridade ou a sa=C3=BAde corporal.&quot;</s=
pan><span style=3D"color:rgb(201,209,217)">,</span></div><div><span style=
=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"colo=
r:rgb(156,220,254)">psychTitle:</span><span style=3D"color:rgb(201,209,217)=
"> </span><span style=3D"color:rgb(165,214,255)">&quot;Viol=C3=AAncia psico=
l=C3=B3gica&quot;</span><span style=3D"color:rgb(201,209,217)">,</span></di=
v><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><=
span style=3D"color:rgb(156,220,254)">psychText:</span><span style=3D"color=
:rgb(201,209,217)"> </span><span style=3D"color:rgb(165,214,255)">&quot;Ame=
a=C3=A7as, humilha=C3=A7=C3=B5es, controle e a=C3=A7=C3=B5es que causam dan=
o emocional.&quot;</span><span style=3D"color:rgb(201,209,217)">,</span></d=
iv><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span>=
<span style=3D"color:rgb(156,220,254)">sexualTitle:</span><span style=3D"co=
lor:rgb(201,209,217)"> </span><span style=3D"color:rgb(165,214,255)">&quot;=
Viol=C3=AAncia sexual&quot;</span><span style=3D"color:rgb(201,209,217)">,<=
/span></div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=
=A0 </span><span style=3D"color:rgb(156,220,254)">sexualText:</span><span s=
tyle=3D"color:rgb(201,209,217)"> </span><span style=3D"color:rgb(165,214,25=
5)">&quot;Atos ou situa=C3=A7=C3=B5es que violam a liberdade sexual.&quot;<=
/span><span style=3D"color:rgb(201,209,217)">,</span></div><div><span style=
=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"colo=
r:rgb(156,220,254)">propertyTitle:</span><span style=3D"color:rgb(201,209,2=
17)"> </span><span style=3D"color:rgb(165,214,255)">&quot;Viol=C3=AAncia pa=
trimonial&quot;</span><span style=3D"color:rgb(201,209,217)">,</span></div>=
<div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><sp=
an style=3D"color:rgb(156,220,254)">propertyText:</span><span style=3D"colo=
r:rgb(201,209,217)"> </span><span style=3D"color:rgb(165,214,255)">&quot;Co=
ntrole, reten=C3=A7=C3=A3o ou destrui=C3=A7=C3=A3o de bens, documentos e re=
cursos.&quot;</span><span style=3D"color:rgb(201,209,217)">,</span></div><d=
iv><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span=
 style=3D"color:rgb(156,220,254)">moralTitle:</span><span style=3D"color:rg=
b(201,209,217)"> </span><span style=3D"color:rgb(165,214,255)">&quot;Viol=
=C3=AAncia moral&quot;</span><span style=3D"color:rgb(201,209,217)">,</span=
></div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </s=
pan><span style=3D"color:rgb(156,220,254)">moralText:</span><span style=3D"=
color:rgb(201,209,217)"> </span><span style=3D"color:rgb(165,214,255)">&quo=
t;Condutas como cal=C3=BAnia, difama=C3=A7=C3=A3o e inj=C3=BAria.&quot;</sp=
an><span style=3D"color:rgb(201,209,217)">,</span></div><div><span style=3D=
"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:r=
gb(156,220,254)">digitalTitle:</span><span style=3D"color:rgb(201,209,217)"=
> </span><span style=3D"color:rgb(165,214,255)">&quot;Viol=C3=AAncia digita=
l&quot;</span><span style=3D"color:rgb(201,209,217)">,</span></div><div><sp=
an style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span style=
=3D"color:rgb(156,220,254)">digitalText:</span><span style=3D"color:rgb(201=
,209,217)"> </span><span style=3D"color:rgb(165,214,255)">&quot;Abusos e am=
ea=C3=A7as praticados com recursos digitais.&quot;</span><span style=3D"col=
or:rgb(201,209,217)">,</span></div><div><span style=3D"color:rgb(201,209,21=
7)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:rgb(156,220,254)">vica=
riousTitle:</span><span style=3D"color:rgb(201,209,217)"> </span><span styl=
e=3D"color:rgb(165,214,255)">&quot;Viol=C3=AAncia vic=C3=A1ria&quot;</span>=
<span style=3D"color:rgb(201,209,217)">,</span></div><div><span style=3D"co=
lor:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:rgb(=
156,220,254)">vicariousText:</span><span style=3D"color:rgb(201,209,217)"> =
</span><span style=3D"color:rgb(165,214,255)">&quot;Viol=C3=AAncia contra p=
essoas pr=C3=B3ximas para causar sofrimento =C3=A0 mulher.&quot;</span><spa=
n style=3D"color:rgb(201,209,217)">,</span></div><div><span style=3D"color:=
rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:rgb(156,=
220,254)">cycleTitle:</span><span style=3D"color:rgb(201,209,217)"> </span>=
<span style=3D"color:rgb(165,214,255)">&quot;Ciclo da viol=C3=AAncia&quot;<=
/span><span style=3D"color:rgb(201,209,217)">,</span></div><div><span style=
=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"colo=
r:rgb(156,220,254)">cycleText:</span><span style=3D"color:rgb(201,209,217)"=
> </span><span style=3D"color:rgb(165,214,255)">&quot;Entenda padr=C3=B5es =
que podem ocorrer em rela=C3=A7=C3=B5es abusivas.&quot;</span><span style=
=3D"color:rgb(201,209,217)">,</span></div><div><span style=3D"color:rgb(201=
,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:rgb(156,220,254=
)">learnMore:</span><span style=3D"color:rgb(201,209,217)"> </span><span st=
yle=3D"color:rgb(165,214,255)">&quot;Saiba mais&quot;</span><span style=3D"=
color:rgb(201,209,217)">,</span></div><br><div><span style=3D"color:rgb(201=
,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:rgb(156,220,254=
)">supportEyebrow:</span><span style=3D"color:rgb(201,209,217)"> </span><sp=
an style=3D"color:rgb(165,214,255)">&quot;VOC=C3=8A MERECE SER OUVIDA&quot;=
</span><span style=3D"color:rgb(201,209,217)">,</span></div><div><span styl=
e=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"col=
or:rgb(156,220,254)">supportTitle:</span><span style=3D"color:rgb(201,209,2=
17)"> </span><span style=3D"color:rgb(165,214,255)">&quot;Voc=C3=AA n=C3=A3=
o precisa passar por isso sozinha.&quot;</span><span style=3D"color:rgb(201=
,209,217)">,</span></div><div><span style=3D"color:rgb(201,209,217)">=C2=A0=
 =C2=A0 =C2=A0 </span><span style=3D"color:rgb(156,220,254)">supportText:</=
span><span style=3D"color:rgb(201,209,217)"> </span><span style=3D"color:rg=
b(165,214,255)">&quot;Se voc=C3=AA precisa de orienta=C3=A7=C3=A3o, existem=
 servi=C3=A7os e pessoas que podem ajudar. Escolha o caminho mais adequado =
=C3=A0 sua situa=C3=A7=C3=A3o, respeitando seu tempo e sua seguran=C3=A7a.&=
quot;</span><span style=3D"color:rgb(201,209,217)">,</span></div><div><span=
 style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span style=
=3D"color:rgb(156,220,254)">supportButton:</span><span style=3D"color:rgb(2=
01,209,217)"> </span><span style=3D"color:rgb(165,214,255)">&quot;Conhe=C3=
=A7a as op=C3=A7=C3=B5es de apoio&quot;</span><span style=3D"color:rgb(201,=
209,217)">,</span></div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =
=C2=A0 =C2=A0 </span><span style=3D"color:rgb(156,220,254)">helplineTitle:<=
/span><span style=3D"color:rgb(201,209,217)"> </span><span style=3D"color:r=
gb(165,214,255)">&quot;Ligue 180&quot;</span><span style=3D"color:rgb(201,2=
09,217)">,</span></div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =
=C2=A0 =C2=A0 </span><span style=3D"color:rgb(156,220,254)">helplineText:</=
span><span style=3D"color:rgb(201,209,217)"> </span><span style=3D"color:rg=
b(165,214,255)">&quot;Central de Atendimento =C3=A0 Mulher&quot;</span><spa=
n style=3D"color:rgb(201,209,217)">,</span></div><div><span style=3D"color:=
rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:rgb(156,=
220,254)">psychSupportTitle:</span><span style=3D"color:rgb(201,209,217)"> =
</span><span style=3D"color:rgb(165,214,255)">&quot;Apoio psicol=C3=B3gico&=
quot;</span><span style=3D"color:rgb(201,209,217)">,</span></div><div><span=
 style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span style=
=3D"color:rgb(156,220,254)">psychSupportText:</span><span style=3D"color:rg=
b(201,209,217)"> </span><span style=3D"color:rgb(165,214,255)">&quot;Inform=
a=C3=A7=C3=B5es para buscar acolhimento&quot;</span><span style=3D"color:rg=
b(201,209,217)">,</span></div><div><span style=3D"color:rgb(201,209,217)">=
=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:rgb(156,220,254)">legalTit=
le:</span><span style=3D"color:rgb(201,209,217)"> </span><span style=3D"col=
or:rgb(165,214,255)">&quot;Orienta=C3=A7=C3=A3o jur=C3=ADdica&quot;</span><=
span style=3D"color:rgb(201,209,217)">,</span></div><div><span style=3D"col=
or:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:rgb(1=
56,220,254)">legalText:</span><span style=3D"color:rgb(201,209,217)"> </spa=
n><span style=3D"color:rgb(165,214,255)">&quot;Conhe=C3=A7a caminhos e serv=
i=C3=A7os de orienta=C3=A7=C3=A3o&quot;</span><span style=3D"color:rgb(201,=
209,217)">,</span></div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =
=C2=A0 =C2=A0 </span><span style=3D"color:rgb(156,220,254)">socialTitle:</s=
pan><span style=3D"color:rgb(201,209,217)"> </span><span style=3D"color:rgb=
(165,214,255)">&quot;Servi=C3=A7os sociais&quot;</span><span style=3D"color=
:rgb(201,209,217)">,</span></div><div><span style=3D"color:rgb(201,209,217)=
">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:rgb(156,220,254)">social=
Text:</span><span style=3D"color:rgb(201,209,217)"> </span><span style=3D"c=
olor:rgb(165,214,255)">&quot;Encontre informa=C3=A7=C3=B5es sobre atendimen=
to&quot;</span><span style=3D"color:rgb(201,209,217)">,</span></div><br><di=
v><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span =
style=3D"color:rgb(156,220,254)">toolsEyebrow:</span><span style=3D"color:r=
gb(201,209,217)"> </span><span style=3D"color:rgb(165,214,255)">&quot;RECUR=
SOS DA PLATAFORMA&quot;</span><span style=3D"color:rgb(201,209,217)">,</spa=
n></div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </=
span><span style=3D"color:rgb(156,220,254)">toolsTitle:</span><span style=
=3D"color:rgb(201,209,217)"> </span><span style=3D"color:rgb(165,214,255)">=
&quot;Informa=C3=A7=C3=A3o e ferramentas em um s=C3=B3 lugar.&quot;</span><=
span style=3D"color:rgb(201,209,217)">,</span></div><div><span style=3D"col=
or:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:rgb(1=
56,220,254)">toolsDescription:</span><span style=3D"color:rgb(201,209,217)"=
> </span><span style=3D"color:rgb(165,214,255)">&quot;Conhe=C3=A7a os recur=
sos previstos para apoiar a organiza=C3=A7=C3=A3o de informa=C3=A7=C3=B5es =
e o acesso a orienta=C3=A7=C3=B5es =C3=BAteis.&quot;</span><span style=3D"c=
olor:rgb(201,209,217)">,</span></div><div><span style=3D"color:rgb(201,209,=
217)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:rgb(156,220,254)">di=
screetTitle:</span><span style=3D"color:rgb(201,209,217)"> </span><span sty=
le=3D"color:rgb(165,214,255)">&quot;Modo discreto&quot;</span><span style=
=3D"color:rgb(201,209,217)">,</span></div><div><span style=3D"color:rgb(201=
,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:rgb(156,220,254=
)">discreetText:</span><span style=3D"color:rgb(201,209,217)"> </span><span=
 style=3D"color:rgb(165,214,255)">&quot;Conhe=C3=A7a a proposta de uma inte=
rface com apar=C3=AAncia de agenda.&quot;</span><span style=3D"color:rgb(20=
1,209,217)">,</span></div><div><span style=3D"color:rgb(201,209,217)">=C2=
=A0 =C2=A0 =C2=A0 </span><span style=3D"color:rgb(156,220,254)">diaryTitle:=
</span><span style=3D"color:rgb(201,209,217)"> </span><span style=3D"color:=
rgb(165,214,255)">&quot;Di=C3=A1rio pessoal&quot;</span><span style=3D"colo=
r:rgb(201,209,217)">,</span></div><div><span style=3D"color:rgb(201,209,217=
)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:rgb(156,220,254)">diary=
Text:</span><span style=3D"color:rgb(201,209,217)"> </span><span style=3D"c=
olor:rgb(165,214,255)">&quot;Conhe=C3=A7a a proposta de organiza=C3=A7=C3=
=A3o de anota=C3=A7=C3=B5es pessoais.&quot;</span><span style=3D"color:rgb(=
201,209,217)">,</span></div><div><span style=3D"color:rgb(201,209,217)">=C2=
=A0 =C2=A0 =C2=A0 </span><span style=3D"color:rgb(156,220,254)">trustedTitl=
e:</span><span style=3D"color:rgb(201,209,217)"> </span><span style=3D"colo=
r:rgb(165,214,255)">&quot;Pessoas de confian=C3=A7a&quot;</span><span style=
=3D"color:rgb(201,209,217)">,</span></div><div><span style=3D"color:rgb(201=
,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:rgb(156,220,254=
)">trustedText:</span><span style=3D"color:rgb(201,209,217)"> </span><span =
style=3D"color:rgb(165,214,255)">&quot;Planeje como organizar contatos de p=
essoas escolhidas por voc=C3=AA.&quot;</span><span style=3D"color:rgb(201,2=
09,217)">,</span></div><br><div><span style=3D"color:rgb(201,209,217)">=C2=
=A0 =C2=A0 =C2=A0 </span><span style=3D"color:rgb(156,220,254)">safetyEyebr=
ow:</span><span style=3D"color:rgb(201,209,217)"> </span><span style=3D"col=
or:rgb(165,214,255)">&quot;SUA SEGURAN=C3=87A IMPORTA&quot;</span><span sty=
le=3D"color:rgb(201,209,217)">,</span></div><div><span style=3D"color:rgb(2=
01,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:rgb(156,220,2=
54)">safetyTitle:</span><span style=3D"color:rgb(201,209,217)"> </span><spa=
n style=3D"color:rgb(165,214,255)">&quot;Informa=C3=A7=C3=A3o para fazer es=
colhas com mais seguran=C3=A7a.&quot;</span><span style=3D"color:rgb(201,20=
9,217)">,</span></div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =
=C2=A0 =C2=A0 </span><span style=3D"color:rgb(156,220,254)">safetyText:</sp=
an><span style=3D"color:rgb(201,209,217)"> </span><span style=3D"color:rgb(=
165,214,255)">&quot;Se houver perigo imediato, procure um local seguro e ac=
ione os servi=C3=A7os de emerg=C3=AAncia quando puder faz=C3=AA-lo com segu=
ran=C3=A7a.&quot;</span><span style=3D"color:rgb(201,209,217)">,</span></di=
v><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><=
span style=3D"color:rgb(156,220,254)">safetyButton:</span><span style=3D"co=
lor:rgb(201,209,217)"> </span><span style=3D"color:rgb(165,214,255)">&quot;=
Orienta=C3=A7=C3=B5es de emerg=C3=AAncia&quot;</span><span style=3D"color:r=
gb(201,209,217)">,</span></div><br><div><span style=3D"color:rgb(201,209,21=
7)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:rgb(156,220,254)">foot=
erDescription:</span><span style=3D"color:rgb(201,209,217)"> </span><span s=
tyle=3D"color:rgb(165,214,255)">&quot;Informa=C3=A7=C3=A3o, acolhimento e o=
rienta=C3=A7=C3=A3o para mulheres. Uma iniciativa que acredita no poder do =
conhecimento.&quot;</span><span style=3D"color:rgb(201,209,217)">,</span></=
div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span=
><span style=3D"color:rgb(156,220,254)">footerExplore:</span><span style=3D=
"color:rgb(201,209,217)"> </span><span style=3D"color:rgb(165,214,255)">&qu=
ot;Explore&quot;</span><span style=3D"color:rgb(201,209,217)">,</span></div=
><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><s=
pan style=3D"color:rgb(156,220,254)">footerHelp:</span><span style=3D"color=
:rgb(201,209,217)"> </span><span style=3D"color:rgb(165,214,255)">&quot;Enc=
ontre apoio&quot;</span><span style=3D"color:rgb(201,209,217)">,</span></di=
v><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><=
span style=3D"color:rgb(156,220,254)">footerProject:</span><span style=3D"c=
olor:rgb(201,209,217)"> </span><span style=3D"color:rgb(165,214,255)">&quot=
;O projeto&quot;</span><span style=3D"color:rgb(201,209,217)">,</span></div=
><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><s=
pan style=3D"color:rgb(156,220,254)">projectLink:</span><span style=3D"colo=
r:rgb(201,209,217)"> </span><span style=3D"color:rgb(165,214,255)">&quot;So=
bre o projeto&quot;</span><span style=3D"color:rgb(201,209,217)">,</span></=
div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span=
><span style=3D"color:rgb(156,220,254)">collaboratorsLink:</span><span styl=
e=3D"color:rgb(201,209,217)"> </span><span style=3D"color:rgb(165,214,255)"=
>&quot;Colaboradores&quot;</span><span style=3D"color:rgb(201,209,217)">,</=
span></div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0=
 </span><span style=3D"color:rgb(156,220,254)">tutorialLink:</span><span st=
yle=3D"color:rgb(201,209,217)"> </span><span style=3D"color:rgb(165,214,255=
)">&quot;Tutorial do modo discreto&quot;</span><span style=3D"color:rgb(201=
,209,217)">,</span></div><div><span style=3D"color:rgb(201,209,217)">=C2=A0=
 =C2=A0 =C2=A0 </span><span style=3D"color:rgb(156,220,254)">copyright:</sp=
an><span style=3D"color:rgb(201,209,217)"> </span><span style=3D"color:rgb(=
165,214,255)">&quot;Projeto acad=C3=AAmico de informa=C3=A7=C3=A3o e orient=
a=C3=A7=C3=A3o.&quot;</span><span style=3D"color:rgb(201,209,217)">,</span>=
</div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </sp=
an><span style=3D"color:rgb(156,220,254)">footerDisclaimer:</span><span sty=
le=3D"color:rgb(201,209,217)"> </span><span style=3D"color:rgb(165,214,255)=
">&quot;A LIA =C3=A9 uma plataforma informativa e n=C3=A3o substitui atendi=
mento profissional ou servi=C3=A7os de emerg=C3=AAncia.&quot;</span><span s=
tyle=3D"color:rgb(201,209,217)">,</span></div><div><span style=3D"color:rgb=
(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:rgb(156,220=
,254)">backTop:</span><span style=3D"color:rgb(201,209,217)"> </span><span =
style=3D"color:rgb(165,214,255)">&quot;Voltar ao in=C3=ADcio =E2=86=91&quot=
;</span><span style=3D"color:rgb(201,209,217)">,</span></div><br><div><span=
 style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span style=
=3D"color:rgb(156,220,254)">menuOpen:</span><span style=3D"color:rgb(201,20=
9,217)"> </span><span style=3D"color:rgb(165,214,255)">&quot;Abrir menu&quo=
t;</span><span style=3D"color:rgb(201,209,217)">,</span></div><div><span st=
yle=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"c=
olor:rgb(156,220,254)">menuClose:</span><span style=3D"color:rgb(201,209,21=
7)"> </span><span style=3D"color:rgb(165,214,255)">&quot;Fechar menu&quot;<=
/span><span style=3D"color:rgb(201,209,217)">,</span></div><div><span style=
=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"colo=
r:rgb(156,220,254)">accessOpen:</span><span style=3D"color:rgb(201,209,217)=
"> </span><span style=3D"color:rgb(165,214,255)">&quot;Abrir acessibilidade=
&quot;</span><span style=3D"color:rgb(201,209,217)">,</span></div><div><spa=
n style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span style=
=3D"color:rgb(156,220,254)">accessClose:</span><span style=3D"color:rgb(201=
,209,217)"> </span><span style=3D"color:rgb(165,214,255)">&quot;Fechar aces=
sibilidade&quot;</span><span style=3D"color:rgb(201,209,217)">,</span></div=
><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><s=
pan style=3D"color:rgb(156,220,254)">increaseFont:</span><span style=3D"col=
or:rgb(201,209,217)"> </span><span style=3D"color:rgb(165,214,255)">&quot;A=
umentar fonte&quot;</span><span style=3D"color:rgb(201,209,217)">,</span></=
div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span=
><span style=3D"color:rgb(156,220,254)">decreaseFont:</span><span style=3D"=
color:rgb(201,209,217)"> </span><span style=3D"color:rgb(165,214,255)">&quo=
t;Diminuir fonte&quot;</span><span style=3D"color:rgb(201,209,217)">,</span=
></div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </s=
pan><span style=3D"color:rgb(156,220,254)">selectLanguage:</span><span styl=
e=3D"color:rgb(201,209,217)"> </span><span style=3D"color:rgb(165,214,255)"=
>&quot;Selecionar idioma&quot;</span><span style=3D"color:rgb(201,209,217)"=
>,</span></div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =
=C2=A0 </span><span style=3D"color:rgb(156,220,254)">closeButton:</span><sp=
an style=3D"color:rgb(201,209,217)"> </span><span style=3D"color:rgb(165,21=
4,255)">&quot;Fechar&quot;</span></div><div><span style=3D"color:rgb(201,20=
9,217)">=C2=A0 =C2=A0 },</span></div><br><div><span style=3D"color:rgb(201,=
209,217)">=C2=A0 =C2=A0 </span><span style=3D"color:rgb(156,220,254)">en:</=
span><span style=3D"color:rgb(201,209,217)"> {</span></div><div><span style=
=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"colo=
r:rgb(156,220,254)">skip:</span><span style=3D"color:rgb(201,209,217)"> </s=
pan><span style=3D"color:rgb(165,214,255)">&quot;Skip to content&quot;</spa=
n><span style=3D"color:rgb(201,209,217)">,</span></div><div><span style=3D"=
color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:rg=
b(156,220,254)">navHome:</span><span style=3D"color:rgb(201,209,217)"> </sp=
an><span style=3D"color:rgb(165,214,255)">&quot;Home&quot;</span><span styl=
e=3D"color:rgb(201,209,217)">,</span></div><div><span style=3D"color:rgb(20=
1,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:rgb(156,220,25=
4)">navAbout:</span><span style=3D"color:rgb(201,209,217)"> </span><span st=
yle=3D"color:rgb(165,214,255)">&quot;About LIA&quot;</span><span style=3D"c=
olor:rgb(201,209,217)">,</span></div><div><span style=3D"color:rgb(201,209,=
217)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:rgb(156,220,254)">na=
vHistory:</span><span style=3D"color:rgb(201,209,217)"> </span><span style=
=3D"color:rgb(165,214,255)">&quot;Our story&quot;</span><span style=3D"colo=
r:rgb(201,209,217)">,</span></div><div><span style=3D"color:rgb(201,209,217=
)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:rgb(156,220,254)">navVi=
olence:</span><span style=3D"color:rgb(201,209,217)"> </span><span style=3D=
"color:rgb(165,214,255)">&quot;Types of abuse&quot;</span><span style=3D"co=
lor:rgb(201,209,217)">,</span></div><div><span style=3D"color:rgb(201,209,2=
17)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:rgb(156,220,254)">nav=
Resources:</span><span style=3D"color:rgb(201,209,217)"> </span><span style=
=3D"color:rgb(165,214,255)">&quot;Resources&quot;</span><span style=3D"colo=
r:rgb(201,209,217)">,</span></div><div><span style=3D"color:rgb(201,209,217=
)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:rgb(156,220,254)">navNe=
ws:</span><span style=3D"color:rgb(201,209,217)"> </span><span style=3D"col=
or:rgb(165,214,255)">&quot;News&quot;</span><span style=3D"color:rgb(201,20=
9,217)">,</span></div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =
=C2=A0 =C2=A0 </span><span style=3D"color:rgb(156,220,254)">navAccount:</sp=
an><span style=3D"color:rgb(201,209,217)"> </span><span style=3D"color:rgb(=
165,214,255)">&quot;Account&quot;</span><span style=3D"color:rgb(201,209,21=
7)">,</span></div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0=
 =C2=A0 </span><span style=3D"color:rgb(156,220,254)">languageLabel:</span>=
<span style=3D"color:rgb(201,209,217)"> </span><span style=3D"color:rgb(165=
,214,255)">&quot;Language&quot;</span><span style=3D"color:rgb(201,209,217)=
">,</span></div><br><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=
=A0 =C2=A0 </span><span style=3D"color:rgb(156,220,254)">accessEyebrow:</sp=
an><span style=3D"color:rgb(201,209,217)"> </span><span style=3D"color:rgb(=
165,214,255)">&quot;PERSONALIZE YOUR EXPERIENCE&quot;</span><span style=3D"=
color:rgb(201,209,217)">,</span></div><div><span style=3D"color:rgb(201,209=
,217)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:rgb(156,220,254)">a=
ccessTitle:</span><span style=3D"color:rgb(201,209,217)"> </span><span styl=
e=3D"color:rgb(165,214,255)">&quot;Accessibility&quot;</span><span style=3D=
"color:rgb(201,209,217)">,</span></div><div><span style=3D"color:rgb(201,20=
9,217)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:rgb(156,220,254)">=
fontSize:</span><span style=3D"color:rgb(201,209,217)"> </span><span style=
=3D"color:rgb(165,214,255)">&quot;Text size&quot;</span><span style=3D"colo=
r:rgb(201,209,217)">,</span></div><div><span style=3D"color:rgb(201,209,217=
)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:rgb(156,220,254)">reset=
:</span><span style=3D"color:rgb(201,209,217)"> </span><span style=3D"color=
:rgb(165,214,255)">&quot;Default&quot;</span><span style=3D"color:rgb(201,2=
09,217)">,</span></div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =
=C2=A0 =C2=A0 </span><span style=3D"color:rgb(156,220,254)">theme:</span><s=
pan style=3D"color:rgb(201,209,217)"> </span><span style=3D"color:rgb(165,2=
14,255)">&quot;Appearance&quot;</span><span style=3D"color:rgb(201,209,217)=
">,</span></div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =
=C2=A0 </span><span style=3D"color:rgb(156,220,254)">lightTheme:</span><spa=
n style=3D"color:rgb(201,209,217)"> </span><span style=3D"color:rgb(165,214=
,255)">&quot;Light&quot;</span><span style=3D"color:rgb(201,209,217)">,</sp=
an></div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 <=
/span><span style=3D"color:rgb(156,220,254)">darkTheme:</span><span style=
=3D"color:rgb(201,209,217)"> </span><span style=3D"color:rgb(165,214,255)">=
&quot;Dark&quot;</span><span style=3D"color:rgb(201,209,217)">,</span></div=
><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><s=
pan style=3D"color:rgb(156,220,254)">contrast:</span><span style=3D"color:r=
gb(201,209,217)"> </span><span style=3D"color:rgb(165,214,255)">&quot;High =
contrast&quot;</span><span style=3D"color:rgb(201,209,217)">,</span></div><=
div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><spa=
n style=3D"color:rgb(156,220,254)">readAloud:</span><span style=3D"color:rg=
b(201,209,217)"> </span><span style=3D"color:rgb(165,214,255)">&quot;Read a=
loud&quot;</span><span style=3D"color:rgb(201,209,217)">,</span></div><div>=
<span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span st=
yle=3D"color:rgb(156,220,254)">accessNote:</span><span style=3D"color:rgb(2=
01,209,217)"> </span><span style=3D"color:rgb(165,214,255)">&quot;Visual se=
ttings can be changed at any time.&quot;</span><span style=3D"color:rgb(201=
,209,217)">,</span></div><br><div><span style=3D"color:rgb(201,209,217)">=
=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:rgb(156,220,254)">heroEyeb=
row:</span><span style=3D"color:rgb(201,209,217)"> </span><span style=3D"co=
lor:rgb(165,214,255)">&quot;YOU ARE NOT ALONE&quot;</span><span style=3D"co=
lor:rgb(201,209,217)">,</span></div><div><span style=3D"color:rgb(201,209,2=
17)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:rgb(156,220,254)">her=
oTitle:</span><span style=3D"color:rgb(201,209,217)"> </span><span style=3D=
"color:rgb(165,214,255)">&#39;LIA is more than a website. It is a &lt;span&=
gt;support network.&lt;/span&gt;&#39;</span><span style=3D"color:rgb(201,20=
9,217)">,</span></div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =
=C2=A0 =C2=A0 </span><span style=3D"color:rgb(156,220,254)">heroDescription=
:</span><span style=3D"color:rgb(201,209,217)"> </span><span style=3D"color=
:rgb(165,214,255)">&quot;A space for information, care and guidance for wom=
en who need to be heard, understand their rights and find ways to live more=
 safely.&quot;</span><span style=3D"color:rgb(201,209,217)">,</span></div><=
div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><spa=
n style=3D"color:rgb(156,220,254)">heroHelp:</span><span style=3D"color:rgb=
(201,209,217)"> </span><span style=3D"color:rgb(165,214,255)">&quot;I need =
support&quot;</span><span style=3D"color:rgb(201,209,217)">,</span></div><d=
iv><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span=
 style=3D"color:rgb(156,220,254)">heroKnow:</span><span style=3D"color:rgb(=
201,209,217)"> </span><span style=3D"color:rgb(165,214,255)">&quot;Discover=
 LIA&quot;</span><span style=3D"color:rgb(201,209,217)">,</span></div><div>=
<span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span st=
yle=3D"color:rgb(156,220,254)">heroNote:</span><span style=3D"color:rgb(201=
,209,217)"> </span><span style=3D"color:rgb(165,214,255)">&quot;A space for=
 information, respect and care.&quot;</span><span style=3D"color:rgb(201,20=
9,217)">,</span></div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =
=C2=A0 =C2=A0 </span><span style=3D"color:rgb(156,220,254)">heroQuote:</spa=
n><span style=3D"color:rgb(201,209,217)"> </span><span style=3D"color:rgb(1=
65,214,255)">&quot;You deserve to be happy!&quot;</span><span style=3D"colo=
r:rgb(201,209,217)">,</span></div><br><div><span style=3D"color:rgb(201,209=
,217)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:rgb(156,220,254)">r=
esourceKicker:</span><span style=3D"color:rgb(201,209,217)"> </span><span s=
tyle=3D"color:rgb(165,214,255)">&quot;ONE STEP AT A TIME&quot;</span><span =
style=3D"color:rgb(201,209,217)">,</span></div><div><span style=3D"color:rg=
b(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:rgb(156,22=
0,254)">resourceInfoTitle:</span><span style=3D"color:rgb(201,209,217)"> </=
span><span style=3D"color:rgb(165,214,255)">&quot;Information&quot;</span><=
span style=3D"color:rgb(201,209,217)">,</span></div><div><span style=3D"col=
or:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:rgb(1=
56,220,254)">resourceInfoText:</span><span style=3D"color:rgb(201,209,217)"=
> </span><span style=3D"color:rgb(165,214,255)">&quot;Learn about types of =
abuse and recognize warning signs.&quot;</span><span style=3D"color:rgb(201=
,209,217)">,</span></div><div><span style=3D"color:rgb(201,209,217)">=C2=A0=
 =C2=A0 =C2=A0 </span><span style=3D"color:rgb(156,220,254)">resourceSafety=
Title:</span><span style=3D"color:rgb(201,209,217)"> </span><span style=3D"=
color:rgb(165,214,255)">&quot;Safety&quot;</span><span style=3D"color:rgb(2=
01,209,217)">,</span></div><div><span style=3D"color:rgb(201,209,217)">=C2=
=A0 =C2=A0 =C2=A0 </span><span style=3D"color:rgb(156,220,254)">resourceSaf=
etyText:</span><span style=3D"color:rgb(201,209,217)"> </span><span style=
=3D"color:rgb(165,214,255)">&quot;Explore guidance for planning your safety=
.&quot;</span><span style=3D"color:rgb(201,209,217)">,</span></div><div><sp=
an style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span style=
=3D"color:rgb(156,220,254)">resourceSupportTitle:</span><span style=3D"colo=
r:rgb(201,209,217)"> </span><span style=3D"color:rgb(165,214,255)">&quot;Su=
pport&quot;</span><span style=3D"color:rgb(201,209,217)">,</span></div><div=
><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span s=
tyle=3D"color:rgb(156,220,254)">resourceSupportText:</span><span style=3D"c=
olor:rgb(201,209,217)"> </span><span style=3D"color:rgb(165,214,255)">&quot=
;Find ways to seek support.&quot;</span><span style=3D"color:rgb(201,209,21=
7)">,</span></div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0=
 =C2=A0 </span><span style=3D"color:rgb(156,220,254)">resourceToolsTitle:</=
span><span style=3D"color:rgb(201,209,217)"> </span><span style=3D"color:rg=
b(165,214,255)">&quot;Resources&quot;</span><span style=3D"color:rgb(201,20=
9,217)">,</span></div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =
=C2=A0 =C2=A0 </span><span style=3D"color:rgb(156,220,254)">resourceToolsTe=
xt:</span><span style=3D"color:rgb(201,209,217)"> </span><span style=3D"col=
or:rgb(165,214,255)">&quot;Explore the platform&#39;s tools.&quot;</span><s=
pan style=3D"color:rgb(201,209,217)">,</span></div><br><div><span style=3D"=
color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:rg=
b(156,220,254)">aboutEyebrow:</span><span style=3D"color:rgb(201,209,217)">=
 </span><span style=3D"color:rgb(165,214,255)">&quot;ABOUT LIA&quot;</span>=
<span style=3D"color:rgb(201,209,217)">,</span></div><div><span style=3D"co=
lor:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:rgb(=
156,220,254)">aboutTitle:</span><span style=3D"color:rgb(201,209,217)"> </s=
pan><span style=3D"color:rgb(165,214,255)">&quot;A virtual companion and a =
space for guidance.&quot;</span><span style=3D"color:rgb(201,209,217)">,</s=
pan></div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 =
</span><span style=3D"color:rgb(156,220,254)">aboutText:</span><span style=
=3D"color:rgb(201,209,217)"> </span><span style=3D"color:rgb(165,214,255)">=
&quot;LIA is a project that brings together information, care and pathways =
to help women understand their rights and identify support resources. Its g=
oal is to make important information more accessible in an organized and th=
oughtful environment.&quot;</span><span style=3D"color:rgb(201,209,217)">,<=
/span></div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=
=A0 </span><span style=3D"color:rgb(156,220,254)">aboutPoint1:</span><span =
style=3D"color:rgb(201,209,217)"> </span><span style=3D"color:rgb(165,214,2=
55)">&quot;Accessible, organized information&quot;</span><span style=3D"col=
or:rgb(201,209,217)">,</span></div><div><span style=3D"color:rgb(201,209,21=
7)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:rgb(156,220,254)">abou=
tPoint2:</span><span style=3D"color:rgb(201,209,217)"> </span><span style=
=3D"color:rgb(165,214,255)">&quot;Respectful and supportive guidance&quot;<=
/span><span style=3D"color:rgb(201,209,217)">,</span></div><div><span style=
=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"colo=
r:rgb(156,220,254)">aboutPoint3:</span><span style=3D"color:rgb(201,209,217=
)"> </span><span style=3D"color:rgb(165,214,255)">&quot;Information about s=
afety resources&quot;</span><span style=3D"color:rgb(201,209,217)">,</span>=
</div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </sp=
an><span style=3D"color:rgb(156,220,254)">aboutPoint4:</span><span style=3D=
"color:rgb(201,209,217)"> </span><span style=3D"color:rgb(165,214,255)">&qu=
ot;Ways to find support services&quot;</span><span style=3D"color:rgb(201,2=
09,217)">,</span></div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =
=C2=A0 =C2=A0 </span><span style=3D"color:rgb(156,220,254)">aboutLink:</spa=
n><span style=3D"color:rgb(201,209,217)"> </span><span style=3D"color:rgb(1=
65,214,255)">&quot;Discover LIA&#39;s story&quot;</span><span style=3D"colo=
r:rgb(201,209,217)">,</span></div><div><span style=3D"color:rgb(201,209,217=
)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:rgb(156,220,254)">phone=
Message:</span><span style=3D"color:rgb(201,209,217)"> </span><span style=
=3D"color:rgb(165,214,255)">&quot;You deserve to be heard.&quot;</span><spa=
n style=3D"color:rgb(201,209,217)">,</span></div><div><span style=3D"color:=
rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:rgb(156,=
220,254)">phoneInfo:</span><span style=3D"color:rgb(201,209,217)"> </span><=
span style=3D"color:rgb(165,214,255)">&quot;Accessible information&quot;</s=
pan><span style=3D"color:rgb(201,209,217)">,</span></div><div><span style=
=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"colo=
r:rgb(156,220,254)">phoneGuidance:</span><span style=3D"color:rgb(201,209,2=
17)"> </span><span style=3D"color:rgb(165,214,255)">&quot;Supportive guidan=
ce&quot;</span><span style=3D"color:rgb(201,209,217)">,</span></div><div><s=
pan style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span styl=
e=3D"color:rgb(156,220,254)">phoneSafety:</span><span style=3D"color:rgb(20=
1,209,217)"> </span><span style=3D"color:rgb(165,214,255)">&quot;Safety res=
ources&quot;</span><span style=3D"color:rgb(201,209,217)">,</span></div><br=
><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><s=
pan style=3D"color:rgb(156,220,254)">storyEyebrow:</span><span style=3D"col=
or:rgb(201,209,217)"> </span><span style=3D"color:rgb(165,214,255)">&quot;O=
UR STORY&quot;</span><span style=3D"color:rgb(201,209,217)">,</span></div><=
div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><spa=
n style=3D"color:rgb(156,220,254)">storyTitle:</span><span style=3D"color:r=
gb(201,209,217)"> </span><span style=3D"color:rgb(165,214,255)">&quot;A mis=
sion grew from an idea.&quot;</span><span style=3D"color:rgb(201,209,217)">=
,</span></div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=
=A0 </span><span style=3D"color:rgb(156,220,254)">storyText:</span><span st=
yle=3D"color:rgb(201,209,217)"> </span><span style=3D"color:rgb(165,214,255=
)">&quot;LIA was created to bring women closer to information, support and =
pathways to assistance. This project explores how technology can be used re=
sponsibly to make important information more accessible.&quot;</span><span =
style=3D"color:rgb(201,209,217)">,</span></div><div><span style=3D"color:rg=
b(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:rgb(156,22=
0,254)">storyButton:</span><span style=3D"color:rgb(201,209,217)"> </span><=
span style=3D"color:rgb(165,214,255)">&quot;Discover LIA&#39;s story&quot;<=
/span><span style=3D"color:rgb(201,209,217)">,</span></div><br><div><span s=
tyle=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"=
color:rgb(156,220,254)">violenceEyebrow:</span><span style=3D"color:rgb(201=
,209,217)"> </span><span style=3D"color:rgb(165,214,255)">&quot;INFORMATION=
 IS A RIGHT&quot;</span><span style=3D"color:rgb(201,209,217)">,</span></di=
v><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><=
span style=3D"color:rgb(156,220,254)">violenceTitle:</span><span style=3D"c=
olor:rgb(201,209,217)"> </span><span style=3D"color:rgb(165,214,255)">&quot=
;Every form of abuse deserves recognition.&quot;</span><span style=3D"color=
:rgb(201,209,217)">,</span></div><div><span style=3D"color:rgb(201,209,217)=
">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:rgb(156,220,254)">violen=
ceDescription:</span><span style=3D"color:rgb(201,209,217)"> </span><span s=
tyle=3D"color:rgb(165,214,255)">&quot;Recognizing warning signs can help pe=
ople understand a situation and seek guidance. Responsibility for abuse nev=
er lies with the victim.&quot;</span><span style=3D"color:rgb(201,209,217)"=
>,</span></div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =
=C2=A0 </span><span style=3D"color:rgb(156,220,254)">physicalTitle:</span><=
span style=3D"color:rgb(201,209,217)"> </span><span style=3D"color:rgb(165,=
214,255)">&quot;Physical abuse&quot;</span><span style=3D"color:rgb(201,209=
,217)">,</span></div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=
=A0 =C2=A0 </span><span style=3D"color:rgb(156,220,254)">physicalText:</spa=
n><span style=3D"color:rgb(201,209,217)"> </span><span style=3D"color:rgb(1=
65,214,255)">&quot;Actions that harm physical integrity or health.&quot;</s=
pan><span style=3D"color:rgb(201,209,217)">,</span></div><div><span style=
=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"colo=
r:rgb(156,220,254)">psychTitle:</span><span style=3D"color:rgb(201,209,217)=
"> </span><span style=3D"color:rgb(165,214,255)">&quot;Psychological abuse&=
quot;</span><span style=3D"color:rgb(201,209,217)">,</span></div><div><span=
 style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span style=
=3D"color:rgb(156,220,254)">psychText:</span><span style=3D"color:rgb(201,2=
09,217)"> </span><span style=3D"color:rgb(165,214,255)">&quot;Threats, humi=
liation, control and actions that cause emotional harm.&quot;</span><span s=
tyle=3D"color:rgb(201,209,217)">,</span></div><div><span style=3D"color:rgb=
(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:rgb(156,220=
,254)">sexualTitle:</span><span style=3D"color:rgb(201,209,217)"> </span><s=
pan style=3D"color:rgb(165,214,255)">&quot;Sexual abuse&quot;</span><span s=
tyle=3D"color:rgb(201,209,217)">,</span></div><div><span style=3D"color:rgb=
(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:rgb(156,220=
,254)">sexualText:</span><span style=3D"color:rgb(201,209,217)"> </span><sp=
an style=3D"color:rgb(165,214,255)">&quot;Acts or situations that violate s=
exual freedom.&quot;</span><span style=3D"color:rgb(201,209,217)">,</span><=
/div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </spa=
n><span style=3D"color:rgb(156,220,254)">propertyTitle:</span><span style=
=3D"color:rgb(201,209,217)"> </span><span style=3D"color:rgb(165,214,255)">=
&quot;Economic or property abuse&quot;</span><span style=3D"color:rgb(201,2=
09,217)">,</span></div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =
=C2=A0 =C2=A0 </span><span style=3D"color:rgb(156,220,254)">propertyText:</=
span><span style=3D"color:rgb(201,209,217)"> </span><span style=3D"color:rg=
b(165,214,255)">&quot;Control, withholding or destruction of property, docu=
ments or resources.&quot;</span><span style=3D"color:rgb(201,209,217)">,</s=
pan></div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 =
</span><span style=3D"color:rgb(156,220,254)">moralTitle:</span><span style=
=3D"color:rgb(201,209,217)"> </span><span style=3D"color:rgb(165,214,255)">=
&quot;Reputational abuse&quot;</span><span style=3D"color:rgb(201,209,217)"=
>,</span></div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =
=C2=A0 </span><span style=3D"color:rgb(156,220,254)">moralText:</span><span=
 style=3D"color:rgb(201,209,217)"> </span><span style=3D"color:rgb(165,214,=
255)">&quot;Conduct such as slander, defamation and insult.&quot;</span><sp=
an style=3D"color:rgb(201,209,217)">,</span></div><div><span style=3D"color=
:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:rgb(156=
,220,254)">digitalTitle:</span><span style=3D"color:rgb(201,209,217)"> </sp=
an><span style=3D"color:rgb(165,214,255)">&quot;Digital abuse&quot;</span><=
span style=3D"color:rgb(201,209,217)">,</span></div><div><span style=3D"col=
or:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:rgb(1=
56,220,254)">digitalText:</span><span style=3D"color:rgb(201,209,217)"> </s=
pan><span style=3D"color:rgb(165,214,255)">&quot;Abuse and threats carried =
out using digital tools.&quot;</span><span style=3D"color:rgb(201,209,217)"=
>,</span></div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =
=C2=A0 </span><span style=3D"color:rgb(156,220,254)">vicariousTitle:</span>=
<span style=3D"color:rgb(201,209,217)"> </span><span style=3D"color:rgb(165=
,214,255)">&quot;Vicarious abuse&quot;</span><span style=3D"color:rgb(201,2=
09,217)">,</span></div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =
=C2=A0 =C2=A0 </span><span style=3D"color:rgb(156,220,254)">vicariousText:<=
/span><span style=3D"color:rgb(201,209,217)"> </span><span style=3D"color:r=
gb(165,214,255)">&quot;Harming people close to a woman to cause her sufferi=
ng.&quot;</span><span style=3D"color:rgb(201,209,217)">,</span></div><div><=
span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span sty=
le=3D"color:rgb(156,220,254)">cycleTitle:</span><span style=3D"color:rgb(20=
1,209,217)"> </span><span style=3D"color:rgb(165,214,255)">&quot;Cycle of a=
buse&quot;</span><span style=3D"color:rgb(201,209,217)">,</span></div><div>=
<span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span st=
yle=3D"color:rgb(156,220,254)">cycleText:</span><span style=3D"color:rgb(20=
1,209,217)"> </span><span style=3D"color:rgb(165,214,255)">&quot;Understand=
 patterns that may occur in abusive relationships.&quot;</span><span style=
=3D"color:rgb(201,209,217)">,</span></div><div><span style=3D"color:rgb(201=
,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:rgb(156,220,254=
)">learnMore:</span><span style=3D"color:rgb(201,209,217)"> </span><span st=
yle=3D"color:rgb(165,214,255)">&quot;Learn more&quot;</span><span style=3D"=
color:rgb(201,209,217)">,</span></div><br><div><span style=3D"color:rgb(201=
,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:rgb(156,220,254=
)">supportEyebrow:</span><span style=3D"color:rgb(201,209,217)"> </span><sp=
an style=3D"color:rgb(165,214,255)">&quot;YOU DESERVE TO BE HEARD&quot;</sp=
an><span style=3D"color:rgb(201,209,217)">,</span></div><div><span style=3D=
"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:r=
gb(156,220,254)">supportTitle:</span><span style=3D"color:rgb(201,209,217)"=
> </span><span style=3D"color:rgb(165,214,255)">&quot;You do not have to go=
 through this alone.&quot;</span><span style=3D"color:rgb(201,209,217)">,</=
span></div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0=
 </span><span style=3D"color:rgb(156,220,254)">supportText:</span><span sty=
le=3D"color:rgb(201,209,217)"> </span><span style=3D"color:rgb(165,214,255)=
">&quot;If you need guidance, services and people may be able to help. Choo=
se a path that suits your situation while considering your time and safety.=
&quot;</span><span style=3D"color:rgb(201,209,217)">,</span></div><div><spa=
n style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span style=
=3D"color:rgb(156,220,254)">supportButton:</span><span style=3D"color:rgb(2=
01,209,217)"> </span><span style=3D"color:rgb(165,214,255)">&quot;Explore s=
upport options&quot;</span><span style=3D"color:rgb(201,209,217)">,</span><=
/div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </spa=
n><span style=3D"color:rgb(156,220,254)">helplineTitle:</span><span style=
=3D"color:rgb(201,209,217)"> </span><span style=3D"color:rgb(165,214,255)">=
&quot;Call 180&quot;</span><span style=3D"color:rgb(201,209,217)">,</span><=
/div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </spa=
n><span style=3D"color:rgb(156,220,254)">helplineText:</span><span style=3D=
"color:rgb(201,209,217)"> </span><span style=3D"color:rgb(165,214,255)">&qu=
ot;Women&#39;s Support Center in Brazil&quot;</span><span style=3D"color:rg=
b(201,209,217)">,</span></div><div><span style=3D"color:rgb(201,209,217)">=
=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:rgb(156,220,254)">psychSup=
portTitle:</span><span style=3D"color:rgb(201,209,217)"> </span><span style=
=3D"color:rgb(165,214,255)">&quot;Psychological support&quot;</span><span s=
tyle=3D"color:rgb(201,209,217)">,</span></div><div><span style=3D"color:rgb=
(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:rgb(156,220=
,254)">psychSupportText:</span><span style=3D"color:rgb(201,209,217)"> </sp=
an><span style=3D"color:rgb(165,214,255)">&quot;Information on finding supp=
ort&quot;</span><span style=3D"color:rgb(201,209,217)">,</span></div><div><=
span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span sty=
le=3D"color:rgb(156,220,254)">legalTitle:</span><span style=3D"color:rgb(20=
1,209,217)"> </span><span style=3D"color:rgb(165,214,255)">&quot;Legal guid=
ance&quot;</span><span style=3D"color:rgb(201,209,217)">,</span></div><div>=
<span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span st=
yle=3D"color:rgb(156,220,254)">legalText:</span><span style=3D"color:rgb(20=
1,209,217)"> </span><span style=3D"color:rgb(165,214,255)">&quot;Explore gu=
idance services and options&quot;</span><span style=3D"color:rgb(201,209,21=
7)">,</span></div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0=
 =C2=A0 </span><span style=3D"color:rgb(156,220,254)">socialTitle:</span><s=
pan style=3D"color:rgb(201,209,217)"> </span><span style=3D"color:rgb(165,2=
14,255)">&quot;Social services&quot;</span><span style=3D"color:rgb(201,209=
,217)">,</span></div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=
=A0 =C2=A0 </span><span style=3D"color:rgb(156,220,254)">socialText:</span>=
<span style=3D"color:rgb(201,209,217)"> </span><span style=3D"color:rgb(165=
,214,255)">&quot;Find information about available services&quot;</span><spa=
n style=3D"color:rgb(201,209,217)">,</span></div><br><div><span style=3D"co=
lor:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:rgb(=
156,220,254)">toolsEyebrow:</span><span style=3D"color:rgb(201,209,217)"> <=
/span><span style=3D"color:rgb(165,214,255)">&quot;PLATFORM RESOURCES&quot;=
</span><span style=3D"color:rgb(201,209,217)">,</span></div><div><span styl=
e=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"col=
or:rgb(156,220,254)">toolsTitle:</span><span style=3D"color:rgb(201,209,217=
)"> </span><span style=3D"color:rgb(165,214,255)">&quot;Information and too=
ls in one place.&quot;</span><span style=3D"color:rgb(201,209,217)">,</span=
></div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </s=
pan><span style=3D"color:rgb(156,220,254)">toolsDescription:</span><span st=
yle=3D"color:rgb(201,209,217)"> </span><span style=3D"color:rgb(165,214,255=
)">&quot;Explore planned resources for organizing information and accessing=
 useful guidance.&quot;</span><span style=3D"color:rgb(201,209,217)">,</spa=
n></div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </=
span><span style=3D"color:rgb(156,220,254)">discreetTitle:</span><span styl=
e=3D"color:rgb(201,209,217)"> </span><span style=3D"color:rgb(165,214,255)"=
>&quot;Discreet mode&quot;</span><span style=3D"color:rgb(201,209,217)">,</=
span></div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0=
 </span><span style=3D"color:rgb(156,220,254)">discreetText:</span><span st=
yle=3D"color:rgb(201,209,217)"> </span><span style=3D"color:rgb(165,214,255=
)">&quot;Learn about an interface designed to look like a personal planner.=
&quot;</span><span style=3D"color:rgb(201,209,217)">,</span></div><div><spa=
n style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span style=
=3D"color:rgb(156,220,254)">diaryTitle:</span><span style=3D"color:rgb(201,=
209,217)"> </span><span style=3D"color:rgb(165,214,255)">&quot;Personal jou=
rnal&quot;</span><span style=3D"color:rgb(201,209,217)">,</span></div><div>=
<span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span st=
yle=3D"color:rgb(156,220,254)">diaryText:</span><span style=3D"color:rgb(20=
1,209,217)"> </span><span style=3D"color:rgb(165,214,255)">&quot;Explore th=
e concept of organizing personal notes.&quot;</span><span style=3D"color:rg=
b(201,209,217)">,</span></div><div><span style=3D"color:rgb(201,209,217)">=
=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:rgb(156,220,254)">trustedT=
itle:</span><span style=3D"color:rgb(201,209,217)"> </span><span style=3D"c=
olor:rgb(165,214,255)">&quot;Trusted people&quot;</span><span style=3D"colo=
r:rgb(201,209,217)">,</span></div><div><span style=3D"color:rgb(201,209,217=
)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:rgb(156,220,254)">trust=
edText:</span><span style=3D"color:rgb(201,209,217)"> </span><span style=3D=
"color:rgb(165,214,255)">&quot;Plan how to organize contacts chosen by you.=
&quot;</span><span style=3D"color:rgb(201,209,217)">,</span></div><br><div>=
<span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span st=
yle=3D"color:rgb(156,220,254)">safetyEyebrow:</span><span style=3D"color:rg=
b(201,209,217)"> </span><span style=3D"color:rgb(165,214,255)">&quot;YOUR S=
AFETY MATTERS&quot;</span><span style=3D"color:rgb(201,209,217)">,</span></=
div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span=
><span style=3D"color:rgb(156,220,254)">safetyTitle:</span><span style=3D"c=
olor:rgb(201,209,217)"> </span><span style=3D"color:rgb(165,214,255)">&quot=
;Information to help you make safer choices.&quot;</span><span style=3D"col=
or:rgb(201,209,217)">,</span></div><div><span style=3D"color:rgb(201,209,21=
7)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:rgb(156,220,254)">safe=
tyText:</span><span style=3D"color:rgb(201,209,217)"> </span><span style=3D=
"color:rgb(165,214,255)">&quot;If you are in immediate danger, seek a safe =
place and contact emergency services when you can do so safely.&quot;</span=
><span style=3D"color:rgb(201,209,217)">,</span></div><div><span style=3D"c=
olor:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:rgb=
(156,220,254)">safetyButton:</span><span style=3D"color:rgb(201,209,217)"> =
</span><span style=3D"color:rgb(165,214,255)">&quot;Emergency guidance&quot=
;</span><span style=3D"color:rgb(201,209,217)">,</span></div><br><div><span=
 style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span style=
=3D"color:rgb(156,220,254)">footerDescription:</span><span style=3D"color:r=
gb(201,209,217)"> </span><span style=3D"color:rgb(165,214,255)">&quot;Infor=
mation, care and guidance for women. An initiative that believes in the pow=
er of knowledge.&quot;</span><span style=3D"color:rgb(201,209,217)">,</span=
></div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </s=
pan><span style=3D"color:rgb(156,220,254)">footerExplore:</span><span style=
=3D"color:rgb(201,209,217)"> </span><span style=3D"color:rgb(165,214,255)">=
&quot;Explore&quot;</span><span style=3D"color:rgb(201,209,217)">,</span></=
div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span=
><span style=3D"color:rgb(156,220,254)">footerHelp:</span><span style=3D"co=
lor:rgb(201,209,217)"> </span><span style=3D"color:rgb(165,214,255)">&quot;=
Find support&quot;</span><span style=3D"color:rgb(201,209,217)">,</span></d=
iv><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span>=
<span style=3D"color:rgb(156,220,254)">footerProject:</span><span style=3D"=
color:rgb(201,209,217)"> </span><span style=3D"color:rgb(165,214,255)">&quo=
t;The project&quot;</span><span style=3D"color:rgb(201,209,217)">,</span></=
div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span=
><span style=3D"color:rgb(156,220,254)">projectLink:</span><span style=3D"c=
olor:rgb(201,209,217)"> </span><span style=3D"color:rgb(165,214,255)">&quot=
;About the project&quot;</span><span style=3D"color:rgb(201,209,217)">,</sp=
an></div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 <=
/span><span style=3D"color:rgb(156,220,254)">collaboratorsLink:</span><span=
 style=3D"color:rgb(201,209,217)"> </span><span style=3D"color:rgb(165,214,=
255)">&quot;Project contributors&quot;</span><span style=3D"color:rgb(201,2=
09,217)">,</span></div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =
=C2=A0 =C2=A0 </span><span style=3D"color:rgb(156,220,254)">tutorialLink:</=
span><span style=3D"color:rgb(201,209,217)"> </span><span style=3D"color:rg=
b(165,214,255)">&quot;Discreet mode tutorial&quot;</span><span style=3D"col=
or:rgb(201,209,217)">,</span></div><div><span style=3D"color:rgb(201,209,21=
7)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:rgb(156,220,254)">copy=
right:</span><span style=3D"color:rgb(201,209,217)"> </span><span style=3D"=
color:rgb(165,214,255)">&quot;An academic information and guidance project.=
&quot;</span><span style=3D"color:rgb(201,209,217)">,</span></div><div><spa=
n style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span style=
=3D"color:rgb(156,220,254)">footerDisclaimer:</span><span style=3D"color:rg=
b(201,209,217)"> </span><span style=3D"color:rgb(165,214,255)">&quot;LIA is=
 an informational platform and does not replace professional care or emerge=
ncy services.&quot;</span><span style=3D"color:rgb(201,209,217)">,</span></=
div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span=
><span style=3D"color:rgb(156,220,254)">backTop:</span><span style=3D"color=
:rgb(201,209,217)"> </span><span style=3D"color:rgb(165,214,255)">&quot;Bac=
k to top =E2=86=91&quot;</span><span style=3D"color:rgb(201,209,217)">,</sp=
an></div><br><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=
=A0 </span><span style=3D"color:rgb(156,220,254)">menuOpen:</span><span sty=
le=3D"color:rgb(201,209,217)"> </span><span style=3D"color:rgb(165,214,255)=
">&quot;Open menu&quot;</span><span style=3D"color:rgb(201,209,217)">,</spa=
n></div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </=
span><span style=3D"color:rgb(156,220,254)">menuClose:</span><span style=3D=
"color:rgb(201,209,217)"> </span><span style=3D"color:rgb(165,214,255)">&qu=
ot;Close menu&quot;</span><span style=3D"color:rgb(201,209,217)">,</span></=
div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span=
><span style=3D"color:rgb(156,220,254)">accessOpen:</span><span style=3D"co=
lor:rgb(201,209,217)"> </span><span style=3D"color:rgb(165,214,255)">&quot;=
Open accessibility&quot;</span><span style=3D"color:rgb(201,209,217)">,</sp=
an></div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 <=
/span><span style=3D"color:rgb(156,220,254)">accessClose:</span><span style=
=3D"color:rgb(201,209,217)"> </span><span style=3D"color:rgb(165,214,255)">=
&quot;Close accessibility&quot;</span><span style=3D"color:rgb(201,209,217)=
">,</span></div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =
=C2=A0 </span><span style=3D"color:rgb(156,220,254)">increaseFont:</span><s=
pan style=3D"color:rgb(201,209,217)"> </span><span style=3D"color:rgb(165,2=
14,255)">&quot;Increase font&quot;</span><span style=3D"color:rgb(201,209,2=
17)">,</span></div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=
=A0 =C2=A0 </span><span style=3D"color:rgb(156,220,254)">decreaseFont:</spa=
n><span style=3D"color:rgb(201,209,217)"> </span><span style=3D"color:rgb(1=
65,214,255)">&quot;Decrease font&quot;</span><span style=3D"color:rgb(201,2=
09,217)">,</span></div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =
=C2=A0 =C2=A0 </span><span style=3D"color:rgb(156,220,254)">selectLanguage:=
</span><span style=3D"color:rgb(201,209,217)"> </span><span style=3D"color:=
rgb(165,214,255)">&quot;Select language&quot;</span><span style=3D"color:rg=
b(201,209,217)">,</span></div><div><span style=3D"color:rgb(201,209,217)">=
=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:rgb(156,220,254)">closeBut=
ton:</span><span style=3D"color:rgb(201,209,217)"> </span><span style=3D"co=
lor:rgb(165,214,255)">&quot;Close&quot;</span></div><div><span style=3D"col=
or:rgb(201,209,217)">=C2=A0 =C2=A0 },</span></div><br><div><span style=3D"c=
olor:rgb(201,209,217)">=C2=A0 =C2=A0 </span><span style=3D"color:rgb(156,22=
0,254)">es:</span><span style=3D"color:rgb(201,209,217)"> {</span></div><di=
v><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span =
style=3D"color:rgb(156,220,254)">skip:</span><span style=3D"color:rgb(201,2=
09,217)"> </span><span style=3D"color:rgb(165,214,255)">&quot;Saltar al con=
tenido&quot;</span><span style=3D"color:rgb(201,209,217)">,</span></div><di=
v><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span =
style=3D"color:rgb(156,220,254)">navHome:</span><span style=3D"color:rgb(20=
1,209,217)"> </span><span style=3D"color:rgb(165,214,255)">&quot;Inicio&quo=
t;</span><span style=3D"color:rgb(201,209,217)">,</span></div><div><span st=
yle=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"c=
olor:rgb(156,220,254)">navAbout:</span><span style=3D"color:rgb(201,209,217=
)"> </span><span style=3D"color:rgb(165,214,255)">&quot;Sobre LIA&quot;</sp=
an><span style=3D"color:rgb(201,209,217)">,</span></div><div><span style=3D=
"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:r=
gb(156,220,254)">navHistory:</span><span style=3D"color:rgb(201,209,217)"> =
</span><span style=3D"color:rgb(165,214,255)">&quot;Nuestra historia&quot;<=
/span><span style=3D"color:rgb(201,209,217)">,</span></div><div><span style=
=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"colo=
r:rgb(156,220,254)">navViolence:</span><span style=3D"color:rgb(201,209,217=
)"> </span><span style=3D"color:rgb(165,214,255)">&quot;Violencias&quot;</s=
pan><span style=3D"color:rgb(201,209,217)">,</span></div><div><span style=
=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"colo=
r:rgb(156,220,254)">navResources:</span><span style=3D"color:rgb(201,209,21=
7)"> </span><span style=3D"color:rgb(165,214,255)">&quot;Recursos&quot;</sp=
an><span style=3D"color:rgb(201,209,217)">,</span></div><div><span style=3D=
"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:r=
gb(156,220,254)">navNews:</span><span style=3D"color:rgb(201,209,217)"> </s=
pan><span style=3D"color:rgb(165,214,255)">&quot;Noticias&quot;</span><span=
 style=3D"color:rgb(201,209,217)">,</span></div><div><span style=3D"color:r=
gb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:rgb(156,2=
20,254)">navAccount:</span><span style=3D"color:rgb(201,209,217)"> </span><=
span style=3D"color:rgb(165,214,255)">&quot;Cuenta&quot;</span><span style=
=3D"color:rgb(201,209,217)">,</span></div><div><span style=3D"color:rgb(201=
,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:rgb(156,220,254=
)">languageLabel:</span><span style=3D"color:rgb(201,209,217)"> </span><spa=
n style=3D"color:rgb(165,214,255)">&quot;Idioma&quot;</span><span style=3D"=
color:rgb(201,209,217)">,</span></div><br><div><span style=3D"color:rgb(201=
,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:rgb(156,220,254=
)">accessEyebrow:</span><span style=3D"color:rgb(201,209,217)"> </span><spa=
n style=3D"color:rgb(165,214,255)">&quot;PERSONALIZA TU EXPERIENCIA&quot;</=
span><span style=3D"color:rgb(201,209,217)">,</span></div><div><span style=
=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"colo=
r:rgb(156,220,254)">accessTitle:</span><span style=3D"color:rgb(201,209,217=
)"> </span><span style=3D"color:rgb(165,214,255)">&quot;Accesibilidad&quot;=
</span><span style=3D"color:rgb(201,209,217)">,</span></div><div><span styl=
e=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"col=
or:rgb(156,220,254)">fontSize:</span><span style=3D"color:rgb(201,209,217)"=
> </span><span style=3D"color:rgb(165,214,255)">&quot;Tama=C3=B1o del texto=
&quot;</span><span style=3D"color:rgb(201,209,217)">,</span></div><div><spa=
n style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span style=
=3D"color:rgb(156,220,254)">reset:</span><span style=3D"color:rgb(201,209,2=
17)"> </span><span style=3D"color:rgb(165,214,255)">&quot;Predeterminado&qu=
ot;</span><span style=3D"color:rgb(201,209,217)">,</span></div><div><span s=
tyle=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"=
color:rgb(156,220,254)">theme:</span><span style=3D"color:rgb(201,209,217)"=
> </span><span style=3D"color:rgb(165,214,255)">&quot;Tema visual&quot;</sp=
an><span style=3D"color:rgb(201,209,217)">,</span></div><div><span style=3D=
"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:r=
gb(156,220,254)">lightTheme:</span><span style=3D"color:rgb(201,209,217)"> =
</span><span style=3D"color:rgb(165,214,255)">&quot;Claro&quot;</span><span=
 style=3D"color:rgb(201,209,217)">,</span></div><div><span style=3D"color:r=
gb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:rgb(156,2=
20,254)">darkTheme:</span><span style=3D"color:rgb(201,209,217)"> </span><s=
pan style=3D"color:rgb(165,214,255)">&quot;Oscuro&quot;</span><span style=
=3D"color:rgb(201,209,217)">,</span></div><div><span style=3D"color:rgb(201=
,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:rgb(156,220,254=
)">contrast:</span><span style=3D"color:rgb(201,209,217)"> </span><span sty=
le=3D"color:rgb(165,214,255)">&quot;Alto contraste&quot;</span><span style=
=3D"color:rgb(201,209,217)">,</span></div><div><span style=3D"color:rgb(201=
,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:rgb(156,220,254=
)">readAloud:</span><span style=3D"color:rgb(201,209,217)"> </span><span st=
yle=3D"color:rgb(165,214,255)">&quot;Lectura en voz alta&quot;</span><span =
style=3D"color:rgb(201,209,217)">,</span></div><div><span style=3D"color:rg=
b(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:rgb(156,22=
0,254)">accessNote:</span><span style=3D"color:rgb(201,209,217)"> </span><s=
pan style=3D"color:rgb(165,214,255)">&quot;Puedes cambiar los ajustes visua=
les en cualquier momento.&quot;</span><span style=3D"color:rgb(201,209,217)=
">,</span></div><br><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=
=A0 =C2=A0 </span><span style=3D"color:rgb(156,220,254)">heroEyebrow:</span=
><span style=3D"color:rgb(201,209,217)"> </span><span style=3D"color:rgb(16=
5,214,255)">&quot;NO EST=C3=81S SOLA&quot;</span><span style=3D"color:rgb(2=
01,209,217)">,</span></div><div><span style=3D"color:rgb(201,209,217)">=C2=
=A0 =C2=A0 =C2=A0 </span><span style=3D"color:rgb(156,220,254)">heroTitle:<=
/span><span style=3D"color:rgb(201,209,217)"> </span><span style=3D"color:r=
gb(165,214,255)">&#39;LIA es m=C3=A1s que un sitio web, es una &lt;span&gt;=
red de apoyo.&lt;/span&gt;&#39;</span><span style=3D"color:rgb(201,209,217)=
">,</span></div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =
=C2=A0 </span><span style=3D"color:rgb(156,220,254)">heroDescription:</span=
><span style=3D"color:rgb(201,209,217)"> </span><span style=3D"color:rgb(16=
5,214,255)">&quot;Un espacio de informaci=C3=B3n, acogida y orientaci=C3=B3=
n para mujeres que necesitan ser escuchadas, comprender sus derechos y enco=
ntrar caminos para vivir con m=C3=A1s seguridad.&quot;</span><span style=3D=
"color:rgb(201,209,217)">,</span></div><div><span style=3D"color:rgb(201,20=
9,217)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:rgb(156,220,254)">=
heroHelp:</span><span style=3D"color:rgb(201,209,217)"> </span><span style=
=3D"color:rgb(165,214,255)">&quot;Necesito apoyo&quot;</span><span style=3D=
"color:rgb(201,209,217)">,</span></div><div><span style=3D"color:rgb(201,20=
9,217)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:rgb(156,220,254)">=
heroKnow:</span><span style=3D"color:rgb(201,209,217)"> </span><span style=
=3D"color:rgb(165,214,255)">&quot;Conoce LIA&quot;</span><span style=3D"col=
or:rgb(201,209,217)">,</span></div><div><span style=3D"color:rgb(201,209,21=
7)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:rgb(156,220,254)">hero=
Note:</span><span style=3D"color:rgb(201,209,217)"> </span><span style=3D"c=
olor:rgb(165,214,255)">&quot;Un espacio de informaci=C3=B3n, respeto y acog=
ida.&quot;</span><span style=3D"color:rgb(201,209,217)">,</span></div><div>=
<span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span st=
yle=3D"color:rgb(156,220,254)">heroQuote:</span><span style=3D"color:rgb(20=
1,209,217)"> </span><span style=3D"color:rgb(165,214,255)">&quot;=C2=A1Tien=
es derecho a ser feliz!&quot;</span><span style=3D"color:rgb(201,209,217)">=
,</span></div><br><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0=
 =C2=A0 </span><span style=3D"color:rgb(156,220,254)">resourceKicker:</span=
><span style=3D"color:rgb(201,209,217)"> </span><span style=3D"color:rgb(16=
5,214,255)">&quot;UN PASO A LA VEZ&quot;</span><span style=3D"color:rgb(201=
,209,217)">,</span></div><div><span style=3D"color:rgb(201,209,217)">=C2=A0=
 =C2=A0 =C2=A0 </span><span style=3D"color:rgb(156,220,254)">resourceInfoTi=
tle:</span><span style=3D"color:rgb(201,209,217)"> </span><span style=3D"co=
lor:rgb(165,214,255)">&quot;Informaci=C3=B3n&quot;</span><span style=3D"col=
or:rgb(201,209,217)">,</span></div><div><span style=3D"color:rgb(201,209,21=
7)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:rgb(156,220,254)">reso=
urceInfoText:</span><span style=3D"color:rgb(201,209,217)"> </span><span st=
yle=3D"color:rgb(165,214,255)">&quot;Conoce los tipos de violencia y recono=
ce las se=C3=B1ales.&quot;</span><span style=3D"color:rgb(201,209,217)">,</=
span></div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0=
 </span><span style=3D"color:rgb(156,220,254)">resourceSafetyTitle:</span><=
span style=3D"color:rgb(201,209,217)"> </span><span style=3D"color:rgb(165,=
214,255)">&quot;Seguridad&quot;</span><span style=3D"color:rgb(201,209,217)=
">,</span></div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =
=C2=A0 </span><span style=3D"color:rgb(156,220,254)">resourceSafetyText:</s=
pan><span style=3D"color:rgb(201,209,217)"> </span><span style=3D"color:rgb=
(165,214,255)">&quot;Encuentra orientaci=C3=B3n para planificar tu segurida=
d.&quot;</span><span style=3D"color:rgb(201,209,217)">,</span></div><div><s=
pan style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span styl=
e=3D"color:rgb(156,220,254)">resourceSupportTitle:</span><span style=3D"col=
or:rgb(201,209,217)"> </span><span style=3D"color:rgb(165,214,255)">&quot;A=
cogida&quot;</span><span style=3D"color:rgb(201,209,217)">,</span></div><di=
v><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span =
style=3D"color:rgb(156,220,254)">resourceSupportText:</span><span style=3D"=
color:rgb(201,209,217)"> </span><span style=3D"color:rgb(165,214,255)">&quo=
t;Encuentra maneras de buscar apoyo.&quot;</span><span style=3D"color:rgb(2=
01,209,217)">,</span></div><div><span style=3D"color:rgb(201,209,217)">=C2=
=A0 =C2=A0 =C2=A0 </span><span style=3D"color:rgb(156,220,254)">resourceToo=
lsTitle:</span><span style=3D"color:rgb(201,209,217)"> </span><span style=
=3D"color:rgb(165,214,255)">&quot;Recursos&quot;</span><span style=3D"color=
:rgb(201,209,217)">,</span></div><div><span style=3D"color:rgb(201,209,217)=
">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:rgb(156,220,254)">resour=
ceToolsText:</span><span style=3D"color:rgb(201,209,217)"> </span><span sty=
le=3D"color:rgb(165,214,255)">&quot;Conoce las herramientas de la plataform=
a.&quot;</span><span style=3D"color:rgb(201,209,217)">,</span></div><br><di=
v><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span =
style=3D"color:rgb(156,220,254)">aboutEyebrow:</span><span style=3D"color:r=
gb(201,209,217)"> </span><span style=3D"color:rgb(165,214,255)">&quot;SOBRE=
 LIA&quot;</span><span style=3D"color:rgb(201,209,217)">,</span></div><div>=
<span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span st=
yle=3D"color:rgb(156,220,254)">aboutTitle:</span><span style=3D"color:rgb(2=
01,209,217)"> </span><span style=3D"color:rgb(165,214,255)">&quot;Una compa=
=C3=B1=C3=ADa virtual y un espacio de orientaci=C3=B3n.&quot;</span><span s=
tyle=3D"color:rgb(201,209,217)">,</span></div><div><span style=3D"color:rgb=
(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:rgb(156,220=
,254)">aboutText:</span><span style=3D"color:rgb(201,209,217)"> </span><spa=
n style=3D"color:rgb(165,214,255)">&quot;LIA es un proyecto que re=C3=BAne =
informaci=C3=B3n, acogida y caminos para que las mujeres conozcan sus derec=
hos e identifiquen recursos de apoyo. Su objetivo es facilitar el acceso a =
informaci=C3=B3n importante en un entorno organizado y cuidadoso.&quot;</sp=
an><span style=3D"color:rgb(201,209,217)">,</span></div><div><span style=3D=
"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:r=
gb(156,220,254)">aboutPoint1:</span><span style=3D"color:rgb(201,209,217)">=
 </span><span style=3D"color:rgb(165,214,255)">&quot;Informaci=C3=B3n acces=
ible y organizada&quot;</span><span style=3D"color:rgb(201,209,217)">,</spa=
n></div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </=
span><span style=3D"color:rgb(156,220,254)">aboutPoint2:</span><span style=
=3D"color:rgb(201,209,217)"> </span><span style=3D"color:rgb(165,214,255)">=
&quot;Orientaci=C3=B3n respetuosa y acogedora&quot;</span><span style=3D"co=
lor:rgb(201,209,217)">,</span></div><div><span style=3D"color:rgb(201,209,2=
17)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:rgb(156,220,254)">abo=
utPoint3:</span><span style=3D"color:rgb(201,209,217)"> </span><span style=
=3D"color:rgb(165,214,255)">&quot;Informaci=C3=B3n sobre recursos de seguri=
dad&quot;</span><span style=3D"color:rgb(201,209,217)">,</span></div><div><=
span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span sty=
le=3D"color:rgb(156,220,254)">aboutPoint4:</span><span style=3D"color:rgb(2=
01,209,217)"> </span><span style=3D"color:rgb(165,214,255)">&quot;Caminos p=
ara encontrar servicios de apoyo&quot;</span><span style=3D"color:rgb(201,2=
09,217)">,</span></div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =
=C2=A0 =C2=A0 </span><span style=3D"color:rgb(156,220,254)">aboutLink:</spa=
n><span style=3D"color:rgb(201,209,217)"> </span><span style=3D"color:rgb(1=
65,214,255)">&quot;Descubre la historia de LIA&quot;</span><span style=3D"c=
olor:rgb(201,209,217)">,</span></div><div><span style=3D"color:rgb(201,209,=
217)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:rgb(156,220,254)">ph=
oneMessage:</span><span style=3D"color:rgb(201,209,217)"> </span><span styl=
e=3D"color:rgb(165,214,255)">&quot;Mereces ser escuchada.&quot;</span><span=
 style=3D"color:rgb(201,209,217)">,</span></div><div><span style=3D"color:r=
gb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:rgb(156,2=
20,254)">phoneInfo:</span><span style=3D"color:rgb(201,209,217)"> </span><s=
pan style=3D"color:rgb(165,214,255)">&quot;Informaci=C3=B3n accesible&quot;=
</span><span style=3D"color:rgb(201,209,217)">,</span></div><div><span styl=
e=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"col=
or:rgb(156,220,254)">phoneGuidance:</span><span style=3D"color:rgb(201,209,=
217)"> </span><span style=3D"color:rgb(165,214,255)">&quot;Orientaci=C3=B3n=
 acogedora&quot;</span><span style=3D"color:rgb(201,209,217)">,</span></div=
><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><s=
pan style=3D"color:rgb(156,220,254)">phoneSafety:</span><span style=3D"colo=
r:rgb(201,209,217)"> </span><span style=3D"color:rgb(165,214,255)">&quot;Re=
cursos de seguridad&quot;</span><span style=3D"color:rgb(201,209,217)">,</s=
pan></div><br><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=
=A0 </span><span style=3D"color:rgb(156,220,254)">storyEyebrow:</span><span=
 style=3D"color:rgb(201,209,217)"> </span><span style=3D"color:rgb(165,214,=
255)">&quot;NUESTRA HISTORIA&quot;</span><span style=3D"color:rgb(201,209,2=
17)">,</span></div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=
=A0 =C2=A0 </span><span style=3D"color:rgb(156,220,254)">storyTitle:</span>=
<span style=3D"color:rgb(201,209,217)"> </span><span style=3D"color:rgb(165=
,214,255)">&quot;De una idea naci=C3=B3 una misi=C3=B3n.&quot;</span><span =
style=3D"color:rgb(201,209,217)">,</span></div><div><span style=3D"color:rg=
b(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:rgb(156,22=
0,254)">storyText:</span><span style=3D"color:rgb(201,209,217)"> </span><sp=
an style=3D"color:rgb(165,214,255)">&quot;LIA naci=C3=B3 con el prop=C3=B3s=
ito de acercar a las mujeres a la informaci=C3=B3n, la acogida y las v=C3=
=ADas de apoyo. Este proyecto busca mostrar c=C3=B3mo utilizar la tecnolog=
=C3=ADa responsablemente para facilitar el acceso a informaci=C3=B3n import=
ante.&quot;</span><span style=3D"color:rgb(201,209,217)">,</span></div><div=
><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span s=
tyle=3D"color:rgb(156,220,254)">storyButton:</span><span style=3D"color:rgb=
(201,209,217)"> </span><span style=3D"color:rgb(165,214,255)">&quot;Conoce =
la historia de LIA&quot;</span><span style=3D"color:rgb(201,209,217)">,</sp=
an></div><br><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=
=A0 </span><span style=3D"color:rgb(156,220,254)">violenceEyebrow:</span><s=
pan style=3D"color:rgb(201,209,217)"> </span><span style=3D"color:rgb(165,2=
14,255)">&quot;LA INFORMACI=C3=93N ES UN DERECHO&quot;</span><span style=3D=
"color:rgb(201,209,217)">,</span></div><div><span style=3D"color:rgb(201,20=
9,217)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:rgb(156,220,254)">=
violenceTitle:</span><span style=3D"color:rgb(201,209,217)"> </span><span s=
tyle=3D"color:rgb(165,214,255)">&quot;Toda forma de violencia debe ser reco=
nocida.&quot;</span><span style=3D"color:rgb(201,209,217)">,</span></div><d=
iv><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span=
 style=3D"color:rgb(156,220,254)">violenceDescription:</span><span style=3D=
"color:rgb(201,209,217)"> </span><span style=3D"color:rgb(165,214,255)">&qu=
ot;Reconocer las se=C3=B1ales puede ayudar a comprender una situaci=C3=B3n =
y buscar orientaci=C3=B3n. La responsabilidad de la violencia nunca es de l=
a v=C3=ADctima.&quot;</span><span style=3D"color:rgb(201,209,217)">,</span>=
</div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </sp=
an><span style=3D"color:rgb(156,220,254)">physicalTitle:</span><span style=
=3D"color:rgb(201,209,217)"> </span><span style=3D"color:rgb(165,214,255)">=
&quot;Violencia f=C3=ADsica&quot;</span><span style=3D"color:rgb(201,209,21=
7)">,</span></div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0=
 =C2=A0 </span><span style=3D"color:rgb(156,220,254)">physicalText:</span><=
span style=3D"color:rgb(201,209,217)"> </span><span style=3D"color:rgb(165,=
214,255)">&quot;Acciones que perjudican la integridad o la salud corporal.&=
quot;</span><span style=3D"color:rgb(201,209,217)">,</span></div><div><span=
 style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span style=
=3D"color:rgb(156,220,254)">psychTitle:</span><span style=3D"color:rgb(201,=
209,217)"> </span><span style=3D"color:rgb(165,214,255)">&quot;Violencia ps=
icol=C3=B3gica&quot;</span><span style=3D"color:rgb(201,209,217)">,</span><=
/div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </spa=
n><span style=3D"color:rgb(156,220,254)">psychText:</span><span style=3D"co=
lor:rgb(201,209,217)"> </span><span style=3D"color:rgb(165,214,255)">&quot;=
Amenazas, humillaciones, control y acciones que causan da=C3=B1o emocional.=
&quot;</span><span style=3D"color:rgb(201,209,217)">,</span></div><div><spa=
n style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span style=
=3D"color:rgb(156,220,254)">sexualTitle:</span><span style=3D"color:rgb(201=
,209,217)"> </span><span style=3D"color:rgb(165,214,255)">&quot;Violencia s=
exual&quot;</span><span style=3D"color:rgb(201,209,217)">,</span></div><div=
><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span s=
tyle=3D"color:rgb(156,220,254)">sexualText:</span><span style=3D"color:rgb(=
201,209,217)"> </span><span style=3D"color:rgb(165,214,255)">&quot;Actos o =
situaciones que vulneran la libertad sexual.&quot;</span><span style=3D"col=
or:rgb(201,209,217)">,</span></div><div><span style=3D"color:rgb(201,209,21=
7)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:rgb(156,220,254)">prop=
ertyTitle:</span><span style=3D"color:rgb(201,209,217)"> </span><span style=
=3D"color:rgb(165,214,255)">&quot;Violencia patrimonial&quot;</span><span s=
tyle=3D"color:rgb(201,209,217)">,</span></div><div><span style=3D"color:rgb=
(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:rgb(156,220=
,254)">propertyText:</span><span style=3D"color:rgb(201,209,217)"> </span><=
span style=3D"color:rgb(165,214,255)">&quot;Control, retenci=C3=B3n o destr=
ucci=C3=B3n de bienes, documentos y recursos.&quot;</span><span style=3D"co=
lor:rgb(201,209,217)">,</span></div><div><span style=3D"color:rgb(201,209,2=
17)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:rgb(156,220,254)">mor=
alTitle:</span><span style=3D"color:rgb(201,209,217)"> </span><span style=
=3D"color:rgb(165,214,255)">&quot;Violencia moral&quot;</span><span style=
=3D"color:rgb(201,209,217)">,</span></div><div><span style=3D"color:rgb(201=
,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:rgb(156,220,254=
)">moralText:</span><span style=3D"color:rgb(201,209,217)"> </span><span st=
yle=3D"color:rgb(165,214,255)">&quot;Conductas como calumnia, difamaci=C3=
=B3n e injuria.&quot;</span><span style=3D"color:rgb(201,209,217)">,</span>=
</div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </sp=
an><span style=3D"color:rgb(156,220,254)">digitalTitle:</span><span style=
=3D"color:rgb(201,209,217)"> </span><span style=3D"color:rgb(165,214,255)">=
&quot;Violencia digital&quot;</span><span style=3D"color:rgb(201,209,217)">=
,</span></div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=
=A0 </span><span style=3D"color:rgb(156,220,254)">digitalText:</span><span =
style=3D"color:rgb(201,209,217)"> </span><span style=3D"color:rgb(165,214,2=
55)">&quot;Abusos y amenazas realizados mediante recursos digitales.&quot;<=
/span><span style=3D"color:rgb(201,209,217)">,</span></div><div><span style=
=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"colo=
r:rgb(156,220,254)">vicariousTitle:</span><span style=3D"color:rgb(201,209,=
217)"> </span><span style=3D"color:rgb(165,214,255)">&quot;Violencia vicari=
a&quot;</span><span style=3D"color:rgb(201,209,217)">,</span></div><div><sp=
an style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span style=
=3D"color:rgb(156,220,254)">vicariousText:</span><span style=3D"color:rgb(2=
01,209,217)"> </span><span style=3D"color:rgb(165,214,255)">&quot;Violencia=
 contra personas cercanas para causar sufrimiento a la mujer.&quot;</span><=
span style=3D"color:rgb(201,209,217)">,</span></div><div><span style=3D"col=
or:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:rgb(1=
56,220,254)">cycleTitle:</span><span style=3D"color:rgb(201,209,217)"> </sp=
an><span style=3D"color:rgb(165,214,255)">&quot;Ciclo de la violencia&quot;=
</span><span style=3D"color:rgb(201,209,217)">,</span></div><div><span styl=
e=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"col=
or:rgb(156,220,254)">cycleText:</span><span style=3D"color:rgb(201,209,217)=
"> </span><span style=3D"color:rgb(165,214,255)">&quot;Comprende patrones q=
ue pueden aparecer en relaciones abusivas.&quot;</span><span style=3D"color=
:rgb(201,209,217)">,</span></div><div><span style=3D"color:rgb(201,209,217)=
">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:rgb(156,220,254)">learnM=
ore:</span><span style=3D"color:rgb(201,209,217)"> </span><span style=3D"co=
lor:rgb(165,214,255)">&quot;Saber m=C3=A1s&quot;</span><span style=3D"color=
:rgb(201,209,217)">,</span></div><br><div><span style=3D"color:rgb(201,209,=
217)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:rgb(156,220,254)">su=
pportEyebrow:</span><span style=3D"color:rgb(201,209,217)"> </span><span st=
yle=3D"color:rgb(165,214,255)">&quot;MERECES SER ESCUCHADA&quot;</span><spa=
n style=3D"color:rgb(201,209,217)">,</span></div><div><span style=3D"color:=
rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:rgb(156,=
220,254)">supportTitle:</span><span style=3D"color:rgb(201,209,217)"> </spa=
n><span style=3D"color:rgb(165,214,255)">&quot;No tienes que pasar por esto=
 sola.&quot;</span><span style=3D"color:rgb(201,209,217)">,</span></div><di=
v><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span =
style=3D"color:rgb(156,220,254)">supportText:</span><span style=3D"color:rg=
b(201,209,217)"> </span><span style=3D"color:rgb(165,214,255)">&quot;Si nec=
esitas orientaci=C3=B3n, existen servicios y personas que pueden ayudar. El=
ige el camino adecuado para tu situaci=C3=B3n, respetando tu tiempo y tu se=
guridad.&quot;</span><span style=3D"color:rgb(201,209,217)">,</span></div><=
div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><spa=
n style=3D"color:rgb(156,220,254)">supportButton:</span><span style=3D"colo=
r:rgb(201,209,217)"> </span><span style=3D"color:rgb(165,214,255)">&quot;Co=
noce las opciones de apoyo&quot;</span><span style=3D"color:rgb(201,209,217=
)">,</span></div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =
=C2=A0 </span><span style=3D"color:rgb(156,220,254)">helplineTitle:</span><=
span style=3D"color:rgb(201,209,217)"> </span><span style=3D"color:rgb(165,=
214,255)">&quot;Llama al 180&quot;</span><span style=3D"color:rgb(201,209,2=
17)">,</span></div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=
=A0 =C2=A0 </span><span style=3D"color:rgb(156,220,254)">helplineText:</spa=
n><span style=3D"color:rgb(201,209,217)"> </span><span style=3D"color:rgb(1=
65,214,255)">&quot;Centro de Atenci=C3=B3n a la Mujer en Brasil&quot;</span=
><span style=3D"color:rgb(201,209,217)">,</span></div><div><span style=3D"c=
olor:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:rgb=
(156,220,254)">psychSupportTitle:</span><span style=3D"color:rgb(201,209,21=
7)"> </span><span style=3D"color:rgb(165,214,255)">&quot;Apoyo psicol=C3=B3=
gico&quot;</span><span style=3D"color:rgb(201,209,217)">,</span></div><div>=
<span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span st=
yle=3D"color:rgb(156,220,254)">psychSupportText:</span><span style=3D"color=
:rgb(201,209,217)"> </span><span style=3D"color:rgb(165,214,255)">&quot;Inf=
ormaci=C3=B3n para encontrar apoyo&quot;</span><span style=3D"color:rgb(201=
,209,217)">,</span></div><div><span style=3D"color:rgb(201,209,217)">=C2=A0=
 =C2=A0 =C2=A0 </span><span style=3D"color:rgb(156,220,254)">legalTitle:</s=
pan><span style=3D"color:rgb(201,209,217)"> </span><span style=3D"color:rgb=
(165,214,255)">&quot;Orientaci=C3=B3n jur=C3=ADdica&quot;</span><span style=
=3D"color:rgb(201,209,217)">,</span></div><div><span style=3D"color:rgb(201=
,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:rgb(156,220,254=
)">legalText:</span><span style=3D"color:rgb(201,209,217)"> </span><span st=
yle=3D"color:rgb(165,214,255)">&quot;Conoce las v=C3=ADas y los servicios d=
e orientaci=C3=B3n&quot;</span><span style=3D"color:rgb(201,209,217)">,</sp=
an></div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 <=
/span><span style=3D"color:rgb(156,220,254)">socialTitle:</span><span style=
=3D"color:rgb(201,209,217)"> </span><span style=3D"color:rgb(165,214,255)">=
&quot;Servicios sociales&quot;</span><span style=3D"color:rgb(201,209,217)"=
>,</span></div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =
=C2=A0 </span><span style=3D"color:rgb(156,220,254)">socialText:</span><spa=
n style=3D"color:rgb(201,209,217)"> </span><span style=3D"color:rgb(165,214=
,255)">&quot;Encuentra informaci=C3=B3n sobre atenci=C3=B3n&quot;</span><sp=
an style=3D"color:rgb(201,209,217)">,</span></div><br><div><span style=3D"c=
olor:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:rgb=
(156,220,254)">toolsEyebrow:</span><span style=3D"color:rgb(201,209,217)"> =
</span><span style=3D"color:rgb(165,214,255)">&quot;RECURSOS DE LA PLATAFOR=
MA&quot;</span><span style=3D"color:rgb(201,209,217)">,</span></div><div><s=
pan style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span styl=
e=3D"color:rgb(156,220,254)">toolsTitle:</span><span style=3D"color:rgb(201=
,209,217)"> </span><span style=3D"color:rgb(165,214,255)">&quot;Informaci=
=C3=B3n y herramientas en un solo lugar.&quot;</span><span style=3D"color:r=
gb(201,209,217)">,</span></div><div><span style=3D"color:rgb(201,209,217)">=
=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:rgb(156,220,254)">toolsDes=
cription:</span><span style=3D"color:rgb(201,209,217)"> </span><span style=
=3D"color:rgb(165,214,255)">&quot;Conoce los recursos previstos para organi=
zar informaci=C3=B3n y acceder a orientaci=C3=B3n =C3=BAtil.&quot;</span><s=
pan style=3D"color:rgb(201,209,217)">,</span></div><div><span style=3D"colo=
r:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:rgb(15=
6,220,254)">discreetTitle:</span><span style=3D"color:rgb(201,209,217)"> </=
span><span style=3D"color:rgb(165,214,255)">&quot;Modo discreto&quot;</span=
><span style=3D"color:rgb(201,209,217)">,</span></div><div><span style=3D"c=
olor:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:rgb=
(156,220,254)">discreetText:</span><span style=3D"color:rgb(201,209,217)"> =
</span><span style=3D"color:rgb(165,214,255)">&quot;Conoce la propuesta de =
una interfaz con apariencia de agenda.&quot;</span><span style=3D"color:rgb=
(201,209,217)">,</span></div><div><span style=3D"color:rgb(201,209,217)">=
=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:rgb(156,220,254)">diaryTit=
le:</span><span style=3D"color:rgb(201,209,217)"> </span><span style=3D"col=
or:rgb(165,214,255)">&quot;Diario personal&quot;</span><span style=3D"color=
:rgb(201,209,217)">,</span></div><div><span style=3D"color:rgb(201,209,217)=
">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:rgb(156,220,254)">diaryT=
ext:</span><span style=3D"color:rgb(201,209,217)"> </span><span style=3D"co=
lor:rgb(165,214,255)">&quot;Conoce la propuesta para organizar notas person=
ales.&quot;</span><span style=3D"color:rgb(201,209,217)">,</span></div><div=
><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span s=
tyle=3D"color:rgb(156,220,254)">trustedTitle:</span><span style=3D"color:rg=
b(201,209,217)"> </span><span style=3D"color:rgb(165,214,255)">&quot;Person=
as de confianza&quot;</span><span style=3D"color:rgb(201,209,217)">,</span>=
</div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </sp=
an><span style=3D"color:rgb(156,220,254)">trustedText:</span><span style=3D=
"color:rgb(201,209,217)"> </span><span style=3D"color:rgb(165,214,255)">&qu=
ot;Planifica c=C3=B3mo organizar los contactos que t=C3=BA elijas.&quot;</s=
pan><span style=3D"color:rgb(201,209,217)">,</span></div><br><div><span sty=
le=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"co=
lor:rgb(156,220,254)">safetyEyebrow:</span><span style=3D"color:rgb(201,209=
,217)"> </span><span style=3D"color:rgb(165,214,255)">&quot;TU SEGURIDAD IM=
PORTA&quot;</span><span style=3D"color:rgb(201,209,217)">,</span></div><div=
><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span s=
tyle=3D"color:rgb(156,220,254)">safetyTitle:</span><span style=3D"color:rgb=
(201,209,217)"> </span><span style=3D"color:rgb(165,214,255)">&quot;Informa=
ci=C3=B3n para tomar decisiones m=C3=A1s seguras.&quot;</span><span style=
=3D"color:rgb(201,209,217)">,</span></div><div><span style=3D"color:rgb(201=
,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:rgb(156,220,254=
)">safetyText:</span><span style=3D"color:rgb(201,209,217)"> </span><span s=
tyle=3D"color:rgb(165,214,255)">&quot;Si existe peligro inmediato, busca un=
 lugar seguro y contacta con los servicios de emergencia cuando puedas hace=
rlo con seguridad.&quot;</span><span style=3D"color:rgb(201,209,217)">,</sp=
an></div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 <=
/span><span style=3D"color:rgb(156,220,254)">safetyButton:</span><span styl=
e=3D"color:rgb(201,209,217)"> </span><span style=3D"color:rgb(165,214,255)"=
>&quot;Orientaci=C3=B3n para emergencias&quot;</span><span style=3D"color:r=
gb(201,209,217)">,</span></div><br><div><span style=3D"color:rgb(201,209,21=
7)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:rgb(156,220,254)">foot=
erDescription:</span><span style=3D"color:rgb(201,209,217)"> </span><span s=
tyle=3D"color:rgb(165,214,255)">&quot;Informaci=C3=B3n, acogida y orientaci=
=C3=B3n para mujeres. Una iniciativa que cree en el poder del conocimiento.=
&quot;</span><span style=3D"color:rgb(201,209,217)">,</span></div><div><spa=
n style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span style=
=3D"color:rgb(156,220,254)">footerExplore:</span><span style=3D"color:rgb(2=
01,209,217)"> </span><span style=3D"color:rgb(165,214,255)">&quot;Explora&q=
uot;</span><span style=3D"color:rgb(201,209,217)">,</span></div><div><span =
style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D=
"color:rgb(156,220,254)">footerHelp:</span><span style=3D"color:rgb(201,209=
,217)"> </span><span style=3D"color:rgb(165,214,255)">&quot;Encuentra apoyo=
&quot;</span><span style=3D"color:rgb(201,209,217)">,</span></div><div><spa=
n style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span style=
=3D"color:rgb(156,220,254)">footerProject:</span><span style=3D"color:rgb(2=
01,209,217)"> </span><span style=3D"color:rgb(165,214,255)">&quot;El proyec=
to&quot;</span><span style=3D"color:rgb(201,209,217)">,</span></div><div><s=
pan style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span styl=
e=3D"color:rgb(156,220,254)">projectLink:</span><span style=3D"color:rgb(20=
1,209,217)"> </span><span style=3D"color:rgb(165,214,255)">&quot;Sobre el p=
royecto&quot;</span><span style=3D"color:rgb(201,209,217)">,</span></div><d=
iv><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span=
 style=3D"color:rgb(156,220,254)">collaboratorsLink:</span><span style=3D"c=
olor:rgb(201,209,217)"> </span><span style=3D"color:rgb(165,214,255)">&quot=
;Colaboradores&quot;</span><span style=3D"color:rgb(201,209,217)">,</span><=
/div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </spa=
n><span style=3D"color:rgb(156,220,254)">tutorialLink:</span><span style=3D=
"color:rgb(201,209,217)"> </span><span style=3D"color:rgb(165,214,255)">&qu=
ot;Tutorial del modo discreto&quot;</span><span style=3D"color:rgb(201,209,=
217)">,</span></div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=
=A0 =C2=A0 </span><span style=3D"color:rgb(156,220,254)">copyright:</span><=
span style=3D"color:rgb(201,209,217)"> </span><span style=3D"color:rgb(165,=
214,255)">&quot;Proyecto acad=C3=A9mico de informaci=C3=B3n y orientaci=C3=
=B3n.&quot;</span><span style=3D"color:rgb(201,209,217)">,</span></div><div=
><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span s=
tyle=3D"color:rgb(156,220,254)">footerDisclaimer:</span><span style=3D"colo=
r:rgb(201,209,217)"> </span><span style=3D"color:rgb(165,214,255)">&quot;LI=
A es una plataforma informativa y no sustituye la atenci=C3=B3n profesional=
 ni los servicios de emergencia.&quot;</span><span style=3D"color:rgb(201,2=
09,217)">,</span></div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =
=C2=A0 =C2=A0 </span><span style=3D"color:rgb(156,220,254)">backTop:</span>=
<span style=3D"color:rgb(201,209,217)"> </span><span style=3D"color:rgb(165=
,214,255)">&quot;Volver al inicio =E2=86=91&quot;</span><span style=3D"colo=
r:rgb(201,209,217)">,</span></div><br><div><span style=3D"color:rgb(201,209=
,217)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:rgb(156,220,254)">m=
enuOpen:</span><span style=3D"color:rgb(201,209,217)"> </span><span style=
=3D"color:rgb(165,214,255)">&quot;Abrir men=C3=BA&quot;</span><span style=
=3D"color:rgb(201,209,217)">,</span></div><div><span style=3D"color:rgb(201=
,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:rgb(156,220,254=
)">menuClose:</span><span style=3D"color:rgb(201,209,217)"> </span><span st=
yle=3D"color:rgb(165,214,255)">&quot;Cerrar men=C3=BA&quot;</span><span sty=
le=3D"color:rgb(201,209,217)">,</span></div><div><span style=3D"color:rgb(2=
01,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:rgb(156,220,2=
54)">accessOpen:</span><span style=3D"color:rgb(201,209,217)"> </span><span=
 style=3D"color:rgb(165,214,255)">&quot;Abrir accesibilidad&quot;</span><sp=
an style=3D"color:rgb(201,209,217)">,</span></div><div><span style=3D"color=
:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:rgb(156=
,220,254)">accessClose:</span><span style=3D"color:rgb(201,209,217)"> </spa=
n><span style=3D"color:rgb(165,214,255)">&quot;Cerrar accesibilidad&quot;</=
span><span style=3D"color:rgb(201,209,217)">,</span></div><div><span style=
=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"colo=
r:rgb(156,220,254)">increaseFont:</span><span style=3D"color:rgb(201,209,21=
7)"> </span><span style=3D"color:rgb(165,214,255)">&quot;Aumentar fuente&qu=
ot;</span><span style=3D"color:rgb(201,209,217)">,</span></div><div><span s=
tyle=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"=
color:rgb(156,220,254)">decreaseFont:</span><span style=3D"color:rgb(201,20=
9,217)"> </span><span style=3D"color:rgb(165,214,255)">&quot;Disminuir fuen=
te&quot;</span><span style=3D"color:rgb(201,209,217)">,</span></div><div><s=
pan style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span styl=
e=3D"color:rgb(156,220,254)">selectLanguage:</span><span style=3D"color:rgb=
(201,209,217)"> </span><span style=3D"color:rgb(165,214,255)">&quot;Selecci=
onar idioma&quot;</span><span style=3D"color:rgb(201,209,217)">,</span></di=
v><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><=
span style=3D"color:rgb(156,220,254)">closeButton:</span><span style=3D"col=
or:rgb(201,209,217)"> </span><span style=3D"color:rgb(165,214,255)">&quot;C=
errar&quot;</span></div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =
=C2=A0 }</span></div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 };<=
/span></div><br><div><span style=3D"color:rgb(201,209,217)">=C2=A0 </span><=
span style=3D"color:rgb(255,123,114)">function</span><span style=3D"color:r=
gb(201,209,217)"> </span><span style=3D"color:rgb(210,168,255)">readPrefere=
nce</span><span style=3D"color:rgb(201,209,217)">(</span><span style=3D"col=
or:rgb(255,166,87)">key</span><span style=3D"color:rgb(201,209,217)">, </sp=
an><span style=3D"color:rgb(255,166,87)">fallback</span><span style=3D"colo=
r:rgb(201,209,217)">) {</span></div><div><span style=3D"color:rgb(201,209,2=
17)">=C2=A0 =C2=A0 </span><span style=3D"color:rgb(197,134,192)">try</span>=
<span style=3D"color:rgb(201,209,217)"> {</span></div><div><span style=3D"c=
olor:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:rgb=
(197,134,192)">return</span><span style=3D"color:rgb(201,209,217)"> localSt=
orage.</span><span style=3D"color:rgb(210,168,255)">getItem</span><span sty=
le=3D"color:rgb(201,209,217)">(key) </span><span style=3D"color:rgb(212,212=
,212)">??</span><span style=3D"color:rgb(201,209,217)"> fallback;</span></d=
iv><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 } </span><span=
 style=3D"color:rgb(197,134,192)">catch</span><span style=3D"color:rgb(201,=
209,217)"> {</span></div><div><span style=3D"color:rgb(201,209,217)">=C2=A0=
 =C2=A0 =C2=A0 </span><span style=3D"color:rgb(197,134,192)">return</span><=
span style=3D"color:rgb(201,209,217)"> fallback;</span></div><div><span sty=
le=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 }</span></div><div><span style=
=3D"color:rgb(201,209,217)">=C2=A0 }</span></div><br><div><span style=3D"co=
lor:rgb(201,209,217)">=C2=A0 </span><span style=3D"color:rgb(255,123,114)">=
function</span><span style=3D"color:rgb(201,209,217)"> </span><span style=
=3D"color:rgb(210,168,255)">savePreference</span><span style=3D"color:rgb(2=
01,209,217)">(</span><span style=3D"color:rgb(255,166,87)">key</span><span =
style=3D"color:rgb(201,209,217)">, </span><span style=3D"color:rgb(255,166,=
87)">value</span><span style=3D"color:rgb(201,209,217)">) {</span></div><di=
v><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 </span><span style=
=3D"color:rgb(197,134,192)">try</span><span style=3D"color:rgb(201,209,217)=
"> {</span></div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =
=C2=A0 localStorage.</span><span style=3D"color:rgb(210,168,255)">setItem</=
span><span style=3D"color:rgb(201,209,217)">(key, value);</span></div><div>=
<span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 } </span><span style=
=3D"color:rgb(197,134,192)">catch</span><span style=3D"color:rgb(201,209,21=
7)"> {</span></div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=
=A0 =C2=A0 </span><span style=3D"color:rgb(139,148,158)">// O site continua=
 funcionando sem armazenamento local.</span></div><div><span style=3D"color=
:rgb(201,209,217)">=C2=A0 =C2=A0 }</span></div><div><span style=3D"color:rg=
b(201,209,217)">=C2=A0 }</span></div><br><div><span style=3D"color:rgb(201,=
209,217)">=C2=A0 </span><span style=3D"color:rgb(255,123,114)">let</span><s=
pan style=3D"color:rgb(201,209,217)"> currentLanguage </span><span style=3D=
"color:rgb(212,212,212)">=3D</span><span style=3D"color:rgb(201,209,217)"> =
</span><span style=3D"color:rgb(210,168,255)">readPreference</span><span st=
yle=3D"color:rgb(201,209,217)">(</span><span style=3D"color:rgb(165,214,255=
)">&quot;lia-language&quot;</span><span style=3D"color:rgb(201,209,217)">, =
</span><span style=3D"color:rgb(165,214,255)">&quot;pt&quot;</span><span st=
yle=3D"color:rgb(201,209,217)">);</span></div><div><span style=3D"color:rgb=
(201,209,217)">=C2=A0 </span><span style=3D"color:rgb(197,134,192)">if</spa=
n><span style=3D"color:rgb(201,209,217)"> (</span><span style=3D"color:rgb(=
212,212,212)">!</span><span style=3D"color:rgb(201,209,217)">translations[c=
urrentLanguage]) currentLanguage </span><span style=3D"color:rgb(212,212,21=
2)">=3D</span><span style=3D"color:rgb(201,209,217)"> </span><span style=3D=
"color:rgb(165,214,255)">&quot;pt&quot;</span><span style=3D"color:rgb(201,=
209,217)">;</span></div><br><div><span style=3D"color:rgb(201,209,217)">=C2=
=A0 </span><span style=3D"color:rgb(255,123,114)">let</span><span style=3D"=
color:rgb(201,209,217)"> fontSize </span><span style=3D"color:rgb(212,212,2=
12)">=3D</span><span style=3D"color:rgb(201,209,217)"> </span><span style=
=3D"color:rgb(210,168,255)">Number</span><span style=3D"color:rgb(201,209,2=
17)">(</span><span style=3D"color:rgb(210,168,255)">readPreference</span><s=
pan style=3D"color:rgb(201,209,217)">(</span><span style=3D"color:rgb(165,2=
14,255)">&quot;lia-font-size&quot;</span><span style=3D"color:rgb(201,209,2=
17)">, </span><span style=3D"color:rgb(165,214,255)">&quot;16&quot;</span><=
span style=3D"color:rgb(201,209,217)">));</span></div><div><span style=3D"c=
olor:rgb(201,209,217)">=C2=A0 </span><span style=3D"color:rgb(197,134,192)"=
>if</span><span style=3D"color:rgb(201,209,217)"> (</span><span style=3D"co=
lor:rgb(212,212,212)">!</span><span style=3D"color:rgb(201,209,217)">Number=
.</span><span style=3D"color:rgb(210,168,255)">isFinite</span><span style=
=3D"color:rgb(201,209,217)">(fontSize)) fontSize </span><span style=3D"colo=
r:rgb(212,212,212)">=3D</span><span style=3D"color:rgb(201,209,217)"> </spa=
n><span style=3D"color:rgb(181,206,168)">16</span><span style=3D"color:rgb(=
201,209,217)">;</span></div><div><span style=3D"color:rgb(201,209,217)">=C2=
=A0 fontSize </span><span style=3D"color:rgb(212,212,212)">=3D</span><span =
style=3D"color:rgb(201,209,217)"> Math.</span><span style=3D"color:rgb(210,=
168,255)">min</span><span style=3D"color:rgb(201,209,217)">(</span><span st=
yle=3D"color:rgb(181,206,168)">20</span><span style=3D"color:rgb(201,209,21=
7)">, Math.</span><span style=3D"color:rgb(210,168,255)">max</span><span st=
yle=3D"color:rgb(201,209,217)">(</span><span style=3D"color:rgb(181,206,168=
)">14</span><span style=3D"color:rgb(201,209,217)">, fontSize));</span></di=
v><br><div><span style=3D"color:rgb(201,209,217)">=C2=A0 </span><span style=
=3D"color:rgb(255,123,114)">let</span><span style=3D"color:rgb(201,209,217)=
"> toastTimeout;</span></div><br><div><span style=3D"color:rgb(201,209,217)=
">=C2=A0 </span><span style=3D"color:rgb(255,123,114)">function</span><span=
 style=3D"color:rgb(201,209,217)"> </span><span style=3D"color:rgb(210,168,=
255)">showToast</span><span style=3D"color:rgb(201,209,217)">(</span><span =
style=3D"color:rgb(255,166,87)">message</span><span style=3D"color:rgb(201,=
209,217)">) {</span></div><div><span style=3D"color:rgb(201,209,217)">=C2=
=A0 =C2=A0 </span><span style=3D"color:rgb(197,134,192)">if</span><span sty=
le=3D"color:rgb(201,209,217)"> (</span><span style=3D"color:rgb(212,212,212=
)">!</span><span style=3D"color:rgb(201,209,217)">toast) </span><span style=
=3D"color:rgb(197,134,192)">return</span><span style=3D"color:rgb(201,209,2=
17)">;</span></div><br><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =
=C2=A0 toast.textContent </span><span style=3D"color:rgb(212,212,212)">=3D<=
/span><span style=3D"color:rgb(201,209,217)"> message;</span></div><div><sp=
an style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 toast.classList.</span><s=
pan style=3D"color:rgb(210,168,255)">add</span><span style=3D"color:rgb(201=
,209,217)">(</span><span style=3D"color:rgb(165,214,255)">&quot;is-visible&=
quot;</span><span style=3D"color:rgb(201,209,217)">);</span></div><br><div>=
<span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 </span><span style=3D"=
color:rgb(210,168,255)">clearTimeout</span><span style=3D"color:rgb(201,209=
,217)">(toastTimeout);</span></div><div><span style=3D"color:rgb(201,209,21=
7)">=C2=A0 =C2=A0 toastTimeout </span><span style=3D"color:rgb(212,212,212)=
">=3D</span><span style=3D"color:rgb(201,209,217)"> </span><span style=3D"c=
olor:rgb(210,168,255)">setTimeout</span><span style=3D"color:rgb(201,209,21=
7)">(() </span><span style=3D"color:rgb(255,123,114)">=3D&gt;</span><span s=
tyle=3D"color:rgb(201,209,217)"> {</span></div><div><span style=3D"color:rg=
b(201,209,217)">=C2=A0 =C2=A0 =C2=A0 toast.classList.</span><span style=3D"=
color:rgb(210,168,255)">remove</span><span style=3D"color:rgb(201,209,217)"=
>(</span><span style=3D"color:rgb(165,214,255)">&quot;is-visible&quot;</spa=
n><span style=3D"color:rgb(201,209,217)">);</span></div><div><span style=3D=
"color:rgb(201,209,217)">=C2=A0 =C2=A0 }, </span><span style=3D"color:rgb(1=
81,206,168)">3000</span><span style=3D"color:rgb(201,209,217)">);</span></d=
iv><div><span style=3D"color:rgb(201,209,217)">=C2=A0 }</span></div><br><di=
v><span style=3D"color:rgb(201,209,217)">=C2=A0 </span><span style=3D"color=
:rgb(255,123,114)">function</span><span style=3D"color:rgb(201,209,217)"> <=
/span><span style=3D"color:rgb(210,168,255)">applyLanguage</span><span styl=
e=3D"color:rgb(201,209,217)">(</span><span style=3D"color:rgb(255,166,87)">=
language</span><span style=3D"color:rgb(201,209,217)">) {</span></div><div>=
<span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 </span><span style=3D"=
color:rgb(197,134,192)">if</span><span style=3D"color:rgb(201,209,217)"> (<=
/span><span style=3D"color:rgb(212,212,212)">!</span><span style=3D"color:r=
gb(201,209,217)">translations[language]) language </span><span style=3D"col=
or:rgb(212,212,212)">=3D</span><span style=3D"color:rgb(201,209,217)"> </sp=
an><span style=3D"color:rgb(165,214,255)">&quot;pt&quot;</span><span style=
=3D"color:rgb(201,209,217)">;</span></div><br><div><span style=3D"color:rgb=
(201,209,217)">=C2=A0 =C2=A0 currentLanguage </span><span style=3D"color:rg=
b(212,212,212)">=3D</span><span style=3D"color:rgb(201,209,217)"> language;=
</span></div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 </sp=
an><span style=3D"color:rgb(255,123,114)">const</span><span style=3D"color:=
rgb(201,209,217)"> </span><span style=3D"color:rgb(121,192,255)">dictionary=
</span><span style=3D"color:rgb(201,209,217)"> </span><span style=3D"color:=
rgb(212,212,212)">=3D</span><span style=3D"color:rgb(201,209,217)"> transla=
tions[language];</span></div><br><div><span style=3D"color:rgb(201,209,217)=
">=C2=A0 =C2=A0 </span><span style=3D"color:rgb(210,168,255)">$$</span><spa=
n style=3D"color:rgb(201,209,217)">(</span><span style=3D"color:rgb(165,214=
,255)">&quot;[data-i18n]&quot;</span><span style=3D"color:rgb(201,209,217)"=
>).</span><span style=3D"color:rgb(210,168,255)">forEach</span><span style=
=3D"color:rgb(201,209,217)">((</span><span style=3D"color:rgb(255,166,87)">=
element</span><span style=3D"color:rgb(201,209,217)">) </span><span style=
=3D"color:rgb(255,123,114)">=3D&gt;</span><span style=3D"color:rgb(201,209,=
217)"> {</span></div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=
=A0 =C2=A0 </span><span style=3D"color:rgb(255,123,114)">const</span><span =
style=3D"color:rgb(201,209,217)"> </span><span style=3D"color:rgb(121,192,2=
55)">key</span><span style=3D"color:rgb(201,209,217)"> </span><span style=
=3D"color:rgb(212,212,212)">=3D</span><span style=3D"color:rgb(201,209,217)=
"> element.dataset.i18n;</span></div><br><div><span style=3D"color:rgb(201,=
209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:rgb(197,134,192)=
">if</span><span style=3D"color:rgb(201,209,217)"> (</span><span style=3D"c=
olor:rgb(78,201,176)">Object</span><span style=3D"color:rgb(201,209,217)">.=
</span><span style=3D"color:rgb(121,192,255)">prototype</span><span style=
=3D"color:rgb(201,209,217)">.hasOwnProperty.</span><span style=3D"color:rgb=
(210,168,255)">call</span><span style=3D"color:rgb(201,209,217)">(dictionar=
y, key)) {</span></div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =
=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:rgb(139,148,158)">// Conte=
=C3=BAdo HTML permitido apenas nas tradu=C3=A7=C3=B5es escritas no c=C3=B3d=
igo.</span></div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =
=C2=A0 =C2=A0 element.innerHTML </span><span style=3D"color:rgb(212,212,212=
)">=3D</span><span style=3D"color:rgb(201,209,217)"> dictionary[key];</span=
></div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 }</=
span></div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 });</s=
pan></div><br><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 </s=
pan><span style=3D"color:rgb(139,148,158)">// Traduz atributos quando o HTM=
L tiver data-i18n-aria-label.</span></div><div><span style=3D"color:rgb(201=
,209,217)">=C2=A0 =C2=A0 </span><span style=3D"color:rgb(210,168,255)">$$</=
span><span style=3D"color:rgb(201,209,217)">(</span><span style=3D"color:rg=
b(165,214,255)">&quot;[data-i18n-aria-label]&quot;</span><span style=3D"col=
or:rgb(201,209,217)">).</span><span style=3D"color:rgb(210,168,255)">forEac=
h</span><span style=3D"color:rgb(201,209,217)">((</span><span style=3D"colo=
r:rgb(255,166,87)">element</span><span style=3D"color:rgb(201,209,217)">) <=
/span><span style=3D"color:rgb(255,123,114)">=3D&gt;</span><span style=3D"c=
olor:rgb(201,209,217)"> {</span></div><div><span style=3D"color:rgb(201,209=
,217)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:rgb(255,123,114)">c=
onst</span><span style=3D"color:rgb(201,209,217)"> </span><span style=3D"co=
lor:rgb(121,192,255)">key</span><span style=3D"color:rgb(201,209,217)"> </s=
pan><span style=3D"color:rgb(212,212,212)">=3D</span><span style=3D"color:r=
gb(201,209,217)"> element.dataset.i18nAriaLabel;</span></div><div><span sty=
le=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"co=
lor:rgb(197,134,192)">if</span><span style=3D"color:rgb(201,209,217)"> (dic=
tionary[key]) {</span></div><div><span style=3D"color:rgb(201,209,217)">=C2=
=A0 =C2=A0 =C2=A0 =C2=A0 element.</span><span style=3D"color:rgb(210,168,25=
5)">setAttribute</span><span style=3D"color:rgb(201,209,217)">(</span><span=
 style=3D"color:rgb(165,214,255)">&quot;aria-label&quot;</span><span style=
=3D"color:rgb(201,209,217)">, dictionary[key]);</span></div><div><span styl=
e=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 }</span></div><div><span =
style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 });</span></div><br><div><sp=
an style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 </span><span style=3D"col=
or:rgb(139,148,158)">// Traduz dicas de preenchimento quando o HTML tiver d=
ata-i18n-placeholder.</span></div><div><span style=3D"color:rgb(201,209,217=
)">=C2=A0 =C2=A0 </span><span style=3D"color:rgb(210,168,255)">$$</span><sp=
an style=3D"color:rgb(201,209,217)">(</span><span style=3D"color:rgb(165,21=
4,255)">&quot;[data-i18n-placeholder]&quot;</span><span style=3D"color:rgb(=
201,209,217)">).</span><span style=3D"color:rgb(210,168,255)">forEach</span=
><span style=3D"color:rgb(201,209,217)">((</span><span style=3D"color:rgb(2=
55,166,87)">element</span><span style=3D"color:rgb(201,209,217)">) </span><=
span style=3D"color:rgb(255,123,114)">=3D&gt;</span><span style=3D"color:rg=
b(201,209,217)"> {</span></div><div><span style=3D"color:rgb(201,209,217)">=
=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:rgb(255,123,114)">const</s=
pan><span style=3D"color:rgb(201,209,217)"> </span><span style=3D"color:rgb=
(121,192,255)">key</span><span style=3D"color:rgb(201,209,217)"> </span><sp=
an style=3D"color:rgb(212,212,212)">=3D</span><span style=3D"color:rgb(201,=
209,217)"> element.dataset.i18nPlaceholder;</span></div><div><span style=3D=
"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:r=
gb(197,134,192)">if</span><span style=3D"color:rgb(201,209,217)"> (dictiona=
ry[key]) {</span></div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =
=C2=A0 =C2=A0 =C2=A0 element.</span><span style=3D"color:rgb(210,168,255)">=
setAttribute</span><span style=3D"color:rgb(201,209,217)">(</span><span sty=
le=3D"color:rgb(165,214,255)">&quot;placeholder&quot;</span><span style=3D"=
color:rgb(201,209,217)">, dictionary[key]);</span></div><div><span style=3D=
"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 }</span></div><div><span styl=
e=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 });</span></div><br><div><span s=
tyle=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 document.documentElement.lang=
 </span><span style=3D"color:rgb(212,212,212)">=3D</span></div><div><span s=
tyle=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 language </span><span =
style=3D"color:rgb(212,212,212)">=3D=3D=3D</span><span style=3D"color:rgb(2=
01,209,217)"> </span><span style=3D"color:rgb(165,214,255)">&quot;pt&quot;<=
/span><span style=3D"color:rgb(201,209,217)"> </span><span style=3D"color:r=
gb(212,212,212)">?</span><span style=3D"color:rgb(201,209,217)"> </span><sp=
an style=3D"color:rgb(165,214,255)">&quot;pt-BR&quot;</span><span style=3D"=
color:rgb(201,209,217)"> </span><span style=3D"color:rgb(212,212,212)">:</s=
pan><span style=3D"color:rgb(201,209,217)"> language </span><span style=3D"=
color:rgb(212,212,212)">=3D=3D=3D</span><span style=3D"color:rgb(201,209,21=
7)"> </span><span style=3D"color:rgb(165,214,255)">&quot;en&quot;</span><sp=
an style=3D"color:rgb(201,209,217)"> </span><span style=3D"color:rgb(212,21=
2,212)">?</span><span style=3D"color:rgb(201,209,217)"> </span><span style=
=3D"color:rgb(165,214,255)">&quot;en&quot;</span><span style=3D"color:rgb(2=
01,209,217)"> </span><span style=3D"color:rgb(212,212,212)">:</span><span s=
tyle=3D"color:rgb(201,209,217)"> </span><span style=3D"color:rgb(165,214,25=
5)">&quot;es&quot;</span><span style=3D"color:rgb(201,209,217)">;</span></d=
iv><br><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 </span><sp=
an style=3D"color:rgb(197,134,192)">if</span><span style=3D"color:rgb(201,2=
09,217)"> (languageSelect) languageSelect.value </span><span style=3D"color=
:rgb(212,212,212)">=3D</span><span style=3D"color:rgb(201,209,217)"> langua=
ge;</span></div><br><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=
=A0 </span><span style=3D"color:rgb(197,134,192)">if</span><span style=3D"c=
olor:rgb(201,209,217)"> (menuToggle) {</span></div><div><span style=3D"colo=
r:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 menuToggle.</span><span style=3D"c=
olor:rgb(210,168,255)">setAttribute</span><span style=3D"color:rgb(201,209,=
217)">(</span></div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=
=A0 =C2=A0 =C2=A0 </span><span style=3D"color:rgb(165,214,255)">&quot;aria-=
label&quot;</span><span style=3D"color:rgb(201,209,217)">,</span></div><div=
><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 =C2=A0 mainNav=
?.classList.</span><span style=3D"color:rgb(210,168,255)">contains</span><s=
pan style=3D"color:rgb(201,209,217)">(</span><span style=3D"color:rgb(165,2=
14,255)">&quot;is-open&quot;</span><span style=3D"color:rgb(201,209,217)">)=
</span></div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=
=A0 =C2=A0 =C2=A0 </span><span style=3D"color:rgb(212,212,212)">?</span><sp=
an style=3D"color:rgb(201,209,217)"> dictionary.menuClose</span></div><div>=
<span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 =C2=A0 =C2=A0 <=
/span><span style=3D"color:rgb(212,212,212)">:</span><span style=3D"color:r=
gb(201,209,217)"> dictionary.menuOpen</span></div><div><span style=3D"color=
:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 );</span></div><div><span style=3D"=
color:rgb(201,209,217)">=C2=A0 =C2=A0 }</span></div><br><div><span style=3D=
"color:rgb(201,209,217)">=C2=A0 =C2=A0 </span><span style=3D"color:rgb(197,=
134,192)">if</span><span style=3D"color:rgb(201,209,217)"> (accessibilityTo=
ggle) {</span></div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=
=A0 =C2=A0 accessibilityToggle.</span><span style=3D"color:rgb(210,168,255)=
">setAttribute</span><span style=3D"color:rgb(201,209,217)">(</span><span s=
tyle=3D"color:rgb(165,214,255)">&quot;aria-label&quot;</span><span style=3D=
"color:rgb(201,209,217)">, dictionary.accessOpen);</span></div><div><span s=
tyle=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 }</span></div><br><div><span =
style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 </span><span style=3D"color:=
rgb(197,134,192)">if</span><span style=3D"color:rgb(201,209,217)"> (accessi=
bilityClose) {</span></div><div><span style=3D"color:rgb(201,209,217)">=C2=
=A0 =C2=A0 =C2=A0 accessibilityClose.</span><span style=3D"color:rgb(210,16=
8,255)">setAttribute</span><span style=3D"color:rgb(201,209,217)">(</span><=
span style=3D"color:rgb(165,214,255)">&quot;aria-label&quot;</span><span st=
yle=3D"color:rgb(201,209,217)">, dictionary.closeButton);</span></div><div>=
<span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 }</span></div><br><div=
><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 </span><span style=3D=
"color:rgb(210,168,255)">$</span><span style=3D"color:rgb(201,209,217)">(</=
span><span style=3D"color:rgb(165,214,255)">&quot;#fontIncrease&quot;</span=
><span style=3D"color:rgb(201,209,217)">)?.</span><span style=3D"color:rgb(=
210,168,255)">setAttribute</span><span style=3D"color:rgb(201,209,217)">(</=
span><span style=3D"color:rgb(165,214,255)">&quot;aria-label&quot;</span><s=
pan style=3D"color:rgb(201,209,217)">, dictionary.increaseFont);</span></di=
v><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 </span><span st=
yle=3D"color:rgb(210,168,255)">$</span><span style=3D"color:rgb(201,209,217=
)">(</span><span style=3D"color:rgb(165,214,255)">&quot;#fontDecrease&quot;=
</span><span style=3D"color:rgb(201,209,217)">)?.</span><span style=3D"colo=
r:rgb(210,168,255)">setAttribute</span><span style=3D"color:rgb(201,209,217=
)">(</span><span style=3D"color:rgb(165,214,255)">&quot;aria-label&quot;</s=
pan><span style=3D"color:rgb(201,209,217)">, dictionary.decreaseFont);</spa=
n></div><br><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 langu=
ageSelect?.</span><span style=3D"color:rgb(210,168,255)">setAttribute</span=
><span style=3D"color:rgb(201,209,217)">(</span><span style=3D"color:rgb(16=
5,214,255)">&quot;aria-label&quot;</span><span style=3D"color:rgb(201,209,2=
17)">, dictionary.selectLanguage);</span></div><br><div><span style=3D"colo=
r:rgb(201,209,217)">=C2=A0 =C2=A0 </span><span style=3D"color:rgb(210,168,2=
55)">savePreference</span><span style=3D"color:rgb(201,209,217)">(</span><s=
pan style=3D"color:rgb(165,214,255)">&quot;lia-language&quot;</span><span s=
tyle=3D"color:rgb(201,209,217)">, language);</span></div><div><span style=
=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 </span><span style=3D"color:rgb(2=
10,168,255)">updateSpeechLanguage</span><span style=3D"color:rgb(201,209,21=
7)">();</span></div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 }</s=
pan></div><br><div><span style=3D"color:rgb(201,209,217)">=C2=A0 </span><sp=
an style=3D"color:rgb(255,123,114)">function</span><span style=3D"color:rgb=
(201,209,217)"> </span><span style=3D"color:rgb(210,168,255)">applyTheme</s=
pan><span style=3D"color:rgb(201,209,217)">(</span><span style=3D"color:rgb=
(255,166,87)">theme</span><span style=3D"color:rgb(201,209,217)">) {</span>=
</div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 </span><spa=
n style=3D"color:rgb(255,123,114)">const</span><span style=3D"color:rgb(201=
,209,217)"> </span><span style=3D"color:rgb(121,192,255)">selectedTheme</sp=
an><span style=3D"color:rgb(201,209,217)"> </span><span style=3D"color:rgb(=
212,212,212)">=3D</span><span style=3D"color:rgb(201,209,217)"> theme </spa=
n><span style=3D"color:rgb(212,212,212)">=3D=3D=3D</span><span style=3D"col=
or:rgb(201,209,217)"> </span><span style=3D"color:rgb(165,214,255)">&quot;d=
ark&quot;</span><span style=3D"color:rgb(201,209,217)"> </span><span style=
=3D"color:rgb(212,212,212)">?</span><span style=3D"color:rgb(201,209,217)">=
 </span><span style=3D"color:rgb(165,214,255)">&quot;dark&quot;</span><span=
 style=3D"color:rgb(201,209,217)"> </span><span style=3D"color:rgb(212,212,=
212)">:</span><span style=3D"color:rgb(201,209,217)"> </span><span style=3D=
"color:rgb(165,214,255)">&quot;light&quot;</span><span style=3D"color:rgb(2=
01,209,217)">;</span></div><br><div><span style=3D"color:rgb(201,209,217)">=
=C2=A0 =C2=A0 document.body.dataset.theme </span><span style=3D"color:rgb(2=
12,212,212)">=3D</span><span style=3D"color:rgb(201,209,217)"> selectedThem=
e;</span></div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 do=
cument.documentElement.dataset.theme </span><span style=3D"color:rgb(212,21=
2,212)">=3D</span><span style=3D"color:rgb(201,209,217)"> selectedTheme;</s=
pan></div><br><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 </s=
pan><span style=3D"color:rgb(197,134,192)">if</span><span style=3D"color:rg=
b(201,209,217)"> (themeSelect) themeSelect.value </span><span style=3D"colo=
r:rgb(212,212,212)">=3D</span><span style=3D"color:rgb(201,209,217)"> selec=
tedTheme;</span></div><br><div><span style=3D"color:rgb(201,209,217)">=C2=
=A0 =C2=A0 </span><span style=3D"color:rgb(210,168,255)">savePreference</sp=
an><span style=3D"color:rgb(201,209,217)">(</span><span style=3D"color:rgb(=
165,214,255)">&quot;lia-theme&quot;</span><span style=3D"color:rgb(201,209,=
217)">, selectedTheme);</span></div><div><span style=3D"color:rgb(201,209,2=
17)">=C2=A0 }</span></div><br><div><span style=3D"color:rgb(201,209,217)">=
=C2=A0 </span><span style=3D"color:rgb(255,123,114)">function</span><span s=
tyle=3D"color:rgb(201,209,217)"> </span><span style=3D"color:rgb(210,168,25=
5)">applyFontSize</span><span style=3D"color:rgb(201,209,217)">(</span><spa=
n style=3D"color:rgb(255,166,87)">size</span><span style=3D"color:rgb(201,2=
09,217)">) {</span></div><div><span style=3D"color:rgb(201,209,217)">=C2=A0=
 =C2=A0 fontSize </span><span style=3D"color:rgb(212,212,212)">=3D</span><s=
pan style=3D"color:rgb(201,209,217)"> Math.</span><span style=3D"color:rgb(=
210,168,255)">min</span><span style=3D"color:rgb(201,209,217)">(</span><spa=
n style=3D"color:rgb(181,206,168)">20</span><span style=3D"color:rgb(201,20=
9,217)">, Math.</span><span style=3D"color:rgb(210,168,255)">max</span><spa=
n style=3D"color:rgb(201,209,217)">(</span><span style=3D"color:rgb(181,206=
,168)">14</span><span style=3D"color:rgb(201,209,217)">, size));</span></di=
v><br><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 document.do=
cumentElement.style.</span><span style=3D"color:rgb(210,168,255)">setProper=
ty</span><span style=3D"color:rgb(201,209,217)">(</span></div><div><span st=
yle=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"c=
olor:rgb(165,214,255)">&quot;--base-font&quot;</span><span style=3D"color:r=
gb(201,209,217)">,</span></div><div><span style=3D"color:rgb(201,209,217)">=
=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:rgb(165,214,255)">`</span>=
<span style=3D"color:rgb(86,156,214)">${</span><span style=3D"color:rgb(201=
,209,217)">fontSize</span><span style=3D"color:rgb(86,156,214)">}</span><sp=
an style=3D"color:rgb(165,214,255)">px`</span></div><div><span style=3D"col=
or:rgb(201,209,217)">=C2=A0 =C2=A0 );</span></div><br><div><span style=3D"c=
olor:rgb(201,209,217)">=C2=A0 =C2=A0 </span><span style=3D"color:rgb(210,16=
8,255)">savePreference</span><span style=3D"color:rgb(201,209,217)">(</span=
><span style=3D"color:rgb(165,214,255)">&quot;lia-font-size&quot;</span><sp=
an style=3D"color:rgb(201,209,217)">, </span><span style=3D"color:rgb(210,1=
68,255)">String</span><span style=3D"color:rgb(201,209,217)">(fontSize));</=
span></div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 }</span></div=
><br><div><span style=3D"color:rgb(201,209,217)">=C2=A0 </span><span style=
=3D"color:rgb(255,123,114)">function</span><span style=3D"color:rgb(201,209=
,217)"> </span><span style=3D"color:rgb(210,168,255)">applyContrast</span><=
span style=3D"color:rgb(201,209,217)">(</span><span style=3D"color:rgb(255,=
166,87)">enabled</span><span style=3D"color:rgb(201,209,217)">) {</span></d=
iv><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 document.body.=
classList.</span><span style=3D"color:rgb(210,168,255)">toggle</span><span =
style=3D"color:rgb(201,209,217)">(</span><span style=3D"color:rgb(165,214,2=
55)">&quot;high-contrast&quot;</span><span style=3D"color:rgb(201,209,217)"=
>, enabled);</span></div><div><span style=3D"color:rgb(201,209,217)">=C2=A0=
 =C2=A0 document.documentElement.classList.</span><span style=3D"color:rgb(=
210,168,255)">toggle</span><span style=3D"color:rgb(201,209,217)">(</span><=
span style=3D"color:rgb(165,214,255)">&quot;high-contrast&quot;</span><span=
 style=3D"color:rgb(201,209,217)">, enabled);</span></div><br><div><span st=
yle=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 </span><span style=3D"color:rg=
b(197,134,192)">if</span><span style=3D"color:rgb(201,209,217)"> (contrastT=
oggle) contrastToggle.checked </span><span style=3D"color:rgb(212,212,212)"=
>=3D</span><span style=3D"color:rgb(201,209,217)"> enabled;</span></div><br=
><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 </span><span sty=
le=3D"color:rgb(210,168,255)">savePreference</span><span style=3D"color:rgb=
(201,209,217)">(</span><span style=3D"color:rgb(165,214,255)">&quot;lia-con=
trast&quot;</span><span style=3D"color:rgb(201,209,217)">, enabled </span><=
span style=3D"color:rgb(212,212,212)">?</span><span style=3D"color:rgb(201,=
209,217)"> </span><span style=3D"color:rgb(165,214,255)">&quot;on&quot;</sp=
an><span style=3D"color:rgb(201,209,217)"> </span><span style=3D"color:rgb(=
212,212,212)">:</span><span style=3D"color:rgb(201,209,217)"> </span><span =
style=3D"color:rgb(165,214,255)">&quot;off&quot;</span><span style=3D"color=
:rgb(201,209,217)">);</span></div><div><span style=3D"color:rgb(201,209,217=
)">=C2=A0 }</span></div><br><div><span style=3D"color:rgb(201,209,217)">=C2=
=A0 </span><span style=3D"color:rgb(255,123,114)">function</span><span styl=
e=3D"color:rgb(201,209,217)"> </span><span style=3D"color:rgb(210,168,255)"=
>closeMenu</span><span style=3D"color:rgb(201,209,217)">() {</span></div><d=
iv><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 </span><span style=
=3D"color:rgb(197,134,192)">if</span><span style=3D"color:rgb(201,209,217)"=
> (</span><span style=3D"color:rgb(212,212,212)">!</span><span style=3D"col=
or:rgb(201,209,217)">mainNav </span><span style=3D"color:rgb(212,212,212)">=
||</span><span style=3D"color:rgb(201,209,217)"> </span><span style=3D"colo=
r:rgb(212,212,212)">!</span><span style=3D"color:rgb(201,209,217)">menuTogg=
le) </span><span style=3D"color:rgb(197,134,192)">return</span><span style=
=3D"color:rgb(201,209,217)">;</span></div><br><div><span style=3D"color:rgb=
(201,209,217)">=C2=A0 =C2=A0 mainNav.classList.</span><span style=3D"color:=
rgb(210,168,255)">remove</span><span style=3D"color:rgb(201,209,217)">(</sp=
an><span style=3D"color:rgb(165,214,255)">&quot;is-open&quot;</span><span s=
tyle=3D"color:rgb(201,209,217)">);</span></div><div><span style=3D"color:rg=
b(201,209,217)">=C2=A0 =C2=A0 menuToggle.</span><span style=3D"color:rgb(21=
0,168,255)">setAttribute</span><span style=3D"color:rgb(201,209,217)">(</sp=
an><span style=3D"color:rgb(165,214,255)">&quot;aria-expanded&quot;</span><=
span style=3D"color:rgb(201,209,217)">, </span><span style=3D"color:rgb(165=
,214,255)">&quot;false&quot;</span><span style=3D"color:rgb(201,209,217)">)=
;</span></div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 men=
uToggle.</span><span style=3D"color:rgb(210,168,255)">setAttribute</span><s=
pan style=3D"color:rgb(201,209,217)">(</span></div><div><span style=3D"colo=
r:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:rgb(16=
5,214,255)">&quot;aria-label&quot;</span><span style=3D"color:rgb(201,209,2=
17)">,</span></div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=
=A0 =C2=A0 translations[currentLanguage].menuOpen</span></div><div><span st=
yle=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 );</span></div><div><span styl=
e=3D"color:rgb(201,209,217)">=C2=A0 }</span></div><br><div><span style=3D"c=
olor:rgb(201,209,217)">=C2=A0 </span><span style=3D"color:rgb(255,123,114)"=
>function</span><span style=3D"color:rgb(201,209,217)"> </span><span style=
=3D"color:rgb(210,168,255)">closeAccessibilityPanel</span><span style=3D"co=
lor:rgb(201,209,217)">() {</span></div><div><span style=3D"color:rgb(201,20=
9,217)">=C2=A0 =C2=A0 </span><span style=3D"color:rgb(197,134,192)">if</spa=
n><span style=3D"color:rgb(201,209,217)"> (</span><span style=3D"color:rgb(=
212,212,212)">!</span><span style=3D"color:rgb(201,209,217)">accessibilityP=
anel </span><span style=3D"color:rgb(212,212,212)">||</span><span style=3D"=
color:rgb(201,209,217)"> </span><span style=3D"color:rgb(212,212,212)">!</s=
pan><span style=3D"color:rgb(201,209,217)">accessibilityToggle) </span><spa=
n style=3D"color:rgb(197,134,192)">return</span><span style=3D"color:rgb(20=
1,209,217)">;</span></div><br><div><span style=3D"color:rgb(201,209,217)">=
=C2=A0 =C2=A0 accessibilityPanel.hidden </span><span style=3D"color:rgb(212=
,212,212)">=3D</span><span style=3D"color:rgb(201,209,217)"> </span><span s=
tyle=3D"color:rgb(86,156,214)">true</span><span style=3D"color:rgb(201,209,=
217)">;</span></div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=
=A0 accessibilityToggle.</span><span style=3D"color:rgb(210,168,255)">setAt=
tribute</span><span style=3D"color:rgb(201,209,217)">(</span><span style=3D=
"color:rgb(165,214,255)">&quot;aria-expanded&quot;</span><span style=3D"col=
or:rgb(201,209,217)">, </span><span style=3D"color:rgb(165,214,255)">&quot;=
false&quot;</span><span style=3D"color:rgb(201,209,217)">);</span></div><di=
v><span style=3D"color:rgb(201,209,217)">=C2=A0 }</span></div><br><div><spa=
n style=3D"color:rgb(201,209,217)">=C2=A0 </span><span style=3D"color:rgb(2=
55,123,114)">function</span><span style=3D"color:rgb(201,209,217)"> </span>=
<span style=3D"color:rgb(210,168,255)">updateSpeechLanguage</span><span sty=
le=3D"color:rgb(201,209,217)">() {</span></div><div><span style=3D"color:rg=
b(201,209,217)">=C2=A0 =C2=A0 </span><span style=3D"color:rgb(255,123,114)"=
>const</span><span style=3D"color:rgb(201,209,217)"> </span><span style=3D"=
color:rgb(121,192,255)">voiceLanguages</span><span style=3D"color:rgb(201,2=
09,217)"> </span><span style=3D"color:rgb(212,212,212)">=3D</span><span sty=
le=3D"color:rgb(201,209,217)"> {</span></div><div><span style=3D"color:rgb(=
201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:rgb(156,220,=
254)">pt:</span><span style=3D"color:rgb(201,209,217)"> </span><span style=
=3D"color:rgb(165,214,255)">&quot;pt-BR&quot;</span><span style=3D"color:rg=
b(201,209,217)">,</span></div><div><span style=3D"color:rgb(201,209,217)">=
=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:rgb(156,220,254)">en:</spa=
n><span style=3D"color:rgb(201,209,217)"> </span><span style=3D"color:rgb(1=
65,214,255)">&quot;en-US&quot;</span><span style=3D"color:rgb(201,209,217)"=
>,</span></div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =
=C2=A0 </span><span style=3D"color:rgb(156,220,254)">es:</span><span style=
=3D"color:rgb(201,209,217)"> </span><span style=3D"color:rgb(165,214,255)">=
&quot;es-ES&quot;</span></div><div><span style=3D"color:rgb(201,209,217)">=
=C2=A0 =C2=A0 };</span></div><br><div><span style=3D"color:rgb(201,209,217)=
">=C2=A0 =C2=A0 document.documentElement.dataset.speechLanguage </span><spa=
n style=3D"color:rgb(212,212,212)">=3D</span></div><div><span style=3D"colo=
r:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 voiceLanguages[currentLanguage] </=
span><span style=3D"color:rgb(212,212,212)">||</span><span style=3D"color:r=
gb(201,209,217)"> </span><span style=3D"color:rgb(165,214,255)">&quot;pt-BR=
&quot;</span><span style=3D"color:rgb(201,209,217)">;</span></div><br><div>=
<span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 </span><span style=3D"=
color:rgb(197,134,192)">if</span><span style=3D"color:rgb(201,209,217)"> (<=
/span><span style=3D"color:rgb(165,214,255)">&quot;speechSynthesis&quot;</s=
pan><span style=3D"color:rgb(201,209,217)"> </span><span style=3D"color:rgb=
(86,156,214)">in</span><span style=3D"color:rgb(201,209,217)"> window) {</s=
pan></div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 =
window.speechSynthesis.</span><span style=3D"color:rgb(210,168,255)">cancel=
</span><span style=3D"color:rgb(201,209,217)">();</span></div><div><span st=
yle=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 }</span></div><div><span style=
=3D"color:rgb(201,209,217)">=C2=A0 }</span></div><br><div><span style=3D"co=
lor:rgb(201,209,217)">=C2=A0 </span><span style=3D"color:rgb(255,123,114)">=
function</span><span style=3D"color:rgb(201,209,217)"> </span><span style=
=3D"color:rgb(210,168,255)">speakPage</span><span style=3D"color:rgb(201,20=
9,217)">() {</span></div><div><span style=3D"color:rgb(201,209,217)">=C2=A0=
 =C2=A0 </span><span style=3D"color:rgb(197,134,192)">if</span><span style=
=3D"color:rgb(201,209,217)"> (</span></div><div><span style=3D"color:rgb(20=
1,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:rgb(212,212,21=
2)">!</span><span style=3D"color:rgb(201,209,217)">(</span><span style=3D"c=
olor:rgb(165,214,255)">&quot;speechSynthesis&quot;</span><span style=3D"col=
or:rgb(201,209,217)"> </span><span style=3D"color:rgb(86,156,214)">in</span=
><span style=3D"color:rgb(201,209,217)"> window) </span><span style=3D"colo=
r:rgb(212,212,212)">||</span></div><div><span style=3D"color:rgb(201,209,21=
7)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:rgb(212,212,212)">!</s=
pan><span style=3D"color:rgb(201,209,217)">(</span><span style=3D"color:rgb=
(165,214,255)">&quot;SpeechSynthesisUtterance&quot;</span><span style=3D"co=
lor:rgb(201,209,217)"> </span><span style=3D"color:rgb(86,156,214)">in</spa=
n><span style=3D"color:rgb(201,209,217)"> window)</span></div><div><span st=
yle=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 ) {</span></div><div><span sty=
le=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"co=
lor:rgb(255,123,114)">const</span><span style=3D"color:rgb(201,209,217)"> <=
/span><span style=3D"color:rgb(121,192,255)">messages</span><span style=3D"=
color:rgb(201,209,217)"> </span><span style=3D"color:rgb(212,212,212)">=3D<=
/span><span style=3D"color:rgb(201,209,217)"> {</span></div><div><span styl=
e=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 =C2=A0 </span><span style=
=3D"color:rgb(156,220,254)">pt:</span><span style=3D"color:rgb(201,209,217)=
"> </span><span style=3D"color:rgb(165,214,255)">&quot;Este navegador n=C3=
=A3o oferece suporte =C3=A0 leitura em voz alta.&quot;</span><span style=3D=
"color:rgb(201,209,217)">,</span></div><div><span style=3D"color:rgb(201,20=
9,217)">=C2=A0 =C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:rgb(156,220=
,254)">en:</span><span style=3D"color:rgb(201,209,217)"> </span><span style=
=3D"color:rgb(165,214,255)">&quot;Speech reading is not supported in this b=
rowser.&quot;</span><span style=3D"color:rgb(201,209,217)">,</span></div><d=
iv><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 =C2=A0 </spa=
n><span style=3D"color:rgb(156,220,254)">es:</span><span style=3D"color:rgb=
(201,209,217)"> </span><span style=3D"color:rgb(165,214,255)">&quot;Este na=
vegador no admite la lectura en voz alta.&quot;</span></div><div><span styl=
e=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 };</span></div><br><div><=
span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span sty=
le=3D"color:rgb(210,168,255)">showToast</span><span style=3D"color:rgb(201,=
209,217)">(messages[currentLanguage]);</span></div><br><div><span style=3D"=
color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:rg=
b(197,134,192)">if</span><span style=3D"color:rgb(201,209,217)"> (speechTog=
gle) speechToggle.checked </span><span style=3D"color:rgb(212,212,212)">=3D=
</span><span style=3D"color:rgb(201,209,217)"> </span><span style=3D"color:=
rgb(86,156,214)">false</span><span style=3D"color:rgb(201,209,217)">;</span=
></div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </s=
pan><span style=3D"color:rgb(197,134,192)">return</span><span style=3D"colo=
r:rgb(201,209,217)">;</span></div><div><span style=3D"color:rgb(201,209,217=
)">=C2=A0 =C2=A0 }</span></div><br><div><span style=3D"color:rgb(201,209,21=
7)">=C2=A0 =C2=A0 window.speechSynthesis.</span><span style=3D"color:rgb(21=
0,168,255)">cancel</span><span style=3D"color:rgb(201,209,217)">();</span><=
/div><br><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 </span><=
span style=3D"color:rgb(255,123,114)">const</span><span style=3D"color:rgb(=
201,209,217)"> </span><span style=3D"color:rgb(121,192,255)">content</span>=
<span style=3D"color:rgb(201,209,217)"> </span><span style=3D"color:rgb(212=
,212,212)">=3D</span><span style=3D"color:rgb(201,209,217)"> </span><span s=
tyle=3D"color:rgb(210,168,255)">$</span><span style=3D"color:rgb(201,209,21=
7)">(</span><span style=3D"color:rgb(165,214,255)">&quot;#conteudo&quot;</s=
pan><span style=3D"color:rgb(201,209,217)">);</span></div><div><span style=
=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 </span><span style=3D"color:rgb(1=
97,134,192)">if</span><span style=3D"color:rgb(201,209,217)"> (</span><span=
 style=3D"color:rgb(212,212,212)">!</span><span style=3D"color:rgb(201,209,=
217)">content) </span><span style=3D"color:rgb(197,134,192)">return</span><=
span style=3D"color:rgb(201,209,217)">;</span></div><br><div><span style=3D=
"color:rgb(201,209,217)">=C2=A0 =C2=A0 </span><span style=3D"color:rgb(255,=
123,114)">const</span><span style=3D"color:rgb(201,209,217)"> </span><span =
style=3D"color:rgb(121,192,255)">text</span><span style=3D"color:rgb(201,20=
9,217)"> </span><span style=3D"color:rgb(212,212,212)">=3D</span><span styl=
e=3D"color:rgb(201,209,217)"> content.innerText.</span><span style=3D"color=
:rgb(210,168,255)">trim</span><span style=3D"color:rgb(201,209,217)">();</s=
pan></div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 </span>=
<span style=3D"color:rgb(197,134,192)">if</span><span style=3D"color:rgb(20=
1,209,217)"> (</span><span style=3D"color:rgb(212,212,212)">!</span><span s=
tyle=3D"color:rgb(201,209,217)">text) </span><span style=3D"color:rgb(197,1=
34,192)">return</span><span style=3D"color:rgb(201,209,217)">;</span></div>=
<br><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 </span><span =
style=3D"color:rgb(255,123,114)">const</span><span style=3D"color:rgb(201,2=
09,217)"> </span><span style=3D"color:rgb(121,192,255)">utterance</span><sp=
an style=3D"color:rgb(201,209,217)"> </span><span style=3D"color:rgb(212,21=
2,212)">=3D</span><span style=3D"color:rgb(201,209,217)"> </span><span styl=
e=3D"color:rgb(86,156,214)">new</span><span style=3D"color:rgb(201,209,217)=
"> </span><span style=3D"color:rgb(210,168,255)">SpeechSynthesisUtterance</=
span><span style=3D"color:rgb(201,209,217)">(text);</span></div><br><div><s=
pan style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 utterance.lang </span><s=
pan style=3D"color:rgb(212,212,212)">=3D</span></div><div><span style=3D"co=
lor:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 document.documentElement.dataset=
.speechLanguage </span><span style=3D"color:rgb(212,212,212)">||</span><spa=
n style=3D"color:rgb(201,209,217)"> </span><span style=3D"color:rgb(165,214=
,255)">&quot;pt-BR&quot;</span><span style=3D"color:rgb(201,209,217)">;</sp=
an></div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 utteranc=
e.rate </span><span style=3D"color:rgb(212,212,212)">=3D</span><span style=
=3D"color:rgb(201,209,217)"> </span><span style=3D"color:rgb(181,206,168)">=
0.92</span><span style=3D"color:rgb(201,209,217)">;</span></div><br><div><s=
pan style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 utterance.</span><span s=
tyle=3D"color:rgb(210,168,255)">onend</span><span style=3D"color:rgb(201,20=
9,217)"> </span><span style=3D"color:rgb(212,212,212)">=3D</span><span styl=
e=3D"color:rgb(201,209,217)"> () </span><span style=3D"color:rgb(255,123,11=
4)">=3D&gt;</span><span style=3D"color:rgb(201,209,217)"> {</span></div><di=
v><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span =
style=3D"color:rgb(197,134,192)">if</span><span style=3D"color:rgb(201,209,=
217)"> (speechToggle) speechToggle.checked </span><span style=3D"color:rgb(=
212,212,212)">=3D</span><span style=3D"color:rgb(201,209,217)"> </span><spa=
n style=3D"color:rgb(86,156,214)">false</span><span style=3D"color:rgb(201,=
209,217)">;</span></div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =
=C2=A0 };</span></div><br><div><span style=3D"color:rgb(201,209,217)">=C2=
=A0 =C2=A0 utterance.</span><span style=3D"color:rgb(210,168,255)">onerror<=
/span><span style=3D"color:rgb(201,209,217)"> </span><span style=3D"color:r=
gb(212,212,212)">=3D</span><span style=3D"color:rgb(201,209,217)"> () </spa=
n><span style=3D"color:rgb(255,123,114)">=3D&gt;</span><span style=3D"color=
:rgb(201,209,217)"> {</span></div><div><span style=3D"color:rgb(201,209,217=
)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:rgb(197,134,192)">if</s=
pan><span style=3D"color:rgb(201,209,217)"> (speechToggle) speechToggle.che=
cked </span><span style=3D"color:rgb(212,212,212)">=3D</span><span style=3D=
"color:rgb(201,209,217)"> </span><span style=3D"color:rgb(86,156,214)">fals=
e</span><span style=3D"color:rgb(201,209,217)">;</span></div><div><span sty=
le=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 };</span></div><br><div><span s=
tyle=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 window.speechSynthesis.</span=
><span style=3D"color:rgb(210,168,255)">speak</span><span style=3D"color:rg=
b(201,209,217)">(utterance);</span></div><div><span style=3D"color:rgb(201,=
209,217)">=C2=A0 }</span></div><br><div><span style=3D"color:rgb(201,209,21=
7)">=C2=A0 </span><span style=3D"color:rgb(139,148,158)">// Inicializa as p=
refer=C3=AAncias salvas.</span></div><div><span style=3D"color:rgb(201,209,=
217)">=C2=A0 </span><span style=3D"color:rgb(210,168,255)">applyLanguage</s=
pan><span style=3D"color:rgb(201,209,217)">(currentLanguage);</span></div><=
div><span style=3D"color:rgb(201,209,217)">=C2=A0 </span><span style=3D"col=
or:rgb(210,168,255)">applyFontSize</span><span style=3D"color:rgb(201,209,2=
17)">(fontSize);</span></div><div><span style=3D"color:rgb(201,209,217)">=
=C2=A0 </span><span style=3D"color:rgb(210,168,255)">applyTheme</span><span=
 style=3D"color:rgb(201,209,217)">(</span><span style=3D"color:rgb(210,168,=
255)">readPreference</span><span style=3D"color:rgb(201,209,217)">(</span><=
span style=3D"color:rgb(165,214,255)">&quot;lia-theme&quot;</span><span sty=
le=3D"color:rgb(201,209,217)">, </span><span style=3D"color:rgb(165,214,255=
)">&quot;light&quot;</span><span style=3D"color:rgb(201,209,217)">));</span=
></div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 </span><span styl=
e=3D"color:rgb(210,168,255)">applyContrast</span><span style=3D"color:rgb(2=
01,209,217)">(</span><span style=3D"color:rgb(210,168,255)">readPreference<=
/span><span style=3D"color:rgb(201,209,217)">(</span><span style=3D"color:r=
gb(165,214,255)">&quot;lia-contrast&quot;</span><span style=3D"color:rgb(20=
1,209,217)">, </span><span style=3D"color:rgb(165,214,255)">&quot;off&quot;=
</span><span style=3D"color:rgb(201,209,217)">) </span><span style=3D"color=
:rgb(212,212,212)">=3D=3D=3D</span><span style=3D"color:rgb(201,209,217)"> =
</span><span style=3D"color:rgb(165,214,255)">&quot;on&quot;</span><span st=
yle=3D"color:rgb(201,209,217)">);</span></div><br><div><span style=3D"color=
:rgb(201,209,217)">=C2=A0 </span><span style=3D"color:rgb(197,134,192)">if<=
/span><span style=3D"color:rgb(201,209,217)"> (</span><span style=3D"color:=
rgb(210,168,255)">$</span><span style=3D"color:rgb(201,209,217)">(</span><s=
pan style=3D"color:rgb(165,214,255)">&quot;#currentYear&quot;</span><span s=
tyle=3D"color:rgb(201,209,217)">)) {</span></div><div><span style=3D"color:=
rgb(201,209,217)">=C2=A0 =C2=A0 </span><span style=3D"color:rgb(210,168,255=
)">$</span><span style=3D"color:rgb(201,209,217)">(</span><span style=3D"co=
lor:rgb(165,214,255)">&quot;#currentYear&quot;</span><span style=3D"color:r=
gb(201,209,217)">).textContent </span><span style=3D"color:rgb(212,212,212)=
">=3D</span><span style=3D"color:rgb(201,209,217)"> </span><span style=3D"c=
olor:rgb(86,156,214)">new</span><span style=3D"color:rgb(201,209,217)"> </s=
pan><span style=3D"color:rgb(210,168,255)">Date</span><span style=3D"color:=
rgb(201,209,217)">().</span><span style=3D"color:rgb(210,168,255)">getFullY=
ear</span><span style=3D"color:rgb(201,209,217)">();</span></div><div><span=
 style=3D"color:rgb(201,209,217)">=C2=A0 }</span></div><br><div><span style=
=3D"color:rgb(201,209,217)">=C2=A0 </span><span style=3D"color:rgb(139,148,=
158)">// Menu para celular.</span></div><div><span style=3D"color:rgb(201,2=
09,217)">=C2=A0 menuToggle?.</span><span style=3D"color:rgb(210,168,255)">a=
ddEventListener</span><span style=3D"color:rgb(201,209,217)">(</span><span =
style=3D"color:rgb(165,214,255)">&quot;click&quot;</span><span style=3D"col=
or:rgb(201,209,217)">, () </span><span style=3D"color:rgb(255,123,114)">=3D=
&gt;</span><span style=3D"color:rgb(201,209,217)"> {</span></div><div><span=
 style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 </span><span style=3D"color=
:rgb(197,134,192)">if</span><span style=3D"color:rgb(201,209,217)"> (</span=
><span style=3D"color:rgb(212,212,212)">!</span><span style=3D"color:rgb(20=
1,209,217)">mainNav) </span><span style=3D"color:rgb(197,134,192)">return</=
span><span style=3D"color:rgb(201,209,217)">;</span></div><br><div><span st=
yle=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 </span><span style=3D"color:rg=
b(255,123,114)">const</span><span style=3D"color:rgb(201,209,217)"> </span>=
<span style=3D"color:rgb(121,192,255)">isOpen</span><span style=3D"color:rg=
b(201,209,217)"> </span><span style=3D"color:rgb(212,212,212)">=3D</span><s=
pan style=3D"color:rgb(201,209,217)"> mainNav.classList.</span><span style=
=3D"color:rgb(210,168,255)">toggle</span><span style=3D"color:rgb(201,209,2=
17)">(</span><span style=3D"color:rgb(165,214,255)">&quot;is-open&quot;</sp=
an><span style=3D"color:rgb(201,209,217)">);</span></div><br><div><span sty=
le=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 menuToggle.</span><span style=
=3D"color:rgb(210,168,255)">setAttribute</span><span style=3D"color:rgb(201=
,209,217)">(</span><span style=3D"color:rgb(165,214,255)">&quot;aria-expand=
ed&quot;</span><span style=3D"color:rgb(201,209,217)">, </span><span style=
=3D"color:rgb(210,168,255)">String</span><span style=3D"color:rgb(201,209,2=
17)">(isOpen));</span></div><div><span style=3D"color:rgb(201,209,217)">=C2=
=A0 =C2=A0 menuToggle.</span><span style=3D"color:rgb(210,168,255)">setAttr=
ibute</span><span style=3D"color:rgb(201,209,217)">(</span></div><div><span=
 style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span style=
=3D"color:rgb(165,214,255)">&quot;aria-label&quot;</span><span style=3D"col=
or:rgb(201,209,217)">,</span></div><div><span style=3D"color:rgb(201,209,21=
7)">=C2=A0 =C2=A0 =C2=A0 isOpen</span></div><div><span style=3D"color:rgb(2=
01,209,217)">=C2=A0 =C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:rgb(21=
2,212,212)">?</span><span style=3D"color:rgb(201,209,217)"> translations[cu=
rrentLanguage].menuClose</span></div><div><span style=3D"color:rgb(201,209,=
217)">=C2=A0 =C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:rgb(212,212,2=
12)">:</span><span style=3D"color:rgb(201,209,217)"> translations[currentLa=
nguage].menuOpen</span></div><div><span style=3D"color:rgb(201,209,217)">=
=C2=A0 =C2=A0 );</span></div><div><span style=3D"color:rgb(201,209,217)">=
=C2=A0 });</span></div><br><div><span style=3D"color:rgb(201,209,217)">=C2=
=A0 </span><span style=3D"color:rgb(210,168,255)">$$</span><span style=3D"c=
olor:rgb(201,209,217)">(</span><span style=3D"color:rgb(165,214,255)">&quot=
;#mainNav a&quot;</span><span style=3D"color:rgb(201,209,217)">).</span><sp=
an style=3D"color:rgb(210,168,255)">forEach</span><span style=3D"color:rgb(=
201,209,217)">((</span><span style=3D"color:rgb(255,166,87)">link</span><sp=
an style=3D"color:rgb(201,209,217)">) </span><span style=3D"color:rgb(255,1=
23,114)">=3D&gt;</span><span style=3D"color:rgb(201,209,217)"> {</span></di=
v><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 link.</span><sp=
an style=3D"color:rgb(210,168,255)">addEventListener</span><span style=3D"c=
olor:rgb(201,209,217)">(</span><span style=3D"color:rgb(165,214,255)">&quot=
;click&quot;</span><span style=3D"color:rgb(201,209,217)">, closeMenu);</sp=
an></div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 });</span></div=
><br><div><span style=3D"color:rgb(201,209,217)">=C2=A0 </span><span style=
=3D"color:rgb(139,148,158)">// Fecha os pain=C3=A9is com Escape.</span></di=
v><div><span style=3D"color:rgb(201,209,217)">=C2=A0 document.</span><span =
style=3D"color:rgb(210,168,255)">addEventListener</span><span style=3D"colo=
r:rgb(201,209,217)">(</span><span style=3D"color:rgb(165,214,255)">&quot;ke=
ydown&quot;</span><span style=3D"color:rgb(201,209,217)">, (</span><span st=
yle=3D"color:rgb(255,166,87)">event</span><span style=3D"color:rgb(201,209,=
217)">) </span><span style=3D"color:rgb(255,123,114)">=3D&gt;</span><span s=
tyle=3D"color:rgb(201,209,217)"> {</span></div><div><span style=3D"color:rg=
b(201,209,217)">=C2=A0 =C2=A0 </span><span style=3D"color:rgb(197,134,192)"=
>if</span><span style=3D"color:rgb(201,209,217)"> (event.key </span><span s=
tyle=3D"color:rgb(212,212,212)">=3D=3D=3D</span><span style=3D"color:rgb(20=
1,209,217)"> </span><span style=3D"color:rgb(165,214,255)">&quot;Escape&quo=
t;</span><span style=3D"color:rgb(201,209,217)">) {</span></div><div><span =
style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D=
"color:rgb(210,168,255)">closeMenu</span><span style=3D"color:rgb(201,209,2=
17)">();</span></div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=
=A0 =C2=A0 </span><span style=3D"color:rgb(210,168,255)">closeAccessibility=
Panel</span><span style=3D"color:rgb(201,209,217)">();</span></div><div><sp=
an style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 }</span></div><div><span =
style=3D"color:rgb(201,209,217)">=C2=A0 });</span></div><br><div><span styl=
e=3D"color:rgb(201,209,217)">=C2=A0 </span><span style=3D"color:rgb(139,148=
,158)">// Painel de acessibilidade.</span></div><div><span style=3D"color:r=
gb(201,209,217)">=C2=A0 accessibilityToggle?.</span><span style=3D"color:rg=
b(210,168,255)">addEventListener</span><span style=3D"color:rgb(201,209,217=
)">(</span><span style=3D"color:rgb(165,214,255)">&quot;click&quot;</span><=
span style=3D"color:rgb(201,209,217)">, () </span><span style=3D"color:rgb(=
255,123,114)">=3D&gt;</span><span style=3D"color:rgb(201,209,217)"> {</span=
></div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 </span><sp=
an style=3D"color:rgb(197,134,192)">if</span><span style=3D"color:rgb(201,2=
09,217)"> (</span><span style=3D"color:rgb(212,212,212)">!</span><span styl=
e=3D"color:rgb(201,209,217)">accessibilityPanel) </span><span style=3D"colo=
r:rgb(197,134,192)">return</span><span style=3D"color:rgb(201,209,217)">;</=
span></div><br><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 </=
span><span style=3D"color:rgb(255,123,114)">const</span><span style=3D"colo=
r:rgb(201,209,217)"> </span><span style=3D"color:rgb(121,192,255)">willOpen=
</span><span style=3D"color:rgb(201,209,217)"> </span><span style=3D"color:=
rgb(212,212,212)">=3D</span><span style=3D"color:rgb(201,209,217)"> accessi=
bilityPanel.hidden;</span></div><div><span style=3D"color:rgb(201,209,217)"=
>=C2=A0 =C2=A0 accessibilityPanel.hidden </span><span style=3D"color:rgb(21=
2,212,212)">=3D</span><span style=3D"color:rgb(201,209,217)"> </span><span =
style=3D"color:rgb(212,212,212)">!</span><span style=3D"color:rgb(201,209,2=
17)">willOpen;</span></div><br><div><span style=3D"color:rgb(201,209,217)">=
=C2=A0 =C2=A0 accessibilityToggle.</span><span style=3D"color:rgb(210,168,2=
55)">setAttribute</span><span style=3D"color:rgb(201,209,217)">(</span><spa=
n style=3D"color:rgb(165,214,255)">&quot;aria-expanded&quot;</span><span st=
yle=3D"color:rgb(201,209,217)">, </span><span style=3D"color:rgb(210,168,25=
5)">String</span><span style=3D"color:rgb(201,209,217)">(willOpen));</span>=
</div><br><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 </span>=
<span style=3D"color:rgb(197,134,192)">if</span><span style=3D"color:rgb(20=
1,209,217)"> (willOpen) accessibilityClose?.</span><span style=3D"color:rgb=
(210,168,255)">focus</span><span style=3D"color:rgb(201,209,217)">();</span=
></div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 });</span></div><=
br><div><span style=3D"color:rgb(201,209,217)">=C2=A0 accessibilityClose?.<=
/span><span style=3D"color:rgb(210,168,255)">addEventListener</span><span s=
tyle=3D"color:rgb(201,209,217)">(</span><span style=3D"color:rgb(165,214,25=
5)">&quot;click&quot;</span><span style=3D"color:rgb(201,209,217)">, () </s=
pan><span style=3D"color:rgb(255,123,114)">=3D&gt;</span><span style=3D"col=
or:rgb(201,209,217)"> {</span></div><div><span style=3D"color:rgb(201,209,2=
17)">=C2=A0 =C2=A0 </span><span style=3D"color:rgb(210,168,255)">closeAcces=
sibilityPanel</span><span style=3D"color:rgb(201,209,217)">();</span></div>=
<div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 accessibilityTogg=
le?.</span><span style=3D"color:rgb(210,168,255)">focus</span><span style=
=3D"color:rgb(201,209,217)">();</span></div><div><span style=3D"color:rgb(2=
01,209,217)">=C2=A0 });</span></div><br><div><span style=3D"color:rgb(201,2=
09,217)">=C2=A0 document.</span><span style=3D"color:rgb(210,168,255)">addE=
ventListener</span><span style=3D"color:rgb(201,209,217)">(</span><span sty=
le=3D"color:rgb(165,214,255)">&quot;click&quot;</span><span style=3D"color:=
rgb(201,209,217)">, (</span><span style=3D"color:rgb(255,166,87)">event</sp=
an><span style=3D"color:rgb(201,209,217)">) </span><span style=3D"color:rgb=
(255,123,114)">=3D&gt;</span><span style=3D"color:rgb(201,209,217)"> {</spa=
n></div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 </span><s=
pan style=3D"color:rgb(197,134,192)">if</span><span style=3D"color:rgb(201,=
209,217)"> (</span></div><div><span style=3D"color:rgb(201,209,217)">=C2=A0=
 =C2=A0 =C2=A0 accessibilityPanel </span><span style=3D"color:rgb(212,212,2=
12)">&amp;&amp;</span></div><div><span style=3D"color:rgb(201,209,217)">=C2=
=A0 =C2=A0 =C2=A0 </span><span style=3D"color:rgb(212,212,212)">!</span><sp=
an style=3D"color:rgb(201,209,217)">accessibilityPanel.hidden </span><span =
style=3D"color:rgb(212,212,212)">&amp;&amp;</span></div><div><span style=3D=
"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:r=
gb(212,212,212)">!</span><span style=3D"color:rgb(201,209,217)">accessibili=
tyPanel.</span><span style=3D"color:rgb(210,168,255)">contains</span><span =
style=3D"color:rgb(201,209,217)">(event.target) </span><span style=3D"color=
:rgb(212,212,212)">&amp;&amp;</span></div><div><span style=3D"color:rgb(201=
,209,217)">=C2=A0 =C2=A0 =C2=A0 accessibilityToggle </span><span style=3D"c=
olor:rgb(212,212,212)">&amp;&amp;</span></div><div><span style=3D"color:rgb=
(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:rgb(212,212=
,212)">!</span><span style=3D"color:rgb(201,209,217)">accessibilityToggle.<=
/span><span style=3D"color:rgb(210,168,255)">contains</span><span style=3D"=
color:rgb(201,209,217)">(event.target)</span></div><div><span style=3D"colo=
r:rgb(201,209,217)">=C2=A0 =C2=A0 ) {</span></div><div><span style=3D"color=
:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:rgb(210=
,168,255)">closeAccessibilityPanel</span><span style=3D"color:rgb(201,209,2=
17)">();</span></div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=
=A0 }</span></div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 });</s=
pan></div><br><div><span style=3D"color:rgb(201,209,217)">=C2=A0 </span><sp=
an style=3D"color:rgb(139,148,158)">// Troca de idioma.</span></div><div><s=
pan style=3D"color:rgb(201,209,217)">=C2=A0 </span><span style=3D"color:rgb=
(121,192,255)">languageSelect</span><span style=3D"color:rgb(201,209,217)">=
?.</span><span style=3D"color:rgb(210,168,255)">addEventListener</span><spa=
n style=3D"color:rgb(201,209,217)">(</span><span style=3D"color:rgb(165,214=
,255)">&quot;change&quot;</span><span style=3D"color:rgb(201,209,217)">, ()=
 </span><span style=3D"color:rgb(255,123,114)">=3D&gt;</span><span style=3D=
"color:rgb(201,209,217)"> {</span></div><div><span style=3D"color:rgb(201,2=
09,217)">=C2=A0 =C2=A0 </span><span style=3D"color:rgb(210,168,255)">applyL=
anguage</span><span style=3D"color:rgb(201,209,217)">(</span><span style=3D=
"color:rgb(121,192,255)">languageSelect</span><span style=3D"color:rgb(201,=
209,217)">.value);</span></div><div><span style=3D"color:rgb(201,209,217)">=
=C2=A0 });</span></div><br><div><span style=3D"color:rgb(201,209,217)">=C2=
=A0 </span><span style=3D"color:rgb(139,148,158)">// Tema claro ou escuro.<=
/span></div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 </span><span=
 style=3D"color:rgb(121,192,255)">themeSelect</span><span style=3D"color:rg=
b(201,209,217)">?.</span><span style=3D"color:rgb(210,168,255)">addEventLis=
tener</span><span style=3D"color:rgb(201,209,217)">(</span><span style=3D"c=
olor:rgb(165,214,255)">&quot;change&quot;</span><span style=3D"color:rgb(20=
1,209,217)">, () </span><span style=3D"color:rgb(255,123,114)">=3D&gt;</spa=
n><span style=3D"color:rgb(201,209,217)"> {</span></div><div><span style=3D=
"color:rgb(201,209,217)">=C2=A0 =C2=A0 </span><span style=3D"color:rgb(210,=
168,255)">applyTheme</span><span style=3D"color:rgb(201,209,217)">(</span><=
span style=3D"color:rgb(121,192,255)">themeSelect</span><span style=3D"colo=
r:rgb(201,209,217)">.value);</span></div><div><span style=3D"color:rgb(201,=
209,217)">=C2=A0 });</span></div><br><div><span style=3D"color:rgb(201,209,=
217)">=C2=A0 </span><span style=3D"color:rgb(139,148,158)">// Tamanho do te=
xto.</span></div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 </span>=
<span style=3D"color:rgb(210,168,255)">$</span><span style=3D"color:rgb(201=
,209,217)">(</span><span style=3D"color:rgb(165,214,255)">&quot;#fontIncrea=
se&quot;</span><span style=3D"color:rgb(201,209,217)">)?.</span><span style=
=3D"color:rgb(210,168,255)">addEventListener</span><span style=3D"color:rgb=
(201,209,217)">(</span><span style=3D"color:rgb(165,214,255)">&quot;click&q=
uot;</span><span style=3D"color:rgb(201,209,217)">, () </span><span style=
=3D"color:rgb(255,123,114)">=3D&gt;</span><span style=3D"color:rgb(201,209,=
217)"> {</span></div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=
=A0 </span><span style=3D"color:rgb(210,168,255)">applyFontSize</span><span=
 style=3D"color:rgb(201,209,217)">(</span><span style=3D"color:rgb(201,209,=
217)">fontSize</span><span style=3D"color:rgb(201,209,217)"> </span><span s=
tyle=3D"color:rgb(212,212,212)">+</span><span style=3D"color:rgb(201,209,21=
7)"> </span><span style=3D"color:rgb(181,206,168)">1</span><span style=3D"c=
olor:rgb(201,209,217)">);</span></div><div><span style=3D"color:rgb(201,209=
,217)">=C2=A0 });</span></div><br><div><span style=3D"color:rgb(201,209,217=
)">=C2=A0 </span><span style=3D"color:rgb(210,168,255)">$</span><span style=
=3D"color:rgb(201,209,217)">(</span><span style=3D"color:rgb(165,214,255)">=
&quot;#fontDecrease&quot;</span><span style=3D"color:rgb(201,209,217)">)?.<=
/span><span style=3D"color:rgb(210,168,255)">addEventListener</span><span s=
tyle=3D"color:rgb(201,209,217)">(</span><span style=3D"color:rgb(165,214,25=
5)">&quot;click&quot;</span><span style=3D"color:rgb(201,209,217)">, () </s=
pan><span style=3D"color:rgb(255,123,114)">=3D&gt;</span><span style=3D"col=
or:rgb(201,209,217)"> {</span></div><div><span style=3D"color:rgb(201,209,2=
17)">=C2=A0 =C2=A0 </span><span style=3D"color:rgb(210,168,255)">applyFontS=
ize</span><span style=3D"color:rgb(201,209,217)">(</span><span style=3D"col=
or:rgb(201,209,217)">fontSize</span><span style=3D"color:rgb(201,209,217)">=
 </span><span style=3D"color:rgb(212,212,212)">-</span><span style=3D"color=
:rgb(201,209,217)"> </span><span style=3D"color:rgb(181,206,168)">1</span><=
span style=3D"color:rgb(201,209,217)">);</span></div><div><span style=3D"co=
lor:rgb(201,209,217)">=C2=A0 });</span></div><br><div><span style=3D"color:=
rgb(201,209,217)">=C2=A0 </span><span style=3D"color:rgb(210,168,255)">$</s=
pan><span style=3D"color:rgb(201,209,217)">(</span><span style=3D"color:rgb=
(165,214,255)">&quot;#fontReset&quot;</span><span style=3D"color:rgb(201,20=
9,217)">)?.</span><span style=3D"color:rgb(210,168,255)">addEventListener</=
span><span style=3D"color:rgb(201,209,217)">(</span><span style=3D"color:rg=
b(165,214,255)">&quot;click&quot;</span><span style=3D"color:rgb(201,209,21=
7)">, () </span><span style=3D"color:rgb(255,123,114)">=3D&gt;</span><span =
style=3D"color:rgb(201,209,217)"> {</span></div><div><span style=3D"color:r=
gb(201,209,217)">=C2=A0 =C2=A0 </span><span style=3D"color:rgb(210,168,255)=
">applyFontSize</span><span style=3D"color:rgb(201,209,217)">(</span><span =
style=3D"color:rgb(181,206,168)">16</span><span style=3D"color:rgb(201,209,=
217)">);</span></div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 });=
</span></div><br><div><span style=3D"color:rgb(201,209,217)">=C2=A0 </span>=
<span style=3D"color:rgb(139,148,158)">// Alto contraste.</span></div><div>=
<span style=3D"color:rgb(201,209,217)">=C2=A0 </span><span style=3D"color:r=
gb(121,192,255)">contrastToggle</span><span style=3D"color:rgb(201,209,217)=
">?.</span><span style=3D"color:rgb(210,168,255)">addEventListener</span><s=
pan style=3D"color:rgb(201,209,217)">(</span><span style=3D"color:rgb(165,2=
14,255)">&quot;change&quot;</span><span style=3D"color:rgb(201,209,217)">, =
() </span><span style=3D"color:rgb(255,123,114)">=3D&gt;</span><span style=
=3D"color:rgb(201,209,217)"> {</span></div><div><span style=3D"color:rgb(20=
1,209,217)">=C2=A0 =C2=A0 </span><span style=3D"color:rgb(210,168,255)">app=
lyContrast</span><span style=3D"color:rgb(201,209,217)">(</span><span style=
=3D"color:rgb(121,192,255)">contrastToggle</span><span style=3D"color:rgb(2=
01,209,217)">.checked);</span></div><div><span style=3D"color:rgb(201,209,2=
17)">=C2=A0 });</span></div><br><div><span style=3D"color:rgb(201,209,217)"=
>=C2=A0 </span><span style=3D"color:rgb(139,148,158)">// Leitura em voz alt=
a.</span></div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 </span><s=
pan style=3D"color:rgb(121,192,255)">speechToggle</span><span style=3D"colo=
r:rgb(201,209,217)">?.</span><span style=3D"color:rgb(210,168,255)">addEven=
tListener</span><span style=3D"color:rgb(201,209,217)">(</span><span style=
=3D"color:rgb(165,214,255)">&quot;change&quot;</span><span style=3D"color:r=
gb(201,209,217)">, () </span><span style=3D"color:rgb(255,123,114)">=3D&gt;=
</span><span style=3D"color:rgb(201,209,217)"> {</span></div><div><span sty=
le=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 </span><span style=3D"color:rgb=
(197,134,192)">if</span><span style=3D"color:rgb(201,209,217)"> (</span><sp=
an style=3D"color:rgb(121,192,255)">speechToggle</span><span style=3D"color=
:rgb(201,209,217)">.checked) {</span></div><div><span style=3D"color:rgb(20=
1,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"color:rgb(210,168,25=
5)">speakPage</span><span style=3D"color:rgb(201,209,217)">();</span></div>=
<div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 } </span><span st=
yle=3D"color:rgb(197,134,192)">else</span><span style=3D"color:rgb(201,209,=
217)"> </span><span style=3D"color:rgb(197,134,192)">if</span><span style=
=3D"color:rgb(201,209,217)"> (</span><span style=3D"color:rgb(165,214,255)"=
>&quot;speechSynthesis&quot;</span><span style=3D"color:rgb(201,209,217)"> =
</span><span style=3D"color:rgb(86,156,214)">in</span><span style=3D"color:=
rgb(201,209,217)"> </span><span style=3D"color:rgb(121,192,255)">window</sp=
an><span style=3D"color:rgb(201,209,217)">) {</span></div><div><span style=
=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span style=3D"colo=
r:rgb(121,192,255)">window</span><span style=3D"color:rgb(201,209,217)">.</=
span><span style=3D"color:rgb(121,192,255)">speechSynthesis</span><span sty=
le=3D"color:rgb(201,209,217)">.</span><span style=3D"color:rgb(210,168,255)=
">cancel</span><span style=3D"color:rgb(201,209,217)">();</span></div><div>=
<span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 }</span></div><div><sp=
an style=3D"color:rgb(201,209,217)">=C2=A0 });</span></div><br><div><span s=
tyle=3D"color:rgb(201,209,217)">=C2=A0 </span><span style=3D"color:rgb(139,=
148,158)">// Interrompe a leitura ao sair da p=C3=A1gina.</span></div><div>=
<span style=3D"color:rgb(201,209,217)">=C2=A0 </span><span style=3D"color:r=
gb(121,192,255)">window</span><span style=3D"color:rgb(201,209,217)">.</spa=
n><span style=3D"color:rgb(210,168,255)">addEventListener</span><span style=
=3D"color:rgb(201,209,217)">(</span><span style=3D"color:rgb(165,214,255)">=
&quot;pagehide&quot;</span><span style=3D"color:rgb(201,209,217)">, () </sp=
an><span style=3D"color:rgb(255,123,114)">=3D&gt;</span><span style=3D"colo=
r:rgb(201,209,217)"> {</span></div><div><span style=3D"color:rgb(201,209,21=
7)">=C2=A0 =C2=A0 </span><span style=3D"color:rgb(197,134,192)">if</span><s=
pan style=3D"color:rgb(201,209,217)"> (</span><span style=3D"color:rgb(165,=
214,255)">&quot;speechSynthesis&quot;</span><span style=3D"color:rgb(201,20=
9,217)"> </span><span style=3D"color:rgb(86,156,214)">in</span><span style=
=3D"color:rgb(201,209,217)"> </span><span style=3D"color:rgb(121,192,255)">=
window</span><span style=3D"color:rgb(201,209,217)">) {</span></div><div><s=
pan style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 =C2=A0 </span><span styl=
e=3D"color:rgb(121,192,255)">window</span><span style=3D"color:rgb(201,209,=
217)">.</span><span style=3D"color:rgb(121,192,255)">speechSynthesis</span>=
<span style=3D"color:rgb(201,209,217)">.</span><span style=3D"color:rgb(210=
,168,255)">cancel</span><span style=3D"color:rgb(201,209,217)">();</span></=
div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 }</span></div=
><div><span style=3D"color:rgb(201,209,217)">=C2=A0 });</span></div><div><s=
pan style=3D"color:rgb(201,209,217)">}</span>);</div><br><div><span style=
=3D"color:rgb(139,148,158)">/* =3D=3D=3D=3D=3D=3D=3D=3D=3D=3D=3D=3D=3D=3D=
=3D=3D=3D=3D=3D=3D=3D=3D=3D=3D=3D=3D=3D=3D=3D=3D=3D=3D=3D=3D=3D=3D=3D</span=
></div><div><span style=3D"color:rgb(139,148,158)">=C2=A0 =C2=A0LIA =E2=80=
=94 BOAS-VINDAS E PRIMEIRO ACESSO</span></div><div><span style=3D"color:rgb=
(139,148,158)">=C2=A0 =C2=A0=3D=3D=3D=3D=3D=3D=3D=3D=3D=3D=3D=3D=3D=3D=3D=
=3D=3D=3D=3D=3D=3D=3D=3D=3D=3D=3D=3D=3D=3D=3D=3D=3D=3D=3D=3D=3D=3D */</span=
></div><br><div><span style=3D"color:rgb(121,192,255)">document</span>.<spa=
n style=3D"color:rgb(210,168,255)">addEventListener</span>(<span style=3D"c=
olor:rgb(165,214,255)">&quot;DOMContentLoaded&quot;</span>, <span style=3D"=
color:rgb(255,123,114)">function</span> () <span style=3D"color:rgb(201,209=
,217)">{</span></div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 </s=
pan><span style=3D"color:rgb(255,123,114)">const</span><span style=3D"color=
:rgb(201,209,217)"> </span><span style=3D"color:rgb(121,192,255)">screen</s=
pan><span style=3D"color:rgb(201,209,217)"> </span><span style=3D"color:rgb=
(212,212,212)">=3D</span><span style=3D"color:rgb(201,209,217)"> </span><sp=
an style=3D"color:rgb(121,192,255)">document</span><span style=3D"color:rgb=
(201,209,217)">.</span><span style=3D"color:rgb(210,168,255)">getElementByI=
d</span><span style=3D"color:rgb(201,209,217)">(</span><span style=3D"color=
:rgb(165,214,255)">&quot;welcomeScreen&quot;</span><span style=3D"color:rgb=
(201,209,217)">);</span></div><div><span style=3D"color:rgb(201,209,217)">=
=C2=A0 </span><span style=3D"color:rgb(255,123,114)">const</span><span styl=
e=3D"color:rgb(201,209,217)"> </span><span style=3D"color:rgb(121,192,255)"=
>continueButton</span><span style=3D"color:rgb(201,209,217)"> </span><span =
style=3D"color:rgb(212,212,212)">=3D</span><span style=3D"color:rgb(201,209=
,217)"> </span><span style=3D"color:rgb(121,192,255)">document</span><span =
style=3D"color:rgb(201,209,217)">.</span><span style=3D"color:rgb(210,168,2=
55)">getElementById</span><span style=3D"color:rgb(201,209,217)">(</span><s=
pan style=3D"color:rgb(165,214,255)">&quot;welcomeContinue&quot;</span><spa=
n style=3D"color:rgb(201,209,217)">);</span></div><div><span style=3D"color=
:rgb(201,209,217)">=C2=A0 </span><span style=3D"color:rgb(255,123,114)">con=
st</span><span style=3D"color:rgb(201,209,217)"> </span><span style=3D"colo=
r:rgb(121,192,255)">phrase</span><span style=3D"color:rgb(201,209,217)"> </=
span><span style=3D"color:rgb(212,212,212)">=3D</span><span style=3D"color:=
rgb(201,209,217)"> </span><span style=3D"color:rgb(121,192,255)">document</=
span><span style=3D"color:rgb(201,209,217)">.</span><span style=3D"color:rg=
b(210,168,255)">getElementById</span><span style=3D"color:rgb(201,209,217)"=
>(</span><span style=3D"color:rgb(165,214,255)">&quot;welcomePhrase&quot;</=
span><span style=3D"color:rgb(201,209,217)">);</span></div><br><div><span s=
tyle=3D"color:rgb(201,209,217)">=C2=A0 </span><span style=3D"color:rgb(139,=
148,158)">// S=C3=B3 funciona na p=C3=A1gina que cont=C3=A9m a tela de boas=
-vindas.</span></div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 </s=
pan><span style=3D"color:rgb(197,134,192)">if</span><span style=3D"color:rg=
b(201,209,217)"> (</span><span style=3D"color:rgb(212,212,212)">!</span><sp=
an style=3D"color:rgb(121,192,255)">screen</span><span style=3D"color:rgb(2=
01,209,217)"> </span><span style=3D"color:rgb(212,212,212)">||</span><span =
style=3D"color:rgb(201,209,217)"> </span><span style=3D"color:rgb(212,212,2=
12)">!</span><span style=3D"color:rgb(121,192,255)">continueButton</span><s=
pan style=3D"color:rgb(201,209,217)">) </span><span style=3D"color:rgb(197,=
134,192)">return</span><span style=3D"color:rgb(201,209,217)">;</span></div=
><br><div><span style=3D"color:rgb(201,209,217)">=C2=A0 </span><span style=
=3D"color:rgb(255,123,114)">const</span><span style=3D"color:rgb(201,209,21=
7)"> </span><span style=3D"color:rgb(121,192,255)">accountCreated</span><sp=
an style=3D"color:rgb(201,209,217)"> </span><span style=3D"color:rgb(212,21=
2,212)">=3D</span><span style=3D"color:rgb(201,209,217)"> </span><span styl=
e=3D"color:rgb(121,192,255)">localStorage</span><span style=3D"color:rgb(20=
1,209,217)">.</span><span style=3D"color:rgb(210,168,255)">getItem</span><s=
pan style=3D"color:rgb(201,209,217)">(</span><span style=3D"color:rgb(165,2=
14,255)">&quot;lia-account-created&quot;</span><span style=3D"color:rgb(201=
,209,217)">);</span></div><div><span style=3D"color:rgb(201,209,217)">=C2=
=A0 </span><span style=3D"color:rgb(255,123,114)">const</span><span style=
=3D"color:rgb(201,209,217)"> </span><span style=3D"color:rgb(121,192,255)">=
dismissedThisVisit</span><span style=3D"color:rgb(201,209,217)"> </span><sp=
an style=3D"color:rgb(212,212,212)">=3D</span><span style=3D"color:rgb(201,=
209,217)"> </span><span style=3D"color:rgb(121,192,255)">sessionStorage</sp=
an><span style=3D"color:rgb(201,209,217)">.</span><span style=3D"color:rgb(=
210,168,255)">getItem</span><span style=3D"color:rgb(201,209,217)">(</span>=
<span style=3D"color:rgb(165,214,255)">&quot;lia-welcome-dismissed&quot;</s=
pan><span style=3D"color:rgb(201,209,217)">);</span></div><br><div><span st=
yle=3D"color:rgb(201,209,217)">=C2=A0 </span><span style=3D"color:rgb(139,1=
48,158)">// Depois do cadastro, n=C3=A3o mostra mais a tela inicial.</span>=
</div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 </span><span style=
=3D"color:rgb(197,134,192)">if</span><span style=3D"color:rgb(201,209,217)"=
> (</span><span style=3D"color:rgb(121,192,255)">accountCreated</span><span=
 style=3D"color:rgb(201,209,217)"> </span><span style=3D"color:rgb(212,212,=
212)">=3D=3D=3D</span><span style=3D"color:rgb(201,209,217)"> </span><span =
style=3D"color:rgb(165,214,255)">&quot;true&quot;</span><span style=3D"colo=
r:rgb(201,209,217)"> </span><span style=3D"color:rgb(212,212,212)">||</span=
><span style=3D"color:rgb(201,209,217)"> </span><span style=3D"color:rgb(12=
1,192,255)">dismissedThisVisit</span><span style=3D"color:rgb(201,209,217)"=
> </span><span style=3D"color:rgb(212,212,212)">=3D=3D=3D</span><span style=
=3D"color:rgb(201,209,217)"> </span><span style=3D"color:rgb(165,214,255)">=
&quot;true&quot;</span><span style=3D"color:rgb(201,209,217)">) {</span></d=
iv><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 </span><span s=
tyle=3D"color:rgb(121,192,255)">screen</span><span style=3D"color:rgb(201,2=
09,217)">.</span><span style=3D"color:rgb(121,192,255)">hidden</span><span =
style=3D"color:rgb(201,209,217)"> </span><span style=3D"color:rgb(212,212,2=
12)">=3D</span><span style=3D"color:rgb(201,209,217)"> </span><span style=
=3D"color:rgb(86,156,214)">true</span><span style=3D"color:rgb(201,209,217)=
">;</span></div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=A0 <=
/span><span style=3D"color:rgb(197,134,192)">return</span><span style=3D"co=
lor:rgb(201,209,217)">;</span></div><div><span style=3D"color:rgb(201,209,2=
17)">=C2=A0 }</span></div><br><div><span style=3D"color:rgb(201,209,217)">=
=C2=A0 </span><span style=3D"color:rgb(139,148,158)">// Frases acolhedoras =
que mudam a cada visita.</span></div><div><span style=3D"color:rgb(201,209,=
217)">=C2=A0 </span><span style=3D"color:rgb(255,123,114)">const</span><spa=
n style=3D"color:rgb(201,209,217)"> </span><span style=3D"color:rgb(121,192=
,255)">phrases</span><span style=3D"color:rgb(201,209,217)"> </span><span s=
tyle=3D"color:rgb(212,212,212)">=3D</span><span style=3D"color:rgb(201,209,=
217)"> [</span></div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=
=A0 </span><span style=3D"color:rgb(165,214,255)">&quot;Voc=C3=AA n=C3=A3o =
precisa ter todas as respostas hoje.&quot;</span><span style=3D"color:rgb(2=
01,209,217)">,</span></div><div><span style=3D"color:rgb(201,209,217)">=C2=
=A0 =C2=A0 </span><span style=3D"color:rgb(165,214,255)">&quot;Sua voz impo=
rta. Seus sentimentos importam.&quot;</span><span style=3D"color:rgb(201,20=
9,217)">,</span></div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =
=C2=A0 </span><span style=3D"color:rgb(165,214,255)">&quot;Voc=C3=AA merece=
 respeito, seguran=C3=A7a e tranquilidade.&quot;</span><span style=3D"color=
:rgb(201,209,217)">,</span></div><div><span style=3D"color:rgb(201,209,217)=
">=C2=A0 =C2=A0 </span><span style=3D"color:rgb(165,214,255)">&quot;Pedir a=
juda n=C3=A3o =C3=A9 fraqueza. Voc=C3=AA merece acolhimento.&quot;</span><s=
pan style=3D"color:rgb(201,209,217)">,</span></div><div><span style=3D"colo=
r:rgb(201,209,217)">=C2=A0 =C2=A0 </span><span style=3D"color:rgb(165,214,2=
55)">&quot;Um pequeno passo tamb=C3=A9m =C3=A9 um come=C3=A7o.&quot;</span>=
<span style=3D"color:rgb(201,209,217)">,</span></div><div><span style=3D"co=
lor:rgb(201,209,217)">=C2=A0 =C2=A0 </span><span style=3D"color:rgb(165,214=
,255)">&quot;Voc=C3=AA merece ser tratada com carinho e respeito.&quot;</sp=
an></div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 ];</span></div>=
<br><div><span style=3D"color:rgb(201,209,217)">=C2=A0 </span><span style=
=3D"color:rgb(197,134,192)">if</span><span style=3D"color:rgb(201,209,217)"=
> (</span><span style=3D"color:rgb(121,192,255)">phrase</span><span style=
=3D"color:rgb(201,209,217)">) {</span></div><div><span style=3D"color:rgb(2=
01,209,217)">=C2=A0 =C2=A0 </span><span style=3D"color:rgb(255,123,114)">co=
nst</span><span style=3D"color:rgb(201,209,217)"> </span><span style=3D"col=
or:rgb(121,192,255)">index</span><span style=3D"color:rgb(201,209,217)"> </=
span><span style=3D"color:rgb(212,212,212)">=3D</span><span style=3D"color:=
rgb(201,209,217)"> </span><span style=3D"color:rgb(121,192,255)">Math</span=
><span style=3D"color:rgb(201,209,217)">.</span><span style=3D"color:rgb(21=
0,168,255)">floor</span><span style=3D"color:rgb(201,209,217)">(</span><spa=
n style=3D"color:rgb(121,192,255)">Math</span><span style=3D"color:rgb(201,=
209,217)">.</span><span style=3D"color:rgb(210,168,255)">random</span><span=
 style=3D"color:rgb(201,209,217)">() </span><span style=3D"color:rgb(212,21=
2,212)">*</span><span style=3D"color:rgb(201,209,217)"> </span><span style=
=3D"color:rgb(121,192,255)">phrases</span><span style=3D"color:rgb(201,209,=
217)">.</span><span style=3D"color:rgb(121,192,255)">length</span><span sty=
le=3D"color:rgb(201,209,217)">);</span></div><div><span style=3D"color:rgb(=
201,209,217)">=C2=A0 =C2=A0 </span><span style=3D"color:rgb(121,192,255)">p=
hrase</span><span style=3D"color:rgb(201,209,217)">.</span><span style=3D"c=
olor:rgb(121,192,255)">textContent</span><span style=3D"color:rgb(201,209,2=
17)"> </span><span style=3D"color:rgb(212,212,212)">=3D</span><span style=
=3D"color:rgb(201,209,217)"> </span><span style=3D"color:rgb(121,192,255)">=
phrases</span><span style=3D"color:rgb(201,209,217)">[</span><span style=3D=
"color:rgb(121,192,255)">index</span><span style=3D"color:rgb(201,209,217)"=
>];</span></div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 }</span>=
</div><br><div><span style=3D"color:rgb(201,209,217)">=C2=A0 </span><span s=
tyle=3D"color:rgb(121,192,255)">screen</span><span style=3D"color:rgb(201,2=
09,217)">.</span><span style=3D"color:rgb(121,192,255)">hidden</span><span =
style=3D"color:rgb(201,209,217)"> </span><span style=3D"color:rgb(212,212,2=
12)">=3D</span><span style=3D"color:rgb(201,209,217)"> </span><span style=
=3D"color:rgb(86,156,214)">false</span><span style=3D"color:rgb(201,209,217=
)">;</span></div><br><div><span style=3D"color:rgb(201,209,217)">=C2=A0 </s=
pan><span style=3D"color:rgb(139,148,158)">// Permite conhecer o site sem c=
riar uma conta.</span></div><div><span style=3D"color:rgb(201,209,217)">=C2=
=A0 </span><span style=3D"color:rgb(139,148,158)">// A tela pode aparecer n=
ovamente em uma pr=C3=B3xima visita.</span></div><div><span style=3D"color:=
rgb(201,209,217)">=C2=A0 </span><span style=3D"color:rgb(121,192,255)">cont=
inueButton</span><span style=3D"color:rgb(201,209,217)">.</span><span style=
=3D"color:rgb(210,168,255)">addEventListener</span><span style=3D"color:rgb=
(201,209,217)">(</span><span style=3D"color:rgb(165,214,255)">&quot;click&q=
uot;</span><span style=3D"color:rgb(201,209,217)">, </span><span style=3D"c=
olor:rgb(255,123,114)">function</span><span style=3D"color:rgb(201,209,217)=
"> () {</span></div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 =C2=
=A0 </span><span style=3D"color:rgb(121,192,255)">screen</span><span style=
=3D"color:rgb(201,209,217)">.</span><span style=3D"color:rgb(121,192,255)">=
hidden</span><span style=3D"color:rgb(201,209,217)"> </span><span style=3D"=
color:rgb(212,212,212)">=3D</span><span style=3D"color:rgb(201,209,217)"> <=
/span><span style=3D"color:rgb(86,156,214)">true</span><span style=3D"color=
:rgb(201,209,217)">;</span></div><div><span style=3D"color:rgb(201,209,217)=
">=C2=A0 =C2=A0 </span><span style=3D"color:rgb(121,192,255)">sessionStorag=
e</span><span style=3D"color:rgb(201,209,217)">.</span><span style=3D"color=
:rgb(210,168,255)">setItem</span><span style=3D"color:rgb(201,209,217)">(</=
span><span style=3D"color:rgb(165,214,255)">&quot;lia-welcome-dismissed&quo=
t;</span><span style=3D"color:rgb(201,209,217)">, </span><span style=3D"col=
or:rgb(165,214,255)">&quot;true&quot;</span><span style=3D"color:rgb(201,20=
9,217)">);</span></div><div><span style=3D"color:rgb(201,209,217)">=C2=A0 }=
);</span></div><div><span style=3D"color:rgb(201,209,217)">}</span>);</div>=
<br></div></div>

--00000000000009d134065f146864--