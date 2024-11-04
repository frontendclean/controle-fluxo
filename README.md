# Controle de fluxo

Esse projeto foi gerado com [Angular CLI](https://github.com/angular/angular-cli) versão 18.2.2.

## Development server

Use `ng serve` iniciar o projeto. Navegue para `http://localhost:4200/`.

## Ajuda

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.


## O que é Controle de fluxo?

Controle de fluxo refere-se à forma como a execução do código é direcionada em uma aplicação. Ele permite que o programa tome decisões, repita instruções e reaja a diferentes condições de acordo com a lógica definida. É uma parte fundamental de qualquer linguagem de programação, pois torna possível a construção de algoritmos que podem responder de forma dinâmica a diferentes inputs e condições.

## neste projeto tratamos os Tipos abaixo de Controle de Fluxo

### 1. Estruturas Condicionais

Essas estruturas permitem que um bloco de código seja executado com base em uma condição booleana.

- Estruturas comuns:
  - if: Executa um bloco de código se a condição for verdadeira.
  - else: Define um bloco de código a ser executado se a condição do if for falsa.

```html
  @if (is_loading) {
    <div>carregando...</div>
  } @else {
    <div>Olá o que vamos criar?</div>
  }
```

### 2. Estruturas de Repetição (Loops)

Essas estruturas permitem que um bloco de código seja executado múltiplas vezes até que uma condição específica seja atendida.

- Tipos comuns de loops:
  - for: Utilizado quando o número de iterações é conhecido.

```html
  @for (item of items; track item.id) {
    {{ item.name }}
  }
```


## Conclusão

Esse código, visa resolver problemas como tratativa de carregamento, erro e retorno de dados. Tornando a aplicação sempre acessível.

O controle de fluxo é crucial para a construção de lógicas complexas e para o funcionamento correto de programas. A escolha de qual estrutura usar depende do problema que você está tentando resolver. Entender como e quando aplicar cada tipo de controle de fluxo é essencial para escrever códigos claros e eficientes.