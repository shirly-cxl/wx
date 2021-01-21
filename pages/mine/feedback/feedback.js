// pages/mine/feedback/feedback.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs: [{
        id: 0,
        name: '体验问题',
        isActive: true
      },
      {
        id: 1,
        name: '商品，商家投诉',
        isActive: false
      },
    ],
    chooseImage: [],
    textVal: "",
  },
  //外网的图片的路径数组
  upLoadImgs: [],
  handItemChange(e) {
    const {
      index
    } = e.detail;
    let {
      tabs
    } = [];
    tabs = this.data.tabs;
    tabs.forEach((v, i) => i === index ? v.isActive = true : v.isActive = false);
    this.setData({
      tabs
    });
  },
  //点击+ 选择图片
  chooseImg() {
    wx.chooseImage({
      count: 9,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: (res) => {
        this.setData({
          chooseImage: [...this.data.chooseImage, ...res.tempFilePaths]
        })
        console.log(res);
      }
    });
  },
  //点击 自定义图片组件
  removeImg(e) {
    //1.获取被点击的组件的索引
    const {
      index
    } = e.currentTarget.dataset;
    //2.获取data中的图片数组
    let {
      chooseImage
    } = this.data;
    //3.删除元素
    chooseImage.splice(index, 1);

    this.setData({
      chooseImage
    });
  },
  //文本域的输入事件
  textInput(e) {
    this.setData({
      textVal: e.detail.value
    });
  },
  //提交按钮的点击事件
  formSubmit() {
    //1.获取文本域的内容
    const {
      textVal,
      chooseImage
    } = this.data;
    //2.合法性验证
    if (!textVal.trim()) {
      //不合法
      wx.showToast({
        title: '输入不合法',
        icon: 'none',
        mask: true
      });
      return;
    }

    wx.showLoading({
      title: '正在上传中',
      mask: true
    });

    //判断有没有需要上传的数组
    if (chooseImage.length != 0) {

      chooseImage.forEach((v, i) => {
        //3.上传图片到专门的服务器 只能上传一张，所以需要遍历上传
        wx.uploadFile({
          //被上传的文件的路径
          filePath: v,
          //上传文件的名称，方便后台获取文件
          name: 'file',
          //图片上传的地址
          url: 'http://chuantu.biz/',
          //顺带的文本信息
          formData: {},
          success: (res) => {
            console.log(res);
            let url = JSON.parse(res.data);
            this.upLoadImgs.push(url);

            if (i === chooseImage.length - 1) {
              console.log('ok');
              this.setData({
                textVal: "",
                chooseImage: []
              });

              wx.navigateBack({
                delta: 1,
              });

              wx.hideLoading();
            }
            console.log(this.upLoadImgs);
          }
        });
      });

    }else{
      console.log('只提交文本');
      wx.hideLoading();
      wx.navigateBack({
        delta: 1,
      });
    }

  },
})