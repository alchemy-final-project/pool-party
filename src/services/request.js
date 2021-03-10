const readHeaders = {};
const writeHeaders = {
  'Content-Type': 'application/json'
};
const headers = {
  POST: writeHeaders,
  GET: readHeaders,
  PUT: writeHeaders,
  DELETE: readHeaders
};

const request = (path, method, body) => {
  return fetch(`${process.env.API_URL}${path}`, {
    method,
    headers: headers[method],
    credentials: 'include',
    body: body ? JSON.stringify(body) : null
  })
    .then(res => Promise.all([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw json;
      return json;
    });
};

export const post = (path, body) => request(path, 'POST', body);
export const get = path => request(path, 'GET');
export const put = (path, body) => request(path, 'PUT', body);
export const del = path => request(path, 'DELETE');
