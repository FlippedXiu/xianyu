import {request} from './request'

export function postLogin(username, password) {
    return request({
        url: '/user/login',//此处的url需要修改
        params: {
            username,
            password
        }
    })
}

export function getCart(uid) {
    return request({
        url: '/cart/load',//此处的url需要修改
        params: {
            uid
        }
    })
}