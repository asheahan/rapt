<template>
  <v-app>
    <v-navigation-drawer app v-model="drawer" light enable-resize-watcher>
      <v-list dense>
        <v-list-tile v-for="item in items" :key="item.title" :href="item.href" :to="{ name: item.href }">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar class="brown" dark fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>{{ title }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <span class="current-time">{{ currentTime }}</span>
    </v-toolbar>
    <main>
      <v-content>
        <v-container fluid>
          <router-view></router-view>
        </v-container>
      </v-content>
    </main>
    <v-footer class="brown" app>
      <router-link to="about" class="about-link">
        <span class="white--text">
          About
        </span>
      </router-link>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      currentTime: '',
      drawer: true,
      items: [
        { title: 'Home', icon: 'home', href: 'Home' },
        { title: 'Status', icon: 'track_changes', href: 'Status' },
        { title: 'Archive', icon: 'archive', href: 'Archive' }
      ]
    };
  },
  computed: {
    title() {
      return this.$route.name;
    }
  },
  methods: {
    updateCurrentTime() {
      this.currentTime = this.$moment().format(
        'dddd, MMMM Do YYYY, h:mm:ss a z'
      );
    }
  },
  mounted() {
    setInterval(this.updateCurrentTime, 1000);
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.about-link {
  text-decoration: none;
}
</style>
