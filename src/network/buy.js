import {request} from './request'

export function getBuyData(userID) {
  return request({
    url:'/user/bought',
    params:{
      userID
    }
  })
}