// Vazifa:
// 1)10 ta object yaratasizlar, ichida 4 ta o'zgaruvchisi(key) va 2 ta function()
// bo'lishi kere, value larini prompt yordamida kiritishizlar kere. +10 koin
// misol uchun:
// let odamlar = []
// for (let i = 0; i < 10; i++) {
//     let ism = prompt("asdfgsf")
//     let odam = new Object()
//     odam.ism = ism
//     odamlar.push(odam)
// }
// 2) Odamlarni ichida eng yosh va eng kotta odamni ma'lumotini chiqazib berish kere +10 koin
// 3) promptdan savol chiqishi kere: Kimni topib beray? Ismini yozing:
// Topilgan odamni ma'lumotlarini to'liq chiqzib berish kerak! +15 koin

let odamlar = [];

for (let i = 0; i < 10; i++) {
    let ism = prompt("Ismingizni kirting! ");
    let fam = prompt("Familiyangizni kiriting! ");
    let shar = prompt("Sharifingizni kirting! ");
    let yosh = +prompt("Yoshingizni kiriting! ");

    let odam = {
        ism: ism,
        fam: fam,
        shar: shar,
        yosh: yosh
    };

    odamlar.push(odam);
}

let ages = odamlar.map(odam => odam.yosh);
let numbers = ages.filter(yosh => !isNaN(yosh));

if (numbers.length > 0) {
    let kichkinaYosh = Math.min(...numbers);
    let kattaYosh = Math.max(...numbers);

    console.log("1. Eng yoshi yoshi:", kichkinaYosh);
    console.log("2. Eng yoshi kattasi:", kattaYosh);
} else {
    console.log("Yosh kiritilmagan");
}

let savol = prompt("Sizga kim kerak: " + "\n1. Sardor" + "\n2. Saida" + "\n3. Sohib" + "\n4. Sarvinoz");

if (savol === "1") {
    let user1 = {
        ism: "Sardor",
        fam: "Jabborov",
        shar: "Qudratovich",
        yosh: 15
    };

    for (let element in user1) {
        console.log(user1[element]);
    }
} else if (savol === "2") {
    let user2 = {
        ism: "Saida",
        fam: "Juraboyeva",
        shar: "Rashidovna",
        yosh: 12
    };

    for (let element in user2) {
        console.log(user2[element]);
    }
} else if (savol === "3") {
    let user3 = {
        ism: "Sohib",
        fam: "Qodirxonov",
        shar: "Shuxratovich",
        yosh: 14
    };

    for (let element in user3) {
        console.log(user3[element]);
    }
} else if (savol === "4") {
    let user4 = {
        ism: "Sarvinoz",
        fam: "Boboyeva",
        shar: "Akmalovna",
        yosh: 17
    };

    for (let element in user4) {
        console.log(user4[element]);
    }
}

