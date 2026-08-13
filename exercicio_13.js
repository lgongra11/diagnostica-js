const idades = [18, 22, 15, 34, 41, 17, 29, 12, 65, 20, 16, 38, 27, 14, 50];
let soma = 0;
let maior = idades[0];
let menor = idades[0];
let maiores = 0;

for (let i = 0; i < idades.length; i++) {
    const idade = idades[i];
    soma += idade;
    if (idade > maior) maior = idade;
    if (idade < menor) menor = idade;
    if (idade >= 18) maiores++;
}

console.log("Maior idade:", maior);
console.log("Menor idade:", menor);
console.log("Media:", (soma / idades.length).toFixed(2));
console.log("Maiores de idade:", maiores);
console.log("Menores de idade:", idades.length - maiores);
