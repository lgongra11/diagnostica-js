const prompt = require("prompt-sync")();

const num1 = Number(prompt("Primeiro numero: "));
const num2 = Number(prompt("Segundo numero: "));

console.log("\n=== RESULTADOS ===");
console.log("Soma:", num1 + num2);
console.log("Subtração:", num1 - num2);
console.log("Multiplicação:", num1 * num2);

if (num2 !== 0) {
    console.log("Divisão:", num1 / num2);
    console.log("Resto:", num1 % num2);
} else {
    console.log("Não existe divisão por zero.");
}

console.log("Potência:", num1 ** num2);
