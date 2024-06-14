import React from 'react';
import { Container, Grid, Card, CardMedia, CardContent, Typography, Box, Button } from '@mui/material';
import Slider from 'react-slick';
import styles from './home.module.css';
import TopBar from '@/app/components/Topbar/TopbarSite';
import Footer from '@/app/components/Footer/Footer';

const products = [
  { title: 'Café do Cerrado', price: 'R$ 29,99', image: '' },
  { title: 'Café Mineirinho', price: 'R$ 35,99', image: '' },
  { title: 'Café Arábica', price: 'R$ 39,99', image: '' },
  { title: 'Café Extraforte', price: 'R$ 39,99', image: '' },
  { title: 'Café Bourbon', price: 'R$ 27,99', image: '' },
  { title: 'Café Robusta', price: 'R$ 29,99', image: '' }
];

const plans = [
  { title: 'Plano Básico', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec vestibulum eros. Phasellus tincidunt scelerisque ligula at semper. Morbi commodo risus sed risus condimentum posuere.', image: '' },
  { title: 'Plano Standard', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec vestibulum eros. Phasellus tincidunt scelerisque ligula at semper. Morbi commodo risus sed risus condimentum posuere.', image: '' },
  { title: 'Plano Premium', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec vestibulum eros. Phasellus tincidunt scelerisque ligula at semper. Morbi commodo risus sed risus condimentum posuere.', image: '' }
];

const CoffeeCode = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div>
      <TopBar />
      <Box className={styles.home__background}>
        <Container>
          {/* Hero Section or any other content */}
        </Container>
      </Box>

      {/* Best Sellers Section */}
      <Container sx={{ padding: '50px 0' }}>
        <Typography variant="h5" gutterBottom>
          MAIS VENDIDOS
        </Typography>
        <Slider {...settings}>
          {products.map((product, index) => (
            <div key={index}>
              <Card className={styles.productCard}>
                <CardMedia
                  component="div"
                  className={styles.productImage}
                  style={{ backgroundColor: '#e0e0e0', height: '200px' }}
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
            </div>
          ))}
        </Slider>
      </Container>

      {/* Plans Section */}
      <Container sx={{ padding: '50px 0', backgroundColor: '#F5F5F5' }}>
        <Typography variant="h5" gutterBottom>
          NOSSOS PLANOS
        </Typography>
        <Grid container spacing={4}>
          {plans.map((plan, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Card style={{ textAlign: 'center' }}>
                <CardMedia
                  component="div"
                  style={{ backgroundColor: '#e0e0e0', height: '200px' }}
                  title={plan.title}
                />
                <CardContent style={{ textAlign: 'center' }}>
                  <Typography gutterBottom variant="h6" component="div">
                    {plan.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {plan.description}
                  </Typography>
                </CardContent>
                <Button size="small" fullWidth style={{ background: '#2C544A', color: 'white' }}>
                  Assinar
                </Button>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Footer />
    </div>
  );
};

export default CoffeeCode;
