<script setup>
  const props = defineProps(['product_name', 'detail', 'price', 'countModel'])
</script>
<template>
    <v-card
      class="mx-auto"
      prepend-icon="$vuetify"
      :subtitle="`Descripción: ${detail}`"
      width="400"
    >
      <template v-slot:title>
        <span class="font-weight-black">
          {{ product_name }}
          : ${{ price }}.00
        </span>
      </template>
  
      <v-card-text class="bg-surface-light pt-4">
        Cantidad de artículos {{ countModel }} 
      </v-card-text>
    </v-card>
  </template>