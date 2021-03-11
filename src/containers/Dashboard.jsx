import React from 'react';
import RoomateList from '../components/paymentPool/RoomateList';
import { useRoomates } from '../components/paymentPool/Roomates';
import styles from './Dashboard.css';

const Dashboard = () => {
  const { loading, roomates } = useRoomates();

  if (loading) return <h1>Loading</h1>;
  return <div className={styles.Dashboard}>

    {/* <h1>Dashboard</h1> */}
    <RoomateList
      roomates={roomates} />

    <button>Pay your bill</button>
  </div>
}

export default Dashboard;
