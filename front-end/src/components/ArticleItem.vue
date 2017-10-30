<template>
  <div>
    <a :href="content.link">{{ content.title }}</a>
    <strong>{{ content.source }}</strong>
    <div v-if="content.source == 'Digg'">
      {{ content.score }} digg score - {{ formatDate(content.date) }}
    </div>
    <div v-else-if="content.source == 'Reddit'">
      {{ content.upvotes }} upvotes - {{ content.comments }} comments - {{ formatDate(content.date) }}
    </div>
    <div v-else-if="content.source == 'GitHub'">
      {{ content.stars }} stars - {{ formatDate(content.date) }}
    </div>
  </div>
</template>

<script>
export default {
  props: ['content'],
  methods: {
    formatDate(raw) {
      return raw.format('MMM D, YYYY').toLowerCase();
    }
  }
};
</script>

<style>

</style>
