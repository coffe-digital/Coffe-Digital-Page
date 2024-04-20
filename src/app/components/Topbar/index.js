import React from "react";
import { Box } from "@mui/material";
import styles from './Topbar.module.css'
import LogoCoffe from '../../../../public/icons/logo-coffe-digital.png'
import Image from "next/image";

export default function Topbar(){
    return (
        <Box className={styles.topbar}>
            <Box className={styles.topbar__boxLogo}>
                Inserir Logo
            </Box>
        </Box>
    )
}