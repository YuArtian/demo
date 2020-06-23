var JSBridge = {
  isJSBridgeAPPDemo: isJSBridgeAPPDemo(), //return bool
  device: getDeviceInfo(), //return type:ios
  eventMap: {
    //事件队列
  },
  uid: 0,
  deviceRouter: function (method, params, callback, isHold) {
    if (!this.isJSBridgeAPPDemo) {
      return console.log("isJSBridgeAPPDemo：false");
    }
    if (this.device.type == IOS) {
      this.iosMethod(method, params, callback, isHold);
    } else if (this.device.type == ANDROID) {
      this.androidMethod(method, params, callback, isHold);
    } else {
      console.error("请在native端使用此方法：" + method);
    }
  },
  iosMethod: function (method, params, callback, isHold) {
    //ios通用方法
    var self = this;
    var uid = this.uid;
    if (callback) {
      this.eventMap[method + uid] = function (data) {
        callback && callback(data);
        if (!isHold) {
          delete self.eventMap[method + uid];
        }
      };
      this.uid = uid + 1;
    }
    try {
      var msgObj = {
        nativeMethod: method,
      };
      if (callback) {
        msgObj.callback = method + uid;
      }
      if (params) {
        msgObj.params = JSON.stringify(params);
      }
      window.webkit.messageHandlers.JSBridge.postMessage(msgObj);
    } catch (e) {
      console.error(JSON.stringify(e));
      console.error("需要在ios设备内使用WKWebView");
    }
  },
  androidMethod: function (method, params, callback, isHold) {
    //android通用方法
    var self = this;
    var uid = this.uid;
    if (callback) {
      this.eventMap[method + uid] = function (data) {
        callback && callback(data);
        if (!isHold) {
          delete self.eventMap[method + uid];
        }
      };
      this.uid = uid + 1;
    }
    try {
      if (params && callback) {
        JSBridgeAndroid[method](JSON.stringify(params), method + uid);
      } else if (params) {
        JSBridgeAndroid[method](JSON.stringify(params));
      } else if (callback) {
        JSBridgeAndroid[method](method + uid);
      } else {
        JSBridgeAndroid[method]();
      }
    } catch (e) {
      console.error(JSON.stringify(e));
      console.error(
        "需要在android设备内使用JSBridge功能，无全局对象JSBridgeAndroid"
      );
    }
  },
  getDeviceId: function (callback) {
    //获取设备id
    this.deviceRouter("getDeviceId", null, callback);
  },
  openPage: function (url) {
    //打开新的webview
    this.deviceRouter("openPage", { url: url }, null);
    if (!this.isJSBridgeAPPDemo) {
      location.href = url;
    }
  },
  popPage: function (n) {
    //关闭页面
    if (!n) {
      n = 1;
    }
    this.deviceRouter("popPage", { step: n }, null);
    if (!this.isJSBridgeAPPDemo) {
      if (n == 1) {
        history.back();
      } else {
        history.go(-n);
      }
    }
    // JSBridgeAndroid.popPage(n);
  },
  hideTitle: function () {
    //隐藏native title bar
    this.deviceRouter("hideTitle", null, null);
    // JSBridgeAndroid.hideTitle();
  },
  showTitle: function () {
    //显示native title bar
    this.deviceRouter("showTitle", null, null);
    // JSBridgeAndroid.showTitle();
  },
  addResumeEvent: function (callback) {
    //resume
    this.deviceRouter("addResumeEvent", null, callback, true);
    if (!this.isJSBridgeAPPDemo) {
      pageBackFromNextPage(callback);
    }
    // JSBridgeAndroid.addResumeEvent(name + uid);
  },
  addPauseEvent: function (callback) {
    //pause
    this.deviceRouter("addPauseEvent", null, callback, true);
    if (!this.isJSBridgeAPPDemo) {
      pagePause(callback);
    }
  },
};

var J_GotoBaidu = document.getElementById("J_GotoBaidu");
J_GotoBaidu.onclick = function () {
  JSBridge.openPage("https://www.baidu.com");
};
