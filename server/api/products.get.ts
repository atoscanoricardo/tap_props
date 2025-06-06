export default defineEventHandler((event) => {
    const products = [
      {
        id: 1,
        product_name: "Camisa hombre",
        detail: "Camisa manga larga, color azul",
        price: 10000,
      },
      {
        id: 2,
        product_name: "Camisa mujer",
        detail: "Camisa manga larga, color azul",
        price: 10000,
      },
      {
        id: 3,
        product_name: "Camisa niño",
        detail: "Camisa manga larga, color azul",
        price: 10000,
      }
    ]
  
    return products;
  })