function render(html) {
    const resultBox = document.getElementById("EXERCISE_RESULT");
    resultBox.innerHTML += html;
}

/**
 * 1. Solicito el primer string (grados centigrados) y lo guardo en una variable
 * 2. Aplico la formula a la primera variable para pasar de ºC a ºF
 * 3. Guardo este segundo valor (grados fahrenheit) en otra variable
 * 4. Pinto la segunda variable correspondiente a los grados ºF
*/

const celsius = prompt ("Introduzca un número de grados ºC"); // Paso 1

/**
 *  La formula para cambiar de ºC a ºF es:
 *      ("número" °C × 9 / 5) + 32 = "número" °F
 *  
*/ 

const fahrenheit = (celsius * 9/5) + 32; // Paso 2 y 3
render(`
    <p> Una temperatura de ${celsius} ºC , es ${fahrenheit} ºF </p>
`)
// Paso 4
