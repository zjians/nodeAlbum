var fs = require('fs');
var path = require('path');
exports.getAllDir = () =>{
  return new Promise((resolve,reject)=>{
    fs.readdir('./public/photo',(err,data)=>{
      if(err){
        reject(err);
      }else{
        var dirArr = [];
        data.map((item,index,arr)=>{
          var stats = fs.statSync('./public/photo/'+item);
          if(stats.isDirectory()){
            dirArr.push(item);
          }
        });
        resolve(dirArr);
      }
    });
  });
}
exports.getAlbums = (albumName) =>{
  return new Promise((resolve,reject)=>{
    let photoPath = process.cwd()+'/public/photo/'+albumName;
    fs.readdir(photoPath,(err,data)=>{
      if(err){
        reject(err);
      }else{
        let photos = [];
        data.map((item,index,arr)=>{
          const datas = fs.statSync(photoPath+'/'+item);
          if(datas.isFile()){
            photos.push(item);
          }
        });
        resolve(photos);
      }
    });
  });
}