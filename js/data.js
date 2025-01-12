// Test types and their configurations
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

// Result interpretations for different test types
const tulkinnat = {
  kyynär: {
      "0": "Normaali nivel, ei muutoksia. Ei rajoituksia koiran elämään.",
      "1": "Lievät muutokset. Nivelrikko voi kehittyä iän myötä. Kohtuullinen liikunta suositeltavaa.",
      "2": "Kohtalaiset muutokset. Nivelrikko todennäköinen. Vältettävä raskasta rasitusta.",
      "3": "Vaikeat muutokset. Nivelrikko kehittyy. Tarvitsee säännöllistä kipulääkitystä."
  },
  lonkka: {
      "A": "Erinomainen lonkkanivel. Ei rajoituksia.",
      "B": "Hyvä lonkkanivel, lähes normaali. Ei merkittäviä rajoituksia.",
      "C": "Lievä lonkkavika. Voi kehittyä nivelrikko. Vältettävä ylipainoa.",
      "D": "Kohtalainen lonkkavika. Nivelrikko todennäköinen. Tarvitsee säännöllistä seurantaa.",
      "E": "Vaikea lonkkavika. Nivelrikko kehittyy. Tarvitsee jatkuvaa hoitoa."
  },
  olka: {
      "0": "Normaali nivel, ei muutoksia. Ei rajoituksia.",
      "1": "Lievät muutokset. Seurattava tilannetta.",
      "2": "Kohtalaiset muutokset. Voi vaikuttaa liikkumiseen.",
      "3": "Vaikeat muutokset. Merkittävä vaikutus elämänlaatuun."
  },
  polvi: {
      "0": "Normaali polvinivel. Ei luksaatiota.",
      "1": "Lievä luksaatio. Polvilumpio voi luksoitua.",
      "2": "Kohtalainen luksaatio. Säännöllinen seuranta tarpeen.",
      "3": "Vaikea luksaatio. Voi vaatia leikkaushoitoa."
  },
  selkä: {
      "LTV0": "Normaali selkä. Ei muutoksia.",
      "LTV1": "Lieviä muutoksia. Ei yleensä oireita.",
      "LTV2": "Kohtalaisia muutoksia. Voi aiheuttaa jäykkyyttä.",
      "LTV3": "Selkeitä muutoksia. Voi tarvita hoitoa.",
      "LTV4": "Vaikeat muutokset. Säännöllinen hoito tarpeen."
  }
};