# Nomad Carrot Market

## Create Project

```bash
npx create-next-app@latest --typescript
```

## tailwind css setup

```bash
npm install -D tailwindcss postcss autoprefixer
```

```bash
npx tailwindcss init -p
```

## Icons

https://heroicons.dev/

## prisma

prisma 설치

```bash
npm install prisma -D
```

초기화

```bash
npx prisma init
```

db push

```bash
npx prisma db push
```

## planet scale

https://app.planetscale.com/

pscale cli

https://planetscale.com/cli

### psacle cli

show region

```bash
pscale region list
```

create database

```bash
pscale database create carrot-market --region ap-south
```

connect database (tunnel)

```bash
pscale connect carrot-market
```
