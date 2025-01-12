// Rotukohtaiset painotukset
const breedWeights = {
  "saksanpaimenkoira": {
      nimi: "Saksanpaimenkoira",
      nivelArvot: [
          { tulos: '0', todennäköisyys: 60 },
          { tulos: '1', todennäköisyys: 25 },
          { tulos: '2', todennäköisyys: 10 },
          { tulos: '3', todennäköisyys: 5 }
      ],
      lonkkaArvot: [
          { tulos: 'A', todennäköisyys: 25 },
          { tulos: 'B', todennäköisyys: 30 },
          { tulos: 'C', todennäköisyys: 25 },
          { tulos: 'D', todennäköisyys: 15 },
          { tulos: 'E', todennäköisyys: 5 }
      ],
      geeniArvot: [
          { tulos: 'Kaikki testatut geenit normaalit', todennäköisyys: 60, tulkinta: "Ei perinnöllisiä sairauksia testatuissa geeneissä." },
          { tulos: 'DM: kantaja', todennäköisyys: 15, tulkinta: "Kantaa degeneratiivisen myelopatian geeniä. Huomioitava jalostuksessa." },
          { tulos: 'DM: sairas', todennäköisyys: 5, tulkinta: "Riski selkäytimen rappeumasairauteen. Vaatii seurantaa." }
      ]
  },
  
  "kultainennoutaja": {
      nimi: "Kultainen noutaja",
      lonkkaArvot: [
          { tulos: 'A', todennäköisyys: 30 },
          { tulos: 'B', todennäköisyys: 35 },
          { tulos: 'C', todennäköisyys: 20 },
          { tulos: 'D', todennäköisyys: 10 },
          { tulos: 'E', todennäköisyys: 5 }
      ],
      silmäArvot: [
          { tulos: 'Terve', todennäköisyys: 60, tulkinta: "Silmät täysin terveet. Ei toimenpiteitä." },
          { tulos: 'PRA: todettu', todennäköisyys: 8, tulkinta: "Etenevä verkkokalvon surkastuma. Johtaa sokeuteen." },
          { tulos: 'PRA: kantaja', todennäköisyys: 10, tulkinta: "Kantaa PRA-geeniä. Huomioitava jalostuksessa." },
          { tulos: 'HC: todettu', todennäköisyys: 8, tulkinta: "Perinnöllinen harmaakaihi. Voi vaatia leikkaushoitoa." }
      ]
  },
  
  "chihuahua": {
      nimi: "Chihuahua",
      nivelArvot: [
          { tulos: '0', todennäköisyys: 55 },
          { tulos: '1', todennäköisyys: 25 },
          { tulos: '2', todennäköisyys: 15 },
          { tulos: '3', todennäköisyys: 5 }
      ],
      sydänArvot: [
          { tulos: 'Ei sivuääniä', todennäköisyys: 60, tulkinta: "Sydän toimii normaalisti. Ei toimenpiteitä." },
          { tulos: 'Sivuääni 1/6', todennäköisyys: 15, tulkinta: "Hyvin lievä sivuääni. Seurataan tilannetta." },
          { tulos: 'Sivuääni 2/6', todennäköisyys: 12, tulkinta: "Lievä sivuääni. Vuosittainen seuranta suositeltavaa." },
          { tulos: 'Sivuääni 3/6', todennäköisyys: 8, tulkinta: "Kohtalainen sivuääni. Tarvitsee säännöllistä seurantaa." },
          { tulos: 'Sivuääni 4/6', todennäköisyys: 5, tulkinta: "Merkittävä sivuääni. Vaatii tarkempaa tutkimusta." }
      ]
  }
};