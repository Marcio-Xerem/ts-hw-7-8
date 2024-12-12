// Exemplo 1: Generic Function
function identity<T>(arg: T): T {
    return arg;
}

let output = identity<string>("Exemplo de função genérica");
console.log(output); // Output: hello

// Exemplo 2: Generic Class
class Box<T> {
    private value: T;

    constructor(value: T) {
        this.value = value;
    }

    getValue(): T {
        return this.value;
    }
}

let box = new Box<number>(1981);
console.log(box.getValue()); // Output: 1981

// Exemplo 3: Generic Constraints
interface Lengthwise {
    length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
    console.log(arg.length);
    return arg;
}

let resultado = loggingIdentity("O Flamanego é campeão da Copa do Brasil");
console.log(resultado); // Output: hello

// Exemplo 4: Using Generics with Interfaces
interface Pair<T, U> {
    first: T;
    second: U;
}

let pair: Pair<number, string> = { first: 8, second: "vezes campeão brasileiro" };
console.log(pair); // Output: { first: 1, second: "two" }

// Exemplo 5: Generic Functions with Arrays
function reverse<T>(array: T[]): T[] {
    return array.reverse();
}

let numbers: number[] = [9, 1, 0, 2];
let reversedNumbers: number[] = reverse(numbers);
console.log(reversedNumbers); // Output: [2, 0, 1, 9]

// Exemplo 6: Generic Constraints with keyof
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

let person = { name: "Zico", age: 71, city: "Rio de Janeiro" };
let nome: string = getProperty(person, "name");
let idade: number = getProperty(person, "age");
let cidade: string = getProperty(person, "city")
console.log(nome, idade, cidade); // Output: "Zico" 71 "Rio de Janeiro"

// Exemplo 7: Generic Utility Functions
function toArray<T>(value: T): T[] {
    return [value];
}

let stringArray: string[] = toArray("Em dezembro de ...");
console.log(stringArray); // Output: ["Em dezembro de ..."]

let numberArray: number[] = toArray(81);
console.log(numberArray); // Output: [81]

// Exemplo 8: Generic Interface with Function
interface Transformer<T, U> {
    (input: T): U;
}

function uppercase(input: string): string {
    return input.toUpperCase();
}

let transform: Transformer<string, string> = uppercase;
console.log(transform("é campeão!")); // Output: "É CAMPEÃO!"

