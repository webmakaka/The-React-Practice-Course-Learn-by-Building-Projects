import React from 'react';
import { Element } from 'react-scroll';

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
      style={{ height: '1300px', background: 'cornflowerblue' }}
    >
      <Header />
      <Element name="featured">
        <Featured />
      </Element>
      <Element name="venuenfo">
        <VunueNfo />
      </Element>
      <Element name="highlights">
        <HighLights />
      </Element>
      <Element name="pricing">
        <Pricing />
      </Element>
      <Element name="location">
        <Location />
      </Element>

      <Footer />
    </div>
  );
}

export default App;
