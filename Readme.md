### Como rodar o projeto

Rode os comandos:
- npm i
- npm start 

### Como foi pensadao e projetado o desafio

Inicialmente fui pesquisar a fundo o que seria um anagrama, entendido isso, comecei a pensar como resolver este desafio.

### Explicando a principal funcao

Dentro do loop forEach, ele compara cada palavra (word1) com todas as outras palavras (word2) no array. Se o comprimento das duas palavras for diferente, ele pula para a próxima iteração. Caso contrário, ele ordena as letras de cada palavra utilizando as funcoes (split('').sort().join()), e se as letras ordenadas forem iguais entre as duas palavras, então elas são anagramas uma da outra.

Se forem anagramas, ele verifica se as palavras não são idênticas (mesmo objeto), e se não foram já adicionadas como um par de anagramas no array anagramas. Se satisfizerem essas condições, ele cria um objeto.
