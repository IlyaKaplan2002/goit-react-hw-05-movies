import React from 'react';
import Navigation from '../Navigation';
import mainRoutes from '../../routes/mainRoutes';

const Header = () => {
  return <Navigation routes={mainRoutes} />;
};

export default Header;
