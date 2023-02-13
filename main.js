// UKOL CISLO 1

let title = "Little Prince";

// Vypište do konzole počet znaků názvu

title.length;

// Převeďte název filmu na velká písmena

title.toUpperCase();

// Vyřízněte z názvu prvních pět písmen

title.slice(0, 5);

// Vyřízněte z názvu posledních pět písmen

title.slice(8, 13);

//
// UKOL CISLO 2 
//
// Vytvoření výstupu pro uživatele 

let qa = document.querySelector(".neco");
let email = prompt("Write your e-mail address, please: ");

qa.innerHTML = email;

// indexOf @
// uložení do aatIndex 
let index = document.querySelector(".cosi");
let atIndex = email.indexOf("@");

index.innerHTML = atIndex;

// metoda slice - jmeno a prijmeni 

let vyrez = document.querySelector(".vyrez");
let vyrez1 = email.slice(0, atIndex);

vyrez.innerHTML = vyrez1;

// metoda slice - doména

let domena = document.querySelector(".domena");
let domena1 = email.slice(atIndex + 1);

domena.innerHTML = domena1;

// vytvoření objektu 

let objekt = {
    userName: vyrez1,
    domain: domena1,
};




