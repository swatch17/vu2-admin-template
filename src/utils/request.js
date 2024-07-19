import axios from 'axios';

const instance = axios.create({
  baseURL: '/',
  timeout: 30000,
});

class CreateRequest {
  instance = null;
  constructor() {
    this.initial();
    this.interceptorsRequest();
    this.interceptorsResponse();
  }
  toLogin() {}
  initial() {
    this.instance = axios.create({
      baseURL: import.meta.env.VITE_REQUEST_BASE_URL,
      timeout: 30000,
      headers: { 'Cache-Control': 'no-cache' },
    });
    return this.instance;
  }
  interceptorsRequest() {
    this.instance.interceptors.request.use(
      (config) => {
        const token = '';
        if (token) {
        }
        return config;
      },
      (error) => Promise.reject(error)
    );
  }
  interceptorsResponse() {
    this.instance.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response?.status === 401) {
          // this.toLogin()
        }
        return Promise.reject(
          error.response?.data?.msg
            ? error.response.data
            : { msg: '服务器异常' }
        );
      }
    );
  }
  request(options) {
    return this.instance.request(options);
  }
  post(url, data, config) {
    return this.instance.post(url, data, config);
  }
  get(url, config) {
    return this.instance.get(url, config);
  }
}

const request = (options) => new CreateRequest().request(options);

export default request;
