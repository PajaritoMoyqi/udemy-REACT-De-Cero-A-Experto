// return html to index.js(padre)

import React from 'react'; // to use jsx
import propTypes from 'prop-types';

const App = ({ saludo, subtitulo }) => {
  if(!saludo){
    throw new Error('El saludo es necesario');
  }

  return (
    <>
      <h1> { saludo } </h1>
      <p> { subtitulo } </p>
    </>
  );
}

// need property from index.js

App.propTypes = {
  saludo: propTypes.string.isRequired
}  // variable condition
App.defaultProps = {
  subtitulo: 'Mi Primera Aplicacion'
}  // variable default. no need any import. why?

export default App; // export App.js