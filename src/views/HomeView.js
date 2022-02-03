import React from 'react';
import Title from '../Components/Title';
import Trending from '../Components/Trending';

const HomeView = () => {
  return (
    <>
      <Title title="Trending today" />
      <Trending />
    </>
  );
};

export default HomeView;
