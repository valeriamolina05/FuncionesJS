/*alert("Esto es JS \n y es codigo")
document.write("Esto es <hr>  JS <br> y es codigo de <br> <h1> Valeria </h1>");

var nombre = prompt("Ingresa tu nombre: ")
document.write("El nombre ingresado es " + nombre)
alert("El nombre ingresado es " + nombre)

var a, b, r;

a = parseInt(prompt("Ingresa un número: "))
b = parseInt(prompt("Ingresa otro número: "))

r = a + b
alert("La suma de los números es: " + r)*/

/*EJERCICIOS

 1. Realice un ejercicio que solicite tu nombre, apellido, edad, dirección, estado civil, fecha de nacimiento, altura y al final muestre toda la información.

var nombre= prompt("Ingrese su nombre: ")
var apellido= prompt("Ingrese su apellido: ")
var edad = prompt("Ingrese su edad: ")
var direccion=prompt("Ingrese su dirección: ")
var estadoC=prompt("Ingrese su estado civil: ")
var fechaN=prompt("Ingrese su fecha de nacimiento: ")
var altura=prompt("Ingrese su altura: ")
document.write("El nombre ingresado es "+ nombre +" " + apellido, " <br> Su edad es "+ edad, "<br> Su direccion es "+ direccion, "<br> Su estado civil es "+ estadoC, "<br> Su fecha de nacimiento es "+ fechaN, "<br> Su altura es " + altura)*/


/*2. Realice un ejercicio que solicite la información necesaria, calcule y muestre el área de un rombo.

 var a = prompt ("Ingrese la diagonal mayor del rombo: ")
 var b = prompt ("Ingrese la diagonal menor del rombo: ")
c = (a * b) / 2
document.write("El area del rombo es de: " + c)*/ 

/*3. Realice un algoritmo que realice la multiplicación de un numero con el valor de pi : π = 3.14159

var numero = prompt ("Ingrese un número: ")
var pi = (3.14159)
resultado = numero * pi
document.write("El resultado de la  multiplicación es: " + resultado)*/

/*4. Realice un ejercicio que solicite la información necesaria, calcule y muestre el área de un rectángulo.

var largo = prompt("Ingrese el largo del rectángulo: ")
var ancho = prompt("Ingrese el ancho del rectángulo: ")
var r = largo * ancho
document.write("El área del rectángulo es: "+ r)*/

/*5. Realice un algoritmo que solicite el valor de 10 productos de la canasta familiar y los muestre por pantalla.

var p1 = prompt("Ingrese el valor de las arepas: ")
var p2 = prompt("Ingrese el valor de la leche: ")
var p3 = prompt("Ingrese el valor de la canasta de huevos: ")
var p4 = prompt("Ingrese el valor del arroz: ")
var p5 = prompt("Ingrese el valor de la panela: ")
var p6 = prompt("Ingrese el valor del queso: ")
var p7 = prompt("Ingrese el valor del jamón: ")
var p8 = prompt("Ingrese el valor de las galletas: ")
var p9 = prompt("Ingrese el valor del yogurt: ")
var p10= prompt("Ingrese el valor de los cereales: ")
document.write("El valor de los productos ingresados es:" + "<br>" + p1, "<br>" + p2, "<br>" + p3, "<br>" + p4, "<br>" + p5, "<br>" + p6, "<br>" + p7, "<br>" + p8, "<br>" +p9, "<br>" + p10)*/

/*6. Realice un ejercicio que solicite la información necesaria, calcule y muestre el área de un triangulo.

var base = prompt("Ingrese la base del triangulo: ")
var altura = prompt("Ingresa la altura del triangulo: ")
var rs = (base * altura) / 2
document.write("El área del triangulo es: " + rs)*/

/*7. Realice un ejercicio que solicite la información necesaria, calcule y muestre el promedio de 10 números.

var n1 = parseInt(prompt("Ingrese el primer número: "))
var n2 = parseInt(prompt("Ingrese el segundo número: "))
var n3 = parseInt(prompt("Ingrese el tercer número: "))
var n4 = parseInt(prompt("Ingrese el cuarto número: "))
var n5 = parseInt(prompt("Ingrese el quinto número: "))
var n6 = parseInt(prompt("Ingrese el sexto número: "))
var n7 = parseInt(prompt("Ingrese el septimo número: "))
var n8 = parseInt(prompt("Ingrese el octavo número: "))
var n9 = parseInt(prompt("Ingrese el noveno número: "))
var n10 = parseInt(prompt("Ingrese el decimo número: "))
var resultado = (n1 + n2 + n3 + n4 + n5 + n6 + n7 + n8 + n9 + n10) / 10
document.write("El promedio de los 10 números es: " + resultado)*/


/*EJERCICIOS 2

1. Realice un algoritmo que solicite la edad por pantalla e imprima si es mayor o menor de edad.

var edad = prompt("Ingrese su edad: ")

if (edad < 18){
    document.write("El usuario es menor de edad")
} else{
    document.write("El usuario es mayor de edad")
}*/

/*2. Realice un algoritmo que solicite dos números por pantalla y que tipo de operación desea realizar + , - , * , / ,  e imprima el resultado de la operación. 

var num1 = parseInt(prompt("Ingrese un número: "));
var num2 = parseInt(prompt("Ingrese un número: "));
var operacion = prompt("Qué operación desea realizar?: (+, -, *, /) ");
var resultado; 

if (operacion === "+") {
    resultado = num1 + num2;
  } else if (operacion === "-") {
    resultado = num1 - num2;
  } else if (operacion === "*") {
    resultado = num1 * num2;
  } else if (operacion === "/") {
    resultado = num1 / num2;
  } else {
    document.write("Operación no válida");
  }

  document.write("El resultado de la operación es: "+ resultado)*/

/*3. Realice un algoritmo que solicite la temperatura y le diga si tiene o no tiene fiebre.

var temperatura = prompt("Ingrese su temperatura: ")
if (temperatura >= 38){
    document.write("¡TIENES FIEBRE!")
} else{
    document.write("¡La temperatura es la adecuada!")
}
*/

/*4. Realice un algoritmo que solicite 3 notas de matemáticas y 3 notas de español e imprima si gana o no cada materia. 

var n1 = parseFloat(prompt("Ingresa la nota 1 de matemáticas: "))
var n2 = parseFloat(prompt("Ingresa la nota 2 de matemáticas: "))
var n3 = parseFloat(prompt("Ingresa la nota 3 de matemáticas: "))
var n4 = parseFloat(prompt("Ingresa la nota 1 de español: "))
var n5 = parseFloat(prompt("Ingresa la nota 2 de español: "))
var n6 = parseFloat(prompt("Ingresa la nota 3 de español: "))
var promedio1 = (n1 + n2 + n3) / 3
var promedio2 = (n4 + n5 + n6) / 3

if (promedio1 > 3.0){
    document.write("Aprobaste matemáticas <br>")
} else {
    document.write("No aprobaste matematicas <br>")
}

if(promedio2 > 3.0){
    document.write("Aprobaste español")
} else{
    document.write("No aprobaste español")
}
*/




























