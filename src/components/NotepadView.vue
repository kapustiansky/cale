<script>
import CalendarList from '@/components/Calendar/CalendarList.vue';
import NotesForm from '@/components/NotesForm.vue';

export default {
	name: 'NotepadView',
	components: { CalendarList, NotesForm },
};
</script>

<template>
	<div class="container">
		<calendar-list></calendar-list>
		<notes-form></notes-form>
	</div>
</template>

<style scoped lang="scss">
.container {
	padding: 35px 26px 35px 43px;
	display: flex;
	justify-content: space-between;
	gap: 20px;
	flex-flow: row wrap;

	@media screen and (max-width: 1024px) {
		padding: 35px 26px;
	}

	@media screen and (max-width: 660px) {
		padding: 35px 16px;
	}
}
</style>
