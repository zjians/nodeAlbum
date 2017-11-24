let express = require('express');
let app = express();
let router = require('./control/router.js');

app.set('view engine','ejs');
app.use(express.static('./public'));

app.get('/',router.showDir);
// app.router('/upload').get().post(); 
app.get('/:albumName',router.showAlbum);
app.get('/upload',router.upload);
app.post('/upload',router.doPost);


app.all('*',(req,res)=>{ // 捕捉所有无匹配的路径。
  res.render('err');
});
app.listen(3000);