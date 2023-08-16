import axios from 'axios';

export const getRandomCatFacts = async () => {
  const response = await axios.get('https://catfact.ninja/facts');

  return response.data;
};
