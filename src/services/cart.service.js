import { Product } from '../models/Product';  // Ensure this imports the Product class

class CartService {
  constructor() {
    this.cart = this.loadCart();  // Load cart on initialization
  }

  // Loads the cart from localStorage or returns an empty array if not found
  loadCart() {
    const cart = localStorage.getItem('cart');
    return cart ? JSON.parse(cart) : [];
  }

  // Saves the cart to localStorage
  saveCart() {
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  // Adds a product to the cart
  addToCart(productData) {
    try {
      const product = new Product(
        productData.id, 
        productData.name, 
        productData.price, 
        1,  // Default quantity is 1
        productData.category, 
        productData.itemType,
        productData.colors || [],  // Fallback to empty array if undefined
        productData.size || [],    // Fallback to empty array if undefined
        productData.description, 
        productData.images || [],  // Fallback to empty array if undefined
        productData.tags || []     // Fallback to empty array if undefined
      );

      // Check if product already exists in the cart
      const existingProduct = this.cart.find(item => item.id === product.id);
      if (existingProduct) {
        existingProduct.quantity += 1;  // If already exists, increase the quantity
      } else {
        this.cart.push(product);  // Otherwise, add the new product to the cart
      }

      this.saveCart();  // Save the updated cart
    } catch (error) {
      console.error('Error adding product to cart:', error);
    }
  }

  // Removes a product from the cart by its ID
  removeFromCart(id) {
    try {
      const index = this.cart.findIndex(item => item.id === id);
      if (index > -1) {
        this.cart.splice(index, 1);  // Remove the item
        this.saveCart();  // Save the updated cart
      }
    } catch (error) {
      console.error('Error removing product from cart:', error);
    }
  }

  // Updates the quantity of a product in the cart
  updateProductQuantity(id, newQuantity) {
    try {
      const product = this.cart.find(item => item.id === id);
      if (product) {
        product.updateQuantity(newQuantity);  // Update quantity
        this.saveCart();  // Save the updated cart
      }
    } catch (error) {
      console.error('Error updating product quantity in cart:', error);
    }
  }

  // Retrieves all the cart items
  getCartItems() {
    return this.cart;
  }

  // Calculates the total amount in the cart
  getTotalAmount() {
    return this.cart.reduce((total, item) => total + item.price * item.quantity, 0);
  }
}

export default new CartService();  // Exporting a singleton instance
