// 서버 오픈의 주문
const express = require('express');
const app = express();

// 서버를 여는 포트번호, 무엇을 할까
app.listen(2000, function() {
    console.log('listening on 2000');
});

// 한글도 잘 먹히네?
app.get('/characters', function(요청, 응답){
    응답.send('등장 인물의 리스트입니다.');
});

app.get('/beauty', function(req, res) {
    res.send('뷰티용품 쇼핑 페이지임');
})