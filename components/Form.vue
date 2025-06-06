<script setup>
    const product_name = defineModel('product_name');
    const price = defineModel('price');
            
    
    const props = defineProps(['detail']);
    const detailTmp = ref('')
    

    const emit = defineEmits(['update:detail'])    

    function updateFields (){
        emit('update:detail', detailTmp.value)
    }

    const fieldRules = ref([
        value => {
        if (value?.length >= 10) return true  
        return 'Field must be at least 10 characters.'
        },
    ])

</script>
<template>
    <v-sheet class="mx-auto">
      <v-form fast-fail @submit.prevent>
        <v-text-field
            v-model="product_name"
            :rules="fieldRules"
            label="Nombre del producto"
        ></v-text-field>
        
        <v-text-field
            v-model="detailTmp"
            :rules="fieldRules"
            label="Detalle"
        ></v-text-field>

        <v-text-field
            v-model="price"
            :rules="fieldRules"
            label="Precio"
        ></v-text-field>

        <v-btn @click="updateFields">Actualizar datos</v-btn>
      </v-form>
    </v-sheet>
  </template>
