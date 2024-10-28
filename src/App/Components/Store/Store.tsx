import { Box, Card, Skeleton, Typography } from '@mui/material';
import React from 'react';
import { useQuery } from 'react-query';
import { fetchStoreProducts, fetchStores } from '../../Utils/api/fetchApi';
import { ProductDetail } from '../ProductDetail/ProductDetail';

interface IProps {
  storeId: string;
  store: IStore;
}

export const Store = (props: IProps) => {
  const { store, storeId } = props;

  const { isLoading, data } = useQuery(
    `product${storeId}`,
    async () => await fetchStoreProducts(storeId)
  );

  return (
    <>
      {isLoading && (
        <Skeleton variant="rectangular" width="100%" height="100%"></Skeleton>
      )}
      {!isLoading && (
        <>
          <Typography variant="h1">{store.data.name}</Typography>
          <Box
            width="100%"
            height="100%"
            display={'flex'}
            flexDirection={'column'}
          >
            {data?.map((product) => {
              return <ProductDetail product={product} key={product.id} />;
            })}
          </Box>
        </>
      )}
    </>
  );
};
