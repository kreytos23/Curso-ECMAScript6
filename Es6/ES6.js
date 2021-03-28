
/*
    Antes de ECS6 para dar valores por defecto a atributos de una funcion
    era necesario hacerlo con el operador ||, pero con ECS6 se puede hacer
    directamente se puede hacer desde la declaracion de los parametros de la
    funcion
*/

//old version
function newfunction(name,age,country){
    var name = name || 'cesar';
    var age = age || 19;
    var country = country || "MX";
    console.log(`Mi nombre es ${name}, tengo ${age} años y vivo en ${country}`);
}

//ECS6

function newfunctionESC(name = "Cesar",age = 19, country = "MX"){
    console.log(`Mi nombre es ${name}, tengo ${age} años y vivo en ${country}`);
}

/////

newfunction();
newfunctionESC();


/*
    Los template literal -> `` , sirven para poder colocar variables dentro de
    un string sin necesidad concaternarlos con +, solo se debe de seguir 
    de la forma -> ${variable}, de esta forma es mas entendible a la hora de 
    crear un string compuesto de variables
*/

//template literals

let hello = 'Hello';
let world = 'World!!';

//old
console.log(hello + ' ' + world);
//ECS6
console.log(`${hello} ${world}`);

//Multilinea

//Old
let texto1 = 'Hola este es un texto que necesita un salto \n' + 'Este es despues del salto';
//ECS6
let texto2 = `Este es un texto con salto de linea 
dando enter con templateLiterals`;

console.log(texto1);
console.log(texto2);


/*
    La desestructuracion sirve para que no debas de mandar los atributos de un 
    objeto de la forma -> clase.atributo,
    de esta forma puede ser mas semantico la forma de mandar a llamar 
    los atributos
*/

let Persona = {
    name : 'Cesar',
    age : 19,
    country : 'MX'
}

let comidas = ['🍕','🍔','🌭','🍤'];

//Olc
console.log(comidas[0],comidas[1],comidas[2]);

//ESC6
let[pizza,hamburguer,hotdog] = comidas;
console.log(pizza,hamburguer,hotdog);

//Old
console.log(Persona.name, Persona.age, Persona.country);

//ESC6
let {name, age, country} = Persona;
console.log(name,age,country);

/*
    El Spred Operator sirve para juntar estructuras como objetos o arrays
*/

let team1 = ['Manuel','Luis','Milos'];
let team2 = ['Karla','Ana','Fora'];
let team3 = ['Carlitos','Ana','Karla'];

let dreamTeam = [...team1, ...team2];


//Con set se logra eliminar datos repetidos
let dreamTeam2 = [...new Set(['Carolina', ...team1,...team2,...team3])];

console.log(dreamTeam);
console.log(dreamTeam2);


/*
    Las formas de declarar variables son let, var y const
    Las diferencias es que let tiene un scope solamente del 
    bloque de codigo donde fue creado, a diferencia de var que 
    tiene un scope global y no importa donde sea declarado
    Const tiene la propiedad de ser una constante y no permite
    que su valor con el cual fue inicializado pueda cambiar
*/

{
    var globalVar = 'Global Var';
    let globalLet = 'Global Let';
    const globalConst = 'Global Const';
    console.log(`globalLet -> ${globalLet}`);
    console.log(`globalConst -> ${globalConst}`);
}

console.log(`globalVar -> ${globalVar}`);




/**
 * Parameters in Objects
 */
var name = 'Oscar';
var age = 32;

const obj = {
    name: name,
    age: age
};
console.log('Before ES6 -> ', obj);

// es6
const objES6 = { name, age };
console.log(`After ES6 -> `, objES6);

/**
 * Arrow Functions
 */
const names = [
    { name: 'Cesar', age: 31 },
    { name: 'Yesica', age: 27 }
];

let listOfNames = names.map(function(item) {
    console.log('Before ES6 -> ', item.name);
});

// es6
let listOfNamesES6 = names.map(item => console.log(`After ES6 -> ${item.name}`));


/**
 * Promises
 */
const helloPromise = foo => {
    return new Promise((resolve, reject) => {
    if (foo) {
        resolve('Hey!');
    } else {
        reject('Upss!');
    }
});
};

const foo = false;
helloPromise(foo)
    .then(response => console.log('response -> ', response))
    .then(() => console.log('message -> Hello World!'))
    .catch(error => console.log('error -> ', error));



/* 
    imports de modulos 
    SE usa para modular tu programa en diferentes archivos 
    para luego importarlos a donde vayas a usarlos
*/

/*
    Se puede importar un modulo el cual se exporto pero debe ser unico
    y se le puede poner cualquier nombre, solo si es lo unico que se 
    puede importar del modulo
*/
import saludo from './module.js'
saludo();


/*
    Si el modulo tiene mas de una cosa que importar se debe de especificar entre 
    llaves con el nombre exacto de lo que se quiere importar
*/

import {bye, greetings} from './moduleSingle.js'

console.log(bye);
greetings();

/*
    tambien se puede cambiar el nombre de lo que exportas en dado caso
    que tengas dos cosas importadas con el mismo nombre
    se usa AS
*/

import {bye as despedida, greetings as saludo} from './moduleSingle.js'

console.log(despedida);
saludo();


/////// Clases ///////

/*
    Se pueden crear clases para lograr usar el paradigma orientado 
    a objetos en JS, esto de la siguiente forma
*/

//Aqui se declara el nombre de la clase y dentro se manda a llamar
// la funcion contructor donde ahi sera el metodo constructor de la clase
//Puedes ponerlo vacio o con los parametros que prefieras
//Se usa de igual forma el .this como en otros lenguajes 
//Despues del contructor puedes agregar los metodos que gustes
class persona {
    constructor(name = "Nombre", age = "infinito", country = "Nunca jamas"){
        this.name = name,
        this.age = age,
        this.country = country
    }

    //Estos son metodos
    description(){
        console.log(`Mi nombre es ${this.name}, tengo ${this.age} y vivo en ${this.country}`);
    }

    old(){
        return this.age;
    }
}

//Una vez echa la clase puedes crear un objeto de esa clase de esta forma
let cesar = new persona("Cesar", 19, "MX");
let randum = new persona();

//Se manda a imprimir el objeto deseado
console.log(cesar);
cesar.age = 20;
console.log(randum);
console.log(cesar);
cesar.description();
console.log(cesar.old());


////////////Generadores/////////77

/*
    Los generadores son funciones que guardan la posicion en la que se quedaron,
    estas van a ejecutar algun bloque condicional y se detendran
    y cuando se vuelva a llamar con el metodo .next() avanzara de bloque de codigo
*/

function* generatorfunction(){
    if(true){
        yield 'Hello, ';
    }
    if(true){
        yield 'World!';
    }
}

const generator = generatorfunction();

console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);

//fibonacci

function* fibonacci(){
    var fn1 = 1;
    var fn2 = 1;
    while (true){  
        var actual = fn2;
        fn2 = fn1;
        fn1 = fn1 + actual;
        var reset = yield actual;
        if (reset){
            fn1 = 1;
            fn2 = 1;
        }
        }
    }

    var secuencia = fibonacci();
    console.log(secuencia.next().value);     // 1
    console.log(secuencia.next().value);     // 1
    console.log(secuencia.next().value);     // 2
    console.log(secuencia.next().value);     // 3
    console.log(secuencia.next().value);     // 5
    console.log(secuencia.next().value);     // 8
    console.log(secuencia.next().value);     // 13
    console.log(secuencia.next().value); 
    console.log(secuencia.next().value);     
    console.log(secuencia.next().value);
    console.log(secuencia.next().value);