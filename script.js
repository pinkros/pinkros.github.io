const constVar = 1;
let letVar = 2;
var varVar = 3;

console.log(`constVar är ${constVar}`);
console.log(`letVar är ${letVar}`);
console.log(`varVar är ${varVar}`);
console.log(`Denna sida lovar att inte mine:a bitcoin med din dator`);

// 1. Skapa en array med bilmärkesnaman:
//     ['bmw', 'mercedes', 'volvo', 'opel']
// 2. lägg till märket 'saab' först i listan
// 3. lägg till 'tesla' sist
// 4. leta upp 'saab' utan att plocka bort
//      och printa ut det
// 5. skapa en till array med fler märken
//     ['renault', 'skoda']
// 6. lägg till den nya arrayen från index 2 i den första

const carManufacurer = ["bmw", "mercedes", "volvo", "opel"];

console.log("första listan:");

for (const car of carManufacurer) {
	console.log(car);
}

carManufacurer.unshift("saab");

console.log("andra listan:");

for (const car of carManufacurer) {
	console.log(car);
}

carManufacurer.push("tesla");

console.log("tredje listan:");

for (const car of carManufacurer) {
	console.log(car);
}

let saab = carManufacurer.indexOf("volvo");

console.log(`hittat ${carManufacurer[saab]}`);

console.log("verifierar att volvo inte försvunnit:");

for (const car of carManufacurer) {
	console.log(car);
}

const moreCarManuf = ["renault", "skoda"];

for (const car of moreCarManuf) {
	carManufacurer.splice(2, 0, car);
}

console.log("splicey splicey:");

for (const car of carManufacurer) {
	console.log(car);
}
