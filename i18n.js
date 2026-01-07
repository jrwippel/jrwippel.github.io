const translations = {
  en: {
    // Hero & About
    title: "Software Engineer & Technical Leader",
    heroText: "I build and lead real-world software solutions that solve complex business problems, with strong focus on maintainability, scalability, and long-term impact.",
    aboutTitle: "About Me",
    aboutP1: "I am a software engineer and technical leader with strong experience in enterprise systems and business-critical applications.",
    aboutP2: "I have worked on systems that support financial decisions, operational control, and long-term product evolution, translating complex business requirements into reliable and maintainable software solutions.",
    aboutP3: "My focus is on providing clear technical direction while building systems that deliver measurable business value.",
    
    // Stats & Certs
    expYears: "Years of Experience",
    expStudents: "Udemy Students",
    certPsm: "Professional Scrum Master I",
    certDevops: "DevOps Certified",

    // Featured Projects
    featuredTitle: "Featured Projects",
    viewRepo: "View Repository",
    
    // Law Firm Project
    lawProjectTitle: "Law Firm Time Tracking System",
    projectP1: "A web-based system actively used by a real law firm to track lawyers' working hours and support accurate client billing.",
    projectP2: "The system helps identify profitability issues and enables data-driven decisions regarding fixed-fee and hourly-based clients.",
    projectP3: "Built with ASP.NET MVC, SQL Server, and hosted on Microsoft Azure.",
    shot1: "Dashboard providing visibility into time allocation and productivity",
    shot2: "Time tracking per lawyer, client, and activity",
    shot3: "Reports supporting accurate billing and financial decisions",

    // Vehicle Project
    vehicleProjectTitle: "Vehicle Transfer Management System",
    vehicleP1: "Web system designed to manage vehicle transfer operations, focusing on traceability and operational reliability.",
    vehicleP2: "The solution covers the full transfer lifecycle, including checklists, photo capture, and digital signatures.",
    vehicleP3: "Built with ASP.NET MVC and Azure Blob Storage to support image-heavy workflows.",
    vehicleShot1: "Centralized dashboard with real-time visibility of transfer orders",
    vehicleShot2: "Vehicle management interface for efficient fleet control",
    vehicleShot3: "Detailed order view with complete tracking information",

    // Knowledge Sharing (Udemy)
    sharingTitle: "Knowledge Sharing",
    courseTitle: "Modern COBOL Web Development",
    instructorBadge: "Instructor",
    courseDesc: "A specialized course focused on modernizing legacy systems. I teach developers how to bridge the gap between Mainframe and modern Web architectures.",
    courseBtn: "View Course on Udemy",

    // Recommendations
    testTitle: "Recommendations",
    test1Text: "I recommend Jackson as an excellent professional. I could observe his commitment, technical skill, and ability to work in a team. Jackson has vast technical knowledge and always seeks efficient and creative solutions.",
    test1Role: "Solution Architecture Director",
    test2Text: "Jackson was always focused and determined in his deliveries. A professional with extensive technical knowledge, he works proactively to prevent problems and has great relationships.",
    test2Role: "Operations Manager",
    test3Text: "Jackson has always shown himself to be a professional dedicated to work, going beyond the proposed objectives. He demonstrates great ease in absorbing new technologies.",
    test3Role: "Regional Service Desk Manager",

    // Tech Footer
    techTitle: "Technologies & Focus",
    techFocus: "Focus areas include business-driven development, maintainable architectures, cloud-based solutions, and systems designed for real production environments."
  },
  pt: {
    // Hero & Sobre
    title: "Engenheiro de Software & Líder Técnico",
    heroText: "Desenvolvo e lidero soluções de software aplicadas a problemas reais de negócio, com forte foco em manutenibilidade, escalabilidade e impacto de longo prazo.",
    aboutTitle: "Sobre Mim",
    aboutP1: "Sou engenheiro de software e líder técnico com sólida experiência em sistemas corporativos e aplicações críticas para o negócio.",
    aboutP2: "Atuei no desenvolvimento de sistemas que suportam decisões financeiras, controle operacional e evolução de produtos, transformando requisitos complexos em software confiável.",
    aboutP3: "Meu foco está em fornecer direcionamento técnico claro e construir sistemas que entreguem valor real ao negócio.",
    
    // Stats & Certs
    expYears: "Anos de Experiência",
    expStudents: "Alunos na Udemy",
    certPsm: "Professional Scrum Master I",
    certDevops: "Certificação DevOps",

    // Projetos em Destaque
    featuredTitle: "Projetos em Destaque",
    viewRepo: "Ver Repositório",

    // Projeto Advocacia
    lawProjectTitle: "Controle de Tempo de Escritório de Advocacia",
    projectP1: "Sistema web utilizado por um escritório real para controle de horas trabalhadas e apoio ao faturamento de clientes.",
    projectP2: "A solução auxilia na identificação de rentabilidade e no suporte a decisões baseadas em dados para contratos de honorários.",
    projectP3: "Desenvolvido em ASP.NET MVC, SQL Server e hospedado no Microsoft Azure.",
    shot1: "Dashboard com visão geral da alocação de tempo e produtividade",
    shot2: "Registro de horas por advogado, cliente e atividade",
    shot3: "Relatórios que apoiam a cobrança e decisões financeiras",

    // Projeto Veículos
    vehicleProjectTitle: "Gerenciamento de Transferência de Veículos",
    vehicleP1: "Sistema web para gerenciar operações de transferência de veículos, com foco em rastreabilidade e confiabilidade operacional.",
    vehicleP2: "A solução cobre todo o ciclo de transferência, incluindo checklists, captura de fotos e assinaturas digitais.",
    vehicleP3: "Desenvolvido em ASP.NET MVC e Azure Blob Storage para fluxos intensivos em imagens.",
    vehicleShot1: "Dashboard centralizado com visibilidade das ordens de transferência",
    vehicleShot2: "Interface de gerenciamento para controle eficiente da frota",
    vehicleShot3: "Vista detalhada do pedido para rastreamento completo",

    // Compartilhamento (Udemy)
    sharingTitle: "Compartilhamento de Conhecimento",
    courseTitle: "Desenvolvimento COBOL Web Moderno",
    instructorBadge: "Instrutor",
    courseDesc: "Curso especializado em modernização de sistemas legados. Ensino a conectar ambientes Mainframe com arquiteturas Web modernas.",
    courseBtn: "Ver Curso na Udemy",

    // Recomendações
    testTitle: "Recomendações",
    test1Text: "Recomendo o Jackson como um excelente profissional. Pude observar seu comprometimento, habilidade técnica e capacidade de trabalhar em equipe. Possui um vasto conhecimento técnico.",
    test1Role: "Diretor de Arquitetura de Soluções",
    test2Text: "Jackson sempre foi focado e determinado nas entregas. Profissional com muito conhecimento técnico, trabalha com proatividade para evitar problemas e tem ótimo relacionamento.",
    test2Role: "Gerente de Operações",
    test3Text: "Jackson sempre se mostrou um profissional dedicado, indo além dos objetivos propostos. Demonstra uma grande facilidade em absorver novas tecnologias.",
    test3Role: "Gerente Regional de Service Desk",

    // Rodapé Tech
    techTitle: "Tecnologias & Foco",
    techFocus: "Foco em desenvolvimento orientado a negócio, arquiteturas manuteníveis, soluções em nuvem e sistemas para ambientes produtivos reais."
  }
};

function setLanguage(lang) {
  localStorage.setItem('preferredLang', lang);
  document.documentElement.lang = lang;

  // Destaque visual dos botões
  document.querySelectorAll('.language-switch button').forEach(btn => {
    btn.classList.remove('active');
    if (btn.textContent.toLowerCase() === lang) btn.classList.add('active');
  });

  // Tradução dos elementos
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem('preferredLang') || "en";
  setLanguage(savedLang);
});