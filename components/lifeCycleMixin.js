import log from '../util/log'

export default {
  beforeCreate () {
    console.log(' ')
    log(this.$options._componentTag + ': beforeCreated')
  },
  created () {
    log(this.name + ': created')
  },
  beforeMount () {
    log(this.name + ': beforeMounted')
  },
  mounted () {
    log(this.name + ': mounted')
  },
  beforeUpdate () {
    log(this.name + ': beforeUpdate')
  },
  updated () {
    log(this.name + ': updated')
  }
}