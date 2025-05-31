// Add at top
let contentData = {};
function loadContent() {
  return fetch('assets/data/content.json')
    .then(res => res.json())
    .then(json => { contentData = json; });
}

// Render functions
function renderProjects() {
  const container = document.querySelector('.projects-list');
  container.innerHTML = '';
  contentData.projects.forEach(proj => {
    const div = document.createElement('div');
    div.className = 'project-item featured';
    div.setAttribute('data-category', proj.category.join(' '));
    div.setAttribute('data-aos', 'fade-up');
    div.innerHTML = `
      <div class="project-image-container">
        <img src="${proj.image}" alt="${proj.title}" class="project-image">
      </div>
      <div class="project-content">
        <h3>${proj.title}</h3>
        <p>${proj.description}</p>
        <div class="project-tech">
          ${proj.tech.map(t=>`<span>${t}</span>`).join('')}
        </div>
        <div class="project-links">
          <a href="javascript:void(0)" class="project-link" onclick="openProjectModal('${proj.id}')">
            <i class="fas fa-eye"></i> Details
          </a>
          ${proj.github?`<a href="${proj.github}" class="project-link"><i class="fab fa-github"></i> Code</a>`:''}
          ${proj.demo?`<a href="${proj.demo}" class="project-link"><i class="fas fa-external-link-alt"></i> Demo</a>`:''}
        </div>
      </div>
    `;
    container.appendChild(div);
  });
}

function renderPublications() {
  const container = document.querySelector('.publications-list');
  container.innerHTML = '';
  contentData.publications.forEach(pub => {
    const div = document.createElement('div');
    div.className = 'publication-item';
    div.setAttribute('data-aos', 'fade-up');
    div.innerHTML = `
      <div class="publication-icon">
        <i class="fas fa-file-alt"></i>
      </div>
      <div class="publication-content">
        <h3>${pub.title}</h3>
        <p class="authors">${pub.authors.join(', ')}</p>
        <p class="publication-venue">${pub.venue}</p>
        <p class="publication-summary">${pub.summary}</p>
        <div class="publication-links">
          <a href="${pub.pdf}" class="publication-link"><i class="fas fa-file-pdf"></i> PDF</a>
          <a href="${pub.doi}" class="publication-link"><i class="fas fa-link"></i> DOI</a>
        </div>
      </div>
    `;
    container.appendChild(div);
  });
}

function renderAchievements() {
  const container = document.querySelector('.achievements-list');
  container.innerHTML = '';
  contentData.achievements.forEach(a => {
    const div = document.createElement('div');
    div.className = 'achievement-card';
    div.setAttribute('data-aos', 'fade-up');
    div.innerHTML = `
      <div class="achievement-icon">
        <i class="${a.icon}"></i>
      </div>
      <div class="achievement-content">
        <h3>${a.title}</h3>
        <p class="achievement-organization">${a.organization}</p>
        <p class="achievement-year">${a.year}</p>
        <p class="achievement-description">${a.description}</p>
      </div>
    `;
    container.appendChild(div);
  });
}

// Replace static content calls
// Wrap initializers to wait for content load
const originalDOMContentLoaded = document.listenerCount && document.addEventListener;
// Modify DOMContentLoaded
document.addEventListener('DOMContentLoaded', function() {
  loadContent().then(() => {
    renderProjects();
    renderPublications();
    renderAchievements();
    // after dynamic injection, reinit filters and modal
    initProjectFilters();
    initModal();
  });

  // Initialize AOS (Animate On Scroll)
  AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
    offset: 100
  });

  // Initialize all functionality
  initMobileNavigation();
  initSidebarNavigation();
  initMobileSidebar();
  initThemeToggle();
  initScrollProgress();
  initActiveSectionLinks();
  initDynamicTagline();
  initScrollToTop();
  initProjectFilters();
  initModal();
  
  // Loading animation
  document.body.classList.add('loaded');
});

// Mobile Navigation functionality
function initMobileNavigation() {
    const mobileNavToggle = document.getElementById('mobile-nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Mobile menu toggle
    if (mobileNavToggle) {
        mobileNavToggle.addEventListener('click', () => {
            mobileNavToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileNavToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!mobileNavToggle.contains(e.target) && !navMenu.contains(e.target)) {
            mobileNavToggle.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });

    // Smooth scrolling for mobile navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = window.innerWidth <= 1024 ? targetSection.offsetTop - 80 : targetSection.offsetTop - 20;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Sidebar Navigation functionality
function initSidebarNavigation() {
    const sidebarLinks = document.querySelectorAll('.sidebar-link');

    // Smooth scrolling for sidebar navigation links
    sidebarLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = window.innerWidth <= 1024 ? targetSection.offsetTop - 80 : targetSection.offsetTop - 20;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Theme toggle functionality
function initThemeToggle() {
    const sidebarThemeToggle = document.getElementById('sidebar-theme-toggle');
    const globalThemeToggle = document.getElementById('global-theme-toggle');
    const globalThemeIcon = globalThemeToggle?.querySelector('i');
    const sidebarThemeIcon = sidebarThemeToggle?.querySelector('i');
    const sidebarThemeText = sidebarThemeToggle?.querySelector('span');
    
    // Check for saved theme preference or default to light mode
    const currentTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', currentTheme);
    
    // Update icons based on current theme
    updateThemeIcon(currentTheme, sidebarThemeIcon);
    updateThemeIcon(currentTheme, globalThemeIcon);
    updateSidebarThemeToggle(currentTheme, sidebarThemeIcon, sidebarThemeText);
    
    // Theme toggle event listeners
    const toggleTheme = () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme, sidebarThemeIcon);
        updateThemeIcon(newTheme, globalThemeIcon);
        updateSidebarThemeToggle(newTheme, sidebarThemeIcon, sidebarThemeText);
        
        // Add a subtle animation
        document.body.style.transition = 'background-color 0.3s ease, color 0.3s ease';
        setTimeout(() => {
            document.body.style.transition = '';
        }, 300);
    };

    [sidebarThemeToggle, globalThemeToggle].forEach(btn=>{
        if(btn) btn.addEventListener('click',toggleTheme);
    });
}

function updateThemeIcon(theme, icon) {
    if (icon) {
        icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    }
}

function updateSidebarThemeToggle(theme, icon, text) {
    if (icon) {
        icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    }
    if (text) {
        text.textContent = theme === 'dark' ? 'Light Mode' : 'Dark Mode';
    }
}

// Scroll progress indicator
function initScrollProgress() {
    const scrollProgress = document.createElement('div');
    scrollProgress.className = 'scroll-progress';
    document.body.appendChild(scrollProgress);

    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = docHeight > 0 ? scrollTop / docHeight : 0;
        scrollProgress.style.transform = `scaleX(${scrollPercent})`;
    });
}

// Active section links based on scroll position
function initActiveSectionLinks() {
    const sections = document.querySelectorAll('section[id]');
    const sidebarLinks = document.querySelectorAll('.sidebar-link');
    const mobileNavLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';
        const scrollPos = window.pageYOffset + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        // Update sidebar navigation
        sidebarLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });

        // Update mobile navigation
        mobileNavLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// Dynamic tagline effect
function initDynamicTagline() {
    const taglineElement = document.getElementById('tagline-text');
    if (!taglineElement) return;
    
    const taglines = [
        "5+ Years in Software & AI",
        "Published AAAI Author", 
        "Systems Architect & Researcher",
        "MathWorks Competition Winner",
        "YSEALI Fellowship Recipient"
    ];
    
    let currentIndex = 0;
    const typingSpeed = 100;
    const deletingSpeed = 50;
    const pauseDuration = 2500;
    
    function typeWriter() {
        const currentTagline = taglines[currentIndex];
        const currentText = taglineElement.textContent;
        
        if (currentText.length < currentTagline.length) {
            // Typing
            taglineElement.textContent = currentTagline.substring(0, currentText.length + 1);
            setTimeout(typeWriter, typingSpeed);
        } else {
            // Pause then delete
            setTimeout(() => {
                deleteText();
            }, pauseDuration);
        }
    }
    
    function deleteText() {
        const currentText = taglineElement.textContent;
        
        if (currentText.length > 0) {
            taglineElement.textContent = currentText.substring(0, currentText.length - 1);
            setTimeout(deleteText, deletingSpeed);
        } else {
            // Move to next tagline
            currentIndex = (currentIndex + 1) % taglines.length;
            setTimeout(typeWriter, 500);
        }
    }
    
    // Start the effect after a delay
    setTimeout(typeWriter, 1500);
}

// Project filters functionality
function initProjectFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectItems = document.querySelectorAll('.project-item');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');
            
            const filter = btn.getAttribute('data-filter');
            
            projectItems.forEach(item => {
                const categories = item.getAttribute('data-category').split(' ');
                
                if (filter === 'all' || categories.includes(filter)) {
                    item.classList.remove('hidden');
                } else {
                    item.classList.add('hidden');
                }
            });
        });
    });
}

// Modal functionality
function initModal() {
    const modal = document.getElementById('project-modal');
    const modalClose = document.querySelector('.modal-close');
    
    // Close modal when clicking the X
    if (modalClose) {
        modalClose.addEventListener('click', closeModal);
    }
    
    // Close modal when clicking outside
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
}

function openProjectModal(projectId) {
    const modal = document.getElementById('project-modal');
    const modalBody = document.getElementById('modal-body');
    
    const projectData = getProjectData(projectId);
    
    modalBody.innerHTML = `
        <h2>${projectData.title}</h2>
        <div class="modal-project-info">
            <div class="modal-project-image">
                <i class="${projectData.icon}"></i>
            </div>
            <div class="modal-project-details">
                <p class="modal-description">${projectData.description}</p>
                <div class="modal-features">
                    <h3>Key Features</h3>
                    <ul>
                        ${projectData.features.map(feature => `<li>${feature}</li>`).join('')}
                    </ul>
                </div>
                <div class="modal-tech">
                    <h3>Technologies Used</h3>
                    <div class="modal-tech-tags">
                        ${projectData.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                    </div>
                </div>
                <div class="modal-links">
                    ${projectData.github ? `<a href="${projectData.github}" class="modal-btn" target="_blank"><i class="fab fa-github"></i> View Code</a>` : ''}
                    ${projectData.demo ? `<a href="${projectData.demo}" class="modal-btn" target="_blank"><i class="fas fa-external-link-alt"></i> Live Demo</a>` : ''}
                </div>
            </div>
        </div>
    `;
    
    modal.classList.add('active');
    // disable background scroll
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('project-modal');
    modal.classList.remove('active');
    // re-enable background scroll
    document.body.style.overflow = '';
}

// Make modal functions available globally
window.openProjectModal = openProjectModal;
window.closeModal = closeModal;

function getProjectData(projectId) {
  return contentData.projects.find(p => p.id === projectId) || {};
}

// Scroll to top functionality
function initScrollToTop() {
    // Create scroll to top button
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollToTopBtn.className = 'scroll-to-top';
    scrollToTopBtn.setAttribute('aria-label', 'Scroll to top');
    
    // Style the button
    Object.assign(scrollToTopBtn.style, {
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        backgroundColor: 'var(--primary-color)',
        color: 'white',
        border: 'none',
        cursor: 'pointer',
        fontSize: '18px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: 'var(--shadow-lg)',
        transform: 'translateY(100px)',
        transition: 'transform 0.3s ease, background-color 0.3s ease',
        zIndex: '1000'
    });
    
    document.body.appendChild(scrollToTopBtn);
    
    // Show/hide button based on scroll position
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.style.transform = 'translateY(0)';
        } else {
            scrollToTopBtn.style.transform = 'translateY(100px)';
        }
    });
    
    // Scroll to top when clicked
    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Hover effect
    scrollToTopBtn.addEventListener('mouseenter', () => {
        scrollToTopBtn.style.backgroundColor = 'var(--primary-dark)';
    });
    
    scrollToTopBtn.addEventListener('mouseleave', () => {
        scrollToTopBtn.style.backgroundColor = 'var(--primary-color)';
    });
}

// Keyboard navigation support
function initKeyboardNavigation() {
    document.addEventListener('keydown', (e) => {
        // ESC key to close mobile menu
        if (e.key === 'Escape') {
            const mobileNavToggle = document.getElementById('mobile-nav-toggle');
            const navMenu = document.getElementById('nav-menu');
            mobileNavToggle.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
}

// Initialize enhanced features after page load
window.addEventListener('load', () => {
    initKeyboardNavigation();
});

// Add CSS animations dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .animate-in {
        animation: fadeInUp 0.8s ease forwards;
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(40px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    /* Modal styles */
    .modal-project-info {
        display: grid;
        grid-template-columns: 1fr 2fr;
        gap: 2rem;
        margin-top: 1.5rem;
    }
    
    .modal-project-image {
        display: flex;
        align-items: center;
        justify-content: center;
        background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
        border-radius: 1rem;
        color: white;
        font-size: 4rem;
        aspect-ratio: 1;
    }
    
    .modal-description {
        font-size: 1.125rem;
        line-height: 1.7;
        margin-bottom: 1.5rem;
        color: var(--text-secondary);
    }
    
    .modal-features,
    .modal-tech {
        margin-bottom: 1.5rem;
    }
    
    .modal-features h3,
    .modal-tech h3 {
        color: var(--text-primary);
        margin-bottom: 0.75rem;
    }
    
    .modal-features ul {
        list-style: none;
        padding: 0;
    }
    
    .modal-features li {
        padding: 0.5rem 0;
        color: var(--text-secondary);
        position: relative;
        padding-left: 1.5rem;
    }
    
    .modal-features li::before {
        content: '✓';
        position: absolute;
        left: 0;
        color: var(--primary-color);
        font-weight: bold;
    }
    
    .modal-tech-tags {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
    }
    
    .tech-tag {
        background-color: var(--bg-secondary);
        color: var(--text-primary);
        padding: 0.25rem 0.75rem;
        border-radius: 0.5rem;
        font-size: 0.875rem;
        font-weight: 500;
    }
    
    .modal-links {
        display: flex;
        gap: 1rem;
        margin-top: 1.5rem;
    }
    
    .modal-btn {
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        padding: 0.75rem 1.5rem;
        background-color: var(--primary-color);
        color: white;
        text-decoration: none;
        border-radius: 0.5rem;
        font-weight: 600;
        transition: var(--transition);
    }
    
    .modal-btn:hover {
        background-color: var(--primary-dark);
        transform: translateY(-1px);
    }
    
    @media (max-width: 768px) {
        .modal-project-info {
            grid-template-columns: 1fr;
            gap: 1rem;
        }
        
        .modal-project-image {
            font-size: 3rem;
            aspect-ratio: 2/1;
        }
        
        .modal-links {
            flex-direction: column;
        }
    }
`;
document.head.appendChild(style);

// Mobile Sidebar functionality
function initMobileSidebar() {
    // Create sidebar overlay for mobile
    const overlay = document.createElement('div');
    overlay.className = 'sidebar-overlay';
    document.body.appendChild(overlay);
    
    const sidebar = document.getElementById('sidebar');
    
    // Create mobile sidebar toggle button (add to mobile nav if needed)
    const sidebarToggleBtn = document.createElement('button');
    sidebarToggleBtn.innerHTML = '<i class="fas fa-bars"></i>';
    sidebarToggleBtn.className = 'mobile-sidebar-toggle';
    sidebarToggleBtn.setAttribute('aria-label', 'Toggle sidebar');
    
    // Style the button
    Object.assign(sidebarToggleBtn.style, {
        position: 'fixed',
        top: '1rem',
        left: '1rem',
        width: '3rem',
        height: '3rem',
        borderRadius: '0.5rem',
        backgroundColor: 'var(--primary-color)',
        color: 'white',
        border: 'none',
        cursor: 'pointer',
        fontSize: '1.25rem',
        display: 'none',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: 'var(--shadow-lg)',
        zIndex: '1600',
        transition: 'all 0.3s ease'
    });
    
    document.body.appendChild(sidebarToggleBtn);
    
    // Show/hide mobile sidebar toggle based on screen size
    function updateSidebarToggle() {
        if (window.innerWidth <= 1024) {
            sidebarToggleBtn.style.display = 'flex';
        } else {
            sidebarToggleBtn.style.display = 'none';
            sidebar.classList.remove('active');
            overlay.classList.remove('active');
        }
    }
    
    // Toggle sidebar on mobile
    sidebarToggleBtn.addEventListener('click', () => {
        sidebar.classList.toggle('active');
        overlay.classList.toggle('active');
    });
    
    // Close sidebar when clicking overlay
    overlay.addEventListener('click', () => {
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
    });
    
    // Close sidebar when clicking sidebar links on mobile
    const sidebarLinks = document.querySelectorAll('.sidebar-link');
    sidebarLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 1024) {
                sidebar.classList.remove('active');
                overlay.classList.remove('active');
            }
        });
    });
    
    // Update on resize
    window.addEventListener('resize', updateSidebarToggle);
    updateSidebarToggle();
} 