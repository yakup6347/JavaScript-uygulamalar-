let ogrenci_1_name = "yakup berhuni";
let ogrenci_2_name = "murat akman";

let now_year = 2025;

let ogrenci_1_birth_year = 2000;
let ogrenci_2_birth_year = 2001;

let ogrenci_1_not_1 = 85;
let ogrenci_1_not_2 = 90;
let ogrenci_1_not_3 = 90;

let ogrenci_2_not_1 = 75;
let ogrenci_2_not_2 = 80;
let ogrenci_2_not_3 = 90;

let passing_grade = 45;



console.log("öğrencinin adı: " + ogrenci_1_name + " yaşı: " + (now_year - ogrenci_1_birth_year) + " not ortalaması: " + parseInt((ogrenci_1_not_1 + ogrenci_1_not_2 + ogrenci_1_not_3) / 3));

if ((ogrenci_1_not_1 + ogrenci_1_not_2 + ogrenci_1_not_3) / 3 >= passing_grade) {
    console.log(ogrenci_1_name + " başarılı\n");
} else {
    console.log(ogrenci_1_name + " başarısız\n");
}

console.log("öğrencinin adı: " + ogrenci_2_name + " yaşı: " + (now_year - ogrenci_2_birth_year) + " not ortalaması: " + parseInt((ogrenci_2_not_1 + ogrenci_2_not_2 + ogrenci_2_not_3) / 3));

if ((ogrenci_2_not_1 + ogrenci_2_not_2 + ogrenci_2_not_3) / 3 >= passing_grade) {
    console.log(ogrenci_2_name + " başarılı\n");
} else {
    console.log(ogrenci_2_name + " başarısız\n");
}

