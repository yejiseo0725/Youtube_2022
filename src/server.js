import express from "express";
// "express" 라는 package 를 express 라는 이름으로 import 해 온 것

const PORT = 4000;

// express 사용 방법
const app = express();

const handleListening = () =>
  console.log(`Server listening on port http://localhost:${PORT}`);

app.listen(PORT, handleListening);
