// ============================================================
// PAGE CURL MEGA — otromundo
// ============================================================
(function() {

  const WPP_URL = 'https://wa.me/59894691690?text=Hola%21%20Vi%20que%20hacen%20p%C3%A1ginas%20web%2C%20me%20gustar%C3%ADa%20saber%20m%C3%A1s%20%F0%9F%9A%80';
  const LOGO_SRC = 'data:image/png;base64,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';

  const style = document.createElement('style');
  style.textContent = `
    @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;600;700&display=swap');
    #pweb-wrap { position: fixed; bottom: 0; left: 0; width: 130px; height: 130px; z-index: 9998; cursor: pointer; filter: drop-shadow(6px -6px 18px rgba(0,0,0,0.5)); transition: width 0.55s cubic-bezier(0.4,0,0.2,1), height 0.55s cubic-bezier(0.4,0,0.2,1); overflow: hidden; }
    #pweb-wrap.open { width: min(680px, 95vw); height: min(480px, 90vh); }
    #pweb-bg { position: absolute; bottom: 0; left: 0; width: 100%; height: 100%; background: #060818; clip-path: polygon(100% 100%, 0 0, 0 100%); }
    #pweb-svg { position: absolute; bottom: 0; left: 0; width: 100%; height: 100%; pointer-events: none; }
    #pweb-thumb { position: absolute; bottom: 14px; left: 14px; width: 66px; height: 66px; display: flex; align-items: center; justify-content: center; transition: opacity 0.2s; pointer-events: none; }
    #pweb-thumb img { width: 100%; height: 100%; object-fit: contain; filter: drop-shadow(0 0 8px rgba(0,255,255,0.6)); }
    #pweb-wrap.open #pweb-thumb { opacity: 0; }
    #pweb-close { position: absolute; top: 16px; right: 16px; background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.15); color: rgba(255,255,255,0.5); border-radius: 50%; width: 32px; height: 32px; display: flex; align-items: center; justify-content: center; cursor: pointer; font-size: 16px; font-family: sans-serif; z-index: 10; opacity: 0; pointer-events: none; transition: opacity 0.25s ease 0.25s, background 0.2s; line-height: 1; user-select: none; }
    #pweb-wrap.open #pweb-close { opacity: 1; pointer-events: auto; }
    #pweb-close:hover { background: rgba(255,255,255,0.18); color: #fff; }
    #pweb-content { position: absolute; bottom: 0; left: 0; width: 100%; height: 100%; display: flex; flex-direction: row; align-items: stretch; opacity: 0; pointer-events: none; transition: opacity 0.3s ease 0.25s; box-sizing: border-box; }
    #pweb-wrap.open #pweb-content { opacity: 1; pointer-events: auto; }
    #pweb-left { flex: 1; display: flex; flex-direction: column; justify-content: flex-end; padding: 28px 28px 32px 32px; gap: 10px; position: relative; z-index: 2; box-sizing: border-box; min-width: 0; }
    #pweb-right { width: 220px; flex-shrink: 0; display: flex; align-items: center; justify-content: center; padding: 28px 22px 32px 12px; position: relative; z-index: 2; box-sizing: border-box; background: linear-gradient(135deg, rgba(13,16,48,0.97) 0%, rgba(18,8,48,0.97) 100%); border-left: 1px solid rgba(0,255,255,0.1); }
    #pweb-price-card { display: flex; flex-direction: column; align-items: center; gap: 9px; text-align: center; width: 100%; box-sizing: border-box; }
    .pweb-price-tag { font-family: 'Space Grotesk', sans-serif; font-size: 0.55rem; letter-spacing: 3px; text-transform: uppercase; color: rgba(255,255,255,0.4); }
    .pweb-price-amount { font-family: 'Space Grotesk', sans-serif; font-size: 3rem; font-weight: 700; background: linear-gradient(90deg, #00ffff, #a855f7); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; line-height: 1; }
    .pweb-price-period { font-family: 'Space Grotesk', sans-serif; font-size: 0.65rem; color: rgba(255,255,255,0.35); margin-top: -6px; }
    .pweb-price-divider { width: 40px; height: 1px; background: rgba(0,255,255,0.25); }
    .pweb-price-items { display: flex; flex-direction: column; gap: 8px; width: 100%; }
    .pweb-price-item { font-family: 'Space Grotesk', sans-serif; font-size: 0.7rem; color: rgba(255,255,255,0.7); display: flex; align-items: center; gap: 7px; text-align: left; }
    .pweb-check { width: 14px; height: 14px; flex-shrink: 0; }
    #pweb-logo-row { display: flex; align-items: center; gap: 12px; margin-bottom: 2px; }
    #pweb-logo-img { width: 38px; height: 38px; object-fit: contain; flex-shrink: 0; filter: drop-shadow(0 0 5px rgba(0,255,255,0.5)); }
    #pweb-brand-name { font-family: 'Space Grotesk', sans-serif; font-size: 1.35rem; font-weight: 700; letter-spacing: 2px; background: linear-gradient(90deg, #00ffff, #a855f7); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; line-height: 1; }
    #pweb-badge { font-family: 'Space Grotesk', sans-serif; font-size: 0.5rem; font-weight: 700; letter-spacing: 3px; text-transform: uppercase; color: #0ff; background: rgba(0,255,255,0.1); border: 1px solid rgba(0,255,255,0.3); border-radius: 20px; padding: 3px 11px; display: inline-block; width: fit-content; }
    #pweb-headline { font-family: 'Space Grotesk', sans-serif; font-size: clamp(1.1rem, 2.5vw, 1.6rem); font-weight: 700; line-height: 1.25; color: #fff; max-width: 300px; }
    #pweb-headline span { background: linear-gradient(90deg, #0ff, #a855f7); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
    #pweb-sub { font-family: 'Space Grotesk', sans-serif; font-size: 0.75rem; color: rgba(255,255,255,0.55); line-height: 1.55; max-width: 280px; }
    .pweb-features { display: flex; flex-direction: column; gap: 6px; }
    .pweb-feat { display: flex; align-items: center; gap: 8px; font-family: 'Space Grotesk', sans-serif; font-size: 0.72rem; color: rgba(255,255,255,0.7); }
    .pweb-feat-dot { width: 6px; height: 6px; border-radius: 50%; background: linear-gradient(135deg, #00ffff, #a855f7); flex-shrink: 0; }
    #pweb-cta { display: inline-flex; align-items: center; gap: 8px; text-decoration: none; background: linear-gradient(135deg, #0ff 0%, #a855f7 100%); color: #000; font-family: 'Space Grotesk', sans-serif; font-size: 0.65rem; font-weight: 700; letter-spacing: 1.2px; text-transform: uppercase; padding: 11px 22px; border-radius: 30px; transition: transform 0.2s, box-shadow 0.2s; box-shadow: 0 0 24px rgba(0,255,255,0.2); white-space: nowrap; width: fit-content; margin-top: 4px; }
    #pweb-cta:hover { transform: scale(1.05); box-shadow: 0 0 34px rgba(168,85,247,0.4); }
    #pweb-cta svg { width: 14px; height: 14px; fill: #000; flex-shrink: 0; }
    .pweb-dot { position: absolute; border-radius: 50%; pointer-events: none; opacity: 0; transition: opacity 0.3s ease 0.4s; }
    #pweb-wrap.open .pweb-dot { opacity: 1; }
    .pweb-dot-1 { width: 6px; height: 6px; background: #0ff; top: 55px; left: 170px; box-shadow: 0 0 10px #0ff; animation: pwebPulse 2s ease-in-out infinite; }
    .pweb-dot-2 { width: 4px; height: 4px; background: #a855f7; top: 100px; left: 310px; box-shadow: 0 0 7px #a855f7; animation: pwebPulse 2.6s ease-in-out infinite 0.5s; }
    .pweb-dot-3 { width: 5px; height: 5px; background: #0ff; top: 130px; left: 230px; box-shadow: 0 0 9px #0ff; animation: pwebPulse 1.9s ease-in-out infinite 1s; }
    .pweb-dot-4 { width: 3px; height: 3px; background: #a855f7; top: 80px; left: 380px; box-shadow: 0 0 6px #a855f7; animation: pwebPulse 3s ease-in-out infinite 0.3s; }
    @keyframes pwebPulse { 0%, 100% { transform: scale(1); opacity: 0.6; } 50% { transform: scale(1.8); opacity: 1; } }
    @media (max-width: 500px) { #pweb-wrap.open { width: 98vw; height: 92vh; } #pweb-right { display: none; } }
  `;
  document.head.appendChild(style);

  const checkSVG = `<svg class="pweb-check" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="7" cy="7" r="6.5" stroke="#00ffff" stroke-opacity="0.4"/><path d="M4 7l2 2 4-4" stroke="#00ffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
  const wppIcon = `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.522 5.852L.057 23.75a.5.5 0 00.614.633l6.077-1.594A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.716 9.716 0 01-4.95-1.352l-.355-.21-3.676.964.981-3.578-.232-.368A9.718 9.718 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/></svg>`;

  function buildWrap() {
    const wrap = document.createElement('div');
    wrap.id = 'pweb-wrap';
    wrap.innerHTML = `
      <div id="pweb-bg"></div>
      <svg id="pweb-svg" viewBox="0 0 680 480" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <defs><linearGradient id="pwebEdge" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="#00ffff" stop-opacity="0.9"/><stop offset="100%" stop-color="#a855f7" stop-opacity="0.1"/></linearGradient></defs>
        <line x1="680" y1="480" x2="0" y2="0" stroke="url(#pwebEdge)" stroke-width="1.5"/>
        <line x1="0" y1="350" x2="130" y2="480" stroke="rgba(0,255,255,0.06)" stroke-width="1"/>
        <line x1="0" y1="260" x2="220" y2="480" stroke="rgba(168,85,247,0.05)" stroke-width="1"/>
        <line x1="0" y1="170" x2="310" y2="480" stroke="rgba(0,255,255,0.04)" stroke-width="1"/>
      </svg>
      <div class="pweb-dot pweb-dot-1"></div>
      <div class="pweb-dot pweb-dot-2"></div>
      <div class="pweb-dot pweb-dot-3"></div>
      <div class="pweb-dot pweb-dot-4"></div>
      <div id="pweb-thumb"><img src="${LOGO_SRC}" alt="logo" /></div>
      <button id="pweb-close">✕</button>
      <div id="pweb-content">
        <div id="pweb-left">
          <div id="pweb-logo-row">
            <img id="pweb-logo-img" src="${LOGO_SRC}" alt="logo" />
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
          <a id="pweb-cta" href="https://wa.me/59894691690?text=Hola%21%20Vi%20que%20hacen%20p%C3%A1ginas%20web%2C%20me%20gustar%C3%ADa%20saber%20m%C3%A1s%20%F0%9F%9A%80" target="_blank" rel="noopener">${wppIcon} Consultá por WhatsApp</a>
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
    document.getElementById('pweb-close').addEventListener('click', function(e) { e.stopPropagation(); close(); });
    wrap.addEventListener('mouseenter', open);
    wrap.addEventListener('mouseleave', function(e) { if (!e.relatedTarget || !wrap.contains(e.relatedTarget)) close(); });
    if ('IntersectionObserver' in window) {
      const sentinel = document.createElement('div');
      sentinel.style.cssText = 'position:absolute;bottom:0;left:0;width:1px;height:1px;pointer-events:none;';
      document.body.style.position = 'relative';
      document.body.appendChild(sentinel);
      const obs = new IntersectionObserver(function(entries) { if (entries[0].isIntersecting) open(); else close(); }, { threshold: 1.0 });
      obs.observe(sentinel);
    }
  }

  if (document.readyState === 'loading') { document.addEventListener('DOMContentLoaded', init); } else { init(); }

})();
