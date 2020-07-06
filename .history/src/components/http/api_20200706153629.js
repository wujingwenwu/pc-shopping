import service from './index'
export default{
     // 1. 获取首页数据(get)
     home(){
        return service.get(`/goods/home`)
    },
      // 2. 为你推荐(get)
      recommend(){
        return service.get(`/recommend`)
    },
}