import { Typography } from '@mui/material';
import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Tek Store</title>
        <meta
          name="description"
          content="Tek Store, a digital shoping experience"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Typography component="h1" variant="h1">
        Tek Store
      </Typography>
    </div>
  );
}
