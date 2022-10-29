# importamos la funciones para verificar si una entrada es un numero
from verificar_numero import esNumeroPositivo, solicitarNumeros

print('===Opciones para llegar a tiempo al trabajo ===')

hora= solicitarNumeros("Ingrese la hora que tiene planeada para salir de su casa a el trabajo: ")
tipoTransporte=""
repeticion = 0
# validamos que el usuario ingrese alguna de las dos opciones existentes
while tipoTransporte not in ['b','c'] :
    if repeticion <5:
        print("""Escoja tipo de transporte:
        b = bus
        c =carro
        """)
        tipoTransporte= (input('Elija su opcion: ')).lower()
        repeticion+=1
    else:
        raise TypeError("Solo se acepta opcion b o c, has superado el numero de intentos permitidos")
# formula para calcular tiempo en llegar al trabajo
time_en_llegar= 9 - hora
# tiempo en llegar al trabajo en bus
time_llegar_bus=2
# tiempo en llegar al trabajo en carro
time_llegar_carro=1
time_extra_bus=time_en_llegar-time_llegar_bus
time_extra_carro=time_en_llegar-time_llegar_carro

if time_en_llegar < 2 and  tipoTransporte =='b':
    print('Para llegar a tiempo en bus debes salir con minimo 2 horas de anticipo')
elif time_en_llegar < 1 and tipoTransporte == 'c':
    print('Para llegar a tiempo en carro debes llegar con minimo 1 hora de anticipo')
elif time_en_llegar >2 and tipoTransporte == 'b':
    print('Es una buena opcion llegaras con ',time_extra_bus,' horas de anticipo')
elif time_en_llegar >1 and tipoTransporte == 'c':
    print('Es una buena opcion llegaras con ',time_extra_carro,' horas de anticipo')

