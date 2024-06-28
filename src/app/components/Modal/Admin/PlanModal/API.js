export const createPlan = async (planData) => {
    try {
      const response = await fetch('http://localhost:3001/api/plan', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(planData),
      });
      if (!response.ok) {
        throw new Error('Erro ao criar plano');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Erro:', error);
      return null;
    }
};

export const updatePlan = async (id, planData) => {
    try {
      const response = await fetch(`http://localhost:3001/api/plan/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(planData),
      });
      if (!response.ok) {
        throw new Error('Erro ao atualizar plano');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Erro:', error);
      return null;
    }
  };
  
