# Programação de Funcionalidades

<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Especificação do Projeto</a></span>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>, <a href="4-Metodologia.md"> Metodologia</a>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>, <a href="5-Arquitetura da Solução.md"> Arquitetura da Solução</a>

Implementação do sistema descritas por meio dos requisitos funcionais e/ou não funcionais. Deve relacionar os requisitos atendidos os artefatos criados (código fonte) além das estruturas de dados utilizadas e as instruções para acesso e verificação da implementação que deve estar funcional no ambiente de hospedagem.

Para cada requisito funcional, pode ser entregue um artefato desse tipo

Nesta seção são apresentadas as telas desenvolvidas para cada uma das funcionalidades do sistema com a atribuição dos requisitos atendidos.

1. Tela de Login 
Através desta tela de Login, o usuário pode fazer login e logout de forma segura no aplicativo.

Requisitos atendidos: 
RF–01: Autenticação: Os usuários (cliente e corretor) registrados devem fazer login e logout de forma segura no aplicativo.

![alt text](/docs/img/loginwire.jpg)
##### *Figura 2 - tela de login*

2. Tela de Início 

Tela que permite ao usuário pesquisar por propriedades com base em critérios como: compra, locação e localização, inclusive pode também aplicar filtros nas categorias: Apartamentos mais vistos, imóveis recém publicados, imóveis com baixas de preço. Além disso, o usuário já pode vuisualizar alguns anúncios de imóveis disponíveis nesta tela.

![alt text](/docs/img/w1.jpg)
##### *Figura 1 - tela de Iício*

Requisitos atendidos: 
RF-03: Pesquisa de Propriedades: Os clientes devem buscar propriedades com base em critérios como compra, locação, localização, tipo, preço, etc.

3. Tela de Cadastro

Tela que permite o registro de usuário: O usuário (cliente e corretor) pode criar uma conta com informações pessoais e de contato, e gerenciar sua conta através da edição e atualização de suas informações.

![alt text](/docs/img/w5.jpg)
##### *Figura 3 - tela de cadastro*

Requisitos atendidos: 
RF–01: Registro de Usuário: O usuário (cliente e corretor) deve criar uma conta com informações pessoais e de contato.
RF-08: Gerenciamento de Perfil: Os usuários (cliente e corretor) podem editar e atualizar suas informações de perfil, incluindo foto e informações de contato.

4. Tela Usuário

Tela que mostra as informações do usuário logado (nome, e-mail, local onde exerce a função de corretor de imóveis) e possibiilita a edição e atualização dos seus dados.

![alt text](/docs/img/w3.jpg)
##### *Figura 4 - tela de usúario*

Requisitos atendidos: 
RF-08: Gerenciamento de Perfil: Os usuários (cliente e corretor) podem editar e atualizar suas informações de perfil, incluindo foto e informações de contato.

5. Tela Feed

Tela que exibe todos os imóveis já cadastrados com uma foto, e informações sobre n° de quartos, suítes, banheiros, metragem, e se esta disponível para alugar ou comprar, e valor. Além disso, o usuário pode filtrar a busca através dos filtros disponíveis (pretensão - Alugar ou Comprar, tipo - apartamento ou casa, e bairro).

![alt text](/docs/img/w4.jpg)
##### *Figura 5 - tela de feed*

RF-03:Pesquisa de Propriedades: Os clientes devem buscar propriedades com base em critérios como compra, locação, localização, tipo, preço, etc.
RF-05: Favoritos: Os clinetes podem marcar propriedades como favoritas para acessá-las facilmente mais tarde.

   
> **Links Úteis**:
>
> - [Trabalhando com HTML5 Local Storage e JSON](https://www.devmedia.com.br/trabalhando-com-html5-local-storage-e-json/29045)
> - [JSON Tutorial](https://www.w3resource.com/JSON)
> - [JSON Data Set Sample](https://opensource.adobe.com/Spry/samples/data_region/JSONDataSetSample.html)
> - [JSON - Introduction (W3Schools)](https://www.w3schools.com/js/js_json_intro.asp)
> - [JSON Tutorial (TutorialsPoint)](https://www.tutorialspoint.com/json/index.htm)
