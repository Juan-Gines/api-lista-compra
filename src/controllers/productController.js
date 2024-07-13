import MercadonaService from '../services/mercadonaService.js'

class ProductController {
  async getAllProductsByCategory (req, res) {
    const { category } = req.params
    await MercadonaService.getProductsByCategory(category)
      .then(products => res.json(products))
      .catch(error => console.error(error))
  }

  async getProductById (req, res) {
    const { id } = req.params
    await MercadonaService.getProductById(id)
      .then(product => res.json(product))
      .catch(error => console.error(error))
  }
}

export default new ProductController()
