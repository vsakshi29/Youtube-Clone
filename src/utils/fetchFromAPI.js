// import axios from 'axios';

// const BASE_URL = 'https://youtube-v2.p.rapidapi.com';
// const options = {
//   method: 'GET',
//   url: `${BASE_URL}/search/`,
//   params: {
//     query: 'bobby lee',
//     lang: 'en',
//     order_by: 'this_month',
//     country: 'us',
//     maxResult: '50' // This parameter should be added here if it's meant for all requests
//   },
//   headers: {
//     'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
//     'X-RapidAPI-Host': 'youtube-v2.p.rapidapi.com'
//   }
// };



// If you need to use the fetchFromAPI function elsewhere, it's now correctly defined and exported.


import axios from 'axios';

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
  params: {
    maxResults: '50',
  },
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  },
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};
