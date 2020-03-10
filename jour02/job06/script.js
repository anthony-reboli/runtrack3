var keycodes = [38,38,40,40,37,39,37,39],
    index = 0;
 
function konami() {
    window.alert("Easter Egg");
    
}
 
window.onkeyup = function (event) {
    // À chaque appuie sur une touche, si cette touche correspond à la prochaine
    // touche du code konami :
    if (event.keyCode === keycodes[index]) {
        // On passera à la touche suivante
        index += 1; // Plus lisible / rapide que index = index + 1;
        if (index === keycodes.length) {
            // Si le code konami est complet, on appelle la fonction konami
            konami();
        }
    } else {
        // On est pas dans le code konami, on repart à zéro
        index = 0;
    }
}; // On oublie pas le point-virgule