// 封装请求

//同时发送请求的次数
let times=0;

export const request = (params)=>{
  times++;
  //显示加载中效果
  wx.showLoading({
    title: '加载中',
    mask:true
  })
  //定义公共的url
  const baseUrl ="http://10.0.0.186:8088";

  return new Promise((resolve,reject)=>{
    wx.request({
      ...params,
      url: baseUrl+params.url,
      success: (result) => {
        resolve(result);
      },
      fail: (err) => {
        reject(err);
      },
      complete:()=>{
        times--;
        if( times === 0){
          wx.hideLoading();
        }
        
      }
    })
  })
}