<template>
 <div>
 <div >
    <Carousel  v-model="value2" class="logo3" autoplay >
        <CarouselItem v-for="(item,index) in arr" :key="index" class="d-f p-r" >
         <img :src="item.picUrl" alt="" height="406" width="1220" class="image"> 
         <img :src="item.picUrl2" alt="" class="p-a logo image" height="406" width="1220"> 
         <img :src="item.picUrl3" alt="" class="p-a logo1 image" height="406" width="1220"> 
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
.logo3{
    width: 1220px;
    left: 170px;
}
.image{
    transition: all .3s linear;
}
</style>