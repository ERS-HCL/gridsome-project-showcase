<template>
  <Layout>
        <v-layout
    column
  >
    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <g-image src="~/favicon.png" width="135"/>
    <h1 class="display-2">Hello, world!</h1>

    <p class="body-1">Hello World</p>

    <p class="body-1 home-links">
      <a href="https://gridsome.org/docs" target="_blank" rel="noopener">Gridsome Docs</a>
      <a href="https://github.com/gridsome/gridsome" target="_blank" rel="noopener">GitHub</a>
    </p>
    <p v-for="(post,index) in $page.posts.edges" :key="index">
      <g-link :to="post.node.path">{{ post.node.title }}</g-link>
      {{post.node.excerpt}}
    </p>
    <Pager :info="$page.posts.pageInfo" linkClass="pagination"/>
        </v-layout>
  </Layout>
</template>


<page-query>
query Posts ($page: Int) {
  posts: allPost (perPage: 2, page: $page) @paginate {
    totalCount
    pageInfo {
      totalPages
      currentPage
      isFirst
      isLast
    }
    edges {
      node {
        title
        path
        excerpt
      }
    }
  }
}
</page-query>

<script>
import { Pager } from "gridsome";

export default {
  components: {
    Pager
  }
};
</script>

<style scoped>
.home-links a {
  margin-right: 1rem;
}

.pagination {
  display: inline-block;
  color: black;
  float: left;
  padding: 8px 16px;
  text-decoration: none;
  transition: background-color 0.3s;
  border-radius: 50%;
  margin-right: 1rem;
}

.pagination.active {
  background-color: #4caf50;
  color: white;
  font-weight: bold;
}

.pagination:hover:not(.active) {
  background-color: #ddd;
  font-weight: bold;
}
</style>
