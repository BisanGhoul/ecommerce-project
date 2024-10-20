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
        1,  // Default quantity
        productData.category,
        productData.itemType,
        productData.colors || [],
        productData.size || [],
        productData.description,
        productData.images || [],
        productData.tags || []
      );
  
      // Check if the product already exists in the cart
      const existingProduct = this.cart.find(item => item.id === product.id);
      if (existingProduct) {
        existingProduct.quantity += 1;  // Increase the quantity
      } else {
        this.cart.push(product);  // Add new product
      }
  
      this.saveCart();  // Save changes to localStorage
  
      // Dispatch the event after modifying the cart
      window.dispatchEvent(new Event('cartUpdated'));
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
            product.quantity = newQuantity;  // Directly update quantity
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
