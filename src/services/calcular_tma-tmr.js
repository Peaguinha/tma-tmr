function converterHoraParaMinutos(hora) {
    // Divide a hora no formato "HH:MM" e converte para minutos
    const [horas, minutos] = hora.split(":").map(Number);
    return horas * 60 + minutos;
}

function calcularDiferencaEmMinutos(inicio, fim) {
    const inicioMinutos = converterHoraParaMinutos(inicio);
    const fimMinutos = converterHoraParaMinutos(fim);
    return fimMinutos - inicioMinutos; // Retorna a diferença em minutos
}

// Função para calcular TMA
export function calcularTMA(horaInicio, horaFim) {
    return calcularDiferencaEmMinutos(horaInicio, horaFim);
}

// Função para calcular TMR
export function calcularTMR(envioSolicitacao, respostaRecebida) {
    return calcularDiferencaEmMinutos(envioSolicitacao, respostaRecebida);
}
