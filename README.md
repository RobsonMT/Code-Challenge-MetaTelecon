# Projeto Fullstack: Angular + Spring Boot + PostgreSQL com Docker Compose

Este projeto consiste em um frontend Angular e um backend em Java (Spring Boot), conectados a um banco de dados PostgreSQL, com tudo orquestrado por Docker Compose.

---

## Pré-requisitos

- Docker instalado
- Docker Compose instalado

---

## Estrutura de Pastas Esperada

```
/
├── backend/
│   ├── src/
│   ├── Dockerfile
│   └── ...
├── frontend/
│   ├── src/
│   ├── Dockerfile
│   └── ...
├── docker-compose.yml
└── README.md
```

---

## Variáveis de Ambiente

O backend Spring Boot depende das seguintes variáveis de ambiente para se conectar ao banco de dados:

Estas já estão configuradas no `docker-compose.yml`, mas caso precise customizar, use:

```env
SPRING_DATASOURCE_URL=jdbc:postgresql://db:5432/clientesdb
SPRING_DATASOURCE_USERNAME=postgres
SPRING_DATASOURCE_PASSWORD=postgres
```

---

## Como Rodar com Docker Compose

### Passo 1: Clone o projeto

```bash
git clone git@github.com:RobsonMT/Code-Challenge-MetaTelecon.git
cd Code-Challenge-MetaTelecon
```

### Passo 2: Suba os containers

```bash
docker-compose up --build
```

O comando acima irá:

- Criar e iniciar o banco de dados PostgreSQL
- Construir o backend Java e expor na porta `8080`
- Construir o frontend Angular e expor na porta `4200`

---

## Acessos

- **Frontend Angular**: http://localhost:4200
- **Backend Spring Boot (API REST)**: http://localhost:8080
- **Banco PostgreSQL**: localhost:5432 (usuário: postgres, senha: postgres, banco: clientesdb)

## Para Parar os Containers

```bash
docker-compose down
```

---

## Para Rodar o Projeto sem Docker (opcional)

### Backend

```bash
cd backend
./mvnw spring-boot:run
```

### Frontend

```bash
cd frontend
npm install
ng serve
```
