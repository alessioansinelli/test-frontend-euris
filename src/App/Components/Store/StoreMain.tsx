import { useQuery } from 'react-query';
import { fetchStores } from '../../Utils/api/fetchApi';
import { Box, Skeleton } from '@mui/material';
import React from 'react';
import { Store } from './Store';

export const StoreMain = () => {
  const { isLoading, data } = useQuery('shop', async () => await fetchStores());

  return (
    <>
      {isLoading && (
        <Skeleton variant="rounded" width="100%" height="100%"></Skeleton>
      )}

      {!isLoading && <Store storeId={data![0].id} store={data![0]} />}
    </>
  );
};
