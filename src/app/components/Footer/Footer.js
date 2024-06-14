import {
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Button,
} from "@mui/material";
export default function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: "#2C544A",
        color: "white",
        padding: "20px 0",
        textAlign: "left",
        marginTop: '8rem'
      }}
    >
      <Container>
        <Typography variant="body1" gutterBottom>
          Entre em contato
        </Typography>
        <Typography variant="body2">coffeecode@sac.com.br</Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "left",
            gap: "10px",
            marginTop: "10px",
          }}
        >
          <Typography variant="body2">Instagram</Typography>
          <Typography variant="body2">Twitter</Typography>
        </Box>
      </Container>
    </Box>
  );
}
