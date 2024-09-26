<script setup>
    const count = defineModel()

    function update() {
        count.value++
    }

</script>

<template>
  <div>Incrementar producto: {{ count }}</div>
  <v-btn @click="update">Increment</v-btn>
</template>