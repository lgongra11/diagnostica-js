let nomes = [];
let ras = [];
let medias = [];
let statusList = [];

let somaTurma = 0;
let aprovados = 0;
let recuperacao = 0;
let reprovados = 0;

let maiorMedia;
let menorMedia;
let melhorAluno = "";
let piorAluno = "";

const TOTAL_ALUNOS = 20;

// 1. Cadastro dos Alunos
for (let i = 0; i < TOTAL_ALUNOS; i++) {
  let nome = prompt("Digite o nome do " + (i + 1) + "º aluno:");
  let ra = prompt("Digite o RA do aluno " + nome + ":");

  let n1 = Number(prompt("Digite a 1ª nota do aluno " + nome + ":"));
  let n2 = Number(prompt("Digite a 2ª nota do aluno " + nome + ":"));
  let n3 = Number(prompt("Digite a 3ª nota do aluno " + nome + ":"));

  let mediaIndividual = (n1 + n2 + n3) / 3;

  // Guardando nos arrays
  nomes[i] = nome;
  ras[i] = ra;
  medias[i] = mediaIndividual;

  // Acumulando para a média geral
  somaTurma = somaTurma + mediaIndividual;

  // Verificação de Status
  if (mediaIndividual >= 7) {
    statusList[i] = "Aprovado";
    aprovados = aprovados + 1;
  } else if (mediaIndividual >= 5) {
    statusList[i] = "Recuperação";
    recuperacao = recuperacao + 1;
  } else {
    statusList[i] = "Reprovado";
    reprovados = reprovados + 1;
  }

  // Descobrindo Maior e Menor Média
  if (i === 0) {
    maiorMedia = mediaIndividual;
    menorMedia = mediaIndividual;
    melhorAluno = nome;
    piorAluno = nome;
  } else {
    if (mediaIndividual > maiorMedia) {
      maiorMedia = mediaIndividual;
      melhorAluno = nome;
    }
    if (mediaIndividual < menorMedia) {
      menorMedia = mediaIndividual;
      piorAluno = nome;
    }
  }
}

// 2. Cálculos Globais
let mediaTurma = somaTurma / TOTAL_ALUNOS;
let percentualAprovacao = (aprovados / TOTAL_ALUNOS) * 100;

// 3. Montando a Listagem Completa
let listagem = "--- LISTAGEM DE ALUNOS ---\n\n";

for (let i = 0; i < TOTAL_ALUNOS; i++) {
  listagem = listagem + "RA: " + ras[i] + " | Nome: " + nomes[i] + " | Média: " + medias[i].toFixed(1) + " | Status: " + statusList[i] + "\n";
}

// 4. Exibição dos Relatórios
alert(listagem);

alert(
  "--- RESUMO GERAL DA TURMA ---\n\n" +
  "Média da turma: " + mediaTurma.toFixed(2) + "\n" +
  "Maior média: " + maiorMedia.toFixed(1) + " (Aluno: " + melhorAluno + ")\n" +
  "Menor média: " + menorMedia.toFixed(1) + " (Aluno: " + piorAluno + ")\n\n" +
  "Aprovados: " + aprovados + "\n" +
  "Em Recuperação: " + recuperacao + "\n" +
  "Reprovados: " + reprovados + "\n" +
  "Percentual de aprovação: " + percentualAprovacao.toFixed(1) + "%"
);
