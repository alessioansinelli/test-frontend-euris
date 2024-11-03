import { Box, Fab, Skeleton, Tooltip, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useQuery, useQueryClient } from 'react-query';
import {
  deleteProduct,
  fetchStoreProducts,
  insertProduct,
} from '../../Utils/api/fetchApi';
import { ProductDetail } from '../ProductDetail/ProductDetail';
import { Add } from '@mui/icons-material';
import { EditProduct } from '../EditProduct/EditProduct';
import theme from '../../Theme/theme';

interface IProps {
  storeId: string;
  store: IStore;
}

export const Store = (props: IProps) => {
  const [showNewProduct, setShowNewProduct] = useState(false);
  const queryClient = useQueryClient();

  const { store, storeId } = props;

  const { isLoading, data } = useQuery(
    `products`,
    async () => await fetchStoreProducts(storeId)
  );

  const initProduct: IProduct = {
    id: '',
    data: {
      category: '',
      description: '',
      employee: '',
      price: 0,
      reviews: [],
      title: '',
    },
  };

  const deleteProductFunction = (storeId: string, productId: string) => {
    deleteProduct(storeId, productId).then(() => {
      queryClient.invalidateQueries(['products']);
    });
  };

  const insertNewProduct = (product: IProduct, storeId: string) => {
    insertProduct(storeId, product.data).then((result) => {
      queryClient.invalidateQueries(['products']);
    });
  };

  return (
    <>
      {isLoading && (
        <Skeleton variant="rectangular" width="100%" height="100%"></Skeleton>
      )}
      {!isLoading && (
        <>
          <Box display={'flex'} sx={{ columnGap: theme.typography.pxToRem(8) }}>
            <Typography variant="h1">{store.data.name}</Typography>
            <Tooltip title="Aggiungi nuovo prodotto">
              <Fab
                onClick={() => setShowNewProduct(!showNewProduct)}
                color="primary"
                size="small"
                sx={{ padding: theme.typography.pxToRem(8) }}
              >
                <Add></Add>
              </Fab>
            </Tooltip>
          </Box>
          {showNewProduct && (
            <EditProduct
              product={initProduct}
              storeId={storeId}
              editProductHandler={insertNewProduct}
            />
          )}
          <Box display={'flex'} flexDirection={'column'}>
            {data?.map((product) => {
              return (
                <ProductDetail
                  product={product}
                  key={product.id}
                  storeId={storeId}
                  deleteHandler={deleteProductFunction}
                />
              );
            })}
          </Box>
        </>
      )}
    </>
  );
};
