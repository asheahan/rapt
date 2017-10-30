import Vue from 'vue';
import Router from 'vue-router';
import ArticleList from '@/components/ArticleList';
import AboutPage from '@/components/AboutPage';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: ArticleList
    },
    {
      path: '/status',
      name: 'Status',
      component: ArticleList
    },
    {
      path: '/archive',
      name: 'Archive',
      component: ArticleList
    },
    {
      path: '/about',
      name: 'About',
      component: AboutPage
    }
  ]
});
