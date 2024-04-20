import React from "react";

//COMPONENTS
import { Box, Collapse, List, ListItem, ListItemButton, ListItemText, ListItemIcon } from "@mui/material";

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
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

const Sidebar = () => {

  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  const openSidebar = ()=>{
    
  }


  return (
    <Box bgcolor="primary.main" color="primary.contrastText" width={300} className={styles.sidebar} >
      <GrMenu className={styles.menu__hamburguer}/>
      <List>
        <ListItem button>
          <AiOutlineUser className={styles.icon}/>
          <ListItemText primary="Meus Dados" className={styles.icon__text}/>
        </ListItem>
        <ListItem button>
          <BiSolidCoffeeBean className={styles.icon}/>
          <ListItemText primary="Meus Planos" className={styles.icon__text}/>
        </ListItem>
        <ListItem button>
          <FaUsers className={styles.icon} />
          <ListItemText primary="Usuários" className={styles.icon__text}/>
        </ListItem>
        <ListItem button>
          <BsPersonVcardFill className={styles.icon}/>
          <ListItemText primary="Cargos" className={styles.icon__text}/>
        </ListItem>
        <ListItem button>
          <BsBoxSeam className={styles.icon}/>
          <ListItemText primary="Produtos" className={styles.icon__text}/>
        </ListItem>
        <ListItem button>
          <PiUsersFour className={styles.icon}/>
          <ListItemText primary="Clientes" className={styles.icon__text}/>
        </ListItem>

        <ListItemButton onClick={handleClick}>
          <RiPagesLine className={styles.icon}/>
          <ListItemText primary="Páginas" className={styles.icon__text}/>
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="Sobre Nós" className={styles.icon__text}/>
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="Produtos" className={styles.icon__text}/>
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="Contato" className={styles.icon__text}/>
            </ListItemButton>
          </List>
        </Collapse>
      </List>
    </Box>
  );
};

export default Sidebar;
