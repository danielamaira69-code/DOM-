
const boton = document.getElementById('miBoton');
const spanContador = document.getElementById('contador');
const cuerpoTabla = document.getElementById('cuerpo-tabla');

let contador = 0;

boton.addEventListener('click', () => {

    contador++;
    spanContador.textContent = contador;

    const fecha = new Date();
    const horaExacta = fecha.toLocaleTimeString();

    const nuevaFila = document.createElement('tr');

    nuevaFila.innerHTML = `
        <td>${contador}</td>
        <td>${horaExacta}</td>
    `;


    cuerpoTabla.insertBefore(nuevaFila, cuerpoTabla.firstChild);
    
    
});