import React, {PureComponent} from 'react'

class ProductForm extends PureComponent {
	state = {}

	handleSubmit = (e) => {
		e.preventDefault()
		this.props.onSubmit(this.state)
	}

	handleChange = (event) => {
		const {name, value} = event.target

		this.setState({
		  [name]: value
		})
	}

	render() {
		const initialValues = this.props.initialValues || {}
		return (
			<form onSubmit={this.handleSubmit} class="form-style-1">
				<div>
					<label htmlFor="description">Product name</label>
					<input name="description" id="description" value={
						this.state.description || initialValues.description || ''
					} onChange={ this.handleChange } />
				</div>

				<div>
					<label htmlFor="price">Product price</label>
					<input name="price" id="price" value={
						this.state.price || initialValues.price || ''
					} onChange={ this.handleChange } />
				</div>

				<div>
					<label htmlFor="picture">Product image(please insert a url)</label>
					<input name="picture" id="picture" value={
						this.state.picture || initialValues.picture || ''
					} onChange={ this.handleChange } />
				</div>

                <div>
					<label htmlFor="email">Your email</label>
					<input name="email" id="email" value={
						this.state.email || initialValues.email || ''
					} onChange={ this.handleChange } />
				</div>

                <div>
					<label htmlFor="phone">Your phone number</label>
					<input name="phone" id="phone" value={
						this.state.phone || initialValues.phone || ''
					} onChange={ this.handleChange } />
				</div>

				<button type="submit">Save</button>
			</form>
		)
	}
}

export default ProductForm
