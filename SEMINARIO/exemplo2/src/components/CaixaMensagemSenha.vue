<template>
  <div>
    <p>{{ msgSenha }}</p>
  </div>
</template>

<script>
export default {
  name: 'CaixaMensagemSenha',
  props: {
    msgSenha: String
  },
  data() {
    return true
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
