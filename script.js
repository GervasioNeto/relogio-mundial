const locais = [
    { nome: "New York", fusoHorario: -4 },
    { nome: "London", fusoHorario: 1 },
    { nome: "Tokyo", fusoHorario: 9 },
    { nome: "Sydney", fusoHorario: 10 },
    { nome: "Dubai", fusoHorario: 4 },
    { nome: "Moscow", fusoHorario: 3 },
    { nome: "São Paulo", fusoHorario: -3 },
    { nome: "Beijing", fusoHorario: 8 },
    { nome: "Berlin", fusoHorario: 2 },
    { nome: "Paris", fusoHorario: 2 }
];

function atualizarRelogios() {
    const containerRelogios = document.getElementById("relogios");
    containerRelogios.innerHTML = "";

    locais.forEach(local => {
        const agora = new Date();
        const horaLocal = new Date(agora.getTime() + (local.fusoHorario * 60 + agora.getTimezoneOffset()) * 60000);
        const dataFormatada = horaLocal.toLocaleDateString('pt-BR');
        const horaFormatada = horaLocal.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit', second: '2-digit' });

        const divRelogio = document.createElement("div");
        divRelogio.className = "relogio";

        const divLocal = document.createElement("div");
        divLocal.className = "local";
        divLocal.textContent = local.nome;

        const divDataHora = document.createElement("div");
        divDataHora.className = "data-hora";
        divDataHora.textContent = `${dataFormatada} - ${horaFormatada}`;

        divRelogio.appendChild(divLocal);
        divRelogio.appendChild(divDataHora);
        containerRelogios.appendChild(divRelogio);
    });
}

setInterval(atualizarRelogios, 1000);
atualizarRelogios();
