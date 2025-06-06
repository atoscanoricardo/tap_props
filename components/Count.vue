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
  <div>Total productos en el carrito: {{ count }}</div>
  <v-btn @click="update">+</v-btn>
  <v-btn @click="deupdate">-</v-btn>
</template>