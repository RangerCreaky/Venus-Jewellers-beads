import React from 'react';
import Carousel from './components/Carousel';
import CardSmall from './components/CardSmall';
import { smallcards } from './utils/smallcards';
import CardRender from './components/CardRender';

const App = () => {
  const renderSmallCards = () => {
    return smallcards.map((card) => {
      return <CardSmall src={card.src} text={card.text} />;
    });
  };

  return (
    <div className="scroll-smooth bg-white">
      <Carousel />
      <div className="flex mt-8 flex-col md:flex-row justify-center items-center">
        {renderSmallCards()}
      </div>


      <CardRender />
    </div>
  )
};

export default App;
