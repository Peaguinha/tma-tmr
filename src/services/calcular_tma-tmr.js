function converterHoraParaMinutos(hora) {
    console.log("Hora recebida para conversão:", hora);  // Log para verificar a hora recebida
    if (!hora) {
        throw new Error("Hora inválida ou não fornecida.");
    }

    const [horas, minutos] = hora.split(":").map(Number);
    if (isNaN(horas) || isNaN(minutos)) {
        throw new Error("Formato de hora inválido, esperado HH:MM.");
    }

    return horas * 60 + minutos;
}

function calcularDiferencaEmMinutos(inicio, fim) {
    console.log("Início:", inicio, "Fim:", fim); // Log para verificar as horas de início e fim

    if (!inicio || !fim) {
        throw new Error("Hora de início ou hora de fim não fornecida.");
    }

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
    console.log("Calculando TMA com:", horaInicio, horaFim);  // Log para verificar as horas usadas no cálculo
    return calcularDiferencaEmMinutos(horaInicio, horaFim);
}

// Função para calcular TMR
export function calcularTMR(horaFechouRobo, horaIniAtendimento) {
    console.log("Calculando TMR com:", horaFechouRobo, horaIniAtendimento);  // Log para verificar as horas usadas no cálculo
    return calcularDiferencaEmMinutos(horaFechouRobo, horaIniAtendimento);
}
