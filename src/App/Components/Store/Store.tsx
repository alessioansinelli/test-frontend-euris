import { Card, makeStyles, Skeleton } from '@mui/material';
import React from 'react';
import { useQuery } from 'react-query';
import { fetchStoreProducts, fetchStores } from '../../Utils/api/fetchApi';

interface IProps {
  storeId: string;
}

export const Store = (props: IProps) => {
  const { storeId } = props;

  const { isLoading, data } = useQuery(
    `product${storeId}`,
    async () => await fetchStoreProducts(storeId)
  );

  if (isLoading) {
    return (
      <Skeleton variant="rectangular" width="100%" height="100%"></Skeleton>
    );
  } else {
    return data?.map((product) => {
      return <Card>{product.data.title}</Card>;
    });
  }
};
