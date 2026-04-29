// app.js

document.getElementById('harvest-form').addEventListener('submit', async (event) => {
  event.preventDefault(); // Evita o envio normal do formulário (sem recarregar a página)

  // Coletar os dados do formulário
  const name = document.getElementById('name').value;
  const quantity = document.getElementById('quantity').value;
  const unitPrice = document.getElementById('unitPrice').value;

  // Criar um objeto com os dados
  const harvestData = {
    name,
    quantity: parseInt(quantity),
    unitPrice: parseFloat(unitPrice)
  };

  // Enviar os dados para o backend usando Fetch API
  try {
    const response = await fetch('/api/harvest', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(harvestData)
    });

    const data = await response.json();
    alert(data.message); // Exibe a mensagem de sucesso do backend

    // Limpar o formulário
    document.getElementById('harvest-form').reset();
  } catch (error) {
    console.error('Erro ao adicionar colheita:', error);
    alert('Houve um erro ao adicionar a colheita. Tente novamente.');
  }
});