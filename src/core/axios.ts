import axios from 'axios';

const axiosClient = axios.create();

axiosClient.defaults.baseURL = process.env.API_URL || 'http://localhost:5001';

// При каждом запросе
axiosClient.interceptors.request.use((config) => {
  // Делаем проверку т.к. Next работает как на клиенте, так и на сервере
  // if (typeof window !== 'undefined') {
  //   const { _token } = parseCookies();
  //   config.headers.Authorization = 'Bearer ' + _token;
  config.headers['x-api-key'] = process.env.API_KEY;
  return config;
});

export default axiosClient;
