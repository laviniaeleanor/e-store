import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {fetchProduct} from '../actions/products'
// import ProductForm from './ProductForm'
import {Link} from 'react-router-dom'

class ProductDetails extends PureComponent {

     componentWillMount(props) {
        this.props.fetchProduct(this.props.match.params.id)
      }

      updateProduct = (product) => {
        this.props.updateProduct(this.props.match.params.id, product)
        this.toggleEdit()
      }

      render() {
          const {product} = this.props
          if (!product) return null

          return (
            <div>
            <Link to={ `/products` }><div class = "header">
              <h1>the M@rket</h1>
              </div></Link>
              <div class = "ProductDetails">
              <h2>{product.description} - &euro; {product.price}.00</h2>
              <img src = { product.picture } alt = {product.description}  style={{maxWidth: 200 + 'px'}}/>
              <p>For more information about this product contact:</p>
              <p>{product.email} </p>
              <p>{product.phone} </p>
              <button>Buy this product</button>
            </div>
            </div>
          )
        }
      }

      const mapStateToProps = function (state, props) {
        return {
          product: state.product
        }
      }

      export default connect(mapStateToProps, {fetchProduct})(ProductDetails)
