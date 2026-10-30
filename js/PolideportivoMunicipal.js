import { Polideportivo } from "./Polideportivo.js";

export class PolideportivoMunicipal extends Polideportivo {
    constructor(id, descripcion, deporte, precioBase, distrito, descuentoSocial) {
        super(id, descripcion, deporte, precioBase, distrito);
        this.descuentoSocial = descuentoSocial; // Ej. porcentaje o monto fijo de descuento
    }

    // Polimorfismo: Sobrescribimos el método aplicando un descuento social
    calcularPrecioFinal() {
        let precioFinal = this.precioBase - this.descuentoSocial;
        return precioFinal < 0 ? 0 : precioFinal; // Evitamos precios negativos
    }

    obtenerTipo() {
        return "Municipal (Social)";
    }
}