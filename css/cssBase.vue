<template>
  <div>
    <ul>
      <li class="">default  <a href="#">link</a></li>
    </ul>
    <ul class="body">
      <li class="my-class-1">inherit  <a href="#">link</a></li>
      <li class="my-class-2">initial  <a href="#">link</a></li>
      <li class="my-class-3">unset  <a href="#">link</a></li>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style>

* {
  color: red;
}
.body {
    color: green;
}
.my-class-1 a {
    color: inherit;
}
.my-class-2 a {
    color: initial;
}
.my-class-3 a {
    color: unset;
}
</style>