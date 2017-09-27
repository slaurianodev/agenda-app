# Agenda Application
=========================================

### Pre-build and run
Executar as linhas de comando a seguir para atualizar e/ou instalar os pacotes e módulos necessários para o projeto:
$ npm i --save express body-parser react react-dom react-router material-ui react-tap-event-plugin validator
$ npm i --save-dev webpack babel-core babel-loader babel-preset-es2015 babel-preset-react nodemon
$ npm install --save bcrypt jsonwebtoken mongoose passport passport-local

### Rodando a aplicação
Rodar os comandos a seguir em prompts separados para iniciar a aplicação:
$ npm run bundle
$ npm start

A aplicação rodará na porta 3000.

### APIs disponíveis
/auth/signup - endpoint para o criar um usuário
Método: POST
Content-type: application/json
Parametros: name, email, password

/auth/login - endpoint para o login de usuário
Método: POST
Content-type: application/json
Parametros: email, password

/schedules/create - endpoint para criação de um compromisso
Método: POST
Content-type: application/json
Parametros: user_id,title, description, date, local, type

/schedules/findByUser/:userId - endpoint para consulta de compromisso pelo ID do usuário
Método: GET
Parametros: userId

/schedules/update/:scheduleId - endpoint para atualização de um compromisso
Método: PUT
Parâmetros: scheduleId (chave), title, description, date, local, type

/schedules/delete/:scheduleId - endpoint para exclusão de um compromisso
Método: DELETE
Parâmetros: scheduleId (chave)