import { Card, makeStyles } from '@mui/material';
import React from 'react';
import { useQuery } from 'react-query';
import { fetchStoreProducts, fetchStores } from '../../Utils/api/fetchApi';

interface IProps {
  storeId: string;
}

export const Store = (props: IProps) => {
  const { storeId } = props;

  const { isLoading, data } = useQuery(
    'shop',
    async () => await fetchStoreProducts(storeId)
  );

  return (
    <>
      <Card>{storeId}</Card>
    </>
  );
};
