function calcularDiferencaEmMinutos(inicio, fim) {
    const inicioData = new Date(`${inicio}`);
    const fimData = new Date(`${fim}`);
    return (fimData - inicioData) / 60000; // Retorna a diferença em minutos
}

// Função para calcular TMA
export function calcularTMA(horaInicio, horaFim) {
    return calcularDiferencaEmMinutos(horaInicio, horaFim);
}

// Função para calcular TMR
export function calcularTMR(horaInicio, horaFim) {
    return calcularDiferencaEmMinutos(horaInicio, horaFim);
}