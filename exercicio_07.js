let horastrabalhadas = prompt("Digite a quantidade de horas trabalhadas: ");
let valorhora = prompt("Digite o valor da hora trabalhada: ");

let salario = Number(horastrabalhadas * valorhora);

let INSS = Number(salario * 0.08);
let VT = Number(salario * 0.06);
let imposto = Number(salario * 0.075);
let salarioliquido = Number(salario - INSS - VT - imposto);

alert("=== RESULTADOS ===");
alert("Salário bruto: " + salario);
alert("INSS: " + INSS);
alert("VT: " + VT);
alert("Imposto de renda: " + imposto);
alert("Salário líquido: " + salarioliquido);