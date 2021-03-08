const URL = 'https://pool-party-staging.herokuapp.com';

export const signup = (fullName, address, rent, ownerId, email, password) => {
  fetch(`${URL}/api/v1/auth/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ 
      name: fullName,
      propertyAddress: address,
      monthlyCost: rent,
      ownerId,
      email,
      password,
    })
  });
};
