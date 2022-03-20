class Persona{
    static contadorPersonas = 0;

    constructor(nombre, apellido, edad){
        this._idPersona = ++Persona.contadorPersonas;
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
    }
    //getters and setters
    get idPersona(){
        return this._idPersona;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    get apellido(){
        return this._apellido;
    }
    set apellido(apellido){
        this._apellido = apellido;
    }
    get edad(){
        return this._edad
    }
    set edad(edad){
        this._edad = edad;
    }
    //toString
    toString(){
        return `
        Nombre: ${this._nombre}
        Apellido: ${this._apellido}
        Edad: ${this._edad}
        ID: ${this._idPersona}`;
    }
}

class Empleado extends Persona{
    static contadorEmpleados = 0;

    constructor( nombre, apellido, edad, sueldo){
        super(nombre, apellido, edad);
        this._idEmpleado = ++Empleado.contadorEmpleados;
        this._sueldo = sueldo;
    }

    get idEmpleado(){
        return this._idEmpleado;
    }
    get sueldo(){
        return this._sueldo;
    }
    set sueldo(sueldo){
        this._sueldo = sueldo;
    }

    toString (){
        return `
        ${super.toString()}
        ID empleado: ${this._idEmpleado}
        Sueldo: ${this._sueldo}`;
    }
}

class Cliente extends Persona{
    static contadorCliente = 0;
    constructor(nombre, apellido, edad, fechaRegistro){
        super(nombre, apellido, edad);
        this._fechaRegistro = fechaRegistro;
        this._idCliente = ++Cliente.contadorCliente;
    }

    get idCliente(){
        return this._idCliente;
    }

    get fechaRegistro(){
        return this._fechaRegistro;
    }

    set fechaRegistro(fechaRegistro){
        this._fechaRegistro = fechaRegistro;
    }

    toString(){
        return `
        ${super.toString()}
        Fecha Registro: ${this._fechaRegistro}
        ID: ${this._idCliente}`;
    }

}

let persona1 = new Persona("Ruben", "LLano", 20);

console.log(persona1.toString());

let empleado1 = new Empleado("Juan", "Perez", 42, 12432);

console.log(empleado1.toString());

let cliente1 = new Cliente("Roberto", "Gonzales", 54, new Date());

console.log(cliente1.toString());
