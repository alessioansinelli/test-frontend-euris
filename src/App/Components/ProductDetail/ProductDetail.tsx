import {
  Button,
  Card,
  CardActions,
  CardContent,
  Chip,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import theme from '../../Theme/theme';
import { Reviews } from '../Review/Reviews';
import { UiLabels } from '../../Utils/UiLabels/uiLabels';
import { Delete, Edit } from '@mui/icons-material';
import { EditProduct } from '../EditProduct/EditProduct';

interface IProps {
  product: IProduct;
  storeId: string;
  deleteHandler: (storeId: string, productId: string) => any;
}

export const ProductDetail = (props: IProps) => {
  const [reviewOpen, setReviewOpen] = useState(false);
  const [edit, setEdit] = useState(false);
  const { title, description, price, category, employee, reviews } =
    props.product.data;
  const { deleteHandler, product, storeId } = props;

  const formattedPrice = price.toLocaleString('en-US', {
    style: 'currency',
    currency: 'EUR',
  });

  return (
    <>
      <Card sx={{ margin: '10px' }}>
        <CardContent sx={{ display: 'flex', flexFlow: 'column' }}>
          <div>
            <Typography
              variant="h5"
              component="div"
              sx={{ float: 'left', marginRight: theme.typography.pxToRem(16) }}
            >
              {`${title} (${formattedPrice})`}
            </Typography>
            {category && <Chip label={category} variant="outlined" />}
            <Button
              size="small"
              onClick={() => deleteHandler(storeId, product.id)}
              sx={{ float: 'right' }}
            >
              <Delete></Delete>
            </Button>
            <Button
              size="small"
              onClick={() => setEdit(!edit)}
              sx={{ float: 'right' }}
            >
              <Edit></Edit>
            </Button>
          </div>
          <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>
            {`${UiLabels.pages.productDetail.labels.employee}: ${employee}`}
            <br />
            {`${UiLabels.pages.productDetail.labels.description}: ${description}`}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={() => setReviewOpen(!reviewOpen)}>
            {!reviewOpen
              ? UiLabels.pages.productDetail.labels.showReviews
              : UiLabels.pages.productDetail.labels.hideReviews}
          </Button>
        </CardActions>
        {edit && (
          <CardContent>
            <EditProduct
              product={product}
              storeId={storeId}
              editProductHandler={() =>
                alert('Put not implemented on the server api')
              }
            ></EditProduct>
          </CardContent>
        )}
        {reviewOpen && (
          <CardContent>
            <Reviews reviews={reviews} isView={true}></Reviews>
          </CardContent>
        )}
      </Card>
    </>
  );
};
