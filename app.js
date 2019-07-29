const express = require('express')
const app = express()
const port = 3000

// app.get('/', (req, res) => res.send('Hello World!'))

app.use(express.static('public'))

const path = require('path');
const router = express.Router();
//////////////////////////////////////////////////
router.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/view/index.html'));
});
router.get('/login', function(req, res) {
  res.sendFile(path.join(__dirname + '/view/login.html'));
});
router.get('/lecture', function(req, res) {
  res.sendFile(path.join(__dirname + '/view/lecture.html'));
});
router.get('/lecture/detail', function(req, res) {
  res.sendFile(path.join(__dirname + '/view/lecture_detail.html'));
});
router.get('/homework', function(req, res) {
  res.sendFile(path.join(__dirname + '/view/homework.html'));
});
router.get('/homework/detail', function(req, res) {
  res.sendFile(path.join(__dirname + '/view/homework_detail.html'));
});
router.get('/index', function(req, res) {
  res.sendFile(path.join(__dirname + '/view/index.html.html'));
});
router.get('/signup', function(req, res) {
  res.sendFile(path.join(__dirname + '/view/signup.html'));
});

router.get('/view/login.html', function(req, res) {
  res.send(
      '<br>제목 : ' + req.query.title + '<br>작성자 : ' + req.query.writer +
      '<br>내용 : ' + req.query.content +"<p><h1>회원정보가 존재하지않습니다</h1></p>" + "<p><a href=\"/index\">Go to Main Page</a></p>")
});



app.use('/', router);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))