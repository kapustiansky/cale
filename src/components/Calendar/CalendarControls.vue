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
	border: 1px solid #000000;
	border-radius: 50%;
	background: #211d2a;
	box-shadow: inset 2px 2px 5px rgb(0, 0, 0, 0.5),
		inset -2px -2px 5px rgb(80, 80, 80, 0.13), 2px 2px 5px rgb(0, 0, 0, 0.5),
		-2px -2px 5px rgb(80, 80, 80, 0.13);
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;

	&:hover {
		box-shadow: 3px 3px 5px rgb(0, 0, 0), 0px 0px 16px rgb(19, 226, 198);
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
	margin: 0 20px;
	text-transform: capitalize;
	background: #94ff00;
	background: radial-gradient(
		ellipse farthest-corner at center center,
		#94ff00 0%,
		#fffe00 0%,
		#94ff00 100%
	);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;

	&::selection {
		background: #ff3eef;
		-webkit-text-fill-color: white;
	}
}
</style>
