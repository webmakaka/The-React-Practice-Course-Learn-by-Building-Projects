import React from 'react';
import Featured from 'components/home/featured/';
import Matches from 'components/home/matches/';
import MeetPlayers from 'components/meet_players/';
import Promotion from 'components/home/promotion/';

const Home = () => {
  return (
    <div className="bck_blue">
      <Featured />
      <Matches />
      <MeetPlayers />
      <Promotion />
    </div>
  );
};

export default Home;
