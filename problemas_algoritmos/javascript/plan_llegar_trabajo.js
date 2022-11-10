
function crearPlan(){
    const inputHoraEntrada = document.querySelector("#horaEntrada");
const horaEntrada = esNumeroPositivo( inputHoraEntrada.value);
const inputHoraSalida = document.querySelector("#horaSalida");
const horaSalida = esNumeroPositivo( inputHoraSalida.value);
const sb = document.querySelector("#transporte");
// const btn = document.querySelector("#btn")

const selectedValues = [].filter
                .call(sb.options, option => option.selected)
                .map(option => option.text);
console.log(selectedValues)
let time_llegar = horaEntrada - horaSalida;
const time_llegar_bus = 3;
const time_llegar_carro = 2;
time_extra_bus=time_llegar-time_llegar_bus
time_extra_carro=time_llegar-time_llegar_carro
if(time_llegar < 3 && selectedValues == 'Bus'){
    alert('Para llegar a tiempo en bus debes salir con minimo 3 horas de anticipo')
}else if(time_llegar < 2 && selectedValues == 'Carro'){
    alert('Para llegar a tiempo en carro debes salir con minimo 2 hora de anticipo')
}else if(time_llegar > 3 && selectedValues == 'Bus'){
    alert('Es una buena opcion llegaras con '+ time_extra_bus +' horas de anticipo')
}else if(time_llegar > 2 && selectedValues == 'Carro'){
    alert('Es una buena opcion llegaras con '+time_extra_carro+' horas de anticipo')
}else if(time_llegar = 3 && selectedValues == 'Bus'){
    alert('Llegaras justo a tiempo')
}else if(time_llegar = 2 && selectedValues == 'Carro'){
    alert('Llegaras jussto a tiempo')
}
}
function clean(){
    const inputhoraEntrada = document.querySelector("#horaEntrada");
    inputhoraEntrada.value = "";
    const inputhoraSalida = document.querySelector("#horaSalida");
    inputhoraSalida.value = "";
    const inputTipoTransporte = document.querySelector("#transporte");
    inputTipoTransporte.value = "";
}
