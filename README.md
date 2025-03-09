# Amigosecreto
Este é um projeto simples de Amigo Secreto desenvolvido com HTML, CSS e JavaScript. Ele permite que você organize um sorteio de amigo secreto de forma digital, inserindo os nomes dos participantes e visualizando os resultados.

## Funcionalidades
*   **Adicionar Participantes:**
    *   Insira o nome de um amigo no campo de texto.
    *   Clique no botão "Adicionar" para adicionar o nome à lista de participantes.
*   **Validação de Entrada:**
    *   O programa exibe um alerta caso você tente adicionar um nome vazio.
*   **Lista de Participantes:**
    *   Os nomes dos participantes são exibidos em uma lista abaixo do campo de entrada.
*   **Sorteio Individual:**
    *   Clique no botão "Sortear Amigo" para realizar o sorteio.
    *   **Você verá apenas quem você tirou como amigo secreto.**
*   **Mostrar Sorteio Completo:**
    *   Clique no botão "Mostrar Sorteio" para revelar o sorteio completo, mostrando quem tirou quem.
    *   **Atenção:** Esta funcionalidade revela o sorteio para todos que estão visualizando a página. Use com cautela!

## Como Usar

1.  Clone este repositório para o seu computador.
2.  Abra o arquivo `index.html` em seu navegador.
3.  Comece a adicionar os nomes dos participantes do amigo secreto.
4.  Após adicionar todos os nomes, clique no botão "Sortear Amigo" para descobrir quem você tirou.
5.  Se desejar, clique em "Mostrar Sorteio" para revelar o sorteio completo para todos os participantes.

## Tecnologias Utilizadas

*   HTML
*   CSS
*   JavaScript

## Estrutura do Projeto

*   `index.html`: Arquivo HTML principal que contém a estrutura da página.
*   `style.css`: Arquivo CSS que contém os estilos da página.
*   `app.js`: Arquivo JavaScript que contém a lógica da aplicação.
*   `assets/amigo-secreto.png`: Imagem do banner.
*   `assets/play_circle_outline.png`: Imagem do botão sortear (poderia ser removido).

## Considerações

*   **Privacidade:** Este projeto é executado no lado do cliente (no navegador). Os dados dos participantes não são armazenados em nenhum servidor.
*   **Responsabilidade:** A funcionalidade "Mostrar Sorteio Completo" revela os resultados do sorteio para todos. Use-a com responsabilidade e apenas quando todos os participantes estiverem prontos para ver os resultados.

## Melhorias Futuras

*   Adicionar funcionalidades para compartilhar os resultados do sorteio de forma privada (por exemplo, enviando e-mails individuais para cada participante).
*   Permitir a definição de restrições (por exemplo, impedir que membros da família tirem uns aos outros).
*   Melhorar a interface do usuário e a experiência do usuário.
*   Implementar a persistência dos dados utilizando `localStorage` para que os nomes dos amigos não precisem ser digitados novamente a cada vez que a página for carregada.

## Contribuição

Contribuições são bem-vindas! Se você tiver alguma sugestão de melhoria, correção de bug ou nova funcionalidade, sinta-se à vontade para abrir um issue ou enviar um pull request.
