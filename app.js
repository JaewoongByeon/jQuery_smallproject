const express = require('express')
const app = express()
const port = 3000

// app.get('/', (req, res) => res.send('Hello World!'))

app.use(express.static('public'))

const path = require('path');
const router = express.Router();
router.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
  //__dirname : It will resolve to your project folder.
});

//JaewoongByeon -->
router.get('/b', function (req, res) {
    res.sendFile(path.join(__dirname + '/byeon/index.html'));
});
router.get('/b/signup', function (req, res) {
    res.sendFile(path.join(__dirname + '/byeon/signup.html'));
});
router.get('/b/notice', function (req, res) {
    res.sendFile(path.join(__dirname + '/byeon/notice.html'));
});
router.get('/b/submit', function (req, res) {
    res.send('<br>first name : ' + req.query.firstname + '<br>surname : ' + req.query.surname + '<br>e-mail : ' + req.query.email + '<br>password : ' + req.query.pwd
       +'<br>password confirm : ' + req.query.pwdcf + '<br>phone : ' + req.query.tel + '<br>month : ' + req.query.month + '<br>date : ' + req.query.date + '<br>year : ' + req.query.year + '<br>gender : ' + req.query.gender + '<br>agree send mail : ' + req.query.agree)
});
router.get('/cookie', function(req, res) {
  res.sendFile(path.join(__dirname + '/public/bom_cookies.html'));
});
router.get('/login', function(req, res) {
  res.sendFile(path.join(__dirname + '/byeon/0724/login.html'));
});


/////////////////////park///////////////////////////
router.get('/p/intro', function(req, res) {
  res.sendFile(path.join(__dirname + '/park/01_intro.html'));
});
router.get('/p/script', function(req, res) {
  res.sendFile(path.join(__dirname + '/park/02_script.html'));
});
router.get('/p/output_display', function(req, res) {
  res.sendFile(path.join(__dirname + '/park/03_output_display.html'));
});
router.get('/p/index', function(req, res) {
  res.sendFile(path.join(__dirname + '/park/index.html'));
});
router.get('/p/sign_up', function(req, res) {
  res.sendFile(path.join(__dirname + '/park/sign_up.html'));
});
router.get('/p/notice', function(req, res) {
  res.sendFile(path.join(__dirname + '/park/notice.html'));
});
router.get('/p/write', function(req, res) {
  res.sendFile(path.join(__dirname + '/park/write.html'));
});
router.get('/onsubmit', function(req, res) {
  res.sendFile(path.join(__dirname + '/javascript/public/onsubmit.html'));
});
router.get('/p/event', function(req, res) {
  res.sendFile(path.join(__dirname + '/javascript/park/event.html'));
});
router.get('/geo', function(req, res) {
  res.sendFile(path.join(__dirname + '/javascript/public/geolocation.html'));
});
router.get('/cookie', function(req, res) {
  res.sendFile(path.join(__dirname + '/javascript/public/cookies.html'));
});
router.get('/p/cookie', function(req, res) {
  res.sendFile(path.join(__dirname + '/javascript/park/login_cookie.html'));
});

router.get('/park/sign_up', function(req, res) {
  res.send(
      '<br>이름 : ' + req.query.name + '<br>이메일 : ' + req.query.email +
      '<br>비밀번호 : ' + req.query.password + '<br>비밀번호 확인 : ' +
      req.query.re_password + '<br>생일 : ' + req.query.birthday + "<p><a href=\"/p/index\">Go to Main Page</a></p>")
});
router.get('/park/notice_board', function(req, res) {
  res.send(
      '<br>제목 : ' + req.query.title + '<br>작성자 : ' + req.query.writer +
      '<br>내용 : ' + req.query.content + "<p><a href=\"/p/index\">Go to Main Page</a></p>")
});
router.get('/login', function(req, res) {
  res.send(
      '<br>Name : ' + req.query.name + '<br>Password : ' + req.query.password)
});
router.get('/p/login', function(req, res) {
  res.send(
      '<br>First_Name : ' + req.query.first_name + '<br>Last_Name : ' + req.query.last_name
      + '<br>Username : ' + req.query.username)
});
//////////////////////////////////////////////////



app.use('/', router);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))