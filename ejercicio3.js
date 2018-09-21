function fibonnaci(n){
    let a=0;
    let b=1;
    let c=0;
    let text = "";
    text=text.concat(a.toString().concat(", "));
    text=text.concat(b.toString());
    
   
    
    for(j=0;j<n-2;j++){
        
         c=a+b;
         text=text.concat(", ").concat(c.toString());
        
         a=b;
         b=c;
     }   
     return console.log(text);   
}