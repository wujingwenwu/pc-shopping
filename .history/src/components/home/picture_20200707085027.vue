<template>
 <div>
   <div v-for="(item,index) in arrs" :key="index">
    <img :src="item.picUrl" alt="">
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

</style>