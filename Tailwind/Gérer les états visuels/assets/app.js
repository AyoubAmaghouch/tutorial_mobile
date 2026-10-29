
function showToast(message, type = 'success') {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');

    let classes =
        'text-white px-4 py-2 rounded shadow-lg mb-2 ' +
        'transition-opacity duration-300';

    if (type === 'success') {
        classes += ' bg-green-500';
    } else {
        classes += ' bg-red-500';
    }

    toast.className = classes;
    toast.textContent = message;

    container.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = '0';

        setTimeout(() => {
            toast.remove();
        }, 300);
    }, 3000);
}

const form = document.getElementById('article-form');
const button = document.getElementById('btn-enregistrer');
const buttonText = document.getElementById('btn-text');
const spinner = document.getElementById('spinner');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const titre = document.getElementById('titre').value.trim();
    const categorie = document.getElementById('categorie').value;

    if (titre === '' || categorie === '') {
        showToast('Veuillez remplir tous les champs.', 'error');
        return;
    }

    // État de chargement
    button.disabled = true;
    buttonText.textContent = 'Enregistrement...';
    spinner.classList.remove('hidden');

    // Simulation d'un enregistrement
    setTimeout(() => {
        showToast('Article enregistré avec succès !', 'success');

        form.reset();

        // Retour à l'état normal
        button.disabled = false;
        buttonText.textContent = 'Enregistrer';
        spinner.classList.add('hidden');
    }, 1500);
});
