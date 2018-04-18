import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import ProductsList from './components/ProductsList'
// import { ProductDetails } from './components/ProductDetails'
import './App.css';

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/products" component={ ProductsList } />
                    <Route exact path="/" render={ () => <Redirect to="/products" /> } />
                </div>
            </Router>
        )
    }
}

export default App;




// <Route exact path="/products/:id" component={ProductDetails} />
