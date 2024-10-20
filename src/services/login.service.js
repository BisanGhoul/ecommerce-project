import axios from 'axios';

class LoginService {
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

  async login(email, password) {
    try {
      const user = this.users.find(
        (user) => user.email === email && user.password === password
      );

      if (user) {
        console.log('Login successful:', user);
        localStorage.setItem('currentUser',JSON.stringify(userData) )

        return { success: true, user };
      } else {
        console.log('Invalid credentials');
        return { success: false, message: 'Invalid email or password.' };
      }
      
      // const response = await this.api.post('/login', { email, password });
      // return response.data;
      
    } catch (error) {
      console.error('Error logging in user:', error);
      throw error;
    }
  }
}

export default new LoginService();
