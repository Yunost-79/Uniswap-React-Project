import React, { useState } from 'react';

import arrowImg from './assets/arrow.svg';

import './App.css';



const App: React.FC = () => {

  const [active, setActive] = useState<boolean>(true);

  const handleChangeActive = () => {
    setActive(!active);
  };

  const preventNegativeNumber = (e: { key: string; preventDefault: () => void }) => {
    if (e.key === '-' || e.key === 'Minus') {
      e.preventDefault();
    }
  };

  return (
    <div className="wrapper">
      <div className="container">
        <div className="content_block amounts_block">
          <h2 className="amount_title">ETH amount</h2>
          <input className="amount_input" type="number" min="0" onKeyDown={preventNegativeNumber} placeholder="000" />
        </div>
        {active ? (
          <div className="content_block convert_block" onClick={handleChangeActive}>
            <img className="convert_img left" src={arrowImg} alt="" />
            <h2 className="convert_title">Buy</h2>
          </div>
        ) : (
          <div className="content_block convert_block" onClick={handleChangeActive}>
            <h2 className="convert_title">Sell</h2>
            <img className="convert_img right" src={arrowImg} alt="" />
          </div>
        )}

        {/* <div className="content_block convert_block">
          <img className="convert_img left" src={arrowImg} alt="" />
          <h2 className="convert_title">Buy</h2>
        </div> */}

        <div className="content_block amounts_block">
          <h2 className="amount_title">USDT amount</h2>
          <input className="amount_input" type="number" min="0" onKeyDown={preventNegativeNumber} placeholder="111" />
        </div>
      </div>
    </div>
  );
};

export default App;
