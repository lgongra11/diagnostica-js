let num1 = prompt("Digite o primeiro número: ");
let num2 = prompt("Digite o segundo número: ");
let num3 = prompt("Digite o terceiro número: ");
num1 = Number(num1);
num2 = Number(num2);
num3 = Number(num3);
if (num1 > num2 && num1 > num3) {
    alert("O maior número é: " + num1);
} else if (num2 > num1 && num2 > num3) {
    alert("O maior número é: " + num2);
} else {
    alert("O maior número é: " + num3);
}