const translations = {
  en: {
    title: "Software Engineer & Technical Leader",
    heroText: "I build and lead real-world software solutions that solve complex business problems, with strong focus on maintainability, scalability, and long-term impact.",
    githubBtn: "GitHub",
    featuredBtn: "Featured Project",
    aboutTitle: "About Me",
    aboutP1: "I am a software engineer and technical leader with strong experience in enterprise systems and business-critical applications.",
    aboutP2: "I have worked on systems that support financial decisions, operational control, and long-term product evolution, translating complex business requirements into reliable and maintainable software solutions.",
    aboutP3: "My focus is on providing clear technical direction while building systems that deliver measurable business value.",
    featuredTitle: "Featured Projects",
    lawProjectTitle: "Law Firm Time Tracking System",
    projectP1: "A web-based system actively used by a real law firm to track lawyers' working hours, support accurate client billing, and provide full visibility into how the firm's time and resources are allocated.",
    projectP2: "The system helps identify profitability issues, supports monthly billing processes, and enables data-driven decisions regarding fixed-fee and hourly-based clients.",
    projectP3: "Built with ASP.NET MVC, SQL Server, and hosted on Microsoft Azure, focusing on long-term maintainability and real production needs.",
    vehicleProjectTitle: "Vehicle Transfer Management System",
    vehicleP1: "Web system designed to manage vehicle transfer operations, focusing on traceability, compliance, and operational reliability.",
    vehicleP2: "The solution covers the full transfer lifecycle, including vehicle pickup, condition checklist, photo capture, digital signature, delivery confirmation, and automated report generation.",
    vehicleP3: "Built with ASP.NET MVC, SQL Server, and Azure Blob Storage to support image-heavy workflows, hosted on Microsoft Azure with focus on maintainability and real operational use.",
    viewRepo: "View Repository",
    screenshotsTitle: "System Screenshots",
    shot1: "Dashboard providing visibility into time allocation and productivity",
    shot2: "Time tracking per lawyer, client, and activity",
    shot3: "Reports supporting accurate billing and financial decisions",
    vehicleShot1: "Centralized dashboard with real-time visibility of vehicle transfer orders and their current status",
    vehicleShot2: "Vehicle and transfer management interface, enabling efficient control of fleet operations and assignments",
    vehicleShot3: "Detailed order view with complete information for tracking, planning, and operational decision-making",
    techTitle: "Technologies & Focus",
    techFocus: "Focus areas include business-driven development, maintainable architectures, cloud-based solutions, and systems designed for real production environments.", // <--- AQUI FALTAVA A VÍRGULA
    sharingTitle: "Knowledge Sharing",
    courseTitle: "Modern COBOL Web Development",
    instructorBadge: "Instructor",
    courseDesc: "A specialized course focused on modernizing legacy systems. I teach developers how to bridge the gap between Mainframe/COBOL environments and modern Web architectures, enabling digital transformation in enterprise scenarios.",
    courseBtn: "View Course on Udemy"
  },
  pt: {
    title: "Engenheiro de Software & Líder Técnico",
    heroText: "Desenvolvo e lidero soluções de software aplicadas a problemas reais de negócio, com forte foco em manutenibilidade, escalabilidade e impacto de longo prazo.",
    githubBtn: "GitHub",
    featuredBtn: "Projeto em Destaque",
    aboutTitle: "Sobre Mim",
    aboutP1: "Sou engenheiro de software e líder técnico com sólida experiência em sistemas corporativos e aplicações críticas para o negócio.",
    aboutP2: "Atuei no desenvolvimento de sistemas que suportam decisões financeiras, controle operacional e evolução contínua de produtos, transformando requisitos complexos de negócio em soluções confiáveis e sustentáveis.",
    aboutP3: "Meu foco está em fornecer direcionamento técnico claro e construir sistemas que entreguem valor real ao negócio.",
    featuredTitle: "Projetos em Destaque",
    lawProjectTitle: "Sistema de Controle de Tempo de Escritório de Advocacia",
    projectP1: "Sistema web utilizado por um escritório de advocacia real para controle de horas trabalhadas, apoio à cobrança de clientes e visibilidade sobre a alocação de tempo e recursos.",
    projectP2: "A solução auxilia na identificação de rentabilidade, no processo mensal de faturamento e no suporte a decisões baseadas em dados para contratos por hora ou valor fixo.",
    projectP3: "Desenvolvido em ASP.NET MVC com SQL Server e hospedado no Microsoft Azure, com foco em manutenibilidade e uso em ambiente produtivo.",
    vehicleProjectTitle: "Sistema de Gerenciamento de Transferência de Veículos",
    vehicleP1: "Sistema web desenvolvido para gerenciar operações de transferência de veículos, com foco em rastreabilidade, conformidade e confiabilidade operacional.",
    vehicleP2: "A solução cobre todo o ciclo de transferência, incluindo coleta do veículo, checklist de condições, captura de fotos, assinatura digital, confirmação de entrega e geração automática de relatórios.",
    vehicleP3: "Desenvolvido em ASP.NET MVC com SQL Server e Azure Blob Storage para suportar fluxos intensivos em imagens, hospedado no Microsoft Azure com foco em manutenibilidade e uso operacional real.",
    viewRepo: "Ver Repositório",
    screenshotsTitle: "Telas do Sistema",
    shot1: "Dashboard com visão geral da alocação de tempo e produtividade",
    shot2: "Registro de horas por advogado, cliente e atividade",
    shot3: "Relatórios que apoiam a cobrança e decisões financeiras",
    vehicleShot1: "Dashboard centralizado com visibilidade em tempo real das ordens de transferência",
    vehicleShot2: "Interface de gerenciamento de veículos e transferências para controle da frota",
    vehicleShot3: "Detalhes completos do pedido para rastreamento e tomada de decisões operacionais",
    techTitle: "Tecnologias & Foco",
    techFocus: "As áreas de foco incluem desenvolvimento orientado a negócio, arquiteturas manuteníveis, soluções em nuvem e sistemas pensados para ambientes produtivos reais.",
    sharingTitle: "Compartilhamento de Conhecimento",
    courseTitle: "Desenvolvimento COBOL Web Moderno",
    instructorBadge: "Instrutor",
    courseDesc: "Um curso especializado focado na modernização de sistemas legados. Ensino desenvolvedores a conectar ambientes Mainframe/COBOL com arquiteturas Web modernas, viabilizando a transformação digital em cenários corporativos.",
    courseBtn: "Ver Curso na Udemy"
  }
};

function setLanguage(lang) {
  // Salva a escolha do usuário
  localStorage.setItem('preferredLang', lang);
  
  // Atualiza o atributo lang do HTML para acessibilidade
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
}

// Inicializa com o idioma salvo ou padrão (en)
const savedLang = localStorage.getItem('preferredLang') || "en";
setLanguage(savedLang);