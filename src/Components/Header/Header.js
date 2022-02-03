import React from 'react';
import Navigation from '../Navigation';
import mainRoutes from '../../routes/mainRoutes';
import GoBackButton from '../GoBackButton/GoBackButton';

const Header = () => {
  return (
    <header>
      <Navigation routes={mainRoutes} />
      <GoBackButton />
    </header>
  );
};

export default Header;
