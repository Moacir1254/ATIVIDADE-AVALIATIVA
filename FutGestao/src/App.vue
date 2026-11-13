<script setup>
import { ref } from 'vue'

const formularioVisivel = ref(false)

const nome = ref('')
const idade = ref('')
const telefone = ref('')

const alunos = ref([])
const mostrarAlunos = ref(false)

function mostrarFormulario() {
  formularioVisivel.value = true
}

function salvarAluno() {
  alunos.value.push({
    nome: nome.value,
    idade: idade.value,
    telefone: telefone.value
  })

  nome.value = ''
  idade.value = ''
  telefone.value = ''

  alert('Aluno cadastrado com sucesso!')
}
</script>
<template>
  <div>
    <header>
      <h1>FutGestão ⚽</h1>
      <p>Gestão de Escolinha de Futebol</p>
    </header>

    <main>
      <h2>Bem-vindo ao FutGestão!</h2>

      <p>Organize sua escolinha de futebol de forma simples.</p>

      <button @click="mostrarFormulario">
        Cadastrar aluno
      </button>

      <div v-if="formularioVisivel">
        <h2>Cadastro de aluno</h2>

        <form>
          <p>Nome do aluno:</p>
          <input type="text" placeholder="Digite o nome" v-model="nome">

          <p>Idade:</p>
          <input type="number" placeholder="Digite a idade" v-model="idade">

          <p>Telefone:</p>
          <input type="text" placeholder="Digite o telefone" v-model="telefone">

          <br><br>

          <button type="button" @click="salvarAluno">
            Salvar aluno
          </button>
        </form>
      </div>

      <button @click="mostrarAlunos = !mostrarAlunos">
  Ver alunos
</button>
    </main>
  </div>
</template>

<style>
body {
  font-family: Arial;
  background-color: #f2f2f2;
  margin: 0;
}

header {
  background-color: green;
  color: white;
  text-align: center;
  padding: 20px;
}

main {
  text-align: center;
  margin-top: 50px;
}

button {
  background-color: green;
  color: white;
  padding: 12px;
  border: none;
  margin: 10px;
  cursor: pointer;
}
</style>
