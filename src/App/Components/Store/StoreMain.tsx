import { useState } from 'react';
import { useQuery } from 'react-query';
import { fetchStores } from '../../Utils/api/fetchApi';
import { Skeleton } from '@mui/material';
import React from 'react';
import { Store } from './Store';

export const StoreMain = () => {
  const { isLoading, data } = useQuery('shop', async () => await fetchStores());

  if (isLoading) {
    return (
      <Skeleton variant="rectangular" width="100%" height="100%"></Skeleton>
    );
  } else {
    console.log('store loaded');
    console.log(data);
    return <Store storeId={data![0].id}></Store>;
  }
};
