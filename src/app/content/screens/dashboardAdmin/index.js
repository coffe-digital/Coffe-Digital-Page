import React, { useState } from "react";
import { Container, Box } from "@mui/material";
import styles from "./dashboard.module.css";
import Topbar from "@/app/components/Topbar";
import Init from "./layouts/initDashboard/init";
import Products from "./layouts/products/Products";
import Plans from "./layouts/plans/Plans";
import Users from "./layouts/users/Users";
import Positions from "./layouts/positions/Positions";
import Clients from "./layouts/clients/Clients";
import About from "./layouts/aboutUs/About";
import Contact from "./layouts/Contact/Contact";
import SidebarAdmin from "@/app/components/Sidebar/admin";
import CategoriesProducts from "./layouts/categoriesProducts";
import ProfileAdmin from "./layouts/profile/ProfileAdmin";
import Permissions from "./layouts/permissions";

export default function ScreenDashboardAdmin() {

  const [selectedComponent, setSelectedComponent] = useState("init");
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  
  const handleMenuClick = (componentName) => {
    setSelectedComponent(componentName);
  };

  const handleChangeMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  

  const components = {
    Início: <Init />,
    Produtos: <Products />,
    Planos: <Plans/>,
    Usuários: <Users/>,
    Cargos: <Positions />,
    Permissões: <Permissions/>,
    Clientes: <Clients />,
    Sobre: <About/>,
    Contato: <Contact/>,
    Perfil: <ProfileAdmin/>,
    Categorias: <CategoriesProducts/>

  };

  return (
    <Box>
      <Topbar/>
      <Box display="flex" className={styles.dashboardContent}>
        <SidebarAdmin onMenuClick={handleMenuClick} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
        <Box sx={{width: "100%", height: '90vh'}}>
          {components[selectedComponent]? components[selectedComponent]: <Init/>}
        </Box>
      </Box>
    </Box>
  );
}
