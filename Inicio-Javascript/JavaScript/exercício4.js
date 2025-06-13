function ex1()
{
    //Exercício 01: Voce é gerente de um supermercado e sabe que os valores das vendas do dia são gravados em um vetor. Digite um código que faça o fechamento (soma) de vendas do dia de maneira automatizada.
    //Exercício 02: Agora que voce sabe o fechamento do dia, monte um código que identifique a compra de menor valor e a compra de maior valor 
    //Exercício 03: Ainda utilizando o exercício do mercado, calcule o ticket médio de vendas do dia
                 
     function checar(itens, x)
    {
        return itens.some(linha => linha.includes(x));
    }

    function posicao(itens, x)
    {
        for (let i = 0; i < itens.length; i++)
        {
            let j = itens[i].indexOf(x);
            if (j !== -1)
            {
                return [i, j];
            }
        }
        return null;
    }

    function inserir(itens)
    {
        let item, valor, escolha, verificar;
        do
        {
            escolha = prompt("Digite sua escolha:\n   1) Inserir novos itens\n   2) Voltar");
            if (escolha === '1')
            {
                do
                {
                    item = prompt("Digite o nome do produto que deseja inserir:").toUpperCase();
                    verificar = checar(itens, item);
                    if (verificar)
                    {
                        alert("Item já cadastrado!");
                    }
                }
                while (verificar);

                valor = parseFloat(prompt("Digite o valor do produto (somente numérico):"));
                itens.push([item, valor, 0]);
            }
        }
        while (escolha !== '2');
    }

    function vendas(itens)
    {
        let item, quantidade, escolha, verificar, coordenada;
        do
        {
            escolha = prompt("Digite sua escolha:\n   1) Adicionar uma venda\n   2) Voltar");
            if (escolha === '1')
            {
                do
                {
                    item = prompt("Digite o nome do produto que foi vendido:").toUpperCase();
                    verificar = checar(itens, item);
                    if (!verificar)
                    {
                        alert("Produto não cadastrado!");
                    }
                }
                while (!verificar);

                quantidade = parseInt(prompt("Digite a quantidade do produto que foi vendida:"), 10);
                coordenada = posicao(itens, item);
                itens[coordenada[0]][2] += quantidade;
                alert("Venda registrada com sucesso!");
            }
        }
        while (escolha !== '2');
    }

    function total(itens)
    {
        let resumo = "Fechamento do Caixa:\n\n";
        let somaTotal = 0;

        for (let i = 0; i < itens.length; i++)
        {
            let nome = itens[i][0];
            let preco = itens[i][1];
            let quantidade = itens[i][2];
            let subtotal = preco * quantidade;

            resumo += `${nome}: R$ ${preco.toFixed(2)} x ${quantidade} = R$ ${subtotal.toFixed(2)}\n`;
            somaTotal += subtotal;
        }

        resumo += `\nTOTAL DAS VENDAS: R$ ${somaTotal.toFixed(2)}`;
        alert(resumo);
    }

    function estatisticas(itens)
    {
        let menorValor = Infinity;
        let maiorValor = -Infinity;
        let totalVendas = 0;
        let quantidadeVendas = 0;
        let itemMenor = "", itemMaior = "";

        for (let i = 0; i < itens.length; i++)
        {
            let nome = itens[i][0];
            let preco = itens[i][1];
            let quantidade = itens[i][2];

            if (quantidade > 0)
            {
                let subtotal = preco * quantidade;
                totalVendas += subtotal;
                quantidadeVendas++;

                if (subtotal < menorValor)
                {
                    menorValor = subtotal;
                    itemMenor = nome;
                }

                if (subtotal > maiorValor)
                {
                    maiorValor = subtotal;
                    itemMaior = nome;
                }
            }
        }

        if (quantidadeVendas === 0)
        {
            alert("Nenhuma venda registrada ainda.");
        }
        else
        {
            let ticketMedio = totalVendas / quantidadeVendas;
            let mensagem = `Estatísticas do Dia:\n\n` +
                           `Produto com MENOR valor de venda: ${itemMenor} - R$ ${menorValor.toFixed(2)}\n` +
                           `Produto com MAIOR valor de venda: ${itemMaior} - R$ ${maiorValor.toFixed(2)}\n` +
                           `Ticket médio de vendas: R$ ${ticketMedio.toFixed(2)}`;
            alert(mensagem);
        }
    }

    let itens = [
        ["ARROZ", 5.50, 2],
        ["FEIJÃO", 7.30, 1],
        ["MACARRÃO", 4.00, 3],
        ["CARNE", 25.00, 1]
    ];
    let escolha = '-1';

    do
    {
        escolha = prompt("Escolha uma das opções:\n" +
                         "   1) Inserir produto\n" +
                         "   2) Venda de um produto\n" +
                         "   3) Fechamento do Caixa\n" +
                         "   4) Estatísticas do Dia\n" +
                         "   0) Sair");

        switch (escolha)
        {
            case '1':
                inserir(itens);
                break;
            case '2':
                vendas(itens);
                break;
            case '3':
                total(itens);
                break;
            case '4':
                estatisticas(itens);
                break;
        }
    }
    while (escolha !== '0');
}

function ex2()
{
    //Exercício 4: Escreva um código que irá percorrer uma lista de números inteiros lista[ ] = { 3, 5, 6, 7, 8, 10, 22, 55, 110 } e irá contar a quantidade de números pares presente nela.

    let lista = [3, 5, 6, 7, 8, 10, 22, 55, 110];
    let i, j;
    j = 0;
    for(i = 0; i < lista.length; i++)
    {
        if(lista[i] % 2 == 0)
            j++;
    }

    alert("na lista {3, 5, 6, 7, 8, 10, 22, 55, 110} há " + j + " pares!");
}

function ex3()
{
    //Exercício 5: Escreva um programa que sirva como uma lista de compras de mercado. Você irá criar um menu que pergunte se o usuário quer inserir um item ou ver a lista.
    //Exercício 6: Aproveite a questão anterior e adiciona a opção do usuário remover um item.
    //Exercício 7: Aproveite o código que estamos utilizando e implemente um preço para cada item (Dica. Utilizem outra lista e use os mesmos índices para o item e para o preço).
    //Exercício 8: Aproveite os códigos anteriores e implemente a função de impressão por ordem de preço (crescente)


    let lista = [
        ["ARROZ", 5.50, 2],
        ["FEIJÃO", 7.30, 1],
        ["MACARRÃO", 4.00, 3],
        ["CARNE", 25.00, 1]
    ];

    function exibir_lista(lista)
    {
        lista.sort((a, b) => (a[1] * a[2]) - (b[1] * b[2]));

        let exibir = "Lista de Compras\n\n";
        let somaTotal = 0;

        for (let i = 0; i < lista.length; i++)
        {
            let nome = lista[i][0];
            let preco = lista[i][1];
            let quantidade = lista[i][2];
            let subtotal = preco * quantidade;
            somaTotal += subtotal;
            exibir += `${nome}: R$ ${preco.toFixed(2)} x ${quantidade} = R$ ${subtotal.toFixed(2)}\n`;
        }

        exibir += `\nTOTAL DA COMPRA: R$ ${somaTotal.toFixed(2)}`;
        alert(exibir);
    }

    function inserir(lista)
    {
        let item, valor, escolha, verificar;
        do
        {
            escolha = prompt("Digite sua escolha:\n   1) Inserir novos itens\n   2) Voltar");
            if (escolha === '1')
            {
                do
                {
                    item = prompt("Digite o nome do produto que deseja inserir:").toUpperCase();
                    verificar = checar(lista, item);
                    if (verificar)
                    {
                        alert("Item já cadastrado!");
                    }
                }
                while (verificar);

                valor = parseFloat(prompt("Digite o valor do produto (somente numérico):"));
                if (isNaN(valor))
                {
                    alert("Valor inválido!");
                }
                else
                {
                    lista.push([item, valor, 1]);
                    alert("Item inserido!");
                }
            }
        }
        while (escolha !== '2');
    }

    function checar(lista, x)
    {
        return lista.some(linha => linha[0] === x);
    }

    function posicao(lista, x)
    {
        for (let i = 0; i < lista.length; i++)
        {
            if (lista[i][0] === x)
            {
                return i;
            }
        }
        return -1;
    }

    function remover(lista)
    {
        let item, escolha, verificar;
        do
        {
            escolha = prompt("Digite sua escolha:\n   1) Apagar um item\n   2) Apagar a lista toda\n   3) Voltar");
            if (escolha === '1')
            {
                item = prompt("Digite o nome do produto que deseja excluir:").toUpperCase();
                verificar = checar(lista, item);
                if (!verificar)
                {
                    alert("Item não existente!");
                }
                else
                {
                    let index = posicao(lista, item);
                    lista.splice(index, 1);
                    alert("Item excluído.");
                }
            }
            if (escolha === '2')
            {
                lista.length = 0;
                alert("Lista apagada!");
            }
        }
        while (escolha !== '3');
    }

    let escolha = '';
    do
    {
        escolha = prompt("Escolha uma opção:\n   1) Inserir itens à lista\n   2) Remover itens da lista\n   3) Exibir a lista\n   0) Sair");
        switch (escolha)
        {
            case '1':
                inserir(lista);
                break;
            case '2':
                remover(lista);
                break;
            case '3':
                exibir_lista(lista);
                break;
        }
    }
    while (escolha !== '0');
    alert("Até mais!");
}

function menu4()
{
    let numero = "0";

    do {
        numero = prompt("Escolha o número do exercício:\n   1) Supermercado;\n   2) Quantidade de pares;\n   3) Lista de compras\n   0) Sair");
        
        switch (numero) {
            case "1":
                ex1();
                break;
            case "2":
                ex2();
                break;
            case "3":
                ex3();
                break;
            default: 
                alert("Opção inválida. Tente novamente.");
                break;
        }
    } while (numero != "0");
}