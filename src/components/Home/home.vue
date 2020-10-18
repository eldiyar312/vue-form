<template>
  <ClientForm />
  <hr>
  <Clalculator />
</template>

<script>
import ClientForm from './components/clientForm.vue'
import Clalculator from './components/clalculator.vue'

export default {
  name: 'App',
  components: {
    ClientForm,
    Clalculator,
  },
  data(){
    return{
      record: [
        { id:1, firstName: 'eldiyar', lastName: 'san', number: 703728103 },
        { id:2, firstName: 'Eldiyar', lastName: 'Barunbekov', number: 222728103 }
      ]
    }
  },
  mounted(){
    
  }
}
</script>