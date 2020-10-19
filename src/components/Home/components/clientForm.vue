<template>
  <div class="form">
    <form @submit.prevent="onSubmit">
      <p>
        First name: 
        <input type="text" placeholder="Eldiayr" v-model="firstName">
      </p>
      <p>
        Last name: 
        <input type="text" placeholder="Barynbekov" v-model="lastName">
      </p>
      <p>
        Number tel: 
        <input type="number" placeholder="0703728103" v-model="number">
      </p>
      <button v-on:click="request">Send</button>
    </form>
    <div class="error">
      <p>{{ error }}</p>
    </div>
  </div>
</template>

<script>
import { sendData } from '@/api/form'

export default {
  data(){
    return {
      firstName: 'eldiayr',
      lastName: '',
      number: null,
      error: ''
    }
  },
  methods: {
    onSubmit(){
      if (!this.firstName) {
        this.error = 'incorrect First name!'
      }
      else if (!this.number) {
        this.error = 'incorrect Number tel!'
      }
      else {
        sendData(
          '/form-data', 'POST', 
          {
            firstName: this.firstName, 
            lastName: this.lastName, 
            number: Number(this.number)
          }
        ).then(() => this.$router.push('panel'))
      }
    }
  }
}
</script>

<style scoped>
.form {
  display: flex;
  justify-content: space-between;
}
.error p {
  float: right;
  color: red;
  font-size: 1.5rem;
}
</style>