import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  Typography,
} from '@mui/material';
import React from 'react';
import { UiLabels } from '../../Utils/UiLabels/uiLabels';

interface IProps {
  reviews: string[];
  isView: boolean;
}

export const Reviews = (props: IProps) => {
  const { reviews, isView } = props;
  return reviews.length > 0 ? (
    <List sx={{ margin: 0, padding: 0 }}>
      {reviews.map((review, index) => (
        <ListItem key={index}>
          <ListItemAvatar>
            <Avatar></Avatar>
          </ListItemAvatar>
          <Typography>{review}</Typography>
        </ListItem>
      ))}
    </List>
  ) : (
    <Typography>
      {isView
        ? UiLabels.pages.shop.labels.emptyReviews
        : UiLabels.pages.shop.labels.emptyReviews}
    </Typography>
  );
};
