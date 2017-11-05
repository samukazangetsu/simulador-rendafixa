# Simulador de Renda Fixa Pré e Pós
[![Build Status](https://travis-ci.org/rafaellucio/simulador-rendafixa.svg?branch=master)](https://travis-ci.org/rafaellucio/simulador-rendafixa)
[![Coverage Status](https://coveralls.io/repos/github/easynvest/simulador-rendafixa/badge.svg?branch=master)](https://coveralls.io/github/easynvest/simulador-rendafixa?branch=master)
[![Dependencies Status](https://david-dm.org/easynvest/simulador-rendafixa.svg)](https://david-dm.org/easynvest/simulador-rendafixa)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/7634f98fb53045548db4e92b0e5e8d3a)](https://www.codacy.com/app/easynvest/simulador-rendafixa?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=easynvest/simulador-rendafixa&amp;utm_campaign=Badge_Grade)

Existem vários simuladores de Renda Fixa Pré e Pós fixados no mercado. Mas a maioria deles não tem as taxas atualizadas automaticamente ou não fazem a projeção do CDI futuro da maneira correta. Esse projeto foi criado pelos desenvolvedores da Easynvest, onde o objetivo é entregar um simulador de Renda Fixa para o mercado, projetando o CDI futuro com taxas atualizadas diretamente da Anbima.

Você pode ver esse simulador funcionando aqui:
[https://easynvest.github.io/simulador-rendafixa/](https://easynvest.github.io/simulador-rendafixa/)

## Para rodar esse projeto
Execute o famoso
`npm install && npm start`
e tudo pronto para começar. :D

![alt Página Inicial](/screenshot.png?raw=true)

## Consumindo o serviço de cálculo
A API que calcula o os valores futuros se encontram em [outro projeto Open Source, aqui](https://github.com/easynvest/api-simulator-calc). Abaixo segue algumas informações sobre como utilizamos esse serviço no nosso simulador.

 - **URL**: https://api-simulator-calc.easynvest.com.br/calculator/simulate
 - **Method**: GET
 - **URL Params**:
    ```javascript
        investedAmount = 32323.0                 // Valor a investir em reais
        index = "CDI"                            // Índice, por enquanto só CDI disponível
        rate = 123                               // Percentual do papel
        isTaxFree = false                        // Isento de IR, por enquanto só falso
        maturityDate = "2023-03-03"              // Data do vencimento, no formato ano-mes-dia

    ```
 - **Response**
    ```javascript
    {
        "investmentParameter": {
            "investedAmount": 32323.0,                      // O valor a ser investido
            "yearlyInterestRate": 9.5512,                   // Rentabilidade anual
            "maturityTotalDays": 1981,                      // Dias corridos
            "maturityBusinessDays": 1409,                   // Dias úteis
            "maturityDate": "2023-03-03T00:00:00",          // Data de vencimento
            "rate": 123.0,                                  // Percentual do papel
            "isTaxFree": false                              // Isento de IR
        },
        "grossAmount": 60528.20,                            // Valor bruto do investimento
        "taxesAmount": 4230.78,                             // Valor do IR
        "netAmount": 56297.42,                              // Valor líquido
        "grossAmountProfit": 28205.20,                      // Rentabilidade bruta
        "netAmountProfit": 23974.42,                        // Rentabilidade líquida
        "annualGrossRateProfit": 87.26,                     // Rentabilidade bruta anual
        "monthlyGrossRateProfit": 0.76,                     // Rentabilidade bruta mensal
        "dailyGrossRateProfit": 0.000445330025305748,       // Rentabilidade bruta diária
        "taxesRate": 15.0,                                  // Faixa do IR (%)
        "rateProfit": 9.5512,                               // Rentabilidade no período
        "annualNetRateProfit": 74.17                        // Rentabilidade líquida anual
    }
    ```

# Lint
Nós usamos o ESLint para apontar erros de padrão de escrita no JS. Para rodar o teste, execute o comando `npm run lint`.

# Contribuindo
Fique à vontade para contribuir da maneira que for, seja escrevendo issues ou clonando o projeto para submeter Pull Requests.

Se você for escrever código, por favor, preste atenção aos detalhes do `.editorconfig` e do padrão de JS descrita nas regras do `eslinrc`.

Se você encontrar um problema e se empolgar para fazer um Pull Request, por favor, crie uma Issue para que seu Pull Request fique atrelado à ele, assim teremos um histórico saudável de problemas reportados + soluções enviadas.


# Guia de Estilo Git

1. [Branches](#branches)
2. [Commits](#commits)
  1. [Menssagens](#mensagens)
3. [Merge](#merge)

## Branches

Segue referência criação das branches [Git flow](https://danielkummer.github.io/git-flow-cheatsheet/index.pt_BR.html)

* Escolha nomes *pequenos* e *descritivos*:

```shell
# bom
$ git checkout -b feature/oauth-migration

# ruim - muito vago
$ git checkout -b login_fix
```

* Use *hifens* para separar palavras.

* Delete sua branch do repositório upstream após ele ter sido mergeado, à menos que tenho uma boa razão pra ela continuar la.

Dica: Use o seguinte comando quando estiver no `master`, para listas os branchs mergeadas:

```shell
$ git branch --merged | grep -v "\*"
```

## Commits

* Cada commit deve ser uma *mudança lógica* simples. Não faça várias *mudanças lógicas* em um commit. Por exemplo, se uma alteração corrige um bug e otimiza a performance de uma funcionalidade, o divida em dois commits separados.

* Não divida uma *mudança lógica* simples em vários commits. Por exemplo, a implementação de uma funcionalidade e os testes correspondentes à ela devem estar no mesmo commit.

* Commit *cedo* e *frequentemente*. Commits pequenos e autônomos são mais fáceis de entender e reverter quando algo dá errado.

* Commits devem ser ordenados *logicamente*. Por exemplo, se *commit X* depende de uma mudança feita no *commit Y*, então *commit Y* deve vir antes do *commit X*.

## Mensagens:

```
<tipo>(<scopo>): <assunto>

<corpo>

<rodape>
```

Exemplo de mensagem de commit:

```
fix(auth): Corrige autenticação quando passa o e-mail

Adiciona uma nova dependencia.

Fixes #2310

```

**Mensagem `<assunto>`:**

A primeira linha não pode passar de 70 caracteres, a segunda linha está sempre em branco e outras linhas devem ser envolvidas em 80 caracteres. O tipo e o escopo sempre devem ser minúsculos como mostrado abaixo.

**Mensagem `<tipo>`**
_Permitidos:_

- feat (nova feature para usuário, não é uma nova feature para build ou scripts)
- fix (bug fix para o usuário, não é uma nova fix para build ou scripts)
- docs (mudança em documentação)
- style (formatação, espaços, identação, etc; sem mudança no código de prod)
- refactor (refatorando código de produção, tal como, renomeando variáveis)
- test (adição de testes, refatorar testes; sem mudança no código de prod)
- chore (atualização de tasks de build, etc; sem mudançao no código de prod)

**Exemplo de `<escopo>`**

- registry-completion
- legacy-wrapper
- symbol-base
- config
- etc.

O <escopo> pode estar vazio (por exemplo, se a mudança for global ou difícil de atribuir a um único componente), caso em que os parênteses são omitidos.

**Mensagem do `<corpo>`**

Usar o imperativo no presente "altera" não "alterado" nem "alterações"
inclui motivação para a mudança e contrasta com o comportamento anterior

**Mensagem do `<rodape>`**

Referenciando `issues`

As issues devem ser listadas e separadas por virgula com o prefixo "Closes"

`Closes #234`

Ou

`Closes #123, #245, #992`

## Merge

* **Não reescreva histórico publicado.** O histórico do repositório é valioso a sua maneira e muito importante para permitir dizer *o que realmente aconteceu*.
Alterar histórico publicado é uma fonte comum de problemas para qualquer um que trabalhe no projeto.

* Contudo, há casos em que reescrever o histórico é legítimo. Estes são quando:

* Você é o único trabalhando no branch e não está sendo inspecionado.

* Você quer arrumar seu branch (eg. commits squash ) e/ou realizar rebase dele para o "master" para realizar o merge depois.

Dito isso, *nunca reescreva o histórico do branch "master"* ou quaisquer branchs especiais (ie. usado em produção ou servidores de Integração Contínua).

* Mantenha o histórico *limpo* e *simples*. *Bem antes de realizar o merge* em seu branch:

1. Tenha certeza que está em conformidade com o guia de estilo e realize qualquer ação necessária se não (squash/reordenar seus commits, refazer mensagens etc.)

2. Rebase em outro branch em que será feito:

```shell
[meu-branch] $ git fetch
[meu-branch] $ git rebase origin/master
# então merge
```

Isto resulta em um branch que pode ser diretamente aplicado no final do
branch "master" e resulta em um histórico bem simples.

*(Nota: Esta estratégia é mais adequada para projetos com branches
recentes. Caso contrário é melhor ocasionalmente realizar o merge do
branch "master" em vez de fazer rebase nele.)*

* Se seu branch inclui mais de um commit, não faça merge como um branch avançado:

```shell
# bom - garante que o commit de merge seja criado
$ git merge --no-ff meu-branch

# ruim
$ git merge meu-branch
```

# Licença - Apache 2.0
Esse projeto é OpenSource e aberto para qualquer um contribuir sob a licença *Apache 2.0*, que é compatível com a licença GPL de software livre.

Copyright 2017 Easynvest - Título Corretora de Valores SA, inscrita sob o CNPJ 62.169.875/0001-79

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
