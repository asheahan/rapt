<template>
  <div>
    <h2 class="header-sub-title">top stories</h2>
    <v-layout row>
      <v-flex xs3>
        <v-select :items="sources" v-model="source" label="Source"></v-select>
      </v-flex>
    </v-layout>
    <v-divider></v-divider>
    <ul class="articles mt-4">
      <li v-for="item in filteredArticles" :key="item.title">
        <article-item :content="item"></article-item>
      </li>
    </ul>
  </div>
</template>

<script>
import SOURCES from '../util/sources';
import ArticleItem from '@/components/ArticleItem';

export default {
  data() {
    return {
      sources: ['Front'].concat(Object.values(SOURCES)),
      source: {}
    };
  },
  methods: {
    articlePassesSourceFilter(article) {
      if (this.source === 'Front') {
        return true;
      } else {
        return article.source === this.source;
      }
    }
  },
  computed: {
    articles() {
      return this.$store.state.articles;
    },
    filteredArticles() {
      return this.articles.filter(this.articlePassesSourceFilter);
    }
  },
  components: {
    ArticleItem
  },
  mounted() {
    this.source = this.sources[0];
  }
};
</script>

<style>

</style>
