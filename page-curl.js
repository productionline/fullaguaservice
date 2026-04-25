// ============================================================
// PAGE CURL MEGA — otromundo
// Triángulo expandible con contenido completo de banner.
// Incluir al final del <body> en cada página.
// ============================================================
(function() {

  const WPP_NUM = '59894691690';
  const WPP_MSG = encodeURIComponent('Hola! Vi que hacen páginas web, me gustaría saber más 🚀');
  const WPP_URL = 'https://wa.me/' + WPP_NUM + '?text=' + WPP_MSG;

  const LOGO_B64 = '/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAH0AfQDASIAAhEBAxEB/8QAGgABAAMBAQEAAAAAAAAAAAAAAAECBAMFCP/EAD8QAQACAgAEAwUFBgMGBwAAAAABAgMRBBIhMQVBURMiYXGRMoGh4fAUQlKDwdEjsfEGM3J0k7IVFjRDYoKU/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/APjIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWrW1vs1mUakER1nUO+DhM+b/d47W9dR2+c+Ttw+PHjpXLljdZ/H4fr/JbifE814jHhn2OOvSsV6a+Xp9wFfDskRu9d/K0/0iUZPD8kdYiI+G+v4xDJ7XJuZi9ome+p7prny1vzxe3NrW99QTl4fLjnVqz5+Tk34uOrans82Pm35xP6+LlxOKOT2tY92Z1E+XyBlFopaZ1Ebmfii1bVnVqzE/EEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAmI3OoelwHh1LY54ji88cPhr2ma7tb5R+vk4cHjrSs5cke7HeNd3Li+IvxGTdpnlj7Mb7A28TxPAY7cnC8NuIjpe89d/r5Mls2TLG5iNTPozNWONY4nUbjvr7v7gYvZWvPPy1n4enyaOJ8LzRwn7ZipNsHneO0fN50zudvR8F8Uz8Dl5IvM4rz79J7SDzZ6JiNtniOHH7W1sERyz1iIlyxUisbtOp79emtAY8MVjmyTqFsc1tm5aUrM3/AIo3pwyZLX6eSMc6vAN1uMzYaxitWuqxy615aWjNwWeZrOOMM+Ux+XT8HLxCZyVpltGrWrEzr7v7sQN/HeHXw4q5qT7TFP79e36/swN/hniF+Ht7PJ7+C32qzG1PEcFMd+fFMzS3WvTy/UgxgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALY43eI1v4KunDTEZqzM66x1+8GrxGfZ0phi0WjW9xr9f6sLZ+zZOIzT7KYtXznfSP18HbF4dimZrk4vFjv25Z/1gHmteKY9nafWNfhC+ThMdLTX2kWtrpFf9VMcck1iZ1Xpq09tgyDplp/izWup3PTTRw3h/EZ6xetPc9ZnUfd6/cClcsTh1Npi1Y1GvNTPauuXHbdZ+Dbj8Px2i1f2vHFo7131ifqpbgIi/s65qXv6RP9tg89Netoj4tXFcDmwdbVnXlPq4YK7yRE6j5zoGjjMvPjrOtTqYmPoxtPs/aTG/PtPbb0vD/BuF4rHa0+J8PimP3L63/wB0A8Rtx29pwfvT1p8uzrn8OxVy2x4eKx55jvNfKPrLjiw2xZvZ5LRTz6zGu/zBkmNTpC153aZ9VQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHetK0ru0TPTfwlXh4688+XxTxF921GvmDrkvmrjnJXdK2nrEdPJmm9p72l7v+z/DU8Xw38PnJycRFZtgiekWnXWN/r8Hi8VgycPmtiyVmtqzMTEx1iYBSL3ielp+rp7a96+zvO4nXzcXfhaxvmtrXbv2B0ryVmJ5NRHlPXr6/kcXx2XNuvNPJ2048Rkm08sdo+DnETPYEza0zubTv5kXt/FKNa7ydAa8XHZJrGPLO661ueuoc82O1r7idxM/Pu4ajW4n6tHCXiZjHbt5A53z5Z1E2n3YisfKOznud73LrxVJpk6xpxBat7VncS0Xy5L03fUzMa7erlw2G2bLFYiZiXXi7RS044nfL0/oCuXFExzU3MfFnbOBtW3Njv6bhn4inJk+YOYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANGCszFa71v3o6fP+zhM7mZlq4e8TGOto92vT6ss9JmAXwZcmDLXJival6zExNZ1MTHnD2PE/FY8Wx1txGKk56xq146Tb4zrXV4lYmZ1DRTDFa81+/wAf6g55MdYnpOo9Ld4dccTSlo1G4jr+vvUyXxe7y11MecQvEzfmycs+95fQGVbvGptOlU66bBbUa3ERP3o5bdPLcbREec9ITNpnvM9ALR560UnVolVbHWbZK1jvMg78XM3mJt0mfwc6Y45YtftPbX9XTPaelra3rUxHyRimlorETWto/i8+vqDr+1ThpNMMRXcamfNjmdztpycNb2ftK9u7KDpw8zGavLMRMzqNu3iPL7eYrro4YemSs6mdTvUOvGxrLOusT1BnAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB24e24mn0+aOIpq3N5W/CXOJ1O2vFbHmxWre3LbXu9N7nyj8wV4ela157em3LNlteZjc8u+zpmjJWvsuWdx367/AMv11ZgGrgrRO8c9N+cMq9ItWebrER5gvxWOceSenSXKJmOzdavPWInVq3j3Znz0zZuGyY7THLMx6g4z1BMRM9o2CGjhMXNbmn7Pb5rcNweTLO5rMVj9aTkyRin2dLzMecx5A58XeL26fX4frbg6ZKX62mJmPVzBq4LipxXit92x+i/iPD0raMmHrjtG46McbmejXS98nDTjiNzSJtuZjpHn3Bz4OkTbntOoj4uee3Neemv15/F2z5KUjkxTuOnWNxtlAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAXwxE21Padf5qL4Z1kjt94O1c3s79Z56z1mJ67+DffiPCbYY9nwl/bzHWZn3fxt/SHn8TT3d1iNRPf1ZwbcuTDOuXHWkx5/qXKLc0amPc+Es7RWP8AD79ax/af6yDla0xbp0iJ6Q14PELVpGPLjrlxxO9W7z9/5MID2snGeETEWrweSL/v6nf03Mmfi/B/ZxPD8HljLMe9z292fpP4aeTWsey3Mz16x6IyV126g05/EMt6RjrqlK9oiP1/RnxTzX5bbnbmms6tEg0Tmt7tbzusaiOvaHTHl4eI1GKLf8Wv7ufEUmtevees/r72YGu2TDG5pXlme6tMk3yz1ty26Tqe7M0Y66xx/F33rsDhPdC155rzPrKoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAO+K/DREe0w3tPnq+v6A4D0KZ/Coj3+AzW+WfX9Fp4jwfy8Nz/8A6PyB5o22zeGzPu8Flj+d+Tnivh9ve1axjiY9zn96In49PmDPStrWitYmZntENmPFwsR7DLbWS3/uRPSk+ny9ZTjzYIyZq19yb1iK5IjtPn08olkmlovya6/DzBPEYcmDLOPJXVo/H4ubZfPT2WHBl/xPZ33M+lf4Y9V5zcJz1niMUZ4iZ/3U8nu6jUdvmDAPSjiPB99fDs+v+Y/JNuJ8GmPd8N4iJ/5j8geYN05vDPLgs0fzvycs2Tg5pMYuHyUt5TOTf9AZgAbcExlpyzPWempZs+K2K81tEx81aWms7iXpYOIwcRhjHxG5v5W1+H6ifuB5bTTc4txG5np+EfmnLwtdz7K0Wj5oriyY6+9WJifSYkGZ0xY5vaI10dYxVi+8kTHXt6rZc9aU5MUa+IK8RatY5Kz1jprTT4fgpxmO2PcVyRHSPV50ztbFkvivF6TMTE7jQJ4jDfBkml6zEx6qUjdoj4vTzcdi4zBWufHEZo6RasR1j4s2Lh72vNsNJtFY3PWOkfeCvEzbkrFvta6/gzNOXFlyRW861Px7J/Z6Ujd7fL4g58Phtknc9Kx5rZ7RXdKx9+lsvERFeTFHLHXrDNM7kEAAC+OaRPv1m3ynTrW/CR9rh8k/zPyBnG2ubw6PtcFln+d+SZz+GeXA5v8Ar/kDCNXE5OBtjiMHC5Md99bTl5uny0cRlwzPu1rMRbdIiNar6T6yCuDHStfbZ43X92m9c35J4rh6xSOIwTNsNp18aT6SjiNZJ9rWd1ny/h+DpweX9nrbJfrW1Zryfx/lHqDGNNcmL9nisxEd+aOXrM+XVWl+GiurYLzPrF9A4DVXJwUd+GyT/M/JeM3h3nweX/rfkDENN8nBz9nhskfzPyZ7a3PLGoBAAAAAAAAAAAAAAAAAAAAAAAADpGa0Y+Tp89dXMAAAAAAAAAABaL2iYnfWO0+i05bzGptaf/tLmA147Uy16xM2j49Z+9zzcNkp71azNZ7OMTMTuJbeE8RzYNxzbiY11jfT/MGKYmO8SRW09omXqYeN4Sa8uXhMcx680xP4RCmbjcG49lwuPHy9Y1bm/wA42DHjw2tHNO4j/NbJalcfJEb36T3+ZxHFZM1pm0s8zvuDpGXJHa1o9Osq2taZmZnrKoAAAAAAAAAAC2O80tuNT6xPmXtN7c0qgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAtHLEbnrPoTaJjXJWPjG9gqLTHTcKgCY13lMcu9a/EFRb3Y713PzJ1MTMQCoLRrW5jp8JBUTuNfZ/EmOm47AgEx1BAtE1r+7zT8Uzatu9Ij5AoJmNIAE115xstER2BAJiNzoEC0xER8VQBaIiUT36AgFvd1vX4gqC1Y3E/AFRMxqUAC3u8u9fiqALV1PkidRPYEC3uz26KgAmI2CBbcRPbfzJmtp+zFfkComY0gAAAAAAAAAAAAAAAAAABavr9yq1deYInugnuAms6lEpjuWnYITHeEJjuCE7QAJjt9UJjp1BC09K6TE79I+UKzvfUELfuqrdOX4gqAC0T7sxKq1O/XsrILY43eI9eh3r5bKfbhFZ69ewIWrOomfPsiY1KbT2iO0AifVCZQCfJAAAt+594Kr45mObX8Ki1P3v+ED7UdvmqR0WmOkSCP3UJ/d+9ABISAt3hVaPsgqtHSsqrT2+4FQAWiY5da+9VemuWd+sKAAAAAAAAAAAAAAAAAAAJidSgBa3XrHyRqd61O0Lc1v4p+oERqOqoAJr9qEALWie+umlTcgC2vd1rr3VAT1iU2iNbiVQBas9NT2VATMenXZETPkRMxO4mYTNrTGptMx8wJ6RpUAWrHXfkiYmJ1MaNz6ygFt7r27dVQBaYnWlQBMTqU2rPdVMTMdpmANEz5E2me8zKAFqee4nrGlU7n1BCazqUALT2+9VO51pALV+PYmttz0n6KpiZjtMgmKz59C0xPZUATE+SAEzExPqREz5ETMdpmCbWmNTaZj5gneo1CoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAtStr25aVm0+kRsFRe+PJSYi+O1ZntExrZfFlpeKXx3rae0TWYmQUFsmO+O/JkpalvS0al1vwfF0pz34XPWut8045iAcB0rgz2wTnrhyTiidTeKzyx95OHNGGM84skYpnUX5Z5Zn02DmOmTDmx0rfJiyUpf7NrVmIt8jBgz57TXBhyZZiNzFKzOvoDmOufh+IwRWc+DLii32eekxv5bVyYcuO1a5MV6WtG4i1ZiZgFB1nhuIjNGGcGWMs9YpyTzfRNuE4qsbtw2aI1vc0nsDiJiJntEyiOs6gAdMmDNjrzZMOSketqzEOYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACY1rrvaAFvd9J+qPd9J+qAE+76T9T3fSfqgBPu+k/U930n6oAT7vpP1Pd9J+qAFvd+J7vpP1VAW9z/AOX1RPL5RKABo4PLXHOSLxbkvXlma96/FnXx5LU3y61PfcbBo4+uSMeCZy+1xTWfZ289b7O3jFrX8Sx26zulNfSGLLlvkisWnpWNViI1EL14rNEV6xM0jVZmsTMfKQepwM1v/tFmyzEWtSL2xxPXdojo87Hx3F47Zv8AFvM5qzXJEzvcSz0yXpkjJW0xeJ3zRPXbrk4rLeLb5Im32pisRM/eD0eGyT/5S4vFEz/6qkz18tSzZsk/+BcPimZ17a1ojfTtDPw3FZuHi9cdo5bxq9bRuLfOJVz58maa88xqsarERqI+4HoeLWm3hXhddzOsVv8Aulf/AGXtycZxMWvbHH7NeJmO8dGGOOzxXHWYxWjFGqc2OJ0rg4zPhy5MtJrzZImLbrE7ie4OnH5N48eLFxGTPgrG4m9datPeHsZPZeI8Fh8PvMV4vHgrfh7zP2unWk/0eDl4nJkxRimKVpE71WkR1+5ObisuW+O9prW2OIrWa1iOkduwNvjWbNg8Zy3raa3iOX4x01KeO4jLTgPD5re2/ZWievxl53EZsnEZrZctua9u8py8Rky4seK8xy441XURGgeh4FTktOe9aTS0+znmtEdJ7z1cOS/AeMRX2ftZxZNxXW+aP9Ga+e98WPFPLy4/s6rDrPH8T+14+K54jLj1y2isA1cZWMvCZs3B58lsHPE5MeT7VJnevnHxeW0Z+LzZa2rPJWtp3aKUiu5+OmcExrfXafd9J+qoC3u+k/VHu+k/VACfd9J+p7vpP1QAnp8fqe76T9UAJ930n6nT0n6oAT7vpP1Pd9J+qAE+78UAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/2Q==';

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
      width: 62px; height: 62px;
      display: flex; align-items: center; justify-content: center;
      transition: opacity 0.2s;
      pointer-events: none;
    }

    #pweb-thumb img {
      width: 100%; height: 100%;
      object-fit: contain;
      filter: brightness(0) invert(1) drop-shadow(0 0 6px rgba(0,255,255,0.6));
      opacity: 0.9;
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

    #pweb-logo-row { display: flex; align-items: center; gap: 12px; margin-bottom: 2px; }

    #pweb-logo-img {
      width: 36px; height: 36px;
      object-fit: contain;
      flex-shrink: 0;
      filter: brightness(0) invert(1) drop-shadow(0 0 4px rgba(0,255,255,0.5));
      opacity: 0.9;
    }

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

      <div id="pweb-thumb">
        <img src="data:image/jpeg;base64,${LOGO_B64}" alt="logo" />
      </div>

      <button id="pweb-close">✕</button>

      <div id="pweb-content">
        <div id="pweb-left">
          <div id="pweb-logo-row">
            <img id="pweb-logo-img" src="data:image/jpeg;base64,${LOGO_B64}" alt="logo" />
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
