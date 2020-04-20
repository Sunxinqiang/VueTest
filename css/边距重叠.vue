<template>
  <div>
    <div class="wrapper">
      <div class="m">（1） 都是整数 margin值取两者的最大值</div>

      <div class="m">（2） 都是负数 margin值取最小值</div>

      <div class="m">（3）两者正负相反，margin值取两者之和</div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.wrapper > div {
  height: 100px;
  border: 0.5px solid #ddd;
}
.m {
  margin: 10px;
}
</style>