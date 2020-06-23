<template>
  <el-button v-on="$listeners" v-bind="$attrs" :loading="loading" @click="myClick">
</template>


<script>
export default {
  name: 'mButton',
  inheritAttrs: false,
  props: { debounce: { type: [Boolean, Number] } },
  data() { return { timer: 0, loading: false } },
  methods: {
    myClick() {
      if (!this.debounce)
      return this.loading = true
      clearTimeout(this.timer)
      this.timer = setTimeout( () => { this.loading = false }, typeof this.debounce === 'boolean' ? 500 : this.debounce ) } } }
</script>