function converterHoraParaMinutos(hora) {
    const [horas, minutos] = hora.split(":").map(Number);
    return horas * 60 + minutos;
}

function calcularDiferencaEmMinutos(inicio, fim) {
    const inicioMinutos = converterHoraParaMinutos(inicio);
    let fimMinutos = converterHoraParaMinutos(fim);

    // Se a hora de fim for menor que a hora de início, é porque o atendimento passou da meia-noite.
    if (fimMinutos < inicioMinutos) {
        fimMinutos += 24 * 60; // Adiciona 24 horas (em minutos)
    }

    return fimMinutos - inicioMinutos;
}

// Função para calcular TMA
export function calcularTMA(horaInicio, horaFim) {
    return calcularDiferencaEmMinutos(horaInicio, horaFim);
}

// Função para calcular TMR
export function calcularTMR(horaFechouRobo, horaIniAtendimento) {
    return calcularDiferencaEmMinutos(horaFechouRobo, horaIniAtendimento);
}
