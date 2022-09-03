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

				this.text = '';
				this.date = '';
				this.priority = '1';
			}
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
	flex: 0 1 490px;

	@media screen and (max-width: 1024px) {
		padding-top: 10px;
		flex: auto;
		max-width: 490px;
		margin-left: auto;
	}

	form {
		display: flex;
		flex-direction: column;
		align-items: flex-end;
	}
}

.title {
	font-style: normal;
	font-weight: 700;
	font-size: 32px;
	line-height: 39px;
	color: #000000;
	padding-bottom: 30px;
	text-align: end;
}

.input-container {
	display: flex;
	flex-direction: column-reverse;
	align-items: flex-end;
	width: 100%;

	&:not(:last-of-type) {
		padding-bottom: 13px;
	}

	input {
		background: #f3f3f3;
		border: 1px solid #d7d7d7;
		border-radius: 8px;
		padding: 9px 16px;
		font-style: normal;
		font-weight: 400;
		font-size: 22px;
		line-height: 27px;
		width: 100%;

		&::placeholder {
			font-style: normal;
			font-weight: 400;
			font-size: 22px;
			line-height: 27px;
			color: rgba(0, 0, 0, 0.3);
		}
	}

	select {
		background: #f3f3f3;
		border: 1px solid #d7d7d7;
		border-radius: 8px;
		padding: 9px 16px;
		font-style: normal;
		font-weight: 400;
		font-size: 22px;
		line-height: 27px;
		appearance: none;
		background: url(@/assets/images/arrow.svg) no-repeat right;
		background-position-x: calc(100% - 16px);
	}

	input[type='date'] {
		padding: 8px 16px;

		&:invalid {
			color: rgba(0, 0, 0, 0.3);
		}
	}

	input[type='date']::-webkit-calendar-picker-indicator {
		cursor: pointer;
	}
}

.label {
	font-style: normal;
	font-weight: 500;
	font-size: 22px;
	line-height: 27px;
	color: #000000;
	padding-bottom: 3px;
	text-align: end;
}

button {
	margin-top: 46px;
}
</style>
