import Vue from 'vue';
import Vuex from 'vuex';
import notes from './modules/notes.js';
import calendar from './modules/calendar.js';

Vue.use(Vuex);

const store = new Vuex.Store({
	modules: {
		notes,
		calendar,
	},
});

export default store;
