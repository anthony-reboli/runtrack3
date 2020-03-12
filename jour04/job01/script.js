jQuery(document).ready(function(){
   
   
   

      $("#bouton").click(function()
                                {
   
   $.ajax({
         //L'URL de la requête 
         url: "expression.txt",

//         //La méthode d'envoi (type de requête)
         method: "GET",

//         //Le format de réponse attendu
        
     })

    .done(function(response){
         let data = (response);
         $("p#res").append(data);
                            })

                                });

       

                                            });

        



                                   


    
   
                               
  




		
		