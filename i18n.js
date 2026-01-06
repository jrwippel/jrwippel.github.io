const translations = {
  en: {
    title: "Software Engineer & Technical Leader",
    heroText: "I build and lead real-world software solutions that solve complex business problems.",
    aboutTitle: "About Me",
    aboutText1: "I am a software engineer and technical leader with strong experience in enterprise systems.",
    featuredProject: "Featured Project",
    viewRepo: "View Repository"
  },
  pt: {
    title: "Engenheiro de Software & Líder Técnico",
    heroText: "Desenvolvo e lidero soluções de software reais para resolver problemas complexos de negócio.",
    aboutTitle: "Sobre Mim",
    aboutText1: "Sou engenheiro de software e líder técnico com forte experiência em sistemas corporativos.",
    featuredProject: "Projeto em Destaque",
    viewRepo: "Ver Repositório"
  }
};

function setLanguage(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    el.innerText = translations[lang][key];
  });

  localStorage.setItem("lang", lang);
}

document.addEventListener("DOMContentLoaded", () => {
  const lang = localStorage.getItem("lang") || "en";
  setLanguage(lang);
});
