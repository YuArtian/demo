<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <div>
      {{this.school.group.name}}
    </div>
    <Foo :foo="this.foo" bar='bar' v-model="up"/>
    <div>
      {{up}}
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Foo from './components/Foo'

export default {
  name: 'App',
  data(){
    return {
      school: {
        group: {
          name: '张三'
        }
      },
      foo: 'foo',
      up: 1
    }
  },
  methods: {
    getName(){
      console.log('getName this',this)
    },
    getThis: () => {
      console.log('getThis this',this)
    }
  },
  // computed: {
  //   foo: function(){
  //     console.log('foo')
  //     return 'computed foo'
  //   },
  // },
  beforeCreate(){
    console.log('parent beforeCreated')
  },
  created(){
    console.log('parent created')
  },
  mounted(){
    console.log('parent mounted')
    // this.getName()
    // this.getThis()
    console.log('event',this.$event)
    // this.foo = 'parent new foo'
  },
  beforeMount(){
    console.log('parent beforeMount')
  },
  beforeUpdate(){
    console.log('parent beforeUpdate')
  },
  updated(){
    console.log('parent updated')
  },
  components: {
    Foo
  },
  watch: {
    test: function () {
      console.log('test!!!')
    }
  },
  computed: {
    ...mapState(['name'])
  },

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
