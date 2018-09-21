function palindromo(palabra="lol"){

    if(palabra.split("").reverse().join("")===palabra){
        return console.log("Es palindromo");

    }
    else{
        return console.log("No es palindromo");
    }
}


