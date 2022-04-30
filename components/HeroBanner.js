import React from 'react';
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material';
import NextLink from 'next/link';
import { urlFor } from '../utils/image';
import { lineHeight } from '@mui/system';
import classes from '../utils/classes';

export default function HeroBanner({ banner }) {
  const bannerImage = banner.image;
  return (
    <Card>
      <NextLink href="/" passHref>
        <CardActionArea>
          <CardMedia
            component="img"
            height="400"
            image={urlFor(bannerImage)}
            title={banner.name}
          ></CardMedia>

          <CardContent sx={classes.bannerCardContent}>
            <Typography className="h1" variant="h1">
              {banner.product}
            </Typography>

            {/* <Typography>
              {banner.midText} <br /> {banner.desc} <br /> {banner.discount}
            </Typography> */}
            {/* <Typography>{banner.smallText}</Typography> */}
            {/* <Typography>{banner.midText}</Typography> */}
            <Typography>{banner.desc}</Typography>
            <Typography>{banner.discount}</Typography>
            <Typography>{banner.saleTime}</Typography>
            <br />
            <Typography>{banner.largeText}</Typography>
          </CardContent>
        </CardActionArea>
      </NextLink>
      <CardActions>
        <Button variant="contained" fullWidth size="large" color="primary">
          {banner.buttonText}
        </Button>
      </CardActions>
    </Card>
  );
}
