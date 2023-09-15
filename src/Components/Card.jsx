import React, { useState } from "react";
import { Link } from "react-router-dom"; // Importa Link
import { useTheme } from '../Components/utils/ThemeContext';

const Card = ({ name, username, id }) => {
  const { isDarkTheme } = useTheme();
  const [isFavorite, setIsFavorite] = useState(
    JSON.parse(localStorage.getItem("favoriteDentists"))?.includes(id) || false
  );

  const toggleFavorite = () => {
    const favoriteDentists =
      JSON.parse(localStorage.getItem("favoriteDentists")) || [];

    if (isFavorite) {
      const updatedFavorites = favoriteDentists.filter(
        (dentistId) => dentistId !== id
      );
      localStorage.setItem("favoriteDentists", JSON.stringify(updatedFavorites));
      alert("Dentista removido de favoritos");
    } else {
      favoriteDentists.push(id);
      localStorage.setItem("favoriteDentists", JSON.stringify(favoriteDentists));
      alert("Dentista agregado a favoritos");
    }

    setIsFavorite(!isFavorite);
  };

  return (
    <div className="card">
      <Link to={`/dentist/${id}`} className="detail-link">
        <img src="./images/doctor.jpg" alt="doctor" />
        <p><b>{name}</b></p>
        <p>{username}</p>
      </Link>
      <button onClick={toggleFavorite}  className={isDarkTheme ? 'dark' : 'light'}>
        {isFavorite ? "❤️" : "🤍"}
      </button>
    </div>
  );
};

export default Card;
