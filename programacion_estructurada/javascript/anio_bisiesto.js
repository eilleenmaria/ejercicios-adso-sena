document.querySelector("#result_bisiesto").addEventListener("click",function(e){
    const selected_year = document.getElementById("anio").value;
    console.log(selected_year);
    let year_result;
    if((selected_year % 4 == 0 && selected_year % 100 !=0)|| selected_year % 400==0){
        year_result="El año "+ selected_year + " es bisiesto";
        document.getElementById("result_bis").value=year_result;       
    }else{
        year_result= "El año "+ selected_year + " no es bisiesto";
        document.getElementById("result_bis").value=year_result;        
    }
    document.getElementById("anio").value="";
} )