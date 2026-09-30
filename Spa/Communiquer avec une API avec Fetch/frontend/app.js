const API_URL = "../backend/api.php";

const tableBody = document.querySelector("#table-body");
const form = document.querySelector("#form-categorie");

const nomInput = document.querySelector("#nom");
const couleurInput = document.querySelector("#couleur");
const iconeInput = document.querySelector("#icone");

let ligneEnEdition = null;


// GET
function chargerCategories() {

    fetch(API_URL)
        .then(response => response.json())
        .then(result => {

            tableBody.innerHTML = "";

            result.data.forEach(categorie => {

                const ligne = document.createElement("tr");

                ligne.innerHTML = `
                    <td>${categorie.id}</td>
                    <td>${categorie.nom}</td>
                    <td>${categorie.couleur}</td>
                    <td>${categorie.icone}</td>
                    <td>
                        <button class="btn-edit">Modifier</button>
                        <button class="btn-delete">Supprimer</button>
                    </td>
                `;

                // PUT
                const btnEdit = ligne.querySelector(".btn-edit");

                btnEdit.addEventListener("click", () => {

                    ligneEnEdition = categorie.id;

                    nomInput.value = categorie.nom;
                    couleurInput.value = categorie.couleur;
                    iconeInput.value = categorie.icone;

                });


                // DELETE
                const btnDelete = ligne.querySelector(".btn-delete");

                btnDelete.addEventListener("click", () => {

                    fetch(API_URL, {

                        method: "DELETE",

                        headers: {
                            "Content-Type": "application/json"
                        },

                        body: JSON.stringify({
                            id: categorie.id
                        })

                    })
                    .then(response => response.json())
                    .then(result => {

                        console.log(result);

                        chargerCategories();

                    });

                });

                tableBody.appendChild(ligne);

            });

        });

}


// POST / PUT
form.addEventListener("submit", (event) => {

    event.preventDefault();

    const data = {
        nom: nomInput.value,
        couleur: couleurInput.value,
        icone: iconeInput.value
    };

    let method = "POST";

    if (ligneEnEdition !== null) {

        data.id = ligneEnEdition;

        method = "PUT";
    }

    fetch(API_URL, {

        method: method,

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(data)

    })
    .then(response => response.json())
    .then(result => {

        console.log(result);

        form.reset();

        ligneEnEdition = null;

        chargerCategories();

    });

});


// Démarrage
document.addEventListener("DOMContentLoaded", () => {

    chargerCategories();

});