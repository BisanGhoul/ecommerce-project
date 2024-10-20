import axios from 'axios';
import { Product } from '../models/Product'; 

class CartService {
  constructor() {
    this.loadCart();
    this.api = axios.create({
      baseURL: 'http://localhost:3000', // Change when we take backend, not really used now
    });
  }

  // Load cart from localStorage
  loadCart() {
    const cart = localStorage.getItem('cart');
    this.cart = cart ? JSON.parse(cart).map(item => new Product(
      item.id, item.name, item.price, item.quantity, item.category, item.itemType,
      item.colors, item.size, item.description, item.images, item.tags
    )) : [];
  }

  // Add product to the cart
  async addToCart(productData) {
    try {
      const product = new Product(
        productData.id, productData.name, productData.price, 1, productData.category, productData.itemType,
        productData.colors, productData.size, productData.description, productData.images, productData.tags
      );

      // Check if product is already in cart
      const existingProduct = this.cart.find(item => item.id === product.id);

      if (existingProduct) {
        existingProduct.quantity += 1; // add to cat
      } else {
        this.cart.push(product); 
      }

      // Save cart to localStorage
      localStorage.setItem('cart', JSON.stringify(this.cart));
      console.log('Current cart:', this.cart);

      return this.cart; // Return updated cart
    } catch (error) {
      console.error('Error adding product to cart:', error);
      throw error;
    }
  }

  // Remove product from the cart
  async removeFromCart(productId) {
    try {
      this.cart = this.cart.filter(item => item.id !== productId); // Remove item by id
      localStorage.setItem('cart', JSON.stringify(this.cart));
      console.log('Updated cart after removal:', this.cart);

      return this.cart;
    } catch (error) {
      console.error('Error removing product from cart:', error);
      throw error;
    }
  }

  // Update product quantity in the cart
  async updateProductQuantity(productId, quantity) {
    try {
      const product = this.cart.find(item => item.id === productId);

      if (product) {
        product.updateQuantity(quantity); // Use Product class method to update quantity
        localStorage.setItem('cart', JSON.stringify(this.cart));
        console.log('Updated cart with new quantity:', this.cart);
      }

      return this.cart;
    } catch (error) {
      console.error('Error updating product quantity:', error);
      throw error;
    }
  }

  // Clear all products from the cart
  async clearCart() {
    try {
      this.cart = [];
      localStorage.removeItem('cart');
      console.log('Cart cleared');

      return this.cart;
    } catch (error) {
      console.error('Error clearing the cart:', error);
      throw error;
    }
  }
}

export default new CartService();
