import axios from 'axios';

const rickAndMortyApi = axios.create({
  baseURL: 'https://rickandmortyapi.com/api',
});

export const getCharacterByQuery = async (query, page) => {
  const { data } = await rickAndMortyApi.get('/character', {
    params: {
      name: query,
      page,
    },
  });
  return data;
};

export const getCharacterById = async id => {
  const { data } = await rickAndMortyApi.get(`/character/${id}`);
  return data;
};
