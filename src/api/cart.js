import request from '@/utils/request'

export default {
    count: function () {
        return request({
            url: '/order/cart/count',
            method: 'get'
        })
    },
    queryByUser: function () {
        return request({
            url: '/order/cart/queryByUser',
            method: 'get'
        })
    },
    add: function (params) {
        return request({
            url: '/order/cart/add',
            method: 'POST',
            data:params
        })
    },
    update:function(id,count){
        return request({
            url: '/order/cart/update/'+id+'/'+count,
            method: 'POST',
        })
    },
    remove:function(params){
        return request({
            url: '/order/cart',
            method: 'DELETE',
            data:params
        })
    }
}
