
# Boilerplate API - Express, TypeScript e TypeORM

## Descrição

Boilerplate para API modularizada utilizando Express, TypeScript e TypeORM, baseado na arquitetura MVC tradicional com separação clara de responsabilidades. Inclui organização em camadas de domínio com entities (modelos), repositories para acesso a dados, services para lógica de negócio, controllers para tratamento das requisições, e rotas definidas de forma modular. Foco em código limpo, arquitetura organizada e fácil manutenção.

---

## Estrutura de Pastas

- **src/config/DataSource.ts**  
  Configuração da conexão com o banco de dados usando TypeORM.

- **src/controllers/UserController**  
  Controladores responsáveis por receber as requisições, validar dados e chamar os serviços.

- **src/entities/User**  
  Entidades do banco de dados, modelando as tabelas e suas relações.

- **src/repositories/**  
  Implementação do padrão Repository para acesso e manipulação dos dados.  
  - `IUserRepository`: interface que define os métodos da camada de repositório.  
  - `UserRepository`: implementação concreta da interface.

- **src/routes/UserRoutes**  
  Definição das rotas relacionadas ao recurso usuário, delegando para o controlador.

- **src/services/**  
  Camada de negócio que contém a lógica principal da aplicação.  
  - `IUserService`: interface que define os métodos dos serviços.  
  - `UserService`: implementação concreta.

- **src/shared/errors/**  
  Classes para tratamento de erros customizados, como `AppError` e `NotFoundError`.

- **src/shared/middlewares/ErrorHandler**  
  Middleware global para captura e formatação de erros.

- **src/shared/utils/email**  
  Utilitário para validação de emails (exemplo de utilitário genérico).

- **app.ts**  
  Configuração principal do Express e aplicação dos middlewares e rotas.

- **server.ts**  
  Inicialização do servidor e conexão com o banco de dados.

---

## Como usar

1. Instale as dependências:  
   ```bash
   npm install
   ```

2. Configure as variáveis de ambiente e o banco no arquivo `DataSource.ts`.

3. Inicie a aplicação:  
   ```bash
   npm run dev
   ```

---

## Padrões e Boas Práticas

- Arquitetura modular, com separação clara entre camadas (controller, service, repository).
- Uso de interfaces para garantir contratos entre camadas.
- Tratamento centralizado de erros.
- Código em TypeScript para tipagem estática e melhor manutenção.
- Repositórios isolam acesso a dados, facilitando testes e manutenção.
