import React, { useEffect } from "react";

//COMPONENTS
import {
  Box,
  Collapse,
  List,
  ListItem,
  ListItemButton,
  ListItemText
} from "@mui/material";


import styles from "./Sidebar.module.css";


import { AiOutlineUser } from "react-icons/ai";
import { BiSolidCoffeeBean } from "react-icons/bi";
import { FaUsers } from "react-icons/fa";
import { BsPersonVcardFill } from "react-icons/bs";
import { BsBoxSeam } from "react-icons/bs";
import { PiUsersFour } from "react-icons/pi";
import { GoPasskeyFill } from "react-icons/go";
import { RiPagesLine } from "react-icons/ri";
import { GrMenu } from "react-icons/gr";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { MdDashboard } from "react-icons/md";

const SidebarAdmin = ({ onMenuClick, isMenuOpen, setIsMenuOpen }) => {
  const [open, setOpen] = React.useState(true);
  const [typeUser, setTypeUser] = React.useState("");

  const handleClick = () => {
    setOpen(!open);
  };

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const updateURL = (menuOption) => {
    window.location.hash = menuOption.toLowerCase(); 
  };

  function verifyUserPosition() {
    let init;
  }

  useEffect(() => {
    let url = window.location.href;
    if (url.includes("cliente")) {
      setTypeUser("cliente");
    } else if (url.includes("admin")) {
      setTypeUser("admin");
    }
  }, [typeUser]);


  return isMenuOpen ? (
    <Box
      color="primary.contrastText"
      className={`${styles.sidebar} ${
        isMenuOpen ? styles.sidebarOpen : styles.sidebarClosed
      }`}
    >
      <GrMenu
        className={styles.menu__hamburguer}
        onClick={handleMenuClick}
        style={{ cursor: "pointer" }}
      />
      <List className={styles.menu__list}>
        <ListItem
          button
          onClick={() => {
            onMenuClick("Início");
            updateURL("Início");
          }}
        >
          <MdDashboard className={styles.icon} />
          <ListItemText primary="Início" className={styles.icon__text} />
        </ListItem>
        <ListItem
          button
          onClick={() => {
            onMenuClick("Planos");
            updateURL("Planos");
          }}
        >
          <BiSolidCoffeeBean className={styles.icon} />
          <ListItemText primary="Planos" className={styles.icon__text} />
        </ListItem>
        <ListItem
          button
          onClick={() => {
            onMenuClick("Clientes");
            updateURL("Clientes");
          }}
        >
          <PiUsersFour className={styles.icon} />
          <ListItemText primary="Clientes" className={styles.icon__text} />
        </ListItem>

        <ListItemButton onClick={handleClick}>
          <BsBoxSeam className={styles.icon} />
          <ListItemText primary="Produtos" className={styles.icon__text} />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton
              sx={{ pl: 4 }}
              onClick={() => {
                onMenuClick("Produtos");
                updateURL("todos-os-produtos");
              }}
            >
              <ListItemText primary="Todos os Produtos" className={styles.icon__text} />
            </ListItemButton>
          </List>
        </Collapse>

        
        <ListItem
          button
          onClick={() => {
            onMenuClick("Usuários");
            updateURL("Usuários");
          }}
        >
          <FaUsers className={styles.icon} />
          <ListItemText primary="Usuários" className={styles.icon__text} />
        </ListItem>
        <ListItem
          button
          onClick={() => {
            onMenuClick("Cargos");
            updateURL("Cargos");
          }}
        >
          <BsPersonVcardFill className={styles.icon} />
          <ListItemText primary="Cargos" className={styles.icon__text} />
        </ListItem>
        <ListItem
          button
          onClick={() => {
            onMenuClick("Permissões");
            updateURL("Permissões");
          }}
        >
          <GoPasskeyFill className={styles.icon} />
          <ListItemText primary="Permissões" className={styles.icon__text} />
        </ListItem>
        <ListItemButton onClick={handleClick}>
          <RiPagesLine className={styles.icon} />
          <ListItemText primary="Páginas" className={styles.icon__text} />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton
              sx={{ pl: 4 }}
              onClick={() => {
                onMenuClick("Sobre");
                updateURL("Sobre");
              }}
            >
              <ListItemText primary="Sobre" className={styles.icon__text} />
            </ListItemButton>
            <ListItemButton
              sx={{ pl: 4 }}
              onClick={() => {
                onMenuClick("Contato");
                updateURL("Contato");
              }}
            >
              <ListItemText primary="Contato" className={styles.icon__text} />
            </ListItemButton>
          </List>
        </Collapse>
        <ListItem
          button
          onClick={() => {
            onMenuClick("Perfil");
            updateURL("Perfil");
          }}
        >
          <BsPersonVcardFill className={styles.icon} />
          <ListItemText primary="Perfil" className={styles.icon__text} />
        </ListItem>
      </List>
      
    </Box>
  ) : (
    <Box
      color="primary.contrastText"
      className={`${styles.sidebar_compressed}`}
    >
      <GrMenu
        className={styles.menu__hamburguer__compressed}
        onClick={handleMenuClick}
        style={{ cursor: "pointer" }}
      />
      <List className={styles.menu__list}>
        <ListItem
          button
          onClick={() => {
            onMenuClick("Início");
            updateURL("Início");
          }}
        >
          <AiOutlineUser className={styles.icon} />
        </ListItem>
        <ListItem
          button
          onClick={() => {
            onMenuClick("Planos");
            updateURL("Planos");
          }}
        >
          <BiSolidCoffeeBean className={styles.icon} />
        </ListItem>
        <ListItem
          button
          onClick={() => {
            onMenuClick("Clientes");
            updateURL("Clientes");
          }}
        >
          <PiUsersFour className={styles.icon} />
        </ListItem>
        <ListItem
          button
          onClick={() => {
            onMenuClick("Produtos");
            updateURL("Produtos");
          }}
        >
          <BsBoxSeam className={styles.icon} />
        </ListItem>
        <ListItem
          button
          onClick={() => {
            onMenuClick("Usuários");
            updateURL("Usuários");
          }}
        >
          <FaUsers className={styles.icon} />
        </ListItem>
        <ListItem
          button
          onClick={() => {
            onMenuClick("Cargos");
            updateURL("Cargos");
          }}
        >
          <BsPersonVcardFill className={styles.icon} />
        </ListItem>
        <ListItem
          button
          onClick={() => {
            onMenuClick("Permissões");
            updateURL("Permissões");
          }}
        >
          <GoPasskeyFill className={styles.icon} />
        </ListItem>
      </List>
    </Box>
  );
};

export default SidebarAdmin;
