// pages/demo/demo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg:'hello img',
    num:0,
    person:{
      age:20,
      height:160,
      name:'www'
    },
    ischeck:true,
    list:[
      {
        id:0,
        name:'猪八戒',
      },
      {
        id:1,
        name:'孙悟空',
      },
      {
        id:2,
        name:'唐玄奘',
      },
      {
        id:3,
        name:'沙和尚',
      },
    ]
  },
  handInput(e){
    this.setData({
     num : e.detail.value,
    })
    console.log(e);
  },
 handtap(e){
   const open=  e.currentTarget.dataset.open;
   this.setData({
    num : this.data.num + open,
   });
 }
})