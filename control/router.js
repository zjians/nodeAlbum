const file = require('../model/file.js');
const formidable = require('formidable');
const form = new formidable.IncomingForm();

exports.showDir = (req,res,next) =>{ // 读取所有文件夹
  file.getAllDir().then(data =>{
    res.render('home',{
      'allDir':data,
    });
  }).catch((err)=>{
    console.log('读取失败');
    next();
    return;
  });
}

exports.showAlbum = (req,res,next) => { // 读取当前目录下所有图片
  let albumName = req.params.albumName; 
  file.getAlbums(albumName).then((data)=>{
    res.render('content',{
      'allPhotos':{
        data:data,
        path:albumName,
      },
    });
  }).catch((err)=>{
    console.dir(err);
    next();
  });
}

exports.upload = (req,res,next) =>{
  file.getAllDir().then(data =>{
    res.render('upload',{
      uploadDirList: data,
    });
  }).catch((err)=>{
    console.dir(err);
    next();
  });
}
exports.doPost = (req,res) =>{
  form.parse()
}