function render(html) {
    const resultBox = document.getElementById("EXERCISE_RESULT");
    resultBox.innerHTML += html;
}

/**
 * 1.Solicito al usuario un string (la nota del alumno) y lo guardo en una variable
 *    Nota <5 = el alumno esta suspenso
 *    Nota 5-<7 = el alumno esta aprobado
 *    Nota 7-<9 = el alumno tiene un notable
 *    Nota 9-<10 = el alumno tiene un sobresaliente
 *    Nota 10 = el alumno tiene una matrícula de honor
 * 2.Pintar un resultado de texto en función del valor numérico
 */

const result = parseFloat(prompt("Introduce la calificación del alumno (de 0 a 10)")); // Paso 1 y 2
if (result < 5) {
    render(`
        <p> Suspenso.</p>
        
    `);
} else if (result >= 5 && result <7) {
    render(`
        <p>Aprobado.</p>
        
    `);
} else if (result >= 7 && result < 9) {
    render(`
        <p>Notable.</p>
        
    `);
} else if (result >= 9 && result < 10) {
    render(`
        <p>Sobresaliente.</p>
        
    `);
} else if (result === 10) {
    render(`
        <p>Matrícula de honor.</p>
        
    `);
} 





