import express from 'express';
import cors from 'cors';
import axios from 'axios';  // axios를 사용하여 Python 서버로 요청 보냄
const port = 40000;
const app = express();

app.use(cors());
app.options('*', cors());

// 클라이언트 요청 처리
app.get('/test', async (req, res) => {
    console.log('클라이언트 요청이 도착했습니다.');
    try {
        // Python 서버로 요청 보냄
        const pythonResponse = await axios.get('http://116.41.154.158:5000/python-endpoint');
        res.send(`서버에서 온 응답: ${pythonResponse.data}`);
    } catch (error) {
        res.status(500).send('Python 서버와의 통신에 실패했습니다.');
    }
});

// 정적 파일 서빙 (client.html)
app.use(express.static('public'));

// 서버 시작
app.listen(port, () => {
    console.log(`서버가 http://localhost:${port} 에서 실행 중입니다!`);
});