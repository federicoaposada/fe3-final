import React, { useEffect, useState } from "react";
import Card from "../Components/Card";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useTheme } from '../Components/utils/ThemeContext';

const Favs = () => {
  const [dentistsDetails, setDentistsDetails] = useState([]);
  const { isDarkTheme } = useTheme();

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favoriteDentists")) || [];

    const uniqueFavorites = [...new Set(favorites)];

    const fetchFavoriteDentistsDetails = async () => {
      try {
        const responses = await Promise.all(
          uniqueFavorites.map(async (dentistId) => {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${dentistId}`);
            return response.data;
          })
        );

        // Mapear la respuesta para tener el formato que deseas
        const formattedFavorites = responses.map((dentist) => ({
          name: dentist.name,
          username: dentist.username,
          id: dentist.id
        }));

        setDentistsDetails(formattedFavorites);

        // Agregar los favoritos al Local Storage
        localStorage.setItem("favoriteDentistsDetails", JSON.stringify(formattedFavorites));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchFavoriteDentistsDetails();
  }, []);

  return (
    <main className={isDarkTheme ? 'dark' : 'light'}>
      <Link style={{position: 'absolute'}} to="/">
        <button>◀</button>
      </Link>
      <h1>Dentistas Favoritos</h1>
      <div className="card-grid">
        {dentistsDetails.map((dentist) => (
          <Card key={dentist.id} id={dentist.id} name={dentist.name} username={dentist.username} />
        ))}
      </div>
    </main>
  );
};

export default Favs;
