const express = require('express');
const app = express();
const cors = require('cors');


const recipes=[{"title":"簡単！ホットケーキミックスでピザ",
  "name":"by A",
  "time":"15分",
  "like": 1000,
  "date": "2019年5月12日",
  "photo":"https://asset.oceans-nadia.com/upload/save_image/84/84cf28750053bfc6587635e221fc95cf.jpeg"},
  {"title":"もちもちかしわもち",
  "name":"by B",
  "time":"40分",
  "like": 500,
  "date": "2021年2月1日",
  "photo":"https://asset.oceans-nadia.com/upload/save_image/e2/e27fe8e59fcd7bf4088994ee73498375.jpg"},
  {"title":"ずっしりバナナパウンドケーキ",
  "name":"by C",
  "time":"10分",
  "like": 3000,
  "date": "2020年9月23日",
  "photo":"https://asset.oceans-nadia.com/upload/save_image/00/009118220ec746e47e705891bf3aeedd.jpg"}]


app.use(express.json());


app.use(cors({
  origin: "http://127.0.0.1:5500",
  credentials: true,
  optionsSuccessStatus: 200
}));

app.get('/', (req, res) => {
  res.send('Hello World!!')
});
app.get('/recipe-list',(req, res)=>{
  
  res.json(recipes);
})
app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
});