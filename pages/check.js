import { Button, Typography } from '@mui/material';
import { useContext, useState } from 'react';
import { Store } from '../utils/Store';

const check = () => {
  const [qty, setQty] = useState(0);

  const {
    state: {
      cart: { cartItems },
    },
    dispatch,
  } = useContext(Store);

  const handleClickAdd = () => {
    qty++;
    setQty(qty);
  };
  const handleClickRemove = () => {
    if (qty <= 0) {
      console.log('No more qty');
    } else {
      qty--;
      setQty(qty);
    }
  };
  return (
    <div style={{ marginLeft: 50, justifyContent: 'space-between' }}>
      <h1>Checkout</h1>

      <Button onClick={handleClickAdd} variant="contained" color="secondary">
        Increase
      </Button>
      <br />
      <br />
      <Typography>
        {cartItems.length > 0 ? cartItems[0].quantity : ''}
      </Typography>
      <br />
      <Button onClick={handleClickRemove} variant="contained" color="secondary">
        Decrease
      </Button>
    </div>
  );
};

export default check;
