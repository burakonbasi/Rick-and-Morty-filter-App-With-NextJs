"use client"; // Bunu ekledik

import { useState, useEffect } from "react";
import axios from "axios";

interface Character {
  id: number;
  name: string;
  status: string;
  gender: string;
  image: string;
}

export default function HomePage() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [statusFilter, setStatusFilter] = useState("");
  const [genderFilter, setGenderFilter] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("https://rickandmortyapi.com/api/character");
      setCharacters(response.data.results);
    };

    fetchData();
  }, []);

  const filteredCharacters = characters.filter((character) => {
    return (
      (statusFilter === "" || character.status === statusFilter) &&
      (genderFilter === "" || character.gender === genderFilter)
    );
  });

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Rick and Morty Characters</h1>
        <div className="flex justify-center space-x-4">
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="p-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">All Statuses</option>
            <option value="Alive">Alive</option>
            <option value="Dead">Dead</option>
            <option value="unknown">Unknown</option>
          </select>
          <select
            value={genderFilter}
            onChange={(e) => setGenderFilter(e.target.value)}
            className="p-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">All Genders</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Genderless">Genderless</option>
            <option value="unknown">Unknown</option>
          </select>
        </div>
      </header>
      <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredCharacters.map((character) => (
          <div
            key={character.id}
            className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={character.image}
              alt={character.name}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">{character.name}</h2>
              <p className="text-gray-600">Status: {character.status}</p>
              <p className="text-gray-600">Gender: {character.gender}</p>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}
