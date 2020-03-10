function showhide()
{
var verif= document.getElementsByTagName('article');
	if(verif[0]== null)
	{
		var article = document.createElement('article');
		var newelement = document.createTextNode('L\'important n\'est pas la chute, mais l\'atterrissage.');
		document.body.appendChild(article);
		article.appendChild(newelement);
	}

	else
	{
		document.body.removeChild(verif[0]);
	}


    }





    





    


