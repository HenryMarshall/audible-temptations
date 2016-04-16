import React from 'react';
import { connect } from 'react-redux';

type Props = {

};
export class Override extends React.Component {
  props: Props;

  render() {
    return (
      <div>Override</div>
    )
  }
}

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Override);
