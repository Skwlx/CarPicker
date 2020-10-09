import { configureStore } from '@reduxjs/toolkit';
import { configure } from '@testing-library/react';
import React from 'react';
import Store from './store/configureStore';
import ConfigurationMenu from './components/configurationMenu';


const App = () => {
  return (
      <div>
      <ConfigurationMenu cars={Store.getState()} /> 
      </div>
  );
}

export default App;
