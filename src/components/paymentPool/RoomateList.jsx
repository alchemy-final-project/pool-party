import React from 'react';
import PropTypes from 'prop-types';
import { useRoomates } from './Roomates';

const RoomateList = ({ roomates }) => {
    const roomateElements = roomates.map(roomate => (
        <>
            <li key={roomate.id}>
                {roomate.name}
            </li >

            <li key={roomate.id}>
                {roomate.monthlyCost}
            </li>
        </>
    ));

    return <ul
        // className={`${styles.RoomateList}`}
        data-testid="roomates">
        {roomateElements}
    </ul>
}

RoomateList.propTypes = {
    roomates: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            monthlyCost: PropTypes.number.isRequired
        }).isRequired
    ).isRequired
}

export default RoomateList;
