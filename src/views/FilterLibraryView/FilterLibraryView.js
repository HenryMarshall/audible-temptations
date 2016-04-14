import React from 'react'
import { connect } from 'react-redux';

type Props = {

};
export class FilterLibrary extends React.Component {
  props: Props;

  render () {
    debugger;

    return (
      <div>
        Your Books!
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    accessToken: state.auth.audibleAccessToken,
  }
};
export default connect(mapStateToProps)(FilterLibrary);
