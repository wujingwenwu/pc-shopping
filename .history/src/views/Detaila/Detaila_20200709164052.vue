<template>
  <div>
    <div class="details d-f a-i-c">
        <div class="goods_a">
          <div class="gleft" >
            <div class="glimg" v-for="(item,index) in obj.productImageBig" :key="index" @click="clickImg(item)">
            <div class="ggimg" ><img :src="item" alt="" width="75px"></div>
            </div>
          </div>
          <div class="gright"><img :src="productImageBig" alt="" width="350px"></div>
        </div>
     


      <div class="m-l-40">
        <div class="name">{{obj.productName}}</div>
        <div class="d-f m-t-5">
          <div class="f-c-hu m-t-10">{{obj.subTitle}}</div>
          <div class="f-w Price">￥{{obj.salePrice}}.00</div>
        </div>
        <div class="m-t-10 sale"></div>
        <div class="d-f m-t-30">
          <div class="f-c-hu m-t-5">数量</div>
          <el-input-number size="mini" v-model="num4" :min="1" :max="10" class="num" @click="input"></el-input-number>
        </div>
        <div class="m-t-30 sale"></div>
        <div class="d-f m-t-30">
          <Button size="large" type="primary" class="large1">加入购物车</Button>
          <Button size="large" type="default" class="large">立即购买</Button>
        </div>
      </div>
    </div>
    <div class="products">
      <div class="products1 d-f a-i-c">
        <div class="m-l-20 f-s-18 c-p">产品信息</div>
      </div>
    </div>
    <div class="detail">
      <div v-html="obj.detail"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {
      productId: "",
      obj: {},
      num4: 1,
       productImageBig: ''
    };
  },
  components: {},
  methods: {
      clickImg(item) {
      this.productImageBig = item
    },
    input(){
      this.$api.editCart({
        count:item.num4,
        productId:thi
      }).then(res=>{
        console.log(res);
      }).catch(err=>{
        console.log(err);
      })
    }
  },
  mounted() {
    let id = window.location.search;

    this.productId = id.substring(id.indexOf("=") + 1).toUpperCase();
    // this.id=this.$route.query.id
    console.log(this.productId);
    this.$api
      .detail(this.productId)
      .then(res => {
        this.obj = res.data.result;
        this.productImageBig = this.obj.productImageBig[0]
        console.log(this.obj);
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.details {
  width: 1220px;
  height: 562px;
  background: white;
  border-radius: 10px;
  margin-left: 170px;
}
.details1 {
  width: 80px;
  height: 80px;
  border: 0.5px solid rgb(231, 225, 225);
  border-radius: 5px;
  margin-left: 60px;
}
.Price {
  color: rgb(196, 10, 10);
  font-size: 22px;
  margin-left: 100px;
}
.name {
  font-size: 22px;
}
.sale {
  width: 400px;
  height: 1px;
  background: #999;
}
.num {
  margin-left: 20px;
}
.large {
  margin-left: 20px;
  width: 145px;
  height: 50px;
}
.large1 {
  width: 145px;
  height: 50px;
}
.products1 {
  width: 1220px;
  height: 60px;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  box-shadow: 0 1px 7px rgba(0, 0, 0, 0.06);
  background: linear-gradient(#fbfbfb, #ececec);
}
.products {
  margin-left: 170px;
  margin-top: 20px;
}
.detail {
  width: 1220px;
  background: white;
  margin-left: 170px;
}
.gright{
  margin-left: 200px;
  margin-top: -420px;
}
</style>