import { PolideportivoTech } from "./PolideportivoTech.js";
import { PolideportivoMunicipal } from "./PolideportivoMunicipal.js";

document.addEventListener("DOMContentLoaded", () => {
    // 1. Arreglo utilizando Polimorfismo (mezclando instancias de subclases)
    const listaPolideportivos = [
        new PolideportivoMunicipal(1, "Polideportivo Municipal de Lima", "Fútbol", 40.00, "Lima", 10.00),
        new PolideportivoTech(2, "Complejo Deportivo Surco", "Básquetbol", 30.00, "Surco", 5.00),
        new PolideportivoTech(3, "Arena San Borja Tech", "Tenis", 60.00, "San Borja", 15.00),
        new PolideportivoMunicipal(4, "Club Miraflores Sports", "Natación", 80.00, "Miraflores", 0.00),
        new PolideportivoMunicipal(5, "Loza Deportiva Lima Centro", "Vóley", 20.00, "Lima", 5.00)
    ];

    const gridContainer = document.getElementById("gridPolideportivos");
    const inputDescripcion = document.getElementById("filtroDescripcion");
    const selectDistrito = document.getElementById("filtroDistrito");
    const inputPrecio = document.getElementById("filtroPrecio");

    function renderizarPolideportivos(datos) {
        gridContainer.innerHTML = "";

        if (datos.length === 0) {
            gridContainer.innerHTML = `<p class="no-results">No se encontraron polideportivos con los filtros aplicados.</p>`;
            return;
        }

        datos.forEach(poli => {
            const card = document.createElement("div");
            card.className = "sports-card";
            
            // POLIMORFISMO EN ACCIÓN: Llamamos a .calcularPrecioFinal() y .obtenerTipo()
            // sin importar si el objeto es Municipal o Tech.
            const precioFinal = poli.calcularPrecioFinal();
            const tipoEstablecimiento = poli.obtenerTipo();

            card.innerHTML = `
                <h4>${poli.descripcion}</h4>
                <span class="badge-tipo">${tipoEstablecimiento}</span>
                <p><strong>Deporte:</strong> ${poli.deporte}</p>
                <p><strong>Distrito:</strong> ${poli.distrito}</p>
                <p class="price">Precio Final: S/. ${precioFinal.toFixed(2)}</p>
            `;
            gridContainer.appendChild(card);
        });
    }

    function filtrarYMostrar() {
        const textoBusqueda = inputDescripcion.value.toLowerCase().trim();
        const distritoSeleccionado = selectDistrito.value;
        const precioMaximo = inputPrecio.value ? parseFloat(inputPrecio.value) : Infinity;

        const resultadosFiltrados = listaPolideportivos.filter(poli => {
            const coincideDescripcion = poli.descripcion.toLowerCase().includes(textoBusqueda);
            const coincideDistrito = distritoSeleccionado === "" || poli.distrito === distritoSeleccionado;
            
            // Filtramos utilizando el cálculo polimórfico del precio
            const coincidePrecio = poli.calcularPrecioFinal() <= precioMaximo;

            return coincideDescripcion && coincideDistrito && coincidePrecio;
        });

        renderizarPolideportivos(resultadosFiltrados);
    }

    inputDescripcion.addEventListener("input", filtrarYMostrar);
    selectDistrito.addEventListener("change", filtrarYMostrar);
    inputPrecio.addEventListener("input", filtrarYMostrar);

    renderizarPolideportivos(listaPolideportivos);
});