import React from 'react';
import Intro from './Intro';


const Home = () => {
  return (
    <div className="container">
      <h2>Welcome!</h2>
      <Intro page="home" />
    </div>
  );
}

export default Home;