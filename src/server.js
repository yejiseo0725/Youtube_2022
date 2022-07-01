// server 
// 항상 켜져있는(online) 컴퓨터와 같은 것
// request 를 항상 listening 하고 있다. 
// server 가 사람들이 뭔가를 request 할 때 까지 기다리게 하기 - app.listen()



import express from "express";
// "express" 라는 package 를 express 라는 이름으로 import 해온 것
// 이렇게 작성해 두면, 똑똑한 NodeJS 와 npm 은 내가 'node_modules' 에서 express 를 찾고 있다는 것을 알아낸다. -> 경로 설정 해 줄 필요 X

const app = express();
// express function 을 사용해 express application 생성하기

