<template>
  <div>
    <div class="products"> 
      <div class="products1 d-f a-i-c">
        <div class="m-l-20 f-s-18">{{objz.name}}</div>
      </div>
   <div class="d-f selected">
      <div v-for="(item,index) in arrz" :key="index">
      <div v-if="index<1">
       <img :src="item.picUrl" alt="" width="609" height="430">
      </div>
      <div class="selected1 d-f f-d-c a-i-c" v-else>
      <img :src="item.picUrl" alt="" width="206" height="206" class="logo">
      <div class=" f-s-16">{{item.productName}}</div>
      <div>{{item.subTitle}}</div>
      <div class="f-c-ho">￥{{item.salePrice}}.00</div>
      </div>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    arrz: {
      type: Array,
      default: () => []
    },
    objz: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {};
  },
  components: {},
  methods: {},
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.products1 {
  width: 1220px;
  height: 60px;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  box-shadow: 0 1px 7px rgba(0, 0, 0, 0.06);
  background: linear-gradient(#fbfbfb, #ececec);
}
.products{
    position: relative;
    top: 285px;
    margin-left: 170px;
}
.selected{
    flex-wrap: wrap;
    width: 1220px;
}
.selected1{
    width: 304px;
    height: 436px;
    background: white;
}
.logo{
  margin-top: 40px;
}
</style>