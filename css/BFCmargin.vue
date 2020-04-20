<template>
  <div>
    <div class="box mb10"></div>
    <div class="wrap">
      <div class="box mt20"></div>
    </div>
    <div class="a">
      <div class="b">上边距溢出,也是重叠</div>
    </div>
    <div class="a f1">
      <div class="b">父元素设置padding:1px</div>
    </div>
    <div class="a f2">
      <div class="b">父元素设置border:1px</div>
    </div>
    <div class="a f3">
      <div class="b">父元素设置成BFC</div>
    </div>
    <div class="a f4">
      <div class="b">子元素设置inline-block</div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
  .box {
    height: 100px;
    background: #ddd;
    border: 1px solid red;
  }
  .mb10 {
    margin-bottom: 10px;
  }
  .mt20 {
    margin-top: 20px;;
  }
  .wrap {
    background: orange;
    width: 100%;
    min-width: 100px;
    /* 形成bfc 变成一个独立容器 容器里外的元素互不影响 */
    overflow: hidden;
    /* float: left; */
    /* position: absolute; */
    /* display: inline-block; */
    /* display: table-cell; */
    /* display: table-caption; */
  }
  .a {
    width:100px;
    height: 100px;
    background-color: yellowgreen;
    margin: 10px;
  }
  .b {
    width:50px;
    height: 50px;
    margin: 10px;
    background: pink;
  }
  .f1 {
    padding: 1px;
  }
  .f2 {
    border: 1px solid #ddd;
  }
  .f3 {
    overflow: hidden;
  }
  .f4 .b{
    display: inline-block;
  }
</style>