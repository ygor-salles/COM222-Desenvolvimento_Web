<template>
  <div class="hello"> 
    <input type="text" v-model="texto"><br><br>
    <input type="button" v-on:click="alterarTexto" value="Adicionar item">
    <input type="button" v-on:click="removerItem" value="Remover item">
    <p>Item a ser inserido: {{ texto }}</p>
    <ul>
      <li v-for="item in lista" :key="item.id">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
    texto: {
      type: String,
      default: ''
    }
  },
  data: function () {
    return {
      textoCaixa: '',
      lista: []
    };
  },
  methods: {
    alterarTexto: function () {
      this.lista.push(this.texto),
      this.texto = ''
    },
    removerItem: function () {
      this.lista.pop()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
a {
  color: #42b983;
}
</style>
