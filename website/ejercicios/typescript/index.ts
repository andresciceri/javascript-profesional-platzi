console.log("hello, Typscript");

function add(a: number, b: number): number {
  return a + b;
}

const sum = add(2, 2);

// boolean
let muted: boolean = true;
muted = false;

// Numeros
let numerador: number = 42;
let denominador: number = 6;
let resultado = numerador / denominador;

// String
let nombre: string = "Richard";
let saludo = `Hola soy ${nombre}`;

// Arreglos
let people: string[] = [];
people = ["Isabel", "Nicole", "Raul"];
// people.push("1");

let peopleAndNumbers: Array<string | number> = [];
peopleAndNumbers.push("Ricardo");
peopleAndNumbers.push(10000);

// Enums

enum Color {
  Rojo = "Rojo",
  Verder = "Verde",
  Azul = "Azul",
}

let colorFavorito: Color = Color.Rojo;
console.log(`Mi color favorito es ${colorFavorito}`);

function createAdder(a: number): (number) => number {
  return function (b: number) {
    return b + a;
  };
}

const addFour = createAdder(4);
const fourPlus6 = addFour(6);

function fullName(firstName: string, lastName?: string): string {
  return `${firstName} ${lastName}`;
}

const richard = fullName("Richard");

// interfaces

interface Rectangulo {
  ancho: number;
  alto: number;
  color: Color;
}

let rect: Rectangulo = {
  alto: 6,
  ancho: 4,
  color: Color.Verder,
};

function area(r: Rectangulo) {
  return r.alto * r.ancho;
}

const areaRect = area(rect);
console.log(areaRect);

rect.toString = function () {
  return `Un rectangulo ${this.color}`;
};

console.log(rect.toString());