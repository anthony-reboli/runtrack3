

var button = document.getElementById('button');
var compteur = document.getElementById('compteur1');
button.onclick = addone;
var x = 0;
compteur1.innerHTML = x;
function addone()
{
  x++;
  compteur1.innerHTML = x;
}