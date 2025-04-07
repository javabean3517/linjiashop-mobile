import request from '@/utils/request'

export default {
  getAllCategories:function(){
    return request({
      url: 'product/category/list',
      method: 'get'
    })
  },
  getConfig:function(){
    return request({
      url: 'product/config',
      method: 'get'
    })
  }
}
