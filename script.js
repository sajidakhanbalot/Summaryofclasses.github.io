/* =========================================================
   TECHNOVA — Iyra Bahal Digital Learning Record
   All content below is editable. Replace placeholder /
   unverified entries with confirmed information as it
   becomes available.
   ========================================================= */

/* ---------------------------------------------------------
   1. DATA
   --------------------------------------------------------- */

// Replace skill information below with any updates to Iyra's technology exposure.
const skills = [
  { name: "HTML", category: "Frontend", year: "2024", status: "Learned", desc: "Foundation of web development and page structure." },
  { name: "CSS", category: "Frontend", year: "2024", status: "Learned", desc: "Styling, layout and responsive design." },
  { name: "JavaScript", category: "Frontend", year: "2024", status: "Learned", desc: "Interactivity, logic and dynamic behaviour." },
  { name: "React.js", category: "Frontend", year: "2025", status: "Completed", desc: "Component-based frontend development." },
  { name: "Node.js", category: "Backend", year: "2025", status: "Explored", desc: "Server-side JavaScript and request handling." },
  { name: "MongoDB", category: "Database", year: "2025", status: "Explored", desc: "Document-based data storage and retrieval." },
  { name: "AI Fundamentals", category: "Artificial Intelligence", year: "2025", status: "Explored", desc: "Introductory concepts in artificial intelligence." },
];

// Replace project information below with verified Iyra project details.
const projects = [
  {
    id: 1,
    title: "Personal Portfolio Website",
    shortTitle: "Portfolio Website",
    description: "A responsive personal portfolio website designed to present information, skills and projects through a structured web interface.",
    year: "2024",
    category: "HTML/CSS",
    technologies: ["HTML", "CSS"],
    github: "",
    demo: "",
    status: "Learning Project",
    type: "Web Application",
    featured: false,
    learningObjective: "To structure a multi-section personal website and practice translating a layout idea into semantic HTML and CSS.",
    problemSolved: "Explores how to present personal information clearly through a well-organised, responsive web interface.",
    features: ["Responsive layout", "Navigation between sections", "Structured content sections"],
    learned: ["Semantic HTML", "Responsive design basics", "CSS layout techniques", "Typography and spacing"]
  },
  {
    id: 2,
    title: "Responsive Website Project",
    shortTitle: "Responsive Website",
    description: "A responsive multi-section website created to explore modern layouts, navigation and visual presentation.",
    year: "2024",
    category: "HTML/CSS",
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "",
    demo: "",
    status: "Learning Project",
    type: "Web Application",
    featured: false,
    learningObjective: "To practice building a website that adapts cleanly across different screen sizes.",
    problemSolved: "Addresses how layouts should reflow and remain usable on mobile, tablet and desktop screens.",
    features: ["Multi-section layout", "Mobile-friendly navigation", "Flexible grid positioning"],
    learned: ["Responsive layouts", "CSS positioning", "Mobile-first thinking", "Basic UI design"]
  },
  {
    id: 3,
    title: "Interactive Quiz Application",
    shortTitle: "Quiz Application",
    description: "An interactive quiz application where users answer questions, receive feedback and track their results.",
    year: "2024",
    category: "JavaScript",
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "",
    demo: "",
    status: "Learning Project",
    type: "Web Application",
    featured: false,
    learningObjective: "To practice using JavaScript logic to control an interactive flow of questions and answers.",
    problemSolved: "Explores how conditional logic and DOM updates can create a responsive quiz experience.",
    features: ["Question navigation", "Answer selection", "Score calculation", "Results screen"],
    learned: ["JavaScript logic", "Event handling", "Conditionals", "DOM manipulation", "Dynamic UI updates"]
  },
  {
    id: 4,
    title: "Task Management Application",
    shortTitle: "Task Manager",
    description: "A practical application for adding, managing and organizing tasks.",
    year: "2024",
    category: "JavaScript",
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "",
    demo: "",
    status: "Learning Project",
    type: "Web Application",
    featured: false,
    learningObjective: "To build a functional to-do style tool that stores and updates data as the user interacts with it.",
    problemSolved: "Explores how tasks can be added, completed, filtered and remembered between visits.",
    features: ["Add tasks", "Delete tasks", "Mark tasks complete", "Filter tasks", "LocalStorage persistence"],
    learned: ["DOM manipulation", "Event handling", "Arrays", "LocalStorage", "Dynamic rendering"]
  },
  {
    id: 5,
    title: "React Application",
    shortTitle: "React App",
    description: "A component-based web application created to explore modern frontend development using React.",
    year: "2025",
    category: "React",
    technologies: ["React.js", "JavaScript", "CSS"],
    github: "",
    demo: "",
    status: "Learning Project",
    type: "Web Application",
    featured: true,
    learningObjective: "To understand how a user interface can be broken into reusable, stateful components.",
    problemSolved: "Explores component structure, state and props as an alternative to plain JavaScript DOM manipulation.",
    features: ["Reusable components", "Props-based data flow", "State-driven UI", "Event handling"],
    learned: ["Components", "Props", "State", "Event handling", "Dynamic rendering"]
  },
  {
    id: 6,
    title: "Data Management Application",
    shortTitle: "Data Manager",
    description: "An interactive application designed to organize, manage and display user-generated information.",
    year: "2025",
    category: "React",
    technologies: ["React.js", "JavaScript", "CSS"],
    github: "",
    demo: "",
    status: "Learning Project",
    type: "Web Application",
    featured: false,
    learningObjective: "To practice managing changing application data through state and forms.",
    problemSolved: "Explores how records can be added, edited, filtered and displayed in a structured interface.",
    features: ["Add records", "Edit records", "Delete records", "Filter information", "Dynamic display"],
    learned: ["State management", "Components", "Forms", "Dynamic rendering", "Application structure"]
  },
  {
    id: 7,
    title: "Backend API Learning Project",
    shortTitle: "Backend API Project",
    description: "A backend-focused project exploring how applications handle requests and exchange information through APIs.",
    year: "2025",
    category: "Node.js",
    technologies: ["Node.js", "JavaScript"],
    github: "",
    demo: "",
    status: "Learning Project",
    type: "Backend Exploration",
    featured: false,
    learningObjective: "To understand how a server receives requests and returns data.",
    problemSolved: "Explores basic routing and request/response handling in a server-side JavaScript environment.",
    features: ["Basic routing", "Request handling", "JSON responses"],
    learned: ["Server-side programming", "Routing", "Request handling", "APIs", "JSON"]
  },
  {
    id: 8,
    title: "Database Application",
    shortTitle: "Database Project",
    description: "A data-focused learning project exploring how information can be stored, organized and retrieved.",
    year: "2025",
    category: "MongoDB",
    technologies: ["Node.js", "MongoDB", "JavaScript"],
    github: "",
    demo: "",
    status: "Learning Project",
    type: "Database Exploration",
    featured: false,
    learningObjective: "To understand how data is stored and queried in a document-based database.",
    problemSolved: "Explores collections, documents and basic CRUD operations for managing stored information.",
    features: ["Create records", "Read records", "Update records", "Delete records"],
    learned: ["Database concepts", "Collections", "Documents", "CRUD operations", "Data retrieval"]
  },
  {
    id: 9,
    title: "AI Exploration Project",
    shortTitle: "AI Exploration",
    description: "An introductory exploration of artificial intelligence concepts through a small, guided project.",
    year: "2025",
    category: "AI",
    technologies: ["JavaScript", "AI Fundamentals"],
    github: "",
    demo: "",
    status: "AI Exploration Project",
    type: "Learning Experiment",
    featured: false,
    learningObjective: "To gain a beginner-level understanding of how AI-driven logic can respond to input.",
    problemSolved: "Explores foundational AI concepts at an introductory level, not production AI engineering.",
    features: ["Basic input handling", "Simple response logic"],
    learned: ["AI fundamentals", "Basic logic modelling", "Introductory concepts in intelligent systems"]
  }
];

// Replace certificate placeholder information with verified certificate data.
const certificates = [
  {
    title: "Web Development Fundamentals",
    issuer: "TechNova",
    student: "Iyra Bahal",
    date: "2024",
    certificateNumber: "TN-IYRA-2024-001",
    skills: ["HTML", "CSS", "JavaScript"],
    instructor: "Sajida Khan",
    status: "Placeholder — pending confirmation"
  },
  {
    title: "Frontend Development with React",
    issuer: "TechNova",
    student: "Iyra Bahal",
    date: "2025",
    certificateNumber: "TN-IYRA-2025-001",
    skills: ["React.js", "JavaScript", "CSS"],
    instructor: "Sajida Khan",
    status: "Placeholder — pending confirmation"
  },
  {
    title: "Backend & Database Foundations",
    issuer: "TechNova",
    student: "Iyra Bahal",
    date: "2025",
    certificateNumber: "TN-IYRA-2025-002",
    skills: ["Node.js", "MongoDB"],
    instructor: "Sajida Khan",
    status: "Placeholder — pending confirmation"
  }
];

// Replace with verified achievement milestones only.
const achievements = [
  { year: "2024", text: "Started the Computer Science Journey" },
  { year: "2024", text: "Built First Web Projects" },
  { year: "2025", text: "Achieved A+ Performance" },
  { year: "2025", text: "Expanded Into Full-Stack Technologies" },
  { year: "2025", text: "Completed React.js" },
  { year: "2025", text: "Explored Artificial Intelligence" },
  { year: "2025", text: "Built Multiple Practical Projects" },
  { year: "2026", text: "Continued the Technology Journey" }
];

const milestones = {
  "2024": [
    { title: "Computer Fundamentals", detail: "Introduced to how computers, the web and programming fit together." },
    { title: "HTML", detail: "Learned to structure web pages using semantic HTML." },
    { title: "CSS", detail: "Learned to style and lay out web pages." },
    { title: "JavaScript", detail: "Began learning programming logic and interactivity." }
  ],
  "2025": [
    { title: "React.js", detail: "Learned to build interfaces using reusable components." },
    { title: "Node.js", detail: "Explored server-side JavaScript and request handling." },
    { title: "MongoDB", detail: "Explored document-based databases and data storage." },
    { title: "AI Fundamentals", detail: "Explored introductory concepts in artificial intelligence." },
    { title: "Multiple Projects", detail: "Built several practical projects applying the technologies learned." }
  ],
  "2026": [
    { title: "Continued Practice", detail: "Kept practising with the technologies explored in previous years." },
    { title: "Consolidation", detail: "Worked on strengthening understanding of existing skills." },
    { title: "Future Development", detail: "Laying groundwork for the next stage of the journey." }
  ]
};

const performance = [
  { year: "2024", grade: "A", label: "Foundation & Exploration", top: false },
  { year: "2025", grade: "A+", label: "Strongest Learning Phase", top: true },
  { year: "2026", grade: "Average", label: "Developing & Rebuilding Momentum", top: false }
];

const nextSteps = [
  "Advanced JavaScript", "Advanced React", "Backend Development", "APIs",
  "Advanced Databases", "Artificial Intelligence", "Machine Learning",
  "Real-world Projects", "Git & GitHub", "Deployment", "Full-Stack Development"
];

/* ---------------------------------------------------------
   2. OVERVIEW CARDS
   --------------------------------------------------------- */

function renderOverview() {
  const items = [
    { label: "Learning Since", value: "2024", note: "" },
    { label: "Technologies", value: "7+", note: "" },
    { label: "Projects", value: String(projects.length), note: "" },
    { label: "Certificates", value: String(certificates.length), note: "" },
    { label: "Strongest Learning Phase", value: "2025", note: "" },
    { label: "Current Stage", value: "Developing", note: "" },
    { label: "Focus", value: "Technology & Development", note: "" },
  ];
  const grid = document.getElementById("overview-grid");
  grid.innerHTML = items.map(i => `
    <div class="overview-card reveal">
      <p class="overview-label">${i.label}</p>
      <p class="overview-value">${i.value}</p>
    </div>
  `).join("");
}

/* ---------------------------------------------------------
   3. SKILLS
   --------------------------------------------------------- */

function renderSkills() {
  const grid = document.getElementById("skills-grid");
  grid.innerHTML = skills.map(s => `
    <div class="skill-card reveal">
      <p class="skill-category">${s.category}</p>
      <h3 class="skill-name">${s.name}</h3>
      <p class="skill-desc">${s.desc}</p>
      <div class="skill-foot">
        <span>${s.year}</span>
        <span class="skill-status">${s.status}</span>
      </div>
    </div>
  `).join("");
}

/* ---------------------------------------------------------
   4. PROJECTS
   --------------------------------------------------------- */

function renderFeaturedProject() {
  const featured = projects.find(p => p.featured);
  const wrap = document.getElementById("featured-project-wrap");
  if (!featured) { wrap.innerHTML = ""; return; }
  wrap.innerHTML = `
    <div class="featured-project reveal">
      <div class="featured-preview">
        <div class="featured-preview-inner">
          <p class="featured-tag">Featured Learning Project</p>
          <p class="featured-name">${featured.title}</p>
        </div>
      </div>
      <div class="featured-info">
        <p class="featured-eyebrow">${featured.year} · ${featured.category}</p>
        <h3 class="featured-title">${featured.title}</h3>
        <p class="featured-desc">${featured.description}</p>
        <div class="featured-tech">
          ${featured.technologies.map(t => `<span class="tech-chip">${t}</span>`).join("")}
        </div>
        <button class="btn btn-primary" data-view-project="${featured.id}">View Case Study</button>
      </div>
    </div>
  `;
  wrap.querySelector("[data-view-project]").addEventListener("click", () => openProjectModal(featured.id));
}

function renderProjects(filter = "all") {
  const grid = document.getElementById("project-grid");
  const list = filter === "all" ? projects : projects.filter(p => p.category === filter);
  grid.innerHTML = list.map((p, idx) => `
    <article class="project-card reveal" data-id="${p.id}" tabindex="0" role="button" aria-label="View case study: ${p.title}">
      <div class="project-frame">
        <div class="project-frame-dots"><span></span><span></span><span></span></div>
        <p class="project-number">PROJECT ${String(p.id).padStart(2,"0")}</p>
      </div>
      <div class="project-body">
        <h3 class="project-name">${p.title}</h3>
        <p class="project-cat">${p.category} · ${p.year}</p>
        <p class="project-desc">${p.description}</p>
        <div class="project-foot">
          <span class="project-status">${p.status}</span>
          <span class="project-link">View case study →</span>
        </div>
      </div>
    </article>
  `).join("");

  grid.querySelectorAll(".project-card").forEach(card => {
    const id = Number(card.dataset.id);
    card.addEventListener("click", () => openProjectModal(id));
    card.addEventListener("keydown", e => {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openProjectModal(id); }
    });
  });

  observeReveals();
}

function setupProjectFilters() {
  const buttons = document.querySelectorAll(".filter-btn");
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      buttons.forEach(b => b.classList.remove("is-active"));
      btn.classList.add("is-active");
      renderProjects(btn.dataset.filter);
    });
  });
}

function openProjectModal(id) {
  const p = projects.find(pr => pr.id === id);
  if (!p) return;
  const body = document.getElementById("project-modal-body");
  const githubLink = p.github
    ? `<a class="btn btn-ghost" href="${p.github}" target="_blank" rel="noopener">View Source Code</a>`
    : `<span class="btn btn-ghost pm-link-disabled">Link not added yet</span>`;
  const demoLink = p.demo
    ? `<a class="btn btn-primary" href="${p.demo}" target="_blank" rel="noopener">View Project</a>`
    : `<span class="btn btn-primary pm-link-disabled">Link not added yet</span>`;

  body.innerHTML = `
    <h3 id="project-modal-title" class="pm-title">${p.title}</h3>
    <div class="pm-meta">
      <div class="pm-meta-item"><p>Year</p><p>${p.year}</p></div>
      <div class="pm-meta-item"><p>Category</p><p>${p.category}</p></div>
      <div class="pm-meta-item"><p>Status</p><p>${p.status}</p></div>
      <div class="pm-meta-item"><p>Type</p><p>${p.type}</p></div>
    </div>
    <div class="pm-section">
      <h4>Overview</h4>
      <p>${p.description}</p>
    </div>
    <div class="pm-section">
      <h4>The Goal</h4>
      <p>${p.learningObjective}</p>
      <p style="margin-top:8px;">${p.problemSolved}</p>
    </div>
    <div class="pm-section">
      <h4>Technologies</h4>
      <div class="featured-tech">${p.technologies.map(t => `<span class="tech-chip">${t}</span>`).join("")}</div>
    </div>
    <div class="pm-section">
      <h4>Key Features</h4>
      <ul>${p.features.map(f => `<li>${f}</li>`).join("")}</ul>
    </div>
    <div class="pm-section">
      <h4>What Was Learned</h4>
      <ul>${p.learned.map(l => `<li>${l}</li>`).join("")}</ul>
    </div>
    <div class="pm-links">
      ${githubLink}
      ${demoLink}
    </div>
  `;
  openModal("project-modal");
}

/* ---------------------------------------------------------
   5. CERTIFICATES
   --------------------------------------------------------- */

function renderCertificates() {
  const grid = document.getElementById("certificate-grid");
  grid.innerHTML = certificates.map(c => `
    <div class="cert-card reveal">
      <div class="cert-card-top">
        <span class="cert-number">${c.certificateNumber}</span>
        <span class="cert-status">${c.status.split(" —")[0]}</span>
      </div>
      <h3 class="cert-title">${c.title}</h3>
      <div class="cert-skills">${c.skills.map(s => `<span>${s}</span>`).join("")}</div>
      <div class="cert-foot">
        <span>${c.date}</span>
        <button class="cert-view-btn" data-cert="${c.certificateNumber}">View Certificate →</button>
      </div>
    </div>
  `).join("");

  grid.querySelectorAll("[data-cert]").forEach(btn => {
    btn.addEventListener("click", () => openCertificateModal(btn.dataset.cert));
  });
}

function certificateMarkup(c) {
  return `
    <div class="certificate-doc" id="certificate-doc">
      <div class="cert-watermark">TECHNOVA</div>
      <span class="cert-corner cert-corner--tl"></span>
      <span class="cert-corner cert-corner--tr"></span>
      <span class="cert-corner cert-corner--bl"></span>
      <span class="cert-corner cert-corner--br"></span>
      <div class="cert-inner">
        <p class="cert-brand">TECHNOVA</p>
        <p class="cert-brand-tag">TECHNOLOGY · LEARNING · GROWTH</p>
        <p class="cert-doc-title">CERTIFICATE OF ACHIEVEMENT</p>
        <p class="cert-presented">This certificate is proudly presented to</p>
        <p class="cert-student-name">${c.student}</p>
        <p class="cert-for">For successfully completing</p>
        <p class="cert-course-name">${c.title}</p>
        <p class="cert-demonstrating">Demonstrating learning and practical application in:</p>
        <p class="cert-skill-line">${c.skills.join(" · ").toUpperCase()}</p>

        <div class="cert-meta-row">
          <div class="cert-meta-item">
            <p>Issue Date</p>
            <p>${c.date}</p>
          </div>
          <div class="cert-meta-item">
            <p>Certificate No.</p>
            <p>${c.certificateNumber}</p>
          </div>
          <div class="cert-meta-item">
            <p>Instructor</p>
            <p>${c.instructor}<span class="cert-meta-sub">Software Developer &amp; Technology Educator</span></p>
          </div>
          <div class="cert-meta-item">
            <p>Issued By</p>
            <p>TechNova</p>
          </div>
        </div>

        <div class="cert-sign-verify">
          <div class="cert-signature-line">
            <p class="cert-signature-name">${c.instructor}</p>
            <p class="cert-signature-role">Software Developer &amp; Technology Educator · TechNova</p>
          </div>
          <div class="cert-verify-box">
            <div class="cert-ref-label">
              <p>Certificate Reference</p>
              <p>${c.certificateNumber}</p>
            </div>
            <div class="cert-qr">VERIFY</div>
          </div>
        </div>
      </div>
    </div>
  `;
}

let certZoom = 1;

function openCertificateModal(certNumber) {
  const c = certificates.find(cc => cc.certificateNumber === certNumber);
  if (!c) return;
  document.getElementById("cert-scale-wrap").innerHTML = certificateMarkup(c);
  certZoom = 1;
  applyCertZoom();
  openModal("certificate-modal");
}

function applyCertZoom() {
  document.getElementById("cert-scale-wrap").style.transform = `scale(${certZoom})`;
  document.getElementById("cert-zoom-level").textContent = Math.round(certZoom * 100) + "%";
}

function setupCertificateControls() {
  document.getElementById("cert-zoom-in").addEventListener("click", () => {
    certZoom = Math.min(certZoom + 0.15, 1.8);
    applyCertZoom();
  });
  document.getElementById("cert-zoom-out").addEventListener("click", () => {
    certZoom = Math.max(certZoom - 0.15, 0.5);
    applyCertZoom();
  });
  document.getElementById("cert-print").addEventListener("click", () => window.print());
  document.getElementById("cert-download").addEventListener("click", () => {
    alert("This site is frontend-only, so there is no automatic PDF export. Use \"Print\" and choose \"Save as PDF\" in the print dialog to download this certificate.");
  });
}

/* ---------------------------------------------------------
   6. CERTIFICATE VERIFICATION
   --------------------------------------------------------- */

function setupVerification() {
  const form = document.getElementById("verify-form");
  const input = document.getElementById("verify-input");
  const result = document.getElementById("verify-result");

  form.addEventListener("submit", e => {
    e.preventDefault();
    const query = input.value.trim().toUpperCase();
    const match = certificates.find(c => c.certificateNumber.toUpperCase() === query);

    if (!query) {
      result.className = "verify-result is-error";
      result.textContent = "Please enter a certificate number.";
      return;
    }

    if (match) {
      result.className = "verify-result is-verified";
      result.innerHTML = `
        <p class="verify-verified-label">✓ Verified</p>
        <div class="verify-grid">
          <div><p>Certificate No.</p><p>${match.certificateNumber}</p></div>
          <div><p>Student</p><p>${match.student}</p></div>
          <div><p>Program</p><p>${match.title}</p></div>
          <div><p>Issue Date</p><p>${match.date}</p></div>
          <div><p>Issued By</p><p>${match.issuer}</p></div>
          <div><p>Instructor</p><p>${match.instructor}</p></div>
        </div>
      `;
    } else {
      result.className = "verify-result is-error";
      result.textContent = "Certificate record not found. Please check the certificate number.";
    }
  });
}

/* ---------------------------------------------------------
   7. PERFORMANCE
   --------------------------------------------------------- */

function renderPerformance() {
  const grid = document.getElementById("performance-grid");
  grid.innerHTML = performance.map(p => `
    <div class="perf-card reveal ${p.top ? "perf-card--top" : ""}">
      <p class="perf-year">${p.year}</p>
      <p class="perf-grade">${p.grade}</p>
      <p class="perf-label">${p.label}</p>
    </div>
  `).join("");
}

/* ---------------------------------------------------------
   8. ACHIEVEMENTS
   --------------------------------------------------------- */

function renderAchievements() {
  const wall = document.getElementById("achievement-wall");
  wall.innerHTML = achievements.map(a => `
    <div class="achievement-item reveal">
      <p class="achievement-year">${a.year}</p>
      <p class="achievement-text">${a.text}</p>
    </div>
  `).join("");
}

/* ---------------------------------------------------------
   9. LEARNING MILESTONES
   --------------------------------------------------------- */

function renderMilestones() {
  const wrap = document.getElementById("milestone-years");
  wrap.innerHTML = Object.entries(milestones).map(([year, items]) => `
    <div class="milestone-year-block reveal">
      <p class="milestone-year-label">${year}</p>
      ${items.map(m => `<button class="milestone-btn" data-title="${m.title}" data-detail="${m.detail}">${m.title}</button>`).join("")}
    </div>
  `).join("");

  wrap.querySelectorAll(".milestone-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.getElementById("milestone-panel-content").innerHTML = `
        <h3>${btn.dataset.title}</h3>
        <p>${btn.dataset.detail}</p>
      `;
      document.getElementById("milestone-panel").classList.add("is-open");
      document.getElementById("milestone-panel").setAttribute("aria-hidden", "false");
    });
  });
}

function setupMilestonePanel() {
  document.querySelectorAll("[data-close-milestone]").forEach(el => {
    el.addEventListener("click", () => {
      document.getElementById("milestone-panel").classList.remove("is-open");
      document.getElementById("milestone-panel").setAttribute("aria-hidden", "true");
    });
  });
}

/* ---------------------------------------------------------
   10. WHAT'S NEXT
   --------------------------------------------------------- */

function renderNextSteps() {
  const grid = document.getElementById("next-grid");
  grid.innerHTML = nextSteps.map(s => `<div class="next-chip reveal">${s}</div>`).join("");
}

/* ---------------------------------------------------------
   11. MODAL SYSTEM (shared)
   --------------------------------------------------------- */

function openModal(id) {
  const modal = document.getElementById(id);
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}
function closeAllModals() {
  document.querySelectorAll(".modal.is-open").forEach(m => {
    m.classList.remove("is-open");
    m.setAttribute("aria-hidden", "true");
  });
  document.body.style.overflow = "";
}

function setupModals() {
  document.querySelectorAll("[data-close-modal]").forEach(el => {
    el.addEventListener("click", closeAllModals);
  });
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") {
      closeAllModals();
      document.getElementById("milestone-panel").classList.remove("is-open");
    }
  });
}

/* ---------------------------------------------------------
   12. NAVIGATION BEHAVIOUR
   --------------------------------------------------------- */

function setupNav() {
  const header = document.getElementById("site-header");
  const onScroll = () => {
    header.classList.toggle("is-scrolled", window.scrollY > 20);
    toggleBackToTop();
    highlightActiveSection();
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  const menuToggle = document.getElementById("menu-toggle");
  const mobileNav = document.getElementById("mobile-nav");
  menuToggle.addEventListener("click", () => {
    const isOpen = mobileNav.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    document.body.style.overflow = isOpen ? "hidden" : "";
  });
  mobileNav.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => {
      mobileNav.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
    });
  });
}

function highlightActiveSection() {
  const sections = document.querySelectorAll("main section[id]");
  const navLinks = document.querySelectorAll('.primary-nav a[data-nav]');
  let currentId = "top";
  sections.forEach(sec => {
    const rect = sec.getBoundingClientRect();
    if (rect.top <= 140 && rect.bottom > 140) currentId = sec.id;
  });
  navLinks.forEach(link => {
    link.classList.toggle("is-active", link.getAttribute("href") === `#${currentId}`);
  });
}

function toggleBackToTop() {
  const btn = document.getElementById("back-to-top");
  btn.classList.toggle("is-visible", window.scrollY > 700);
}

/* ---------------------------------------------------------
   13. SCROLL REVEAL
   --------------------------------------------------------- */

let revealObserver;
function observeReveals() {
  if (!revealObserver) {
    revealObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
  }
  document.querySelectorAll(".reveal:not(.is-visible)").forEach(el => revealObserver.observe(el));
}

/* ---------------------------------------------------------
   14. INIT
   --------------------------------------------------------- */

document.addEventListener("DOMContentLoaded", () => {
  renderOverview();
  renderSkills();
  renderFeaturedProject();
  renderProjects();
  setupProjectFilters();
  renderCertificates();
  setupCertificateControls();
  setupVerification();
  renderPerformance();
  renderAchievements();
  renderMilestones();
  setupMilestonePanel();
  renderNextSteps();
  setupModals();
  setupNav();

  document.getElementById("back-to-top").addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  observeReveals();
});
