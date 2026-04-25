// ============================================================
// BANNER GIGANTE — otromundo
// Para clientes que no pagan. Pegar donde más duela.
// ============================================================
(function() {

  const WPP_NUM = '59894691690';
  const WPP_MSG = encodeURIComponent('Hola! Vi que hacen páginas web, me gustaría saber más 🚀');
  const WPP_URL = 'https://wa.me/' + WPP_NUM + '?text=' + WPP_MSG;

  const style = document.createElement('style');
  style.textContent = `
    @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;600;700&display=swap');

    #om-banner-outer {
      width: 100%;
      min-height: 50vh;
      background: #060818;
      display: flex;
      align-items: stretch;
      overflow: hidden;
      position: relative;
      font-family: 'Space Grotesk', sans-serif;
      box-sizing: border-box;
    }

    #om-banner-outer.om-hidden { display: none; }

    #om-grid-svg {
      position: absolute;
      inset: 0;
      width: 100%; height: 100%;
      pointer-events: none;
    }

    .om-dot-anim {
      position: absolute;
      border-radius: 50%;
      pointer-events: none;
      animation: omPulse 2s ease-in-out infinite;
    }

    @keyframes omPulse {
      0%,100% { transform: scale(1); opacity: 0.5; }
      50% { transform: scale(1.8); opacity: 1; }
    }

    #om-close {
      position: absolute;
      top: 14px; right: 18px;
      background: rgba(255,255,255,0.07);
      border: 1px solid rgba(255,255,255,0.15);
      color: rgba(255,255,255,0.5);
      border-radius: 50%;
      width: 30px; height: 30px;
      display: flex; align-items: center; justify-content: center;
      cursor: pointer;
      font-size: 15px;
      z-index: 10;
      transition: background 0.2s;
      font-family: sans-serif;
      line-height: 1;
    }
    #om-close:hover { background: rgba(255,255,255,0.15); color: #fff; }

    #om-left {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 48px 48px 48px 52px;
      position: relative;
      z-index: 2;
      gap: 16px;
    }

    #om-logo-row {
      display: flex; align-items: center; gap: 12px; margin-bottom: 4px;
    }

    #om-brand {
      font-size: 1.6rem; font-weight: 700; letter-spacing: 2px;
      background: linear-gradient(90deg, #00ffff, #a855f7);
      -webkit-background-clip: text; -webkit-text-fill-color: transparent;
      background-clip: text; line-height: 1;
    }

    #om-badge {
      display: inline-block;
      font-size: 0.55rem; font-weight: 700;
      letter-spacing: 3px; text-transform: uppercase;
      color: #0ff;
      background: rgba(0,255,255,0.1);
      border: 1px solid rgba(0,255,255,0.3);
      border-radius: 20px; padding: 4px 14px;
      width: fit-content;
    }

    #om-headline {
      font-size: clamp(1.6rem, 3vw, 2.4rem);
      font-weight: 700; color: #fff; line-height: 1.2;
      max-width: 380px;
    }

    #om-headline span {
      background: linear-gradient(90deg, #00ffff, #a855f7);
      -webkit-background-clip: text; -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    #om-sub {
      font-size: 0.9rem; color: rgba(255,255,255,0.55);
      line-height: 1.6; max-width: 320px;
    }

    .om-features { display: flex; flex-direction: column; gap: 8px; margin-top: 4px; }

    .om-feat {
      display: flex; align-items: center; gap: 10px;
      font-size: 0.8rem; color: rgba(255,255,255,0.7);
    }

    .om-feat-dot {
      width: 7px; height: 7px; border-radius: 50%;
      background: linear-gradient(135deg, #00ffff, #a855f7);
      flex-shrink: 0;
    }

    #om-cta {
      display: inline-flex; align-items: center; gap: 10px;
      text-decoration: none;
      background: linear-gradient(135deg, #0ff 0%, #a855f7 100%);
      color: #000;
      font-family: 'Space Grotesk', sans-serif;
      font-size: 0.8rem; font-weight: 700;
      letter-spacing: 1.5px; text-transform: uppercase;
      padding: 14px 28px; border-radius: 40px;
      transition: transform 0.2s, box-shadow 0.2s;
      box-shadow: 0 0 30px rgba(0,255,255,0.2);
      margin-top: 8px;
      width: fit-content;
    }
    #om-cta:hover { transform: scale(1.04); box-shadow: 0 0 40px rgba(168,85,247,0.4); }
    #om-cta svg { width: 16px; height: 16px; fill: #000; flex-shrink: 0; }

    #om-right {
      width: 300px; flex-shrink: 0;
      display: flex; align-items: center; justify-content: center;
      padding: 40px 32px;
      position: relative; z-index: 2;
    }

    #om-price-card {
      background: rgba(255,255,255,0.04);
      border: 1px solid rgba(0,255,255,0.2);
      border-radius: 18px;
      padding: 30px 26px;
      display: flex; flex-direction: column;
      align-items: center; gap: 12px; text-align: center;
      width: 100%;
    }

    .om-price-tag {
      font-size: 0.6rem; letter-spacing: 3px; text-transform: uppercase;
      color: rgba(255,255,255,0.4);
    }

    .om-price-amount {
      font-size: 3.5rem; font-weight: 700;
      background: linear-gradient(90deg, #00ffff, #a855f7);
      -webkit-background-clip: text; -webkit-text-fill-color: transparent;
      background-clip: text; line-height: 1;
    }

    .om-price-period {
      font-size: 0.72rem; color: rgba(255,255,255,0.35);
      margin-top: -8px;
    }

    .om-price-divider {
      width: 44px; height: 1px;
      background: rgba(0,255,255,0.2);
    }

    .om-price-items { display: flex; flex-direction: column; gap: 8px; width: 100%; }

    .om-price-item {
      font-size: 0.75rem; color: rgba(255,255,255,0.6);
      display: flex; align-items: center; gap: 8px;
    }

    @media (max-width: 600px) {
      #om-banner-outer { flex-direction: column; }
      #om-right { width: 100%; padding: 0 28px 40px; }
      #om-left { padding: 48px 28px 20px; }
    }
  `;
  document.head.appendChild(style);

  const checkSVG = `<svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:15px;height:15px;flex-shrink:0;">
    <circle cx="7" cy="7" r="6.5" stroke="#00ffff" stroke-opacity="0.4"/>
    <path d="M4 7l2 2 4-4" stroke="#00ffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`;

  const wppSVG = `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.522 5.852L.057 23.75a.5.5 0 00.614.633l6.077-1.594A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.716 9.716 0 01-4.95-1.352l-.355-.21-3.676.964.981-3.578-.232-.368A9.718 9.718 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/>
  </svg>`;

  const logoSVG = (id) => `<svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" style="width:34px;height:34px;flex-shrink:0;">
    <defs>
      <linearGradient id="${id}" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#00ffff"/>
        <stop offset="100%" stop-color="#a855f7"/>
      </linearGradient>
    </defs>
    <circle cx="20" cy="20" r="18" fill="none" stroke="url(#${id})" stroke-width="2"/>
    <circle cx="20" cy="20" r="5" fill="url(#${id})"/>
    <line x1="20" y1="2" x2="20" y2="10" stroke="url(#${id})" stroke-width="2" stroke-linecap="round"/>
    <line x1="20" y1="30" x2="20" y2="38" stroke="url(#${id})" stroke-width="2" stroke-linecap="round"/>
    <line x1="2" y1="20" x2="10" y2="20" stroke="url(#${id})" stroke-width="2" stroke-linecap="round"/>
    <line x1="30" y1="20" x2="38" y2="20" stroke="url(#${id})" stroke-width="2" stroke-linecap="round"/>
    <line x1="5.5" y1="5.5" x2="11.5" y2="11.5" stroke="url(#${id})" stroke-width="1.5" stroke-linecap="round"/>
    <line x1="28.5" y1="28.5" x2="34.5" y2="34.5" stroke="url(#${id})" stroke-width="1.5" stroke-linecap="round"/>
    <line x1="34.5" y1="5.5" x2="28.5" y2="11.5" stroke="url(#${id})" stroke-width="1.5" stroke-linecap="round"/>
    <line x1="11.5" y1="28.5" x2="5.5" y2="34.5" stroke="url(#${id})" stroke-width="1.5" stroke-linecap="round"/>
  </svg>`;

  function build() {
    const outer = document.createElement('div');
    outer.id = 'om-banner-outer';

    outer.innerHTML = `
      <svg id="om-grid-svg" viewBox="0 0 1200 600" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <defs>
          <linearGradient id="omGlow" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#00ffff" stop-opacity="0.06"/>
            <stop offset="100%" stop-color="#a855f7" stop-opacity="0.03"/>
          </linearGradient>
        </defs>
        <rect width="1200" height="600" fill="url(#omGlow)"/>
        <line x1="0" y1="600" x2="1200" y2="0" stroke="#00ffff" stroke-opacity="0.07" stroke-width="1.5"/>
        <line x1="0" y1="450" x2="900" y2="0" stroke="#00ffff" stroke-opacity="0.04" stroke-width="1"/>
        <line x1="0" y1="300" x2="600" y2="0" stroke="#a855f7" stroke-opacity="0.04" stroke-width="1"/>
        <line x1="300" y1="600" x2="1200" y2="150" stroke="#a855f7" stroke-opacity="0.04" stroke-width="1"/>
      </svg>

      <div class="om-dot-anim" style="width:7px;height:7px;background:#0ff;top:50px;left:500px;box-shadow:0 0 12px #0ff;animation-duration:2.2s;"></div>
      <div class="om-dot-anim" style="width:4px;height:4px;background:#a855f7;top:100px;left:750px;box-shadow:0 0 8px #a855f7;animation-duration:3s;animation-delay:0.5s;"></div>
      <div class="om-dot-anim" style="width:5px;height:5px;background:#0ff;top:80%;left:620px;box-shadow:0 0 10px #0ff;animation-duration:1.8s;animation-delay:1s;"></div>
      <div class="om-dot-anim" style="width:3px;height:3px;background:#a855f7;top:65%;left:420px;box-shadow:0 0 7px #a855f7;animation-duration:2.7s;animation-delay:0.3s;"></div>

      <button id="om-close">✕</button>

      <div id="om-left">
        <div id="om-logo-row">
          ${logoSVG('lgBigBanner')}
          <div id="om-brand">otromundo</div>
        </div>
        <div id="om-badge">✦ Agencia de Páginas Web</div>
        <div id="om-headline">Tu <span>sitio web</span> listo y profesional</div>
        <div id="om-sub">Diseño moderno, rápido y a tu medida. Trabajamos con vos desde el primer boceto hasta el lanzamiento.</div>
        <div class="om-features">
          <div class="om-feat"><div class="om-feat-dot"></div>Diseño personalizado y único</div>
          <div class="om-feat"><div class="om-feat-dot"></div>Entrega rápida, sin vueltas</div>
          <div class="om-feat"><div class="om-feat-dot"></div>Soporte incluido el primer mes</div>
        </div>
        <a id="om-cta" href="${WPP_URL}" target="_blank" rel="noopener">
          ${wppSVG}
          Consultá por WhatsApp
        </a>
      </div>

      <div id="om-right">
        <div id="om-price-card">
          <div class="om-price-tag">desde</div>
          <div class="om-price-amount">$150</div>
          <div class="om-price-period">pago único / USD</div>
          <div class="om-price-divider"></div>
          <div class="om-price-items">
            <div class="om-price-item">${checkSVG} Dominio incluido el 1er año</div>
            <div class="om-price-item">${checkSVG} Hosting ultra-rápido</div>
            <div class="om-price-item">${checkSVG} Diseño responsive</div>
            <div class="om-price-item">${checkSVG} SEO básico incluido</div>
          </div>
        </div>
      </div>
    `;

    return outer;
  }

  function init() {
    // Insertar al principio del body (máxima visibilidad)
    const banner = build();
    document.body.insertBefore(banner, document.body.firstChild);

    document.getElementById('om-close').addEventListener('click', function() {
      document.getElementById('om-banner-outer').classList.add('om-hidden');
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
