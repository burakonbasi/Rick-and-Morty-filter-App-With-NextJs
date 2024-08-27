import axios from 'axios';

export async function getCharacters() {
  const response = await axios.get('https://rickandmortyapi.com/api/character');
  return response.data.results;
}
