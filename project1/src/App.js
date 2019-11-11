import React from 'react';
import Header from 'components/header_footer/Header';
import Featured from 'components/featured';
import VunueNfo from 'components/venueNfo';
import 'resources/styles.css';

function App() {
  return (
    <div
      className="App"
      style={{ height: '1500px', background: 'cornflowerblue' }}
    >
      <Header />
      <Featured />
      <VunueNfo />
    </div>
  );
}

export default App;
