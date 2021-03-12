import React from 'react';
import PropTypes from 'prop-types';
import styles from './RoomateList.css';
import beachball_balloon from '../../images/beachball_balloon.png';

const RoomateList = ({ roomates }) => {
  const roomateElements = roomates.map(roomate => (
    <div className={styles.container}>
      <img src={beachball_balloon} alt="beachball" />
      <li key={roomate.id} >
        {roomate.name}'s Monthly Cost Is
      </li >

      <li key={roomate.id} style={{ color: 'magenta', fontSize: '30px', fontWeight: 'bold' }}>
                ${roomate.monthlyCost}
      </li>
    </div >
  ));

  return <ul className={styles.RoomateList} style={{ marginTop: '300px', minHeight: '300px' }}
    data-testid="roomates">
    {roomateElements}
  </ul>;
};

RoomateList.propTypes = {
  roomates: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      monthlyCost: PropTypes.number.isRequired
    }).isRequired
  ).isRequired
};

export default RoomateList;
