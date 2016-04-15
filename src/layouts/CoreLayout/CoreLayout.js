import React, { PropTypes } from 'react';
import PageChrome from '../PageChrome.js';

import '../../styles/reset.css';

function CoreLayout ({ 
  children,
  title,
}) {
  return (
    <div>
      <PageChrome/>
      {children}
    </div>
  )
}

CoreLayout.propTypes = {
  children: PropTypes.element
}

export default CoreLayout
