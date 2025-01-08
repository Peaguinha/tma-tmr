import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat.js";

// Extender o Day.js com o plugin de formatação personalizada
dayjs.extend(customParseFormat);

// Função para converter uma string de data/hora para minutos
function converterHoraParaMinutos(hora) {
    console.log("Hora recebida para conversão:", hora);

    if (!hora) {
        throw new Error("Hora inválida ou não fornecida.");
    }

    const formato = "DD-MM-YYYY HH:mm";
    const dataHora = dayjs(hora, formato);

    if (!dataHora.isValid()) {
        throw new Error("Formato de data/hora inválido, esperado DD-MM-YYYY HH:mm.");
    }

    const minutos = dataHora.hour() * 60 + dataHora.minute();
    return minutos;
}

// Função para calcular a diferença em minutos
function calcularDiferencaEmMinutos(inicio, fim) {
    console.log("Início:", inicio, "Fim:", fim);

    if (!inicio || !fim) {
        throw new Error("Hora de início ou hora de fim não fornecida.");
    }

    const formato = "DD-MM-YYYY HH:mm";
    const inicioData = dayjs(inicio, formato);
    const fimData = dayjs(fim, formato);

    if (!inicioData.isValid() || !fimData.isValid()) {
        throw new Error("Uma ou ambas as datas são inválidas.");
    }

    // Se a hora de fim for anterior à hora de início, adiciona um dia ao fim
    if (fimData.isBefore(inicioData)) {
        fimData.add(1, "day");
    }

    return fimData.diff(inicioData, "minutes");
}

// Função para calcular TMA
export function calcularTMA(horaInicio, horaFim) {
    console.log("Calculando TMA com:", horaInicio, horaFim);
    return calcularDiferencaEmMinutos(horaInicio, horaFim);
}

// Função para calcular TMR
export function calcularTMR(horaFechouRobo, horaIniAtendimento) {
    console.log("Calculando TMR com:", horaFechouRobo, horaIniAtendimento);
    return calcularDiferencaEmMinutos(horaFechouRobo, horaIniAtendimento);
}
