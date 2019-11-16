import React from 'react';
import Featured from 'components/home/featured/';
import Matches from 'components/home/matches/';
import MeetPlayers from 'components/meet_players/';

const Home = () => {
  return (
    <div className="bck_blue">
      <Featured />
      <Matches />
      <MeetPlayers />
    </div>
  );
};

export default Home;
