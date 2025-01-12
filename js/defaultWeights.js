// Oletuspainotukset kaikille testeille
const defaultWeights = {
  nivelArvot: [
      { tulos: '0', todennäköisyys: 70 },
      { tulos: '1', todennäköisyys: 15 },
      { tulos: '2', todennäköisyys: 10 },
      { tulos: '3', todennäköisyys: 5 }
  ],
  lonkkaArvot: [
      { tulos: 'A', todennäköisyys: 35 },
      { tulos: 'B', todennäköisyys: 35 },
      { tulos: 'C', todennäköisyys: 15 },
      { tulos: 'D', todennäköisyys: 10 },
      { tulos: 'E', todennäköisyys: 5 }
  ],
  selkäArvot: [
      { tulos: 'LTV0', todennäköisyys: 70 },
      { tulos: 'LTV1', todennäköisyys: 15 },
      { tulos: 'LTV2', todennäköisyys: 8 },
      { tulos: 'LTV3', todennäköisyys: 5 },
      { tulos: 'LTV4', todennäköisyys: 2 }
  ],
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
      { tulos: 'vWD: sairas', todennäköisyys: 2, tulkinta: "Von Willebrandin tauti todettu. Verenvuotoriski toimenpiteissä." }
  ]
};