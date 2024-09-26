<script setup>
    const title = defineModel('title');
    const text = defineModel('text');
    
    
    const props = defineProps(['subtitle']);
    const subtitleTmp = ref('')
    

    const emit = defineEmits(['update:subtitle'])    

    function updateFields (){
        emit('update:subtitle', subtitleTmp.value)
    }

    const fieldRules = ref([
        value => {
        if (value?.length >= 10) return true  
        return 'Field must be at least 10 characters.'
        },
    ])

</script>
<template>
    <v-sheet class="mx-auto" width="300">
      <v-form fast-fail @submit.prevent>
        <v-text-field
            v-model="title"
            :rules="fieldRules"
            label="Título"
        ></v-text-field>
        
        <v-text-field
            v-model="subtitleTmp"
            :rules="fieldRules"
            label="Subtítulo"
        ></v-text-field>

        <v-text-field
            v-model="text"
            :rules="fieldRules"
            label="Text"
        ></v-text-field>

        <v-btn @click="updateFields">Actualizar datos</v-btn>
      </v-form>
    </v-sheet>
  </template>
