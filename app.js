let listaCompras = [];

listaCompras.push("Manzana");
listaCompras.push("Arroz");
listaCompras.push("Leche");
listaCompras.push("Pan");
listaCompras.push("Carne");

console.log(listaCompras);


/*Imagina que eres una persona desarrolladora que trabaja para Buscante, una importante tienda en 
línea de libros. Tu jefe te ha pedido que crees una función para sortear libros a los clientes. 
El sorteo debe hacerse de manera que todos los libros tengan la oportunidad de ser sorteados al 
menos una vez, y después de eso, el sorteo debe comenzar de nuevo. Recordaste la lección sobre 
la adición de la variable "numeroLimite" en el curso "Lógica de programación: explore funções e 
listas". ¿Cómo implementarás el sorteo del libro teniendo en cuenta lo que se enseñó?*/

let limiteLibros = 10;
/*1 Se define una variable limiteLibros con el valor 10, que representa el número máximo
 de libros que se pueden sortear.*/

let listaLibros = [];
/*2 Se crea una lista vacía listaLibros para almacenar los libros que ya han sido sorteados.*/

function sortearLibros(){
/*3 Se define la función sortearLibros() que realiza lo siguiente*/

   let libroElegido = parseInt((Math.random()*limiteLibros+1));
   /*Genera un número aleatorio entre 1 y limiteLibros utilizando Math.random() y parseInt().*/
   
  //console.log(listaLibros);
  //console.log(libroElegido);
  /*Imprime la lista actual de libros sorteados (listaLibros) y el libro elegido en la consola.*/

if(listaLibros.length == limiteLibros){
  console.log(`Se sortearon todos los libros: ${listaLibros}`);
   /*Verifica si la lista de libros sorteados tiene la misma cantidad de elementos que el límite
    de libros (limiteLibros). Si es así, muestra en consola que se han sorteado todos 
    los libros.*/
    
    return null; // Devuelve null para indicar que ya se sortearon todos los libros
    /*El valor null es un tipo especial en JavaScript que representa la ausencia de un valor. 
    En este contexto, se utiliza para indicar que la función sortearLibros() ya no tiene más 
    libros que sortear, y que el ciclo for que la llama debe detenerse.*/

}else{
    if(listaLibros.includes(libroElegido)){
        return sortearLibros();
        /*Si aún quedan libros por sortear, verifica si el libro elegido ya está en la lista de 
        libros sorteados. Si es así, vuelve a llamar a la función sortearLibros() de manera recursiva 
        para obtener un nuevo libro.*/
    }else {
        listaLibros.push(libroElegido);
        return libroElegido;
        /*Si el libro elegido no está en la lista, lo agrega a la lista de libros sorteados y lo 
        devuelve como resultado.*/
    }
}
}
sortearLibros();
/*Finalmente, se llama a la función sortearLibros() para iniciar el sorteo.*/

for (let i = 0; i < limiteLibros; i++) {
    let libroSorteado = sortearLibros();
        if(libroSorteado !== null){
            /*el uso del operador !== en este código permite diferenciar claramente entre 
            un valor de libro válido y la indicación de que ya se han sorteado todos los
            libros (representada por null), lo cual es crucial para el correcto funcionamiento 
            del programa.*/
        console.log(`Libro sorteado: ${libroSorteado}`);

        }else{ 
        break;// Salir del ciclo si ya se sortearon todos los libros
        }
  }
/*la función sortearLibros() simplemente imprime un mensaje en la consola indicando que se 
han sorteado todos los libros. Además, el ciclo for se ejecuta solo limiteLibros veces, y se 
verifica si el valor devuelto por sortearLibros() es null (lo que indica que ya se sortearon 
todos los libros), en cuyo caso se sale del ciclo.

De esta manera, el código se ejecutará hasta que se hayan sorteado todos los libros,
 y solo se mostrará el mensaje en la consola una vez. */

 /*1 Crea una lista vacía llamada "listaGenerica".*/
 let listaGenerica = [];

 /*2 Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con 
 los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.*/
let lenguagesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];

/*3 Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby'
 y 'GoLang'.*/
lenguagesDeProgramacion.push('Java', 'Ruby' ,'GoLang');

/*4 Crea una función que muestre en la consola todos los elementos de la lista 
"lenguagesDeProgramacion.*/
function lenguajes(){
 return lenguagesDeProgramacion;
}
console.log(lenguajes());

/*5 Crea una función que muestre en la consola todos los elementos de la lista
 "lenguagesDeProgramacion en orden inverso.*/
function inverso(){
    //necesito saber el tamaño
     let tamaño = lenguagesDeProgramacion.length;  //8
     //console.log(tamaño);
    //acceder a la ultima posicion
    //lenguagesDeProgramacion[tamaño-1];//ultimo elemento
    // console.log(posicionFinal);
     for(i=tamaño-1 ; i >=0 ; i--){
    //mostrar la posicion siguiente ascendente
        console.log(lenguagesDeProgramacion[i]);
     }
 }
 inverso();

/*6 Crea una función que calcule el promedio de los elementos en una lista de números.*/

//Declara una variable numeros que es un array con los valores [2, 5, 9, 7, 5, 8, 9].
let numeros = [2,5,9,7,5,8,9];
//Declara una variable control y la inicializa en 0.
let control = 0;
//Define una función llamada promedio() que no recibe parámetros.
function promedio(){  
    //Obtiene el tamaño del array numeros usando la propiedad length.
    let tamaño = numeros.length; 
    //Utiliza un bucle for que recorre cada elemento del array numeros. i es la posicion de inicio
        //En cada iteración del bucle, suma el valor del elemento actual del array numeros a la variable control.
        for(i=0 ; i < tamaño ; i++ ){ 
       control+=numeros[i];      
        }
        //Después del bucle, calcula el promedio dividiendo control entre el tamaño del array (tamaño).
        return control/tamaño;//Retorna el resultado del cálculo del promedio.
    }
//Finalmente, llama a la función promedio() sin pasar ningún argumento y guarda el resultado en una variable.
//Imprime en la consola el valor devuelto por la función promedio().
console.log(promedio());
//El resultado que se imprimirá en la consola será el promedio de los valores en el array numeros, que es 6.4285.

/*7 Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.*/

  //1 Primero, se declara un array llamado pequeño con los valores [5, 8, 4, 2, 9, 1, 5, 7, 6, 3].
let pequeño = [5,8,4,2,9,1,5,7,6,3];
  //2 Luego, se declara una variable comparador y se le asigna el primer elemento del array pequeño[0], que es 5.
let comparador = pequeño[0];

  //3 Ahora, se define la función menorDeLista():
function menorDeLista(){
    //Dentro de la función, se inicia un bucle for que recorre todos los elementos del array pequeño.
    for(i=0 ; i<pequeño.length ; i++){
    //Dentro del bucle, se compara cada elemento del array pequeño[i] con el valor de la variable comparador.
    if(pequeño[i]< comparador){
        //Si el elemento actual pequeño[i] es menor que el valor de comparador, entonces se actualiza el valor de comparador con el valor de pequeño[i].
        comparador = pequeño[i];
        //Esto se hace para cada elemento del array, de modo que al final comparador contendrá el valor más pequeño de todo el array.
    }
    }
    //Finalmente, la función devuelve el valor de comparador.
    return comparador;
}
//
menorDeLista();

/*En resumen, esta función encuentra el valor más pequeño del array pequeño y lo devuelve. El proceso es el siguiente:

Se inicializa comparador con el primer elemento del array.
Se recorre todo el array comparando cada elemento con comparador.
Si se encuentra un valor más pequeño, se actualiza comparador con ese valor.
Finalmente, se devuelve el valor de comparador, que será el valor más pequeño del array.
Cuando se llama a console.log(menorDeLista()), se imprimirá el valor más pequeño del array pequeño, que en este caso es 1.*/

function mayorDelista(){
    for(i=0 ; i < pequeño.length ; i++)
        if(pequeño[i]>comparador){
            comparador=pequeño[i];
            //console.log(comparador);
        }
        return comparador;
}
mayorDelista();

function mayorYmenor(){
    return `El número menor es ${menorDeLista()} y el mayor ${mayorDelista()}`
}
console.log(mayorYmenor());

/* 8 Crea una función que devuelva la suma de todos los elementos en una lista.*/

let listaASumar = [5,8,9,4,3,7];
let control3 = listaASumar[0] ;
//let control3 = 0;

function sumar(){
    for(i=1 ; i < listaASumar.length ; i++){
        //for(i=0 ; i < listaASumar.length ; i++){
        control3+=listaASumar[i];
    }
    return control3 ;

}
console.log(sumar());

/*9 Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro,
 o -1 si no existe en la lista.*/

 let ListaBuscar = [8,9,6,3,4,2];
 let buscador= 0 ;

 function posicionEnLista(buscador){
    for(i=0 ; i < ListaBuscar.length ; i++){
//debemos validar si un numero existe en la lista ,includes
        // PRUEBA(buscador === ListaBuscar.includes(buscador) ? ListaBuscar[buscador] : -1);
        if(ListaBuscar.includes(buscador)){
            //mostrar en que posicion de lista esta el unico que tiene las posiciones es i
            return console.log(`esta en la posicion...${ListaBuscar.indexOf(buscador)}`)
        }else{
            return -1;
        }
    }
 }
console.log(posicionEnLista(2));

/*10 Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva 
lista con la suma de los elementos uno a uno.*/

let lista1 = [1,2,3,4,5,6];
let lista2 = [7,8,9,1,2,3];

function SumaListas(){
    for(i=0 ; i < lista1.length ; i++){
    console.log(`la suma de ${lista1[i]} + ${lista2[i]} = ${lista1[i]+lista2[i]}`);
    }
}
SumaListas();

/*11Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.*/

let lista3 = [8,9,5,3,4,2];

function cuadrado(){
    for(i=0 ; i < lista3.length ; i++) {
    console.log(`El ❏ de ${lista3[i]} es ${lista3[i]*lista3[i]}`);
    }
}
cuadrado();