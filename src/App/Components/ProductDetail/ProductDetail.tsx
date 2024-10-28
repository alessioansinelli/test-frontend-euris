import { Card, Typography } from '@mui/material';
import React from 'react';
import theme from '../../Theme/theme';

interface IProps {
  product: IProduct;
}

export const ProductDetail = (props: IProps) => {
  const { title, description, price, category, employee, reviews } =
    props.product.data;

  const formattedPrice = price.toLocaleString('en-US', {
    style: 'currency',
    currency: 'EUR',
  });

  return (
    <Card
      sx={{
        padding: theme.typography.pxToRem(16),
        margin: theme.typography.pxToRem(16),
      }}
    >
      <Typography variant="h3">{title}</Typography>
      <Typography>{description}</Typography>
      <Typography>{formattedPrice}</Typography>
      <Typography>{category}</Typography>
      <Typography>{employee}</Typography>
      {reviews.map((review) => (
        <Typography>{review}</Typography>
      ))}
    </Card>
  );
};
