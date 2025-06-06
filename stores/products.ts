import { defineStore } from 'pinia'

interface Product {
    id: number
    product_name: string
    detail: string
    price: number
  }

export const useStoreProduct = defineStore('product', {
  state: () => ({
    products: [] as Product[], 
    product: null as Product | null, 
  }),
  actions: {
    async fetchProducts() {
      try {
        const response = await $fetch('/api/products')
        this.products = response      
        this.setCurrentProduct(this.products[0]);
        
      } catch (error) {
        console.error('Error fetching cultura:', error)
      }
    },
    setCurrentProduct(product: Product) {
        this.product = { ...product } 
    },
    updateProduct(updatedProduct: Product) {
      // Encontrar el índice de la pregunta por ID
      const index = this.products.findIndex(q => q.id === updatedProduct.id)
      if (index !== -1) {
        // Reemplazar la pregunta completa para mantener la reactividad
        this.products[index] = { ...updatedProduct }
        // Si la pregunta actual es la que se actualizó, también actualizamos currentQuestion
        if (this.product && this.product.id === updatedProduct.id) {
          this.product = { ...updatedProduct }
        }
      }
    },      
  },
  /*persist: {
    storage: process.client ? localStorage : undefined 
  }*/
});