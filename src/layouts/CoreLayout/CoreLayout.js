import React, { PropTypes } from 'react';

import '../../styles/reset.css';
import AppBar from 'material-ui/lib/app-bar';

// Note: Stateless/function components *will not* hot reload!
// react-transform *only* works on component classes.
//
// Since layouts rarely change, they are a good place to
// leverage React's new Stateless Functions:
// https://facebook.github.io/react/docs/reusable-components.html#stateless-functions
//
// CoreLayout is a pure function of its props, so we can
// define it with a plain javascript function...
function CoreLayout ({ 
  children,
  title,
}) {
  return (
    <div>
      <AppBar
        title="Audible Temptations"
      />
      {children}
    </div>
  )
}

CoreLayout.propTypes = {
  children: PropTypes.element
}

export default CoreLayout
