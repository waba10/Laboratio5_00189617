function binario(numero = 10){
    var num= numero;
    var total = "";
    if(num==0){
        total="0";
    }
    while(num!=0){

        total= total.concat((num%2).toString());        
        num = parseInt(num/2);
        

    }
    
    return console.log(total.split("").reverse().join(""));    
}
