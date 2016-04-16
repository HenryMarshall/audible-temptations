import React from 'react'
import { Link } from 'react-router';

import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';

import { GYMS } from '../../constants';

type Props = {

};
export class ManageLocations extends React.Component {
  props: Props;

  render () {
    return (
      <div>
        <img styles={{ marginLeft: "25%" }}src="/gym_map.png"/>
        <List>
          {GYMS.map(gym => (
            <Link 
              key={gym.name}
              to="/filterLibrary" 
              style={{textDecoration: "none", color: "black"}}
            >
              <ListItem
                primaryText={gym.name}
                secondaryText={gym.location}
              />
            </Link>
          ))}
        </List>
      </div>
    )
  }
}

export default ManageLocations
