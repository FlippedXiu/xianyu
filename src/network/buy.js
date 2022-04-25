import {request} from './request'

export function getBuyData(userID) {
  return request({
    url:'/buy',
    params:{
      userID
    }
  })
}