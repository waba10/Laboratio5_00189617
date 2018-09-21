function bisiesto(año=2000){
    let resultado;
    if(año%4==0 && año%400==0){
        resultado="Es bisiesto";
    }
    else{
        resultado="No es bisiesto";
    }
    return console.log(resultado);
}