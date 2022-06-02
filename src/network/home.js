import {request} from "./request";

export function getHomeData1() {
  return request({
    url: '/home/multidata'//此处的url需要修改
  })
}

//此处后端需要传入两个参数，type有三种类型
export function getHomeGoods(type) {
  return request({
    url: '/item/getByType',//此处的url需要修改
    params: {
      type,
    }
  })
}