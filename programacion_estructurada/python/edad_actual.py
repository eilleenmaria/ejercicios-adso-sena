# importamos la funciones para verificar si una entrada es un numero
from verificar_numero import esNumeroPositivo, solicitarNumeros 
print('==========Calcular edad actual==============')

year_birthday=solicitarNumeros("Ingrese su año de nacimiento: ")
current_year=solicitarNumeros("Ingree el año actual: ")
calcular_edad= current_year - year_birthday
print("Tu edad es " , calcular_edad , " años")
