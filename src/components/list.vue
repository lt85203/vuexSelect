<template>
  <ul class="list">
    <li v-for="item in data" @click="getTitleHandle(item.title)">{{item.title}}</li>
  </ul>
</template>

<script>
  export default {
    props: ['data'],
    methods: {
      getTitleHandle (title) {
//        this.$emit('changeTitle', title)
        this.$store.commit('changeTitle', title)
      }
    },
    created () {
      this.$store.dispatch('getListAction')
    }
  }
</script>

<style>

</style>
