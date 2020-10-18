<template>
  <div class="claculator">
    <h1>Calculator</h1>
    <p>1 kg = 5 $</p>
    <p>
      kg:
      <input type="number" v-model="kilogram">
    </p>
    <p id="result">Result: {{ kilogram * 5 }} $</p>
  </div>
</template>

<script>
export default {
  data(){
    return {
      kilogram: 0
    }
  }
}
</script>

<style scoped>

</style>