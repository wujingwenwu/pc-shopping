<template>
 <div>
 <div class="d-f">
     <Card style="width:335px" v-for="(item,index) in arrs" :key="index">
        <div style="text-align:center">
        <div class="picture">
            <img :src="item.picUrl" alt="" width="304" height="200">
            <div class="picture1"></div>
           </div>
        </div>
    </Card>
    </div>
 </div>
</template>

<script>
 export default {
   name:'',
   props:{
         arrs: {
      type: Array,
      default: () => []
    }
    },
   data () {
     return {

   }
   },
   components: {

   },
   methods: {

   },
   mounted() {

   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>
.picture :hover >.picture1{
   visibility: visible;
}
.picture1{
    background: red;
    width: 304px;
    height: 200px;
    margin-top: -206px;
}
.picture1:hover{
    visibility: hidden;
}
</style>