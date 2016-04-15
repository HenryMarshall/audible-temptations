import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import AppBar from 'material-ui/lib/app-bar';
import LeftNav from 'material-ui/lib/left-nav';
import MenuItem from 'material-ui/lib/menus/menu-item';

class PageChrome extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  handleToggle = () => this.setState({open: !this.state.open})
  handleClose = () => this.setState({open: false})

  shout = () => console.log("clicked");

  render() {
    return(
      <div>
        <AppBar 
          title="Audible Temptations"
          onLeftIconButtonTouchTap={this.handleToggle}
        />
        <LeftNav
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={open => this.setState({open})}
          closeOnItemTouchTap={true}
        >
          <Link to="/" style={styles.link} >
            <MenuItem onTouchTap={this.handleClose} primaryText="Library" />
          </Link>

          <Link to="/filterLibrary" style={styles.link} >
            <MenuItem onTouchTap={this.handleClose} primaryText="Hostages" />
          </Link>

          <Link to="/manageLocations" style={styles.link} >
            <MenuItem onTouchTap={this.handleClose} primaryText="Choose Gym" />
          </Link>
          
          <Link to="/blackmail" style={styles.link} >
            <MenuItem onTouchTap={this.handleClose} primaryText="Manage Restrictions" />
          </Link>

          <Link to="/recommendations" style={styles.link} >
            <MenuItem onTouchTap={this.handleClose} primaryText="Book Recommendations" />
          </Link>
        </LeftNav>
      </div>
    )
  }
}

const styles = {
  link: {
    textDecoration: "none",
    color: "black"
  }
}

export default PageChrome;
