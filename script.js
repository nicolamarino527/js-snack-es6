// Snack 1
// Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà
// : nome e peso. Stampare a schermo la bici con peso minore.

// Snack2
// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti 
// fatti, falli subiti. Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
// Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto
//  in console.

// Snack 3 (Bonus)
// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b). 
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.



// Snack 1

// Creiamo l'array di biciclette
const biciclette = [
    {"nome": "Mountain Bike", "peso": "12kg"},
    {"nome": "Road Bike", "peso": "8kg"},
    {"nome": "Hybrid Bike", "peso": "10kg"},
    {"nome": "Electric Bike", "peso": "20kg"},
    {"nome": "Folding Bike", "peso": "11kg"},
    {"nome": "BMX", "peso": "9kg"},
    {"nome": "Touring Bike", "peso": "13kg"},
    {"nome": "Gravel Bike", "peso": "9.5kg"},
    {"nome": "Fat Bike", "peso": "14kg"}
];
console.table("catalogo biciclette:",biciclette);

// Facciamo un ciclo per individuare la bicicletta col peso minore e mostriamola in console
let biciLeggera = biciclette[0];

for (let k = 1; k < biciclette.length; k++) {
    let bici = biciclette[k];
    let pesoBici = parseFloat(bici.peso);
    
    if (pesoBici < parseFloat(biciLeggera.peso)){
        biciLeggera = bici;
    }

    };

console.log("la bici piu leggera del ctalogo é:",biciLeggera.nome);

// Snack 2

// Creaiamo l'array delle squadre
let squadre = [
    {"nome": "Juventus", "punti": 0, "falli": 0},
    {"nome": "Inter Milan", "punti": 0, "falli": 0},
    {"nome": "AC Milan", "punti": 0, "falli": 0},
    {"nome": "Roma", "punti": 0, "falli": 0},
    {"nome": "Napoli", "punti": 0, "falli": 0},
    {"nome": "Atalanta", "punti": 0, "falli": 0},
    {"nome": "Lazio", "punti": 0, "falli": 0},
    {"nome": "Fiorentina", "punti": 0, "falli": 0},
    {"nome": "Sampdoria", "punti": 0, "falli": 0},
    {"nome": "Torino", "punti": 0, "falli": 0},
    {"nome": "Bologna", "punti": 0, "falli": 0},
    {"nome": "Udinese", "punti": 0, "falli": 0},
    {"nome": "Cagliari", "punti": 0, "falli": 0},
];



console.log(squadre);

// squadre.posizione = "!";
// squadre["punti"] = 10;

