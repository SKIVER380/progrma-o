let intervalo;
function iniciarCronometro(){
    clearInterval(intervalo);
    const dataFutura = new Date("2025-12-19T23:59:59");
    intervalo = setInterval(() => {
        const agora = new Date();
        const diferenca = dataFutura - agora;
        document.getElementById('timer').textContent = `${diferenca} milisegundos`;
    }, 100)


}

iniciarCronometro();



