# importamos la funciones para verificar si una entrada es un numero
from verificar_numero import esNumeroPositivo, solicitarNumeros 
print('==========Conversor pesos a dolar==============')

valorPesos = solicitarNumeros("Ingrese cantidad de dinero en pesos que deseas convertir a dolar: ")
equivDolar =  valorPesos * 0.00022
print(valorPesos, ' pesos son: ', equivDolar, 'dolares')

