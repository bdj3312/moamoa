import express from 'express';
import fs from 'fs';
import path from 'path';

const app = express();
const port = 3000;

// JSON 형식의 요청 본문을 파싱할 수 있도록 설정
app.use(express.json());

app.post('/create-file', (req, res) => {
  const { fileName, content } = req.body;

  if (!fileName || !content) {
    return res.status(400).send('File name and content are required.');
  }

  const filePath = path.join(process.cwd(), fileName);

  fs.writeFile(filePath, content, (err) => {
    if (err) {
      return res.status(500).send('Failed to create file.');
    }
    res.send('File created successfully.');
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
