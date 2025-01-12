// Utility functions
function painotettuSatunnainen(arvot) {
  const summa = arvot.reduce((acc, curr) => acc + curr.todennäköisyys, 0);
  let satunnainen = Math.random() * summa;
  
  for (let arvo of arvot) {
      if (satunnainen < arvo.todennäköisyys) {
          return arvo;
      }
      satunnainen -= arvo.todennäköisyys;
  }
  
  return arvot[0];
}

// Result generation functions
function generoiYksittäinenNivelTulos() {
  const tulos = painotettuSatunnainen(arvostelut.nivelArvot);
  return tulos.tulos;  // Palautetaan vain tulos-kenttä
}

function generoiYksittäinenLonkkaTulos() {
  const tulos = painotettuSatunnainen(arvostelut.lonkkaArvot);
  return tulos.tulos;  // Palautetaan vain tulos-kenttä
}

function generoiSelkäTulos() {
  const tulos = painotettuSatunnainen(arvostelut.selkäArvot);
  return tulos.tulos;  // Palautetaan vain tulos-kenttä
}

function generoiSilmäTulos() {
  if (Math.random() < 0.7) {
      const tulos = arvostelut.silmäArvot.find(a => a.tulos === 'Terve');
      return tulos;
  }
  
  const löydösMäärä = Math.floor(Math.random() * 2) + 1;
  const valitutLöydökset = new Set();
  
  while(valitutLöydökset.size < löydösMäärä) {
      const löydös = painotettuSatunnainen(arvostelut.silmäArvot.filter(a => a.tulos !== 'Terve'));
      valitutLöydökset.add(löydös);
  }
  
  return Array.from(valitutLöydökset);
}

function generoiGeeniTulos() {
  if (Math.random() < 0.7) {
      const tulos = arvostelut.geeniArvot.find(a => a.tulos === 'Kaikki testatut geenit normaalit');
      return tulos;
  }
  
  const löydösMäärä = Math.floor(Math.random() * 2) + 1;
  const valitutLöydökset = new Set();
  
  while(valitutLöydökset.size < löydösMäärä) {
      const löydös = painotettuSatunnainen(arvostelut.geeniArvot.filter(a => a.tulos !== 'Kaikki testatut geenit normaalit'));
      valitutLöydökset.add(löydös);
  }
  
  return Array.from(valitutLöydökset);
}

// Result setting functions
function asetaNivelTulokset(tyyppi) {
  const vasen = generoiYksittäinenNivelTulos();
  const oikea = generoiYksittäinenNivelTulos();
  
  document.getElementById(`${tyyppi}-tulos`).textContent = `${vasen}/${oikea}`;
  document.getElementById(`${tyyppi}-vasen-tulkinta`).textContent = tulkinnat[tyyppi][vasen];
  document.getElementById(`${tyyppi}-oikea-tulkinta`).textContent = tulkinnat[tyyppi][oikea];
}

function asetaLonkkaTulokset() {
  const vasen = generoiYksittäinenLonkkaTulos();
  const oikea = generoiYksittäinenLonkkaTulos();
  
  document.getElementById('lonkka-tulos').textContent = `${vasen}/${oikea}`;
  document.getElementById('lonkka-vasen-tulkinta').textContent = tulkinnat.lonkka[vasen];
  document.getElementById('lonkka-oikea-tulkinta').textContent = tulkinnat.lonkka[oikea];
}

function asetaTulokset(tyyppi) {
  switch(tyyppi) {
      case 'kyynär':
      case 'olka':
      case 'polvi':
          asetaNivelTulokset(tyyppi);
          break;
          
      case 'lonkka':
          asetaLonkkaTulokset();
          break;
          
      case 'selkä':
          const selkäTulos = generoiSelkäTulos();
          document.getElementById('selkä').textContent = selkäTulos;
          document.getElementById('selkä-tulkinta').textContent = tulkinnat.selkä[selkäTulos];
          break;
          
      case 'sydän':
          const sydänTulos = painotettuSatunnainen(arvostelut.sydänArvot);
          document.getElementById('sydän').textContent = sydänTulos.tulos;
          document.getElementById('sydän-tulkinta').textContent = sydänTulos.tulkinta;
          break;
          
      case 'silmät':
          const silmäTulos = generoiSilmäTulos();
          if (Array.isArray(silmäTulos)) {
              document.getElementById('silmät').textContent = silmäTulos.map(t => t.tulos).join(', ');
              document.getElementById('silmät-tulkinta').textContent = silmäTulos.map(t => t.tulkinta).join(' ');
          } else {
              document.getElementById('silmät').textContent = silmäTulos.tulos;
              document.getElementById('silmät-tulkinta').textContent = silmäTulos.tulkinta;
          }
          break;
          
      case 'geenit':
          const geeniTulos = generoiGeeniTulos();
          if (Array.isArray(geeniTulos)) {
              document.getElementById('geenit').textContent = geeniTulos.map(t => t.tulos).join(', ');
              document.getElementById('geenit-tulkinta').textContent = geeniTulos.map(t => t.tulkinta).join(' ');
          } else {
              document.getElementById('geenit').textContent = geeniTulos.tulos;
              document.getElementById('geenit-tulkinta').textContent = geeniTulos.tulkinta;
          }
          break;
  }
}

// Initialize application
function initializeApp() {
  // Create checkboxes
  const checkboxContainer = document.getElementById('checkboxContainer');
  const checkboxesHTML = testTypes.map(type => createCheckboxTemplate(type)).join('');
  checkboxContainer.innerHTML = checkboxesHTML;

  // Create results container with new structure
  const resultsContainer = document.getElementById('results');
  resultsContainer.innerHTML = createResultsTemplate();

  // Create value containers
  const valuesContainer = document.getElementById('results-values');
  const valuesHTML = testTypes.map(type => 
      type.hasSides ? createBilateralResultValueTemplate(type) : createSingleResultValueTemplate(type)
  ).join('');
  valuesContainer.innerHTML = valuesHTML;

  // Create interpretation containers
  const interpretationsContainer = document.getElementById('results-interpretations');
  const interpretationsHTML = testTypes.map(type => 
      type.hasSides ? createBilateralInterpretationTemplate(type) : createSingleInterpretationTemplate(type)
  ).join('');
  interpretationsContainer.innerHTML = interpretationsHTML;

  // Add event listener for generate button
  document.getElementById('generateBtn').addEventListener('click', generoiKaikkiTulokset);
}

function generoiKaikkiTulokset() {
  const resultsDiv = document.getElementById('results');
  resultsDiv.classList.remove('hidden');
  
  testTypes.forEach(type => {
      const checkbox = document.getElementById(`${type.id}-check`);
      const row = document.getElementById(`${type.id}-row`);
      const tulkintaRow = document.getElementById(`${type.id}-tulkinta-row`);
      
      if (checkbox.checked) {
          row.classList.remove('hidden');
          tulkintaRow.classList.remove('hidden');
          asetaTulokset(type.id);
      } else {
          row.classList.add('hidden');
          tulkintaRow.classList.add('hidden');
      }
  });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeApp);