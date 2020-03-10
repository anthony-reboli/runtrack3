window.addEventListener('scroll',function(event){
	var scroll = this.scrollY;
if (scroll <= 30)
	{

		// document.body.style.backgroundColor = "blue";
		document.getElementById("myP").className = "text";
	}

	 if (scroll >= 1400)
	{
		// document.body.style.backgroundColor = "pink";
		document.getElementById("myP").className = "text2";
	}

	if (scroll > 2500 )
	{
		// document.body.style.backgroundColor = "red";
		document.getElementById("myP").className = "text3";
	}
});