export const fetchPlans = async () => {
  try {
    const response = await fetch("http://localhost:3001/api/plan");
    if (!response.ok) {
      throw new Error("Erro ao buscar planos");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erro:", error);
    return [];
  }
};


export const updatePlan = async (id, planData) => {
  try {
    const response = await fetch(`http://localhost:3001/api/plan/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(planData),
    });
    if (!response.ok) {
      throw new Error("Erro ao atualizar plano");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erro:", error);
    return null;
  }
};

export const softDeletePlan = async (id) => {
  try {
    const response = await fetch(`http://localhost:3001/api/plan/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error("Erro ao excluir plano");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erro:", error);
    return null;
  }
};
