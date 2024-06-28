import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TablePagination,
  TableRow,
  TextField,
  Typography,
  Tooltip,
} from "@mui/material";
import styles from "./Plans.module.css";
import { useTheme } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";
import ArticleIcon from "@mui/icons-material/Article";
import { FaEdit, FaTrash } from "react-icons/fa";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";
import AddIcon from "@mui/icons-material/Add";
import PlanModal from "@/app/components/Modal/Admin/PlanModal";
import ReportModal from "@/app/components/Modal/Admin/ReportModal";
import { fetchPlans, softDeletePlan } from "./API";
import jsPDF from "jspdf";
import "jspdf-autotable";

function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

export default function Plans() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [plans, setPlans] = useState([]);
  const [filteredPlans, setFilteredPlans] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isPlanModalOpen, setIsPlanModalOpen] = useState(false);
  const [isReportModalOpen, setIsReportModalOpen] = useState(false);
  const [currentPlan, setCurrentPlan] = useState(null);

  useEffect(() => {
    const getPlans = async () => {
      const plansFromApi = await fetchPlans();
      setPlans(plansFromApi);
      setFilteredPlans(plansFromApi);
    };

    getPlans();
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleOpenPlanModal = (plan = null) => {
    setCurrentPlan(plan);
    setIsPlanModalOpen(true);
  };

  const handleClosePlanModal = () => {
    setIsPlanModalOpen(false);
    setCurrentPlan(null);
  };

  const handleOpenReportModal = () => {
    setIsReportModalOpen(true);
  };

  const handleCloseReportModal = () => {
    setIsReportModalOpen(false);
  };

  const handleSavePlan = (savedPlan) => {
    if (currentPlan) {
      setPlans((prevPlans) =>
        prevPlans.map((plan) => (plan.id === savedPlan.id ? savedPlan : plan))
      );
    } else {
      setPlans((prevPlans) => [...prevPlans, savedPlan]);
    }
    setFilteredPlans(plans); 
  };

  const handleSoftDeletePlan = async (id) => {
    const deleted = await softDeletePlan(id);
    if (deleted) {
      setPlans((prevPlans) => prevPlans.filter((plan) => plan.id !== id));
      setFilteredPlans((prevPlans) => prevPlans.filter((plan) => plan.id !== id));
      toast.success('Plano excluído com sucesso')
    }
  };

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    const filtered = plans.filter((plan) =>
      plan.name.toLowerCase().includes(value.toLowerCase()) ||
      plan.description.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredPlans(filtered);
  };

  const generatePdf = () => {
    const doc = new jsPDF();
    doc.text("Relatório de Planos", 10, 10);
    const tableColumn = ["Nome", "Descrição", "Status", "Valor"];
    const tableRows = [];

    filteredPlans.forEach(plan => {
      const planData = [
        plan.name,
        plan.description,
        plan.status ? "Ativo" : "Inativo",
        plan.price.toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",
        })
      ];
      tableRows.push(planData);
    });

    doc.autoTable(tableColumn, tableRows, { startY: 20 });
    doc.save("relatorio_planos.pdf");
  };

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - filteredPlans.length) : 0;

  return (
    <Box className={styles.plans}>
      <Toaster />
      <Typography
        typography="h4"
        style={{ fontWeight: "bold", color: "#1E3932" }}
      >
        Planos
      </Typography>

      <Typography
        typography="label"
        style={{ padding: "0 0 1rem 0", color: "#1E3932", fontSize: ".875rem" }}
      >
        Gerencie todos os seus planos
      </Typography>
      <TableContainer component={Paper} className={styles.plans__table}>
        <Box className={styles.plans__table__top}>
          <Box className={styles.plans__table__search}>
            <TextField
              maxRows="1"
              id="outlined-basic"
              label="Pesquise os planos"
              variant="outlined"
              className={styles.plans__table__input}
              value={searchTerm}
              onChange={handleSearch}
            />
            <Button
              style={{ background: "#D9D9D9", color: "#000" }}
              variant="contained"
              className={styles.plans__table__button}
            >
              Pesquisar
            </Button>
          </Box>
          <Box className={styles.plans__table__actions}>
            <Button
              variant="contained"
              style={{ background: "#4E392A" }}
              className={styles.plans__search__input}
              onClick={generatePdf}
            >
              <ArticleIcon />
              Gerar Relatório
            </Button>
            <Button
              variant="contained"
              style={{ background: "#1E3932" }}
              className={styles.plans__search__input}
              onClick={() => handleOpenPlanModal()}
            >
              <AddIcon />
              Novo Plano
            </Button>
          </Box>
        </Box>
        <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: "bold" }}>Nome</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Descrição</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Status</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Valor</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Ação</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0
              ? filteredPlans.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : filteredPlans
            ).map((plan) => (
              <TableRow key={plan.id}>
                <TableCell component="th" scope="row">
                  {plan.name}
                </TableCell>
                <TableCell>{plan.description}</TableCell>
                <TableCell>{plan.status ? "Ativo" : "Inativo"}</TableCell>
                <TableCell>
                  R$ {plan.price.toLocaleString("pt-br", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </TableCell>
                <TableCell style={{display: 'flex', gap: '1rem'}}>
                  <Tooltip title="Editar plano">
                    <span>
                      <FaEdit
                        style={{ cursor: "pointer" }}
                        onClick={() => handleOpenPlanModal(plan)}
                      />
                    </span>
                  </Tooltip>
                  <Tooltip title="Cancelar plano">
                    <span>
                      <FaTrash
                        style={{ cursor: "pointer" }}
                        color="red"
                        onClick={() => handleSoftDeletePlan(plan.id)}
                      />
                    </span>
                  </Tooltip>
                </TableCell>
              </TableRow>
            ))}
            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={8} />
              </TableRow>
            )}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25, { label: "Todos", value: -1 }]}
                colSpan={5}
                count={filteredPlans.length}
                rowsPerPage={rowsPerPage}
                page={page}
                slotProps={{
                  select: {
                    inputProps: {
                      "aria-label": "Linhas por página",
                    },
                    native: true,
                  },
                }}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
      {/* Modal para criar ou editar plano */}
      <PlanModal
        open={isPlanModalOpen}
        onClose={handleClosePlanModal}
        onSave={handleSavePlan}
        plan={currentPlan}
      />

      {/* Modal para gerar relatório */}
      <ReportModal open={isReportModalOpen} onClose={handleCloseReportModal} />
    </Box>
  );
}
