<template>
 <div>
 <div class="d-f picture1">
     <Card style="width:304px height:200px" v-for="(item,index) in arrs" :key="index">
        <div style="text-align:center">
        <div class="picture">
            <img :src="item.picUrl" alt="" width="280" height="200">
            
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
    position: relative;
    left: 170px;
}

</style>