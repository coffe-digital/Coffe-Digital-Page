import React from "react";
import { Box, List, ListItem, ListItemText } from "@mui/material";

const Sidebar = () => {
  return (
    <Box bgcolor="primary.main" color="primary.contrastText" p={2} width={250}>
      <List>
        <ListItem button>
          <ListItemText primary="Opção 1" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Opção 2" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Opção 3" />
        </ListItem>
        {/* Adicione mais itens de menu conforme necessário */}
      </List>
    </Box>
  );
};

export default Sidebar;
