import React from "react";

//COMPONENTS
import { Box, List, ListItem, ListItemText } from "@mui/material";

//STYLES
import styles from './Sidebar.module.css'

//ICONS
import { AiOutlineUser } from "react-icons/ai";
import { BiSolidCoffeeBean } from "react-icons/bi";
import { FaUsers } from "react-icons/fa";
import { BsPersonVcardFill } from "react-icons/bs";
import { BsBoxSeam } from "react-icons/bs";
import { PiUsersFour } from "react-icons/pi";
import { RiPagesLine } from "react-icons/ri";
import { GrMenu } from "react-icons/gr";

const Sidebar = () => {

  return (
    <Box bgcolor="primary.main" color="primary.contrastText" width={300} className={styles.sidebar} >
      <GrMenu className={styles.menu__hamburguer}/>
      <List>
        <ListItem button>
          <AiOutlineUser width="25" height="25"/>
          <ListItemText primary="Meus Dados"/>
        </ListItem>
        <ListItem button>
          <BiSolidCoffeeBean width="25" height="25"/>
          <ListItemText primary="Meus Planos" />
        </ListItem>
        <ListItem button>
          <FaUsers width="25" height="25"/>
          <ListItemText primary="Usuários" />
        </ListItem>
        <ListItem button>
          <BsPersonVcardFill width="25" height="25"/>
          <ListItemText primary="Cargos" />
        </ListItem>
        <ListItem button>
          <BsBoxSeam width="25" height="25"/>
          <ListItemText primary="Produtos" />
        </ListItem>
        <ListItem button>
          <PiUsersFour width="25" height="25"/>
          <ListItemText primary="Clientes" />
        </ListItem>
        <ListItem button>
          <RiPagesLine width="25" height="25"/>
          <ListItemText primary="Páginas" />
        </ListItem>
      </List>
    </Box>
  );
};

export default Sidebar;
