import PropTypes from 'prop-types';
import React, { useState } from 'react';
import RecipesContext from './RecipesContext';

function RecipesProvider({ children }) {
  const [state1, setState1] = useState('oie');

  const obj = {
    state1,
    setState1,
  };

  return (
    <RecipesContext.Provider value={ obj } displayName="Context Display Name">
      { children }
    </RecipesContext.Provider>
  );
}

RecipesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default RecipesProvider;
