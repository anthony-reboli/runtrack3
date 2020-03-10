window.addEventListener('scroll',function(event){
	
 // prend la hauteur largeur de window pour detexter en %
	var scrollTop = document.body.scrollTop,
    windowHeight = window.innerHeight,
    scrollHeight = document.body.scrollHeight;
 
var scrollPercent = (scrollTop / (scrollHeight - windowHeight)) * 100;
if (scrollPercent <= 30)
	{

		// document.body.style.backgroundColor = "blue";
		document.getElementById("myP").className = "text";
	}

	 if (scrollPercent >= 45)
	{
		// document.body.style.backgroundColor = "pink";
		document.getElementById("myP").className = "text2";
	}

	if (scrollPercent > 50 )
	{
		// document.body.style.backgroundColor = "red";
		document.getElementById("myP").className = "text3";
	}
});