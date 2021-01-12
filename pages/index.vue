<template>
  <div class="container" v-if="article">
    <div>
      <h1 class="title">
        {{article.title}}
      </h1>
      <div> {{article.created_at}}</div>
      <div class="content">
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
        id,
        article: article.data
      }
    },
    data() {
      return {
        id: -1,
        article: null
      }
    },
    mounted() {
    },
    methods: {
    }
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
    margin: 16px 0;
  }

  .content {
    padding: 16px;
    line-height: 32px;
  }
</style>
