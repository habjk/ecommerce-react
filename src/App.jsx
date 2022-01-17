import React,{ Component } from "react";
import { NavBar } from "./Nav";
import CustomerList from "./CustomerList";
import ShoppingCart from "./ShoppingCart";
export default class App extends Component
{
  render()
  {
    return (
      <div>
        <NavBar />
        <ShoppingCart />
      </div>
    )
  }
}