# 🎓 Sistema de Controle Acadêmico - Full Stack

Este projeto é um **ecossistema completo para gerenciamento de alunos**, composto por uma **API REST robusta** integrada a uma **Interface Web moderna e reativa**.  

A aplicação permite o controle total de registros acadêmicos, com **validações rigorosas, segurança e atualização em tempo real**.

---

## 🛠️ Tecnologias Utilizadas

### 🔙 Backend (Cérebro)

- **Runtime:** Node.js  
- **Framework:** Express  
- **Banco de Dados:** PostgreSQL (via Docker ou Local)  
- **ORM:** Prisma  
- **Validação:** Zod  
- **Segurança:** Dotenv (variáveis de ambiente + API Key)  
- **Arquitetura:** Controller, Service, Repository  

---

### 🎨 Frontend (Interface)

- **Framework:** React + Vite  
- **Linguagem:** TypeScript  
- **Consumo de API:** Axios  
- **Segurança:** Interceptors com API Key  
- **Arquitetura:** Componentização (Formulário, Tabela, Botões reutilizáveis)  

---

## 🏗️ Arquitetura do Projeto

### 📦 Backend

1. **Routes** → Define os endpoints  
2. **Controllers** → Gerencia requisições HTTP  
3. **Validators (Zod)** → Garante integridade dos dados  
4. **Services** → Lógica de negócio  
5. **Repositories** → Comunicação com banco via Prisma  

---

### 💻 Frontend

- Consumo da API REST  
- Interface reativa  
- Componentes reutilizáveis  

---

## 📁 Estrutura do Projeto

```
/backend   → API e regras de negócio
/frontend  → Interface React
```

---

## 🚀 Como Executar o Projeto

### 1. Clonar o repositório

```bash
git clone https://github.com/SEU_USUARIO/NOME_DO_REPOSITORIO.git
cd crud-de-alunos
```

---

## 🔙 Backend

### 2. Instalar dependências

```bash
cd backend
npm install
```

### 3. Configurar .env

```env
DATABASE_URL="postgresql://usuario:senha@localhost:5432/nome_do_banco?schema=public"
API_KEY="admin123"
```

### 4. Rodar migrations

```bash
npx prisma migrate dev
```

### 5. Iniciar servidor

```bash
npm run dev
```

👉 http://localhost:3000

---

## 💻 Frontend

### 6. Instalar dependências

```bash
cd frontend
npm install
```

### 7. Configurar .env

```env
VITE_API_URL="http://localhost:3000"
VITE_API_KEY="admin123"
```

### 8. Iniciar aplicação

```bash
npm run dev
```

👉 http://localhost:5173

---

## 🛣️ Endpoints da API

| Método | Endpoint      | Descrição            | Protegido |
|--------|--------------|---------------------|----------|
| POST   | /alunos      | Criar aluno         | 🔒 Sim   |
| GET    | /alunos      | Listar alunos       | ❌ Não   |
| GET    | /alunos/:id  | Buscar por ID       | ❌ Não   |
| PUT    | /alunos/:id  | Atualizar aluno     | 🔒 Sim   |
| DELETE | /alunos/:id  | Deletar aluno       | 🔒 Sim   |

---

## 🔒 Segurança

Rotas POST, PUT e DELETE usam **API Key**.

Header obrigatório:

```txt
x-api-key
```

Erro sem chave:

```txt
401 Unauthorized
```

---

## 🔄 Fluxo

1. React envia requisição  
2. Axios injeta API Key  
3. Backend valida com Zod  
4. Service aplica regra  
5. Prisma salva  
6. Front atualiza automaticamente  

---

## 🧪 Testes

Use:

- Postman  
- Insomnia  
- Thunder Client  

---

### Criar aluno

```json
{
  "nome": "João Silva",
  "email": "joao@email.com",
  "matricula": "12345",
  "nota": 8.5
}
```

---

### Atualizar aluno

```json
{
  "nota": 9
}
```

---

## 🛡️ Validações

- Nome mínimo 3 caracteres  
- Email válido e único  
- Matrícula única  
- Nota entre 0 e 10  

---

## 🔒 Funcionalidades

- [x] CRUD completo  
- [x] Arquitetura em camadas  
- [x] Validação com Zod  
- [x] API Key  
- [x] Interface reativa  
- [x] Integração fullstack  

---

## 🚀 Próximos passos

- [ ] Testes (Jest/Vitest)  
- [ ] JWT  
- [ ] Docker  
- [ ] Deploy  

---

## 👨‍💻 Autor

Felype Gallotte  
Desenvolvedor Full Stack 🚀