import { promises as fs } from 'fs';

// Fungsi untuk membaca file secara asynchronous
async function readFile(filePath: string): Promise<void> {
  try {
    const data = await fs.readFile(filePath, 'utf-8'); // Membaca file teks
    console.log('Isi file:', data); // Menampilkan isi file
  } catch (error) {
    console.error('Error membaca file:', error);
  }
}

// Menjalankan fungsi
const filePath = 'data/users.json'; // Ganti dengan path file yang sesuai
readFile(filePath);
