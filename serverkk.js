import express from 'express';
import cors from 'cors';
import fs from 'fs';

const app = express();
app.use(cors());

app.options('*', cors());



fs.readFile('C:/Temp/KAKAUTO/port.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('파일을 읽는 도중 오류가 발생했습니다.');
        return;
    }
    console.log('파일 내용:', data);
    const port = parseInt(data); // 파일 내용이 숫자라면 parseInt를 사용하여 숫자로 변환
    console.log('할당된 포트 번호:', port);

    // 서버 시작
    app.get('/test', (req, res) => {
        res.send('서버에서 온 응답: 요청이 성공했습니다!');
    });

    // 정적 파일 서빙 (client.html)
    app.use(express.static('public'));

    // 서버 시작
    app.listen(port, () => {
        console.log(`서버가 http://localhost:${port} 에서 실행 중입니다!`);
    });
});