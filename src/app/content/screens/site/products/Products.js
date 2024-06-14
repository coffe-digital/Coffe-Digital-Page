import React from 'react';
import { Container, Typography, Grid, Card, CardMedia, CardContent, TextField, Box, Button, Pagination, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from '@mui/material';
import TopBar from '@/app/components/Topbar/TopbarSite';
import styles from './Products.module.css';
import Footer from '@/app/components/Footer/Footer';

const productsMock = [
  { title: 'Café do Cerrado', price: 'R$ 29,99', image: '' },
  { title: 'Café Mineirinho', price: 'R$ 35,99', image: '' },
  { title: 'Café Arábica', price: 'R$ 39,99', image: '' },
  { title: 'Café Extraforte', price: 'R$ 39,99', image: '' },
  { title: 'Café Bourbon', price: 'R$ 27,99', image: '' },
  { title: 'Café Robusta', price: 'R$ 29,99', image: '' },
  { title: 'Café ....', price: 'R$', image: '' },
  { title: 'Café ....', price: 'R$', image: '' },
  { title: 'Café ....', price: 'R$', image: '' },
  { title: 'Café ....', price: 'R$', image: '' },
  { title: 'Café ....', price: 'R$', image: '' },
  { title: 'Café ....', price: 'R$', image: '' }
];

const relatedProductsMock = [
  { title: 'Café ....', price: 'R$', image: '' },
  { title: 'Café ....', price: 'R$', image: '' },
  { title: 'Café ....', price: 'R$', image: '' },
  { title: 'Café ....', price: 'R$', image: '' },
]

const Products = () => {
  return (
    <div>
      <TopBar />
      <Container className={styles.container}>
        <Box className={styles.searchBox}>
          <TextField label="Faça sua pesquisa" variant="outlined" fullWidth />
          <Button variant="contained" color="primary" className={styles.searchButton}>Pesquisar</Button>
        </Box>
        <Grid container spacing={4}>
        <Grid item xs={12} md={3}>
            <Box className={styles.filterBox}>
              <Typography variant="h5">FILTROS</Typography>
              <FormControl component="fieldset" className={styles.filterCategory}>
                <FormLabel component="legend">Categoria</FormLabel>
                <RadioGroup aria-label="category" name="category">
                  <FormControlLabel value="grão" control={<Radio />} label="Grão" />
                  <FormControlLabel value="cápsula" control={<Radio />} label="Cápsula" />
                  <FormControlLabel value="moído" control={<Radio />} label="Moído" />
                </RadioGroup>
              </FormControl>
              <FormControl component="fieldset" className={styles.filterBrand}>
                <FormLabel component="legend">Marca</FormLabel>
                <RadioGroup aria-label="brand" name="brand">
                  <FormControlLabel value="coffeecode" control={<Radio />} label="CoffeeCode" />
                  <FormControlLabel value="dolce-gusto" control={<Radio />} label="Dolce Gusto" />
                </RadioGroup>
              </FormControl>
            </Box>
          </Grid>
          <Grid item xs={12} md={9}>
            
            <Grid container spacing={4} className={styles.productsGrid}>
              {productsMock.map((product, index) => (
                <Grid item key={index} xs={12} sm={6} md={4}>
                  <Card className={styles.productCard}>
                    <CardMedia
                      component="div"
                      className={styles.productImage}
                      style={{ backgroundColor: '#e0e0e0' }}
                      title={product.title}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h6" component="div">
                        {product.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {product.price}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
            <Box className={styles.paginationBox}>
              <Pagination count={5} variant="outlined" shape="rounded" />
            </Box>
          </Grid>
        </Grid>
        <Typography variant="h5" className={styles.relatedProductsTitle}>
          PRODUTOS RELACIONADOS
        </Typography>
        <Grid container spacing={5} className={styles.relatedProductsGrid}>
          {relatedProductsMock.map((product, index) => (
            <Grid item key={index} xs={12} sm={6} md={2}>
              <Card className={styles.productCard}>
                <CardMedia
                  component="div"
                  className={styles.productImage}
                  style={{ backgroundColor: '#e0e0e0' }}
                  title={product.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    {product.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {product.price}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Footer />
    </div>
  );
};

export default Products;
