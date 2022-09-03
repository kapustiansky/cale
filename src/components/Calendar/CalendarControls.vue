<script>
export default {
	name: 'CalendarControls',
	props: {
		month: String,
		year: String || null,
		nextMonth: Function,
		prevMonth: Function,
	},
};
</script>

<template>
	<div class="calendar-controls">
		<div @click="prevMonth" class="calendar-btn prev-btn">
			<div>
				<img src="@/assets/images/arrow.svg" alt="" />
			</div>
		</div>
		<p class="month">{{ month }} {{ year }}</p>
		<div @click="nextMonth" class="calendar-btn next-btn">
			<div>
				<img src="@/assets/images/arrow.svg" alt="" />
			</div>
		</div>
	</div>
</template>

<style scoped lang="scss">
.calendar-controls {
	display: flex;
	align-items: center;
	padding-bottom: 28px;
}

.calendar-btn {
	width: 44px;
	height: 44px;
	border-radius: 50%;
	background: #eeeeee;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25),
		inset 0px -1px 4px rgba(0, 0, 0, 0.25);
	cursor: pointer;
	transition: opacity 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
	display: flex;
	align-items: center;
	justify-content: center;

	&:hover {
		opacity: 0.7;
	}

	& > div {
		width: 24px;
		height: 24px;

		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}
}

.prev-btn {
	img {
		transform: rotate(90deg);
	}
}

.next-btn {
	img {
		transform: rotate(-90deg);
	}
}

.month {
	font-style: normal;
	font-weight: 700;
	font-size: 2rem;
	line-height: 39px;
	color: #000000;
	margin: 0 20px;
	text-transform: capitalize;
}
</style>
