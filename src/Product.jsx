import React, { Component } from "react";

export default class Product extends Component { 
    render() {
        return (
            <div className="col-lg-6">
                <div className="card m-2">
                    <div className="card-body">
                        <div className="text-muted">
                            #{this.props.product.id}
                            <span className="pull-right hand-icon text-dark">
                                <i className="fa fa-times" onClick={()=>{this.props.delete(this.props.product)}}></i>
                            </span>
                        </div>
                        <h5 className="pt-2 border-top">{this.props.product.pName}</h5>
                        <div>${this.props.product.price}</div>
                    </div>
                    <div className="card-footer">
                        <div className="float-start">
                            <span className="badge text-dark">{this.props.product.quantity}</span>
                            <div className="btn-group">
                                <button className="btn btn-outline-success" onClick={()=>{this.props.onIncrement(this.props.product, 10)}}>+</button>
                                <button className="btn btn-outline-success" onClick={()=>{this.props.onDecrement(this.props.product, 0)}}>-</button>
                            </div>
                        </div>
                        <div className="float-end">{this.props.children}</div>
                    </div>
                </div>
            </div>

        )
    }
}