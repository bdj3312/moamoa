import express from 'express';
import fs from 'fs';
import path from 'path';
import cors from 'cors';

const app = express();
app.use(cors());
const port = 3000;

// JSON 형식의 요청 본문을 파싱할 수 있도록 설정
app.use(express.json());

app.post('/create-file', (req, res) => {
  const { directory, fileName, content } = req.body;

  if (!directory || !fileName || !content) {
    return res.status(400).send('Directory, file name, and content are required.');
  }

  const filePath = path.join(directory, fileName);

  // 디렉토리가 존재하지 않으면 생성
  fs.mkdir(path.dirname(filePath), { recursive: true }, (err) => {
    if (err) {
      return res.status(500).send('Failed to create directory.');
    }

    // 파일 생성
    fs.writeFile(filePath, content, (err) => {
      if (err) {
        return res.status(500).send('Failed to create file.');
      }
      res.send('File created successfully.');
    });
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
