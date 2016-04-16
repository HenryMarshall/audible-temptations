import React, { PropTypes } from 'react';
import PageChrome from '../../components/PageChrome';

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
