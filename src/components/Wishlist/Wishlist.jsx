import React, { useEffect, useState } from 'react';
import WishlistService from '../../services/wishlist.service';
import { Button } from '@mui/material';
import './wishlist.css';

const Wishlist = () => {
    const [wishlistItems, setWishlistItems] = useState([]);

    useEffect(() => {
        const loadWishlist = () => {
            const items = WishlistService.loadWishlist();
            setWishlistItems(items);
        };
        loadWishlist();
    }, []);

    const handleRemoveItem = async (id) => {
        await WishlistService.removeFromWishlist(id);
        setWishlistItems(WishlistService.loadWishlist());
    };

    return (
        <div className="wishlist">
            <h1>Wishlist</h1>
            {wishlistItems.length === 0 ? (
                <p>Your wishlist is empty.</p>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {wishlistItems.map(item => (
                            <tr key={item.id}>
                                <td>{item.name}</td>
                                <td>${item.price}</td>
                                <td>
                                    <Button onClick={() => handleRemoveItem(item.id)}>Remove</Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default Wishlist;