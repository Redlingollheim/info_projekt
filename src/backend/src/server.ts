// src/backend/src/server.ts
import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { validateUserData } from './validation';

const app = express();
const PORT = 3000;

app.use(cors()); // CORS aktivieren, um Anfragen vom Frontend zu ermöglichen
app.use(bodyParser.json()); // Body-Parser für JSON-Anfragen

app.post('/validate', (req: Request, res: Response) => {
  const data: any = req.body;  // 'any' erlaubt es, ungültige Daten zu akzeptieren
  const valid = validateUserData(data);
  
  if (valid) {
    res.status(200).json({ message: "Valid data", data });
  } else {
    res.status(400).json({ message: "Invalid data", errors: validateUserData.errors });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});