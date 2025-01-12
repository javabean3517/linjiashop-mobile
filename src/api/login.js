import request from '@/utils/request'

export default {

  loginByLink:function(link,uuid,imageCode) {
    return request({
      url: '/user/loginByLink',
      method: 'post',
      params: {
        "link": link,
        "uuid": uuid,
        "imageCode": imageCode
      }
    })
  },

  loginByTg:function(token, tgCode,uuid,imageCode) {
    return request({
      url: '/user/loginByTg',
      method: 'post',
      params: {
        "token": token,
        "tgCode": tgCode,
        "uuid": uuid,
        "imageCode": imageCode
      }
    })
  },

  logout:function(){
    return request({
      url: '/logout',
      method: 'post'
    })
  },
  getBotLink:function(){
    return request({
      url: '/user/getBotLoginLink',
      method: 'get'
    })
  },
  register:function(account,pwd,uuid,imageCode){
    return request({
      url: '/user/register',
      method: 'post',
      params: {
        "account": account,
        "pwd": pwd,
        "uuid": uuid,
        "imageCode": imageCode
      }
    })
  },
  loginByPass:function(account,pwd,uuid,imageCode){
    return request({
      url: '/user/loginByPass',
      method: 'post',
      params: {
        "account": account,
        "pwd": pwd,
        "uuid": uuid,
        "imageCode": imageCode
      }
    })
  },
  getCaptcha:function(){
    return request({
      url: '/user/getCaptcha',
      method: 'get'
    })
  },
}
