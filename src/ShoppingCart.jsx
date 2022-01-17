import React, { Component } from "react";
import Product from "./Product";

export default class ShoppingCart extends Component {

    state = {
        products: [
            { id: 1, pName: 'Samsung A20', price: 8900, quantity: 0 },
            { id: 2, pName: 'Sony Camera', price: 15500, quantity: 0 },
            { id: 3, pName: 'IPad pro', price: 20000, quantity: 0 },
            { id: 4, pName: 'LG Tv', price: 40000, quantity: 0 },
            { id: 5, pName: 'Mac 2000', price: 55000, quantity: 0 },
            { id: 6, pName: 'Xbox', price: 15000, quantity: 0 },
        ]
    }
    render() {
        return (
            <div className="container-fluid">
                <h4>Shopping Cart</h4>
                <div className="row row-cols-3 row-cols-md-3 g-4">
                    {this.state.products.map((prod) => {
                        return (
                            <Product key={prod.id} product={prod} onIncrement={this.handleIncrement} onDecrement={this.handleDecrement} delete={this.deleteProduct}>
                                <button className="btn btn-primary">Buy now</button>
                            </Product>)
                    })}
                </div>
            </div>)
    }

    handleIncrement = (product, max) => {
        var allProducts = this.state.products
        var index = allProducts.indexOf(product)
        if (allProducts[index].quantity < max) {
            allProducts[index].quantity++
            this.setState({ products: allProducts })
        }

    }

    handleDecrement = (product, min) => {
        var allProducts = [...this.state.products]
        var index = allProducts.indexOf(product)
        if (allProducts[index].quantity > min) {
            allProducts[index].quantity--
            this.setState({ products: allProducts })
        }

    }

    deleteProduct = (product)=>{
        var allProducts = [...this.state.products]
        var index = allProducts.indexOf(product)
        allProducts.splice(index, 1)
        this.setState({ products: allProducts })

    }
}