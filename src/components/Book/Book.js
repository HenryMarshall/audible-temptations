import React from 'react'

import ListItem from 'material-ui/lib/lists/list-item';
import Avatar from 'material-ui/lib/avatar';

export default ({
  title,
  subtitle,
  image,
}) => (
  <ListItem
    leftAvatar={<Avatar src={image} />}
    primaryText={title}
    secondaryText={subtitle}
  >
  </ListItem>
)

