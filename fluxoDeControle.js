const menu = 20;

switch (menu) {
    case 1:
    console.log("Exercício 1 selecionado. Executando...\n");
    ex1(); //Verificar se número é positivo
    break;

    case 2:
    console.log("Exercício 2 selecionado. Executando...\n");
    ex2(); //Número par ou ímpar
    break;

    case 3:
    console.log("Exercício 3 selecionado. Executando...\n");
    ex3(); //Boas-vindas por turno
    break;

     case 4:
    console.log("Exercício 4 selecionado. Executando...\n");
    ex4(); //Maior de dois números
    break;

     case 5:
    console.log("Exercício 5 selecionado. Executando...\n");
    ex5(); //Uso do operador ternário
    break;

    case 6:
    console.log("Exercício 6 selecionado. Executando...\n");
    ex6(); //Menu simples com switch
    break;

    case 7:
    console.log("Exercício 7 selecionado. Executando...\n");
    ex7(); //Contador de 1 a 5 com while
    break;

    case 8:
    console.log("Exercício 8 selecionado. Executando...\n");
    ex8(); //Contagem regressiva com do...while
    break;

    case 9:
    console.log("Exercício 9 selecionado. Executando...\n");
    ex9(); //Imprimir de 1 a 10 com for
    break;

    case 10:
    console.log("Exercício 10 selecionado. Executando...\n");
    ex10(); //Somar números de 1 a 10
    break;

    case 11:
    console.log("Exercício 11 selecionado. Executando...\n");
    ex11(); //Imprimir elementos de um array com for
    break;

    case 12:
    console.log("Exercício 12 selecionado. Executando...\n");
    ex12(); //Usar for...of com array
    break;

    case 13:
    console.log("Exercício 13 selecionado. Executando...\n");
    ex13(); //Usar for...in com objeto
    break;

    case 14:
    console.log("Exercício 14 selecionado. Executando...\n");
    ex14(); //Parar contagem com break
    break;

    case 15:
    console.log("Exercício 15 selecionado. Executando...\n");
    ex15(); //Pular número com continue
    break;

    case 16:
    console.log("Exercício 16 selecionado. Executando...\n");
    ex16(); //Classificar nota do aluno
    break;

    case 17:
    console.log("Exercício 17 selecionado. Executando...\n");
    ex17(); //Tabuada de um número
    break;

    case 18:
    console.log("Exercício 18 selecionado. Executando...\n");
    ex18(); //Contar elementos numéricos em um array misto
    break;

    case 19:
    console.log("Exercício 19 selecionado. Executando...\n");
    ex19(); //Verificar se uma palavra é palíndromo
    break;

    case 20:
    console.log("Exercício 20 selecionado. Executando...\n");
    ex20(); //Menu interativo com switch e while
    break;

}

function ex1(){
    const numero = 1;

    const positivo = numero > 0
    ? "Positivo"
    : "Negativo";
    console.log(positivo);
}

function ex2(){
    const numero = 2;

    const par = numero % 2 == 0
    ? "Par"
    : "Ímpar";

    console.log(par);
}

function ex3(){
    const turno = "M"

    if (turno === "M") {
        console.log("Bom dia");
    } else if (turno === "T") {
        console.log("Boa tarde");
    } else if (turno === "N") {
        console.log("Boa noite");
    } else {
        console.log("Turno inválido");
    }
}

function ex4(){
    const n1 = 20;
    const n2 = 10;

    if(n1 > n2){
        console.log(n1)
    }else{
        console.log(n2);
    }
}

function ex5(){
    const numero = -1;

    const positivo = numero > 0
    ? "Positivo"
    : "Negativo";
    console.log(positivo);
}

function ex6(){
    const opcao = 3;

    switch (opcao) {
        case 1: 
        console.log("Início"); break;
        case 2:
        console.log("Sobre"); break;
        case 3:
        console.log("Sair"); break;
    }
}

function ex7(){
    let i = 1;
    while (i <= 5) {
        console.log(i);
        i++;
    }
}

function ex8(){
    let i = 5;
    do {
    console.log(i);
        i--;
    } while (i >= 1);
}

function ex9(){
    for (let i = 1; i <= 10; i++) {
    console.log(i);
    }
}

function ex10(){
    let soma = 0;
    for (let i = 1; i <= 10; i++) {
    soma += i;
    }

    console.log(soma);
}


function ex11(){
    const array = ["Rosa", "Roxo", "Azul"];

    for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
    }
}

function ex12(){
    const times = ["Corinthians", "Santos", "Flamengo"];

    for (let t of times) {
    console.log(`times: ${t}`);
    }
}

function ex13(){
    const usuario = {
        nome: "Letícia",
        idade: 17,
        curso: "Desenvolvimento de Sistemas"
    };

    for (let chave in usuario) {
        console.log(`${chave}: ${usuario[chave]}`);
    }
}

function ex14(){
    for (let i = 1; i <= 10; i++) {
        if (i === 6) break;
        console.log(i);
    }
}

function ex15(){
    for (let i = 1; i <= 10; i++) {
        if (i === 7) continue;
        console.log(i);
    }
}

function ex16(){
    const nota = 5;

    if (nota < 6) 
        console.log("Reprovado");
    else if (nota < 8) 
        console.log("Recuperação");
    else 
        console.log("Aprovado");
}

function ex17(){
    const n = 3;

    for (let i = 1; i <= 10; i++) {
        console.log(`${n} x ${i} = ${n * i}`);
    }
}

function ex18(){
    const arr = [1, "a", 2, true, 3];
    let count = 0;

    for (let v of arr) {
        if (typeof v === "number") count++;
    }

    console.log(count);
}

function ex19(){
    const palavra = "arara";

    const reversa = palavra.split("").reverse().join("");

    if (palavra === reversa) {
        console.log("Palíndromo");
    } else {
        console.log("Não é palíndromo");
    }
}

function ex20(){
    let op = 3;

    while (op !== 3) {
        switch (op) {
            case 1:
                console.log("Olá");
                break;
            case 2:
                console.log("Teste");
                break;
            case 3:
                console.log("Saindo...");
                break;
        }
    }

    console.log("Menu encerrado");
}