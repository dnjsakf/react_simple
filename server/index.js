import path from 'path';

import express from 'express';
import session from 'express-session';

import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';

import bodyParser from 'body-parser';

import mongoose from 'mongoose';

const app = express();
const expressPort = 8080;
const devPort = 4000;

// 몽고디비를 쓰려면 서버를 열어야되니까
// 필요할 때 사용하자.
// const db = mongoose.connction;
// db.on('error', console.error);    // 이 문법에 대해서 알아봐야할듯.
// db.once('open', ()=>{ console.log('Connected to mongoDB server') });
// mongoose.connect('mongodb://localhost/');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

// 에러가 던져지면 실행됨
app.use(function(error, req, res, next){
  console.error('[Throwed error]', error.stack);
  return res.status(500).send('Something broken!!!');
});
// 세션 연결
app.use(session({
  secret: "!ad%dfh410",
  resave: false,
  saveUninitialized: true
}));
// localhost/로 접근하면 public에 있는 정보를 뿌려줌
app.use('/', express.static(path.join(__dirname, '../public')));
// 어떤 라우트로 접근하든 index.html을 뿌려줌.
app.get('*', (req,res)=>{
  return res.sendFile(path.join(__dirname, '../public/index.html'));
});
// 서버 연결
app.listen(expressPort, ()=>{
  console.log('Express server is running on port:', expressPort);
});

// webpack-dev-server를 실행하면,
// cross-env process.env.NODE_EVN=development 로 시스템 환경을 바꾸도록 script를 작성하여
console.log(process.env.NODE_ENV)
if(process.env.NODE_ENV === 'development'){
  const config = require('../webpack.dev.config');
  const compiler = webpack(config);
  const devServer = new WebpackDevServer(compiler, config.devServer);
  devServer.listen(devPort, ()=>{
    console.log('Develoopment server is running on port:', devPort);
  });
}