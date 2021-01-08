<template>
  <div class="container">
    <div>
      <h1 class="title">
        {{article.title}}
      </h1>
      <div> {{article.created_at}}</div>
      <div>
       {{article.content}}
      </div>
    </div>
  </div>
</template>

<script>
  import {detail} from '@/api/article'

  export default {
    async asyncData(context) {
      const {query} = context
      const {id} = query
      const article = await detail(id)

      return {
        article: article.data
      }
    },
    data() {
      return {
        article: null
      }
    },
    methods: {}
  }
</script>

<style>
  .container {
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .title {
    font-family: 'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
    display: block;
    font-weight: 300;
    font-size: 100px;
    color: #35495e;
    letter-spacing: 1px;
  }
</style>
