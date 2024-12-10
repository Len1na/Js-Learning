function render(html) {
    const resultBox = document.getElementById("EXERCISE_RESULT");
    resultBox.innerHTML += html;
}

/**
 * 1. Solicito un string al usuario (un numero) y lo guardo en una variable
 * 2. Realizo un bucle desde 1 hasta ese numero
 * 3. Pinta 'Fizz' si el número es múltiplo de 3, 'Buzz' si es múltiplo de 5, y 'FizzBuzz' si es múltiplo de los dos
 */

const myNumber = parseInt(prompt("Por favor, introduce un número")); // Paso 1
for(let i=1; i <= myNumber; i++) {  // Paso 2 


} if (myNumber % 3 === 0 && myNumber % 5 === 0) {
    //Es múltiplo de 3 y 5
    render(`<p> El número ${myNumber} es múltiplo de 3 y 5</p>`);
} else if (myNumber % 3 === 0) {
     //Es múltiplo de 3
     render(`<p> El número ${myNumber} es múltiplo de 3</p>`);
} else if (myNumber % 5 === 0)    {
      //Esto es múltiplo de 5
      render(`<p> El número ${myNumber} es múltiplo de 5</p>`);
} else if (myNumber % 3 !== 0 && myNumber % 5 !== 0) {
    //Esto no vale
    render(`<p> El número ${myNumber} no es válido.</p>`);
}
// Paso 3