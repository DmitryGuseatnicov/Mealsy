import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routing from './Routing/Routing';
import './App.scss';

const App = () => {
  return (
    <BrowserRouter>
      <Routing />
    </BrowserRouter>
  );
};

export default App;
