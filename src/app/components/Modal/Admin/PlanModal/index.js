import React, { useState, useEffect } from "react";
import {
  Modal,
  Box,
  Typography,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from "@mui/material";
import toast from "react-hot-toast";
import 'react-toastify/dist/ReactToastify.css';
import { createPlan, updatePlan } from "./API"; 
import { Toaster } from "react-hot-toast";

const PlanModal = ({ open, onClose, onSave, plan }) => {
  const [planName, setPlanName] = useState("");
  const [planDescription, setPlanDescription] = useState("");
  const [planValue, setPlanValue] = useState("");
  const [planStatus, setPlanStatus] = useState("");

  useEffect(() => {
    if (plan) {
      setPlanName(plan.name);
      setPlanDescription(plan.description);
      setPlanValue(plan.price);
      setPlanStatus(plan.status ? "Ativo" : "Inativo");
    } else {
      setPlanName("");
      setPlanDescription("");
      setPlanValue("");
      setPlanStatus("");
    }
  }, [plan]);

  const handleSavePlan = async () => {
    if (!planName || !planDescription || !planValue || !planStatus) {
      toast.error("Todos os campos são obrigatórios");
      return;
    }

    const planData = {
      name: planName,
      description: planDescription,
      price: parseFloat(planValue),
      status: planStatus === "Ativo",
    };

    try {
      if (plan) {
        const updatedPlan = await updatePlan(plan.id, planData);
        if (updatedPlan) {
          onSave(updatedPlan);
          toast.success("Plano atualizado com sucesso");
        }else{
          toast.error("Erro ao atualizar plano");
        }
      } else {
        const createdPlan = await createPlan(planData);
        if (createdPlan) {
          onSave(createdPlan);
          toast.success("Plano criado com sucesso");
        }
      }
      onClose();
    } catch (error) {
      toast.error("Erro ao salvar o plano");
    }
  };

  return (
    <>
      <Toaster />
      <Modal open={open} onClose={onClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            borderRadius: '5px',
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography variant="h6" gutterBottom sx={{borderBottom: '2px solid black'}}>
            {plan ? "Editar Plano" : "Criar Novo Plano"}
          </Typography>
          <TextField
            label="Nome do Plano"
            fullWidth
            margin="normal"
            required
            value={planName}
            onChange={(e) => setPlanName(e.target.value)}
          />
          <TextField
            label="Valor"
            fullWidth
            margin="normal"
            required
            value={planValue}
            onChange={(e) => setPlanValue(e.target.value)}
          />
          <FormControl fullWidth margin="normal" required>
            <InputLabel>Status</InputLabel>
            <Select
              value={planStatus}
              onChange={(e) => setPlanStatus(e.target.value)}
            >
              <MenuItem value="Ativo">Ativo</MenuItem>
              <MenuItem value="Inativo">Inativo</MenuItem>
            </Select>
          </FormControl>
          <TextField
            label="Descrição"
            required
            fullWidth
            margin="normal"
            value={planDescription}
            onChange={(e) => setPlanDescription(e.target.value)}
          />
          <Box sx={{ mt: 2 }}>
            <Button variant="contained" color="success" onClick={handleSavePlan}>
              {plan ? "Salvar Alterações" : "Criar Plano"}
            </Button>
            <Button variant="contained" color="error" onClick={onClose} sx={{ ml: 2 }}>
              Cancelar
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default PlanModal;
