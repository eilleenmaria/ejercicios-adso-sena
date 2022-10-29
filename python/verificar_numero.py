# funciones para verificar si una entrada es numero de lo contrario seguir solicitando la entrada
def esNumeroPositivo(valor):
    try:
        valor = int(valor)
        if valor > 0:
            return valor
        print("'" + str(valor) + "', no es positivo, intente nuevamente.")
        return False
    except:
        print("'" + str(valor) + "', no es un número.")
        return False

def solicitarNumeros(pregunta):
    respuesta = False
    while respuesta is False:
        respuesta = esNumeroPositivo(input(pregunta))
    return int(respuesta)