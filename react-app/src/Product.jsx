import React, { useState } from "react";
import "./ProductStyle.css";

function Product() {
  const [products, setProducts] = useState([
    { name: "Laptop", price: 50000, quantity: 2 },
    { name: "Mobile", price: 20000, quantity: 5 },
    { name: "Headphones", price: 2000, quantity: 10 },
  ]);

  function addProduct() {
    let name = prompt("Enter Product Name");
    let price = prompt("Enter Price");
    let quantity = prompt("Enter Quantity");

    if (name && price && quantity) {
      setProducts([
        ...products,
        {
          name: name,
          price: price,
          quantity: quantity,
        },
      ]);
    }
  }

  function editProduct(index) {
    let name = prompt("Enter New Product Name");

    if (name) {
      let updated = [...products];
      updated[index].name = name;
      setProducts(updated);
    }
  }

  function deleteProduct(index) {
    setProducts(products.filter((product, i) => i !== index));
  }

  return (
    <div className="dashboard">
      <h1>Product Dashboard</h1>

      <button onClick={addProduct}>Add Product</button>

      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td>{product.name}</td>
              <td>₹{product.price}</td>
              <td>{product.quantity}</td>
              <td>
                <button onClick={() => editProduct(index)}>Edit</button>
                <button onClick={() => deleteProduct(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Product;
