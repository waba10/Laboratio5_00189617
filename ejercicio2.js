function orden(arreglo=[1,5,7,2]){
    let a;
    let b;
    for(j=0;j<arreglo.length-1;j++){
        for(i=0; i<arreglo.length-1;i++){
            if(arreglo[i]>arreglo[i+1]){
                a=arreglo[i];
                b=arreglo[i+1];
                arreglo[i]=b;
                arreglo[i+1]=a;
            }
        }
       
    }
    return console.log(arreglo);
}
