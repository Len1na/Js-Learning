function render(html) {
    const resultBox = document.getElementById("EXERCISE_RESULT");
    resultBox.innerHTML += html;
  }

 /** 
  * 
  * Solicita un número al usuario y lo imprime al revés, mostrando cómo invertir el orden de sus dígitos.
  * 
  * Paso 1: Solicitar un número al usuario.
  * Paso 2: Verificar si la entrada es válida
  * Paso 3: Convertir el número en una string y luego invertirlo
  * Paso 4: Pintar el resultado
*/

// Paso 1
const userInput = prompt("Introduce un número y te lo mostraré al revés:");

// Paso 2
if (isNaN(userInput) || userInput === null || userInput.trim() === "") {
    alert("Introduce un número válido.");
    render(`<p> Introduce un número válido.</p>`);
} else {
    
    // Paso 3
    const reversedNumber = userInput.split("").reverse().join("");

    // Paso 4
    alert(`El número al revés es: ${reversedNumber}`);
    console.log(`El número al revés es: ${reversedNumber}`);
    
    render(`<p class="result">El número al revés es: ${reversedNumber}</p>`);
}
