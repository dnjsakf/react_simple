'use strict';

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _expressSession = require('express-session');

var _expressSession2 = _interopRequireDefault(_expressSession);

var _webpack = require('webpack');

var _webpack2 = _interopRequireDefault(_webpack);

var _webpackDevServer = require('webpack-dev-server');

var _webpackDevServer2 = _interopRequireDefault(_webpackDevServer);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var expressPort = 8080;
var devPort = 4000;

// 몽고디비를 쓰려면 서버를 열어야되니까
// 필요할 때 사용하자.
// const db = mongoose.connction;
// db.on('error', console.error);    // 이 문법에 대해서 알아봐야할듯.
// db.once('open', ()=>{ console.log('Connected to mongoDB server') });
// mongoose.connect('mongodb://localhost/');

app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: true }));

// 에러가 던져지면 실행됨
app.use(function (error, req, res, next) {
  console.error('[Throwed error]', error.stack);
  return res.status(500).send('Something broken!!!');
});
// 세션 연결
app.use((0, _expressSession2.default)({
  secret: "!ad%dfh410",
  resave: false,
  saveUninitialized: true
}));
// localhost/로 접근하면 public에 있는 정보를 뿌려줌
app.use('/', _express2.default.static(_path2.default.join(__dirname, '../public')));
// 어떤 라우트로 접근하든 index.html을 뿌려줌.
app.get('*', function (req, res) {
  return res.sendFile(_path2.default.join(__dirname, '../public/index.html'));
});
// 서버 연결
app.listen(expressPort, function () {
  console.log('Express server is running on port:', expressPort);
});

// webpack-dev-server를 실행하면,
// cross-env process.env.NODE_EVN=development 로 시스템 환경을 바꾸도록 script를 작성하여
console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV === 'development') {
  var config = require('../webpack.dev.config');
  var compiler = (0, _webpack2.default)(config);
  var devServer = new _webpackDevServer2.default(compiler, config.devServer);
  devServer.listen(devPort, function () {
    console.log('Develoopment server is running on port:', devPort);
  });
}