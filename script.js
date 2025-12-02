let focusedElementBeforeModal = null;

// === TEMA ===
const body = document.body;
const themeToggle = document.getElementById('themeToggle');
const savedTheme = localStorage.getItem('theme') || 'dark-mode';
body.className = savedTheme;
themeToggle.textContent = savedTheme === 'dark-mode' ? '☀️' : '🌙';

// === PARTÍCULAS ===
const loadParticles = () => {
  const isDark = document.body.classList.contains('dark-mode');
  const particleColor = isDark ? "#ffffff" : "#007BFF";
  tsParticles.load("tsparticles", {
    fpsLimit: 60,
    particles: {
      number: { value: 40, density: { enable: true, area: 800 } },
      color: { value: particleColor },
      shape: { type: "circle" },
      opacity: { value: 0.5, random: true, anim: { enable: true, speed: 1, opacity_min: 0.1, sync: false } },
      size: { value: 3, random: true, anim: { enable: false } },
      move: {
        enable: true,
        speed: 1,
        direction: "top",
        random: true,
        straight: false,
        outModes: "out",
        bounce: false
      }
    },
    interactivity: {
      detectsOn: "canvas",
      events: {
        onHover: { enable: false },
        onClick: { enable: false },
        resize: true
      }
    },
    detectRetina: true
  });
};

loadParticles();

themeToggle?.addEventListener('click', () => {
  body.classList.toggle('light-mode');
  body.classList.toggle('dark-mode');
  const isDark = body.classList.contains('dark-mode');
  localStorage.setItem('theme', isDark ? 'dark-mode' : 'light-mode');
  themeToggle.textContent = isDark ? '☀️' : '🌙';
  loadParticles();
});

// === MENÚ MÓVIL ===
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.querySelector('.nav-links');

menuToggle?.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  navLinks?.classList.toggle('active');
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks?.classList.remove('active');
    menuToggle?.classList.remove('active');
  });
});

// === MODALES ===
function openModal(id, openerElement) {
  const modal = document.getElementById(`modal-${id}`);
  if (!modal) return;
  focusedElementBeforeModal = openerElement;
  modal.style.display = 'flex';
  document.body.style.overflow = 'hidden';
  setTimeout(() => {
    const closeModalButton = modal.querySelector('.close-modal');
    if (closeModalButton) closeModalButton.focus();
  }, 100);
}

function closeModal(id) {
  const modal = document.getElementById(`modal-${id}`);
  if (!modal) return;
  modal.style.display = 'none';
  document.body.style.overflow = 'auto';
  if (focusedElementBeforeModal) {
    focusedElementBeforeModal.focus();
    focusedElementBeforeModal = null;
  }
}

// === TARJETAS CLICKEABLES ===
document.querySelectorAll('.clickable-card').forEach(card => {
  card.addEventListener('click', () => {
    const modalId = card.getAttribute('data-modal');
    openModal(modalId, card);
  });
});

window.addEventListener('click', (e) => {
  if (e.target.classList.contains('modal')) {
    e.target.style.display = 'none';
    document.body.style.overflow = 'auto';
    if (focusedElementBeforeModal) {
      focusedElementBeforeModal.focus();
      focusedElementBeforeModal = null;
    }
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    const activeModal = document.querySelector('.modal[style*="display: flex"]');
    if (activeModal) {
      activeModal.style.display = 'none';
      document.body.style.overflow = 'auto';
      if (focusedElementBeforeModal) {
        focusedElementBeforeModal.focus();
        focusedElementBeforeModal = null;
      }
    }
  }
});

// === CARRUSEL PRINCIPAL ===
const initMainCarousel = () => {
  const track = document.getElementById('carouselTrack');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  if (!track || !prevBtn || !nextBtn) return;

  const totalImages = 5;
  const basePath = 'img/ejemplo';
  const extension = '.webp';

  for (let i = 1; i <= totalImages; i++) {
    const img = document.createElement('img');
    img.src = `${basePath}${i}${extension}`;
    img.alt = `Ejemplo ${i} - Tecnología de detección`;
    img.loading = 'lazy';
    track.appendChild(img);
  }

  let currentIndex = 0;

  function updateCarousel() {
    const img = track.querySelector('img');
    if (!img) return;
    const width = img.clientWidth || 800;
    track.style.transform = `translateX(-${currentIndex * width}px)`;
  }

  function syncWidth() {
    track.style.transition = 'none';
    updateCarousel();
    setTimeout(() => {
      track.style.transition = 'transform 0.5s ease-in-out';
    }, 50);
  }

  window.addEventListener('resize', syncWidth);
  syncWidth();

  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalImages - 1;
    updateCarousel();
  });

  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex < totalImages - 1) ? currentIndex + 1 : 0;
    updateCarousel();
  });

  setInterval(() => {
    currentIndex = (currentIndex < totalImages - 1) ? currentIndex + 1 : 0;
    updateCarousel();
  }, 3000);
};

// === CARRUSEL DE PROBLEMAS ===
const initProblemsCarousel = () => {
  const problemsTrack = document.getElementById('problemsTrack');
  const prevProblemsBtn = document.getElementById('prevProblemsBtn');
  const nextProblemsBtn = document.getElementById('nextProblemsBtn');
  if (!problemsTrack) return;

  const totalProblems = 5;
  const basePath = 'img/problemas';

  for (let i = 1; i <= totalProblems; i++) {
    const img = document.createElement('img');
    img.src = `${basePath}${i}.webp`;
    img.alt = `Solución profesional ${i}`;
    img.loading = 'lazy';
    problemsTrack.appendChild(img);
  }

  let currentProblemIndex = 0;

  function updateProblemsCarousel() {
    const img = problemsTrack.querySelector('img');
    if (!img) return;
    const width = img.clientWidth || 800;
    problemsTrack.style.transform = `translateX(-${currentProblemIndex * width}px)`;
  }

  function syncProblemsWidth() {
    problemsTrack.style.transition = 'none';
    updateProblemsCarousel();
    setTimeout(() => {
      problemsTrack.style.transition = 'transform 0.5s ease-in-out';
    }, 50);
  }

  window.addEventListener('resize', syncProblemsWidth);
  syncProblemsWidth();

  prevProblemsBtn?.addEventListener('click', () => {
    currentProblemIndex = (currentProblemIndex > 0) ? currentProblemIndex - 1 : totalProblems - 1;
    updateProblemsCarousel();
  });

  nextProblemsBtn?.addEventListener('click', () => {
    currentProblemIndex = (currentProblemIndex < totalProblems - 1) ? currentProblemIndex + 1 : 0;
    updateProblemsCarousel();
  });

  setInterval(() => {
    currentProblemIndex = (currentProblemIndex < totalProblems - 1) ? currentProblemIndex + 1 : 0;
    updateProblemsCarousel();
  }, 4000);
};

// === HERRAMIENTAS FLOTANTES (solo escritorio) ===
const initFloatingTools = () => {
  if (window.innerWidth <= 768) return;

  const toolContainer = document.getElementById('floating-tools-container');
  if (!toolContainer) return;

  function createTool() {
    const tool = document.createElement('img');
    tool.className = 'floating-tool';
    tool.src = 'favicon-192.webp';
    tool.width = 50;
    tool.height = 50;
    tool.style.left = Math.random() * 95 + 'vw';
    tool.style.animationDuration = (Math.random() * 5 + 8) + 's';
    toolContainer.appendChild(tool);
    setTimeout(() => tool.remove(), 13000);
  }

  setInterval(createTool, 3000);
};

// === PODCAST ===
const initPodcast = () => {
  const podcastBtn = document.getElementById('podcastBtn');
  const podcastAudio = document.getElementById('podcastAudio');
  if (!podcastBtn || !podcastAudio) return;

  let isReady = false;

  podcastAudio.addEventListener('canplaythrough', () => {
    isReady = true;
    podcastBtn.disabled = false;
    podcastBtn.style.opacity = '1';
    podcastBtn.style.pointerEvents = 'auto';
    resetPodcastButton();
  });

  podcastBtn.addEventListener('click', () => {
    if (!isReady) {
      podcastBtn.disabled = true;
      podcastBtn.style.opacity = '0.7';
      podcastBtn.style.pointerEvents = 'none';
      podcastBtn.innerHTML = '<span>Cargando...</span>';
      podcastAudio.load();
      return;
    }

    if (podcastAudio.paused) {
      podcastAudio.play();
      podcastBtn.innerHTML = `
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
        </svg>
        <span>En reproducción...</span>
      `;
    } else {
      podcastAudio.pause();
      resetPodcastButton();
    }
  });

  podcastAudio.addEventListener('ended', resetPodcastButton);

  function resetPodcastButton() {
    podcastBtn.innerHTML = `
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M8 5v14l11-7z"/>
      </svg>
      <span>Podcast Explicativo</span>
    `;
  }
};

// === FUNCIONES DE COMPARTIR ===
function shareToWhatsApp() {
  const url = encodeURIComponent(window.location.href);
  window.open(`https://wa.me/?text=${url}`, '_blank');
}

function shareToFacebook() {
  const url = encodeURIComponent(window.location.href);
  window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
}

function copyLink() {
  navigator.clipboard.writeText(window.location.href).then(() => {
    alert('¡Enlace copiado al portapapeles!');
  }).catch(err => {
    console.error('Error al copiar:', err);
  });
}
// === FAQ ACCORDION ===
const initFAQ = () => {
  const faqQuestions = document.querySelectorAll('.faq-question');
  
  faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
      const isExpanded = question.getAttribute('aria-expanded') === 'true';
      const answer = question.nextElementSibling;
      
      // Cerrar todas las demás preguntas (opcional - comenta estas líneas si quieres múltiples abiertas)
      faqQuestions.forEach(q => {
        if (q !== question) {
          q.setAttribute('aria-expanded', 'false');
          q.nextElementSibling.classList.remove('active');
        }
      });
      
      // Toggle de la pregunta actual
      question.setAttribute('aria-expanded', !isExpanded);
      answer.classList.toggle('active');
    });
    
    // Accesibilidad: permitir usar Enter y Espacio
    question.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        question.click();
      }
    });
  });
};
// === INICIALIZACIÓN ===
document.addEventListener('DOMContentLoaded', () => {
  initMainCarousel();
  initProblemsCarousel();
  initFloatingTools();
  initPodcast();
  initFAQ(); // ← AGREGAR ESTA LÍNEA
});
