import React from 'react';
import PropTypes from 'prop-types';
import styles from './RoomateList.css';
import beachball_balloon from '../../images/beachball_balloon.png';

const RoomateList = ({ transactions }) => {
    const roomateElements = transactions.map(transactions => (
        <div key={transactions.id} className={styles.container}>
            <img src={beachball_balloon} alt="beachball" />
            <li key={transactions.id} >
                {transactions.name}'s Monthly Cost Is
      </li >
            <li
                key={transactions.id}
                style={{
                    color: 'magenta',
                    fontSize: '30px',
                    fontWeight: 'bold'
                }}>

                ${transactions.monthly_cost}:
            </li>

            <li>{transactions.payment_confirmed === true
                ? 'Payment Processed'
                : transactions.payment_confirmed != null
                    ? 'Payment in Queue'
                    : 'Unpaid'}
            </li>
        </div >
    ));

    return (

        <ul className={styles.RoomateList} style={{ marginTop: '200px', minHeight: '300px' }}
            data-testid="roomates">
            <div className={styles.container}
                style={{
                    textAlign: "center",
                    display: "block",
                    paddingTop: "25px",
                    fontSize: '30px',
                    fontWeight: 'bold',
                    textDecoration: "underline"
                }}>
                Roommate Payment Status</div>
            {roomateElements}
        </ul>

    );
};

RoomateList.propTypes = {
    roomates: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            monthlyCost: PropTypes.number.isRequired
        }).isRequired
    ).isRequired,
    transactions: PropTypes.array
};

export default RoomateList;
