class MercadonaService {
  async getProductsByCategory (category) {
    return await fetch(`https://tienda.mercadona.es/api/categories/${category}`)
      .then(response => response.json())
      .then(data => data)
      .catch(error => console.error(error))
  }

  async getProductById (id) {
    return await fetch(`https://tienda.mercadona.es/api/products/${id}`)
      .then(response => response.json())
      .then(data => data)
      .catch(error => console.error(error))
  }
}

export default new MercadonaService()
