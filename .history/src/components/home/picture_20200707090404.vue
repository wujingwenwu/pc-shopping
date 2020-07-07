<template>
 <div>
 <div class="d-f">
     <Card style="width:320px" v-for="(item,index) in arrs" :key="index">
        <div style="text-align:center">
            <img :src="item.picUrl" alt="" width="304" height="200">
           
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
.picture{
    border: 1px solid rgb(247, 247, 247);
    width: 304px;
    border-radius: 50px;
}
</style>