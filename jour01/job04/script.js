function bisextile(année) {
 return (((année & 3) == 0) && ((année % 100 != 0) || (année % 400 == 0)));
}
 
console.log(bisextile(2020));