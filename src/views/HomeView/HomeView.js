import React from 'react';
import { Link } from 'react-router';
import RaisedButton from 'material-ui/lib/raised-button';
import { OAUTH_REQUEST } from '../../constants';

const Home = () => { 
  //<Link to="/filterLibrary" style={{padding: "24px"}} >
  return (
    <div>
      <img style={{marginTop: "64px"}} src="/intro.png" />
      <div 
        style={{ 
          position: "fixed",
          bottom: 16,
          left: 16,
          right: 16,
          zIndex: 3
        }}
      >
        <RaisedButton
          containerElement={<Link to="/manageLocations"/>}
          linkButton={true}
          fullWidth={true}
          label="Continue"
          style={{
            backgroundColor: "#F7991F",
            textAlign: "center"
            //margin: "auto 16px 16px 16px"
          }}
        />
      </div>
    </div>
  );
}

export default Home;
