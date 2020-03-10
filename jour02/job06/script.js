 var keycodes = [38,38,40,40,37,39,37,39],   //haut , haut , bas, bas , g, d, g, d
    index = 0;
 
function konami() {
    window.alert("Easter Egg");

    var article = document.createElement('article');
		var newelement = document.createTextNode('bravo tu a trouver le secret');
		article.setAttribute('id','ar1');
		document.body.appendChild(article);
		article.appendChild(newelement);

		// deuxieme partie

		var article = document.createElement('article');
		var newelement = document.createTextNode('Merci la plateforme');
		article.setAttribute('id','ar2');
		document.body.appendChild(article);
		article.appendChild(newelement);

		// creer la div

				var article = document.createElement('div');
		
		article.setAttribute('id','x');
		document.body.appendChild(article);


		// faire une image
		 var img = document.createElement("img");
		 img.setAttribute('id','img1');
    img.src = "DSC01453.jpg";
    

    var div = document.getElementById("x");
    div.appendChild(img);

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