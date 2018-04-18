import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { fetchAllProducts, createProduct } from '../actions/products'
import { Link } from 'react-router-dom'
import ProductForm from './ProductForm'

class ProductsList extends PureComponent {

  componentWillMount() {
    this.props.fetchAllProducts()
  }

  createProduct = (product) => {
    this.props.createProduct(product)
  }

  render() {
    const {products} = this.props
    return (
      <div>
      <div class = "header">
        <h1>the M@rket</h1>
        </div>
        <h2>Latest advertisements</h2>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            { products.map(product => (<tr key={product.id}>
              <td>{product.id}</td>
              <td>
                  <Link to={ `/products/${product.id}` }>{product.description}</Link>
                </td>
              <td>&euro; {product.price}.00</td>
            </tr>)) }
          </tbody>
				</table>
            <div class="productForm"><h2>New advertisement</h2>
            <ProductForm onSubmit={this.createProduct} /></div>
      </div>
    )
  }
}


const mapStateToProps = function (state) {
  return {
    products: state.products,
  }
}

export default connect(mapStateToProps, {
  fetchAllProducts,
  createProduct,
})(ProductsList)
