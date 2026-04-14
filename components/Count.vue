<script setup>
    const count = defineModel()

    function update() {
        count.value++
    }

    function downgrade() {
        count.value--
    }

</script>

<template>
  <div>Total productos en el carrito: {{ count }}</div>
  <v-btn @click="update">+</v-btn>
  <v-btn @click="downgrade">-</v-btn>
</template>