document.querySelector("#addIngrediente").addEventListener("click",function(e){
    // cancelamos el evento
    e.preventDefault();
 
    const ingrediente=document.querySelector("#nameIngrediente");
    const cantidad=document.querySelector("#cantIngrediente");
 
    // mostramos un error si no ha recibido el ingrediente
    if (!ingrediente.value) {
        ingrediente.classList.add("error");
        return;
    }
    ingrediente.classList.remove("error");
 
    // mostramos un error si no ha recibido una cantidad
    if (isNaN(parseInt(cantidad.value)) || parseInt(cantidad.value)<=0) {
        cantidad.classList.add("error");
        return;
    }
    cantidad.classList.remove("error");
 
    agregarFila(ingrediente.value, cantidad.value);
    agregarInput(ingrediente.value, cantidad.value);
 
    //limpiamos los valores del input
    cantidad.value="";
    ingrediente.value="";
    ingrediente.focus();
 
});

document.querySelector("#enviarIngrediente").addEventListener("click", function(e) {
    this.closest("form").submit();
})
 
/**
 * Funcion para añadir el ingrediente y la cantidad en la tabla
 *
 * @param string ingrediente
 * @param string cantidad
 */
function agregarFila(ingrediente, cantidad) {
    // añadimos el ingrediente a la tabla crando el tr, td's 
    const tr=document.createElement("tr");
 
    const tdIngrediente=document.createElement("td");
    let txt=document.createTextNode(ingrediente);
    tdIngrediente.appendChild(txt);
    tdIngrediente.className="ingrediente";
 
    const tdCantidad=document.createElement("td");
    txt=document.createTextNode(cantidad);
    tdCantidad.appendChild(txt);
    tdCantidad.className="right";
 
    const tdRemove=document.createElement("td");
    const buttonRemove=document.createElement("img");
    buttonRemove.src="basura.png";
    buttonRemove.onclick=eliminarFila;
    tdRemove.appendChild(buttonRemove);
 
    tr.appendChild(tdIngrediente);
    tr.appendChild(tdCantidad);
    tr.appendChild(tdRemove);
 
    const tbody=document.getElementById("receta").querySelector("tbody").appendChild(tr);
 
    // eliminamos la clase que tiene oculta la tabla cando no hay ningun ingrediente
    document.getElementById("receta").classList.remove("hide");
}
 
/**
 * Funcion para eliminar el ingrediente de la tabla y llamar a la funcion
 * para eliminar al ingrediente del input oculto
 */
function eliminarFila(e) {
    const tr=this.closest("tr")
    const ingrediente=tr.querySelector(".ingrediente").innerText;
    const cantidad=tr.querySelector(".right").innerText;
 
    eliminarInput(ingrediente, cantidad);
    tr.remove();
 
    // Si no hay ningun elemento en la lista, escondemos la tabla
    if (document.getElementById("receta").querySelector("tbody").querySelectorAll("tr").length==0) {
        document.getElementById("receta").classList.add("hide");
    }
}
 
/**
 * Funcion para crear un input oculto para cuando se envie el formulario
 * El nombre del input es un array de valores denominado "ingredientes" que
 * contiene el ingrediente separado por un guion medio:
 *      arroz-5000
 *      pollo-1000
 *
 * @param string ingrediente
 * @param string cantidad
 */
function agregarInput(ingrediente, cantidad) {
    const input=document.createElement("input");
    input.type="hidden";
    input.ingrediente="ingredientes[]";
    input.value=ingrediente +"-"+ cantidad;
 
    document.querySelector("form").appendChild(input);
}
 
/**
 * Funcion para eliminar el input oculto
 *
 * @param string ingrediente
 * @param string cantidad
 */
function eliminarInput(ingrediente, cantidad) {
    const input=document.querySelector("input[type=hidden][value="+ingrediente+"-"+cantidad+"]");
    input.remove();
}