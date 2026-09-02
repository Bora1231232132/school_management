# School Web – NestJS Backend

This directory will contain the **NestJS API** for the Chea Chanto College web system.

## 🚀 When You're Ready to Start

### Step 1 – Scaffold NestJS inside this folder

```bash
cd backend
npx @nestjs/cli new . --package-manager npm --skip-git
```

### Step 2 – Install PostgreSQL dependencies

```bash
npm install @nestjs/typeorm typeorm pg
npm install @nestjs/config
```

### Step 3 – Uncomment the `api` service in `docker-compose.yml`

Remove the `#` comments from the `api` block in the root `docker-compose.yml`.

### Step 4 – Rebuild and run all services

```bash
docker compose up -d --build
```

The API will be available at: `http://localhost:3000`

---

## 📁 Recommended Project Structure (NestJS)

```
backend/
├── src/
│   ├── app.module.ts        ← Root module
│   ├── main.ts              ← Entry point (listen on port 3000)
│   ├── auth/                ← Authentication module
│   ├── users/               ← Users module
│   ├── students/            ← Students module
│   └── courses/             ← Courses module
├── Dockerfile               ← Already ready ✅
├── package.json
└── tsconfig.json
```

---

## 🔌 Environment Variables (from root `.env`)

| Variable     | Description                |
| ------------ | -------------------------- |
| `DB_HOST`    | Database host (`postgres`) |
| `DB_PORT`    | Database port (`5432`)     |
| `DB_NAME`    | Database name              |
| `DB_USER`    | Database user              |
| `DB_PASS`    | Database password          |
| `NODE_ENV`   | Environment (`production`) |
| `PORT`          | API port (`3000`)                   |
| `JWT_SECRET`    | Secret for JWT tokens               |
| `TLS_CERT_PATH` | Path to TLS/SSL certificate file    |
| `TLS_KEY_PATH`  | Path to TLS/SSL private key file    |
