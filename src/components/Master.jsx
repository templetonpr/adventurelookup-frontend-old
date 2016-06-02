import React, { Component } from 'react';
import Title from 'react-title-component';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { deepOrange500 } from 'material-ui/styles/colors';
import Footer from './Footer';


const styles = {
  container: {
    textAlign: 'center',
    paddingTop: 100,
    fontFamily: 'Roboto',
  },
  footer: {
    textAlign: 'center',
    paddingTop: 100,
    fontFamily: 'Roboto',
  },
};

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
});

class Master extends Component {
  constructor(props) {
    super(props);
    this.state = { drawerOpen: false };
  }

  handleDrawerToggle = () => this.setState({ drawerOpen: !this.state.drawerOpen });

  handleDrawerClose = () => this.setState({ drawerOpen: false });

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <Title render="Adventure Lookup" />
          <AppBar
            title={"Adventure Lookup"}
            zDepth={1}
            onLeftIconButtonTouchTap={this.handleDrawerToggle}
            iconElementRight={
              <IconMenu
                iconButtonElement={
                  <IconButton><MoreVertIcon /></IconButton>
                }
                targetOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
              >
                <MenuItem primaryText="Account" />
                <MenuItem primaryText="Help" />
                <MenuItem primaryText="Sign out" />
              </IconMenu>
            }
          />
          <Drawer
            open={this.state.drawerOpen}
            docked={false}
            onRequestChange={(open) => this.setState({ drawerOpen: open })}
          >
            <MenuItem onTouchTap={this.handleDrawerClose}>Home</MenuItem>
            <MenuItem onTouchTap={this.handleDrawerClose}>About</MenuItem>
            <MenuItem onTouchTap={this.handleDrawerClose}>Find</MenuItem>
            <MenuItem onTouchTap={this.handleDrawerClose}>Browse</MenuItem>
            <MenuItem onTouchTap={this.handleDrawerClose}>Add</MenuItem>
            <MenuItem onTouchTap={this.handleDrawerClose}>Account</MenuItem>
          </Drawer>
          <div style={styles.container}>
            <img src="images/logo.jpg" alt="logo" />
            <h1>Adventure awaits you!</h1>
            <p>Welcome to Adventure Lookup, a search engine for Dungeons and Dragons Adventures</p>
          </div>
          <Footer style={styles.footer} />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Master;
