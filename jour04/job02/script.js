var creation = '{"creation" : "2019", "name" : "La Plateforme_","address": "8 rue d\'hozier","city": "Marseille","nb_staff": "11"}';

const creation1 = JSON.parse(creation);

function jsonValueKey(creation,key){
	    	

    
    console.log(creation[key]);
    return creation[key];

}	
// var res=jsonValueKey(creation,"city");
// console.log(res);

