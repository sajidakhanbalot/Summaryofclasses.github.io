/* ==================================================================
   TECHNOVA — Iyra Bahal Digital Learning Record
   script.js

   This file is organised in two parts:
   1. DATA MODEL — edit the arrays below with real information.
   2. RENDER + INTERACTIVITY — powers the site. No editing needed
      unless you are changing behaviour.
   ================================================================== */

/* ==================================================================
   1. DATA MODEL
   ================================================================== */

/* Replace placeholder project information with Iyra's actual projects. */
const projects = [
  {
    title: "Project 01",
    description: "Add project description here.",
    year: "2024",
    category: "HTML/CSS",
    technologies: ["HTML", "CSS"],
    image: "assets/projects/project-01.jpg",
    github: "#",
    demo: "#",
    learningObjective: "Add learning objective.",
    learned: "Add what was learned."
  },
  {
    title: "Project 02",
    description: "Add project description here.",
    year: "2024",
    category: "JavaScript",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: "assets/projects/project-02.jpg",
    github: "#",
    demo: "#",
    learningObjective: "Add learning objective.",
    learned: "Add what was learned."
  },
  {
    title: "Project 03",
    description: "Add project description here.",
    year: "2024",
    category: "JavaScript",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: "assets/projects/project-03.jpg",
    github: "#",
    demo: "#",
    learningObjective: "Add learning objective.",
    learned: "Add what was learned."
  },
  {
    title: "Project 04",
    description: "Add project description here.",
    year: "2025",
    category: "React",
    technologies: ["React.js", "JavaScript", "CSS"],
    image: "assets/projects/project-04.jpg",
    github: "#",
    demo: "#",
    learningObjective: "Add learning objective.",
    learned: "Add what was learned."
  },
  {
    title: "Project 05",
    description: "Add project description here.",
    year: "2025",
    category: "React",
    technologies: ["React.js", "JavaScript"],
    image: "assets/projects/project-05.jpg",
    github: "#",
    demo: "#",
    learningObjective: "Add learning objective.",
    learned: "Add what was learned."
  },
  {
    title: "Project 06",
    description: "Add project description here.",
    year: "2025",
    category: "Node.js",
    technologies: ["Node.js", "JavaScript"],
    image: "assets/projects/project-06.jpg",
    github: "#",
    demo: "#",
    learningObjective: "Add learning objective.",
    learned: "Add what was learned."
  },
  {
    title: "Project 07",
    description: "Add project description here.",
    year: "2025",
    category: "MongoDB",
    technologies: ["Node.js", "MongoDB"],
    image: "assets/projects/project-07.jpg",
    github: "#",
    demo: "#",
    learningObjective: "Add learning objective.",
    learned: "Add what was learned."
  },
  {
    title: "Project 08",
    description: "Add project description here.",
    year: "2025",
    category: "AI",
    technologies: ["AI Fundamentals", "JavaScript"],
    image: "assets/projects/project-08.jpg",
    github: "#",
    demo: "#",
    learningObjective: "Add learning objective.",
    learned: "Add what was learned."
  }
];

/* Replace placeholder certificate information with verified certificate data.
   NOTE: These are placeholder credential records issued internally by TechNova
   for Iyra's completed learning stages. Replace `image` with the real scanned
   certificate once available, and adjust titles/dates/skills to match. */
const certificates = [
  {
    title: "Web Development Foundations",
    issuer: "TechNova",
    student: "Iyra Bahal",
    date: "2024",
    certificateNumber: "TN-IYRA-2024-001",
    skills: ["HTML", "CSS", "JavaScript"],
    instructor: "Sajida Khan",
    image: "assets/certificates/certificate-01.jpg"
  },
  {
    title: "Frontend Development with React",
    issuer: "TechNova",
    student: "Iyra Bahal",
    date: "2025",
    certificateNumber: "TN-IYRA-2025-001",
    skills: ["React.js", "JavaScript", "CSS"],
    instructor: "Sajida Khan",
    image: "assets/certificates/certificate-02.jpg"
  },
  {
    title: "Backend & Database Fundamentals",
    issuer: "TechNova",
    student: "Iyra Bahal",
    date: "2025",
    certificateNumber: "TN-IYRA-2025-002",
    skills: ["Node.js", "MongoDB"],
    instructor: "Sajida Khan",
    image: "assets/certificates/certificate-03.jpg"
  },
  {
    title: "Introduction to Artificial Intelligence",
    issuer: "TechNova",
    student: "Iyra Bahal",
    date: "2025",
    certificateNumber: "TN-IYRA-2025-003",
    skills: ["AI Fundamentals"],
    instructor: "Sajida Khan",
    image: "assets/certificates/certificate-04.jpg"
  }
];

const skills = [
  { name: "HTML", category: "Frontend", description: "Foundation of web development", year: "2024", status: "Learned" },
  { name: "CSS", category: "Frontend", description: "Web styling and visual presentation", year: "2024", status: "Learned" },
  { name: "JavaScript", category: "Frontend", description: "Programming and interactive web development", year: "2024", status: "Learned" },
  { name: "React.js", category: "Frontend", description: "Component-based frontend development", year: "2025", status: "Completed" },
  { name: "Node.js", category: "Backend", description: "Backend JavaScript development", year: "2025", status: "Explored" },
  { name: "MongoDB", category: "Database", description: "Document-oriented database technology", year: "2025", status: "Explored" },
  { name: "AI Fundamentals", category: "Artificial Intelligence", description: "Introduction to artificial intelligence concepts", year: "2025", status: "Explored" }
];

const achievements = [
  { year: "2024", title: "Started the Computer Science Journey" },
  { year: "2024", title: "Built First Web Projects" },
  { year: "2025", title: "Achieved A+ Performance" },
  { year: "2025", title: "Expanded Into Full-Stack Technologies" },
  { year: "2025", title: "Completed React.js" },
  { year: "2025", title: "Explored Artificial Intelligence" },
  { year: "2025", title: "Built Multiple Practical Projects" },
  { year: "2026", title: "Continued the Technology Journey" }
];

const milestones = [
  { year: "2024", items: ["Computer Fundamentals", "HTML", "CSS", "JavaScript"] },
  { year: "2025", items: ["React.js", "Node.js", "MongoDB", "AI Fundamentals", "Multiple Projects"] },
  { year: "2026", items: ["Continued Practice", "Consolidation", "Future Development"] }
];

const performance = [
  { year: "2024", grade: "A", desc: "Foundation & Exploration", fill: 82 },
  { year: "2025", grade: "A+", desc: "Strongest Learning Phase", fill: 96 },
  { year: "2026", grade: "Average", desc: "Developing & Rebuilding Momentum", fill: 55 }
];

/* ==================================================================
   2. RENDER + INTERACTIVITY
   ================================================================== */
document.addEventListener("DOMContentLoaded", () => {

  /* ---------------- Navbar scroll state ---------------- */
  const navbar = document.getElementById("navbar");
  const backToTop = document.getElementById("backToTop");

  function onScroll() {
    const scrolled = window.scrollY > 40;
    navbar.classList.toggle("is-scrolled", scrolled);
    backToTop.classList.toggle("is-visible", window.scrollY > 600);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  /* ---------------- Mobile nav ---------------- */
  const navToggle = document.getElementById("navToggle");
  const mobileNav = document.getElementById("mobileNav");

  navToggle.addEventListener("click", () => {
    const isOpen = mobileNav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
    mobileNav.setAttribute("aria-hidden", String(!isOpen));
  });
  mobileNav.querySelectorAll(".mobile-nav__link").forEach(link => {
    link.addEventListener("click", () => {
      mobileNav.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
      mobileNav.setAttribute("aria-hidden", "true");
    });
  });

  /* ---------------- Active nav link on scroll ---------------- */
  const navLinks = document.querySelectorAll(".navlink");
  const sections = Array.from(navLinks)
    .map(l => document.querySelector(l.getAttribute("href")))
    .filter(Boolean);

  function updateActiveLink() {
    let currentId = null;
    const scrollPos = window.scrollY + 140;
    sections.forEach(sec => {
      if (sec.offsetTop <= scrollPos) currentId = sec.id;
    });
    navLinks.forEach(link => {
      link.classList.toggle("is-active", link.getAttribute("href") === `#${currentId}`);
    });
  }
  window.addEventListener("scroll", updateActiveLink, { passive: true });
  updateActiveLink();

  /* ---------------- Smooth scroll (native + fallback) ---------------- */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", e => {
      const targetId = anchor.getAttribute("href");
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const y = target.getBoundingClientRect().top + window.scrollY - 70;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    });
  });

  /* ---------------- Reveal-on-scroll ---------------- */
  const revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    revealEls.forEach(el => io.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add("is-visible"));
  }

  /* ---------------- Stat counters ---------------- */
  document.getElementById("statProjects").textContent = projects.length;
  document.getElementById("statCertificates").textContent = certificates.length;

  /* ==============================================================
     SKILLS
     ============================================================== */
  const skillGrid = document.getElementById("skillGrid");
  const skillFilters = document.getElementById("skillFilters");

  function renderSkills(category) {
    const filtered = category === "All" ? skills : skills.filter(s => s.category === category);
    skillGrid.innerHTML = filtered.map(s => `
      <div class="skill-card reveal is-visible">
        <div class="skill-card__top">
          <span class="skill-card__name">${s.name}</span>
          <span class="skill-card__status">${s.status}</span>
        </div>
        <p class="skill-card__desc">${s.description}</p>
        <div class="skill-card__year">${s.category} · ${s.year}</div>
      </div>
    `).join("");
  }
  renderSkills("All");

  skillFilters.addEventListener("click", (e) => {
    const btn = e.target.closest(".chip-btn");
    if (!btn) return;
    skillFilters.querySelectorAll(".chip-btn").forEach(b => {
      b.classList.remove("is-active");
      b.setAttribute("aria-selected", "false");
    });
    btn.classList.add("is-active");
    btn.setAttribute("aria-selected", "true");
    renderSkills(btn.dataset.skillCat);
  });

  /* ==============================================================
     PROJECTS
     ============================================================== */
  const projectGrid = document.getElementById("projectGrid");
  const projectFilters = document.getElementById("projectFilters");

  function renderProjects(filter) {
    const filtered = filter === "All" ? projects : projects.filter(p => p.category === filter);
    projectGrid.innerHTML = filtered.map((p, idx) => `
      <article class="project-card reveal is-visible" data-index="${projects.indexOf(p)}" tabindex="0" role="button" aria-label="View details for ${p.title}">
        <div class="project-card__media">Project Image Placeholder</div>
        <div class="project-card__body">
          <div class="project-card__meta"><span>${p.category}</span><span>${p.year}</span></div>
          <h3 class="project-card__title">${p.title}</h3>
          <p class="project-card__desc">${p.description}</p>
          <div class="project-card__tags">
            ${p.technologies.map(t => `<span class="tag">${t}</span>`).join("")}
          </div>
        </div>
      </article>
    `).join("");
  }
  renderProjects("All");

  projectFilters.addEventListener("click", (e) => {
    const btn = e.target.closest(".chip-btn");
    if (!btn) return;
    projectFilters.querySelectorAll(".chip-btn").forEach(b => {
      b.classList.remove("is-active");
      b.setAttribute("aria-selected", "false");
    });
    btn.classList.add("is-active");
    btn.setAttribute("aria-selected", "true");
    renderProjects(btn.dataset.filter);
  });

  /* ---------------- Project modal ---------------- */
  const projectModal = document.getElementById("projectModal");
  const projectModalBody = document.getElementById("projectModalBody");

  function openProjectModal(project) {
    projectModalBody.innerHTML = `
      <div class="pmodal__media">Project Image Placeholder</div>
      <div class="pmodal__meta">
        <span class="tag">${project.year}</span>
        <span class="tag">${project.category}</span>
      </div>
      <h3 class="pmodal__title">${project.title}</h3>
      <div class="pmodal__section">
        <p class="pmodal__label">Description</p>
        <p class="pmodal__text">${project.description}</p>
      </div>
      <div class="pmodal__section">
        <p class="pmodal__label">Technologies</p>
        <div class="tag-row">${project.technologies.map(t => `<span class="tag">${t}</span>`).join("")}</div>
      </div>
      <div class="pmodal__section">
        <p class="pmodal__label">Learning Objective</p>
        <p class="pmodal__text">${project.learningObjective}</p>
      </div>
      <div class="pmodal__section">
        <p class="pmodal__label">What Was Learned</p>
        <p class="pmodal__text">${project.learned}</p>
      </div>
      <div class="pmodal__links">
        <a href="${project.github}" class="btn btn--outline btn--small" target="_blank" rel="noopener">GitHub</a>
        <a href="${project.demo}" class="btn btn--primary btn--small" target="_blank" rel="noopener">Live Demo</a>
      </div>
    `;
    openModal(projectModal);
  }

  projectGrid.addEventListener("click", (e) => {
    const card = e.target.closest(".project-card");
    if (!card) return;
    openProjectModal(projects[Number(card.dataset.index)]);
  });
  projectGrid.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      const card = e.target.closest(".project-card");
      if (!card) return;
      e.preventDefault();
      openProjectModal(projects[Number(card.dataset.index)]);
    }
  });

  /* ==============================================================
     PERFORMANCE
     ============================================================== */
  const perfGrid = document.getElementById("perfGrid");
  perfGrid.innerHTML = performance.map(p => `
    <div class="perf-card reveal is-visible">
      <div class="perf-card__year">${p.year}</div>
      <div class="perf-card__grade">${p.grade}</div>
      <p class="perf-card__desc">${p.desc}</p>
      <div class="perf-bar"><div class="perf-bar__fill" style="width:${p.fill}%"></div></div>
    </div>
  `).join("");

  /* ==============================================================
     ACHIEVEMENTS
     ============================================================== */
  const achievementList = document.getElementById("achievementList");
  achievementList.innerHTML = achievements.map(a => `
    <div class="achievement-row reveal is-visible">
      <span class="achievement-row__year">${a.year}</span>
      <span class="achievement-row__title">${a.title}</span>
    </div>
  `).join("");

  /* ==============================================================
     MILESTONES
     ============================================================== */
  const milestoneTabs = document.getElementById("milestoneTabs");
  const milestonePanel = document.getElementById("milestonePanel");

  function renderMilestonePanel(year) {
    const entry = milestones.find(m => m.year === year);
    milestonePanel.innerHTML = entry.items.map(i => `<span class="milestone-chip">${i}</span>`).join("");
  }

  milestoneTabs.innerHTML = milestones.map((m, i) => `
    <button class="chip-btn ${i === 0 ? "is-active" : ""}" data-year="${m.year}">${m.year}</button>
  `).join("");
  renderMilestonePanel(milestones[0].year);

  milestoneTabs.addEventListener("click", (e) => {
    const btn = e.target.closest(".chip-btn");
    if (!btn) return;
    milestoneTabs.querySelectorAll(".chip-btn").forEach(b => b.classList.remove("is-active"));
    btn.classList.add("is-active");
    renderMilestonePanel(btn.dataset.year);
  });

  /* ==============================================================
     CERTIFICATES — cards
     ============================================================== */
  const certificateGrid = document.getElementById("certificateGrid");

  certificateGrid.innerHTML = certificates.map((c, idx) => `
    <div class="cert-card reveal is-visible">
      <span class="cert-card__kicker">Certificate</span>
      <h3 class="cert-card__title">${c.title}</h3>
      <p class="cert-card__name">${c.student}</p>
      <div class="cert-card__row">
        <span>Issued ${c.date} · ${c.issuer}</span>
        <span class="cert-card__num">${c.certificateNumber}</span>
      </div>
      <div class="cert-card__actions">
        <button class="btn btn--outline btn--small" data-view-cert="${idx}">View Certificate</button>
        <button class="btn btn--ghost btn--small" data-print-cert="${idx}">Print</button>
      </div>
    </div>
  `).join("");

  /* ---------------- Certificate document builder ---------------- */
  function buildCertificateMarkup(c) {
    return `
      <div class="certificate" id="activeCertificate">
        <div class="certificate__gridlines" aria-hidden="true"></div>
        <div class="certificate__watermark" aria-hidden="true">TN</div>
        <span class="certificate__corner certificate__corner--tl" aria-hidden="true"></span>
        <span class="certificate__corner certificate__corner--tr" aria-hidden="true"></span>
        <span class="certificate__corner certificate__corner--bl" aria-hidden="true"></span>
        <span class="certificate__corner certificate__corner--br" aria-hidden="true"></span>

        <div class="certificate__content">
          <div class="certificate__brand">TECHNOVA</div>
          <div class="certificate__tagline">Technology · Learning · Growth</div>
          <div class="certificate__divider"></div>

          <div class="certificate__doctitle">Certificate<strong>Of Achievement</strong></div>

          <p class="certificate__lead">This certificate is proudly presented to</p>
          <div class="certificate__name">${c.student.toUpperCase()}</div>
          <p class="certificate__for">for successfully completing</p>
          <div class="certificate__course">${c.title}</div>

          <p class="certificate__skillslabel">Demonstrating learning and practical application in the following areas</p>
          <div class="certificate__skills">${c.skills.join(" • ")}</div>

          <div class="certificate__footer">
            <div class="certificate__meta">
              <div class="certificate__metalabel">Issue Date</div>
              <div class="certificate__metavalue">${c.date}</div>
            </div>
            <div class="certificate__sign">
              <div class="certificate__signline"></div>
              <div class="certificate__signname">${c.instructor}</div>
              <div class="certificate__signrole">Software Developer &amp; Technology Educator, TechNova</div>
            </div>
            <div class="certificate__meta certificate__meta--right">
              <div class="certificate__metalabel">Certificate No.</div>
              <div class="certificate__metavalue">${c.certificateNumber}</div>
            </div>
          </div>

          <div class="certificate__verifystrip">
            <div class="certificate__qr" aria-hidden="true">VERIFY</div>
            <div class="certificate__verifytext">
              <strong>Certificate Reference</strong>
              ${c.certificateNumber} — issued by TechNova. This is a TechNova learning
              record, not an externally accredited credential.
            </div>
            <div style="width:52px" aria-hidden="true"></div>
          </div>
        </div>
      </div>
    `;
  }

  /* ---------------- Certificate viewer modal ---------------- */
  const certModal = document.getElementById("certModal");
  const certZoomWrap = document.getElementById("certZoomWrap");
  const zoomLevel = document.getElementById("zoomLevel");
  let currentZoom = 1;

  function setZoom(z) {
    currentZoom = Math.min(1.6, Math.max(0.5, z));
    certZoomWrap.style.transform = `scale(${currentZoom})`;
    zoomLevel.textContent = `${Math.round(currentZoom * 100)}%`;
  }

  function openCertificate(index) {
    const c = certificates[index];
    certZoomWrap.innerHTML = buildCertificateMarkup(c);
    setZoom(1);
    openModal(certModal);
  }

  certificateGrid.addEventListener("click", (e) => {
    const viewBtn = e.target.closest("[data-view-cert]");
    if (viewBtn) {
      openCertificate(Number(viewBtn.dataset.viewCert));
      return;
    }
    const printBtn = e.target.closest("[data-print-cert]");
    if (printBtn) {
      openCertificate(Number(printBtn.dataset.printCert));
      setTimeout(() => window.print(), 250);
    }
  });

  document.getElementById("zoomIn").addEventListener("click", () => setZoom(currentZoom + 0.1));
  document.getElementById("zoomOut").addEventListener("click", () => setZoom(currentZoom - 0.1));
  document.getElementById("certPrint").addEventListener("click", () => window.print());

  document.getElementById("certDownload").addEventListener("click", () => {
    // No external libraries available: guide the person to use the browser's
    // print dialog and "Save as PDF" destination, which produces a clean,
    // correctly-sized A4 landscape file offline.
    window.print();
  });

  /* ==============================================================
     CERTIFICATE VERIFICATION
     ============================================================== */
  const verifyForm = document.getElementById("verifyForm");
  const verifyInput = document.getElementById("verifyInput");
  const verifyResult = document.getElementById("verifyResult");

  verifyForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const query = verifyInput.value.trim().toUpperCase();
    if (!query) return;

    const match = certificates.find(c => c.certificateNumber.toUpperCase() === query);

    if (match) {
      verifyResult.innerHTML = `
        <div class="verify-result__ok">
          <div class="verify-result__status">VERIFIED</div>
          <div class="verify-result__grid">
            <div><div class="verify-result__label">Certificate No.</div><div class="verify-result__value">${match.certificateNumber}</div></div>
            <div><div class="verify-result__label">Student</div><div class="verify-result__value">${match.student}</div></div>
            <div><div class="verify-result__label">Program</div><div class="verify-result__value">${match.title}</div></div>
            <div><div class="verify-result__label">Issue Date</div><div class="verify-result__value">${match.date}</div></div>
            <div><div class="verify-result__label">Issued By</div><div class="verify-result__value">${match.issuer}</div></div>
            <div><div class="verify-result__label">Instructor</div><div class="verify-result__value">${match.instructor}</div></div>
          </div>
        </div>
      `;
    } else {
      verifyResult.innerHTML = `
        <div class="verify-result__fail">
          Certificate record not found. Please check the certificate number.
        </div>
      `;
    }
  });

  /* ==============================================================
     MODAL HELPERS (shared)
     ============================================================== */
  let lastFocusedEl = null;

  function openModal(modalEl) {
    lastFocusedEl = document.activeElement;
    modalEl.hidden = false;
    document.body.style.overflow = "hidden";
    const closeBtn = modalEl.querySelector(".modal__close, [data-close-modal], [data-close-cert]");
    if (closeBtn) closeBtn.focus();
  }

  function closeModal(modalEl) {
    modalEl.hidden = true;
    document.body.style.overflow = "";
    if (lastFocusedEl) lastFocusedEl.focus();
  }

  document.querySelectorAll("[data-close-modal]").forEach(el => {
    el.addEventListener("click", () => closeModal(projectModal));
  });
  document.querySelectorAll("[data-close-cert]").forEach(el => {
    el.addEventListener("click", () => closeModal(certModal));
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      if (!projectModal.hidden) closeModal(projectModal);
      if (!certModal.hidden) closeModal(certModal);
    }
  });

  /* Basic focus trap for open modals */
  [projectModal, certModal].forEach(modalEl => {
    modalEl.addEventListener("keydown", (e) => {
      if (e.key !== "Tab") return;
      const focusables = modalEl.querySelectorAll(
        'button, [href], input, textarea, select, [tabindex]:not([tabindex="-1"])'
      );
      if (!focusables.length) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    });
  });

});
