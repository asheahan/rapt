import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import moment from 'moment-timezone';
moment.tz.setDefault('UTC');

export default new Vuex.Store({
  state: {
    articles: [
      {
        title: 'Test Article 1',
        link: 'https://example.com',
        source: 'Digg',
        score: 5,
        date: moment('2017-09-30', 'YYYY-MM-DD')
      },
      {
        title: 'Test Article 2',
        link: 'https://example.com',
        source: 'Reddit',
        upvotes: 3412,
        comments: 1234,
        date: moment('2017-09-30', 'YYYY-MM-DD')
      },
      {
        title: 'Test Article 3',
        link: 'https://example.com',
        source: 'GitHub',
        stars: 899,
        date: moment('2017-09-30', 'YYYY-MM-DD')
      }
    ]
  },
  mutations: {},
  actions: {}
});
