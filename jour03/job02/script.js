jQuery(document).ready(function(){

var tab=[];
var tab2=["PA1","PA2","PA3","PA4","PA5","PA6"];
 $("#bouton").click(function(){

    var parent = $("#melanger");
    var divs = parent.children();
    while (divs.length) {
        parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
    }
})



      $("img").click(function(){
   $(this).appendTo( "#ranger" );
   // commence a calculer
    var count = $("#ranger img").length;
     console.log(count);
  
    tab.push($(this).attr('id'));
    console.log(tab);
    console.log(tab2);

var i = 1;
 if (count == 6)
 {
    var win= true;


while( i < 6 ){


         if( tab[i] != tab2[i]){
            win = false;
                 
            
                                }
                                i++;
     

}
if (win)
    {
        var p = document.createElement('p');
        var newelement = document.createTextNode("Vous avez gagné");
        p.setAttribute("id", "win");
        // ar
        document.body.appendChild(p);
        p.appendChild(newelement);
    }

    else {

        var p = document.createElement('p');
        var newelement = document.createTextNode("Vous avez perdu");
        p.setAttribute("id", "perdu");
        document.body.appendChild(p);
        p.appendChild(newelement);
    }

} 


      // if(count == 6)
      //   {
      //       console.log("tu a fini");
      //   }

});
       



});





		
		