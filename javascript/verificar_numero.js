function esNumeroPositivo(valor){
    try{
        valor = parseInt(valor);
        if(valor > 0){
            return valor;            
        }else{
            alert("'" + String(valor) + "', no es positivo, intente nuevamente.");
            return false;
        }
            
        }catch{
            alert("'" + String(valor) + "', no es un número.")
            return false

        }
    }
    
    
   

   