# importamos la funciones para verificar si una entrada es un numero
from verificar_numero import esNumeroPositivo, solicitarNumeros 
print('==========Determinar si un año es bisiesto==============')

anio_calcular=solicitarNumeros("Ingrese el año a calcular: ")

if anio_calcular % 4 == 0 and anio_calcular % 100 != 0 or anio_calcular % 400==0 :
    print("El año ", anio_calcular, " es bisiesto.")
else:
    print("El año ", anio_calcular, " no es bisiesto.")