/* eslint-disable */

const API_BASE_URL = 'https://api.tvmaze.com';

async function apiGet(queryString) {
  const response = await fetch(`${API_BASE_URL}${queryString}`).then(r =>
    r.json()
  );
  //  throw new Error('oops');
  return response;
}
export default apiGet;
