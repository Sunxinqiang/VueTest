<template>
  <div>
    <button @click="name='FatherUpdate'">父：{{name}}, {{father}}</button>
    <button @click="child='FatherChild'">父更新子：{{name}}</button>
    <Child :child="child"></Child>
  </div>
</template>

<script>
import Child from './Child'
import lifeCycleMixin from './lifeCycleMixin'

export default {
  name: 'Father',
  mixins: [lifeCycleMixin],
  components: {
    Child
  },
  props: {
    father: ''
  },
  data () {
    return {
      name: 'father',
      child: 'child'
    }
  }
}
</script>