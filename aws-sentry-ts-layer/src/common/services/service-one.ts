import axios from 'axios';

export const getRandomCatFact = async () => {
  const response = await axios.get('https://catfact.ninja/fact');

  return response.data;
};
