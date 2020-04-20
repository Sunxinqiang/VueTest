<template>
  <div>
    <button @click="father='GrandpaFatherUpdate'">爷更新父：{{name}}</button>
    <Father :father="father"></Father>
  </div>
</template>

<script>
import Father from './Father'
import lifeCycleMixin from './lifeCycleMixin'

export default {
  name: 'Grandpa',
  mixins: [lifeCycleMixin],
  components: {
    Father
  },
  data () {
    return {
      name: 'grandpa',
      father: 'GrandpaFather'
    }
  }
}
</script>