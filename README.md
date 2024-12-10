# Ejercicios de introducción a JS

El objetivo consiste en crear un sitio web que contenga una cabecera con un menú de navegación que contenga los links a cada uno de los ejercicios. Cada ejercicio debe estar en una página diferente, es decir, en un archivo HTML diferente.

Por ejemplo la estructura podría ser algo así:

```plaintext
.
├── index.html
├── exercise-1
│   ├── index.html
│   └── script.js
├── exercise-2
│   ├── index.html
│   └── script.js
└──...
```

Para solicitar datos al usuario se puede utilizar la función `prompt` de JavaScript. Por ejemplo:

```javascript
const name = prompt("¿Cuál es tu nombre?");
```

Para mostrar mensajes al usuario se utilizará la función `render` vista en clase, pasando como argumento el HTML con el resultado del ejercicio.

## Ejercicios

1. Request to strings to the user and print the length of concatenated result string.
2. Request a number of celsius degrees to the user and print the Farenheit degrees.
3. Request two number (Weight and Height) and calculate the IMC of two variables and print if it is 'Obesidad de clase II'.
4. A road has 90km/h speed limits. If the pollution is greater than 65% the speed limit must be 70km/h. Build an algorithm to print what is the road speed limits depending on the pollution.
5. A traffic light can be 'green', 'flashing amber', 'amber' or 'red'. Build and algorithm that request the current traffic light and prints if a car must stop or can go on. If the user inputs a different value, print an error message.
   - PD: flashing amber you can go on
   - PD: amber you must stop
6. Request a number representing a subject result, build an algorithm that prints your result in letters:
   - SUSPENSA (<5)
   - APROBADA(5-<7),
   - NOTABLE(7-<9),
   - SOBRESALIENTE(9-<10)
   - MATRICULA DE HONOR (10)
7. Request a string to the user representing an URL and prints the domain, indication if the domain is a 'Github' domain or subdomain.
8. Request a number, loop from 0 to that number printing if it's even or odd with the next structure:
   - 0 is even
   - 1 is odd
   - 2 is even
   - 3 is odd
   - ...
9. FizzBuzz. Request a number and build an algorithm that loops over numbers from 1 to that number and prints:

   - 'Fizz' if the current number is multiple of 3
   - 'Buzz' if the current number is multiple of 5
   - 'FizzBuzz' if the current number is multiple of 3 and 5

10. Request a number to the user and print the reverse of that number (EJ: 3456 => 6543)


- The total amount of the purchase
- The user's total payment
- The change to return to the user

If the user's payment is less than the total amount of the purchase, print an error message.


