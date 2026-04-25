// ============================================================
// PAGE CURL — Promo Páginas Web
// Incluir al final del <body> en cada página.
// ============================================================
(function() {

  const WPP_NUM = '59894691690';
  const WPP_MSG = encodeURIComponent('Hola! Vi que hacen páginas web, me gustaría saber más 🚀');
  const WPP_URL = 'https://wa.me/' + WPP_NUM + '?text=' + WPP_MSG;

  const style = document.createElement('style');
  style.textContent = `
    @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;600;700&display=swap');

    #pweb-wrap {
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100px;
      height: 100px;
      z-index: 9998;
      cursor: pointer;
      filter: drop-shadow(4px -4px 10px rgba(0,0,0,0.4));
      transition: width 0.5s cubic-bezier(0.4,0,0.2,1),
                  height 0.5s cubic-bezier(0.4,0,0.2,1);
    }

    #pweb-wrap.open {
      width: 300px;
      height: 300px;
    }

    #pweb-svg {
      position: absolute;
      bottom: 0; left: 0;
      width: 100%; height: 100%;
    }

    #pweb-thumb {
      position: absolute;
      bottom: 14px;
      left: 14px;
      width: 38px;
      height: 38px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: opacity 0.2s;
      pointer-events: none;
    }

    #pweb-thumb svg {
      width: 100%; height: 100%;
    }

    #pweb-wrap.open #pweb-thumb {
      opacity: 0;
    }

    #pweb-content {
      position: absolute;
      bottom: 0; left: 0;
      width: 100%; height: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-end;
      padding: 22px 28px;
      gap: 10px;
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.3s ease 0.2s;
    }

    #pweb-wrap.open #pweb-content {
      opacity: 1;
      pointer-events: auto;
    }

    #pweb-badge {
      font-family: 'Space Grotesk', sans-serif;
      font-size: 0.55rem;
      font-weight: 700;
      letter-spacing: 3px;
      text-transform: uppercase;
      color: #0ff;
      background: rgba(0,255,255,0.1);
      border: 1px solid rgba(0,255,255,0.3);
      border-radius: 20px;
      padding: 3px 10px;
      display: inline-block;
    }

    #pweb-headline {
      font-family: 'Space Grotesk', sans-serif;
      font-size: 0.95rem;
      font-weight: 700;
      line-height: 1.3;
      color: #fff;
      max-width: 200px;
    }

    #pweb-headline span {
      background: linear-gradient(90deg, #0ff, #a855f7);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    #pweb-sub {
      font-family: 'Space Grotesk', sans-serif;
      font-size: 0.65rem;
      color: rgba(255,255,255,0.65);
      line-height: 1.4;
      max-width: 210px;
    }

    #pweb-cta {
      display: flex;
      align-items: center;
      gap: 7px;
      text-decoration: none;
      background: linear-gradient(135deg, #0ff 0%, #a855f7 100%);
      color: #000;
      font-family: 'Space Grotesk', sans-serif;
      font-size: 0.65rem;
      font-weight: 700;
      letter-spacing: 1px;
      text-transform: uppercase;
      padding: 8px 16px;
      border-radius: 30px;
      transition: transform 0.2s, box-shadow 0.2s;
      box-shadow: 0 0 20px rgba(0,255,255,0.3);
      white-space: nowrap;
    }

    #pweb-cta:hover {
      transform: scale(1.06);
      box-shadow: 0 0 30px rgba(168,85,247,0.5);
    }

    #pweb-cta svg {
      width: 13px; height: 13px; fill: #000;
    }

    /* Partículas decorativas */
    .pweb-dot {
      position: absolute;
      border-radius: 50%;
      pointer-events: none;
      opacity: 0;
      transition: opacity 0.3s ease 0.35s;
    }

    #pweb-wrap.open .pweb-dot {
      opacity: 1;
    }

    .pweb-dot-1 {
      width: 5px; height: 5px;
      background: #0ff;
      top: 60px; left: 120px;
      box-shadow: 0 0 8px #0ff;
      animation: pwebPulse 2s ease-in-out infinite;
    }

    .pweb-dot-2 {
      width: 3px; height: 3px;
      background: #a855f7;
      top: 80px; left: 200px;
      box-shadow: 0 0 6px #a855f7;
      animation: pwebPulse 2.5s ease-in-out infinite 0.5s;
    }

    .pweb-dot-3 {
      width: 4px; height: 4px;
      background: #0ff;
      top: 100px; left: 160px;
      box-shadow: 0 0 7px #0ff;
      animation: pwebPulse 1.8s ease-in-out infinite 1s;
    }

    @keyframes pwebPulse {
      0%, 100% { transform: scale(1); opacity: 0.7; }
      50% { transform: scale(1.6); opacity: 1; }
    }
  `;
  document.head.appendChild(style);

  // Ícono de código para el thumb
  const codeIcon = `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 6L2 12L8 18" stroke="url(#ig1)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M16 6L22 12L16 18" stroke="url(#ig2)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M14 3L10 21" stroke="url(#ig3)" stroke-width="2.5" stroke-linecap="round"/>
    <defs>
      <linearGradient id="ig1" x1="2" y1="12" x2="8" y2="12" gradientUnits="userSpaceOnUse">
        <stop stop-color="#00ffff"/>
        <stop offset="1" stop-color="#a855f7"/>
      </linearGradient>
      <linearGradient id="ig2" x1="16" y1="12" x2="22" y2="12" gradientUnits="userSpaceOnUse">
        <stop stop-color="#00ffff"/>
        <stop offset="1" stop-color="#a855f7"/>
      </linearGradient>
      <linearGradient id="ig3" x1="10" y1="3" x2="14" y2="21" gradientUnits="userSpaceOnUse">
        <stop stop-color="#00ffff"/>
        <stop offset="1" stop-color="#a855f7"/>
      </linearGradient>
    </defs>
  </svg>`;

  // Ícono WhatsApp
  const wppIcon = `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.522 5.852L.057 23.75a.5.5 0 00.614.633l6.077-1.594A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.716 9.716 0 01-4.95-1.352l-.355-.21-3.676.964.981-3.578-.232-.368A9.718 9.718 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/>
  </svg>`;

  function buildWrap() {
    const wrap = document.createElement('div');
    wrap.id = 'pweb-wrap';

    wrap.innerHTML = `
      <!-- Triángulo de fondo -->
      <svg id="pweb-svg" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <defs>
          <linearGradient id="pwebGrad" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%"   stop-color="#060818"/>
            <stop offset="100%" stop-color="#0d1030"/>
          </linearGradient>
          <linearGradient id="pwebEdge" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%"   stop-color="#00ffff" stop-opacity="0.8"/>
            <stop offset="100%" stop-color="#a855f7" stop-opacity="0"/>
          </linearGradient>
          <linearGradient id="pwebGlow" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%"   stop-color="#00ffff" stop-opacity="0.06"/>
            <stop offset="100%" stop-color="#a855f7" stop-opacity="0.03"/>
          </linearGradient>
        </defs>
        <!-- Triángulo principal -->
        <polygon points="300,300 0,0 0,300" fill="url(#pwebGrad)"/>
        <!-- Capa de brillo -->
        <polygon points="300,300 0,0 0,300" fill="url(#pwebGlow)"/>
        <!-- Borde degradado cyan→violeta -->
        <line x1="300" y1="300" x2="0" y2="0" stroke="url(#pwebEdge)" stroke-width="1.5"/>
        <!-- Grid lines decorativas sutiles -->
        <line x1="0" y1="200" x2="100" y2="300" stroke="rgba(0,255,255,0.05)" stroke-width="1"/>
        <line x1="0" y1="150" x2="150" y2="300" stroke="rgba(168,85,247,0.05)" stroke-width="1"/>
        <line x1="0" y1="100" x2="200" y2="300" stroke="rgba(0,255,255,0.04)" stroke-width="1"/>
      </svg>

      <!-- Partículas -->
      <div class="pweb-dot pweb-dot-1"></div>
      <div class="pweb-dot pweb-dot-2"></div>
      <div class="pweb-dot pweb-dot-3"></div>

      <!-- Thumb cerrado -->
      <div id="pweb-thumb">${codeIcon}</div>

      <!-- Contenido expandido -->
      <div id="pweb-content">
        <div id="pweb-badge">✦ Servicio</div>
        <div id="pweb-headline">Hacemos tu <span>página web</span> a precios accesibles</div>
        <div id="pweb-sub">Diseño profesional, rápido y a tu medida. Consultá sin compromiso.</div>
        <a id="pweb-cta" href="${WPP_URL}" target="_blank" rel="noopener">
          ${wppIcon}
          Consultá ahora
        </a>
      </div>
    `;

    return wrap;
  }

  function init() {
    const wrap = buildWrap();
    document.body.appendChild(wrap);

    let isOpen = false;

    function open()  { if (!isOpen) { isOpen = true;  wrap.classList.add('open'); } }
    function close() { if (isOpen)  { isOpen = false; wrap.classList.remove('open'); } }
    function toggle() { isOpen ? close() : open(); }

    wrap.addEventListener('click', function(e) {
      if (e.target.closest('#pweb-cta')) return;
      toggle();
    });

    wrap.addEventListener('mouseenter', open);
    wrap.addEventListener('mouseleave', close);

    // Abrir en móvil al llegar al fondo
    if ('IntersectionObserver' in window) {
      const sentinel = document.createElement('div');
      sentinel.style.cssText = 'position:absolute;bottom:0;left:0;width:1px;height:1px;pointer-events:none;';
      document.body.style.position = 'relative';
      document.body.appendChild(sentinel);
      const obs = new IntersectionObserver(function(entries) {
        if (entries[0].isIntersecting) open(); else close();
      }, { threshold: 1.0 });
      obs.observe(sentinel);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
