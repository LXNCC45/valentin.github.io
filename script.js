function showAnimation() {
    alert("Tu es ma Valentine ! 💖");
    
    // Ajout de l'effet joyeux (gif) au milieu de la page
    const happyEffect = document.getElementById('happyEffect');
    happyEffect.style.display = 'block';

    // Masquer le gif après 2 secondes (2000 millisecondes)
    setTimeout(() => {
        happyEffect.style.display = 'none';
    }, 2000);

    // Vous pouvez également ajouter d'autres animations ou effets ici
}

function moveButton() {
    let noButton = document.getElementById('noButton');
    noButton.style.position = 'absolute';
    noButton.style.left = Math.random() * (window.innerWidth - 100) + 'px';
    noButton.style.top = Math.random() * (window.innerHeight - 40) + 'px';
}
