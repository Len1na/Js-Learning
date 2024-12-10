function render(html) {
    const resultBox = document.getElementById("EXERCISE_RESULT");
    resultBox.innerHTML += html;
}


/** 
  *  Request two number (Weight and Height) and calculate the IMC of two variables and print if it is 'Obesidad de clase II'.
  * 
  * Objetivo: pedir al usuario dos números (peso y altura), calcular el IMC, y determinar si el resultado corresponde a "Obesidad de clase II".
  * Subtareas:
    * 1. Solicitar peso.
    * 2. Solicitar altura.
    * 3. Calcular el IMC.
    * 4. Determinar si es "obesidad de clase II"
    * 5. Mostrar el resultado
*/

const peso = prompt("Introduzca su peso (kg)"); //Paso 1: Solicitar peso.
const altura = prompt("Introduzca su altura (m)"); //Paso 2: Solicitar altura.

const imc = peso / (altura ** 2); // Paso 3: Calcular el IMC

// Paso 5: Mostrar el resultado
render(`
    <h1>
        Clasificación del IMC para adultos según la OMS
    </h1>
    <p>
         Tu IMC es: ${imc}
    </p>

`);

// Paso 4: determinar si es "obesidad de clase II"
if ((imc < 18.5)) {
    console.log(`Tu IMC es ${imc}. Corresponde a "Peso insuficiente".`);
    render(`<p>Peso insuficiente.</p>`);
} else if ((imc >= 18.5) && (imc < 24.9)) {
    console.log(`Tu IMC es ${imc}. Corresponde a "Normopeso (peso normal)".`);
    render(`<p>Normopeso (peso normal).</p>`);
}  else if ((imc >= 25) && (imc < 29.9)) {
    console.log(`Tu IMC es ${imc}. Corresponde a "Sobrepeso".`);
    render(`<p>Sobrepeso.</p>`);
}  else if ((imc >= 30) && (imc < 34.9)) {
    console.log(`Tu IMC es ${imc}. Corresponde a "Obesidad de clase I (moderada)".`);
    render(`<p>Obesidad de clase I (moderada).</p>`);
}   else if ((imc >= 35) && (imc < 40)) {
    console.log(`Tu IMC es ${imc}. Corresponde a "Obesidad de clase II (severa)".`);
    render(`<p>Obesidad de clase II (severa).</p>`);
} else {
    console.log(`Tu IMC es ${imc}. Corresponde a "Obesidad de clase III (mórbida).`);
    render(`<p>Obesidad de clase III (mórbida).</p>`);
}

/**
Clasificación del IMC para adultos según la OMS
Categoría Rango de IMC
Peso insuficiente Menos de 18.5
Normopeso (peso normal)	18.5 - 24.9
Sobrepeso	25.0 - 29.9
Obesidad de clase I (moderada)	30.0 - 34.9
Obesidad de clase II (severa)	35.0 - 39.9
Obesidad de clase III (mórbida)	40.0 o más
 */