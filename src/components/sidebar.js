import React from 'react';
import { Link } from 'react-router-dom';
import {
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import {
  Devices,
  Event,
  Report, Settings,
} from '@material-ui/icons';

const Sidebar = () => {
  return (
    <div className="sidebar" style={{ width: '395px' }}>
      {/*<ul>*/}
      {/*  <li><Link to="/">Devices</Link></li>*/}
      {/*  <li><Link to="/reports">reports</Link></li>*/}
      {/*  <li><Link to="/events">events</Link></li>*/}
      {/*  <li><Link to="/settings">settings</Link></li>*/}
      {/*</ul>*/}
      <div className="toolbar"/>
      <List>
        <Link to="/" className="link">
          <ListItem button>
            <ListItemIcon><Devices/></ListItemIcon>
            <ListItemText>Devices</ListItemText>
          </ListItem>

          <Link to="/reports" className="link">
            <ListItem button>
              <ListItemIcon><Report/></ListItemIcon>
              <ListItemText>Reports</ListItemText>
            </ListItem>
          </Link>

          <Link to="/events" className="link">
            <ListItem button>
              <ListItemIcon><Event/></ListItemIcon>
              <ListItemText>Events</ListItemText>
            </ListItem>
          </Link>

          <Link to="/settings" className="link">
            <ListItem button>
              <ListItemIcon><Settings/></ListItemIcon>
              <ListItemText>Settings</ListItemText>
            </ListItem>
          </Link>
        </Link>
      </List>
      <Divider/>
    </div>
  );
};

export default Sidebar;
