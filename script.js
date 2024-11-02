let button = document.getElementById('button');
let form = document.getElementById('form');
let message = document.getElementById('message');
let link = document.getElementById('link');

const secretNumber = Math.floor(Math.random() * 100) + 1; // Ajout de +1 pour inclure 100
let attempts = 10;

button.onclick = function() {
    const input = document.getElementById('input');
    const userGuess = Number(input.value); // Conversion de l'entrée en nombre

    if (input.value !== "") {
        if (attempts > 0) { // Vérifier s'il reste des tentatives
            attempts--; // Décrémenter le nombre de tentatives ici

            if (userGuess < secretNumber) {
                message.innerText = 'Le nombre est plus grand que ' + userGuess + '.';
                message.style.color = "#999";
            } else if (userGuess > secretNumber) {
                message.innerText = 'Le nombre est plus petit que ' + userGuess + '.';
                message.style.color = "#999";
            } else {
                message.innerText = 'Bravo, vous avez trouvé le nombre qui est ' + secretNumber + '!';
                message.style.color = "green";
                form.style.display = 'none';
                link.style.display = 'flex';
                return; // Sortir de la fonction pour éviter de continuer
            }

            if (attempts === 0) {
                message.innerText = 'Vous avez perdu ! Il fallait trouver ' + secretNumber + '.';
                message.style.color = "red";
                form.style.display = 'none';
                link.style.display = 'flex';
            }
        } else {
            message.innerText = 'Vous avez épuisé vos tentatives !';
            message.style.color = "red";
            form.style.display = 'none';
            link.style.display = 'flex';
        }
    } else {
        message.innerText = "Le champ est vide !";
        message.style.color = "red";
    }

    input.value = ""; // Réinitialiser le champ d'entrée après chaque essai
};