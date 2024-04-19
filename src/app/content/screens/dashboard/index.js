import React from "react";
import { Container, Box } from "@mui/material";
import Sidebar from "@/app/components/Sidebar"; // Importe o componente do menu lateral
import styles from "./dashboard.module.css";

export default function ScreenDashboard() {
  return (
    <Container maxWidth="lg" className={styles.dashboardContainer}>
      <Box display="flex" className={styles.dashboardContent}>
        <Sidebar />
        <Box flexGrow={1}>

        </Box>
      </Box>
    </Container>
  );
}
