import {request} from './request'

export function getDetailData(iid) {
  return request({
    url:'/item/get',
    params:{
      iid
    }
  })
}

//要求传入的是json数组
export class Goods {
  constructor(itemInfo) {
    this.title = itemInfo.title//string
    this.price = itemInfo.price//int
  }
}

//要求传入的是json数组，logo为图片，name为string
export class Shop {
  constructor(shopInfo) {
    this.name = shopInfo.name;
  }
}
