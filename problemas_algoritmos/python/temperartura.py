# importamos la funciones para verificar si una entrada es un numero
from verificar_numero import esNumeroPositivo, solicitarNumeros
print( '======= Conversor temperatura New York de °C a °F ================')

tempNewYork_C= solicitarNumeros("Ingrese la temperatura actual de New York en °C: ")
# ecuacion para convertir °C en °F
tempNewYork_F= (tempNewYork_C * 9/5) + 32
print(tempNewYork_C, '°C equivalen a  una temperatura de ', tempNewYork_F, '°F en New York')
