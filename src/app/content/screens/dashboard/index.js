import React from "react";
import { Container, Box } from "@mui/material";
import Sidebar from "@/app/components/Sidebar"; // Importe o componente do menu lateral
import styles from "./dashboard.module.css";
import Topbar from "@/app/components/Topbar";
import Init from "./layouts/init";

export default function ScreenDashboard() {
  return (
    <Container className={styles.dashboardContainer} maxWidth="100%">
      <Topbar/>
      <Box display="flex" className={styles.dashboardContent}>
        <Sidebar/>
        <Box flexGrow={1}>
            <Init/>
        </Box>
      </Box>
    </Container>
  );
}
