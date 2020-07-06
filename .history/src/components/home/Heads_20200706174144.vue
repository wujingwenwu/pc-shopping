<template>
 <div>
   <div class="heads d-f">
    <div class="heads1 d-f j-c-c a-i-c">M</div>
    <div class="d-f">
     <Input v-model="value" suffix="ios-search" placeholder="Enter something..." style="width: 300px" />
    </div>
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
.heads{
    width: 100%;
    height: 100px;
    background: #000000;
}
.heads1{
    color: black;
    background: white;
    height: 42px;
    width: 42px;
    border-radius: 50%;
    font-size: 24px;
}
</style>