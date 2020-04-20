<template>
  <div class="container">
    <div class="column"></div>
    <div class="column"></div>
    <div class="column"></div>
  </div>
</template>

<script>
// import Rate from './Rate.vue'
export default {
  name: 'haha',
  // components: {
  //   Rate
  // },
  data () {
    return {
      rateNum: 0
    }
  }
}
</script>

<style>
.column:nth-of-type(1),
.column:nth-of-type(2) {
  float: left;
  width: 200px;
  height: 400px;
  margin-right: 10px;
  background: lightgreen;
}
.column:nth-of-type(2) {
  float: right;
  margin-left: 10px;
}
.column:nth-of-type(3) {
  overflow: hidden;
  height: 400px;
  background: lightgray;
}
</style>
