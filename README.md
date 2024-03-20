<h1 align="center">Back End Vaquinha</h1>
<h4 align="center">
	Developing...  🚧
</h4>

## 💻 About

Description

---

## 🚀 How it works

### Pre-requisites

Before you begin, you will need to have the following tools installed on your machine:
<a href="https://git-scm.com">Git</a>, <a href="">NPM</a>, <a href="https://nodejs.org/en/">Node.js</a>, <a href="https://docs.nestjs.com/cli/overview">NestJS</a>.

#### Running the application

```bash
# Install the dependencies
npm install

# Run the application in development mode
npm run start:dev
```

---

## ⚙️ Configuration

- Create a .env file in the project root directory.
- Copy the contents of the .env.example file to the new .env file.

## ⚒️ Tech Stack

The following tools were used in the construction of the project:

- [NestJS](https://nestjs.com/)
- [PostgreSQL](https://www.postgresql.org/)
- [JWT](https://jwt.io/)
- [Swagger](https://swagger.io/)
- [TypeORM](https://typeorm.io/)

---

## ✒️ Rotas

#### Example:

POST /api/v1/usuarios/cadastrar
Cadastra um novo usuário.

#### Corpo da requisição:

{
nome: string
email: string
senha: string
}

Response:
usuario: objeto com as informações do usuário cadastrado

## Documentation

Run the application and paste in your browser:
http://localhost:3000/api/
