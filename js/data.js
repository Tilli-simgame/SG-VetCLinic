// All test types
const testTypes = [
  { id: 'kyynär', name: 'Kyynärnivelet', hasSides: true },
  { id: 'lonkka', name: 'Lonkkanivelet', hasSides: true },
  { id: 'olka', name: 'Olkanivelet', hasSides: true },
  { id: 'polvi', name: 'Polvinivelet', hasSides: true },
  { id: 'selkä', name: 'Selkä', hasSides: false },
  { id: 'sydän', name: 'Sydän', hasSides: false },
  { id: 'silmät', name: 'Silmät', hasSides: false },
  { id: 'geenit', name: 'Geenitestit', hasSides: false }
];

// Test results and their interpretations
const arvostelut = {
  nivelArvot: ['0', '1', '2', '3'],
  lonkkaArvot: ['A', 'B', 'C', 'D', 'E'],
  selkäArvot: ['LTV0', 'LTV1', 'LTV2', 'LTV3', 'LTV4'],
  sydänArvot: [
      { tulos: 'Ei sivuääniä', todennäköisyys: 70, tulkinta: "Sydän toimii normaalisti. Ei toimenpiteitä." },
      { tulos: 'Sivuääni 1/6', todennäköisyys: 10, tulkinta: "Hyvin lievä sivuääni. Seurataan tilannetta." },
      { tulos: 'Sivuääni 2/6', todennäköisyys: 8, tulkinta: "Lievä sivuääni. Vuosittainen seuranta suositeltavaa." },
      { tulos: 'Sivuääni 3/6', todennäköisyys: 5, tulkinta: "Kohtalainen sivuääni. Tarvitsee säännöllistä seurantaa." },
      { tulos: 'Sivuääni 4/6', todennäköisyys: 3, tulkinta: "Merkittävä sivuääni. Vaatii tarkempaa tutkimusta." },
      { tulos: 'Sivuääni 5/6', todennäköisyys: 2, tulkinta: "Voimakas sivuääni. Tarvitsee hoitoa." },
      { tulos: 'Sivuääni 6/6', todennäköisyys: 2, tulkinta: "Erittäin voimakas sivuääni. Vaatii välitöntä hoitoa." }
  ],
  silmäArvot: [
      { tulos: 'Terve', todennäköisyys: 70, tulkinta: "Silmät täysin terveet. Ei toimenpiteitä." },
      { tulos: 'PRA: todettu', todennäköisyys: 3, tulkinta: "Etenevä verkkokalvon surkastuma. Johtaa sokeuteen." },
      { tulos: 'PRA: kantaja', todennäköisyys: 5, tulkinta: "Kantaa PRA-geeniä. Huomioitava jalostuksessa." },
      { tulos: 'HC: todettu', todennäköisyys: 3, tulkinta: "Perinnöllinen harmaakaihi. Voi vaatia leikkaushoitoa." },
      { tulos: 'RD: todettu', todennäköisyys: 3, tulkinta: "Verkkokalvon kehityshäiriö. Voi vaikuttaa näkökykyyn." },
      { tulos: 'CEA: todettu', todennäköisyys: 3, tulkinta: "Silmän kehityshäiriö. Vaihteleva vaikutus näköön." }
  ],
  geeniArvot: [
      { tulos: 'Kaikki testatut geenit normaalit', todennäköisyys: 70, tulkinta: "Ei perinnöllisiä sairauksia testatuissa geeneissä." },
      { tulos: 'DM: kantaja', todennäköisyys: 5, tulkinta: "Kantaa degeneratiivisen myelopatian geeniä. Huomioitava jalostuksessa." },
      { tulos: 'DM: sairas', todennäköisyys: 2, tulkinta: "Riski selkäytimen rappeumasairauteen. Vaatii seurantaa." },
      { tulos: 'vWD: kantaja', todennäköisyys: 5, tulkinta: "Kantaa von Willebrandin taudin geeniä. Huomioitava jalostuksessa." },
      { tulos: 'vWD: sairas', todennäköisyys: 2, tulkinta: "Von Willebrandin tauti todettu. Verenvuotoriski toimenpiteissä." },
      { tulos: 'MDR1: kantaja', todennäköisyys: 4, tulkinta: "Kantaa lääkeaineherkkyysgeeniä. Tietyt lääkkeet voivat aiheuttaa haittavaikutuksia." },
      { tulos: 'MDR1: sairas', todennäköisyys: 2, tulkinta: "Lääkeaineherkkyys todettu. Vaatii erityistä huomiota lääkityksessä." },
      { tulos: 'EIC: kantaja', todennäköisyys: 4, tulkinta: "Kantaa rasitusintoleranssin geeniä. Huomioitava jalostuksessa." },
      { tulos: 'EIC: sairas', todennäköisyys: 2, tulkinta: "Rasituksensietokyky heikentynyt. Vältettävä kovaa rasitusta." },
      { tulos: 'TNS: kantaja', todennäköisyys: 2, tulkinta: "Kantaa immuunijärjestelmän sairauden geeniä. Huomioitava jalostuksessa." },
      { tulos: 'Kääpiökasvuisuus: kantaja', todennäköisyys: 2, tulkinta: "Kantaa kääpiökasvuisuuden geeniä. Huomioitava jalostuksessa." }
  ]
};

// Result interpretations for different test types
const tulkinnat = {
  kyynär: {
      0: "Normaali nivel, ei muutoksia. Ei rajoituksia koiran elämään.",
      1: "Lievät muutokset. Nivelrikko voi kehittyä iän myötä. Kohtuullinen liikunta suositeltavaa.",
      2: "Kohtalaiset muutokset. Nivelrikko todennäköinen. Vältettävä raskasta rasitusta.",
      3: "Vaikeat muutokset. Nivelrikko kehittyy. Tarvitsee säännöllistä kipulääkitystä."
  },
  lonkka: {
      A: "Erinomainen lonkkanivel. Ei rajoituksia.",
      B: "Hyvä lonkkanivel, lähes normaali. Ei merkittäviä rajoituksia.",
      C: "Lievä lonkkavika. Voi kehittyä nivelrikko. Vältettävä ylipainoa.",
      D: "Kohtalainen lonkkavika. Nivelrikko todennäköinen. Tarvitsee säännöllistä seurantaa.",
      E: "Vaikea lonkkavika. Nivelrikko kehittyy. Tarvitsee jatkuvaa hoitoa."
  },
  olka: {
      0: "Normaali nivel, ei muutoksia. Ei rajoituksia.",
      1: "Lievät muutokset. Seurattava tilannetta.",
      2: "Kohtalaiset muutokset. Voi vaikuttaa liikkumiseen.",
      3: "Vaikeat muutokset. Merkittävä vaikutus elämänlaatuun."
  },
  polvi: {
      0: "Normaali polvinivel. Ei luksaatiota.",
      1: "Lievä luksaatio. Polvilumpio voi luksoitua.",
      2: "Kohtalainen luksaatio. Säännöllinen seuranta tarpeen.",
      3: "Vaikea luksaatio. Voi vaatia leikkaushoitoa."
  },
  selkä: {
      LTV0: "Normaali selkä. Ei muutoksia.",
      LTV1: "Lieviä muutoksia. Ei yleensä oireita.",
      LTV2: "Kohtalaisia muutoksia. Voi aiheuttaa jäykkyyttä.",
      LTV3: "Selkeitä muutoksia. Voi tarvita hoitoa.",
      LTV4: "Vaikeat muutokset. Säännöllinen hoito tarpeen."
  }
};