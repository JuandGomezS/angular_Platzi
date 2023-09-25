const username: string = 'DevID'; // Tipado explicito

const suma = (a: number, b: number) => { // Tipar parametros y retorno
    return a + b;
}

suma(1, 2);

class Persona {
    constructor(public edad: number, public nombre: string) { // Tipar propiedades
    }
}

const Juan = new Persona(23, 'Juan');

