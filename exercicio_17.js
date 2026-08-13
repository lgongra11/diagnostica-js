let nomes = [];
let notas = [];

for (let i = 0; i < 10; i++) {
  nomes[i] = prompt("Digite o nome do " + (i + 1) + "º aluno:");
  notas[i] = Number(prompt("Digite a nota de " + nomes[i] + ":"));
}

for (let i = 0; i < 10; i++) {
  for (let j = i + 1; j < 10; j++) {
    if (notas[j] > notas[i]) {
      let auxNota = notas[i];
      notas[i] = notas[j];
      notas[j] = auxNota;

      let auxNome = nomes[i];
      nomes[i] = nomes[j];
      nomes[j] = auxNome;
    }
  }
}

let mensagem = "--- RANKING FINAL ---\n\n";

for (let i = 0; i < 10; i++) {
  mensagem = mensagem + (i + 1) + "º - " + nomes[i] + ": " + notas[i] + "\n";
}

alert(mensagem);
