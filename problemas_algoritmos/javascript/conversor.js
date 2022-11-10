function calcularDinero(){
    const inputCantDinero = document.querySelector("#cantPesos");
    const cantDinero = esNumeroPositivo(inputCantDinero.value);
    const cantDolar= cantDinero * 0.00022;
 document.querySelector("#cantDolar").value = cantDolar;
    
}