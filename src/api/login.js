import request from '@/utils/request'

export default {
  loginOrReg:function(mobile, smsCode) {
    return request({
      url: '/loginOrReg',
      method: 'post',
      params: {
        "mobile": mobile,
        "smsCode": smsCode
      }
    })
  },
  loginByPassword:function(username, password) {
    return request({
      url: '/user/loginByPass',
      method: 'post',
      params: {
        "username": username,
        "pwd": password
      }
    })
  },
  sendSmsCode:function(mobile) {
    return request({
      url: '/sendSmsCode',
      method: 'post',
      params: {
        "mobile": mobile
      }
    })
  },
  logout:function(){
    return request({
      url: '/logout',
      method: 'post'
    })
  }

}