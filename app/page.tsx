import { getCharacters } from '@/lib/api';
import HomePage from '@/components/HomePage';

export default async function Page() {
  const characters = await getCharacters();
  return <HomePage characters={characters} />;
}
