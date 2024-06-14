import React from 'react';
import { Popover, Typography, Box, Button, Divider } from '@mui/material';
import styles from './CartModal.module.css'; 

const cartItems = [
  { id: 1, title: 'Descrição do produto', qtd: 1, image: '/path/to/image1.jpg' },
  { id: 2, title: 'Descrição do produto', qtd: 2, image: '/path/to/image2.jpg' }
];

const CartModal = ({ anchorEl, open, onClose }) => {
  const handleCheckout = () => {
    // Adicione a lógica para o checkout aqui
    console.log('Ir para o checkout');
    onClose();
  };

  return (
    <Popover
      open={open}
      anchorEl={anchorEl}
      onClose={onClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      className={styles.popover}
    >
      <Box className={styles.cartContent}>
        {cartItems.map(item => (
          <Box key={item.id} className={styles.cartItem}>
            <img src={item.image} alt={item.title} className={styles.productImage} />
            <Typography variant="body2" className={styles.productDescription}>
              {item.title}
            </Typography>
            <Typography variant="body2" className={styles.productQtd}>
              {item.qtd}
            </Typography>
            <Divider className={styles.divider} />
          </Box>
        ))}
        <Box className={styles.checkoutBox}>
          <Button onClick={handleCheckout} className={styles.checkoutButton}>
            Ir para o Checkout
          </Button>
          <Typography variant="body2" className={styles.totalText}>
            TOTAL
          </Typography>
        </Box>
      </Box>
    </Popover>
  );
};

export default CartModal;
