<template>
  <ul>
    <li>{{ client.firstName }}</li>
    <li>{{ client.lastName }}</li>
    <li>{{ client.number }}</li>
  </ul>
</template>

<script>
export default {
  props: {
    client: {
      type: Object,
      required: true
    }
  },
}
</script>