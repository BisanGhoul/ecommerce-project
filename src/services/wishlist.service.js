import { Product } from '../models/Product';

class WishlistService {
    loadWishlist() {
        const wishlist = localStorage.getItem('wishlist');
        return wishlist ? JSON.parse(wishlist).map(item => new Product(item)) : [];
    }

    async addToWishlist(productData) {
        const wishlist = this.loadWishlist();
        const product = new Product(productData);
        wishlist.push(product);
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
        return wishlist;
    }

    async removeFromWishlist(productId) {
        const wishlist = this.loadWishlist();
        const updatedWishlist = wishlist.filter(item => item.id !== productId);
        localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
        return updatedWishlist;
    }

    async clearWishlist() {
        localStorage.removeItem('wishlist');
    }
}

export default new WishlistService();
