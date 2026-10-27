
const API_URL = "../backend/api/vehicles.php";

const form = document.getElementById("vehicleForm");
const vehiclesList = document.getElementById("vehiclesList");
const btnSubmit = document.getElementById("btn-submit-form");

// 1. Gérer l'état de chargement
function setLoadingState(isLoading) {
    btnSubmit.disabled = isLoading;

    if (isLoading) {
        btnSubmit.textContent = "Ajout en cours...";
    } else {
        btnSubmit.textContent = "Ajouter";
    }
}

// 2. Délai temporaire pour voir le chargement
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// 3. Récupérer et afficher les véhicules
async function getVehicles() {
    try {
        const response = await fetch(API_URL);

        if (!response.ok) {
            throw new Error("Erreur HTTP : " + response.status);
        }

        const result = await response.json();

        if (!Array.isArray(result.data)) {
            throw new Error("Format de réponse API invalide");
        }

        vehiclesList.innerHTML = "";

        result.data.forEach(vehicle => {
            vehiclesList.innerHTML += `
                <div class="bg-white p-4 rounded-lg shadow">
                    <h2 class="text-xl font-bold">
                        ${vehicle.marque}
                    </h2>
                    <p>Modèle : ${vehicle.modele}</p>
                    <p>Année : ${vehicle.annee}</p>
                </div>
            `;
        });

    } catch (error) {
        console.error("Erreur de chargement :", error);

        vehiclesList.innerHTML = `
            <p class="text-red-600">
                Impossible de charger les véhicules.
            </p>
        `;
    }
}

// 4. Ajouter un véhicule
form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const vehicle = {
        marque: document.getElementById("marque").value,
        modele: document.getElementById("modele").value,
        annee: document.getElementById("annee").value
    };

    // Début du chargement
    setLoadingState(true);

    try {
        // Délai temporaire pour observer Loading
        await delay(2000);

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

        if (result.success === false) {
            throw new Error(
                result.message || "Échec de l'ajout du véhicule."
            );
        }

        console.log("Véhicule ajouté :", result);

        form.reset();

        await getVehicles();

    } catch (error) {
        console.error("Erreur :", error);
        alert("Impossible d'ajouter le véhicule.");

    } finally {
        // Toujours réactiver le bouton
        setLoadingState(false);
    }
});

// 5. Charger les véhicules au démarrage
getVehicles();
