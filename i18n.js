const translations = {
  en: {
    title: "Software Engineer & Technical Leader",
    heroText:
      "I build and lead real-world software solutions that solve complex business problems, with strong focus on maintainability, scalability, and long-term impact.",

    githubBtn: "GitHub",
    featuredBtn: "Featured Project",

    aboutTitle: "About Me",
    aboutP1:
      "I am a software engineer and technical leader with strong experience in enterprise systems and business-critical applications.",
    aboutP2:
      "I have worked on systems that support financial decisions, operational control, and long-term product evolution, translating complex business requirements into reliable and maintainable software solutions.",
    aboutP3:
      "My focus is on providing clear technical direction while building systems that deliver measurable business value.",

    featuredTitle: "Featured Project",
    projectP1:
      "A web-based system actively used by a real law firm to track lawyers' working hours, support accurate client billing, and provide full visibility into how the firm's time and resources are allocated.",
    projectP2:
      "The system helps identify profitability issues, supports monthly billing processes, and enables data-driven decisions regarding fixed-fee and hourly-based clients.",
    projectP3:
      "Built with ASP.NET MVC, SQL Server, and hosted on Microsoft Azure, focusing on long-term maintainability and real production needs.",

    viewRepo: "View Repository",

    screenshotsTitle: "System Screenshots",
    shot1:
      "Dashboard providing visibility into time allocation and productivity",
    shot2:
      "Time tracking per lawyer, client, and activity",
    shot3:
      "Reports supporting accurate billing and financial decisions",

    techTitle: "Technologies & Focus",
    techFocus:
      "Focus areas include business-driven development, maintainable architectures, cloud-based solutions, and systems designed for real production environments."
  },

  pt: {
    title: "Engenheiro de Software & Líder Técnico",
    heroText:
      "Desenvolvo e lidero soluções de software reais para resolver problemas complexos de negócio, com forte foco em manutenibilidade, escalabilidade e impacto de longo prazo.",

    githubBtn: "GitHub",
    featuredBtn: "Projeto em Destaque",

    aboutTitle: "Sobre Mim",
    aboutP1:
      "Sou engenheiro de software e líder técnico com forte experiência em sistemas corporativos e aplicações críticas para o negócio.",
    aboutP2:
      "Atuei em sistemas que suportam decisões financeiras, controle operacional e evolução de produtos no longo prazo, traduzindo requisitos complexos de negócio em soluções confiáveis e manuteníveis.",
    aboutP3:
      "Meu foco é fornecer direcionamento técnico claro enquanto construo sistemas que entregam valor real ao negócio.",

    featuredTitle: "Projeto em Destaque",
    projectP1:
      "Sistema web utilizado em produção por um escritório de advocacia para registrar horas de trabalho, apoiar a cobrança precisa de clientes e oferecer visibilidade total sobre o uso do tempo e recursos.",
    projectP2:
      "O sistema ajuda a identificar problemas de rentabilidade, apoia o fechamento mensal e permite decisões orientadas por dados sobre clientes mensalistas e por hora.",
    projectP3:
      "Desenvolvido com ASP.NET MVC, SQL Server e hospedado no Microsoft Azure, com foco em manutenibilidade de longo prazo e necessidades reais de produção.",

    viewRepo: "Ver Repositório",

    screenshotsTitle: "Capturas do Sistema",
    shot1:
      "Dashboard com visibilidade sobre alocação de tempo e produtividade",
    shot2:
      "Registro de horas por advogado, cliente e atividade",
    shot3:
      "Relatórios que suportam cobrança precisa e decisões financeiras",

    techTitle: "Tecnologias & Foco",
    techFocus:
      "Áreas de foco incluem desenvolvimento orientado ao negócio, arquiteturas manuteníveis, soluções em nuvem e sistemas projetados para ambientes reais de produção."
  }
};

function setLanguage(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");

    // ✅ Fallback seguro
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  localStorage.setItem("lang", lang);
  document.documentElement.lang = lang;
}

document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("lang");
  const defaultLang = savedLang && translations[savedLang] ? savedLang : "en";
  setLanguage(defaultLang);
});
