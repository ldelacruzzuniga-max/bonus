let muertes = [];
let suma = 0;

// Capturar las muertes de los 7 días mediante prompts
for (let dia = 1; dia <= 7; dia++) {
    let valor = parseFloat(prompt(`muertos del dia ${dia}:`)) || 0;
    muertes.push(valor);
}

// Recorrido obligatorio usando for...in para sumar los valores
for (let i in muertes) {
    suma += muertes[i];
}

let promedio = (suma / muertes.length).toFixed(2);

// Mostrar resultados en el HTML
const contenedor = document.getElementById("resultado");
contenedor.innerHTML = `
    <p><strong>numero de muertos por dia:</strong> ${muertes.join(", ")}</p>
    <p><strong>Promedio:</strong> ${promedio}</p>
`;