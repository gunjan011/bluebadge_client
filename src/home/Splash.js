import React from 'react';
import PoemsIndex from '../poems/PoemsIndex';

const Splash = (props) => {
  return (
      <div>
          <PoemsIndex token= {props.sessionToken} />
      </div>
  ) 
}

export default Splash;