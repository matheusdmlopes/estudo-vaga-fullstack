# 📚 Roteiro de Estudo - 5 Dias para Entrevista Full Stack Júnior

**Entrevista:** 07/07  
**Objetivo:** Dominar tecnologias essenciais para a vaga

## 🎯 Estratégia Geral
- **Manhã (3h):** Teoria e conceitos fundamentais
- **Tarde (4h):** Prática hands-on e exercícios
- **Noite (1h):** Revisão e documentação do aprendizado

---

## 📅 DIA 1 - TypeScript + Next.js + GraphQL Básico

### 🌅 Manhã (3h) - Teoria
**Foco:** TypeScript avançado e Next.js

#### TypeScript Essencial (1h)
- **Review básico:** Tipos primitivos, interfaces, arrays
- **Utility types simples:** Partial, Pick (só esses dois)
- **Função tipada:** Parâmetros e retorno
- **Configuração:** tsconfig.json básico

#### Next.js Básico (1h)
- **Diferença do React:** O que é SSR vs SPA
- **Páginas:** Como criar páginas simples
- **Roteamento:** Navegação entre páginas
- **API Routes:** Conceito básico

#### GraphQL Introdução (1h)
- **O que é:** Query language para APIs
- **Diferença do REST:** Um endpoint, buscar só o que precisa
- **Schema básico:** Tipos e queries simples
- **Playground:** Como testar queries

### 🌆 Tarde (4h) - Prática
**Exercício 1:** TypeScript Básico (1h)
```typescript
// Exercício simples para relembrar TypeScript:

// 1. Tipos básicos (15min)
interface User {
  id: number;
  name: string;
  email: string;
}

// 2. Função tipada (15min)
function getUser(id: number): User | null {
  // implementar busca simples
}

// 3. Utility type simples (15min)
type CreateUser = Pick<User, 'name' | 'email'>; // Só nome e email
type UpdateUser = Partial<User>; // Todos opcionais

// 4. Array tipado (15min)
const users: User[] = [];
function addUser(user: CreateUser): User {
  // implementar
}
```

**Exercício 2:** Next.js Simples (1.5h)
```bash
npx create-next-app@latest meu-app --typescript
```
- Criar página "About" simples
- Navegar entre Home e About
- Criar uma API route que retorna JSON
- Entender estrutura de pastas

**Exercício 3:** GraphQL Playground (1.5h)
- Instalar Apollo Server simples
- Criar schema básico (só User)
- 1 query: buscar usuários
- 1 mutation: criar usuário
- Testar no GraphQL Playground

### 🌙 Noite (1h) - Revisão
- O que é TypeScript e por que usar
- Next.js vs React: principais diferenças
- GraphQL vs REST: conceito básico

---

## 📅 DIA 2 - Back-end com Prisma e Postgres

### 🌅 Manhã (3h) - Teoria
**Foco:** Prisma básico e PostgreSQL

#### Prisma Introdução (2h)
- **O que é:** ORM moderno, substitui SQL
- **Schema:** Como definir tabelas em arquivo
- **Prisma Client:** Como fazer queries
- **Vantagens:** Tipos automáticos, fácil de usar

#### PostgreSQL Básico (1h)
- **O que é:** Banco de dados relacional
- **Diferenças do MySQL:** Conceito geral
- **Docker:** Como rodar Postgres local

### 🌆 Tarde (4h) - Prática
**Exercício 1:** Setup do ambiente
```bash
# Docker Postgres
docker run --name postgres-dev -e POSTGRES_PASSWORD=dev123 -p 5432:5432 -d postgres

# Projeto Node.js + Prisma
npm init -y
npm install prisma @prisma/client
npx prisma init
```

**Exercício 2:** Schema Simples (1.5h)
- Criar modelo User básico (id, name, email)
- Rodar primeira migration
- Ver no Prisma Studio
- Entender como funciona

**Exercício 3:** CRUD Básico (1.5h)
- Create: Criar usuário
- Read: Buscar todos os usuários
- Update: Atualizar um usuário
- Delete: Deletar usuário

### 🌙 Noite (1h) - Revisão
- Comparar Prisma com ORMs tradicionais
- Como Prisma gera tipos TypeScript automaticamente
- Comandos essenciais do Prisma

---

## 📅 DIA 3 - GraphQL + Prisma Integration

### 🌅 Manhã (3h) - Teoria
**Foco:** Conectar GraphQL com Prisma

#### GraphQL + Prisma (2h)
- **Resolvers:** Como conectar GraphQL com banco
- **Queries:** Buscar dados do Prisma
- **Mutations:** Criar/editar dados via GraphQL
- **Integração:** Apollo Server + Prisma Client

#### BFF Conceito (1h)
- **O que é:** API específica para o frontend
- **Por que usar:** Otimizar dados para cada tela
- **Exemplo prático:** Quando é útil

### 🌆 Tarde (4h) - Prática
**Exercício 1:** Conectar GraphQL + Prisma (2h)
- Apollo Server + Prisma juntos
- Resolver para buscar usuários do banco
- Mutation para criar usuário no banco
- Testar tudo no Playground

**Exercício 2:** Queries Funcionando (1h)
- Query que busca usuários do Prisma
- Mutation que cria usuário no Prisma
- Verificar que dados estão sendo salvos

**Exercício 3:** Next.js Consumindo API (1h)
- Criar página que chama a API GraphQL
- Mostrar lista de usuários
- Formulário para criar usuário

### 🌙 Noite (1h) - Revisão
- Fluxo completo: Next.js → GraphQL → Prisma → PostgreSQL
- Vantagens desta arquitetura

---

## 📅 DIA 4 - Docker e CI/CD Básico

### 🌅 Manhã (3h) - Teoria
**Foco:** Containerização e deploy

#### Docker Básico (2h)
- **O que é:** Containers, por que usar
- **Docker vs VM:** Conceito geral
- **Dockerfile:** Como criar uma imagem
- **Docker Compose:** Rodar múltiplos containers

#### CI/CD Conceito (1h)
- **O que é:** Integração e deploy contínuo
- **GitHub Actions:** Automação básica
- **Pipeline:** Build automático quando faz push

### 🌆 Tarde (4h) - Prática
**Exercício 1:** Dockerizar aplicação (2h)
```dockerfile
# Dockerfile para Next.js
# Dockerfile para API Node.js
# docker-compose.yml completo
```

**Exercício 2:** Testes básicos (1h)
- Setup Jest simples
- Teste de componente React
- Teste de resolver GraphQL
- `npm test` funcionando

**Exercício 3:** GitHub Actions (1h)
- Workflow básico: install, build, test
- Rodar em push/PR
- Badge no README

### 🌙 Noite (1h) - Revisão
- Comandos Docker essenciais
- Como funciona o pipeline CI/CD

---

## 📅 DIA 5 - Projeto Integrado e Review

### 🌅 Manhã (3h) - Projeto Simples
**Objetivo:** Juntar tudo que aprendeu

**Funcionalidades SUPER simples:**
- Página que lista usuários (vem do banco)
- Formulário para adicionar usuário
- GraphQL + Prisma + PostgreSQL funcionando

**Foco:** Fazer funcionar, mesmo que simples

### 🌆 Tarde (4h) - Implementação Sprint
**Timebox rigoroso:**
1. **Setup (30min):** Projeto + Docker + Prisma
2. **Backend (1.5h):** GraphQL API completa
3. **Frontend (1.5h):** Next.js páginas principais
4. **Integração (30min):** Conectar tudo + testes

### 🌙 Noite (1h) - Simulação de Entrevista

#### Perguntas Principais (que você DEVE saber responder):
1. **"Explique seu projeto e as tecnologias usadas"**
2. **"Qual a diferença entre SSR e SSG? Quando usar cada um?"**
3. **"Por que GraphQL ao invés de REST API?"**
4. **"Como o Prisma facilita o trabalho com banco de dados?"**
5. **"Mostre como você dockerizou a aplicação"**
6. **"Como você organizaria esse projeto para produção?"**

#### Demonstração Prática:
- Mostrar o projeto funcionando
- Explicar uma query GraphQL
- Mostrar migration do Prisma
- Explicar pipeline CI/CD

---

## 📝 Checklist Diário

### ✅ Ao Final de Cada Dia:
- [ ] Conceitos teóricos dominados
- [ ] Exercícios práticos concluídos
- [ ] Código commitado no GitHub
- [ ] Anotações e dúvidas documentadas
- [ ] Próximo dia planejado

### 🎯 Meta Final (Realista para Júnior):
- [ ] Conseguir explicar o que é cada tecnologia
- [ ] Demonstrar 1 projeto simples funcionando
- [ ] Entender quando usar Next.js vs React
- [ ] Saber por que GraphQL é útil
- [ ] Mostrar que consegue aprender tecnologias novas

---

## 📚 Documentações por Dia

### 📅 DIA 1 - TypeScript + Next.js + GraphQL
**TypeScript:**
- [TypeScript Handbook](https://www.typescriptlang.org/docs/) - Documentação oficial
- [TypeScript Cheat Sheet](https://www.typescriptlang.org/cheatsheets) - Resumo rápido
- [Utility Types](https://www.typescriptlang.org/docs/handbook/utility-types.html) - Pick, Partial, etc.

**Next.js:**
- [Next.js Documentation](https://nextjs.org/docs) - Documentação completa
- [Getting Started](https://nextjs.org/docs/getting-started) - Tutorial inicial
- [Pages and Routing](https://nextjs.org/docs/basic-features/pages) - Sistema de páginas
- [API Routes](https://nextjs.org/docs/api-routes/introduction) - Criar APIs

**GraphQL:**
- [GraphQL Introduction](https://graphql.org/learn/) - Aprenda GraphQL
- [GraphQL Queries](https://graphql.org/learn/queries/) - Como fazer queries
- [Apollo Server Docs](https://www.apollographql.com/docs/apollo-server/) - Servidor GraphQL

### 📅 DIA 2 - Prisma + PostgreSQL
**Prisma:**
- [Prisma Documentation](https://www.prisma.io/docs) - Documentação completa
- [Getting Started](https://www.prisma.io/docs/getting-started) - Primeiros passos
- [Prisma Schema](https://www.prisma.io/docs/concepts/components/prisma-schema) - Como definir modelos
- [Prisma Client](https://www.prisma.io/docs/concepts/components/prisma-client) - Como fazer queries

**PostgreSQL:**
- [PostgreSQL Tutorial](https://www.postgresql.org/docs/current/tutorial.html) - Tutorial oficial
- [Docker PostgreSQL](https://hub.docker.com/_/postgres) - Imagem oficial Docker

### 📅 DIA 3 - GraphQL + Prisma Integration
**Apollo Server + Prisma:**
- [Apollo Server with Prisma](https://www.apollographql.com/docs/apollo-server/data/resolvers/) - Resolvers
- [Prisma GraphQL](https://www.prisma.io/docs/concepts/overview/prisma-in-your-stack/graphql) - Integração

**Apollo Client (Next.js):**
- [Apollo Client Docs](https://www.apollographql.com/docs/react/) - Cliente React
- [Next.js with Apollo](https://nextjs.org/docs/basic-features/data-fetching/get-server-side-props#using-apollo-client) - Integração

### 📅 DIA 4 - Docker + CI/CD
**Docker:**
- [Docker Get Started](https://docs.docker.com/get-started/) - Tutorial oficial
- [Dockerfile Reference](https://docs.docker.com/engine/reference/builder/) - Como criar Dockerfile
- [Docker Compose](https://docs.docker.com/compose/) - Múltiplos containers

**GitHub Actions:**
- [GitHub Actions Docs](https://docs.github.com/en/actions) - Documentação completa
- [Workflow Syntax](https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions) - Como escrever workflows

### 📅 DIA 5 - Projeto Integrado
**Referências Gerais:**
- [Full Stack TypeScript](https://www.typescriptlang.org/docs/handbook/react.html) - TS + React
- [Next.js Examples](https://github.com/vercel/next.js/tree/canary/examples) - Projetos exemplo

## 🛠️ Ferramentas e Extensões

### Essenciais:
- [VS Code](https://code.visualstudio.com/) - Editor recomendado
- [Docker Desktop](https://www.docker.com/products/docker-desktop/) - Para containers
- [Node.js](https://nodejs.org/) - Runtime JavaScript

### VS Code Extensions:
- [TypeScript Hero](https://marketplace.visualstudio.com/items?itemName=rbbit.typescript-hero)
- [Prisma](https://marketplace.visualstudio.com/items?itemName=Prisma.prisma)
- [GraphQL](https://marketplace.visualstudio.com/items?itemName=GraphQL.vscode-graphql)
- [Docker](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-docker)

### Clientes de API:
- [GraphQL Playground](https://github.com/graphql/graphql-playground) - Testar GraphQL
- [Insomnia](https://insomnia.rest/) - Cliente REST/GraphQL
- [Postman](https://www.postman.com/) - Alternativa popular

### Banco de Dados:
- [Prisma Studio](https://www.prisma.io/studio) - Interface visual (vem com Prisma)
- [DBeaver](https://dbeaver.io/) - Cliente PostgreSQL
- [pgAdmin](https://www.pgadmin.org/) - Administração PostgreSQL

### Comandos Essenciais:
```bash
# TypeScript
tsc --noEmit  # Check types
npm run type-check
npx tsc --init
ts-node file.ts

# Prisma
npx prisma generate
npx prisma db push
npx prisma studio

# GraphQL CodeGen
npm run codegen

# Next.js
npm run dev
npm run build

# Docker
docker-compose up -d
docker logs container-name
```

---

## 💡 Dicas para Sucesso

### 🚨 Prioridades se o tempo ficar apertado:
1. **DIA 1:** Next.js essencial (SSR/SSG + rotas)
2. **DIA 2:** Prisma + CRUD básico (core da vaga)
3. **DIA 3:** GraphQL básico funcionando
4. **DIAS 4-5:** Integração simples + Docker conceitual

### 💡 Plano B (se ficar muito puxado):
- **Reduzir para 6h/dia** com foco no essencial
- **Pular Docker/CI/CD** e focar só no desenvolvimento
- **Projeto final:** Super simples (só CRUD funcionando)

### 🎯 Focos na Entrevista:
- **Demonstre** que você entende os conceitos, mesmo que não tenha decorado sintaxe
- **Explique** por que escolheu cada tecnologia
- **Mostre** type safety end-to-end (destaque forte do TypeScript)
- **Evidencie** que você consegue aprender rápido (já domina a base: React, Node.js, etc.)

### ⚠️ Não se cobre demais:
- **Clean Architecture:** Conheça o conceito, não precisa implementar perfeitamente
- **TDD:** Entenda o valor, saiba o básico de testes
- **CI/CD:** Conceito + exemplo simples é suficiente

**Lembre-se:** Você já tem uma base sólida! O objetivo é completar seu toolkit com as tecnologias específicas da vaga. 