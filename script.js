document.getElementById('calcular').addEventListener('click', function() {
  const estrelasPorVez = parseInt(document.getElementById('estrelas').value) || 0;
  const custoPorEstrela = parseInt(document.getElementById('custo').value) || 0;
  const tempoHoras = parseFloat(document.getElementById('tempo').value) || 0;
  const fastOpen = document.getElementById('fastopen').checked;

  if (estrelasPorVez <= 0 || custoPorEstrela <= 0 || tempoHoras <= 0) {
    document.getElementById('resultado').innerHTML = "Preencha todos os campos corretamente.";
    return;
  }

  const segundosPorGiro = fastOpen ? 2 : 6;
  const totalSegundos = tempoHoras * 3600;
  const totalGiros = Math.floor(totalSegundos / segundosPorGiro);
  const totalEstrelas = totalGiros * estrelasPorVez;
  const totalYen = totalEstrelas * custoPorEstrela;

  document.getElementById('resultado').innerHTML = `
    Você precisará de <strong>${totalYen.toLocaleString()}</strong> yen!<br>
    Total de estrelas giradas: <strong>${totalEstrelas.toLocaleString()}</strong>
  `;
});