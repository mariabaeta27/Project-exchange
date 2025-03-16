<h1 align="center">
 🚗 Sistema de locação e permuta de veículos
</h1>

## 📋 Sumário

- [Descrição](#descrição)
- [Sistema de locação e permuta](#sistema-de-locação-e-permuta-de-veículos)
- [Setup do projeto](#️-setup-do-projeto)
- [Modelagem do banco de dados](#️-modelagem-do-banco-de-dados)
- [Teste](#-rodando-os-testes)

## 📝 Descrição

Este repositorio é um projeto de estudos utilizando o [NestJS](https://docs.nestjs.com/), um framework de Node.js que visa facilitar a criação de aplicações escalaveis de fácil manutenção.
O objeto principal é aprender a utilizar o NestJS, explorando suas funcionalidades e práticas recomendadas, atraves da documentação oficial.
Este projeto visa proporcionar uma experiência prática no desenvolvimento de uma aplicação backend, buscando entender os conceitos fundamentais como:

- [Controllers](https://docs.nestjs.com/controllers);
- [Services](https://docs.nestjs.com/controllers);
- [Modules](https://docs.nestjs.com/modules);
- [Middlewares](https://docs.nestjs.com/modules);
- [Pipes](https://docs.nestjs.com/pipes);
- Entre outros (a adicionar...);

<details>

<summary><strong> 📌 Objetivo</strong></summary>
O intuito do projeto é:

- Aprender a estrutura e os componentes do NestJs;
- Estudar e entender os conceitos de arquitetura;
- Construir uma API simples que será expandida à medida que o aprendizado avança;
- Aplicar boas práticas de desenvolvimento e arquitetura de software utilizando NestJs;
- Explorar o uso de testes unitários e integração no ambiente NestJs.

</details>

<details>

<summary><strong>🛠️ Pré-requisitos</strong></summary>

Antes de começar, certifique-se de ter os seguintes requisitos instalados:

- Node.js (verificar versão...);
- Yarn;
- Banco de dados (a definir...);
- Docker (opcional, para containerização).

</details>

<details>
  <summary><strong>💻 Tecnologias Utilizadas</strong></summary>

- **NestJS:** Framework para construção de aplicação backend com Node.Js;
- **Node.js:** Ambiente de execução JavaScript no lado do servidor;
- **Typescript:** Superset do Javascript utilizado por padrão no NestJs;
- **Express:** Framework HTTP subjacente por padrão do NestJs;
- **BANCO DE DADOS A DEFINIR...**.

</details>

<details>
<summary><strong>🚀 Implementações</strong></summary>

- Implementação de uma API RESTful simples;
- Autenticação e Autorização (JWT, Sessions ou outras abordagens);
- CRUD (Create, Read, Update, Delete) básico para gerenciamento de recursos;
- Validação de dados usando Pipes;
- Documentação da API utilizando Swagger;
- Testes unitários e de integração com Jest;
- Como Rodar o Projeto.

</details>

## Sistema de Locação e Permuta de Veículos

### 📌Objetivo do projeto

Esse sistema tem como objetivo facilitar a locação e permuta de veículos entre motoristas. A aplicação vai permitir que os motoristas aluguem veículos de maneira simples, além de permitir a troca de veículos entre os motoristas de forma segura e controlada.
O sistema gerencia:

- Motoristas;
- Veúlos;
- Transações.

Garantindo que todos os processos de locação e permuta sejam registrados e acompanhandos.

### 🔥 Principais funcionalidades

<details>
<summary><strong>🚀 Cadatro e gerenciamento de motorista</strong></summary>

- [ ] Cadastro de motorista (CRUD);
- [ ] Validar se o documento já está cadastrado;
- [ ] Validar o formato do documento informado.

</details>

<details>
<summary><strong>🚀 Registro e controlo de veículos</strong></summary>

- [ ] Cadastro de veículo (CRUD);
- [ ] Validar se a placa já foi cadastrada;
- [ ] Validar o formato da placa informada.

</details>

<details>
<summary><strong>🚀 Processo de locação</strong></summary>

- [ ] Relacionamento entre Motorista x Veículo (CRUD);
- [ ] Não permitir que um veículo estejá com mais de um motorista;
- [ ] Manter historio das locações;
- [ ] Processo de devolução do veículo.

</details>

<details>
<summary><strong>🚀 Processo de permuta</strong></summary>

- [ ] Permitir o processo de permuta entre os motorista;
- [ ] Não permitir que as locações fiquem sem veículos relacionados

</details>

## 🏗️ Modelagem do Banco de dados

<details>
<summary><strong> 👨‍✈️ Motoristas (drives) </strong></summary>

- Id(PK);
- Nome;
- Cnh;
- Contato;
- Status;
- Data de criação;
- Data da atualização

</details>

<details>
<summary><strong> 🚗 Veículos (vehicles)</strong></summary>

- Id(PK);
- Modelo;
- Placa;
- Disponibilidade;
- Status;
- Data de criação;
- Data da atualização.

</details>

<details>
<summary><strong>🔄 Transações (transactions)</strong></summary>

- Id(PK);
- Id Motorista;
- Id Veículo;
- Data de locação;
- Data de devolução;
- Status;
- Data de criação;
- Data da atualização.

</details>

## ⚙️ Setup do Projeto

1. Clone o repositorio

```bash
git clone <https://github.com/mariabaeta27/Project-exchange.git>
```

2. Acesse a pasta do projeto

```bash
cd Project-exchange
```

3. Instale as dependências

```bash
yarn install
```

4. Configure as variáveis de ambiente

```bash
---
```

5. Rodar as migrations

```bash
---
```

6. Iniciar o servidor

```bash
yarn start ou yarn start:dev
```

7. Acessar a aplicação

```bash
---
```

## 🎯 Rodando os testes

Para executar os testes rode:

```bash
yarn test
```

### Contribuições

Este projeto é puramente para fins de aprendizado. Caso você tenha alguma sugestão ou queria contribuir com melhorias, sinta-se à vontade para abrir um [issue](https://docs.github.com/pt/issues/tracking-your-work-with-issues/about-issues) ou submter um [pull request](https://docs.github.com/pt/desktop/working-with-your-remote-repository-on-github-or-github-enterprise/viewing-a-pull-request-in-github-desktop)
