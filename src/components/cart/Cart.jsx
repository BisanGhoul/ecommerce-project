import React, { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import CartService from '../../services/cart.service';
import './cartPage.css';
import { useNavigate } from 'react-router-dom'; 
import AuthPopup from '../authentication/AuthPopUp';

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showPopup, setShowPopup] = useState(false);  
    const navigate = useNavigate();

    useEffect(() => {
        const loadCart = async () => {
            setLoading(true);
            const items = await CartService.loadCart() || [];
            console.log('Loaded cart items:', items);
            setCartItems(items);
            setLoading(false);
        };
        loadCart();
    }, []);

    const handleQuantityChange = (id, quantity) => {
        if (quantity < 1) return; // Prevent setting quantity to less than 1
        CartService.updateProductQuantity(id, quantity);
        setCartItems(CartService.loadCart()); // Refresh the cart items
        window.dispatchEvent(new Event('cartUpdated')); // Notify the header
    };
    
    const handleRemoveItem = async (id) => {
        await CartService.removeFromCart(id);
        setCartItems(CartService.loadCart()); // Refresh the cart items
        window.dispatchEvent(new Event('cartUpdated')); // Notify the header
    };

    const getTotalAmount = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    const handleCheckout = () => {
        if(localStorage.getItem('currentUser')){
        if (cartItems.length === 0) {
            const confirmRedirect = window.confirm("Your cart is empty. Would you like to go to the products page?");
            if (confirmRedirect) {
                navigate('/products');
            }
        } else {
            navigate('/checkout');
        }  
        }else{
            setShowPopup(true);
        }
  
    };

    if (loading) {
        return (
            <div className="loading-container">
                <h2 className="loading-text">Loading...</h2>
            </div>
        );
    }

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
                <Button onClick={handleCheckout}>Checkout</Button>
            </div>
            {showPopup && <AuthPopup />}
        </div>
    );
};

export default Cart;
