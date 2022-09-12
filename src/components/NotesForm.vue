<script>
import InputCustom from '@/components/ui/InputCustom.vue';
import SelectCustom from '@/components/ui/SelectCustom.vue';
import ButtonCustom from '@/components/ui/ButtonCustom.vue';
import { mapActions } from 'vuex';

export default {
	name: 'NotesForm',
	components: { InputCustom, SelectCustom, ButtonCustom },
	data() {
		return {
			text: null,
			date: null,
			priority: '1',
		};
	},
	computed: {
		minDate() {
			return new Date().toISOString().split('T')[0];
		},

		priorities() {
			return [
				{
					id: 1,
					name: 'Низкий',
				},
				{
					id: 2,
					name: 'Средний',
				},
				{
					id: 3,
					name: 'Высокий',
				},
			];
		},
	},
	methods: {
		...mapActions('notes', ['addNotes']),

		onSubmit() {
			if (this.text !== ' ') {
				this.addNotes({
					text: this.text,
					date: this.date,
					priority: this.priority,
				});

				this.setToStorage({
					text: this.text,
					date: this.date,
					priority: this.priority,
				});

				this.text = '';
				this.date = '';
				this.priority = '1';
			}
		},

		setToStorage(note) {
			const storage = JSON.parse(localStorage.getItem('notes')) ?? [];
			storage.push(note);
			localStorage.setItem('notes', JSON.stringify(storage));
		},
	},
};
</script>

<template>
	<div class="add-note-container">
		<p class="title">Добавить событие</p>
		<form name="notes-form" id="notes-form" @submit.prevent="onSubmit">
			<div class="input-container">
				<input-custom
					type="text"
					name="messadge"
					form="notes-form"
					required="true"
					placeholder="Введите текст события"
					v-model="text"
				></input-custom>
				<label class="label">Текст</label>
			</div>
			<div class="input-container">
				<input-custom
					type="date"
					name="date"
					form="notes-form"
					required="true"
					placeholder="дд.мм.гггг"
					v-model="date"
					clazz="datapiker"
					:min="minDate"
				></input-custom>
				<label class="label">Дата</label>
			</div>
			<div class="input-container">
				<select-custom
					name="priority"
					form="notes-form"
					required="true"
					v-model="priority"
					clazz="priorities"
					:options="priorities"
				></select-custom>
				<label class="label">Статус</label>
			</div>
			<button-custom type="submit" form="notes-form" text="Сохранить">
			</button-custom>
		</form>
	</div>
</template>

<style scoped lang="scss">
.add-note-container {
	padding-top: 10px;

	form {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 3%;

		@media screen and (max-width: 660px) {
			grid-template-columns: repeat(1, 1fr);
			gap: 5%;
		}
	}
}

.title {
	font-style: normal;
	font-weight: 700;
	font-size: 2rem;
	line-height: 39px;
	text-align: center;
	padding-top: 30px;
	padding-bottom: 40px;
	background: #94ff00;
	background: radial-gradient(
		ellipse farthest-corner at center center,
		#94ff00 0%,
		#fffe00 28%,
		#94ff00 100%
	);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;

	&::selection {
		background: #ff3eef;
		-webkit-text-fill-color: white;
	}

	@media screen and (max-width: 660px) {
		padding-top: 10px;
		padding-bottom: 20px;
	}
}

.input-container {
	display: flex;
	flex-direction: column-reverse;
	width: 100%;

	input {
		background: #fc3af6;
		background: radial-gradient(
			ellipse farthest-corner at center center,
			#fc3af6 10%,
			#1919ff 100%
		);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		border: 1px solid #000000;
		border-radius: 8px;
		padding: 9px 16px;
		font-style: normal;
		font-weight: 400;
		font-size: 1.375rem;
		line-height: 27px;
		width: 100%;
		color: #211d2a;
		box-shadow: inset 2px 2px 5px rgb(0, 0, 0, 0.5),
			inset -2px -2px 5px rgb(80, 80, 80, 0.13),
			2px 2px 5px rgb(0, 0, 0, 0.5), -2px -2px 5px rgb(80, 80, 80, 0.13);
		transition: box-shadow 0.6s cubic-bezier(0.4, 0, 0.2, 1);

		&:hover {
			box-shadow: 3px 3px 5px rgb(0, 0, 0), 0px 0px 16px rgb(19, 226, 198);
		}

		&:focus-visible {
			outline: none;
			box-shadow: 2px 2px 16px rgb(19, 226, 198, 0.3),
				-2px -2px 16px rgb(19, 226, 198, 0.3);
		}

		&::placeholder {
			font-style: normal;
			font-weight: 400;
			font-size: 1.375rem;
			line-height: 27px;
			color: #211d2a;
		}
	}

	select {
		color-scheme: normal;
		background: #fc3af6;
		background: radial-gradient(
			ellipse farthest-corner at center center,
			#fc3af6 10%,
			#1919ff 100%
		);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		border: 1px solid #000000;
		border-radius: 8px;
		padding: 9px 16px;
		font-style: normal;
		font-weight: 400;
		font-size: 1.375rem;
		line-height: 27px;
		appearance: none;
		width: 100%;
		box-shadow: inset 2px 2px 5px rgb(0, 0, 0, 0.5),
			inset -2px -2px 5px rgb(80, 80, 80, 0.13),
			2px 2px 5px rgb(0, 0, 0, 0.5), -2px -2px 5px rgb(80, 80, 80, 0.13);
		transition: box-shadow 0.6s cubic-bezier(0.4, 0, 0.2, 1);

		&:hover {
			box-shadow: 3px 3px 5px rgb(0, 0, 0), 0px 0px 16px rgb(19, 226, 198);
		}

		&:focus-visible {
			outline: none;
			box-shadow: 2px 2px 16px rgb(19, 226, 198, 0.3),
				-2px -2px 16px rgb(19, 226, 198, 0.3);
		}
	}

	input[type='date'] {
		padding: 8px 16px;

		&:invalid {
			color: #211d2a;
		}
	}

	input[type='date']::-webkit-calendar-picker-indicator {
		cursor: pointer;
	}
}

.label {
	font-style: normal;
	font-weight: 500;
	font-size: 1.375rem;
	line-height: 27px;
	padding-bottom: 8px;
	background: #fc3af550;
	background: radial-gradient(
		ellipse farthest-corner at center center,
		#fc3af550 10%,
		#1919ff50 100%
	);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;

	&::selection {
		background: #ff3eef;
		-webkit-text-fill-color: white;
	}

	@media screen and (max-width: 660px) {
		padding-bottom: 4px;
	}
}

button {
	height: max-content;
	margin-top: auto;
}
</style>
