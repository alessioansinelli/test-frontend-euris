import * as React from 'react';
import { styled, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import theme from '../Theme/theme';
import AppDrawer from './Drawer';
import { InitialContext, ShopContext } from '../Context/ShopContext';
import { DrawerHeader } from './Drawer/Styled';
import { Store } from './Store/Store';
import { StoreMain } from './Store/StoreMain';

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <ShopContext.Provider value={InitialContext}>
        <Box sx={{ display: 'flex' }}>
          <CssBaseline />
          <AppDrawer />
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <DrawerHeader />
            <StoreMain />
          </Box>
        </Box>
      </ShopContext.Provider>
    </ThemeProvider>
  );
};
