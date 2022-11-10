document.querySelector("#current_age").addEventListener("click", function(e){
    const date_birthday= document.getElementById("date").value;   
    arr_date=date_birthday.split("-");   
   
    const current_date= document.getElementById("current_date").value;    
    arr_current=current_date.split("-");    
    let birthday_year= arr_current[0] - arr_date[0];    
    let birthday_month= arr_current[1] - arr_date[1];
    
    let current_age = birthday_year + " años " + birthday_month + " meses";
     document.getElementById("result").value= current_age; 
})

