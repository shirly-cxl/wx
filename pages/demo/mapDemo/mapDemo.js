// pages/demo/mapDemo/mapDemo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    markers:[]
  },
  onLoad:function(options){
    var that = this;
    wx.getLocation({
      // altitude: 'altitude',
      success:(res)=>{
        that.setData({
          markers:[
            {
              id:1,
              latitude:res.latitude,
              longitude:res.longitude,
              icoPath:'../../../image/location.png',
              width:30,
              height:30,
              label:{
                content:"当前位置",
                color:'#FF0202',
                fontSize:13,
                borderRadius:5, 
                borderWidth:1,
                padding:2,
                display:'ALWAYS'
              }
            }
          ]
        })
        console.log(res);
      }
    })
  },
  chooseLocation:function(){
    var that =this ;
    wx.chooseLocation({
      latitude: 0,
      success:function(res){
        console.log(res);
        that.setData({
          markers:[
            {
              latitude:res.latitude,
              longitude:res.longitude,
              icoPath:'../../../image/location.png',
              width:30,
              height:30,
              callout:{
                content:"当前位置",
                color:'red',
                fontSize:13,
                borderRadius:5, 
                borderWidth:1,
                padding:2,
                display:'ALWAYS'
              }
            }
          ]
        })
      }
    })
  }
})

//https://www.bilibili.com/video/BV17c411h7y3?from=search&seid=15062467844270236624