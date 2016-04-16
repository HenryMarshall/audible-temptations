import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

type Props = {

};
export class Override extends React.Component {
  props: Props;

  render() {
    return (
      <div>
        <Link to="/library">
          <img src="/override.png" style={{marginTop: "-110px"}}/>
        </Link>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Override);
