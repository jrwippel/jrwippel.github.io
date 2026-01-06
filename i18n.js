<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Jackson Ricardo Wippel | Software Engineer & Technical Leader</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>

  <!-- HERO -->
  <header class="hero">

    <!-- LANGUAGE SWITCH -->
    <div class="language-switch">
      <button onclick="setLanguage('en')">EN</button>
      <button onclick="setLanguage('pt')">PT</button>
    </div>

    <div class="container">
      <h1>Jackson Ricardo Wippel</h1>

      <h2 data-i18n="title">
        Software Engineer & Technical Leader
      </h2>

      <p data-i18n="heroText">
        I build and lead real-world software solutions that solve complex
        business problems, with strong focus on maintainability,
        scalability, and long-term impact.
      </p>

      <div class="buttons">
        <a href="https://github.com/jrwippel"
           target="_blank"
           class="btn primary"
           data-i18n="githubBtn">
          GitHub
        </a>

        <a href="https://github.com/jrwippel/law-firm-time-tracking"
           target="_blank"
           class="btn secondary"
           data-i18n="featuredBtn">
          Featured Project
        </a>
      </div>
    </div>
  </header>

  <!-- ABOUT -->
  <section class="section">
    <div class="container">
      <h3 data-i18n="aboutTitle">About Me</h3>

      <p data-i18n="aboutP1">
        Software engineer and technical leader with experience in
        enterprise and business-critical systems.
      </p>

      <p data-i18n="aboutP2">
        Strong focus on transforming real business needs into reliable,
        maintainable, and scalable software solutions.
      </p>

      <p data-i18n="aboutP3">
        Continuous learning, solid engineering practices, and
        long-term system sustainability guide my work.
      </p>
    </div>
  </section>

  <!-- PROJECT 1 -->
  <section class="section alt">
    <div class="container">
      <h3 data-i18n="featuredTitle1">Featured Project</h3>
      <h4>Law Firm Time Tracking System</h4>

      <p data-i18n="lawProjectP1">
        Web system created to centralize time tracking and support
        accurate billing in a real law firm environment.
      </p>

      <p data-i18n="lawProjectP2">
        Replaced decentralized spreadsheets with a reliable system,
        reducing operational risk and improving financial visibility.
      </p>

      <p data-i18n="lawProjectP3">
        Built with ASP.NET MVC, SQL Server and hosted on Microsoft Azure,
        focusing on maintainability and production-grade reliability.
      </p>

      <a href="https://github.com/jrwippel/law-firm-time-tracking"
         target="_blank"
         class="btn primary"
         data-i18n="viewRepo">
        View Repository
      </a>
    </div>
  </section>

  <!-- PROJECT 2 -->
  <section class="section">
    <div class="container">
      <h3 data-i18n="featuredTitle2">Featured Project</h3>
      <h4>Vehicle Transfer Management System</h4>

      <p data-i18n="vehicleProjectP1">
        Web system designed to manage vehicle transfer operations with
        traceability and operational control.
      </p>

      <p data-i18n="vehicleProjectP2">
        Covers the full lifecycle including checklists, photo capture,
        digital signatures, and automated reporting.
      </p>

      <p data-i18n="vehicleProjectP3">
        Built with ASP.NET MVC, SQL Server, Azure Blob Storage and hosted
        on Microsoft Azure, supporting image-heavy workflows.
      </p>

      <a href="https://github.com/jrwippel/WebAppSystemsTransp"
         target="_blank"
         class="btn primary"
         data-i18n="viewRepo">
        View Repository
      </a>
    </div>
  </section>

  <!-- TECHNOLOGIES -->
  <section class="section alt">
    <div class="container">
      <h3 data-i18n="techTitle">Technologies & Focus</h3>

      <ul class="skills">
        <li>C# / .NET (ASP.NET MVC)</li>
        <li>SQL Server</li>
        <li>Microsoft Azure</li>
        <li>HTML, CSS, JavaScript</li>
        <li>Git & GitHub</li>
      </ul>

      <p class="focus" data-i18n="techFocus">
        Engineering-driven development focused on solving real problems,
        not just adopting technologies.
      </p>
    </div>
  </section>

  <!-- FOOTER -->
  <footer>
    <p>
      © 2026 — Jackson Ricardo Wippel |
      <a href="https://github.com/jrwippel" target="_blank">GitHub</a>
    </p>
  </footer>

  <script src="i18n.js"></script>
</body>
</html>
