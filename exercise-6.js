// 1. Melakukan Looping Menggunakan While
console.log('LOOPING PERTAMA');
var loopOne = 0; // initialize
while (loopOne < 20) { // enters the cycle if statement is true
    loopOne += 2; // increment to avoid infinite loop
    console.log(`${loopOne} - I love coding`); // output
}
console.log('LOOPING KEDUA');
var loopTwo = 22; // initialize
while (loopTwo > 2) { // enters the cycle if statement is true
    loopTwo -= 2; // increment to avoid infinite loop
    console.log(`${loopTwo} - I will become fullstack developer`); // output
}

// 2. Melakukan Looping Menggunakan For
console.log('LOOPING PERTAMA');
for (var firstLoop = 1; firstLoop <= 20; firstLoop++) {
    console.log(`${firstLoop} - I love coding`); // output
}
console.log('LOOPING KEDUA');
for (var secondLoop = 20; secondLoop >= 1; secondLoop--) {
    console.log(`${secondLoop} - I will become fullstack developer`); // output
}

// 3. Angka Ganjil dan Genap
for (var counter = 1; counter <= 100; counter++) {
    console.log(`counter sekarang = ${counter}`);
    if (counter % 2 == 0) {
        console.log('GENAP');
    } else if (counter % 2 == 1) {
        console.log('GANJIL');
    }
}

for (var counter = 1; counter <= 100; counter += 2) {
    console.log(`counter sekarang = ${counter}`);
    if (counter % 3 == 0) {
        console.log(`${counter} KELIPATAN 3`);
    } else {
        console.log('');
    }
}

for (var counter = 1; counter <= 100; counter += 5) {
    console.log(`counter sekarang = ${counter}`);
    if (counter % 6 == 0) {
        console.log(`${counter} KELIPATAN 6`);
    } else {
        console.log('');
    }
}

for (var counter = 1; counter <= 100; counter += 9) {
    console.log(`counter sekarang = ${counter}`);
    if (counter % 10 == 0) {
        console.log(`${counter} KELIPATAN 10`);
    } else {
        console.log('');
    }
}