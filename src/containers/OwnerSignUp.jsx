import React, { useEffect } from 'react';
import OwnerSignUpForm from '../components/forms/OwnerSignUpForm';

function OwnerSignUp() {
  //function to get signup link under useEffect eventually  
  const signupLink = 'https://connect.stripe.com/oauth/authorize?redirect_uri=https://connect.stripe.com/hosted/oauth&client_id=ca_J3Rq7emD4J6wnCq2Chx2s5RCaDe99mbl&state=onbrd_J3ueV5wCyVqDyzRJvSjgFnh4Ga&response_type=code&scope=read_write&stripe_user[country]=US';


  return (
    <div>
      <OwnerSignUpForm signupLink={signupLink}/> 
    </div>
  );
}

export default OwnerSignUp;
