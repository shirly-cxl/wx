// logs.js

Page({
  data: {
    
  },
  onLoad() {
   
  },
  userInfo(e){
    //1.获取用户信息
    const {encryptedData, rawData, signature, iv} = e.detail;
    //2.获取小程序登录成功的code
    wx.login({
      timeout: 10000,
      success:(result) =>{
        const {code} = result;
        //3.发送请求，获取用户登录成功的code
        const loginParams = {encryptedData, rawData, signature, iv};
        wx.request({
          url: 'url',
          method:"POST",
          data: loginParams,
          success:(res)=>{
            wx.setStorageSync("token", res);
            wx.navigateBack({
              delta: 1,
            })
          }
        });
        wx.setStorageSync("token", result);
        wx.navigateBack({
          delta: 1,
        });
        console.log(code);
      }
    })
    console.log(e);
  },
})
