import { environment } from '../../environments/environment'
const BASE_API_URL = `${environment.host}:${environment.port}`;

export const URLSConfigs = {
    BASE_URL: BASE_API_URL,
    GET_SALES: 'sales',
    GET_LIBRARIES: 'library'
};
