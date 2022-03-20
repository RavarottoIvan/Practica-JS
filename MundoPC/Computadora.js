class DispositivoEntrada{
    constructor(tipoEntrada, marca){
        this._tipoEntrada = tipoEntrada;
        this._marca = marca;
    }
    get tipoEntrada(){
        return this._tipoEntrada;
    }
    get marca(){
        return this._marca;
    }
    set tipoEntrada(tipoEntrada){
        this._tipoEntrada = tipoEntrada;
    }
    set marca(marca){
        this._marca = marca;
    }
}

class Raton extends DispositivoEntrada{
    static contadorRatones = 0;
    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca);
        this._idRaton = ++Raton.contadorRatones;
    }

    toString(){
        return `
        --Tipo de entrada: ${super.tipoEntrada}
        --Marca: ${super.marca}
        --ID: ${this._idRaton}`
    }
}

class Teclado extends DispositivoEntrada{
    static contadorTeclados = 0;
    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca);
        this._idTeclado = ++Teclado.contadorTeclados;
    }

    toString(){
        return `
        --Tipo de entrada: ${super.tipoEntrada}
        --Marca: ${super.marca}
        --ID: ${this._idTeclado}`;
    }
}

class Monitor{
    static contadorMonitores = 0;

    constructor(tamano, marca){
        this._marca = marca;
        this._tamano = tamano;
        this._idMonitor = ++Monitor.contadorMonitores;
    }
    get tamano(){
        return this._tamano;
    }
    get marca(){
        return this._marca;
    }
    set tamano(tamano){
        this._tamano = tamano;
    }
    set marca(marca){
        this._marca = marca;
    }
    toString(){ 
        return `
        --Marca: ${this._marca}
        --Tamaño: ${this._tamano}"
        --ID: ${this._idMonitor}`;
    }

}

class Computadora{
    static contadorComputadoras = 0;
    constructor(nombre, monitor, teclado, raton){
        this._nombre = nombre;
        this._monitor = monitor;
        this._teclado = teclado;
        this._raton = raton;
        this._idComputadora = ++Computadora.contadorComputadoras;
    }
    get nombre(){
        return this._nombre;
    }
    get monitor(){
        return this._monitor;
    }
    get teclado(){
        return this._teclado;
    }
    get raton(){
        return this._raton;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    set monitor(monitor){
        this._monitor = monitor;
    }
    set teclado(teclado){
        this._teclado = teclado;
    }
    set raton(raton){
        this._raton = raton;
    }

    toString(){
        return `
        Nombre: ${this._nombre}
        Monitor: ${this._monitor}
        Teclado: ${this.teclado}
        Raton: ${this._raton}
        ID: ${this._idComputadora}`;
    }
}

class Orden{
    static contadorOrdenes = 0;
    constructor(){
        this._computadoras = [];
        this._idOrden = ++Orden.contadorOrdenes;
    }

    get computadoras(){
        return this._computadoras;
    }
    set computadoras(computadora){
        this._computadoras = computadora;
    }
    
    AgregarComputadora(computadora){
        this._computadoras.push(computadora);
    }
    mostrarOrden(){
        let productoOrden = " ";
        for(let largo of this._computadoras){
            productoOrden += largo.toString() + "\n";
        }
        console.log("Orden: {" + productoOrden + "}" + "ID: " + this._idOrden)
    }

    
}

let raton1 = new Raton("USB", "Razer");
let raton2 = new Raton("USB-C", "Logitech")

let teclado1 = new Teclado("UBS-C", "Redragon");
let teclado2 = new Teclado("USB", "Razer");

let monitor1 = new Monitor(16, "HP");
let monitor2 = new Monitor(24, "eNova");

let computadora1 = new Computadora ("Aero", monitor1, teclado1, raton1);
let computadora2 = new Computadora ("Cool", monitor2, teclado2, raton2);
let computadora3 = new Computadora ("HP", monitor2, teclado1, raton2);

let orden1 = new Orden();

orden1.AgregarComputadora(computadora1);
orden1.AgregarComputadora(computadora2);
orden1.AgregarComputadora(computadora3);

orden1.mostrarOrden();