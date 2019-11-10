import React from 'react';

import Dreawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const SideDrawer = props => {
  return (
    <Dreawer
      anchor="right"
      open={props.open}
      onClose={() => props.onClose(false)}
    >
      <List component="nav">
        <ListItem button onClick={() => console.log('Featured')}>
          Event starts in
        </ListItem>
        <ListItem button onClick={() => console.log('Venue Info')}>
          Venue Info
        </ListItem>
        <ListItem button onClick={() => console.log('Highlights')}>
          Highlights
        </ListItem>
        <ListItem button onClick={() => console.log('Pricing')}>
          Pricing
        </ListItem>
        <ListItem button onClick={() => console.log('Location')}>
          Location
        </ListItem>
      </List>
    </Dreawer>
  );
};

export default SideDrawer;
