import React, { Component } from "react";

class ProductDetails extends Component {
  handleSave = () => {
    // Navigate to /products
    this.props.history.replace("/products");
  };

  render() {
    return (
      <div>
        <h1>Product Details - {this.props.match.params.id} </h1>
        <button onClick={this.handleSave}>Save</button>
      </div>
    );
  }
}

/*
We have two useful method 
1. push
2. replace

if we use push then we click on back button it moves us on the back place
but replace doesn't take us on bake place


*/




export default ProductDetails;
