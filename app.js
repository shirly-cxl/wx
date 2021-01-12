// app.js
App({
  //应用第一次启动的就会触发的事件
  onLaunch() {
  
  },
  globalData: {
   
  },
  //应用被用户看见的时候触发
  onShow(){
    console.log('onShow');
  },
  //应用被隐藏的时候触发
  onHide(){
    console.log('onHide');
  },
  //应用代码发生报错的时候触发
  onError(err){
    console.log(err);
  },
  //应用第一次启动的时候，如果找不到入口页面才会触发
  onPageNotFound(){
    console.log('onPageNotFound');
  }
})
