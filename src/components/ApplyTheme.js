import React from 'react';
import AppBar from 'material-ui/lib/app-bar';
import MyRawTheme from '../theme';
import ThemeManager from 'material-ui/lib/styles/theme-manager';

// Babel6 lacks ES7 decorator support (2016-02-25) so applying theme using ES5
// notation.

const ApplyTheme = React.createClass({
  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getChildContext() {
    return {
      muiTheme: ThemeManager.getMuiTheme(MyRawTheme)
    }
  },

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
})

export default ApplyTheme;
