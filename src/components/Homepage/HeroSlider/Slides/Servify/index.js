// Libraries
import React from 'react';

// Dependencies
import mockup from 'static/images/hero_slider/servify/mockup_no_bg.png';

// Components
import Slide from '../Slide';

const Servify = () => (
  <Slide
    title="Servify"
    caption="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
    src={mockup}
    slideNumber={1}
  />
);

export default Servify;
