const classes = {
  section: {
    marginTop: 1,
    marginBottom: 1,
  },
  smallText: {
    fontSize: '15px',
  },
  goBack: {
    display: 'inline-block',
    padding: '2px 5px',
    borderRadius: '7px',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    border: '2px solid',
    '&:hover': {
      backgroundColor: '#203040',
      color: '#ffffff',
    },
  },
  bannerCardContent: {
    position: 'absolute',
    color: '#203040',
    top: 10,
    left: '10%',
    transform: 'translateX(-10%)',
  },
  main: {
    marginTop: 2,
    minHeight: '80vh',
  },
  footer: {
    marginTop: 1,
    textAlign: 'center',
  },
  appbar: {
    backgroundColor: '#203040',
    '& a': {
      color: '#ffffff',
      marginLeft: 1,
    },
  },
  toolbar: {
    justifyContent: 'space-between',
  },
  brand: {
    fontWeight: 800,
    fontSize: '2rem',
  },
};

export default classes;
