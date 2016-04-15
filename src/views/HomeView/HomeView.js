import React from 'react';
import RaisedButton from 'material-ui/lib/raised-button';
import { OAUTH_REQUEST } from '../../constants';

const Home = () => { 
  console.log("OAUTH_REQUEST: ", OAUTH_REQUEST);
  return (
    <div>
      <p>Hold your next novel hostage at the gym</p>
      <RaisedButton
        label="Login with Amazon" 
        primary={true}
        linkButton={true}
        href={OAUTH_REQUEST}
      />
    </div>
  );
}

export default Home;
