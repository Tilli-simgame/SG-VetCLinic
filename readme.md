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

## Muokkaaminen

### Tulosten todennäköisyyksien muuttaminen

Voit muokata tulosten todennäköisyyksiä `data.js` tiedostossa. Esimerkiksi sydäntutkimuksen todennäköisyydet:

```javascript
sydänArvot: [
    { tulos: 'Ei sivuääniä', todennäköisyys: 70 },
    { tulos: 'Sivuääni 1/6', todennäköisyys: 10 },
    // ...
]
```

### Tulkintojen muokkaaminen

Tulkintoja voi muokata `data.js` tiedostossa:

```javascript
tulkinnat: {
    kyynär: {
        0: "Normaali nivel, ei muutoksia. Ei rajoituksia koiran elämään.",
        // ...
    }
}
```

## Lisenssi

[TODO]

## Tekijä(t)

[Thilithiel Aéthelwyn "Tilli"](https://github.com/Tilli-simgame/)