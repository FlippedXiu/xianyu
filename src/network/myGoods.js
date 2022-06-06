import {request} from './request'

export function getMyGoodsData(sellID) {
  return request({
    url:'/user/forSale',
    params:{
      sellID
    }
  })
}