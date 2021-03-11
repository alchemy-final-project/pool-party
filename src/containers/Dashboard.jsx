import React, { useEffect, useState } from 'react';
import RoomateList from '../components/paymentPool/RoomateList';
import { useRoomates } from '../components/paymentPool/Roomates';

const Dashboard = () => {
  const { loading, roomates } = useRoomates();

  if (loading) return <h1>Loading</h1>;
  return <div>
    <RoomateList
      roomates={roomates} />
    <button>Pay your bill</button>
  </div>
}

export default Dashboard;
