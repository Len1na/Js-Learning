function render(html) {
    const resultBox = document.getElementById("EXERCISE_RESULT");
    resultBox.innerHTML += html;
}

/**
 * 1. En una misma variable guardo distintos valores (array)
 * 2. Solicito un string (color de semaforo) que voy a guardar como variable
 * 3. Si el usuario ingresa un valor verde o ambar intermitente, le pintamos un mensaje de circule
 * 4. Si el usuario ingresa un valor rojo o ambar, le pintamos un mensaje de detengase
 * 5. Si el usuario ingresa un valor diferente, pintamos un mensaje de error (empleo un metodo en este caso)
*/

const validColors = ["rojo", "ambar", "ambar intermitente", "verde"] // Paso 1
const trafficLight = prompt("Introduzca el color del semáforo: verde, ámbar, ámbar intermitente o rojo"); // Paso 2
if (validColors.includes(trafficLight)) {

    if (trafficLight === "rojo") {
        render(`
            <p>Semáforo en rojo. Deténgase.</p>
            
        `);
    } else if (trafficLight === "verde"){
        render(`
            <p>Semáforo en verde. Puede continuar.</p>
            
        `);
    } else if (trafficLight === "ambar"){
        render(`
            <p>Semáforo en ámbar. Párese.</p>
            
        `);
    } else if (trafficLight === "ambar intermitente"){
        render(`
            <p>Semáforo en ámbar intermitente. Puede continuar.</p>
            
        `);
    }  


} else {


    render(`
        <p>
              No reconocemos el color ${trafficLight}. Vuelva a intentarlo, por favor.
        </p>
        
    `);


}  // Paso 3, 4 y 5



