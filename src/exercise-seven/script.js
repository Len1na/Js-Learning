function render(html) {
    const resultBox = document.getElementById("EXERCISE_RESULT");
    resultBox.innerHTML += html;
}

/**
 * 1. Solicito un string al usuario (una URL) y la guardo en una variable
 * 2. Pinto el dominio y lo guardo en otra variable
 * 3. Si esta segunda variable es un dominio o subdominio Github lo indico, si no, no
 */


const url = prompt("Introduce una URL"); // Paso 1
const domain = new URL(url).hostname;

render(`
    <p>Este es su dominio: ${domain}</p>
`);

// Paso 2

if (domain.endsWith("github.com")) {
    render(`
        <p>Es un dominio o subdominio Github</p>
    `);
} else {
        render(`
            <p>No es un dominio o subdominio Github</p>
`);
}
// Paso 3