// import axios from 'axios';
import api from '../utils/api.js';

const API_URL = '/d/e/';

const createDocument = (id, document) => api.post(`${API_URL}${id}`, document).then((response) => response.data);

const getDocumentList = (id) => api.get(`${API_URL}${id}`).then((response) => response.data);

const getDocument = (id, params) => api.get(`${API_URL}${id}/view`, { params }).then((response) => response.data);

const documentResource = {
  createDocument,
  getDocument,
  getDocumentList,
};

export default documentResource;
