<script setup>
import { useStoreProduct } from '@/stores/products'
import { storeToRefs } from 'pinia';

const storeProducts = useStoreProduct()
const { products, product } = storeToRefs(storeProducts);

const countModel = ref(0);

const isLoading = ref(true);

onMounted(async () => {
  try {
    await storeProducts.fetchProducts();
  } finally {
    isLoading.value = false;
  }
})

// Variables locales para enlazar con el formulario
const formProductName = ref('');
const formPrice = ref('');
const formDetail = ref('');

// Observa los cambios en 'product' y actualiza las variables locales del formulario
watch(product, (newProduct) => {
  if (newProduct) {
    formProductName.value = newProduct.product_name || '';
    formPrice.value = newProduct.price !== undefined && newProduct.price !== null ? newProduct.price.toString() : ''; // Asegúrate de convertir a string si es necesario y manejar null/undefined
    formDetail.value = newProduct.detail || '';
  } else {
    // Limpiar los campos del formulario si product es null
    formProductName.value = '';
    formPrice.value = '';
    formDetail.value = '';
  }
}, { immediate: true }); // Ejecutar inmediatamente para inicializar si product ya está cargado

// Función para actualizar el store cuando cambian los valores del formulario
const updateProductFromForm = () => {
  if (product.value) {
    const updatedProduct = {
      ...product.value, // Mantiene otras propiedades si existen
      product_name: formProductName.value,
      price: parseFloat(formPrice.value), // Convierte de nuevo a número si es necesario
      detail: formDetail.value,
    };
    storeProducts.updateProduct(updatedProduct);
  }
};

</script>

<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <div v-if="isLoading">Cargando productos...</div>
        <div v-else-if="!product">No hay productos disponibles.</div>
        <!-- Renderiza Card solo si product no es null -->
        <Card v-else :product_name="product.product_name" :detail="product.detail" :price="product.price" :countModel/>
      </v-col>

      <v-col  cols="6">
        <!-- Si Count también depende de product, aplica v-if="!isLoading && product" aquí -->
        <Count v-model="countModel"/>
      </v-col>
      <v-col  cols="6">
        <!-- Renderiza Form solo si product no es null -->
        <Form
          v-if="!isLoading && product"
          v-model:product_name="formProductName"
          v-model:price="formPrice"
          v-model:detail="formDetail"
          @update:detail="updateProductFromForm"
          @update:product_name="updateProductFromForm"
          @update:price="updateProductFromForm"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

