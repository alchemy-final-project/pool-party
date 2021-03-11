import { get } from './request';

export const getAllTransactionsByOwner = () => get('/api/v1/transactions');

export const getPayments = () => get('/api/v1/transactions/paymentStatus');
