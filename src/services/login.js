const URL = 'https://pool-party-staging.herokuapp.com';

export const loginPost = (email, password) => {
  fetch(`${URL}/api/v1/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include',
    body: JSON.stringify({
      email,
      password,
    })
  });
};
