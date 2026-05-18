import express from 'express';


const app = express();
app.use(express.json());
// Sincronizar modelos con SQLite

// --- CRUD BÁSICO ---
app.get('/ventas', async (req, res) => {
 res.send('OK');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
 console.log(`Servidor ejecutándose en el puerto ${PORT}`);
});
