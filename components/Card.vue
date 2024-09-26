<script setup>
  const props = defineProps(['subtitle', 'title', 'text', 'countModel'])
</script>
<template>
    <v-card
      class="mx-auto"
      prepend-icon="$vuetify"
      :subtitle="`${subtitle} ${countModel}`"
      width="400"
    >
      <template v-slot:title>
        <span class="font-weight-black">
          {{ title }}
        </span>
      </template>
  
      <v-card-text class="bg-surface-light pt-4">
        {{ text }}
      </v-card-text>
    </v-card>
  </template>