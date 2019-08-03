// pages/mineinfo/mineinfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

    color: "#999999",
    images1: "/images/more.png",
    infolist: [{
        id: 0,
        brief: '宝贝今天记得来面试哦！',
        content: '规范化风格i九九啦啦啦啦啦啦啦啦啦啦啵啵啵啵啵啵啵啵啵成都粗不粗联合承办的借此机会呵呵恩呵呵呵呵',
        time: '2019.01.01',
        time1: "14.:03",
        status: 0
      },
      {
        id: 1,
        brief: '宝贝看消息啦！快看快看快看啊啊啊啊啊啊啊啊啊',
        content: '的非人非任飞肥肉发热啊啊啊啊八八八八八八啦啦啦啦啦啦啦啦啦啦啵啵啵啵啵啵啵啵啵呵呵恩呵呵呵呵',
        time: '2019.01.03',
        time1: "14.:03",
        status:0
      }, {
        id: 2,
        brief: '面试结果出来了！',
        content: '规范化风格i九九啦啦啦啦啦啦啦啦啦啦啵啵啵啵啵啵啵啵啵成都粗不粗联合承办的借此机会呵呵恩呵呵呵呵',
        time: '2019.01.01',
        time1: "14.:03",
        status: 0
      }, {
        id: 3,
        brief: '来小云云参观吧！',
        content: '规范化风格i九九啦啦啦啦啦啦啦啦啦啦啵啵啵啵啵啵啵啵啵成都粗不粗联合承办的借此机会呵呵恩呵呵呵呵',
        time: '2019.01.01',
        time1: "14.:03",
        status:1
      }
    ]

  },
  // -----------
  changStatus(e) {
    let that = this;
    // console.log(e.currentTarget.dataset.id)
    let index = e.currentTarget.dataset.id;
    var str = 'that.data.infolist['+index+'].status';
    console.log(str);

    that.setData({
      [str]: 1,
    })
    console.log(that.data.infolist[index].status);


    // wx.request({
    //   url: 'ad',
    //   data:{
    //     id:"",
    //     status:1
    //   }
    // })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
})