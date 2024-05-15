import React, { useState } from "react";
import {
  Modal,
  Box,
  Typography,
  Button,
  TextField,
} from "@mui/material";

const PositionModal = ({ open, onClose }) => {
  const handleGenerateReport = () => {
    console.log("Relatório gerado");
    onClose();
  };

  const [positionName, setPositionName] = useState("");
  const [positionType, setPositionType] = useState("");

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
          borderRadius: "5px",
          boxShadow: 24,
          p: 4,
        }}
      >
        <Typography variant="h6" gutterBottom sx={{borderBottom: "2px solid black"}}>
          Criar novo cargo
        </Typography>

        <TextField
          label="Nome do Cargo"
          fullWidth
          margin="normal"
          value={positionName}
          onChange={(e) => setPositionName(e.target.value)}
        />
        <TextField
          label="Tipo de Permissão"
          fullWidth
          margin="normal"
          value={positionType}
          onChange={(e) => setPositionType(e.target.value)}
        />
        
        <Box sx={{ mt: 2 }}>
          <Button variant="contained" color="success" onClick={handleGenerateReport}>
            Criar cargo
          </Button>
          <Button variant="contained" color="error" onClick={onClose} sx={{ ml: 2 }}>
            Cancelar
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default PositionModal;
