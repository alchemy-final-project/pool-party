import React, { useEffect } from 'react';
import { getAllRoomates } from '../services/tenants';


function Dashboard() {
  useEffect(() => {
    getAllRoomates()
      .then(console.log);
  }, []);

  return (
    <div>
      <p>TENANT DASHBOARD PAGE</p>
      <p>TENANT DASHBOARD PAGE</p>
      <p>TENANT DASHBOARD PAGE</p>
      <p>TENANT DASHBOARD PAGE</p>
      <button>Pay your bill</button>
    </div>
  );
}

export default Dashboard;
