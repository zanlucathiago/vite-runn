// import axios from 'axios';
import api from '../utils/api.js';

const API_URL = '/d/e/v/';

const getValidationList = (id, params) => api.get(`${API_URL}${id}`, { params }).then((response) => response.data);

const validationResource = {
  getValidationList,
};

export default validationResource;
