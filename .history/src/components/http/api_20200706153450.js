import service from './index'
export default{
     // 1. 获取首页数据(get)
     home(){
        return service.get(`/recommend`)
    },
}