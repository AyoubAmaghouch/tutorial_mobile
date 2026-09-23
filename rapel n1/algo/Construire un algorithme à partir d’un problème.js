// Étape 1 : Les données

let produits = [
    { nom: "A", prix: 30, views: 1200 },
    { nom: "B", prix: 20, views: 2500 },
    { nom: "C", prix: 15, views: 1800 },
    { nom: "D", prix: 40, views: 3000 },
    { nom: "E", prix: 10, views: 900 },
    { nom: "F", prix: 25, views: 2000 }
];

let budget = 100;


// Étape 2 : Garder les produits populaires

let produitPop = [];
let j = 0;

for (let i = 0; i < produits.length; i++) {

    if (produits[i].views > 1500) {
        produitPop[j] = produits[i];
        j++;
    }
}


// Étape 3 : Trier les produits par prix

for (let i = 0; i < produitPop.length - 1; i++) {

    for (let j = 0; j < produitPop.length - 1 - i; j++) {

        if (produitPop[j].prix > produitPop[j + 1].prix) {

            let temp = produitPop[j];
            produitPop[j] = produitPop[j + 1];
            produitPop[j + 1] = temp;
        }
    }
}


// Étape 4 : Acheter sans dépasser le budget

let produitAchetes = [];
let total = 0;
let k = 0;

for (let i = 0; i < produitPop.length; i++) {

    if (total + produitPop[i].prix <= budget) {

        produitAchetes[k] = produitPop[i];
        total = total + produitPop[i].prix;
        k++;
    }
}


// Étape 5 : Afficher le résultat

console.log("Produits achetés :");

for (let i = 0; i < produitAchetes.length; i++) {
    console.log(produitAchetes[i].nom);
}

console.log("Nombre de produits :", produitAchetes.length);
console.log("Total :", total, "DH");