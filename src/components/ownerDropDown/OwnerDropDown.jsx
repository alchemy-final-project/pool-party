import React from 'react';
import PropTypes from 'prop-types';
import styles from './OwnerDropDown.css';

const OwnerDropDown = ({ owners, onOwnerChange }) => {
    const ownerElements = owners.map(owner =>
        <option key={owner.connectedAcctId} value={owner.id}>{owner.propertyAddress}</option>
    );

    return (
        <div className={styles.OwnerDropDown}>
            <label>Choose Your Property
            <select onChange={(event) => onOwnerChange(event.target.value)}>
                    {ownerElements}
                </select>
            </label>
        </div>
    );
}

OwnerDropDown.propTypes = {
    owners: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            connectedAcctId: PropTypes.string.isRequired,
            propertyAddress: PropTypes.string.isRequired,
        }).isRequired
    ).isRequired,
    onOwnerChange: PropTypes.func.isRequired
}

export default OwnerDropDown;
