import service from './index'
export default {
    // 1. 获取首页数据(get)
    home() {
        return service.get(`/goods/home`)
    },
    // 2. 为你推荐(get)
    recommend() {
        return service.get(`/goods/recommend`)
    },
    // 3. 所有商品(get)
    allGoods() {
        //         参数: 
        // 1.page: 请求页数(必填)
        // 2.size: 请求条数(必填)
        // 3.sort: 排序方式 1为升序 -1为降序
        // 4.priceGt: 价格区间 从多少开始
        // 5.priceLte: 价格区间 到哪结束
        return service.get(`/goods/allGoods?page=${page}size=${size}sort=${sort}priceGt=${priceGt}priceLte=${priceLte}`)
    },
    // 4. 搜索商品(get)
    search() {
        // keyword: 关键字

        return service.get(`/goods/search?keyword=${keyword}`)
    },
    // 5. 商品详情(get)
    detail() {
        // productId: 商品id
        return service.get(`/goods/detail?productId=${id}`)
    },
    // 6. 登录(post)
    login({ username, password }) {
        // username: 用户名
        // password: 密码
        return service.post(`/users/login`, { username, password })
    },
    // 7. 登录(post)
    register({ username, password }) {
        // username: 用户名
        // password: 密码
        return service.post(`/users/register`, { username, password })
    },
    // 8. 加入购物车(post)
    addCart(productId) {
        // productId: 商品id
        return service.post(`/goods/addCart`, {productId})
    },
    // 9. 查询购物车(get)
    getCarts() {
        return service.get(`/goods/getCarts`)
    },
    // 10. 删除购物车的商品(post)
    delCart(productId) {
        // productId: 商品id
        return service.post(`/goods/delCart`, {productId})
    },
    // 11. 修改购物车的数量(post)
    editCart({productId,count}) {
        // 1.productId: 商品_id
        // 2.count: 数量
        return service.post(`/goods/editCart`, { productId,count})
    },
     // 12. 获取全部收获地址(get)
     list() {
        return service.get(`/address/list`)
    },
     // 13. 添加收获地址(post)
     editCart({username,phone,address,isDefault}) {
        // 1.username: 用户名
        // 2.phone: 电话
        // 3.address: 地址
        // 4.isDefault: 是否为默认地址
        return service.post(`/address/addAddress`,{username,phone,address,isDefault})
    },
       // 14. 添加收获地址(post)
       editCart({username,phone,address,isDefault}) {
        // 1.username: 用户名
        // 2.phone: 电话
        // 3.address: 地址
        // 4.isDefault: 是否为默认地址
        return service.post(`/address/addAddress`,{username,phone,address,isDefault})
    },

}