import React, { useState } from "react";
import {
  Modal,
  Box,
  Typography,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from "@mui/material";

const PlanModal = ({ open, onClose }) => {
  const [planName, setPlanName] = useState("");
  const [planDescription, setPlanDescription] = useState("");
  const [planValue, setPlanValue] = useState("");
  const [planStatus, setPlanStatus] = useState("");
  const [planType, setPlantype] = useState("");

  const handleCreatePlan = () => {
    console.log("Novo plano criado:", { planName, planDescription, planValue, planStatus });
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          borderRadius: '5px',
          boxShadow: 24,
          p: 4,
        }}
      >
        <Typography variant="h6" gutterBottom sx={{borderBottom: '2px solid black'}}>
          Criar Novo Plano
        </Typography>
        <TextField
          label="Nome do Plano"
          fullWidth
          margin="normal"
          value={planName}
          onChange={(e) => setPlanName(e.target.value)}
        />
        
        <TextField
          label="Valor"
          fullWidth
          margin="normal"
          value={planValue}
          onChange={(e) => setPlanValue(e.target.value)}
        />
        <FormControl fullWidth margin="normal">
          <InputLabel>Tipo</InputLabel>
          <Select
            value={planType}
            onChange={(e) => setPlantype(e.target.value)}
          >
            <MenuItem value="Mensal">Mensal</MenuItem>
            <MenuItem value="Semestral">Semestral</MenuItem>
            <MenuItem value="Anual">Anual</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth margin="normal">
          <InputLabel>Status</InputLabel>
          <Select
            value={planStatus}
            onChange={(e) => setPlanStatus(e.target.value)}
          >
            <MenuItem value="Ativo">Ativo</MenuItem>
            <MenuItem value="Inativo">Inativo</MenuItem>
          </Select>
        </FormControl>
        <TextField
          label="Descrição"
          fullWidth
          margin="normal"
          value={planDescription}
          onChange={(e) => setPlanDescription(e.target.value)}
        />
        <Box sx={{ mt: 2 }}>
          <Button variant="contained" color="success" onClick={handleCreatePlan}>
            Criar Plano
          </Button>
          <Button variant="contained" color="error" onClick={onClose} sx={{ ml: 2 }}>
            Cancelar
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default PlanModal;
