function render(html) {
    const resultBox = document.getElementById("EXERCISE_RESULT");
    resultBox.innerHTML += html;
}

/**
 * 1. Solicito un string al usuario (un numero) y lo guardo en una variable
 * 2. Realizo un bucle desde 0 hasta ese número
 * 3. Pinto si es par o impar  
 */

const myNumber = parseInt(prompt("Por favor, introduce un número")); // Paso 1 - parseInt para que los numeros sean enteros (sino no podriamos saber si son pares o impares)
for(let i=0; i <= myNumber; i++) {  // Paso 2 


} if (myNumber % 2 === 0) {
     //Esto es par
     render(`<p> El número ${myNumber} es par</p>`);
} else {
      //Esto es impar
      render(`<p>El número ${myNumber} es impar</p>`);
}
// Paso 3
