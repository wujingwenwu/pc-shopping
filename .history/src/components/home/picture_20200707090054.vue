<template>
 <div>
 <div class="d-f">
     <Card style="width:320px">
        <div style="text-align:center">
            <img :src="item.picUrl" alt="">
           
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