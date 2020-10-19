<template>
  <div class="Home">
    <ViewRecord 
      v-for="client of records"
      :key="client.id"
      v-bind:client="client"
    />
  </div>
</template>

<script>
import ViewRecord from './components/viewRecord'

export default {
  components: {
    ViewRecord
  },
  data(){
    return {
      records: []
    }
  },
  mounted(){
    fetch('https://rocky-refuge-77020.herokuapp.com/get-record')
      .then(res => res.json())
      .then(json => this.records = json.data)
  }
}
</script>