<template>
  <div>
    <div
      class="star"
      :class="{'active': star <= (selectStar || hoverStar)}"
      v-for="star in starLength"
      :key="star"
      @mouseenter="hoverStar = star"
      @mouseleave="hoverStar = -1"
      @click="select(star)"
      ></div>
  </div>
</template>

<script>
export default {
  name: 'Rate',
  props: {
    starLength: {
      type: Number,
      default: 5
    },
    value: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      hoverStar: -1,
      selectStar: 0
    }
  },
  methods: {
    select (star) {
      this.selectStar = star
      this.$emit('input', star)
    }
  }

}
</script>

<style>
.star {
  display: inline-block;
  width: 50px;
  height: 50px;
  border: 1px solid #ddd;
}
.active {
  background: yellow;
}
</style>