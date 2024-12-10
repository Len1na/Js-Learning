function render(html) {
    const resultBox = document.getElementById("EXERCISE_RESULT");
    resultBox.innerHTML += html;
}

/**
 * 1. Solicito el primer string y lo guardo en una variable
 * 2. Solicito el segundo string y lo guardo en otra variable 
 * 3. Concateno los dos strings y el resultado lo guardo en una variable
 * 4. Obtengo la longitud de ese string y lo guardo en una variable
 * 5. Pinto la variable de la longitud
 * 6. Verifico que la longitud sea par o impar
 *      - Si es par ==> renderizar un cuadrado de 50*50px yellow
 *      - Si es impar ==> renderizar un cuadrado de 50*50px blue
*/


const firstStr = prompt("Introduzca el primer string"); // Paso 1
const secondStr = prompt("Introduzca el segundo string"); // Paso 2
const concatResult = firstStr + secondStr; // Paso 3
render(`
        <style>
            .result__text {
                color: green;
            }
        </style>

        <p class="result__text">
            El resultado total es: ${concatResult.length}
        </p>

`) // Paso 4 y 5


// ¿Que tipo de dato me devuelve esta operación? --> concatResult.length % 2 --> Número
const isLengthEven = concatResult.length % 2 === 0;

if (isLengthEven) {
        //Esto es par
        render(`<div class="square square--even"></div>`)

}else{
        //Esto es impar
        render(`<div class="square square--odd"></div>`)
}