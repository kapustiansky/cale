import moment from 'moment';

const calendar = {
	namespaced: true,
	state: {
		today: moment(),
		dateContext: moment(),
		days: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
	},
	mutations: {
		changeContext(state, value) {
			state.dateContext = value;
		},
	},
	actions: {
		changeContext({ commit }, value) {
			commit('changeContext', value);
		},
	},
};

export default calendar;
