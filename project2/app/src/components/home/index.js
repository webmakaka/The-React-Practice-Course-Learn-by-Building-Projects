import React from 'react';
import Featured from 'components/home/featured/';
import Matches from 'components/home/matches/';

const Home = () => {
  return (
    <div className="bck_blue">
      <Featured />
      <Matches />
    </div>
  );
};

export default Home;
