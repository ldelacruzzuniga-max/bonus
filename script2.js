function ejecutarEjercicio() {
    let alumnos = [];

    // Captura de 10 alumnos usando splice para insertar sin eliminar
    for (let i = 0; i < 10; i++) {
        let nombre = prompt(`Ingrese el nombre del alumno ${i + 1}:`);
        if (nombre) {
            alumnos.splice(i, 0, nombre);
        }
    }

    // Guardar copia del arreglo inicial
    let arregloInicial = [...alumnos];

    // Capturar nombre del alumno a eliminar
    let alumnoAEliminar = prompt("Ingrese el nombre del alumno a eliminar:");

    if (alumnoAEliminar) {
        let indice = alumnos.indexOf(alumnoAEliminar);
        if (indice !== -1) {
            alumnos.splice(indice, 1);
            alert(`El alumno "${alumnoAEliminar}" fue eliminado.`);
        } else {
            alert(`El alumno "${alumnoAEliminar}" no se encontró en la lista.`);
        }
    }

    // Imprimir arreglo inicial y final usando forEach
    let htmlInicial = "<h3>Arreglo Inicial:</h3><ul>";
    arregloInicial.forEach(alumno => {
        htmlInicial += `<li>${alumno}</li>`;
    });
    htmlInicial += "</ul>";
}