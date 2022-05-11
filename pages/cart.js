import {
  Box,
  Button,
  Card,
  Grid,
  Link,
  List,
  ListItem,
  MenuItem,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import axios from 'axios';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import NextLink from 'next/link';
import { useSnackbar } from 'notistack';
import { useContext } from 'react';
import Layout from '../components/Layout';
import { Store } from '../utils/Store';
import { useRouter } from 'next/router';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function CartScreen() {
  const router = useRouter();
  const {
    state: {
      cart: { cartItems },
    },
    dispatch,
  } = useContext(Store);

  const { enqueueSnackbar } = useSnackbar();

  const handleCheckout = async () => {
    router.push('/check');
  };

  const updateCartHandler = async (item, quantity) => {
    const { data } = await axios.get(`/api/products/${item._id}`);
    if (data.countInStock < quantity) {
      enqueueSnackbar('Sorry. Product is out of stock', { variant: 'error' });
      return;
    }

    dispatch({
      type: 'CART_ADD_ITEM',
      payload: {
        _key: item._key,
        name: item.name,
        countInStock: item.countInStock,
        slug: item.slug,
        price: item.price,
        image: item.image,
        quantity,
      },
    });

    enqueueSnackbar(`${item.name} updated in the cart`, {
      variant: 'success',
    });
  };
  const removeItemHandler = (item) => {
    dispatch({ type: 'CART_REMOVE_ITEM', payload: item });
  };

  return (
    <Layout title="Shopping Cart">
      <Typography component="h1" variant="h1">
        Shopping Cart
      </Typography>

      {cartItems.length === 0 ? (
        <Box>
          <Typography>
            Cart is empty.{' '}
            <NextLink href="/" passHref>
              <Link>Go shopping</Link>
            </NextLink>
          </Typography>
        </Box>
      ) : (
        <Grid container spacing={3}>
          <Grid item md={9} xs={12}>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Image</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell align="center">Qauntity</TableCell>
                    <TableCell align="right">Price</TableCell>
                    <TableCell align="right">Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {cartItems.map((item) => (
                    <TableRow key={item._key}>
                      <TableCell>
                        <NextLink href={`/product/${item.slug}`} passHref>
                          <Link>
                            {item.image.length > 0 && (
                              <Image
                                src={item.image}
                                alt={item.name}
                                width={50}
                                height={50}
                              ></Image>
                            )}
                          </Link>
                        </NextLink>
                      </TableCell>
                      <TableCell>
                        <NextLink href={`/product/${item.slug}`} passHref>
                          <Link>
                            <Typography>{item.name}</Typography>
                          </Link>
                        </NextLink>
                      </TableCell>
                      <TableCell align="center">
                        <Select
                          value={item.quantity}
                          onChange={(e) =>
                            updateCartHandler(item, e.target.value)
                          }
                        >
                          {[...Array(item.countInStock).keys()].map((x) => (
                            <MenuItem key={x + 1} value={x + 1}>
                              {x + 1}
                            </MenuItem>
                          ))}
                        </Select>
                      </TableCell>
                      <TableCell align="right">
                        <Typography>TL: &nbsp;{item.price}</Typography>
                      </TableCell>
                      <TableCell align="right">
                        <Button
                          variant="contained"
                          color="secondary"
                          onClick={() => removeItemHandler(item)}
                        >
                          Remove
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
          <Grid item md={3} xs={12}>
            <Card>
              <List>
                <ListItem>
                  <Typography variant="h2">CART SUMMARY</Typography>
                </ListItem>
                <ListItem>
                  <Typography>
                    Total Items:&nbsp;
                    <b>{cartItems.reduce((a, c) => a + c.quantity, 0)}</b>
                    <br />
                    Total Amount:&nbsp;
                    <b>
                      {cartItems.reduce((a, c) => a + c.quantity * c.price, 0)}
                      &nbsp; Lira
                    </b>
                  </Typography>
                </ListItem>
                <ListItem>
                  <Button
                    onClick={handleCheckout}
                    fullWidth
                    color="primary"
                    variant="contained"
                  >
                    Checkout
                  </Button>
                </ListItem>
              </List>
            </Card>
          </Grid>
        </Grid>
      )}
    </Layout>
  );
}

export default dynamic(() => Promise.resolve(CartScreen), { ssr: false });