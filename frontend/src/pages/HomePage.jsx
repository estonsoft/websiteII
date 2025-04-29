import React from 'react';
import AboutUs from './AboutUs';
import Alert from './Alert';
import Dashboard from './Dashboard';
import WhatWeDo from './WhatWeDo';
import OurWork from './OurWork';
const HomePage = () => {
  return (
    <div>
      <section id="section1">
    <Dashboard />
      </section>
      <section id="section2">
      <Alert />
      </section>

      <section id="section3" >
      <AboutUs />
      </section>

      <section id="section4" >
      <WhatWeDo />
      </section>

      <section id="section5" >
      <OurWork />
      </section>
    </div>
  );
};

export default HomePage;
