function fizzbuzz()
{
	for( var I=1; I <= 151;)
	{
		if( I % 3 == 0 && I % 5 == 0){
            console.log("FizzBuzz");
        }
        else if(I % 3 == 0){
            console.log("Fizz");
            
        }
       	else if(I % 5 == 0){
            console.log("Buzz");
        }
        else{
            console.log(I);
            
        }
		
I++
	}
}


fizzbuzz();


