import request from '@/utils/request'


 export default{
    queryAll:function() {
     return request({
       url: 'product/topic/list',
       method: 'get'
     })
   },
   get:function(id) {
     return request({
       url: 'product/topic/'+id,
       method: 'get'
     })
   }
 }
