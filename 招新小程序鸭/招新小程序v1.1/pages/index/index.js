const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    isHide : app.globalData.isHide,
    canIUse : app.globalData.canIUse,

    status : 1,
    a : 2,
    b :3,

    // 轮播图（第一部分）
    imgUrls: [
      'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
      'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640',
      'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640',
      '/images/ceshi.png'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    circular: true,


    rush: "/images/rush.png",
    signUp: "/images/signUp.png",
    navigation: "/images/navigation.png",
    interview: "/images/interview.png",

    //介绍（第三部分）

    introductionpart: "云顶书院（简称云顶）落户于太原理工大学“数港”和“逸庐”双创基地，现有 在校学员300余人，分别来自16个学院的26个专业，是以能力培养为导向的“五创+”梯级递进、多维赋能的生态育人平台。团队肇始于2015年7月由高航老师创建的“互联网+ ",

    //新闻（第四部分）

    list: [{
        idd: '1',
        title: '啊啊啊',
        content: 'aaa啊啊啊啊啊啊八八八八八八啦啦啦啦啦啦啦啦啦啦啵啵啵啵啵啵啵啵啵呵呵恩呵呵呵呵',
        author: '吴彦祖',
        time: '2019.01.01',
        images: '/images/doit.jpg'
      },

      {
        idd: '2',
        title: '啊啊啊',
        content: 'aaa啊啊啊啊啊啊八八八八八八啦啦啦啦啦啦啦啦啦啦啵啵啵啵啵啵啵啵啵呵呵恩呵呵呵呵',
        author: '吴彦祖',
        time: '2019.01.01',
        images: '/images/doit.jpg'
      },

      {
        idd: '3',
        title: '啊啊啊',
        content: 'aaa啊啊啊啊啊啊八八八八八八啦啦啦啦啦啦啦啦啦啦啵啵啵啵啵啵啵啵啵呵呵恩呵呵呵呵',
        author: '吴彦祖',
        time: '2019.01.01',
        images: '/images/doit.jpg'
      },
      {
        idd: '4',
        title: '啊啊啊',
        content: 'aaa啊啊啊啊啊啊八八八八八八啦啦啦啦啦啦啦啦啦啦啵啵啵啵啵啵啵啵啵呵呵恩呵呵呵呵',
        author: '吴彦祖',
        time: '2019.01.01',
        images: '/images/doit.jpg'
      },
      {
        idd: '5',
        title: '啊啊啊',
        content: 'aaa啊啊啊啊啊啊八八八八八八啦啦啦啦啦啦啦啦啦啦啵啵啵啵啵啵啵啵啵呵呵恩呵呵呵呵',
        author: '吴彦祖',
        time: '2019.01.01',
        images: '/images/doit.jpg'
      }, {
        idd: '6',
        title: '啊啊啊',
        content: 'aaa啊啊啊啊啊啊八八八八八八啦啦啦啦啦啦啦啦啦啦啵啵啵啵啵啵啵啵啵呵呵恩呵呵呵呵',
        author: '吴彦祖',
        time: '2019.01.01',
        images: '/images/doit.jpg'
      }, {
        idd: '7',
        title: '啊啊啊',
        content: 'aaa啊啊啊啊啊啊八八八八八八啦啦啦啦啦啦啦啦啦啦啵啵啵啵啵啵啵啵啵呵呵恩呵呵呵呵',
        author: '吴彦祖',
        time: '2019.01.01',
        images: '/images/doit.jpg'
      }, {
        idd: '8',
        title: '嘤嘤嘤',
        content: 'aaa啊啊啊啊啊啊八八八八八八啦啦啦啦啦啦啦啦啦啦啵啵啵啵啵啵啵啵啵呵呵恩呵呵呵呵',
        author: '吴彦祖',
        time: '2019.01.01',
        images: '/images/doit.jpg'
      }
    ],
  },

  //----------------------------------------

  onPullDownRefresh: function() {
    wx.showNavigationBarLoading() //在标题栏中显示加载

    //模拟加载
    setTimeout(function() {
      // complete
      wx.hideNavigationBarLoading() //完成停止加载
      wx.stopPullDownRefresh() //停止下拉刷新
    }, 1500);
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // console.log(app.globalData.isHide)

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
  btnclick1: function() {
    if (this.data.status == 11) {
      wx.showToast({
        title: '票已抢完',
        mask: true,
        image: '',
        icon: 'none'
      })
    } else {
      

      wx.navigateTo({
        url: '../rush/rush_index/rush_index',
      })
    }
  },

  btnclick2: function() {
    if (this.data.a == 22) {
      wx.showToast({
        title: '报名截止',
        mask: true,
        image: '',
        icon: 'none'
      })
    } else {

      wx.navigateTo({
        url: '../registrationSystem/sign_up/sign_up',
      })
    }
  },



  btnclick3: function() {
    if (this.data.b == 33) {
      wx.showToast({
        title: '面试结束',
        mask: true,
        image: '',
        icon: 'none'
      })
    } else {
      wx.navigateTo({
        url: '../interview/interview_index/interview_index',
      })
    }
  },
  btnclick4: function() {

    wx.navigateTo({
      url: '../map/map',
    })
    
  }



})