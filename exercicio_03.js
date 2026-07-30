let salario = prompt("Digite o salário do funcionário: ");
let horas = prompt("Digite a quantidade de horas trabalhadas: ");
let valorHora = Number(salario / horas);
let valorMinuto = Number(valorHora / 60);
let valorSegundo = Number(valorMinuto / 60);

console.log ("=== RESULTADOS ===");
console.log("Valor da hora:", valorHora);
console.log("Valor do minuto:", valorMinuto);
console.log("Valor do segundo:", valorSegundo);