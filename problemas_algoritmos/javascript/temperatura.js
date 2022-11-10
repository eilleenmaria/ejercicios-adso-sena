function calcular(){
    const inputTempActual = document.querySelector("#tempActual");
    const tempActual = esNumeroPositivo(inputTempActual.value);
    const tempNewYork_F= (tempActual * 9/5) + 32;
 document.querySelector("#tempFarenheid").value = tempNewYork_F;
    
}