import React from 'react';
import Header from 'components/header_footer/Header';
import Featured from 'components/featured';
import VunueNfo from 'components/venueNfo';
import HighLights from 'components/highlights';
import Pricing from 'components/pricing';
import Location from 'components/location';
import Footer from 'components/header_footer/Footer';
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
      <HighLights />
      <Pricing />
      <Location />
      <Footer />
    </div>
  );
}

export default App;
