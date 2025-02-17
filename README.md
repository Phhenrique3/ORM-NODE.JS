# API com Node.js, Express e Sequelize

Este repositório contém o código de uma API desenvolvida com Node.js, Express e Sequelize. A API é utilizada para gerenciar um sistema de cursos, categorias, pessoas e matrículas.

## Funcionalidades

- **Pessoas**: Gerenciamento de pessoas (estudantes e docentes) com operações de CRUD (criação, leitura, atualização e exclusão).
- **Cursos**: Gerenciamento de cursos com operações de CRUD.
- **Categorias**: Gerenciamento de categorias de cursos com operações de CRUD.
- **Matrículas**: Gerenciamento de matrículas de estudantes em cursos.

## Estrutura do Projeto

- `src/`: Contém o código-fonte da aplicação.
  - `app.js`: Configuração do aplicativo Express.
  - `config/`: Configurações do banco de dados.
  - `controllers/`: Controladores responsáveis por lidar com as requisições e respostas.
  - `migrations/`: Arquivos de migração do banco de dados.
  - `models/`: Definições dos modelos do Sequelize.
  - `routes/`: Definição das rotas da API.
  - `seeders/`: Arquivos para popular o banco de dados com dados iniciais.
  - `services/`: Serviços que contêm a lógica de negócios da aplicação.

## Instalação

1. Clone o repositório:
   ```sh
   git clone <URL_DO_REPOSITORIO>