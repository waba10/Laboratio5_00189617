function circunferencia(radio=10){
    let total;
    if(radio>0){
        total=Math.PI*Math.pow(radio,2);
    }
    else{
        total="ERROR:El radio debe ser mayor que cero.";
    }

    return console.log(total);
}