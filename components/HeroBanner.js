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

export default function HeroBanner({ banner }) {
  const bannerImage = banner.image;
  return (
    <Card>
      <NextLink href="/" passHref>
        <CardActionArea>
          <CardMedia
            component="img"
            height="350"
            image={urlFor(bannerImage)}
            title={banner.name}
          ></CardMedia>

          <CardContent
            style={{
              position: 'absolute',
              color: '#203040',
              top: 10,
              left: '40%',
              transform: 'translateX(-50%)',
            }}
          >
            <Typography
              className="h1"
              variant="h1"
              style={{ fontSize: '2.5rem' }}
            >
              {banner.product}
            </Typography>

            <Typography
              style={{
                fontSize: '1.4rem',
                fontWeight: 'bolder',
                lineHeight: '2',
              }}
            >
              {banner.midText} <br /> {banner.desc} <br /> {banner.discount}
            </Typography>
            {/* <Typography>{banner.smallText}</Typography> */}
            {/* <Typography>{banner.desc}</Typography> */}
            {/* <Typography>{banner.discount}</Typography> */}
            {/* <Typography>{banner.saleTime}</Typography> */}
            <br />
            <Typography
              className="h1"
              variant="h1"
              style={{ fontSize: '1.8rem', fontWeight: 'bolder' }}
            >
              {banner.largeText}
            </Typography>
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
