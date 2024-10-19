import axios from 'axios';

class ApiService {
  constructor(baseURL) {
    this.api = axios.create({
      baseURL: baseURL,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  // GET request
  async get(url, params = {}) {
    try {
      const response = await this.api.get(url, { params });
      return response.data;
    } catch (error) {
      this.handleError(error);
    }
  }

  // POST request
  async post(url, data) {
    try {
      const response = await this.api.post(url, data);
      return response.data;
    } catch (error) {
      this.handleError(error);
    }
  }

  // PUT request
  async put(url, data) {
    try {
      const response = await this.api.put(url, data);
      return response.data;
    } catch (error) {
      this.handleError(error);
    }
  }

  // DELETE request
  async delete(url) {
    try {
      const response = await this.api.delete(url);
      return response.data;
    } catch (error) {
      this.handleError(error);
    }
  }

  // Error handler
  handleError(error) {
    console.error('API call failed. Error: ', error);
    throw error; // Rethrow to let calling components handle the error
  }
}

export default ApiService;
