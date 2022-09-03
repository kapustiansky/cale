const notes = {
	namespaced: true,
	state: {
		notes: [],
	},
	mutations: {
		addNotes(state, value) {
			const notes = state.notes;
			const id = notes.length + 1;
			const notesWithId = { ...value, id };
			notes.push(notesWithId);
			state.notes = notes;
		},
	},
	actions: {
		addNotes({ commit }, value) {
			commit('addNotes', value);
		},
	},
};

export default notes;
