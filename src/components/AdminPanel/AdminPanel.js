import React from 'react';
import { AppBar, Toolbar, Typography, Drawer, List, ListItem, ListItemText, CssBaseline } from '@mui/material';
import { styled } from '@mui/system';

const drawerWidth = 240;

// const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => ({
//   flexGrow: 1,
//   padding: theme.spacing(3),
//   transition: theme.transitions.create('margin', {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   marginLeft: `-${drawerWidth}px`,
//   ...(open && {
//     transition: theme.transitions.create('margin', {
//       easing: theme.transitions.easing.easeOut,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//     marginLeft: 0,
//   }),
// }));

const DrawerContainer = styled('div')({
  width: drawerWidth,
});

function AdminPanel() {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            Admin Panel
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerContainer>
          <List>
            <ListItem button>
              <ListItemText primary="Dashboard" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Users" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Settings" />
            </ListItem>
          </List>
        </DrawerContainer>
      </Drawer>
      <div open={open}>
        <Toolbar />
        <Typography paragraph>
          Content goes here...
        </Typography>
      </div>
    </div>
  );
}

export default AdminPanel;
