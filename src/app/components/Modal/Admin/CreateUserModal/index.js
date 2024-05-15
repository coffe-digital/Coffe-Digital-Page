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
import { UserAPI } from "./API";

const CreateUserModal = ({ open, onClose }) => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const handleCreateUser = () => {
    UserAPI.createUser({
      email: userEmail,
      password: userPassword,
      name: userName
    })
    .then(data => {
      console.log('Usuário criado com sucesso:', data);
    })
    .catch(error => {
      console.error('Erro ao criar usuário:', error.message);
    });
    console.log("Novo usuário criado:", { planName, planDescription, planValue, planStatus });
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
          Criar Novo Usuário
        </Typography>
        <TextField
          label="Nome do usuário"
          fullWidth
          margin="normal"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <TextField
          label="E-mail"
          fullWidth
          margin="normal"
          value={userName}
          onChange={(e) => setUserEmail(e.target.value)}
        />
        <TextField
          label="Senha"
          type="password"
          fullWidth
          margin="normal"
          value={userPassword}
          onChange={(e) => setUserPassword(e.target.value)}
        />
    
        <Box sx={{ mt: 2 }}>
          <Button variant="contained" color="success" onClick={handleCreateUser}>
            Criar usuário
          </Button>
          <Button variant="contained" color="error" onClick={onClose} sx={{ ml: 2 }}>
            Cancelar
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default CreateUserModal;
