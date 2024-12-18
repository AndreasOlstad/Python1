// Oppave 1
var tall1 = 4;
var tall2 = 8;

pluss = tall1 + tall2;
minus = tall1 - tall2;
gange = tall1 * tall2;
dele = tall1 / tall2;

console.log(
  `${tall1} og ${tall2} blir til: pluss=${pluss}, minus=${minus}, gange=${gange}, dele=${dele}`
);


// Oppgave 2
let lengde = 6;
let bredde = 8;

let areal = lengde * bredde;
console.log(`Arealet av rektangelet er ${areal} kvadratmeter.`);

// Oppgave 3
let navn = prompt("Hva er navnet ditt?");
let alder = parseInt(prompt("Hvor gammel er du?"));

let årTil100 = 100 - alder;

console.log(navn, "du fyller 100 år om", årTil100, "år.");


// Oppgave 4 
let tall = parseInt(prompt("Skriv inn et tall:"));

if (tall > 0) {
    console.log("Tallet er positivt.");
} else if (tall < 0) {
    console.log("Tallet er negativt.");
} else {
    console.log("Tallet er null.");
}

// Oppgave 5
let n = parseInt(prompt("Skriv inn et tall:"));
let sum = 0;
for (let i = 1; i <= n; i++) {
    sum += i;
}
console.log("Summen av tallene fra 1 til", n, "er", sum);

// Oppgave 6
let navn1 = prompt("Skriv inn navn 1:");
let navn2 = prompt("Skriv inn navn 2:");
let navn3 = prompt("Skriv inn navn 3:");
let navn4 = prompt("Skriv inn navn 4:");
let navn5 = prompt("Skriv inn navn 5:");
let navnListe = [navn1, navn2, navn3, navn4, navn5];
console.log("Navnene er:", navnListe);

// Oppgave 7
let navnListen = [];
for (let i = 0; i < 5; i++) {
    let navn = prompt(`Skriv inn navn ${i + 1}:`);
    navnListen.push(navn);
}
console.log("Navnene er:", navnListen);

// Oppgave 8
function sorterOgBeregnGjennomsnitt(tallListe) {
    tallListe.sort((a, b) => a - b);
    let gjennomsnitt = tallListe.reduce((a, b) => a + b, 0) / tallListe.length;
    return gjennomsnitt;
}

let tallene = [4, 2, 9, 7, 1];
let gjennomsnitt = sorterOgBeregnGjennomsnitt(tallene);
console.log("Sortert liste:", tallene);
console.log("Gjennomsnittet er:", gjennomsnitt);

