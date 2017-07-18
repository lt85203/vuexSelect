<template>
  <section class="warp">
    <div class="searchIpt clearFix">
      <selectInput :title="title" :is-show.sync="listShow"></selectInput>
      <list :data="listData" v-show="listShow"></list>
    </div>
  </section>
</template>

<script>
  import list from '@/components/list'
  import selectInput from '@/components/selectInput'
  let listData = [
    {
      title: 'javascript'
    },
    {
      title: 'html+css'
    },
    {
      title: 'jQuery'
    },
    {
      title: 'react'
    },
    {
      title: 'nodejs'
    }
  ]

  export default {
    data () {
      return {
        listShow: false,
        listData: listData,
        title: ''
      }
    },
    methods: {
//      titleHandle (title) {
//        console.log(title)
//        this.title = title
//      }
    },
    components: {
      list,
      selectInput
    }
  }
</script>

<style>

</style>
