import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat.js";

// Ativando o plugin
dayjs.extend(customParseFormat);

function converterHoraParaMinutos(hora) {
    if (!hora) throw new Error("Hora inválida ou não fornecida.");

    const parsedTime = dayjs(hora, "DD-MM-YYYY HH:mm", true);
    if (!parsedTime.isValid()) throw new Error("Formato de data/hora inválido.");

    return parsedTime.hour() * 60 + parsedTime.minute();
}

function calcularDiferencaEmMinutos(inicio, fim) {
    const inicioMinutos = converterHoraParaMinutos(inicio);
    let fimMinutos = converterHoraParaMinutos(fim);

    if (fimMinutos < inicioMinutos) {
        fimMinutos += 24 * 60; // Adiciona 24 horas (em minutos)
    }

    return fimMinutos - inicioMinutos;
}

export function calcularTMA(horaInicio, horaFim) {
    return calcularDiferencaEmMinutos(horaInicio, horaFim);
}

export function calcularTMR(horaFechouRobo, horaIniAtendimento) {
    return calcularDiferencaEmMinutos(horaFechouRobo, horaIniAtendimento);
}
