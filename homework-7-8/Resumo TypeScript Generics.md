# Homework-7-8

#### **Resumo sobre TypeScript Generics:**

Genéricos em TypeScript permitem que desenvolvedores escrevam código reutilizável e seguro para tipos, criando componentes que funcionam com diversos tipos de dados sem perder a segurança de tipo.

#### **O que são genéricos?**

Genéricos são representados por parâmetros de tipo (ex.: `<T>`), usados para definir tipos de variáveis, parâmetros de função e tipos de retorno. Isso permite a criação de componentes, funções e estruturas de dados reutilizáveis.

#### **Casos de uso de genéricos TypeScript:**

- **Funções Genéricas - Generic Function**: Exemplo de função `identity<T>(arg: T): T`, onde o tipo `T` é inferido automaticamente, garantindo a segurança de tipo.
- **Classes Genéricas - Generic Class**: Exemplo da classe `Box<T>`, que pode armazenar e retornar valores de qualquer tipo especificado.
- **Restrições Genéricas - Generic Constraints**: Usando a palavra-chave `extends` para restringir os tipos permitidos, como em `loggingIdentity<T extends Lengthwise>(arg: T): T`.
- **Genéricos com Interfaces - Using Generics with Interfaces**: Criando interfaces flexíveis, como `Pair<T, U>`, que podem combinar diferentes tipos.
- **Funções Genéricas com Arrays - Generic Functions with Arrays**: Função `reverse<T>(array: T[]): T[]` que inverte a ordem dos elementos de arrays de qualquer tipo.
- **Restrições Genéricas com keyof - Generic Constraints with keyof:**  Função `getProperty<T, K extends keyof T>(obj: T, key: K): T[K]` para acessar propriedades de objetos com segurança de tipo.
- **Funções Utilitárias Genéricas - Generic Utility Functions**: Função `toArray<T>(value: T): T[]` que converte um valor em um array contendo aquele valor.
- **Interfaces Genéricas com Funções - Generic Interface with Function**: Interface `Transformer<T, U>` aplicada a uma função como `uppercase`, garantindo flexibilidade e reutilização, transforma a string do argumento em caixa alta.

#### **Exemplos de código usando os genéricos**:

```typescript

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
let cidade: string = getProperty(person, "city");
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
console.log(transform("é campeão!")); // Output: "É CAMPEÃO!" ```

#### **Conclusão**

Dominar genéricos em TypeScript melhora a habilidade de escrever um código eficiente, escalável e sem erros. Eles são fundamentais para criar aplicações robustas e sustentáveis.