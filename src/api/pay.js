import request from '@/utils/request'

export default {
    wxPrepare: function (params) {
        console.log('params',params)
        return request({
            url: '/pay/wx/prepare',
            method: 'post',
            params
        })
    },
    wxPay: function (userName) {
        return request({
            url: '/user/updateUserName/' + userName,
            method: 'post'
        })
    },
    queryResult:function(orderSn){
        return request({
            url: '/pay/queryResult/' + orderSn,
            method: 'get'
        })
    },
    usdtPay:function(orderSn){
        return request({
            url: '/usdt/pay/' + orderSn,
            method: 'get'
        })
    },

    balancePay:function(orderSn){
        return request({
            url: '/balance/' + orderSn,
            method: 'get'
        })
    },
}

