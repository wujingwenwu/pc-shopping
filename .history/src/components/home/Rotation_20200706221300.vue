<template>
 <div>
 <div >
    <Carousel  v-model="value2"  >
        <CarouselItem v-for="(item,index) in arr" :key="index" class="d-f p-r">
         <img :src="item.picUrl" alt="" height="406"> 
         <img :src="item.picUrl2" alt="" class="p-a logo" height="406"> 
         <img :src="item.picUrl3" alt="" class="p-a" height="406"> 
        
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
</style>