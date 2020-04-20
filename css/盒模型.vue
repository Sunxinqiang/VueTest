<template>
  <div class="container">
    <div class="box">普通盒模型</div>
    <div class="box alternate">替代盒模型</div>
    <div class="wrapper">
      <div class="block1">block width margin</div>
    </div>
    <div class="wrapper">
      <div class="block2">block width margin</div>
    </div>
    <div class="wrapper">
      <div class="inline">inline width margin</div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.box {
  width: 200px;
  height: 100px;
  padding: 20px;
  border: 10px solid #ddd;
}
.box:nth-of-type(1) {
  margin-bottom: 10px;;
}
.box:nth-of-type(2) {
  margin-left: 10px;;
}
.alternate {
  box-sizing: border-box;
}
.wrapper {
  margin-top: 50px;
  border: 5px solid green;
}
.block1 {
  width: 100px;
  height: 50px;
  margin-top: -20px;
  background: #ddd;
}
.block2 {
  width: 100px;
  height: 50px;
  margin: 20px;
  background: #ddd;
}
.inline {
  display: inline;
  margin: -20px 50px 60px;
  background: #ddd;
}
</style>