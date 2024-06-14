import React, { useState, useContext } from 'react';
import { Dialog, DialogTitle, DialogContent, TextField, DialogActions, Button, Box, IconButton, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import styles from './LoginModal.module.css'; // Certifique-se de ajustar o caminho conforme necessário
import { loginUser } from './API'; // Certifique-se de ajustar o caminho conforme necessário
import { AuthContext } from '@/app/context/AuthContext';

const LoginModal = ({ open, onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = async () => {
    try {
      const userData = await login(email, password);
      //login(userData);
    } catch (error) {
      console.error('Login failed:', error);
      setError('Falha no login. Verifique suas credenciais.');
    }
  };

  return (
    <Dialog open={open} onClose={onClose} classes={{ paper: styles.dialogPaper }}>
      <DialogTitle className={styles.dialogTitle}>
        Login
        <IconButton edge="start" color="inherit" onClick={onClose} aria-label="close" className={styles.closeButton}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent className={styles.dialogContent}>
        <Box className={styles.textField}>
          <TextField
            autoFocus
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
        {error && <Typography color="error" className={styles.error}>{error}</Typography>}
      </DialogContent>
      <DialogActions className={styles.dialogActions}>
        <Button onClick={handleLogin} className={styles.button} variant="contained" fullWidth>
          Entrar
        </Button>
      </DialogActions>
      <Typography className={styles.link} onClick={() => console.log('Ir para cadastro')}>
        Ainda não possui uma conta? Registre-se
      </Typography>
      <Typography className={styles.link} onClick={() => console.log('Esqueci minha senha')}>
        Esqueci minha senha
      </Typography>
    </Dialog>
  );
};

export default LoginModal;
