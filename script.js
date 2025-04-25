let intervalo;

function IniciarCronometro() {  // Corrigi "Crônometro" para "Cronometro" (sem acento)
  clearInterval(intervalo);
  const dataFutura = new Date("2025-12-19T23:59:59");
  
  intervalo = setInterval(() => {  // Corrigi: troquei "-" por "="
    const agora = new Date();
    const diferenca = dataFutura - agora;  // Corrigi: "diferença" para "diferenca" (sem ç)
    
    // Calcula dias, horas, minutos, segundos
    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);
    
    document.getElementById('timer').textContent = 
      `${dias}d ${horas}h ${minutos}m ${segundos}s`;  // Corrigi: troquei aspas por crases
  }, 1000);
}

IniciarCronometro();  // Mudei para fora da função
