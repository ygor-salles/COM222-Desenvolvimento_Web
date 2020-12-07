<template>
  <div id="app">

    <div class="titleContainer">
      <h1>{{ currentPage }}</h1>
    </div> 

    <div class="loginContainer">
      <div id="formCadastro" v-if="formCadastroAtivo">
        <form id="cadastrarNovoUsuario">

          <label for="firstName">Nome:</label>
          <input type="text" class="inputText" id="firstName" name="firstName" value="" v-model="firstName"><br><br>

          <label for="lastName">Sobrenome:</label>
          <input type="text" class="inputText" id="lastE-mailName" name="lastName" value="" v-model="lastName"><br><br>

          <label for="email">E-mail:</label>
          <input type="email" class="inputText" id="email" name="email" value="" v-model="email"><br><br>

          <label for="userName">Nome de usuário:</label>
          <input type="text" class="inputText" id="userName" name="userName" value="" v-model="userName"><br><br>

          <label for="password">Senha:</label>
          <input type="password" class="inputText" id="passwordInput" name="password" value="" v-model="password"><br><br>
          <input type="button" class="showPasswordButton" value="👁️" v-on:mousedown="showPassword" v-on:mouseup="hidePassword"><br><br>

          <label for="type">Curso:</label>
          <select v-model="typeSelected">
            <option v-for="type in types" :key="type.id">
              {{ type.text }}
            </option>
          </select>

          <div v-if="typeSelected === 'Outro'">
            <br><br>
            <label for="outroCurso">Nome do curso:</label>
            <input type="text" class="inputText" id="outroCurso" name="outroCurso" value="">
          </div>

          <br><br><hr>
          <input type="button" class="inputButton" value="Cadastrar" v-on:click="realizarCadastro"><br>
          <input type="button" class="inputButton" value="Já sou cadastrado" v-on:click="goToLogin"><br>
        </form> 
      </div>

      <div id="formLogin" v-if="formLoginAtivo">
        <form id="loginUsuario">

          <label for="userName">Usuário/E-mail:</label>
          <input type="text" class="inputText" id="userName" name="userName" value="" v-model="userNameLogin"><br><br>

          <label for="password">Senha:</label>
          <input type="password" class="inputText" id="passwordInput" name="password" value="" v-model="passwordLogin"><br><br>
          <input type="button" class="showPasswordButton" value="👁️" v-on:mousedown="showPassword" v-on:mouseup="hidePassword"><br><br><hr>

          <input type="button" class="inputButton" value="Login" v-on:click="loginProcess"><br>
          <input type="button" class="inputButton" value="Criar nova conta" v-on:click="goToCadastro"><br>
          <input type="button" class="inputButton" value="Esqueci minha senha" v-on:click="goToSenha"><br>

        </form>
      </div>

      <div id="formSenha" v-if="formSenhaAtivo">
        <form id="senhaUsuario">

          <a v-on:click="goToLogin">← Voltar</a><br><br>

          <label for="userName">Usuário/E-mail:</label>
          <input type="text" class="inputText" id="userName" name="userName" value="" v-model="userNameSenha"><br><br><hr>

          <input type="button" class="inputButton" value="Confirmar" v-on:click="recuperarSenha"><br>

        </form>
      </div>
    </div>

    <transition name="fadeIn">
      <div class="dataCadastro" v-if="camposInvalidos.length > 0">
        <h1>Erro no cadastro</h1>
          <ul>
            <li v-for="(item, index) in camposInvalidos" :key="index">
              {{ item }}
            </li>
          </ul>
      </div>
    </transition>

    <transition name="fadeIn">
      <div class="dataCadastro" v-if="cadastradoSucesso">
        <h1>Cadastrado</h1>
        <p>Um e-mail de confirmação foi enviado para {{ emailConfirmacao }}</p>
      </div>
    </transition>

    <transition name="fadeIn">
      <CaixaMensagemSenha class="dataCadastro" :msgSenha=mensagemSenhaSaida v-if="mensagemSenha"/>
    </transition>

  </div>
</template>

<script>
import CaixaMensagemSenha from './components/CaixaMensagemSenha.vue'

export default {
  name: 'App',
  components: {
    CaixaMensagemSenha
  },
  props: {

  },
  data: function() {
    return {

      formLoginAtivo: false,
      formCadastroAtivo: true,
      formSenhaAtivo: false,
      cadastradoSucesso: false,

      firstName: '',
      lastName: '',
      email: '',
      userName: '',
      password: '',
      typeSelected: '',
      outroCurso: '',
      emailConfirmacao: '',
      types: [
        { text: 'Ciência da Computação' },
        { text: 'Engenharia da Computação' },
        { text: 'Sistemas de Informação' },
        { text: 'Outro' }
      ],

      userNameSenha: '',

      userNameList: ['mcavalca'],
      emailList: ['mcavalca@email.com'],
      userList: [ {
        nome: "Marcelo",
        sobrenome: "Cavalca",
        email: 'mcavalca@email.com',
        username: 'mcavalca',
        senha: "12345",
        curso: 'Ciência da Computação'
      } ],
      
      camposInvalidos: [],

      currentPage: 'Cadastro',

      mensagemSenha: ''

    }
  },
  methods: {

    goToLogin: function () {
      this.formLoginAtivo = true,
      this.formCadastroAtivo = false,
      this.formSenhaAtivo = false,
      this.cadastradoSucesso = false,
      this.clearFields(),
      this.currentPage = 'Login'
    },

    goToCadastro: function () {
      this.formLoginAtivo = false,
      this.formCadastroAtivo = true,
      this.formSenhaAtivo = false,
      this.cadastradoSucesso = false,
      this.clearFields(),
      this.currentPage = 'Cadastro'
    },

    goToSenha: function () {
      this.formLoginAtivo = false,
      this.formCadastroAtivo = false,
      this.formSenhaAtivo = true,
      this.cadastradoSucesso = false,
      this.clearFields(),
      this.currentPage = 'Esqueci minha senha'
    },

    showPassword: function () {
      document.getElementById('passwordInput').type = "text"
    },

    hidePassword: function () {
      document.getElementById('passwordInput').type = "password"
    },

    realizarCadastro: function () {
      if (this.validarCampos()) {
        this.createNewUser(),
        this.pushIndex(),
        this.emailConfirmacao = this.email,
        this.clearFields(),
        this.cadastradoSucesso = true
      }
    },

    validarCampos: function () {
      this.camposInvalidos = [];
      if (this.userNameList.includes(this.userName)) { 
        this.camposInvalidos.push('Nome de usuário já existe');
        return false
      } else if (this.emailList.includes(this.email)) {
        this.camposInvalidos.push('E-mail já cadastrado no sistema');       
      } else {
        if (this.firstName == '') this.camposInvalidos.push('O campo de nome está vazio');
        if (this.lastName == '') this.camposInvalidos.push('O campo de sobrenome está vazio');
        if (this.email == '') this.camposInvalidos.push('O campo de email está vazio');
        if (this.username == '') this.camposInvalidos.push('Nome de usuário inválido');
        if (this.password == '') this.camposInvalidos.push('Senha inválida');
        if (this.camposInvalidos.length > 0) return false;
        return true;
      } 
    },

    createNewUser: function () {
      var newUser = {};
      newUser.nome = this.firstName,
      newUser.sobrenome = this.lastName,
      newUser.email = this.email,
      newUser.username = this.userName,
      newUser.senha = this.password;
      if (this.typeSelected == 'Outro') newUser.curso = this.outroCurso;
      else newUser.curso = this.typeSelected;
      this.userList.push(newUser)
    },

    pushIndex: function () {
      this.userNameList.push(this.userName),
      this.emailList.push(this.email)
    },

    clearFields: function () {
      this.firstName = '',
      this.lastName = '',
      this.email = '',
      this.userName = '',
      this.password = '',
      this.typeSelected = '',
      this.camposInvalidos = [],
      this.outroCurso = '',

      this.userNameLogin = '',
      this.passwordLogin = '',

      this.userNameSenha = '',
      this.mensagemSenha = ''

    },

    loginProcess: function () {
      var mensagemLogin = this.consultaLogin();
      alert(mensagemLogin)
    },

    consultaLogin: function () {
      var userIndex = Math.max(this.userNameList.indexOf(this.userNameLogin), this.emailList.indexOf(this.userNameLogin));
      if (userIndex == -1) return 'Usuário/E-mail não existe';
      if (this.userList[userIndex].senha != this.passwordLogin) return 'Senha inválida';
      return 'Entrando no sistema...'
    },

    recuperarSenha: function () {
      this.mensagemSenha = this.consultaUsuario();
      this.mensagemSenhaSaida = this.mensagemSenha
    },

    consultaUsuario: function () {
      var userIndex = this.userNameList.indexOf(this.userNameSenha);
      if (userIndex == -1) return 'Usuário/E-mail não existe';
      return 'Um e-mail para realizar a troca de senha foi enviado para ' + this.emailList[userIndex]; 
    }
  }
}
</script>

<style>

template {
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

body {
  background: linear-gradient(rgba(92,64,132, 0.9), rgba(92,64,132, 0.9)), url(../public/background.jpg) no-repeat center fixed;
  background-size: cover;  
  background-color: rgba(92,64,132, 0.8);
  text-align: center;
  padding: 120px 600px;
}

.titleContainer, .loginContainer, .dataCadastro {
  text-align: center;
  position: absolute;
  left: 35%;
  right: 35%;
  margin-left: auto;
  margin-right: auto;
  background-color: #ffffff;
  border-radius: 8px;  
}

.titleContainer {
  top: 20px;
}

.loginContainer {
  top: 120px;
  padding: 40px 20px;
}

.dataCadastro {
  top: 575px;
  padding: 10px 10px;
}

label, a {
  left: 0px;
  display: inline-block;
  width: 150px;
  text-align: left;
  float: left;
}

a {
  cursor: pointer;
  color: rgb(92,64,132);
}

.inputText, .showPasswordButton, select {
  width: 200px;
  float: right;
  box-sizing: border-box;
}

.showPasswordButton {
}

.loginField {
}

.formField {
  float: left;
  width: 100%;
}

.inputButton {
  margin-bottom: 10px;
  height: 30px;
  width: 100%;
}

.fadeIn-enter-active, .fadeIn-leave-active {
  transition: opacity .3s;
}

.fadeIn-enter, .fadeIn-leave-to /* .fade-leave-active em versões anteriores a 2.1.8 */ {
  opacity: 0;
}

</style>
