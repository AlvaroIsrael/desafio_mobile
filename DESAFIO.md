# Desafio Mobile indWise

## Desafio 0 - Git básico
Faça um fork deste repositório e comece a trabalhar com seu código! Pode utilizar o framework mobile de sua preferência (Nativo, flutter, react-native, ionic, etc)...

O projeto deve ser compilado através de um comando descrito no README.md do projeto. Seja ele baseado em npm, ou um .sh para compilação direta.

## Desafio 1 - Estrutura básica

Crie um aplicativo vazio que possua um menu e duas telas separadas. As telas podem conter qualquer coisa, porém devem ser visivelmente diferentes.

## Desafio 2 - API e dados

Em uma das telas adicione um botão de requisitar dados. Ao clicar o aplicativo irá acessar a API do github, e baixaxr os últimos releases do repositório do sails.js. Link para a API do repositório:

``https://api.github.com/repos/balderdashy/sails``

Baixe as últimas 10 releases e liste o ``tagName`` e a ``createdAt``. A data de createdAt deve ser mostrada no furo-horário America/Sao_Paulo ou fuso horário do dispositivo.

# Desafio 3 - Banco interno

Na outra tela, crie um banco de dados de comentários em SQLite. Que deve terá as seguintes colunas: tagName (digitável) e comentário (digitável).

O banco precisa ter as operações:
* Criar
* Apagar
* Editar
