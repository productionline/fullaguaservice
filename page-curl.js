// ============================================================
// PAGE CURL MEGA — otromundo
// Triángulo expandible con contenido completo de banner.
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
      bottom: 0; left: 0;
      width: 130px; height: 130px;
      z-index: 9998;
      cursor: pointer;
      filter: drop-shadow(6px -6px 18px rgba(0,0,0,0.5));
      transition: width 0.55s cubic-bezier(0.4,0,0.2,1),
                  height 0.55s cubic-bezier(0.4,0,0.2,1);
      overflow: hidden;
    }

    #pweb-wrap.open {
      width: min(680px, 95vw);
      height: min(480px, 90vh);
    }

    #pweb-bg {
      position: absolute;
      bottom: 0; left: 0;
      width: 100%; height: 100%;
      background: #060818;
      clip-path: polygon(100% 100%, 0 0, 0 100%);
    }

    #pweb-svg {
      position: absolute;
      bottom: 0; left: 0;
      width: 100%; height: 100%;
      pointer-events: none;
    }

    #pweb-thumb {
      position: absolute;
      bottom: 18px; left: 18px;
      width: 58px; height: 58px;
      display: flex; align-items: center; justify-content: center;
      transition: opacity 0.2s;
      pointer-events: none;
    }

    #pweb-wrap.open #pweb-thumb { opacity: 0; }

    #pweb-close {
      position: absolute;
      top: 16px; right: 16px;
      background: rgba(255,255,255,0.08);
      border: 1px solid rgba(255,255,255,0.15);
      color: rgba(255,255,255,0.5);
      border-radius: 50%;
      width: 32px; height: 32px;
      display: flex; align-items: center; justify-content: center;
      cursor: pointer;
      font-size: 16px;
      font-family: sans-serif;
      z-index: 10;
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.25s ease 0.25s, background 0.2s;
      line-height: 1;
      user-select: none;
    }

    #pweb-wrap.open #pweb-close { opacity: 1; pointer-events: auto; }
    #pweb-close:hover { background: rgba(255,255,255,0.18); color: #fff; }

    #pweb-content {
      position: absolute;
      bottom: 0; left: 0;
      width: 100%; height: 100%;
      display: flex;
      flex-direction: row;
      align-items: stretch;
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.3s ease 0.25s;
      box-sizing: border-box;
    }

    #pweb-wrap.open #pweb-content { opacity: 1; pointer-events: auto; }

    #pweb-left {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      padding: 28px 28px 32px 32px;
      gap: 10px;
      position: relative;
      z-index: 2;
      box-sizing: border-box;
      min-width: 0;
    }

    #pweb-right {
      width: 220px;
      flex-shrink: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 28px 22px 32px 12px;
      position: relative;
      z-index: 2;
      box-sizing: border-box;
      background: linear-gradient(135deg, rgba(13,16,48,0.97) 0%, rgba(18,8,48,0.97) 100%);
      border-left: 1px solid rgba(0,255,255,0.1);
    }

    #pweb-price-card {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 9px;
      text-align: center;
      width: 100%;
      box-sizing: border-box;
    }

    .pweb-price-tag {
      font-family: 'Space Grotesk', sans-serif;
      font-size: 0.55rem; letter-spacing: 3px; text-transform: uppercase;
      color: rgba(255,255,255,0.4);
    }

    .pweb-price-amount {
      font-family: 'Space Grotesk', sans-serif;
      font-size: 3rem; font-weight: 700;
      background: linear-gradient(90deg, #00ffff, #a855f7);
      -webkit-background-clip: text; -webkit-text-fill-color: transparent;
      background-clip: text; line-height: 1;
    }

    .pweb-price-period {
      font-family: 'Space Grotesk', sans-serif;
      font-size: 0.65rem; color: rgba(255,255,255,0.35); margin-top: -6px;
    }

    .pweb-price-divider { width: 40px; height: 1px; background: rgba(0,255,255,0.25); }

    .pweb-price-items { display: flex; flex-direction: column; gap: 8px; width: 100%; }

    .pweb-price-item {
      font-family: 'Space Grotesk', sans-serif;
      font-size: 0.7rem; color: rgba(255,255,255,0.7);
      display: flex; align-items: center; gap: 7px; text-align: left;
    }

    .pweb-check { width: 14px; height: 14px; flex-shrink: 0; }

    #pweb-logo-row { display: flex; align-items: center; gap: 9px; margin-bottom: 2px; }

    #pweb-brand-name {
      font-family: 'Space Grotesk', sans-serif;
      font-size: 1.35rem; font-weight: 700; letter-spacing: 2px;
      background: linear-gradient(90deg, #00ffff, #a855f7);
      -webkit-background-clip: text; -webkit-text-fill-color: transparent;
      background-clip: text; line-height: 1;
    }

    #pweb-badge {
      font-family: 'Space Grotesk', sans-serif;
      font-size: 0.5rem; font-weight: 700; letter-spacing: 3px; text-transform: uppercase;
      color: #0ff; background: rgba(0,255,255,0.1); border: 1px solid rgba(0,255,255,0.3);
      border-radius: 20px; padding: 3px 11px; display: inline-block; width: fit-content;
    }

    #pweb-headline {
      font-family: 'Space Grotesk', sans-serif;
      font-size: clamp(1.1rem, 2.5vw, 1.6rem); font-weight: 700; line-height: 1.25;
      color: #fff; max-width: 300px;
    }

    #pweb-headline span {
      background: linear-gradient(90deg, #0ff, #a855f7);
      -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
    }

    #pweb-sub {
      font-family: 'Space Grotesk', sans-serif;
      font-size: 0.75rem; color: rgba(255,255,255,0.55); line-height: 1.55; max-width: 280px;
    }

    .pweb-features { display: flex; flex-direction: column; gap: 6px; }

    .pweb-feat {
      display: flex; align-items: center; gap: 8px;
      font-family: 'Space Grotesk', sans-serif;
      font-size: 0.72rem; color: rgba(255,255,255,0.7);
    }

    .pweb-feat-dot {
      width: 6px; height: 6px; border-radius: 50%;
      background: linear-gradient(135deg, #00ffff, #a855f7); flex-shrink: 0;
    }

    #pweb-cta {
      display: inline-flex; align-items: center; gap: 8px; text-decoration: none;
      background: linear-gradient(135deg, #0ff 0%, #a855f7 100%); color: #000;
      font-family: 'Space Grotesk', sans-serif; font-size: 0.65rem; font-weight: 700;
      letter-spacing: 1.2px; text-transform: uppercase; padding: 11px 22px; border-radius: 30px;
      transition: transform 0.2s, box-shadow 0.2s;
      box-shadow: 0 0 24px rgba(0,255,255,0.2);
      white-space: nowrap; width: fit-content; margin-top: 4px;
    }

    #pweb-cta:hover { transform: scale(1.05); box-shadow: 0 0 34px rgba(168,85,247,0.4); }
    #pweb-cta svg { width: 14px; height: 14px; fill: #000; flex-shrink: 0; }

    .pweb-dot {
      position: absolute; border-radius: 50%; pointer-events: none;
      opacity: 0; transition: opacity 0.3s ease 0.4s;
    }

    #pweb-wrap.open .pweb-dot { opacity: 1; }

    .pweb-dot-1 { width: 6px; height: 6px; background: #0ff; top: 55px; left: 170px; box-shadow: 0 0 10px #0ff; animation: pwebPulse 2s ease-in-out infinite; }
    .pweb-dot-2 { width: 4px; height: 4px; background: #a855f7; top: 100px; left: 310px; box-shadow: 0 0 7px #a855f7; animation: pwebPulse 2.6s ease-in-out infinite 0.5s; }
    .pweb-dot-3 { width: 5px; height: 5px; background: #0ff; top: 130px; left: 230px; box-shadow: 0 0 9px #0ff; animation: pwebPulse 1.9s ease-in-out infinite 1s; }
    .pweb-dot-4 { width: 3px; height: 3px; background: #a855f7; top: 80px; left: 380px; box-shadow: 0 0 6px #a855f7; animation: pwebPulse 3s ease-in-out infinite 0.3s; }

    @keyframes pwebPulse {
      0%, 100% { transform: scale(1); opacity: 0.6; }
      50% { transform: scale(1.8); opacity: 1; }
    }

    @media (max-width: 500px) {
      #pweb-wrap.open { width: 98vw; height: 92vh; }
      #pweb-right { display: none; }
    }
  `;
  document.head.appendChild(style);

  const logoMark = (id) => `
    <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%;">
      <defs>
        <linearGradient id="${id}" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#00ffff"/>
          <stop offset="100%" stop-color="#a855f7"/>
        </linearGradient>
      </defs>
      <circle cx="20" cy="20" r="18" fill="none" stroke="url(#${id})" stroke-width="2"/>
      <circle cx="20" cy="20" r="5" fill="url(#${id})"/>
      <line x1="20" y1="2"  x2="20" y2="10" stroke="url(#${id})" stroke-width="2" stroke-linecap="round"/>
      <line x1="20" y1="30" x2="20" y2="38" stroke="url(#${id})" stroke-width="2" stroke-linecap="round"/>
      <line x1="2"  y1="20" x2="10" y2="20" stroke="url(#${id})" stroke-width="2" stroke-linecap="round"/>
      <line x1="30" y1="20" x2="38" y2="20" stroke="url(#${id})" stroke-width="2" stroke-linecap="round"/>
      <line x1="5.5"  y1="5.5"  x2="11.5" y2="11.5" stroke="url(#${id})" stroke-width="1.5" stroke-linecap="round"/>
      <line x1="28.5" y1="28.5" x2="34.5" y2="34.5" stroke="url(#${id})" stroke-width="1.5" stroke-linecap="round"/>
      <line x1="34.5" y1="5.5"  x2="28.5" y2="11.5" stroke="url(#${id})" stroke-width="1.5" stroke-linecap="round"/>
      <line x1="11.5" y1="28.5" x2="5.5"  y2="34.5" stroke="url(#${id})" stroke-width="1.5" stroke-linecap="round"/>
    </svg>`;

  const checkSVG = `<svg class="pweb-check" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="7" cy="7" r="6.5" stroke="#00ffff" stroke-opacity="0.4"/>
    <path d="M4 7l2 2 4-4" stroke="#00ffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`;

  const wppIcon = `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.522 5.852L.057 23.75a.5.5 0 00.614.633l6.077-1.594A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.716 9.716 0 01-4.95-1.352l-.355-.21-3.676.964.981-3.578-.232-.368A9.718 9.718 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/>
  </svg>`;

  function buildWrap() {
    const wrap = document.createElement('div');
    wrap.id = 'pweb-wrap';

    wrap.innerHTML = `
      <div id="pweb-bg"></div>

      <svg id="pweb-svg" viewBox="0 0 680 480" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <defs>
          <linearGradient id="pwebEdge" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%"   stop-color="#00ffff" stop-opacity="0.9"/>
            <stop offset="100%" stop-color="#a855f7" stop-opacity="0.1"/>
          </linearGradient>
        </defs>
        <line x1="680" y1="480" x2="0" y2="0" stroke="url(#pwebEdge)" stroke-width="1.5"/>
        <line x1="0" y1="350" x2="130" y2="480" stroke="rgba(0,255,255,0.06)" stroke-width="1"/>
        <line x1="0" y1="260" x2="220" y2="480" stroke="rgba(168,85,247,0.05)" stroke-width="1"/>
        <line x1="0" y1="170" x2="310" y2="480" stroke="rgba(0,255,255,0.04)" stroke-width="1"/>
        <line x1="0" y1="380" x2="680" y2="85"  stroke="rgba(0,255,255,0.04)" stroke-width="1"/>
        <line x1="0" y1="280" x2="680" y2="145" stroke="rgba(168,85,247,0.04)" stroke-width="1"/>
      </svg>

      <div class="pweb-dot pweb-dot-1"></div>
      <div class="pweb-dot pweb-dot-2"></div>
      <div class="pweb-dot pweb-dot-3"></div>
      <div class="pweb-dot pweb-dot-4"></div>

      <div id="pweb-thumb">${logoMark('lgThumb')}</div>

      <button id="pweb-close">✕</button>

      <div id="pweb-content">
        <div id="pweb-left">
          <div id="pweb-logo-row">
            <div style="width:30px;height:30px;flex-shrink:0;">${logoMark('lgContent')}</div>
            <div id="pweb-brand-name">otromundo</div>
          </div>
          <div id="pweb-badge">✦ Agencia de Páginas Web</div>
          <div id="pweb-headline">Tu <span>sitio web</span> listo y profesional</div>
          <div id="pweb-sub">Diseño moderno, rápido y a tu medida. Trabajamos con vos desde el primer boceto hasta el lanzamiento.</div>
          <div class="pweb-features">
            <div class="pweb-feat"><div class="pweb-feat-dot"></div>Diseño personalizado y único</div>
            <div class="pweb-feat"><div class="pweb-feat-dot"></div>Entrega rápida, sin vueltas</div>
            <div class="pweb-feat"><div class="pweb-feat-dot"></div>Soporte incluido el primer mes</div>
          </div>
          <a id="pweb-cta" href="${WPP_URL}" target="_blank" rel="noopener">
            ${wppIcon}
            Consultá por WhatsApp
          </a>
        </div>

        <div id="pweb-right">
          <div id="pweb-price-card">
            <div class="pweb-price-tag">desde</div>
            <div class="pweb-price-amount">$150</div>
            <div class="pweb-price-period">pago único / USD</div>
            <div class="pweb-price-divider"></div>
            <div class="pweb-price-items">
              <div class="pweb-price-item">${checkSVG} Dominio incluido el 1er año</div>
              <div class="pweb-price-item">${checkSVG} Hosting ultra-rápido</div>
              <div class="pweb-price-item">${checkSVG} Diseño responsive</div>
              <div class="pweb-price-item">${checkSVG} SEO básico incluido</div>
            </div>
          </div>
        </div>
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

    wrap.addEventListener('click', function(e) {
      if (e.target.closest('#pweb-cta') || e.target.closest('#pweb-close')) return;
      isOpen ? close() : open();
    });

    document.getElementById('pweb-close').addEventListener('click', function(e) {
      e.stopPropagation();
      close();
    });

    wrap.addEventListener('mouseenter', open);
    wrap.addEventListener('mouseleave', function(e) {
      if (!e.relatedTarget || !wrap.contains(e.relatedTarget)) close();
    });

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
