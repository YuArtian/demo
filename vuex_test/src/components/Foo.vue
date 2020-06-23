<template>
  <div>
    Foo: {{this.foo}}
  </div>
</template>
<script>
export default {
  props: ['foo','bar'],
  beforeCreate(){
    console.log('children beforeCreated')
  },
  created(){
    console.log('children created')
  },
  beforeMount(){
    console.log('children beforeMount')
  },
  mounted(){
    console.log('children mounted')
    // this.foo = 'children new foo'
    // this.$parent.foo = 'children new foo'

  },
  beforeUpdate(){
    console.log('children beforeUpdate')
  },
  updated(){
    console.log('children updated')
  }
}
</script>