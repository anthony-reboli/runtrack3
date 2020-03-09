var date = new Date('02/04/2020') ;
console.log(date);

function jourtravaille(date){
    // var d = new Date();
     var semaine= date.getDay();
    var jour=  date.toLocaleString('default', { month: 'long' });
    var mois=  date.getMonth()+1;
    var année= date.getFullYear();
    const datef=[
    new Date('01/01/2020'),
    new Date('04/13/2020'),
    new Date ('05/01/2020'),
    new Date ('05/08/2020'),
    new Date ('05/01/2020'),
    new Date ('05/21/2020'),
    new Date ('06/01/2020'),
    new Date ('07/14/2020'),
    new Date ('08/15/2020'),
    new Date ('11/11/2020'),
    new Date ('12/25/2020')
    ]
    console.log(jour);
    console.log(mois);
    console.log(année);
    console.log(semaine);


    if (semaine == '0' || semaine== '6') 
    {
        console.log('Non  '+ mois +' '+ jour +' '+ année+' est un weekend.');
    }

    for ( i=0; i<= datef.length; i++)
    {
        if (datef[i].getTime() == date.getTime() )
        {
            console.log('Le  '+ mois +' '+ jour +' '+ année+' est un jour férié.');
            break;
        }

        else
        {
            console.log('Oui  '+ mois +' '+ jour +' '+ année+' est un jour travailé.');
            break;
        }
    }

// if (jour == '01' && mois == '01' && année == '2020')
// {
//     console.log("c'est ferier");
// }
// else if(jour == '13' && mois == '04' && année == '2020')
// {
//     console.log("pack");
// }



}
    
    
    jourtravaille(date);