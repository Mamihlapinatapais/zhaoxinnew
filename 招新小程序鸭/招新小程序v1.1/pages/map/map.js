// miniprogram/pages/map/map.js
/*Page({

  intoMap: function () {
    wx.getLocation({
      type: 'gcj02', //返回可以用于wx.openLocation的经纬度
      success: function (res) {  //因为这里得到的是你当前位置的经纬度
        var latitude = res.latitude
        var longitude = res.longitude
        wx.openLocation({        //所以这里会显示你当前的位置
          latitude: latitude,
          longitude: longitude,
          name: "太原理工大学明向校区大数据学院",
          address: "太原理工大学明向校区大数据学院",
          scale: 28
        })
      }
    })
  },       */

Page({
  data: {
    Height: 0,
    scale: 13,
    latitude: "",
    longitude: "",
    markers: [
      {
        id: 0,
        latitude: 37.752610,
        longitude: 112.720140,
        iconPath: '/images/my.png',
        callout: {
          content : "云顶书院数港基地",
          textAlign: 'center',
          fontSize: 15
        }
    },
    {
      id: 1,
      latitude: 37.752570,
      longitude: 112.716460,
      iconPath: '/images/my.png',
      callout: {
        content: "云顶书院逸庐基地",
        textAlign: 'center',
        fontSize: 15
        }
    }
    ],
    controls: [{
      id: 1,
      iconPath: '/images/jian.png',
      position: {
        left: 300,
        top: 100 - 50,
        width: 20,
        height: 20
      },
      clickable: true
    },
    {
      id: 2,
      iconPath: '/images/jia.png',
      position: {
        left: 320,
        top: 100 - 50,
        width: 20,
        height: 20
      },
      clickable: true
    }
    ],
    circles: []

  },

  onLoad: function () {
    var _this = this;
    wx.getSystemInfo({
      success: function (res) {
        //设置map高度，根据当前设备宽高满屏显示
        _this.setData({
          view: {
            Height: res.windowHeight
          }

        })

      }
    })

    wx.getLocation({
      type: 'wgs84', // 默认为 wgs84 返回 gps 坐标，gcj02 返回可用于 wx.openLocation 的坐标
      success: function (res) {

        _this.setData({
          latitude: res.latitude,
          longitude: res.longitude,
         
        })
      }

    })

  },

  regionchange(e) {
    console.log("regionchange===" + e.type)
  },

  //点击merkers 进行导航
  gotohere: function (res) {
    console.log(res);
    let lat = ''; // 获取点击的markers经纬度
    let lon = ''; // 获取点击的markers经纬度
    let name = ''; // 获取点击的markers名称
    let markerId = res.markerId;// 获取点击的markers  id
    let markers = this.data.markers;// 获取markers列表

    for (let item of markers) {
      if (item.id === markerId) {
        lat = item.latitude;
        lon = item.longitude;
        name = item.callout.content;
        wx.openLocation({ // 打开微信内置地图，实现导航功能（在内置地图里面打开地图软件）
          latitude: lat,
          longitude: lon,
          name: name,
          success: function (res) {
            console.log(res);
          },
          fail: function (res) {
            console.log(res);
          }
        })
        break;
      }
    }
  },


  

  //点击缩放按钮动态请求数据
  controltap(e) {
    var that = this;
    console.log("scale===" + this.data.scale)
    if (e.controlId === 1) {
      // if (this.data.scale === 13) {
      that.setData({
        scale: --this.data.scale
      })
      // }
    } else {
      //  if (this.data.scale !== 13) {
      that.setData({
        scale: ++this.data.scale
      })
      // }
    }

  },

})