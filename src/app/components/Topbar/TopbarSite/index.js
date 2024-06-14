import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Button, Box, IconButton } from "@mui/material";
import Image from "next/image";
import { useRouter } from 'next/router';
import LogoCoffe from "../../../../../public/icons/logo-coffe-digital.png";
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LoginModal from "../../Modal/Site/Login/LoginModal";
import CartModal from "../../Modal/Site/CartModal/CartModal";
import styles from './TopbarSite.module.css';

const TopBar = () => {
  const router = useRouter();
  const [loginOpen, setLoginOpen] = useState(false);
  const [cartAnchorEl, setCartAnchorEl] = useState(null);

  const handleLoginOpen = () => {
    setLoginOpen(true);
  };

  const handleLoginClose = () => {
    setLoginOpen(false);
  };

  const handleCartClick = (event) => {
    setCartAnchorEl(cartAnchorEl ? null : event.currentTarget);
  };

  const handleCartClose = () => {
    setCartAnchorEl(null);
  };

  const cartOpen = Boolean(cartAnchorEl);

  return (
    <AppBar position="static" style={{ background: "#4E392A", padding: ".5rem" }}>
      <Toolbar className={styles.topbar}>
        <Box>
          <Image src={LogoCoffe.src} height={60} width={150} alt="CoffeeCode Logo" />
        </Box>

        <Box sx={{ marginRight: '5rem', flexGrow: 1, display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: '2rem' }}>
          <Button color="inherit" onClick={() => router.push('/inicio')}>Início</Button>
          <Button color="inherit" onClick={() => router.push('/produtos')}>Produtos</Button>
          <Button color="inherit" onClick={() => router.push('/contato')}>Contato</Button>
          <Button color="inherit" onClick={() => router.push('/sobre-nos')}>Sobre Nós</Button>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <IconButton color="inherit" onClick={handleLoginOpen}>
            <PersonIcon />
            <Typography variant="body2" style={{ marginLeft: '0.5rem' }}>Entrar/Cadastrar</Typography>
          </IconButton>
          <IconButton color="inherit" onClick={handleCartClick}>
            <ShoppingCartIcon />
            <Typography variant="body2" style={{ marginLeft: '0.5rem' }}>Carrinho</Typography>
          </IconButton>
        </Box>
      </Toolbar>
      <LoginModal open={loginOpen} onClose={handleLoginClose} />
      <CartModal anchorEl={cartAnchorEl} open={cartOpen} onClose={handleCartClose} />
    </AppBar>
  );
};

export default TopBar;
