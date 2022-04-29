import { Alert, CircularProgress, Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import HeroBanner from '../components/HeroBanner';
import Layout from '../components/Layout';
import ProductItem from '../components/ProductItem';
import client from '../utils/client';

export default function Home() {
  const [state, setState] = useState({
    products: [],
    banner: [],
    error: '',
    loading: true,
  });
  const { loading, error, products, banner } = state;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const products = await client.fetch(`*[_type == "product"]`);
        const banner = await client.fetch(`*[_type == "banner"]`);
        setState({ products, banner, loading: false });
      } catch (err) {
        setState({ loading: false, error: err.message });
      }
    };
    fetchData();
  }, []);

  return (
    <Layout>
      {loading ? (
        <CircularProgress />
      ) : error ? (
        <Alert variant="danger">{error}</Alert>
      ) : (
        <>
          <Grid marginBottom={5}>
            {/* <HeroBanner heroBanner={banner.length && banner[0]} /> */}
            <HeroBanner banner={banner[0]} />
          </Grid>

          <Grid container spacing={3}>
            {products.map((product) => (
              <Grid item md={4} key={product._id}>
                <ProductItem product={product}></ProductItem>
              </Grid>
            ))}
          </Grid>
        </>
      )}
    </Layout>
  );
}
