<template>
 <div>
 <div >
    <Carousel  v-model="value2"  >
        <CarouselItem v-for="(item,index) in arr" :key="index" class="d-f p-r" width="1220">
         <img :src="item.picUrl" alt="" height="406" width="1220"> 
         <img :src="item.picUrl2" alt="" class="p-a logo" height="406" width="1220"> 
         <img :src="item.picUrl3" alt="" class="p-a logo1" height="406" width="1220"> 
        
        </CarouselItem>
       
    </Carousel>
    </div>
 </div>
</template>

<script>
 export default {
   name:'',
   props:{
      arr: {
      type: Array,
      default: () => []
    }
    },
   data () {
     return {
     value2: 0
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
.logo{
    left: 0;
}
.logo1{
    left: 0;
}
</style>