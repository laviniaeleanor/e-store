import { JsonController, Get, Param, Put, Body, NotFoundError, Post, HttpCode } from 'routing-controllers'
import Product from './entity';

@JsonController()
export default class ProductController {

    @Get('/products/:id')
    getProduct(
      @Param('id') id: number
    ) {
      return Product.findOneById(id)
    }

    @Get('/products')
    async allProducts() {
    const products = await Product.find()
    return { products }
    }

    @Put('/products/:id')
    async updateProduct(
    @Param('id') id: number,
    @Body() update: Partial<Product>
    ) {
    const product = await Product.findOneById(id)
    if (!product) throw new NotFoundError('Cannot find product')

    return Product.merge(product, update).save()
    }

    @Post('/products')
    @HttpCode(201)
    createProduct(
        @Body() product: Product
    ) {
        return product.save()
    }
}