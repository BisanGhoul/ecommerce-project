
import axios from 'axios';

class SignupService {
  constructor() {
    this.loadUsers();
    this.api = axios.create({
      baseURL: 'http://localhost:3000', 
    });
  }

  loadUsers() {
    const users = localStorage.getItem('users');
    this.users = users ? JSON.parse(users) : []; 
  }
  async signup(userData) {
    try {
    //  const response = await this.api.post('/users', userData);
    const response = {};
    this.users.push(userData);
    localStorage.setItem('currentUser',JSON.stringify(userData) )
    localStorage.setItem('users', JSON.stringify(this.users));
    console.log('Current users:', this.users);
    //   return response.data;
    return this.users;
    } catch (error) {
      console.error('Error signing up user:', error);
      throw error;
    }
  }
}

export default new SignupService();
