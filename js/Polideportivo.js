export class Polideportivo {
    constructor(id, descripcion, deporte, precioBase, distrito) {
        this.id = id;
        this.descripcion = descripcion;
        this.deporte = deporte;
        this.precioBase = precioBase;
        this.distrito = distrito;
    }

    // Método que será polimórfico (sobreescrito en las clases hijas)
    calcularPrecioFinal() {
        return this.precioBase;
    }

    obtenerTipo() {
        return "Estándar";
    }
}