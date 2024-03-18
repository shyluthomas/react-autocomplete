import axios, { AxiosInstance } from 'axios';

// Create an Axios instance
const api: AxiosInstance = axios.create({
  baseURL: 'https://raw.githubusercontent.com/'
});

const service = {
    fetchUserData : async (): Promise<any> => {
        try {
          const response = await api.get('samayo/country-json/master/src/country-by-name.json');
          return response.data;
        } catch (error) {
          throw new Error('Failed to fetch user data');
        }
      }
}

export default service;