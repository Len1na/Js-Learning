# Introduccion a JavaScript

Este proyecto es una colección de ejercicios de introducción a JavaScript. El propósito es desarrollar un sitio web que tenga un menú de navegación enlazando a distintos ejercicios, cada uno ubicado en una página HTML independiente. Los ejercicios solicitan datos al usuario mediante la función `prompt` y muestran los resultados utilizando `alert`

~~~
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

Para mostrar mensajes al usuario se utilizará la función render vista en clase, pasando como argumento el HTML con el resultado del ejercicio.
Para solicitar datos al usuario se puede utilizar la función `prompt` de JavaScript. Por ejemplo:
~~~

```javascript
const name = prompt("¿Cuál es tu nombre?");
```


## Ejercicios

### 1. Concatenación de strings: :white_check_mark:
  - Solicita dos cadenas de texto al usuario y muestra la longitud de la cadena resultante concatenada. 
### 2. Conversión de Celsius a Fahrenheit: :white_check_mark:
  - Solicita un número de grados Celsius al usuario y muestra los grados Fahrenheit. 
### 3. Calculadora de IMC: :white_check_mark:
  - Solicita dos números (peso y altura) y calcula el IMC de las dos variables. Muestra si es 'Obesidad de clase II'. 
### 4. Límite de velocidad según contaminación ambiental: :white_check_mark:
  - Una carretera tiene un límite de velocidad de 90 km/h. Si la contaminación es superior al 65%, el límite de velocidad debe ser 70 km/h. Construye un algoritmo que muestre cuál es el límite de velocidad de la carretera según la contaminación. 
### 5. Semáforo: :white_check_mark:
Un semáforo puede estar en 'verde', 'ámbar intermitente', 'ámbar' o 'rojo'. Construye un algoritmo que solicite el estado actual del semáforo y muestre si un coche debe detenerse o puede seguir. Si el usuario ingresa un valor diferente, muestra un mensaje de error. 
- PD: ámbar intermitente puedes seguir
- PD: ámbar debes detenerte
### 6. Calificaciones: :white_check_mark:
 - Solicita un número que represente el resultado de una materia y construye un algoritmo que muestre tu resultado en letras: 
   - SUSPENSA (<5)
   - APROBADA(5-<7),
   - NOTABLE(7-<9),
   - SOBRESALIENTE(9-<10)
   - MATRICULA DE HONOR (10)
### 7. Validación de dominio: :white_check_mark:
 - Solicita una cadena de texto al usuario que represente una URL y muestra el dominio, indicando si el dominio es de 'Github' o un subdominio de 'Github'. 
### 8. Números Pares o Impares: :white_check_mark:
 - Solicita un número y recorre desde 0 hasta ese número, mostrando si es par o impar con la siguiente estructura:  
  - 0 es par
  - 1 es impar
  - 2 es par
  - 3 es impar
  - ...
### 9. FizzBuzz: :white_check_mark:
- FizzBuzz. Solicita un número y construye un algoritmo que recorra los números desde 1 hasta ese número y muestre: 
  - 'Fizz' si el número actual es múltiplo de 3
  - 'Buzz' si el número actual es múltiplo de 5
  - 'FizzBuzz' si el número actual es múltiplo de 3 y 5
### 10. Invertir números :white_check_mark:
 - Solicita un número al usuario y muestra el número en orden inverso (Ej: 3456 => 6543)
  - El monto total de la compra
  - El pago total del usuario
  - El cambio a devolver al usuario
 - Si el pago del usuario es menor que el monto total de la compra, muestra un mensaje de error.

  ## :point_right: [Ver ejercicios](https://js-first-steps.netlify.app/)

