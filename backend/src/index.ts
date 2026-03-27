import express, { type Request, type Response } from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/api/status', (req: Request, res: Response) => {
  res.json({ message: "NerveAI Backend is connected! 🚀", status: "online" });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Backend running at http://localhost:${PORT}`);
});