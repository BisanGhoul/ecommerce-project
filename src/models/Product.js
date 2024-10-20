export class Product {
    constructor(id, name, price, quantity, category, itemType, colors = [], size, description, images = [], tags = []) {
      this.id = id;
      this.name = name;
      this.price = price;
      this.quantity = quantity;
      this.category = category;
      this.itemType = itemType;
      this.colors = colors;
      this.size = size;
      this.description = description;
      this.images = images;
      this.tags = tags;
      this.discount = 0;
    }
  
    displayProductInfo() {
      return `Product ID: ${this.id}, Name: ${this.name}, Price: $${this.price}, Category: ${this.category}, Item: ${this.itemType}, Size: ${this.size}, Quantity: ${this.quantity}`;
    }
  
    updateQuantity(newQuantity) {
      this.quantity = newQuantity;
      return `The new quantity for ${this.name} is ${this.quantity}`;
    }
  
    addStock(amount) {
      this.quantity += amount;
      return `${amount} units added. New stock: ${this.quantity}`;
    }
  
    removeStock(amount) {
      if (amount > this.quantity) {
        return `Cannot remove ${amount} units. Only ${this.quantity} in stock.`;
      }
      this.quantity -= amount;
      return `${amount} units removed. Remaining stock: ${this.quantity}`;
    }
  
    applyDiscount(discountPercentage) {
      if (discountPercentage < 0 || discountPercentage > 100) {
        return `Invalid discount percentage.`;
      }
      this.discount = discountPercentage;
      return `${this.discount}% discount applied to ${this.name}.`;
    }
  
    calculateDiscountedPrice() {
      const discountAmount = (this.price * this.discount) / 100;
      return this.price - discountAmount;
    }
  
    addImage(imageUrl) {
      this.images.push(imageUrl);
      return `Image added to ${this.name}`;
    }
  
    removeImage(imageUrl) {
      const index = this.images.indexOf(imageUrl);
      if (index > -1) {
        this.images.splice(index, 1);
        return `Image removed from ${this.name}`;
      }
      return `Image not found.`;
    }
  
    addTag(tag) {
      if (!this.tags.includes(tag)) {
        this.tags.push(tag);
        return `Tag "${tag}" added to ${this.name}`;
      }
      return `Tag "${tag}" already exists for ${this.name}`;
    }
  
    removeTag(tag) {
      const index = this.tags.indexOf(tag);
      if (index > -1) {
        this.tags.splice(index, 1);
        return `Tag "${tag}" removed from ${this.name}`;
      }
      return `Tag "${tag}" not found.`;
    }

    addColor(color) {
      if (!this.colors.includes(color)) {
        this.colors.push(color);
        return `Color "${color}" added to ${this.name}`;
      }
      return `Color "${color}" already exists for ${this.name}`;
    }
  
    removeColor(color) {
      const index = this.colors.indexOf(color);
      if (index > -1) {
        this.colors.splice(index, 1);
        return `Color "${color}" removed from ${this.name}`;
      }
      return `Color "${color}" not found.`;
    }
  }
  
