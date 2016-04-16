import React from 'react'

import ListItem from 'material-ui/lib/lists/list-item';
import Avatar from 'material-ui/lib/avatar';
import Lock from 'material-ui/lib/svg-icons/action/lock'
import LockOpen from 'material-ui/lib/svg-icons/action/lock-open';

export default ({
  book,
  toggleHostage,
}) => {
  const {
    title,
    subtitle,
    isHostage,
  } = book;
  const image = book.product_images["500"];

  return (
    <ListItem
      leftAvatar={
        isHostage ? <Lock color="black" /> : <LockOpen color="c5c5c5" />
      }
      onClick={() => toggleHostage(book.asin)}
      primaryText={title}
      secondaryText={subtitle}
    >
    </ListItem>
  )
}

