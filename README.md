# Requirements
- Node `v19.1.0` or newer
- Docker

# Windows Setup

## Install Node v19.1.0

Use the LTS window installer from https://nodejs.org/en/download/current/

## Install Docker

Use Docker's official setup documentation: https://docs.docker.com/desktop/install/windows-install/

## Install Node packages

Run the command:
```
npm install
```

## Start Docker containers (postgreSQL)

Run the command:
```
docker-compose up -d
```

## Create `.env` file

Run the command:
```
Copy-Item Copy-Item .env.example .env
```

## Create Database

Run the command:
```
npx prisma db push
```