// Patrón de matriz basado en la imagen del pizarrón
const patronE = [
    "XXXX",
    "X",
    "XXXX",
    "X",
    "XXXX"
];

let textoFigura = "";

// Generar la figura
for (let i = 0; i < patronE.length; i++) {
    textoFigura += patronE[i] + "\n";
}

// Renderizar en la etiqueta <pre> para conservar espacios y saltos de línea
document.getElementById("figura").textContent = textoFigura;