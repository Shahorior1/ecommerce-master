import axios from 'axios';

const API = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor for adding auth token
API.interceptors.request.use(
  (config) => {
    const userInfo = localStorage.getItem('userInfo');
    if (userInfo) {
      config.headers.Authorization = `Bearer ${JSON.parse(userInfo).token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Products
export const getProducts = (keyword = '', pageNumber = '') => 
  API.get(`/products?keyword=${keyword}&pageNumber=${pageNumber}`);

export const getProductDetails = (id) => API.get(`/products/${id}`);

export const createProductReview = (productId, review) => 
  API.post(`/products/${productId}/reviews`, review);

// Authentication & Users
export const login = (email, password) => 
  API.post('/users/login', { email, password });

export const register = (name, email, password) => 
  API.post('/users', { name, email, password });

export const getUserProfile = () => API.get('/users/profile');

export const updateUserProfile = (user) => API.put('/users/profile', user);

// Orders
export const createOrder = (order) => API.post('/orders', order);

export const getOrderDetails = (id) => API.get(`/orders/${id}`);

export const payOrder = (orderId, paymentResult) => 
  API.put(`/orders/${orderId}/pay`, paymentResult);

export const getMyOrders = () => API.get('/orders/myorders');

// Admin routes
export const getUsers = () => API.get('/users');

export const deleteUser = (id) => API.delete(`/users/${id}`);

export const getUserDetails = (id) => API.get(`/users/${id}`);

export const updateUser = (user) => API.put(`/users/${user._id}`, user);

export const createProduct = () => API.post('/products');

export const updateProduct = (product) => 
  API.put(`/products/${product._id}`, product);

export const deleteProduct = (id) => API.delete(`/products/${id}`);

export const getOrders = () => API.get('/orders');

export const deliverOrder = (orderId) => 
  API.put(`/orders/${orderId}/deliver`); 