import { adicionarNaPlanilha } from "../services/enviar_planilha.js";
import { calcularTMA, calcularTMR } from "..services/utils/calcular_tma-tmr.js";

export async function createdata(req, res) {
    const {
        nome_atendente,
        telefone,
        data_atendimento,
        hora_inicio_atendimento,
        hora_fim_atendimento,
        envio_solicitacao,
        resposta_recebida,
    } = req.body;

    // Calcula TMA e TMR
    const tma = calcularTMA(hora_inicio_atendimento, hora_fim_atendimento);
    const tmr = calcularTMR(envio_solicitacao, resposta_recebida);

    // Dados a serem enviados para a planilha
    const dados = [
        nome_atendente,
        telefone,
        data_atendimento,
        hora_inicio_atendimento,
        hora_fim_atendimento,
        envio_solicitacao,
        resposta_recebida,
        tma,
        tmr,
    ];

    console.log("dados:", dados);

    // Chama o service para adicionar os dados à planilha
    const sucesso = await adicionarNaPlanilha(dados);

    if (sucesso) {
        return res.status(200).json({ message: "Dados adicionados com sucesso!" });
    } else {
        return res.status(500).json({ message: "Erro ao adicionar dados." });
    }
}
