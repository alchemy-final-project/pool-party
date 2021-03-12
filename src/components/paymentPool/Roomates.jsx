import { useState, useEffect, useRef } from 'react';
import { getAllRoomates } from '../../services/tenants';
import { getPayments } from '../../services/transaction';

export const useRoomates = () => {
  const [loading, setLoading] = useState(true);
  const [roomates, setRoomates] = useState([]);
  const [transactions, setTransactions] = useState([]);

  useEffect(async() => {
    setLoading(true);
    await getAllRoomates()
      .then(roomates => {
        setRoomates(roomates);
      });
    await getPayments()
      .then(transactions => {
        setTransactions(transactions);
        setLoading(false);
      });
  }, []);

  return {
    loading,
    roomates,
    transactions
  };
};
