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

#### TypeScript Review + Avançado (1h)
- **Conceitos avançados:** Generics, Utility Types, Conditional Types
- **Tipos práticos:** Pick, Omit, Partial, Record
- **Inferência:** typeof, keyof, template literals
- **Configuração:** tsconfig.json para projetos modernos

#### Next.js com TypeScript (1h)
- **Conceitos:** SSR vs CSR vs SSG
- **Tipos específicos:** GetServerSideProps, GetStaticProps, NextApiRequest
- **Routing:** File-based routing, dynamic routes tipados
- **API Routes:** Endpoints type-safe

#### GraphQL + TypeScript (1h)
- **Conceitos:** Query, Mutation, Subscription
- **Schema:** Types, Resolvers tipados
- **CodeGen:** Auto-geração de tipos
- **Vantagens sobre REST:** Type safety end-to-end

### 🌆 Tarde (4h) - Prática
**Exercício 1:** CRUD Express + TypeScript (1h)
```bash
# Setup rápido
mkdir ts-crud-practice && cd ts-crud-practice
npm init -y
npm install express cors
npm install -D typescript @types/express @types/cors @types/node ts-node nodemon
npx tsc --init
```

```typescript
// Objetivos do exercício:
// 1. Tipos para entidades (User, Product)
// 2. Interfaces para Request/Response
// 3. Utility types (Pick, Omit, Partial)
// 4. Generics para funções de CRUD
// 5. Middleware tipado
// 6. Error handling tipado

// Implementar:
// GET    /api/users      - Listar usuários
// GET    /api/users/:id  - Buscar por ID
// POST   /api/users      - Criar usuário
// PUT    /api/users/:id  - Atualizar usuário
// DELETE /api/users/:id  - Deletar usuário
```

**Exercício 2:** Next.js + TypeScript (1.5h)
```bash
npx create-next-app@latest blog-app --typescript --tailwind
```
- Página home com SSG tipada
- Página de posts com SSR + tipos corretos
- API route type-safe
- Props e componentes tipados

**Exercício 3:** GraphQL Schema + Types (1.5h)
- Apollo Server com TypeScript
- Schema com tipos bem definidos
- Resolvers tipados
- Testar no playground
- Setup básico do GraphQL CodeGen

### 🌙 Noite (1h) - Revisão
- Utility types mais úteis (Pick, Omit, Partial)
- Tipos específicos do Next.js
- Como GraphQL + TypeScript = type safety completa

---

## 📅 DIA 2 - Back-end com Prisma e Postgres

### 🌅 Manhã (3h) - Teoria
**Foco:** Prisma ORM e PostgreSQL

#### Prisma + TypeScript (2h)
- **Conceitos:** ORM type-safe, Schema, Migrations
- **Prisma Client:** Queries totalmente tipadas
- **Types:** Auto-geração de tipos TypeScript
- **Prisma Studio:** Interface visual + intellisense

#### PostgreSQL (1h)
- **Diferenças do MySQL:** Tipos de dados, comandos
- **Relacionamentos:** Foreign keys, joins
- **Performance:** Indexes, query optimization

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

**Exercício 2:** Modelagem de dados
- Criar schema Prisma (User, Post, Category)
- Definir relacionamentos (1:N, N:N)
- Gerar e executar migration
- Explorar dados no Prisma Studio

**Exercício 3:** CRUD completo
- Implementar todas operações básicas
- Queries com filtros e relações
- Transações simples

### 🌙 Noite (1h) - Revisão
- Comparar Prisma com ORMs tradicionais
- Como Prisma gera tipos TypeScript automaticamente
- Comandos essenciais do Prisma

---

## 📅 DIA 3 - GraphQL + Prisma Integration

### 🌅 Manhã (3h) - Teoria
**Foco:** Integração GraphQL com banco de dados

#### GraphQL + Prisma + TypeScript (2h)
- **Type Safety End-to-End:** DB → GraphQL → Frontend
- **Resolvers:** Conectar schema tipado com Prisma Client
- **CodeGen:** Tipos automáticos para queries e mutations
- **Validação:** Input types, custom scalars

#### BFF Conceito (1h)
- **O que é:** Backend for Frontend
- **Quando usar:** Casos práticos
- **GraphQL como BFF:** Vantagens reais

### 🌆 Tarde (4h) - Prática
**Exercício 1:** GraphQL Server com Prisma (2h)
- Apollo Server + Prisma setup
- Schema básico (User, Post)
- Resolvers para CRUD
- Testar no GraphQL Playground

**Exercício 2:** Mutations avançadas (1h)
- CreatePost com relacionamento
- UpdatePost com validações
- DeletePost com verificações

**Exercício 3:** Next.js Client (1h)
- Apollo Client setup
- Consumir queries no componente
- Formulário com mutation
- Loading e error states

### 🌙 Noite (1h) - Revisão
- Fluxo completo: Next.js → GraphQL → Prisma → PostgreSQL
- Vantagens desta arquitetura

---

## 📅 DIA 4 - Docker e CI/CD Básico

### 🌅 Manhã (3h) - Teoria
**Foco:** Containerização e deploy

#### Docker (2h)
- **Conceitos:** Container vs VM, imagens
- **Dockerfile:** Multi-stage builds
- **Docker Compose:** Múltiplos serviços
- **Produção:** Otimizações básicas

#### CI/CD Essencial (1h)
- **GitHub Actions:** Conceito e estrutura
- **Pipeline simples:** Build e test
- **Environment variables:** Configuração

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

### 🌅 Manhã (3h) - Projeto Mini Blog
**Objetivo:** Integrar tudo que aprendeu em um projeto simples

**Funcionalidades mínimas:**
- Listar posts (SSG)
- Ver detalhes do post (SSR)
- Criar novo post via API
- GraphQL + Prisma + PostgreSQL

**Foco:** Fazer funcionar, não perfeito

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

### 🎯 Meta Final (Realista):
- [ ] Projeto simples funcionando (Next.js + GraphQL + Prisma + PostgreSQL)
- [ ] Entender conceitos-chave: SSR/SSG, BFF, Docker
- [ ] Saber explicar vantagens de cada tecnologia
- [ ] Conseguir implementar CRUD básico em GraphQL
- [ ] Confiança nas tecnologias que você já domina (React, TypeScript, Node.js)

---

## 🔗 Recursos Importantes

### Documentações:
- [Next.js Docs](https://nextjs.org/docs)
- [GraphQL Learn](https://graphql.org/learn/)
- [Prisma Docs](https://www.prisma.io/docs)
- [PostgreSQL Tutorial](https://www.postgresql.org/docs/)

### Ferramentas:
- Docker Desktop
- PostgreSQL Client (DBeaver)
- Insomnia/Postman (GraphQL)
- VS Code + extensões

### Comandos Essenciais:
```bash
# TypeScript
tsc --noEmit  # Check types
npm run type-check

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