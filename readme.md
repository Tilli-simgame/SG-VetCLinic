# Koiran Terveystulos Generaattori

Tämä appi on suunniteltu virtuaalikoirien terveystulosten generointiin. Sovellus luo satunnaisia, mutta realistisia terveystuloksia eri tutkimuksista ja tarjoaa niihin eläinlääkärin lausunnon.

## Ominaisuudet

- Generoi tulokset seuraaville tutkimuksille:
  - Kyynärnivelet
  - Lonkkanivelet
  - Olkanivelet
  - Polvinivelet
  - Selkä
  - Sydän
  - Silmät
  - Geenitestit
- Realistiset tulokset painotetuilla todennäköisyyksillä
- Yksityiskohtaiset eläinlääkärin lausunnot jokaisesta löydöksestä
- Mahdollisuus valita generoitavat tutkimukset

## Teknologiat

- HTML5
- JavaScript (Vanilla)
- Tailwind CSS

## Asennus

1. Kloonaa repositorio:
```bash
git clone https://github.com/[username]/SG-VetCLinic.git
cd SG-VetCLinic
```

2. Asenna Tailwind CSS (vaihtoehtoisesti voit käyttää CDN-linkkiä kuten projektissa nyt)

3. Avaa `index.html` selaimessa tai käytä paikallista kehityspalvelinta

## Tiedostorakenne

```
SG-VetCLinic/
│
├── index.html          # Päätiedosto
├── js/
│   ├── app.js         # Sovelluksen päälogiikka
│   ├── data.js        # Vakiodatat ja tulkinnat
│   └── templates.js   # HTML-templatet
│
└── README.md
```

## Käyttö

1. Avaa sovellus selaimessa
2. Valitse haluamasi tutkimukset valintaruuduista
3. Paina "Generoi tulokset" -nappia
4. Tulokset näytetään kahdessa osiossa:
   - Tutkimustulokset: Numeeriset/kirjaimelliset tulokset
   - Eläinlääkärin lausunto: Sanalliset tulkinnat tuloksista


## Rotukohtaisten painotusten muokkaaminen

Rotukohtaisia painotuksia voi muokata `js/breedWeights.js` tiedostosta. Jokaiselle rodulle voi määritellä omat painotuksensa eri testeille.

### Uuden rodun lisääminen

1. Avaa `js/breedWeights.js`
2. Lisää uusi rotu breedWeights-objektiin:

```javascript
"rotunnimi": {
    nimi: "Rodun Näyttönimi",
    nivelArvot: [
        { tulos: '0', todennäköisyys: 60 },
        { tulos: '1', todennäköisyys: 25 },
        { tulos: '2', todennäköisyys: 10 },
        { tulos: '3', todennäköisyys: 5 }
    ],
    // Muut testit...
}
```

### Painotusten muokkaaminen

Voit muokata todennäköisyyksiä muuttamalla `todennäköisyys`-arvoja. Esimerkki:

```javascript
// Lonkkatulokset rodulle, jolla on hyvät lonkat:
lonkkaArvot: [
    { tulos: 'A', todennäköisyys: 40 },  // 40% todennäköisyys A-lonkille
    { tulos: 'B', todennäköisyys: 35 },  // 35% todennäköisyys B-lonkille
    { tulos: 'C', todennäköisyys: 15 },  // 15% todennäköisyys C-lonkille
    { tulos: 'D', todennäköisyys: 7 },   // 7% todennäköisyys D-lonkille
    { tulos: 'E', todennäköisyys: 3 }    // 3% todennäköisyys E-lonkille
]
```

### Tuettavat testit ja niiden arvot

Voit määritellä rodulle seuraavat testit:
- `nivelArvot` (kyynär-, olka- ja polvinivelet): 0-3
- `lonkkaArvot`: A-E
- `selkäArvot`: LTV0-LTV4
- `sydänArvot`: Eri sivuääniasteet
- `silmäArvot`: Eri silmäsairaudet
- `geeniArvot`: Eri perinnölliset sairaudet

Jos jollekin testille ei määritellä rotukohtaisia painotuksia, käytetään oletuspainotuksia `defaultWeights.js` tiedostosta.

### Esimerkki: Sydänpainotusten muokkaaminen

```javascript
sydänArvot: [
    { tulos: 'Ei sivuääniä', todennäköisyys: 60, tulkinta: "Sydän toimii normaalisti." },
    { tulos: 'Sivuääni 1/6', todennäköisyys: 20, tulkinta: "Hyvin lievä sivuääni." },
    { tulos: 'Sivuääni 2/6', todennäköisyys: 12, tulkinta: "Lievä sivuääni." },
    { tulos: 'Sivuääni 3/6', todennäköisyys: 8, tulkinta: "Kohtalainen sivuääni." }
]
```
## Lisenssi

[TODO]

## Tekijä(t)

[Thilithiel Aéthelwyn "Tilli"](https://github.com/Tilli-simgame/)