<script setup>
const title = ref('Productos');
const subtitle = ref('En promoción');
const text = ref('Hasta el 31 de diciembre');
const countModel = ref(0)
</script>
<template>
  <v-container>        
    <v-row>
      <v-col cols="12">
        <Card :title :subtitle :text :countModel/>
      </v-col>
      <v-col  cols="6">
        <Count v-model="countModel"/>
      </v-col>
      <v-col  cols="6">
        <Form v-model:title="title" v-model:text="text" v-model:subtitle="subtitle"/>
      </v-col>      
    </v-row>
  </v-container>
</template>
