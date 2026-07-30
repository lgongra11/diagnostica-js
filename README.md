# Ambiente JS com prompt (do zero)

Este guia mostra como criar um ambiente simples para usar entrada de dados via prompt no JavaScript com Node.js.

## 1. Pre-requisitos

- Node.js instalado (LTS recomendado)
- VS Code (opcional, mas recomendado)

Para verificar se o Node esta instalado:

```bash
node -v
npm -v
```

## 2. Criar a pasta do projeto

```bash
mkdir diagnostica
cd diagnostica
```

## 3. Iniciar o projeto Node

```bash
npm init -y
```

Esse comando cria o arquivo package.json.

## 4. Instalar biblioteca de prompt

```bash
npm install prompt-sync
```

## 5. Criar arquivo JavaScript

Crie um arquivo chamado exercicio_01.js com este exemplo:

```js
const prompt = require("prompt-sync")();

const num1 = Number(prompt("Primeiro numero: "));
const num2 = Number(prompt("Segundo numero: "));

console.log("\n=== RESULTADOS ===");
console.log("Soma:", num1 + num2);
console.log("Subtracao:", num1 - num2);
console.log("Multiplicacao:", num1 * num2);

if (num2 !== 0) {
  console.log("Divisao:", num1 / num2);
  console.log("Resto:", num1 % num2);
} else {
  console.log("Nao existe divisao por zero.");
}

console.log("Potencia:", num1 ** num2);
```

## 6. Executar o arquivo

```bash
node exercicio_01.js
```

Digite os valores quando o terminal pedir.

## 7. Problemas comuns

### Erro: Cannot find module 'prompt-sync'

Rode novamente:

```bash
npm install prompt-sync
```

### O comando node nao funciona

- Reinstale o Node.js
- Feche e abra o terminal
- Rode `node -v` para confirmar

## 8. Estrutura esperada

Depois dos passos, a pasta deve ter algo parecido com:

- exercicio_01.js
- package.json
- package-lock.json
- node_modules/

---

voce pode criar outros exercicios e executar com `node nome-do-arquivo.js`.
