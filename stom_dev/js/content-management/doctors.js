const DOCTORS = [
    {
        "imie": "Ewa",
        "nazwisko": "Bliska",
        "lekarzDentysta": true,
        "ukryty": false
    },
    {
        "imie": "Joanna",
        "nazwisko": "Gołębiowska",
        "lekarzDentysta": true,
        "ukryty": false
    },
    {
        "imie": "Hanna",
        "nazwisko": "Gruszczyńska-Korba",
        "lekarzDentysta": true,
        "ukryty": false
    },
    {
        "imie": "Anna",
        "nazwisko": "Grzegorczyk-Jaźwińska",
        "lekarzDentysta": true,
        "ukryty": false
    },
    {
        "imie": "Marek",
        "nazwisko": "Hołubowicz",
        "lekarzDentysta": true,
        "ukryty": false
    },
    {
        "imie": "Tadeusz",
        "nazwisko": "Kazimierczak",
        "lekarzDentysta": true,
        "ukryty": false
    },
    {
        "imie": "Katarzyna",
        "nazwisko": "Kessler-Furman",
        "lekarzDentysta": true,
        "ukryty": false
    },
    {
        "imie": "Małgorzata",
        "nazwisko": "Kicka",
        "lekarzDentysta": true,
        "ukryty": false
    },
    {
        "imie": "Karolina",
        "nazwisko": "Korba",
        "lekarzDentysta": true,
        "ukryty": false
    },
    {
        "imie": "Michał",
        "nazwisko": "Korba",
        "lekarzDentysta": true,
        "ukryty": true
    },
    {
        "imie": "Kamila",
        "nazwisko": "Majewska",
        "lekarzDentysta": true,
        "ukryty": false
    },
    {
        "imie": "Beata",
        "nazwisko": "Marcinkowska",
        "lekarzDentysta": true,
        "ukryty": false
    },
    {
        "imie": "Joanna",
        "nazwisko": "Niemczyk",
        "lekarzDentysta": true,
        "ukryty": false
    },
    {
        "imie": "Maciej",
        "nazwisko": "Nowak",
        "lekarzDentysta": true,
        "ukryty": false
    },
    {
        "imie": "Bartosz",
        "nazwisko": "Pawłowski",
        "lekarzDentysta": true,
        "ukryty": false
    },
    {
        "imie": "Karolina",
        "nazwisko": "Rumińska",
        "lekarzDentysta": true,
        "ukryty": false
    },
    {
        "imie": "Agnieszka",
        "nazwisko": "Suchodolska",
        "lekarzDentysta": true,
        "ukryty": false
    },
    {
        "imie": "Krzysztof",
        "nazwisko": "Werpachowski",
        "lekarzDentysta": true,
        "ukryty": false
    },
    {
        "imie": "Teresa",
        "nazwisko": "Gotner-Błażejewska",
        "lekarzDentysta": true,
        "ukryty": false
    },
    {
        "imie": "Barbara",
        "nazwisko": "Żmudzin-Tromszczyńska",
        "lekarzDentysta": false,
        "ukryty": false
    }
];

function loadDoctors() {
    let table = $('#doctors-table');
    for (let dct of DOCTORS.sort(function (a, b) {
        if (a.nazwisko === b.nazwisko)
            return a.imie > b.imie;
        return a.nazwisko > b.nazwisko;
    })) {
        if (dct.ukryty)
            continue;
        let lekDent = dct.lekarzDentysta ? 'lekarz-dentysta ' : '';
        let imie = dct.imie;
        let nazwisko = dct.nazwisko;
        if (!imie || !nazwisko)
            continue;
        table.append(`<div class="row"><div class="cell">${lekDent}${imie} <b>${nazwisko}</b></div></div>`);
    }
}
