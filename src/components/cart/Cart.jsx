import './cartPage.css';  // Import the CSS file
import React, { useState } from 'react';
import {Button} from '@mui/material';

const Cart = () => {
    const [cartItems, setCartItems] = useState([
      { id: 1, name: 'Product 1', price: 20, quantity: 1 },
      { id: 2, name: 'Product 2', price: 15, quantity: 1 },
  ]);
  
  const handleQuantityChange = (id, quantity) => {
      setCartItems(prevItems =>
          prevItems.map(item =>
              item.id === id ? { ...item, quantity } : item
          )
      );
  };

  const handleRemoveItem = (id) => {
      setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const getTotalAmount = () => {
      return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
      <div className="cart">
          <div className="cartView">
            <h1>Shopping Cart</h1>
            {cartItems.length === 0 ? (<p>Your cart is empty.</p> ) : (
                <table>
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartItems.map(item => (
                            <tr key={item.id}>
                                <td>{item.name}</td>
                                <td>${item.price}</td>
                                <td>
                                    <input
                                        type="number"
                                        value={item.quantity}
                                        min="1"
                                        onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                                    />
                                </td>
                                <td>${(item.price * item.quantity).toFixed(2)}</td>
                                <td>
                                    <Button onClick={() => handleRemoveItem(item.id)}>Remove</Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
            <h2>Total Amount: ${getTotalAmount().toFixed(2)}</h2>
            <Button onClick={() => alert('Proceeding to checkout...')}>Checkout</Button>
        </div>
      </div>
    );
  };
  
  export default Cart;
  