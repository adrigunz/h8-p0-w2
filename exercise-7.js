// 1. Menyusun Barisan Bintang
console.log('Soal 1:');
var rows1 = 5;
while (rows1 > 0) {
    console.log('*');
    rows1--;
}

// 2. Menyusun Barisan Bintang Dengan Nested Looping
console.log('Soal 2:');
var rows2 = 5;
for (rowLoop = 0; rowLoop < rows2; rowLoop++) {
    var combinedAsterisk = "";
    for (asterisk = 0; asterisk < rows2; asterisk++) {
        combinedAsterisk += '*';
    }
    console.log(combinedAsterisk);
}

// 3. Menyusun Barisan Tangga Bintang Dengan Nested Looping
console.log('Soal 3:');
var rows3 = 5;
for (rowLoop = 1; rowLoop <= rows3; rowLoop++) {
    var combinedAsterisk = "";
    for (asterisk = 0; asterisk < rowLoop; asterisk++) {
        combinedAsterisk += '*';
    }
    console.log(combinedAsterisk);
}