import {
  AppBar,
  Box,
  Container,
  CssBaseline,
  Link,
  ThemeProvider,
  Toolbar,
  Typography,
} from '@mui/material';
import Head from 'next/head';
import NextLink from 'next/link';
import classes from '../utils/classes';
import LayoutTheme from '../utils/LayoutTheme';

export default function Layout({ title, description, children }) {
  return (
    <>
      <Head>
        <title>{title ? `${title} - Tek Store` : 'Tek Store'}</title>
        {description && <meta name="description" content={description}></meta>}
      </Head>
      <ThemeProvider theme={LayoutTheme}>
        <CssBaseline />
        {/* The Navbar section where the Navbar will be put */}
        <AppBar position="sticky" sx={classes.appbar}>
          <Toolbar sx={classes.toolbar}>
            <NextLink href="/" passHref>
              <Link>
                <Typography sx={classes.brand}>TEKStore</Typography>
              </Link>
            </NextLink>
          </Toolbar>
        </AppBar>

        {/* The main component or the main div where each and every element will be rendered */}
        <Container component="main" sx={classes.main}>
          {children}
        </Container>
        {/* The Footer section */}
        <Box component="footer" sx={classes.footer}>
          <Typography>All rights reserved. Tek Store &copy;2022</Typography>
        </Box>
      </ThemeProvider>
    </>
  );
}
