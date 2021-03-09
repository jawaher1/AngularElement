import { environment } from '../../environments/environment'
const BASE_API_URL = `${environment.host}:${environment.port}`;

export const URLSConfigs = {
  BASE_URL: BASE_API_URL,
  GET_BOOKS: 'book',
  GET_LIBRARIES :'library',
  GET_MAGAZINES :'magazine'
};
