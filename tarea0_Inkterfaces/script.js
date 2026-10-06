document.addEventListener('DOMContentLoaded', () => {
  // 1. SCAMPER Component #1: Mood Selector
  const moodPills = document.querySelectorAll('.mood-pill');
  const moodBanner = document.getElementById('mood-active-banner');
  const moodTitle = document.getElementById('mood-active-title');
  const moodDesc = document.getElementById('mood-active-desc');

  const moodData = {
    all: {
      title: "Exploración Libre",
      desc: "Mostrando todas las corrientes y estilos artísticos del estudio Inkterfaces."
    },
    fineline: {
      title: "Fine Line y Sutileza",
      desc: "Trazos hiperfinos, elegancia minimalista y composiciones orgánicas de alta precisión."
    },
    blackwork: {
      title: "Blackwork y Contraste Puro",
      desc: "Sombras profundas, simetría sacra y bloques de tinta negra de alto impacto."
    },
    botanico: {
      title: "Botánico y Color Orgánico",
      desc: "Naturaleza en piel, pigmentos naturales y gradientes suaves pensados para perdurar."
    },
    micro: {
      title: "Microrealismo y Detalle",
      desc: "Arte miniaturizado con grado de detalle fotográfico y volumen dimensional."
    }
  };

  moodPills.forEach(pill => {
    pill.addEventListener('click', () => {
      moodPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');

      const filter = pill.getAttribute('data-mood');
      if (moodData[filter]) {
        moodTitle.textContent = moodData[filter].title;
        moodDesc.textContent = moodData[filter].desc;
      }

      // Filter Portfolio Items
      const items = document.querySelectorAll('.portfolio-item, .artist-card');
      items.forEach(item => {
        const itemCategory = item.getAttribute('data-category');
        if (filter === 'all' || itemCategory === filter || (itemCategory && itemCategory.includes(filter))) {
          item.style.display = '';
          item.classList.add('fade-in');
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  // 2. SCAMPER Component #3: Interactive Body Zone & Pain Calculator
  const zoneSelect = document.getElementById('zone-select');
  const sizeRange = document.getElementById('size-range');
  const sizeValueDisplay = document.getElementById('size-value');
  const painMeter = document.getElementById('pain-meter-fill');
  const painLabel = document.getElementById('pain-label');
  const estTimeDisplay = document.getElementById('est-time');
  const estCostDisplay = document.getElementById('est-cost');

  const zonePainMap = {
    antebrazo: { pain: 35, text: "Bajo (3/10) - Zona óptima para primera pieza", rate: 60 },
    hombro: { pain: 40, text: "Bajo-Medio (4/10) - Piel firme y buena curación", rate: 70 },
    espalda: { pain: 55, text: "Medio (5.5/10) - Sensibilidad en columna y omóplato", rate: 85 },
    costillas: { pain: 90, text: "Alto (9/10) - Zona intensa, alta sensibilidad", rate: 100 },
    tobillo: { pain: 75, text: "Medio-Alto (7.5/10) - Proximidad a relieve óseo", rate: 75 }
  };

});
