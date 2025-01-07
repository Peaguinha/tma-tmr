import { adicionarNaPlanilha } from "../services/enviar_planilha.js";
import { calcularTMA, calcularTMR } from "../services/calcular_tma-tmr.js";

export async function createdata(req, res) {
    const {
        nome_atendente,
        telefone,
        data_atendimento,
        hora_fechou_robo,
        hora_ini_atendimento,
        hora_fim_atendimento
    } = req.body;

    try {
        // Verificar se as horas foram enviadas corretamente
        if (!hora_fechou_robo || !hora_ini_atendimento_humano || !hora_fim_atendimento_humano) {
            return res.status(400).json({ message: "Hora de fechamento do robô, início ou fim do atendimento humano não fornecida." });
        }

        // Calcula TMA e TMR
        const tma = calcularTMA(hora_ini_atendimento_humano, hora_fim_atendimento_humano);
        const tmr = calcularTMR(hora_fechou_robo, hora_ini_atendimento_humano);

        // Dados a serem enviados para a planilha
        const dados = [
            nome_atendente,
            telefone,
            data_atendimento,
            hora_fechou_robo,
            hora_ini_atendimento,
            hora_fim_atendimento,
            tma,
            tmr
        ];

        console.log("dados:", dados);

        // Chama o service para adicionar os dados à planilha
        const sucesso = await adicionarNaPlanilha(dados);

        if (sucesso) {
            return res.status(200).json({
                message: "Dados adicionados com sucesso!",
                tma,
                tmr
            });
        } else {
            return res.status(500).json({ message: "Erro ao adicionar dados." });
        }
    } catch (error) {
        console.error("Erro no cálculo de TMA/TMR:", error.message);
        return res.status(500).json({ message: "Erro interno no servidor." });
    }
}
