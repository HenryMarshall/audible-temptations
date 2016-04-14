import React, { Component } from 'react';
import actions from '../../actions';
const { recordAccessToken } = actions

class Auth extends Component {
  componentDidMount() {
    this.handleAmazonAuthResponse();
  }

  handleAmazonAuthResponse() {
    // Params are URI fragment following a hash, *not* real query params.
    const psuedoParams = this.props.location.hash || "";
    const regex = /access_token=([^&]*)/;
    const matches = psuedoParams.match(regex);
    if (matches) {
      const accessToken = matches[1];
      recordAccessToken(accessToken);
    }
    else {
      this.handleErrorInAuth(psuedoParams);
    }
  }

  handleErrorInAuth(psuedoParams) {
    const regex = /error=([^&]*)/;
    const matches = psuedoParams.match(regex);
    const message = (matches) 
      ? matches[1] 
      : "acces_token not in uri";
    console.error(message);

    // TODO: Handle error
  }
  

  render() {

    return (
      <h1>Authorized!</h1>
    )
  }
}

export default Auth;
