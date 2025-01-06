import { adicionarNaPlanilha } from "../services/enviar_planilha.js";

export async function createdata(req, res) {
    const { nome_atendente, telefone, data_atendimento, hora_inicio_atendimento, hora_fim_atendimento, tma, tmr } = req.body;

    // Dados a serem enviados para a planilha
    const dados = [nome_atendente, telefone, data_atendimento, hora_inicio_atendimento, hora_fim_atendimento, tma, tmr];

    console.log("dados:", dados);
    
    // Chama o service para adicionar os dados à planilha
    const sucesso = await adicionarNaPlanilha(dados);

    if (sucesso) {
        return res.status(200).json({ message: "Dados adicionados com sucesso!" });
    } else {
        return res.status(500).json({ message: "Erro ao adicionar dados." });
    }
}
