<template>
  <div>
    <div><a href="https://segmentfault.com/a/1190000016389031">一篇比较全的文章</a></div>
    <div class="wrapper1">
      <div class="cell">
        <div class="content">display: table; display: table-cell;</div>
        <div class="content">多一层cell</div>
      </div>
    </div>

    <div class="wrapper2">
      <div class="content2">
        绝对定位，top:50%;
        已知子元素高度用 -margin 或者calc(50%-宽高的一半)
        未知用translate(-50%,-50%)
      </div>
    </div>

    <div class="wrapper3">
      <div class="content3">绝对定位，top,left...=0,margin:auto</div>
    </div>

    <div class="wrapper4">
      <div class="content4">display: flex; align-items: center;</div>
    </div>

    <div class="wrapper5">
      <div class="content5">利用::before,vertical-align:middle;子元素要是inline-block</div>
    </div>

    <div class="wrapper6">
      <div class="content6">display: grid; align-items: center;</div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style>
/* 方法1 */
div[class^=wrapper] {
  margin-bottom: 10px;
  width: 100%;
  height: 200px;
  background: #ddd;
}
div[class^=content] {
  margin-right: auto;
  margin-left: auto;
  width: 50%;
  height: 50px;
  background: lightgreen;
}
.wrapper1 {
	display: table;
}

.cell {
	display: table-cell;
	vertical-align: middle;
}

.wrapper2 {
  position: relative;
}
.content2 {
	position: absolute;
	top: 50%;
  left: 50%;

	/* margin-top: -25px; */
  /* margin-left: -25% !important; */

  /* top: calc(50% - 50px);
  left: calc(50% - 25%); */

  transform: translate(-50%,-50%);
}

.wrapper3 {
  position: relative;
}
.content3 {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}

.wrapper4 {
  display: flex;
  align-items: center;
}

.wrapper5 {
  text-align:center;
}

.wrapper5::before{
  width: 0;
  height: 100%;
  content:'';
  display: inline-block;
  vertical-align: middle;
}
.content5 {
  display: inline-block;
}

.wrapper6 {
  display: grid;
  align-items: center;
}

</style>