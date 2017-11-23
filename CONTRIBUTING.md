# Contribuindo

Existem muitos simuladores de Renda Fixa no mercado, mas poucos que fazem a projeção do CDI futuro para calcular os valores dos papéis. Portanto, numa semana de inovação que houve na Easynvest, resolvemos criar um Simulador de Renda Fixa que calculasse o valor dos papéis levando em consideração a projeção de CDI futuro do mercado.

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

Lembre-se de atualizar o CHANGELOG para conseguirmos manter o histórico de evoluções do projeto

Esse projeto é Open Source e aberto para qualquer um contribuir sob a licensa APACHE 2.0.
