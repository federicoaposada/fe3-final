import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { useTheme } from '../Components/utils/ThemeContext';


const Detail = () => {
  const { id } = useParams();
  const [dentist, setDentist] = useState(null);
  const { isDarkTheme } = useTheme();


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
        setDentist(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [id]);

  if (!dentist) {
    return <p>Cargando...</p>;
  }

  return (
    <main className={isDarkTheme ? 'dark' : 'light'}>
      <Link style={{position: 'absolute'}} to="/">
        <button>◀</button>
      </Link>
      <h1>Detalle del Dentista</h1>
      <p><b>Nombre: </b>{dentist.name}</p>
      <p><b>Correo electrónico: </b>{dentist.email}</p>
      <p><b>Teléfono: </b>{dentist.phone}</p>
      <p><b>Sitio web: </b>{dentist.website}</p>
    </main>
  );
};

export default Detail;