import request from '@/utils/request'


 export default{

    queryGoods:function(params) {
     return request({
       url: 'product/goods/queryGoods',
       method: 'get',
       params
     })
   },

   /**
    * 根据关键字查询商品
    * @param params
    */
   search:function(params) {
     return request({
       url: 'product/goods/search/'+params,
       method: 'get',

     })
   },

   /**
    * 获取热门推荐
    * @param params
    */
   searchHot:function() {
     return request({
       url: 'product/goods/searchHot',
       method: 'get'
     })
   },
   /**
    * 获取新品推荐
    */
   searchNew:function() {
     return request({
       url: 'product/goods/searchNew',
       method: 'get'
     })
   },
   getGoods:function(id) {
     return request({
       url:'product/goods/'+id,
       method:'get'
     })
   }

 }
