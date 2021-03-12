import { get } from './request';

export const getAllOwners = () => get('/api/v1/owners');
