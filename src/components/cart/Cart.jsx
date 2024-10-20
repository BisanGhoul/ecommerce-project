import './cartPage.css'; // Import the CSS file
import React, { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import CartService from '../../services/cart.service';

//****************
//please use cart service and check the Product class so we can easily connect all components ogether later */
const Cart = () => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const loadCart = () => {
            const items = CartService.loadCart() || [];  // Get the cart items, fallback to an empty array
            console.log('Loaded cart items:', items);
            setCartItems(items); // Set the cart items state
        };
        loadCart();
    }, []);

    const handleQuantityChange = (id, quantity) => {
        CartService.updateProductQuantity(id, quantity);
        setCartItems(CartService.loadCart());
    };

    const handleRemoveItem = async (id) => {
        await CartService.removeFromCart(id);
        setCartItems(CartService.loadCart());
    };

    const getTotalAmount = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    return (
        <div className="cart">
            <div className="cartView">
                <h1>Shopping Cart</h1>
                {cartItems.length === 0 ? (
                    <p>Your cart is empty.</p>
                ) : (
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
