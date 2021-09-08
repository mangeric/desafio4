

function multiplo(a,b){

    if((a%b) == 0){

        alert(a + ' es multiplo de ' +b );
        
    }else{
    
        alert(b + ' no es multiplo de ' +a);
    
    }
}


let numero_4,numero_multiplo;

numero_4=parseInt(prompt("ingrese el numero"));

alert("ingrese nuevo numero para determinar si es multiplo de "+numero_4);

numero_multiplo=parseInt(prompt("ingrese multiplo"));

multiplo(numero_4,numero_multiplo);


