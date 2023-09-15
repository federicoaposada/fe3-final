import React from 'react';

const Form = ({ nombre, email, onInputChange, onSubmit, isSubmitting, isError, isSuccess }) => {
  return (
    <div>
      {isError && <p className="error-message"><b>Por favor verifique su información nuevamente</b></p>}
      {isSuccess && <p><b>Gracias {nombre}, te contactaremos cuando antes vía mail</b></p>}
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="nombre"
          placeholder="Nombre completo"
          value={nombre}
          onChange={onInputChange}
          disabled={isSubmitting}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={onInputChange}
          disabled={isSubmitting}
        />
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Enviando...' : 'Enviar'}
        </button>
      </form>
    </div>
  );
};

export default Form;
