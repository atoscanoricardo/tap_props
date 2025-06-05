<script setup>
    const count = defineModel()

    function update() {
        count.value++
    }

    function deupdate() {
        count.value--
    }

</script>

<template>
  <div>Incrementar producto: {{ count }}</div>
  <v-btn @click="update">Increment</v-btn>
  <v-btn @click="deupdate">Decrement</v-btn>
</template>