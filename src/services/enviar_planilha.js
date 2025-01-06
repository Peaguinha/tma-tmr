import { google } from "googleapis";
import dotenv from "dotenv";
dotenv.config();

// Função que adiciona os dados na planilha
export async function adicionarNaPlanilha(dados) {
    
  // Autenticação usando JWT
  const auth = new google.auth.JWT({
    email: process.env.GOOGLE_CLIENT_EMAIL,
    key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  const spreadsheetId = "1dxVAfeXPZL8F_xmi-mymgcv5-2UbGhINDJImtVxMTyc";  // ID da planilha

  try {
    // Criação da instância do Google Sheets API
    const sheets = google.sheets({ version: "v4", auth });

    // Requisição para adicionar dados na planilha
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: "Página1!A1",  // Intervalo onde os dados serão adicionados
      valueInputOption: "RAW",  // Opção de entrada dos dados
      resource: {
        values: [dados],  // Dados a serem inseridos
      },
    });

    console.log("Dados adicionados com sucesso:", response.data);
    return true;
  } catch (error) {
    console.error("Erro ao adicionar dados na planilha:", error.message);
    return false;
  }
}
