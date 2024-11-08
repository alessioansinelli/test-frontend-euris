export interface DrawerState {
  open: boolean;
}

export interface DrawerChange {
  type: 'change';
}

export const drawerReducer = (
  drawerState: DrawerState,
  action: DrawerChange
): any => {
  if (action.type === 'change') {
    return {
      open: !drawerState.open,
    };
  }
  throw Error('Unknown action.');
};
