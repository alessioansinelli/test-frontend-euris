import { IconButton, Toolbar, Typography } from '@mui/material';
import theme from '../../Theme/theme';
import React, { useContext, useReducer } from 'react';
import { UiLabels } from '../../Utils/UiLabels/uiLabels';

import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import DashboardIcon from '@mui/icons-material/Dashboard';
import MenuIcon from '@mui/icons-material/Menu';
import { drawerReducer } from '../../Context/DrawReducer';
import { AppBar, Drawer, DrawerHeader } from './Styled';
import { ShopContext } from '../../Context/ShopContext';

export const AppDrawer = () => {
  const shopContext = useContext(ShopContext);
  const [drawerState, dispatch] = useReducer(drawerReducer, { open: false });

  function changeDrawerState() {
    dispatch({ type: 'change' });
  }

  return (
    <>
      <AppBar position="fixed" open={drawerState.open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={changeDrawerState}
            edge="start"
            sx={[
              {
                marginRight: 5,
              },
              drawerState.open && { display: 'none' },
            ]}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h1" noWrap component="div">
            {shopContext.shopName}
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={drawerState.open}>
        <DrawerHeader>
          <IconButton onClick={changeDrawerState}>
            {theme.direction === 'rtl' ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <ListItem disablePadding sx={{ display: 'block' }}>
            <ListItemButton
              sx={[
                {
                  minHeight: 48,
                  px: 2.5,
                },
                drawerState.open
                  ? {
                      justifyContent: 'initial',
                    }
                  : {
                      justifyContent: 'center',
                    },
              ]}
            >
              <ListItemIcon
                sx={[
                  {
                    minWidth: 0,
                    justifyContent: 'center',
                  },
                  drawerState.open
                    ? {
                        mr: 3,
                      }
                    : {
                        mr: 'auto',
                      },
                ]}
              >
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText
                primary={UiLabels.menu.dashboard}
                sx={[
                  drawerState.open
                    ? {
                        opacity: 1,
                      }
                    : {
                        opacity: 0,
                      },
                ]}
              />
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />
      </Drawer>
    </>
  );
};
