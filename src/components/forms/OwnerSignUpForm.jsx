import React from 'react';
import PropTypes from 'prop-types';

function OwnerSignUpForm({ signupLink }) {
  return (
    <div>
      <a href={signupLink}>Link to stripe sign up</a>
    </div>
  );
}

OwnerSignUpForm.propTypes = {
  signupLink: PropTypes.string
};

export default OwnerSignUpForm;
