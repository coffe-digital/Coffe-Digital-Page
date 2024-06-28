import React, { useContext } from "react";
import { Box, Typography } from "@mui/material";
import styles from './Topbar.module.css';
import LogoCoffe from '../../../../public/icons/logo-coffe-digital.png';
import Image from "next/image";
import { FaUser } from "react-icons/fa";
import { IoMdLogOut } from "react-icons/io";
import { useRouter } from 'next/router';
import AuthContext from '@/app/context/AuthContext';

export default function Topbar() {
  const { user, logout } = useContext(AuthContext);
  const router = useRouter();

  return (
    <Box className={styles.topbar}>
      <Box className={styles.topbar__boxLogo}>
        <Image src={LogoCoffe.src} width={180} height={100} style={{ objectFit: 'contain', marginTop: '-1.5rem' }} />
      </Box>
      <Box className={styles.topbar__boxUser}>
        <FaUser color="white" style={{ width: '30px', height: '25px' }} />
        <Typography sx={{ color: 'white' }}>{user ? user.name : 'Minha Conta'}</Typography>
      </Box>
      <Box className={styles.topbar__boxLogout}>
        <IoMdLogOut onClick={logout} color="white" style={{ width: '40px', height: '30px', cursor: 'pointer' }} />
        <Typography sx={{ color: 'white' }}>Sair</Typography>
      </Box>
    </Box>
  );
}
