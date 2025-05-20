# Boilerplate API - Express, TypeScript e TypeORM

## Descrição

Este projeto é um boilerplate para construção de APIs REST utilizando **Express**, **TypeScript** e **TypeORM**, estruturado com base nos princípios da **Clean Architecture** e uma abordagem simplificada de **DDD**.

A organização do código visa alta coesão, baixo acoplamento e separação clara de responsabilidades entre as camadas.

---

## 📁 Estrutura de Pastas

```
src/
├── domain/              # Entidades e contratos (regras de negócio puras)
│   ├── entities/
│   └── repositories/
├── application/         # DTOs e serviços de aplicação (orquestração de casos de uso)
│   ├── dtos/
│   └── services/
├── infrastructure/      # Implementações técnicas (ORM, banco, provedores)
│   └── database/
│       ├── entities/
│       └── repositories/
│   └── web/
│       ├── controllers/
│       ├── middlewares/
│       └── routes/
├── shared/              # Erros, utilitários genéricos
└── main/                # Ponto de entrada da aplicação (server, app)
```

---

## ✅ Princípios e Boas Práticas

- **Separação de camadas**: cada camada conhece apenas a imediatamente inferior.
- **Entidades puras**: sem decorators ou dependência de frameworks.
- **Interfaces (contracts)** para abstração e testabilidade.
- **Inversão de dependência**: serviços dependem de abstrações, não implementações.
- **Controllers leves**: apenas orquestram requisições e respostas.
- **DTOs**: isolam os dados de entrada e saída do sistema.
- **Tratamento centralizado de erros**.

---

## 🚀 Como Usar

1. Instale as dependências:
   ```bash
   npm install
   ```

2. Configure o banco de dados e variáveis no arquivo:
   ```
   src/infrastructure/database/DataSource.ts
   ```

3. Inicie a aplicação:
   ```bash
   npm run dev
   ```

---

## 🧪 Testes

(Em construção) — arquitetura favorece testes unitários por camada devido à inversão de dependência e uso de interfaces.

---

## 🛠️ Tecnologias

- **Node.js**
- **Express**
- **TypeScript**
- **TypeORM**
- **SQLite** (padrão, mas pode ser trocado)
- **ESLint / Prettier**

---

## 📌 Observações

Este projeto serve como base para evolução futura com:
- Injeção de dependências
- Validações com `class-validator`
- Testes com Jest
- Migrations com TypeORM CLI
