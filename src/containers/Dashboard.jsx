import React from 'react';
import { useHistory } from 'react-router-dom';
import RoomateList from '../components/paymentPool/RoomateList';
import { useRoomates } from '../components/paymentPool/Roomates';
import styles from './Dashboard.css';

const Dashboard = () => {
  const { loading, roomates, transactions } = useRoomates();
  const history = useHistory();

  if (loading) return <h1>Loading</h1>;
  return <div className={styles.Dashboard}>

    <RoomateList
      roomates={roomates}
      transactions={transactions} />

    <button onClick={() => history.push('./payment')}>Pay your bill</button>
  </div>;
};

export default Dashboard;
