import React, { createContext } from 'react';
import Header from './Header';
import Main from './Main';

export const QueryContext = createContext();

const App = () => {
  return (
    <>
      <Header />
      <Main />
    </>
  );
};

export default App;
