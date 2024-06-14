import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, TextField, DialogActions, Button, Box, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { register as registerUser } from './path/to/API'; // Ajuste o caminho conforme necessário
import styles from './RegisterModal.module.css'; // Certifique-se de ajustar o caminho conforme necessário

const RegisterModal = ({ open, onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleRegister = async () => {
    try {
      const userData = await registerUser({ email, password, name });
      console.log('User registered:', userData);
      onClose();
    } catch (error) {
      console.error('Registration failed:', error);
      // Adicione lógica para exibir mensagens de erro para o usuário, se necessário
    }
  };

  return (
    <Dialog open={open} onClose={onClose} classes={{ paper: styles.dialogPaper }}>
      <DialogTitle className={styles.dialogTitle}>
        <IconButton edge="start" color="inherit" onClick={onClose} aria-label="close" className={styles.closeButton}>
          <CloseIcon />
        </IconButton>
        Cadastro
      </DialogTitle>
      <DialogContent className={styles.dialogContent}>
        <Box className={styles.textField}>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Nome"
            type="text"
            fullWidth
            variant="outlined"
            value={name}
            onChange={handleNameChange}
          />
        </Box>
        <Box className={styles.textField}>
          <TextField
            margin="dense"
            id="email"
            label="Email"
            type="email"
            fullWidth
            variant="outlined"
            value={email}
            onChange={handleEmailChange}
          />
        </Box>
        <Box className={styles.textField}>
          <TextField
            margin="dense"
            id="password"
            label="Senha"
            type="password"
            fullWidth
            variant="outlined"
            value={password}
            onChange={handlePasswordChange}
          />
        </Box>
      </DialogContent>
      <DialogActions className={styles.dialogActions}>
        <Button onClick={handleRegister} className={styles.button}>
          Cadastrar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default RegisterModal;
