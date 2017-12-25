/**
 * 定义与原生交互的方法
 */


import store from '../store';
/**
 * 原生回调定位方法
 */

window.getLocationInfo = function(adresss, lat, lng) {
  store.state.pointName = adresss
  store.state.lat = lat
  store.state.lng = lng
}

/**
 * 调用原生定位调用方法
 */
window.checkPhone = function () {
  var u = navigator.userAgent;
  if (u.indexOf('Android') > -1 || u.indexOf('Linux') > -1) {//安卓手机
    window.myObj.requestLocation();
  } else if (u.indexOf('iPhone') > -1) {//苹果手机
    window.location.href = "objc://requestLocation";
  }
}
