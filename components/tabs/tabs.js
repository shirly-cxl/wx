// components/tabs/tabs.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tabs:{
      type:Array,
      value:[],
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handTab(e){
      // const {index} = e.currentTarget.dataset;
      //最严谨的做法
      // let tabs = JSON.parse(JSON.stringify(this.data.tabs));
      // let {tabs} = this.data;
      // //相当于let tabs=this.data.tabs;
      // tabs.forEach((v,i)=> i === index ? v.isActive=true : v.isActive=false);
      // this.setData({tabs});
      // console.log(e);
      const {index} = e.currentTarget.dataset;
      this.triggerEvent("itemChange",{index});
    }
  }
})
