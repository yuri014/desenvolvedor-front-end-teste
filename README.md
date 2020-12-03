# Vaga efetiva front-end

## Objetivo

- Fazer a codificação do layout proposto (está dentro da pasta layout);
- Entregar o código fonte, junto com a automação para gerar nos ambientes de desenvolvimento e produção;
- Fazer a consulta do JSON (dados.json), e mostrar na tela o resultado (usar Fetch API);
- Se o usuário pesquisar um código que não existe (ex.: QWE-728), mostrar a tela de erro (tem no layout);
- O resultado deve exibir os seguintes dados:
  - Número de ordem (cliente.id) - nome do cliente (cliente.nome)
  - Data do pedido (formato dd/mm/aaaaa)
  - Valor do pedido (formatado em reais e não pode aparecer na versão mobile)
  - Se entregue, colocar 'entregue', se não, colocar 'entregar'

## Obrigatório

- Não usar nenhum framework ou library (ex.: Bootstrap, jQuery e etc...);
- Código Cross-browser (suporte para a última versão de cada browser);
- Escrever o JavaScript em ES6+ (JS Moderno);
- Escrever o HTML da forma mais semântica possível;
- Usar algum pré-processador CSS ([Sass](http://sass-lang.com), [Less](http://lesscss.org), [Stylus](http://stylus-lang.com));
- Utilizar alguma automatização (task runner ou bundler), como por exemplo: [Gulp](http://gulpjs.com), [Grunt](http://gruntjs.com), [webpack](https://webpack.js.org/) ou [NPM Scripts](https://docs.npmjs.com/misc/scripts).

> Seu teste precisa ter um comando de build (ex.: `npm run build`), que gere para uma pasta os arquivos para produção, utilizando alguma ferramenta de automação, sendo da seguinte forma:

- HTML = Minificado;
- CSS = Todos em um único arquivo e minificado;
- JS = Gerar em ES5 e minificado.

## Desenvolvimento

> Comando: `npm i` para instalar as dependências.

> Comando: `npm run dev` para criar um servidor local com Live Reload na porta 9000.

## Produção

> `npm run build` para gerar a build uma única vez na pasta dist. Poderá criar um servidor local para a pasta dist com o comando: `npx serve -s dist`
