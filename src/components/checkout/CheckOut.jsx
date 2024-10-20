import React, { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import CartService from '../../services/cart.service';
import './checkout.css'; // Ensure this CSS file is created

const Checkout = () => {
    const navigate = useNavigate();
    const [cartItems, setCartItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        address: '',
        paymentInfo: ''
    });

    useEffect(() => {
        const loadCart = () => {
            const items = CartService.getCartItems() || [];
            setCartItems(items);
            setLoading(false);
        };
        loadCart();
    }, []);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle order processing here
        console.log("Order submitted:", formData, cartItems);
        alert('Order placed successfully!');
    };

    const handleBackToCart = () => {
        navigate('/cart');
    };

    if (loading) {
        return (
            <div className="loading-container">
                <h2 className="loading-text">Loading...</h2>
            </div>
        );
    }

    return (
        <div className="checkout">
            <div className="checkoutView">
                <h1>Checkout</h1>
                <form onSubmit={handleSubmit} className="checkout-form">
                    <h2>Billing Information</h2>
                    <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="text"
                        name="address"
                        placeholder="Shipping Address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="text"
                        name="paymentInfo"
                        placeholder="Payment Information"
                        value={formData.paymentInfo}
                        onChange={handleChange}
                        required
                    />
                    <Button type="submit" variant="contained">Place Order</Button>
                </form>
                
                <h2>Your Cart</h2>
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
                            </tr>
                        </thead>
                        <tbody>
                            {cartItems.map(item => (
                                <tr key={item.id}>
                                    <td>{item.name}</td>
                                    <td>${item.price.toFixed(2)}</td>
                                    <td>{item.quantity}</td>
                                    <td>${(item.price * item.quantity).toFixed(2)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
                <h2>Total Amount: ${cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}</h2>
                
                <Button onClick={handleBackToCart} variant="outlined" style={{ marginTop: '20px' }}>
                    Back to Cart
                </Button>
            </div>
        </div>
    );
};

export default Checkout;
