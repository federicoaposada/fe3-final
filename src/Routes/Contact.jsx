import React, { useReducer } from 'react';
import Form from '../Components/Form';
import { Link } from 'react-router-dom';
import { useTheme } from '../Components/utils/ThemeContext';


const initialState = {
  nombre: '',
  email: '',
  isSubmitting: false,
  isError: false,
  isSuccess: false,
};

const formReducer = (state, action) => {
  switch (action.type) {
    case 'INPUT_CHANGE':
      return {
        ...state,
        [action.field]: action.value,
        isError: false,
        isSuccess: false,
      };
    case 'SUBMIT_FORM':
      return { ...state, isSubmitting: true };
    case 'SUBMIT_SUCCESS':
      return { ...state, isSubmitting: false, isSuccess: true };
    case 'SUBMIT_ERROR':
      return { ...state, isSubmitting: false, isError: true };
    default:
      return state;
  }
};

const Contact = () => {
  const { isDarkTheme } = useTheme();
  const [state, dispatch] = useReducer(formReducer, initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'SUBMIT_FORM' });

    // Simulamos un envío de formulario
    setTimeout(() => {
      if (state.nombre.length > 5 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(state.email)) {
        dispatch({ type: 'SUBMIT_SUCCESS' });
      } else {
        dispatch({ type: 'SUBMIT_ERROR' });
      }
    }, 1000);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: 'INPUT_CHANGE', field: name, value });
  };

  return (
    <main className={isDarkTheme ? 'dark' : 'light'}>
      <Link style={{ position: 'absolute' }} to="/">
        <button>◀</button>
      </Link>
      <h1>¿Quieres saber más?</h1>
      <p>Envíanos tus preguntas y nos pondremos en contacto contigo.</p>
      <Form
        onSubmit={handleSubmit}
        nombre={state.nombre}
        email={state.email}
        onInputChange={handleInputChange}
        isSubmitting={state.isSubmitting}
        isError={state.isError}
        isSuccess={state.isSuccess}
      />
    </main>
  );
};

export default Contact;
