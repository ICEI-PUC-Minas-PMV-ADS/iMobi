# Programação de Funcionalidades

<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Especificação do Projeto</a></span>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>, <a href="4-Metodologia.md"> Metodologia</a>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>, <a href="5-Arquitetura da Solução.md"> Arquitetura da Solução</a>

Implementação do sistema descritas por meio dos requisitos funcionais e/ou não funcionais. Deve relacionar os requisitos atendidos os artefatos criados (código fonte) além das estruturas de dados utilizadas e as instruções para acesso e verificação da implementação que deve estar funcional no ambiente de hospedagem.

Para cada requisito funcional, pode ser entregue um artefato desse tipo

|                      |                                                                                |
|----------------------|--------------------------------------------------------------------------------|
| Caso de Teste        | Testar se é possível o novo usuário (cliente e/ou corretor) realizar o seu cadastro.|
| Requisitos Associados| RF-1 - Registro de Usuário: O usuário (cliente e corretor) deve criar uma conta com informações pessoais e de contato.                                                                                                     |
| Objetivo do Teste    | Verificar se o usuário consegue cadastrar suas informações nos respectivos campos.  |
| Passos               |1. Acessar a tela de Cadastro ao acionar o botão "Entrar" na Tela de Início;        | 
|                      |2. Inserir as informações pessoais, de contato e criar uma senha nos seus respectivos campos |                   |                      |3. Verficar se o cadastro foi realizado após o preenchimento de todos os campos.             |
| Créditos de Êxito    | . Validações efetuadas com sucesso                                                           |
|                      | . Após envio dos dados, os mesmos aparecem na conta do usuário                               |

|                      |                                                                                |
|----------------------|--------------------------------------------------------------------------------|
| Caso de Teste        | Testar se é possível realizar o login e logout como usuário cadastrado         |
| Requisitos Associados| RF-2- Autenticação: Os usuários (cliente e corretor) registrados devem fazer login e logout de forma segura no aplicativo.                                                                                                    |
| Objetivo do Teste    | Verificar se o usuário consegue realizar seu login e logout                           |
| Passos  | 1. Acessar a tela de login                                                                          |
|         | 2. Preencher os campos e-mail e senha                                                               |
|         | 3. Acionar o botão Entrar
|         |4. Após conseguir realizar o login, o usuário pode acionar o botão Sair para proceder o seu logout.  |
| Créditos de Êxito | . Login e Logout efetuados com sucesso.                                                   |

|                      |                                                                                |
|----------------------|--------------------------------------------------------------------------------|
| Caso de Teste        | Testar se é possível realizar a busca por imóveis que tenham características selecionadas         |
| Requisitos Associados| RF-3- Pesquisa de Propriedades: Os clientes devem buscar propriedades com base em critérios como compra, locação, localização, tipo, preço, etc.                                                                 |                                 | Objetivo do Teste    | Constatar se o usuário consegue buscar por imóveis, podendo inclusive filtrar entre imóveis para alugar e vender, e selecionar o bairro onde o imóvel esta localizado.                            |
| Passos  | 1. Acessar a tela de início                                                                          |
|         | 2. Selecionar entre Alugar e Comprar                                                               |
|         | 3. Digitar a cidade de interesse no respectivo campo                                               | 
|         |4. Acionar o botão Buscar imóvies para ter acesso aos imóveis cadastrados na categoria desejada.    | 
|         | 5. Também é possível buscar o imóvel clicando diretamente nos botões Apartamentos mais vistos, Imóveis recém-publicados, imóveis com baixas de preço                                                                                     | 
| Créditos de Êxito | . Obter a lista de imóveis cadastrados de acordo com as informações dadas durante a busca. |                                                                                                         

|                      |                                                                                |
|----------------------|--------------------------------------------------------------------------------|
| Caso de Teste        | Testar se é possível para o usuário, visualizar inoformações sobre o imóvel          |
| Requisitos Associados| RF-4- Detalhes da Propriedade: Os clientes podem visualizar informações detalhadas sobre uma propriedade, incluindo fotos, descrição, preço e informações de contato do corretor.                                                               |   | Objetivo do Teste    | Verificar se o usuário consegue visualizar informações sobre o imóvel.                |
| Passos  | 1. Acessar a tela de início                                                                          |
|         | 2. Selecionar entre Alugar e Comprar                                                               |
|         | 3. Digitar a cidade de interesse no respectivo campo                                               | 
|         |4. Acionar o botão Buscar imóvies para ter acesso aos imóveis cadastrados na categoria desejada.    | 
|         | 5. Visualizar a lista de imóveis com as características selecionadas, tendo cada imóvel uma foto, e informações preliminares sobre localização (Bairro, município, Estado), n° de quartos e suítes, e m°²
|         | 6. Clicar em um dos imóveis da lista para ter acesso a mais informações detalhadas sobre o mesmo.
| Créditos de Êxito | . Obter todas as informações do imóvel cadastrado, como: localização, número de quartos, suítes, banheiros, metragem, aluguel ou venda, valor, informações de contato do corretor resposnável. | 








| Caso de Teste | Testar se é possível selecionar a opção Alugar ou Comprar |
| Requisitos Associados| A aplicação deve permitir que somente o usuário logado|
| Objetivo do Teste | A aplicação deve permitir que somente o promoter logado possa cadastrar um novo Evento, e editar um Evento já c |
| Passos | A aplicação deve disponibilizar um campo para comentários e avaliações por nota (0-10) |
| Créditos de Êxito | A aplicação deve disponibilizar um campo para comentários e avaliações por nota (0-10) |

















> **Links Úteis**:
>
> - [Trabalhando com HTML5 Local Storage e JSON](https://www.devmedia.com.br/trabalhando-com-html5-local-storage-e-json/29045)
> - [JSON Tutorial](https://www.w3resource.com/JSON)
> - [JSON Data Set Sample](https://opensource.adobe.com/Spry/samples/data_region/JSONDataSetSample.html)
> - [JSON - Introduction (W3Schools)](https://www.w3schools.com/js/js_json_intro.asp)
> - [JSON Tutorial (TutorialsPoint)](https://www.tutorialspoint.com/json/index.htm)
