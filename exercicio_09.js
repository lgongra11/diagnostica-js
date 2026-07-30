let numeros = [];
let soma = 0;
let maior = numeros[0]
let menor = numeros[0];
let par = 0;
let impar = 0;
let positivos = 0;
let negativos = 0;

for (let i = 0; i < 20; i++) {
    numeros.push(Number(prompt("Digite um número:")));
    soma += numeros[i];
}

for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > maior) {
        maior = numeros[i];
    }
}

for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] < menor) {
        menor = numeros[i]; // Atualiza se achar um menor
    }
}

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
        par++;
    } else {
        impar++;
    }
}

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > 0) {
        positivos++;
    } else if (numeros[i] < 0) {
        negativos++;
    }
}

alert("=== RESULTADOS ===");
alert("Soma dos números: " + soma);
alert("Maior número: " + maior);
alert("Menor número: " + menor);
alert("Média dos números: " + (soma / 20));
alert("Quantidade de números pares: " + par);
alert("Quantidade de números ímpares: " + impar);
alert("Quantidade de números positivos: " + positivos);
alert("Quantidade de números negativos: " + negativos);
