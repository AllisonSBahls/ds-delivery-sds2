## DS Delivery Semana DevSuperior 2.0
<h1 align="center">
  <br>
  <img src="https://i.imgur.com/bBswAWG.png" alt="DSDelivery" height="250" width="300">
  <br>
</h1>
<p align="center">Sistema de Entrega de Pedidos DevSuperior - https://dsdelivery-bahls.netlify.app/</p>

<p align="center">
  <a href="https://i.imgur.com/wJ1zAkw.jpg">
    <img src="https://i.imgur.com/wJ1zAkw.jpg" alt="Logo" height="255">
  </a>
   <a href="https://i.imgur.com/KlXlvL5.jpg">
    <img src="https://i.imgur.com/KlXlvL5.jpg" alt="Lista de Pedidos" height="255">
  </a>
  <a href="https://i.imgur.com/s7ec2cu.jpg">
    <img src="https://i.imgur.com/s7ec2cu.jpg" alt="Pedidos Detalhados" height="255">
  </a>
</p>

<p align="center">
  <a href="https://i.imgur.com/FLGKEO4.png">
    <img src="https://i.imgur.com/FLGKEO4.png" alt="Página Principal" height="225">
  </a>
   <a href="https://i.imgur.com/ZHGCpKh.png">
    <img src="https://i.imgur.com/ZHGCpKh.png" alt="Pagina de Pedidos" height="225">
  </a>
</p>


### :blush: **Projeto**

O DSDelivery é um sistema de entrega de pedidos construido durante a Semana DevSuperior 2.0 com a ajuda de Nelio Alves e Washington Soares, utilizando tecnologias como Spring Boot, React e React Native. até o momento o projeto  possui funções relacionadas aos pedidos e integração com google maps no mobile e mapbox para web para cadastro de endereço e definir a rota de entrega para o entregador. Obs: A aplicação web pode demorar um pouco carregar a lista de produtos pois a API está implantada no Heroku.

### **Funcionalidades**

Segue logo abaixo as funcionalidades da aplicação.

-   Fazer pedidos
-   Seleção automatizada dos pedidos
-   Calcular valor do pedido
-   Definir endereço de entrega
-   Definir rota de entrega no aplicativo
-   Confirmar entrega
-   Cancelar pedido

### **Tecnologias**

#### Backend

-   Java SDK11
-   Spring Boot
-   JPA/Hibernate
-   PostgreSQL
-   Maven
-   Implantação: Heroku

#### Frontend

-   Typescript
-   React
-   CSS
-   Axios
-   Implantação: Netlify

#### Mobile

-   React Native
-   Expo
-   Typescript

### **Instruções para instalção**

#### 1) Clone

- 1.1) `git clone https://github.com/AllisonSBahls/ds-delivery-sds2`.
- 1.2) `cd ds-delivery-sds2` - cd para entrar na pasta criada.

#### 2) Backend
- 2.1) Abra o Spring Boot Tools para importar o projeto que esta na pasta Backend.
- 2.2) Altera as propriedades em `application.properties` de `spring.profiles.active=prod` para `spring.profiles.active=test`
- 2.3) Execute a aplicação.

        
#### 3) Frontend
- 3.1) Acesse a pasta front-web.
- 3.2) No terminal/CMD dentro da pasta execute o comando `npm install`.
- 3.3) `npm start` a aplicação estará rodando em https://localhost:3000.

#### 4) Mobile
- 4.1) Acesse a pasta front-mobile.
- 4.2) No terminal/CMD execute o compando `npm install`.
- 4.3) Confirme que o Expo está instalado.
- 4.4) Execute `expo start`.
- 4.5) Será aberto uma página com QRCode, escaneie com o celular.

### Autor
Allison Sousa Bahls
<p>https://www.linkedin.com/in/allison-bahls/</p>
