<template>
 <div>
    <div class="products1 d-f a-i-c">
      <div class="m-l-20 f-s-18 c-p">收货信息</div>
    </div>
 </div>
</template>

<script>
 export default {
   name:'',
   props:{

    },
   data () {
     return {
     msg:[],
     list:[]
   }
   },
   components: {

   },
   methods: {

   },
   mounted() {
    this.msg = this.$route.query.msg;
    console.log(this.msg);
      this.$api.list().then(res=>{
      this.list=res.data
      console.log(res);
    }).catch(err=>{
      console.log(err);
    })
   
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>
.products1 {
  width: 1220px;
  height: 60px;
  margin-left: 170px;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  box-shadow: 0 1px 7px rgba(0, 0, 0, 0.06);
  background: linear-gradient(#fbfbfb, #ececec);
}
</style>