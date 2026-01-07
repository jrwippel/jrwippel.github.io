const translations = {
  en: {
    title: "Software Engineer & Technical Leader",
    heroText: "I build and lead real-world software solutions that solve complex business problems, with strong focus on maintainability, scalability, and long-term impact.",
    aboutTitle: "About Me",
    expYears: "Years of Experience",
    expStudents: "Udemy Students",
    certPsm: "Scrum Master (PSM I)",
    certDevops: "DevOps Certified",
    testTitle: "Recommendations",
    test1Text: "I recommend Jackson as an excellent professional. I could observe his commitment, technical skill, and ability to work in a team. Jackson has vast technical knowledge.",
    test2Text: "Jackson was always focused and determined. A professional with extensive technical knowledge, he always seeks solutions and works proactively to prevent problems.",
    test3Text: "Jackson has always shown himself to be a professional dedicated to work, going beyond the proposed objectives. He demonstrates great ease in absorbing new technologies.",
    techTitle: "Technologies & Focus",
    techFocus: "Focus areas include business-driven development, maintainable architectures, and cloud-based solutions."
  },
  pt: {
    title: "Engenheiro de Software & Líder Técnico",
    heroText: "Desenvolvo e lidero soluções de software aplicadas a problemas reais de negócio, com forte foco em manutenibilidade, escalabilidade e impacto de longo prazo.",
    aboutTitle: "Sobre Mim",
    expYears: "Anos de Experiência",
    expStudents: "Alunos na Udemy",
    certPsm: "Certificação Scrum Master",
    certDevops: "Certificação DevOps",
    testTitle: "Recomendações",
    test1Text: "Recomendo o Jackson como um excelente profissional. Pude observar seu comprometimento, habilidade técnica e capacidade de trabalhar em equipe.",
    test2Text: "O Jackson sempre foi uma pessoa focada e determinada. Profissional com muito conhecimento técnico e experiência, busca sempre uma solução e trabalha com proatividade.",
    test3Text: "Jackson sempre se mostrou um profissional dedicado ao trabalho, indo além dos objetivos propostos. Demonstra uma grande facilidade em absorver novas tecnologias.",
    techTitle: "Tecnologias & Foco",
    techFocus: "As áreas de foco incluem desenvolvimento orientado a negócio, arquiteturas manuteníveis e soluções em nuvem."
  }
};

function setLanguage(lang) {
  localStorage.setItem('preferredLang', lang);
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang][key]) el.textContent = translations[lang][key];
  });
}

document.addEventListener("DOMContentLoaded", () => {
  setLanguage(localStorage.getItem('preferredLang') || "en");
});