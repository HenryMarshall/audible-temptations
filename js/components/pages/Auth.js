import React, { Component } from 'react';
import { recordAccessToken } from '../../actions';

class Auth extends Component {
  componentDidMount() {
  }

  

  render() {
    // Params are URI fragment following a hash, *not* real query params.
    const psuedoParams = this.props.location.hash;
    const accessTokenRegex = /access_token=([^&]*)/;
    const accessToken = psuedoParams.match(accessTokenRegex)[1];
    //recordAccessToken(accessToken);
    console.log(accessToken);

    return (
      <h1>Authorized!</h1>
    )
  }
}

export default Auth;
