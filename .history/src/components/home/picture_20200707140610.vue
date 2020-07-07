<template>
<!-- 活动版块 -->
 <div>
 <div class="d-f picture1 c-p">
     <Card style="width:305px" v-for="(item,index) in arrs" :key="index" class="picture2">
        <div style="text-align:center">
        <div class="picture">
            <img :src="item.picUrl" alt="" width="280" height="180">
            
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
.picture1{
   position: absolute;
   left: 170px;
   margin-top: 30px;
}
.picture2{
    height: 200px;
}
.picture2:hover{
   box-shadow: inset 1px 1px 15px rgb(207, 204, 204);

}
</style>