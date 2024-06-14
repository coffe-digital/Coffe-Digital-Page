import React from 'react';
import { Container, Typography, Grid, Box, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TopBar from '@/app/components/Topbar/TopbarSite';
import styles from './About.module.css';
import Footer from '@/app/components/Footer/Footer';

const AboutUs = () => {
  return (
    <div>
      <TopBar />
      <Container className={styles.container}>
        <Typography variant="h4" className={styles.title}>
          SOBRE NÓS
        </Typography>
        <Box className={styles.descriptionBox}>
          <Typography variant="body1" className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et sagittis nisl. Suspendisse elementum sem dolor, sollicitudin vehicula nisi ullamcorper sed. Nam gravida elementum velit id luctus. Ut in leo dui. Mauris bibendum mi ante. Etiam sit amet rhoncus enim. Nam a diam eget ipsum dapibus gravida ac id nunc. Donec ac tellus orci. Proin gravida nulla id consequat dignissim. Aenean diam lacus, molestie sit amet gravida vel, maximus sed turpis. Mauris rhoncus nibh ac urna vehicula, at posuere odio ornare. Nullam vel sapien ac turpis varius gravida ac eget enim. Donec ut sodales lorem.
          </Typography>
          <Typography variant="body1" className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et sagittis nisl. Suspendisse elementum sem dolor, sollicitudin vehicula nisi ullamcorper sed. Nam gravida elementum velit id luctus. Ut in leo dui. Mauris bibendum mi ante. Etiam sit amet rhoncus enim. Nam a diam eget ipsum dapibus gravida ac id nunc. Donec ac tellus orci. Proin gravida nulla id consequat dignissim. Aenean diam lacus, molestie sit amet gravida vel, maximus sed turpis. Mauris rhoncus nibh ac urna vehicula, at posuere odio ornare. Nullam vel sapien ac turpis varius gravida ac eget enim. Donec ut sodales lorem.
          </Typography>
        </Box>
        <Box className={styles.imageBox}>
          <Box className={styles.imagePlaceholder} />
          <Box className={styles.imagePlaceholder} />
          <Box className={styles.imagePlaceholder} />
        </Box>
        <Typography variant="h5" className={styles.faqTitle}>
          Dúvidas Frequentes
        </Typography>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Dúvida 1</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Dúvida 2</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Dúvida 3</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Container>
     <Footer/>
    </div>
  );
};

export default AboutUs;
