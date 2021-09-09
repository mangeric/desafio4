

function multiplo(a,b){

    if((a%b) == 0){

        alert(a + ' es multiplo de ' +b );
        
    }else{
    
        alert(b + ' no es multiplo de ' +a);
    
    }
}
function par(valor){
    if (valor%2==0) {
        alert("El número "+valor+" es par");
    
    } else {
        alert("El número "+valor+" es impar");
    }
}

function mostrar(parametro1,parametro2,parametro3){

    console.log("Los numero que utilizaste fueron "+parametro1+" "+parametro2+" "+parametro3);
}

let numero_4,numero_multiplo,es_par;

numero_4=parseInt(prompt("ingrese el numero"));

alert("ingrese nuevo numero para determinar si es multiplo de "+numero_4);

numero_multiplo=parseInt(prompt("ingrese multiplo"));

multiplo(numero_4,numero_multiplo);

es_par=parseInt (prompt("ingrese nuevo numero para saber si es par o impar"));

par(es_par);

mostrar(numero_4,numero_multiplo,es_par);




