function render(html) {
    const resultBox = document.getElementById("EXERCISE_RESULT");
    resultBox.innerHTML += html;
}

/**
 * 1. Identifico la primera variable, velocidad máxima de vía - estandar ===> 90km/h
 * 2. Identifico la segunda variable, velocidad máxima reducida por contaminacion (> o = 65%) ===> 70km/h
 * 3. Solicito el string (contaminación, en %) y lo guardo en una variable (minimo 0 y máximo 100)
 * 4. Si la variable contaminación es >= 65% pintamos la variable 2 => 70km/h
 * 5. Si la variable contaminación es < 65% pintamos la variable 1 => 90km/h
*/

const regularLimit = 90; // Paso 1
const reducedLimit = 70; // Paso 2
const pollution = prompt("Introduzca el % de contaminación en aire de hoy"); // Paso 3
render(`
    <p>
         La contaminación en aire es de un: ${pollution} %
     </p>
 
 `)

 // Comprobar la velocidad

if (pollution < 65) {

    render(`
       <p>
         La velocidad máxima permitida es de: ${regularLimit} km/h
        </p>
    
    `);
}

// Paso 4 y 5

else if (pollution >= 65) {

    render(`
        <p>
          La velocidad máxima permitida es de: ${reducedLimit} km/h
         </p>
    
    `);
} 