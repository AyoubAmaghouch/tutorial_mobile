
const API_URL = "../backend/api/vehicles.php";

const form = document.getElementById("vehicleForm");
const vehiclesList = document.getElementById("vehiclesList");
const btnSubmit = document.getElementById("btn-submit-form");
const toastContainer = document.getElementById("toast-container");

function showToast(message, type = "success") {
    const toast = document.createElement("div");

    toast.className =
        "px-5 py-3 rounded-lg shadow-lg text-white " +
        (type === "success" ? "bg-green-600" : "bg-red-600");

    toast.textContent = message;

    toastContainer.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 3000);
}


function setLoadingState(isLoading) {
    btnSubmit.disabled = isLoading;

    if (isLoading) {
        btnSubmit.innerHTML = `
            <span class="inline-block w-4 h-4 border-2 border-white
            border-t-transparent rounded-full animate-spin"></span>
            Ajout en cours...
        `;
    } else {
        btnSubmit.textContent = "Ajouter";
    }
}


async function getVehicles() {
    try {
        const response = await fetch(API_URL);

        if (!response.ok) {
            throw new Error("Erreur HTTP : " + response.status);
        }

        const result = await response.json();

        console.log("Véhicules reçus :", result);

        if (!Array.isArray(result.data)) {
            throw new Error("Format de réponse API invalide");
        }

        vehiclesList.innerHTML = "";

        result.data.forEach(vehicle => {
            const card = document.createElement("div");
            card.className = "bg-white p-4 rounded-lg shadow";

            const title = document.createElement("h2");
            title.className = "text-xl font-bold";
            title.textContent = vehicle.marque;

            const modele = document.createElement("p");
            modele.textContent = "Modèle : " + vehicle.modele;

            const annee = document.createElement("p");
            annee.textContent = "Année : " + vehicle.annee;

            card.append(title, modele, annee);
            vehiclesList.appendChild(card);
        });

    } catch (error) {
        console.error("Erreur de chargement :", error);

        showToast(
            "Impossible de charger les véhicules.",
            "error"
        );
    }
}


form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const vehicle = {
        marque: document.getElementById("marque").value.trim(),
        modele: document.getElementById("modele").value.trim(),
        annee: document.getElementById("annee").value
    };

    setLoadingState(true);

    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(vehicle)
        });

        if (!response.ok) {
            throw new Error("Erreur HTTP : " + response.status);
        }

        const result = await response.json();

        console.log("Réponse API :", result);

     
        if (result.success === false) {
            throw new Error(
                result.message || "Échec de l'ajout du véhicule."
            );
        }

        showToast(
            "Véhicule ajouté avec succès !",
            "success"
        );

        form.reset();

        
        await getVehicles();

    } catch (error) {
        console.error("Erreur d'ajout :", error);

        showToast(
            error.message || "Impossible d'ajouter le véhicule.",
            "error"
        );

    } finally {
        setLoadingState(false);
    }
});


getVehicles();
