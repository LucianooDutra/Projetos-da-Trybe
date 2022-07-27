# Entregáveis

<details>
  <summary><strong>👨‍💻 O que deverá ser desenvolvido</strong></summary><br />

  Foi desenvolvido um app de receitas, utilizando o que há de mais moderno dentro do ecossistema React: Hooks e Context API!

  Nele será possível: ver, buscar, filtrar, favoritar e acompanhar o progresso de preparação de receitas e drinks!

  ⚠️ A base de dados serão 2 APIs distintas, uma para comidas e outra para bebidas.

  ![image](https://res.cloudinary.com/drdpedroso/image/upload/c_scale,w_400/v1575815877/Screenshot_2019-12-08_at_11.37.25_kzt7rl.png)
</details>

<details>
  <summary><strong>:memo: Habilidades</strong></summary><br />

  Nesse projeto, você será capaz de:

  - Utilizar a Context API do _React_ para gerenciar estado
  - Utilizar o _React Hook useState_
  - Utilizar o _React Hook useContext_
  - Utilizar o _React Hook useEffect_
  - Criar Hooks customizados
</details>

# Requisitos

Nesse projeto, a pessoa que estiver utilizando o app pode procurar uma receita específica, explorar receitas baseado em diferentes critérios, favoritar e fazer as receitas, entre outras funcionalidades.

As telas sofrem variações dependendo do tipo da receita (se é comida ou bebida, no caso).

## Testes unitários

### 1 - Desenvolva os testes unitários de maneira que a cobertura seja de, no mínimo, 90%
<br />
<details>
  <summary><strong>Observações técnicas</strong></summary>

  * Neste requisito vamos cobrir a nossa aplicação com testes unitários/integração utilizando a biblioteca [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/), aproveite essa oportunidade para colocar em prática o [Desenvolvimento Orientado por Testes](https://blog.betrybe.com/tecnologia/tdd-test-driven-development/)

  * Lembre-se de que no Desenvolvimento Orientado por Testes, você deve escrever os testes junto com o desenvolvimento de novas funcionalidades. Por esse motivo, este requisito só passará no avaliador enquanto sua aplicação estiver com a cobertura de testes desejada. Caso você adicione uma nova funcionalidade e não crie os testes para ela, este requisito pode parar de passar no avaliador.

  * Os testes criados por você não irão influenciar os outros requisitos no avaliador. Você deverá desenvolver seus testes unitários/integração usando a biblioteca React Testing Library, enquanto o avaliador usará a biblioteca [Cypress](https://docs.cypress.io/) para avaliar os requisitos, inclusive os de cobertura.

</details>
---

## Tela de login

### 2 - Crie todos os elementos que devem respeitar os atributos descritos no protótipo para a tela de login

<details>
  <summary><strong>Observações técnicas</strong></summary>

  * O input de email deve possuir o atributo `data-testid="email-input"`;
  * O input de senha deve possuir o atributo `data-testid="password-input"`;
  * O botão "Enter" deve possuir o atributo `data-testid="login-submit-btn"`.
</details>

---

### 3 - Desenvolva a tela de maneira que a pessoa consiga escrever seu email no input de email e sua senha no input de senha

---

### 4 - Desenvolva a tela de maneira que o formulário só seja válido após um email válido e uma senha de mais de 6 caracteres serem preenchidos

>Este requisito também inclui testes de cobertura da página `Login.js`.

<br /><details>
  <summary><strong>Observações técnicas</strong></summary>

  * O formulário só fica válido após um email válido e uma senha de mais de 6 caracteres serem preenchidos;
  * Caso o formulário esteja inválido, o botão de submeter deve estar desativado, contendo a propriedade `disabled`;
  * Caso o formulário esteja válido, o botão de submeter deve estar ativado, não contendo a propriedade `disabled`.
</details>

---

### 5 - Após a submissão do formulário, salve no localStorage o e-mail da pessoa usuária na chave `user` e os tokens nas chaves `mealsToken` e `cocktailsToken`

<br /><details>
  <summary><strong>Observações técnicas</strong></summary>

  * Após a submissão, o e-mail de pessoa usuária deve ser salvo em `localStorage` na chave `user` no formato `{ email: email-da-pessoa }`.
  * Para os tokens, o valor de teste é sempre `1`.
</details>

---

### 6 - Redirecione a pessoa usuária para a tela principal de receitas de comidas após a submissão e validação com sucesso do login

>Este requisito também inclui testes de cobertura da página `Login.js`.

---

## Header

### 7 - Implemente o header de acordo com a necessidade de cada tela

<br /><details>
  <summary><strong>Observações técnicas</strong></summary>

  * O Header deve ter os seguintes elementos: 
    * Ícone de perfil com o data-testid `profile-top-btn`, que deverá estar sempre presente;
    * Ícone de pesquisa com o data-testid `search-top-btn`, que deverá estar presente somente em alguma páginas (conforme a lista abaixo);
    * Título da página com o data-testid `page-title`, que deverá estar sempre presente.
  * Os ícones podem ser encontrados em `src/images/profileIcon.svg` e em `src/images/searchIcon.svg`.
  * Cada página deverá ter seu próprio título, que será renderizado pelo Header.
  * Todas as rotas serão verificadas, portanto, crie as rotas que ainda não foram criadas.
</details>

---

### 8 - Redirecione a pessoa usuária para a tela de perfil ao clicar no botão de perfil

>Este requisito também inclui testes de cobertura do componente `Header.js`.

---

### 9 - Desenvolva o botão de busca que, ao ser clicado, a barra de busca deve aparecer. O mesmo serve para escondê-la

>Este requisito também inclui testes de cobertura do componente `Header.js`.

<br /><details>
  <summary><strong>Observações técnicas</strong></summary>
  
  * O input de busca deve possuir o atributo `data-testid="search-input"`
</details>

---

## Barra de busca - Header

### 10 - Implemente os elementos da barra de busca respeitando os atributos descritos no protótipo

<br /><details>
  <summary><strong>Observações técnicas</strong></summary>

  * Deve existir os data-testids tanto na barra de busca quanto em todos os radio-buttons.
  * O radio button de busca de ingrediente deve possuir o atributo `data-testid="ingredient-search-radio"`;
  * O radio button de busca por nome deve possuir o atributo `data-testid="name-search-radio"`;
  * O radio button de busca da primeira letra deve possuir o atributo `data-testid="first-letter-search-radio"`.
  * O botão de busca deve possuir o atributo `data-testid="exec-search-btn"`
</details>

---

### 11 - Implemente 3 radio buttons na barra de busca: Ingredient, Name e First letter

<br /><details>
  <summary><strong>Observações técnicas</strong></summary>

  * A barra de busca deve possuir 3 _radio buttons_: `Ingredient`, `Name` e `First letter`. Eles, em conjunto com a `search-input`, devem mudar a forma como serão filtradas as receitas após clicar no botão `Search`.  Os _endpoints_ da API que você deve usar podem ser consultados [aqui para a API de comidas](https://www.themealdb.com/api.php) e [aqui para a API de bebidas](https://www.thecocktaildb.com/api.php).
  * Se o radio selecionado for `Ingredient`, a busca na API é feita corretamente pelo ingrediente. O endpoint utilizado deve ser `https://www.themealdb.com/api/json/v1/1/filter.php?i={ingrediente}`;
  * Se o radio selecionado for `Name`, a busca na API é feita corretamente pelo nome. O endpoint utilizado deve ser `https://www.themealdb.com/api/json/v1/1/search.php?s={nome}`;
  * Se o radio selecionado for `First letter`, a busca na API é feita corretamente pela primeira letra. O endpoint utilizado deve ser `https://www.themealdb.com/api/json/v1/1/search.php?f={primeira-letra}`;
  * Se o radio selecionado for `First letter` e a busca na API for feita com mais de uma letra, deve-se exibir um `alert` com a mensagem "Your search must have only 1 (one) character".
  * :bulb: **Exemplo: Ao selecionar `Ingredient` e buscar por `chicken`, deve-se utilizar o endpoint `https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken`.**

  :bulb: **Atenção:** Utilize `global.alert` para evitar os `warnings` do eslint sobre o uso de `alert` no código.<br />
  :bulb: Observação: Para esse requisito será verificada apenas a tela principal de receitas de comidas.
</details>

---

### 12 - Busque na API de comidas caso a pessoa esteja na página de comidas, e na API de bebidas caso esteja na de bebidas

>Este requisito também inclui testes de cobertura do componente `SearchBar.js`.

<br /><details>
  <summary><strong>Observações técnicas</strong></summary>

  * Na tela de bebidas, se o radio selecionado for `Ingredient`, a busca na API é feita corretamente pelo ingrediente. O endpoint utilizado deve ser `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i={ingrediente}`;
  * Na tela de bebidas, se o radio selecionado for `Name`, a busca na API é feita corretamente pelo nome. O endpoint utilizado deve ser `https://www.thecocktaildb.com/api/json/v1/1/search.php?s={nome}`;
  * Na tela de bebidas, se o radio selecionado for `First letter`, a busca na API é feita corretamente pela primeira letra. O endpoint utilizado deve ser `https://www.thecocktaildb.com/api/json/v1/1/search.php?f={primeira-letra}`;
  * Na tela de bebidas, se o radio selecionado for `First letter` e a busca na API for feita com mais de uma letra, deve-se exibir um `alert` com a mensagem "Your search must have only 1 (one) character".

  :bulb: Observação: Para esse requisito será verificada apenas a tela principal de receitas de bebidas, pois a de comidas já foi verificada no requisito anterior.
</details>

---

### 13 - Redirecione para a tela de detalhes da receita caso apenas uma receita seja encontrada, com o ID da mesma na URL

<br /><details>
  <summary><strong>Observações técnicas</strong></summary>

  * Caso apenas uma comida seja encontrada, deve-se ir para sua rota de detalhes (`/foods/{id-da-receita}`);
  * Caso apenas uma bebida seja encontrada, deve-se ir para sua rota de detalhes (`/drinks/{id-da-receita}`).
</details>

---

### 14 - Mostre as receitas em cards, caso mais de uma receita seja encontrada

<br /><details>
  <summary><strong>Observações técnicas</strong></summary>

  * Mostre as receitas em cards como as da tela principal, caso mais de uma receita seja encontrada.
  * Cada card deve conter o `data-testid="${index}-recipe-card"`.
  * Cada imagem deve conter o `data-testid="${index}-card-img"`.
  * Cada tag com o nome da receita deve ter o `data-testid="${index}-card-name"`.
  * Caso mais de uma bebida seja encontrada, mostrar as 12 primeiras (ou menos, se não houverem 12).
</details>

---

### 15 - Exiba um `alert` caso nenhuma receita seja encontrada

>Este requisito também inclui testes de cobertura do componente `SearchBar.js`.

<br /><details>
  <summary><strong>Observações técnicas</strong></summary>

  * O alert deve conter o texto "Sorry, we haven't found any recipes for these filters."
</details>

---

## Menu inferior

### 16 - Implemente o menu inferior posicionando-o de forma fixa e contendo 2 ícones: um para comidas e outro para bebidas

>Este requisito também inclui testes de cobertura do componente `Footer.js`.
  
<br /><details>
  <summary><strong>Observações técnicas</strong></summary>

  * Todos os ícones necessários estão disponíveis na pasta `src/images`;
  * O menu inferior deve ter possuir o atributo `data-testid="footer"`;
  * O elemento que leva para a página de bebidas deve usar o ícone `drinkIcon.svg` e possuir o atributo `data-testid="drinks-bottom-btn"`;
  * O elemento que leva para a página de comidas deve usar o ícone `mealIcon.svg` e possuir o atributo `data-testid="food-bottom-btn"`;
  * O menu inferior deve ficar fixado sempre ao final da página.
</details>

---

### 17 - Exiba o menu inferior apenas nas telas indicadas pelo protótipo

<br /><details>
  <summary><strong>Observações técnicas</strong></summary>

* Todas as rotas serão verificadas, portanto, crie as rotas que ainda não foram criadas.
</details>

---

### 18 - Redirecione a pessoa usuária para a tela correta ao clicar em cada ícone no menu inferior

>Este requisito também inclui testes de cobertura do componente `Footer.js`.

---

## Tela principal de receitas

### 19 - Carregue as 12 primeiras receitas de comidas ou bebidas, uma em cada card

<br /><details>
  <summary><strong>Observações técnicas</strong></summary>

  * Caso as receitas sejam de comida, deve-se carregar as 12 primeiras receitas obtidas através do endpoint `https://www.themealdb.com/api/json/v1/1/search.php?s=`
  * Caso as receitas sejam de bebida, deve-se carregar as 12 primeiras receitas obtidas através do endpoint `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=`
  * O card deve ter o `data-testid="${index}-recipe-card"`
  * A foto (`strMealThumb` ou `strDrinkThumb`) deve ter o `data-testid="${index}-card-img"`
  * O nome (`strMeal` ou `strDrink`) deve ter o `data-testid="${index}-card-name"`
</details>

---

### 20 - Implemente os botões de categoria para serem utilizados como filtro

>Este requisito também inclui testes de cobertura da página `Recipes.js`.

<details>
  <summary><strong>Observações técnicas</strong></summary>

  * Cada botão deve conter o atributo prefixado `data-testid=${categoryName}-category-filter` e devem ser exibidas apenas as 5 primeiras categorias retornadas da API.
  * Caso as receitas sejam de comida, deve-se exibir as 5 primeiras categorias de comida obtidas por meio do endpoint `https://www.themealdb.com/api/json/v1/1/list.php?c=list`;
  * Caso as receitas sejam de bebida, deve-se exibir as 5 primeiras categorias de bebida obtidas por meio do endpoint `https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`.
</details>

---

### 21 - Implemente o filtro das receitas por meio da API ao clicar no filtro de categoria

<br /><details>
  <summary><strong>Observações técnicas</strong></summary>

  * As receitas, filtradas por categorias, devem ser obtidas por meio da API de [comidas](https://www.themealdb.com/api.php) ou [bebidas](https://www.thecocktaildb.com/api.php). Deve-se utilizar para as duas API's os endpoints de `Filter by Category`.
  * Na tela de comidas se a categoria selecionada for `Beef` o endpoint utilizado será `https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef`
  * Na tela de bebidas se a categoria selecionada for `Cocktail` o endpoint utilizado será `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail`
  * Além das categorias providas pela API, vamos adicionar também um botão que deve limpar os filtros, retornando novamente todas as receitas. Esse botão deve ter o texto **"All"** e o atributo `data-testid="All-category-filter"`.
  * Caso a categoria retorne apenas um resultado, **NÃO** deve ser feito o redirecionamento para a página de detalhes.
</details>

---

### 22 - Implemente o filtro como um toggle, o qual se for selecionado novamente, o app deve retornar as receitas sem nenhum filtro

---

### 23 - Redirecione a pessoa usuária ao clicar no card para a tela de detalhes, que deve mudar a rota e conter o id da receita na URL
 >Este requisito também inclui testes de cobertura da página `Recipes.js`.

<br /><details>
  <summary><strong>Observações técnicas</strong></summary>

  * Caso a receita seja de uma comida, a pessoa deve ser redirecionada para a rota `foods/{id-da-receita}`
  * Caso a receita seja de uma bebida, a pessoa deve ser redirecionada para a rota `drinks/{id-da-receita}`
</details>

---

## Tela de detalhes de uma receita

### 24 - Realize uma request para a API passando o `id` da receita que deve estar disponível nos parâmetros da URL

<details>
  <summary><strong>Observações técnicas</strong></summary>

  * Para verificar se a requisição para a API de comidas foi realizada, o endpoint utilizado deve ser `https://www.themealdb.com/api/json/v1/1/lookup.php?i={id-da-receita}`;
  * Para verificar se a requisição para a API de bebidas foi realizada, o endpoint utilizado deve ser `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i={id-da-receita}`.
</details>

---

### 25 - Desenvolva a tela de modo que contenha uma imagem da receita, o título, a categoria em caso de comidas e se é ou não alcoólico em caso de bebidas, uma lista de ingredientes seguidos pelas quantidades, instruções, um vídeo do youtube "embedado" e recomendações

<details>
  <summary><strong>Observações técnicas</strong></summary>

  A verificação será feita por meio das receitas retornadas pela API, como por exemplo: o texto dos ingredientes e das instruções, a partir dos atributos data-testids:

  * A foto deve possuir o atributo `data-testid="recipe-photo"`;
  * O título deve possuir o atributo `data-testid="recipe-title"`;
  * O texto da categoria deve possuir o atributo `data-testid="recipe-category"`;
  * Os ingredientes devem possuir o atributo `data-testid="${index}-ingredient-name-and-measure"`;
  * O texto de instruções deve possuir o atributo `data-testid="instructions"`;
  * O vídeo, presente somente na tela de comidas, deve possuir o atributo `data-testid="video"`;
  * O card de receitas recomendadas deve possuir o atributo `data-testid="${index}-recomendation-card"`;
  
  Lembre-se: O vídeo do youtube só deve estar disponível para receitas de comida, visto que não é retornado pela [API de bebidas](https://www.thecocktaildb.com/api.php).
  
  :bulb: Dica: Faça uma busca sobre `how to embed youtube video` veja algumas sugestões de pesquisa para te ajudar na construção do código.

</details>

---

### 26 - Implemente as recomendações. Para receitas de comida, a recomendação deverá ser bebida, já para as receitas de bebida a recomendação deverá ser comida

<details>
  <summary><strong>Observações técnicas</strong></summary>

  * Para verificar se a requisição para a API de bebidas foi realizada, o endpoint utilizado deve ser `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=`;
  * Para verificar se a requisição para a API de comidas foi realizada, o endpoint utilizado deve ser `https://www.themealdb.com/api/json/v1/1/search.php?s=`.
</details>

---

### 27 - Implemente os 6 cards de recomendação, mostrando apenas 2. O scroll é horizontal, similar a um `carousel`

<details>
  <summary><strong>Observações técnicas</strong></summary>

  * Verificar se existem todas as recomendações na tela de detalhes de uma comida. Lembre-se que apenas as 6 primeiras bebidas devem ser exibidas;
  * Verifica se existem todas as recomendações na tela de detalhes de uma bebida. Lembre-se que apenas as 6 primeiras comidas devem ser exibidas.
</details>

---

### 28 - Desenvolva um botão de nome "Start Recipe" que deve ficar fixo na parte de baixo da tela o tempo todo

<br /><details>
  <summary><strong>Observações técnicas</strong></summary>

  * O botão de iniciar receita deve possuir o atributo `data-testid="start-recipe-btn"`;
</details>

---

### 29 - Implemente a solução de forma que, caso a receita já tenha sido feita, o botão "Start Recipe" desapareça

>Este requisito também inclui testes de cobertura da página `RecipeDetails.js`.

<br /><details>
  <summary><strong>Observações técnicas</strong></summary>

</details>

---

### 30 - Implemente a solução de modo que, caso a receita tenha sido iniciada mas não finalizada, o texto do botão deve ser "Continue Recipe"

<br /><details>
  <summary><strong>Observações técnicas</strong></summary>

</details>

---

### 31 - Redirecione a pessoa usuária caso o botão "Start Recipe" seja clicado, a rota deve mudar para a tela de receita em progresso

---

### 32 - Implemente um botão de compartilhar e um de favoritar a receita

<br /><details>
  <summary><strong>Observações técnicas</strong></summary>

  * O botão de compartilhar deve possuir o atributo `data-testid="share-btn"`;
  * O botão de favoritar deve possuir o atributo `data-testid="favorite-btn"`;
</details>

---

### 33 - Implemente a solução de forma que, ao clicar no botão de compartilhar, o link da receita dentro do app deve ser copiado para o clipboard e uma mensagem avisando que o link foi copiado deve aparecer

<br /><details>
  <summary><strong>Observações técnicas</strong></summary>

  * O ícone do botão de compartilhar pode ser encontrado em `src/images/shareIcon.svg`.
  * Para esse requisito você precisará usar a biblioteca clipboard-copy. Para mais informações, consulte a [documentação da biblioteca](https://www.npmjs.com/package/clipboard-copy)
</details>

---

### 34 - Salve as receitas favoritas no `localStorage` na chave `favoriteRecipes`

---

### 35 - Implemente o ícone do coração (favorito) de modo que: deve vir preenchido caso a receita esteja favoritada e "despreenchido" caso contrário

---

### 36 - Implemente a lógica no botão de favoritar. Caso seja clicado, o ícone do coração deve mudar seu estado atual, caso esteja preenchido deve mudar para "despreenchido" e vice-versa

>Este requisito também inclui testes de cobertura da página `RecipeDetails.js`.

---

## Tela de receita em progresso

### 37 - Desenvolva a tela de modo que contenha uma imagem da receita, o título, a categoria em caso de comidas e se é ou não alcoólico em caso de bebidas, uma lista de ingredientes com suas respectivas quantidades e instruções

<details>
  <summary><strong>Observações técnicas</strong></summary>

  Verifica se os atributos data-testid estão presentes na tela com suas respectivas quantidades:

  * A foto deve possuir o atributo `data-testid="recipe-photo"`;
  * O título deve possuir o atributo `data-testid="recipe-title"`;
  * O botão de compartilhar deve possuir o atributo `data-testid="share-btn"`;
  * O botão de favoritar deve possuir o atributo `data-testid="favorite-btn"`;
  * O texto da categoria deve possuir o atributo `data-testid="recipe-category"`;
  * Os ingredientes devem possuir o atributo `data-testid=${index}-ingredient-step`, a verificação será feita pelo length do atributo.
  * O elemento de instruções deve possuir o atributo `data-testid="instructions"`;
  * O botão para finalizar a receita deve possuir o atributo `data-testid="finish-recipe-btn"`.
</details>

---

### 38 - Desenvolva um checkbox para cada item da lista de ingredientes

---

### 39 - Implemente uma lógica que ao clicar no checkbox de um ingrediente, o nome dele deve ser "riscado" da lista

>Este requisito também inclui testes de cobertura da página `RecipeInProgress.js`.

---

### 40 - Salve o estado do progresso, que deve ser mantido caso a pessoa atualize a página ou volte para a mesma receita

---

### 41 - Desenvolva a lógica de favoritar e compartilhar. A lógica da tela de detalhes de uma receita se aplica aqui

---

### 42 - Implemente a solução de modo que o botão de finalizar receita ("Finish Recipe") só pode estar habilitado quando todos os ingredientes estiverem _"checkados"_ (marcados)

<br /><details>
  <summary><strong>Observações técnicas</strong></summary>
  
  * O botão deve ficar desabilitado enquanto todos os checkboxs não forem marcados. 
  * O botão deve ficar fixo na parte de baixo da tela o tempo todo, semelhante ao botão de "Start Recipe".
</details>

---

### 43 - Redirecione a pessoa usuária após clicar no botão de finalizar receita ("Finish Recipe"), para a página de receitas feitas, cuja rota deve ser `/done-recipes`
 
>Este requisito também inclui testes de cobertura da página `RecipeInProgress.js`.

---

## Tela de receitas feitas

### 44 - Implemente os elementos da tela de receitas feitas respeitando os atributos descritos no protótipo

<br /><details>
  <summary><strong>Observações técnicas</strong></summary>

  * Todos os data-testids estão presentes:
    * O botão de filtro `All` deve ter o atributo `data-testid="filter-by-all-btn"`;
    * O botão de filtro `Food` deve ter o atributo `data-testid="filter-by-food-btn"`;
    * O botão de `Drinks` deve ter o atributo `data-testid="filter-by-drink-btn"`;
    * O imagem do card de receita deve ter o atributo `data-testid="${index}-horizontal-image"`;
    * O texto da categoria da receita deve ter o atributo `data-testid="${index}-horizontal-top-text"`;
    * O texto do nome da receita deve ter o atributo `data-testid="${index}-horizontal-name"`;
    * O texto da data que a receita foi feita deve ter o atributo `data-testid="${index}-horizontal-done-date"`;
    * O elemento de compartilhar a receita deve ter o atributo `data-testid="${index}-horizontal-share-btn"`;
    * As `tags` da receita devem possuir o atributo `data-testid=${index}-${tagName}-horizontal-tag`;
</details>

---

### 45 - Desenvolva a tela de modo que, caso a receita do card seja uma comida, ela deve possuir: a foto da receita,  nome, categoria, nacionalidade, a data em que a pessoa fez a receita, as 2 primeiras tags retornadas pela API e um botão de compartilhar

<br /><details>
  <summary><strong>Observações técnicas</strong></summary>
  
  * O ícone do botão de compartilhar pode ser encontrado em `src/images/shareIcon.svg`.
</details>

---

### 46 - Desenvolva a tela de maneira que, caso a receita do card seja uma bebida, ela deve possuir: a foto da receita, o nome, se é alcoólica, a data em que a pessoa fez a receita e um botão de compartilhar

>Este requisito também inclui testes de cobertura da página `DoneRecipes.js`.

---

### 47 - Desenvolva a solução de modo que o botão de compartilhar deve copiar a URL da tela de detalhes da receita para o clipboard

---

### 48 - Implemente 2 botões que filtram as receitas por comida ou bebida e um terceiro que remove todos os filtros

<br /><details>
  <summary><strong>Observações técnicas</strong></summary>

  * Os nomes dos botões devem ser "Food", "Drinks" e "All", respectivamente.
  * Ao clicar no botão "Food", as receitas devem ser filtradas por comidas;
  * Ao clicar no botão "Drinks", as receitas devem ser filtradas por bebidas;
  * Ao clicar no botão "All", o filtro deve ser removido.
</details>

---

### 49 - Redirecione para a tela de detalhes da receita caso seja clicado na foto ou no nome da receita

>Este requisito também inclui testes de cobertura da página `DoneRecipes.js`.

---

## Tela de receitas favoritas

### 50 - Implemente os elementos da tela de receitas favoritas (cumulativo com os atributos em comum com a tela de receitas feitas), respeitando os atributos descritos no protótipo

---

### 51 - Desenvolva a tela de modo que, caso a receita do card seja uma comida, ela deve possuir: a foto da receita,  nome, categoria, nacionalidade, um botão de compartilhar e um de "desfavoritar"

<br /><details>
  <summary><strong>Observações técnicas</strong></summary>
  
  * Os ícones dos botões podem ser encontrados em `src/images/shareIcon.svg` e em `src/images/blackHeartIcon.svg`, respectivamente.
</details>

---

### 52 - Desenvolva a tela de modo que, caso a receita do card seja uma bebida, ela deve possuir: a foto da receita,  nome, se é alcoólica ou não, um botão de compartilhar e um de "desfavoritar"
>Este requisito também inclui testes de cobertura da página `FavoriteRecipes.js`.

<br /><details>
  <summary><strong>Observações técnicas</strong></summary>
  
  * Os ícones dos botões podem ser encontrados em `src/images/shareIcon.svg` e em `src/images/blackHeartIcon.svg`, respectivamente.
</details>

---

### 53 - Desenvolva a solução de modo que o botão de compartilhar deve copiar a URL da tela de detalhes da receita para o clipboard

---

### 54 - Desenvolva a solução de modo que o botão de "desfavoritar" deve remover a receita da lista de receitas favoritas do `localStorage` e da tela

---

### 55 - Implemente 2 botões que filtram as receitas por comida ou bebida e um terceiro que remove todos os filtros

---

### 56 - Redirecione a pessoa usuária ao clicar na foto ou no nome da receita, a rota deve mudar para a tela de detalhes daquela receita
>Este requisito também inclui testes de cobertura da página `FavoriteRecipes.js`.

---



## Tela de perfil

### 57 - Implemente os elementos da tela de perfil respeitando os atributos descritos no protótipo

<br /><details>
  <summary><strong>Observações técnicas</strong></summary>

  * O elemento de email deve possuir o atributo `data-testid="profile-email"`;
  * O botão para "Done Recipes" deve possuir o atributo `data-testid="profile-done-btn"`;
  * O botão para "Favorite Recipes" deve possuir o atributo `data-testid="profile-favorite-btn"`;
  * O botão de "Logout" deve possuir o atributo `data-testid="profile-logout-btn"`.
</details>

---

### 58 - Implemente a solução de maneira que o e-mail da pessoa usuária deve estar visível

---

### 59 - Implemente 3 botões: um de nome "Done Recipes", um de nome "Favorite Recipes" e um de nome "Logout"

---

### 60 - Redirecione a pessoa usuária que, ao clicar no botão de "Done Recipes", a rota deve mudar para a tela de receitas feitas

>Este requisito também inclui testes de cobertura do componente `Profile.js`.

---

### 61 - Redirecione a pessoa usuária que, ao clicar no botão de "Favorite Recipes", a rota deve mudar para a tela de receitas favoritas

---

### 62 - Redirecione a pessoa usuária que ao clicar no botão de "Logout", o `localStorage` deve ser limpo e a rota deve mudar para a tela de login

>Este requisito também inclui testes de cobertura do componente `Profile.js`.

