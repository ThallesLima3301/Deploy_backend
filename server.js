const express = require('express');
const cors = require('cors');
const feedbackRoutes = require('./routes/feedback');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.use('/api/feedback', feedbackRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
