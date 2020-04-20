<template>
  <div>
    <button @click="name='childUpdate'">子：{{name}},{{child}}</button>
  </div>
</template>

<script>
import lifeCycleMixin from './lifeCycleMixin'

export default {
  name: 'Child',
  mixins: [lifeCycleMixin],
  props: {
    child: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      name: 'child'
    }
  }
}
</script>