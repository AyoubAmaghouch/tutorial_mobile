fetch('../backend/categories.php')

    .then(response => response.json())

    .then(categories => {

        const liste = document.getElementById('categories');

        categories.forEach(categorie => {

            const li = document.createElement('li');

            li.textContent = categorie.nom;

            liste.appendChild(li);

        });

    })

    .catch(error => {

        console.error("Erreur :", error);

    });