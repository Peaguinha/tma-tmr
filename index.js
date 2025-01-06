const app = express();

// Obter o diretório atual
const __dirname = path.dirname(new URL(import.meta.url).pathname);


// Middleware para tratar requisições no formato JSON
app.use(express.json());

// Definindo a rota principal
app.use('/api', routes);

// Iniciando o servidor na porta 4000
app.listen(4000, () => {
  console.log('Servidor rodando na porta 4000');
});

export default app;