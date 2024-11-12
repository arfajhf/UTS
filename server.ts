import express, { Request, Response } from 'express';
import { promises as fs } from 'fs';

const app = express();
const port = 3000;

app.use(express.json());

// Endpoint untuk mendapatkan semua pengguna
app.get('/users', async (req: Request, res: Response) => {
  try {
    const data = await fs.readFile('./data/users.json', 'utf-8');
    const users = JSON.parse(data);
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: 'Gagal membaca data' });
  }
});

// Endpoint untuk menambah pengguna baru
app.post('/users', async (req: Request, res: Response) => {
  const newUser = req.body;

  try {
    const data = await fs.readFile('./data/users.json', 'utf-8');
    const users = JSON.parse(data);
    users.push(newUser);

    await fs.writeFile('./data/users.json', JSON.stringify(users, null, 2));
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: 'Gagal menyimpan data' });
  }
});

// Menjalankan server
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
