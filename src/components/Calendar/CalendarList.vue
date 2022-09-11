<script>
import CalendarItem from '@/components/Calendar/CalendarItem.vue';
import CalendarControls from '@/components/Calendar/CalendarControls.vue';
import moment from 'moment';
import { mapState, mapActions } from 'vuex';

export default {
	name: 'CalendarList',
	components: { CalendarItem, CalendarControls },
	computed: {
		...mapState('calendar', ['today', 'dateContext', 'days']),
		...mapState('notes', ['notes']),

		year() {
			const displayYear =
				this.dateContext.format('YYYY') !== this.today.format('YYYY')
					? this.dateContext.format('YYYY')
					: null;
			return displayYear;
		},

		month() {
			return this.dateContext.locale('ru').format('MMMM');
		},

		daysInMonth() {
			return Number(this.dateContext.daysInMonth());
		},

		currentDate() {
			return Number(this.dateContext.get('date'));
		},

		firstDayOfMonth() {
			const firstDay = moment(this.dateContext).subtract(
				this.currentDate,
				'days'
			);
			const adjustedfirstDay = firstDay.weekday() + 1;
			return Number(adjustedfirstDay == 7 ? 0 : adjustedfirstDay);
		},

		calendar() {
			let calendarArr = [];
			const cellAmount = this.firstDayOfMonth >= 5 ? 42 : 35;
			const today = this.today.format('YYYY-MM-DD');
			const allDays = this.daysInMonth + this.firstDayOfMonth;

			for (let index = 1; index <= cellAmount; index++) {
				const day =
					index <= this.firstDayOfMonth || index > allDays
						? null
						: index - this.firstDayOfMonth;
				const date = day
					? this.dateContext.format(
							`YYYY-MM-${day <= 9 ? '0' + day : day}`
					  )
					: null;
				const disabled = moment(date).isBefore(today) ? true : false;
				const notes = this.notes.filter((i) => i.date === date);

				calendarArr.push({
					id: index,
					day: day,
					date: date,
					today: today,
					disabled: disabled,
					notes: notes,
				});
			}
			return calendarArr;
		},
	},
	methods: {
		...mapActions('calendar', ['changeContext']),

		nextMonth() {
			this.changeContext(moment(this.dateContext).add(1, 'month'));
		},

		prevMonth() {
			this.changeContext(moment(this.dateContext).subtract(1, 'month'));
		},
	},
};
</script>

<template>
	<div class="calendar">
		<calendar-controls
			:month="month"
			:year="year"
			:nextMonth="nextMonth"
			:prevMonth="prevMonth"
		>
		</calendar-controls>
		<div class="grid-container">
			<div class="day-item" v-for="dayOfWeek in days" :key="dayOfWeek">
				{{ dayOfWeek }}
			</div>
			<calendar-item
				v-for="cell in calendar"
				:key="cell.id"
				:day="cell.day"
				:date="cell.date"
				:today="cell.today"
				:disabled="cell.disabled"
				:notes="cell.notes"
			>
			</calendar-item>
		</div>
	</div>
</template>

<style scoped lang="scss">
.grid-container {
	display: grid;
	grid-template-columns: repeat(7, minmax(86px, 262px));
	gap: 3px;

	@media screen and (max-width: 660px) {
		grid-template-columns: repeat(7, minmax(36px, 172px));
	}
}

.day-item {
	font-style: normal;
	font-weight: 700;
	font-size: 1.25rem;
	line-height: 24px;
	// color: #000000;
	overflow: hidden;
	text-overflow: ellipsis;

	background: #121fcf;
	background: radial-gradient(
		ellipse farthest-corner at center center,
		#cf3c12 0%,
		#4dcf90 50%
	);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
}
</style>
