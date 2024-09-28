import React from 'react';
import Price from './Price';
import Phero from './Phero';
import Pcredits from './Pcredits';
import Pready from './Pready';

function Pricing(){
  return(
    <>
      <Phero />
      <Pcredits />
      <Price />
      <Pready />
    </>
  );
}


export default Pricing;