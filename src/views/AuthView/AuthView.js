import React from 'react';
import { connect } from 'react-redux';

import { actions } from '../../redux/modules/Auth';

type Props = {

};
export class Auth extends React.Component {
  props: Props;

  componentDidMount() {
    this.handleAmazonAuthResponse();
  }

  handleAmazonAuthResponse() {
    const accessTokenRegex = /access_token=([^&]*)/;
    const accessToken = this.extractPsuedoParam(accessTokenRegex);
    if (accessToken) {
      this.props.saveToken(accessToken);
    }
    else {
      this.handleErrorInAuth();
    }
  }

  handleErrorInAuth(psuedoParams) {
    const regex = /error=([^&]*)/;
    const message = this.extractPsuedoParam(regex) || "access_token not in URI";
    console.error(message);

    // TODO: Handle error
  }

  extractPsuedoParam(regex) {
    // Params are URI fragment following a hash, *not* real query params.
    const psuedoParams = this.props.location.hash || "";
    const matches = psuedoParams.match(regex);
    return (matches) ? matches[1] : null;
  }
  

  render() {
    return (
      <h1>Authorized!</h1>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  saveToken: (accessToken) => {
    dispatch(actions.saveAudibleAccessToken(accessToken));
  }
});

export default connect(null, mapDispatchToProps)(Auth);
