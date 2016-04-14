import React from 'react';
import { OAUTH_REQUEST } from '../../constants/AppConstants';

import RaisedButton from 'material-ui/lib/raised-button';

const Home = () => (
  <div>
    <p>Hold your next novel hostage at the gym</p>
    <RaisedButton
      label="Login with Amazon" 
      primary={true}
      linkButton={true}
      href={OAUTH_REQUEST}
    />
  </div>
)

export default Home;
