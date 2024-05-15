import React, { useState } from "react";
import {
  Button,
  Modal,
  Box,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid,
  Typography,
} from "@mui/material";

const ProductModal = ({ open, onClose }) => {
  const [product, setProduct] = useState({
    name: "",
    brand: "",
    price: "",
    barcode: "",
    description: "",
    category: "",
    quantity: "",
    images: [],
    discount: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    // Lógica para enviar os dados do produto para a API ou fazer outra coisa com eles
    console.log("Dados do produto:", product);
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          width: 600,
          bgcolor: "background.paper",
          boxShadow: 24,
          borderRadius: "5px",
          p: 4,
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
         <Typography variant="h6" gutterBottom sx={{borderBottom: '2px solid black'}}>
          Criar Novo Produto
        </Typography>
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <TextField
              fullWidth
              margin="normal"
              label="Nome do Produto"
              name="name"
              value={product.name}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              margin="normal"
              label="Marca"
              name="brand"
              value={product.brand}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              margin="normal"
              label="Preço"
              name="price"
              value={product.price}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              margin="normal"
              label="Código de Barras"
              name="barcode"
              value={product.barcode}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              margin="normal"
              label="Descrição"
              name="description"
              value={product.description}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={6}>
            <FormControl fullWidth margin="normal">
              <InputLabel>Categoria</InputLabel>
              <Select
                name="category"
                value={product.category}
                onChange={handleChange}
              >
                <MenuItem value="categoria1">Categoria 1</MenuItem>
                <MenuItem value="categoria2">Categoria 2</MenuItem>
                {/* Adicione mais itens de menu conforme necessário */}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              margin="normal"
              label="Quantidade"
              name="quantity"
              value={product.quantity}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              margin="normal"
              type="file"
              label=""
              name="images"
              onChange={(e) => console.log(e.target.files)}
              multiple
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              margin="normal"
              label="Desconto"
              name="discount"
              value={product.discount}
              onChange={handleChange}
            />
          </Grid>
        </Grid>
        <Button onClick={handleSubmit} variant="contained" color="success">
          Cadastrar Produto
        </Button>
        <Button variant="contained" color="error" onClick={onClose} sx={{ ml: 2 }}>
            Cancelar
          </Button>
      </Box>
    </Modal>
  );
};

export default ProductModal;
