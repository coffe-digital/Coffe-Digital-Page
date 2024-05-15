const axios = require('axios');
const BASE_URL = "http://localhost:3000"

export class UserAPI {
  async createUser(user) {
    try {
      const response = await axios.post(`${BASE_URL}/api/users`, user);
      return response.data;
    } catch (error) {
      throw new Error('Erro ao criar usuário:', error);
    }
  }
}


