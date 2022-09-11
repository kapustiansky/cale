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
	padding: 35px 26px;
	max-width: 1920px;
	margin: 0 auto;
	display: flex;
	flex-direction: column;

	@media screen and (max-width: 660px) {
		padding: 35px 16px;
	}
}
</style>
