// pages/demo/sort/sort.js

Page({
  data: {
      arr: [
        { id: '1', name: '我是一，我今年12岁', age: '12' },
        { id: '5', name: '我是五，我今年24岁', age: '24' },
        { id: '3', name: '我是三，我今年28岁', age: '28' },
        { id: '4', name: '我是四，我今年18岁', age: '18' },
        { id: '2', name: '我是二，我今年36岁', age: '36' },
      ],
  },
  mySort: function (e) {
      //property 根据什么排序
      var property = e.currentTarget.dataset.property;
      var self = this;
      var arr = self.data.arr;
      var sortRule = true; // 正序倒序
      self.setData({
        arr: arr.sort(self.compare(property, sortRule))
      })
      // console.log(e);
    },
  compare: function (property, bol) {
      return function (a, b) {
      var value1 = a[property];
      var value2 = b[property];
      console.log(a);
      console.log(value1);
      console.log(value2);
      if(bol){
        return value1 - value2;
      }else {
        return value2 - value1;
      }
    }
  },
})
