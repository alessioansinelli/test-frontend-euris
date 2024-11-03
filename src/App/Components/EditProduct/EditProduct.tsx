import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Card,
  CardActions,
  Fab,
  TextField,
  Tooltip,
  Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { UiLabels } from '../../Utils/UiLabels/uiLabels';
import { Add, ExpandMore, Save } from '@mui/icons-material';
import theme from '../../Theme/theme';
import { Reviews } from '../Review/Reviews';

interface IProps {
  product: IProduct;
  editProductHandler: (product: IProduct, storeId: string) => void;
  storeId: string;
}

export const EditProduct = (props: IProps) => {
  const [addReview, setAddReview] = useState(false);
  const { id } = props.product;
  const { title, price, category, description, employee, reviews } =
    props.product.data;

  const [formName, setFormName] = useState(title);
  const [formEmployee, setFormEmployee] = useState(employee);
  const [formDescription, setFormDescription] = useState(description);
  const [formPrice, setFormPrice] = useState(price);
  const [formCategory, setFormCategory] = useState(category);
  const [formReviews, setFormReviews] = useState(reviews);
  const [addedReview, setAddedReview] = useState('');

  useEffect(() => {}, [formReviews, addedReview]);
  useEffect(() => setAddedReview(addedReview), [addedReview]);

  const saveProduct = () => {
    let missingItems: string[] = [];

    if (formName === '') {
      missingItems = [...missingItems, 'Nome prodotto'];
    }

    if (formDescription === '') {
      missingItems = [...missingItems, 'Descrizione'];
    }

    if (formCategory === '') {
      missingItems = [...missingItems, 'Categoria'];
    }

    if (formEmployee === '') {
      missingItems = [...missingItems, 'Impiegato'];
    }

    if (missingItems.length > 0) {
      alert(
        `Attenzione! Assicurarsi di aver compilato i campi obbligatori:\n- ${missingItems.join(
          '\n- '
        )}`
      );
      return;
    }

    const product: IProduct = {
      id: id,
      data: {
        title: formName,
        description: formDescription,
        category: formCategory,
        employee: formEmployee,
        price: formPrice,
        reviews: formReviews,
      },
    };

    props.editProductHandler(product, props.storeId);
  };

  return (
    <Card sx={{ padding: theme.typography.pxToRem(32) }}>
      <Typography>Nuovo prodotto</Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          columnGap: theme.typography.pxToRem(16),
          paddingTop: theme.typography.pxToRem(8),
          paddingBottom: theme.typography.pxToRem(8),
        }}
      >
        <TextField
          label={UiLabels.pages.shop.form.product}
          onChange={(e) => setFormName(e.target.value)}
          value={formName}
          variant="filled"
          required
          fullWidth
        ></TextField>
        <TextField
          label={UiLabels.pages.shop.form.category}
          onChange={(e) => setFormCategory(e.target.value)}
          value={formCategory}
          variant="filled"
          required
          sx={{ width: '25%' }}
        ></TextField>
        <TextField
          label={UiLabels.pages.shop.form.price}
          onChange={(e) => setFormPrice(Number(e.target.value))}
          value={formPrice}
          type="number"
          variant="filled"
          required
          sx={{ width: '200px' }}
        ></TextField>
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          columnGap: theme.typography.pxToRem(16),
          paddingTop: theme.typography.pxToRem(8),
          paddingBottom: theme.typography.pxToRem(8),
        }}
      >
        <TextField
          label={UiLabels.pages.shop.form.description}
          onChange={(e) => setFormDescription(e.target.value)}
          value={formDescription}
          variant="filled"
          required
          fullWidth
          multiline
        ></TextField>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          columnGap: theme.typography.pxToRem(16),
          paddingTop: theme.typography.pxToRem(8),
          paddingBottom: theme.typography.pxToRem(8),
        }}
      >
        <TextField
          label={UiLabels.pages.shop.form.employee}
          onChange={(e) => setFormEmployee(e.target.value)}
          value={formEmployee}
          variant="filled"
          required
        ></TextField>
      </Box>

      <Box>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMore color="primary"></ExpandMore>}
          >
            <Typography variant="h3" color="primary">
              {UiLabels.pages.shop.form.reviews}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            {formReviews.length === 0 ? (
              <Typography>{UiLabels.pages.shop.labels.emptyReviews}</Typography>
            ) : (
              <Reviews reviews={formReviews} isView={false}></Reviews>
            )}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                columnGap: theme.typography.pxToRem(8),
                marginTop: theme.typography.pxToRem(8),
              }}
            >
              <TextField
                label={UiLabels.pages.shop.form.review}
                onChange={(e) => {
                  setAddedReview(e.target.value);
                }}
                variant="filled"
                value={addedReview}
              ></TextField>
              <Tooltip
                title={UiLabels.pages.shop.labels.addReview}
                placement="right"
              >
                <Fab
                  color="secondary"
                  onClick={() => {
                    if (addedReview === '') {
                      alert('Inserire una recensione valida!');
                      return;
                    }
                    let reviews = [...formReviews, addedReview];
                    setFormReviews(reviews);
                    setAddReview(false);
                    setAddedReview('');
                  }}
                  size="small"
                >
                  <Add></Add>
                </Fab>
              </Tooltip>
            </Box>
          </AccordionDetails>
        </Accordion>
      </Box>
      <CardActions sx={{ paddingTop: theme.typography.pxToRem(32) }}>
        <Tooltip title={UiLabels.pages.shop.form.saveProduct} placement="right">
          <Fab onClick={() => saveProduct()} color="primary">
            <Save />
          </Fab>
        </Tooltip>
      </CardActions>
    </Card>
  );
};
