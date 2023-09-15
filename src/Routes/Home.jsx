import React, { useEffect, useState } from 'react';
import Card from '../Components/Card';
import axios from 'axios';
import { useTheme } from '../Components/utils/ThemeContext';


const Home = () => {
  const [dentists, setDentists] = useState([]);
  const { isDarkTheme } = useTheme();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setDentists(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <main className={isDarkTheme ? 'dark' : 'light'}>
      <h1>Home</h1>
      <div className='card-grid'>
        {dentists.map((dentist) => (
          <Card key={dentist.id} name={dentist.name} username={dentist.username} id={dentist.id} />
        ))}
      </div>
    </main>
  );
};

export default Home;