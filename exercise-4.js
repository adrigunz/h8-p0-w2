var tanggal = 8;
var bulan = 3;
var tahun = 1992;

if (tanggal >= 1 && tanggal <= 31) {
    tanggal = tanggal;
} else {
    tanggal = false;
}

switch (bulan) {
    case 1:
        bulan = 'Januari';
        break;
    case 2:
        bulan = 'Februari';
        break;
    case 3:
        bulan = 'Maret';
        break;
    case 4:
        bulan = 'April';
        break;
    case 5:
        bulan = 'Mei';
        break;
    case 6:
        bulan = 'Juni';
        break;
    case 7:
        bulan = 'Juli';
        break;
    case 8:
        bulan = 'Agustus';
        break;
    case 9:
        bulan = 'September';
        break;
    case 10:
        bulan = 'Oktober';
        break;
    case 11:
        bulan = 'November';
        break;
    case 12:
        bulan = 'Desember';
        break;
    default:
        bulan = false;
        break;
}

if (tahun >= 1900 && tahun <= 2200) {
    tahun = tahun;
} else {
    tahun = false;
}

if (tanggal != false && bulan != false && tahun != false) {
    console.log(`${tanggal} ${bulan} ${tahun}`);
} else {
    console.log('Salah oi ini format date nya!');
}