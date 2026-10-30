import { Polideportivo } from "./Polideportivo.js";

export class PolideportivoTech extends Polideportivo {
    constructor(id, descripcion, deporte, precioBase, distrito, costoMantenimientoTech) {
        super(id, descripcion, deporte, precioBase, distrito); // Hereda el constructor padre
        this.costoMantenimientoTech = costoMantenimientoTech;
    }

    // Polimorfismo: Sobrescribimos el método para sumar un recargo tecnológico
    calcularPrecioFinal() {
        return this.precioBase + this.costoMantenimientoTech;
    }

    obtenerTipo() {
        return "Tech / Moderno";
    }
}