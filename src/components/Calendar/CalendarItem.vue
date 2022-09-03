<script>
export default {
	name: 'CalendarItem',
	props: {
		day: Number || null,
		date: String,
		today: String,
		disabled: Boolean,
		notes: Array || Boolean,
	},
};
</script>

<template>
	<div
		class="cell"
		:class="{
			disabled: disabled,
			today: date === today,
			'cell-mod': day !== null,
		}"
	>
		<div v-if="day" class="cell-wrapper">
			<span>{{ day }}</span>
			<div v-if="notes.length > 0" class="notes-container">
				<div
					v-for="note in notes"
					:key="note.id"
					class="note"
					:class="{
						green: note.priority == 1,
						yellow: note.priority == 2,
						red: note.priority == 3,
					}"
				>
					<span>{{ note.text }}</span>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped lang="scss">
.cell-wrapper {
	overflow: hidden;
	height: 100%;
	min-height: 100%;
	background: inherit;
	border-radius: 5px;
}

.cell-mod {
	transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
	will-change: transform;

	&:hover {
		transform: scale(1.1);
		z-index: 1;
	}
}

.cell {
	border: 1px solid #c1c1c1;
	border-radius: 5px;
	font-family: 'Montserrat';
	font-style: normal;
	font-weight: 700;
	font-size: 1.5625rem;
	line-height: 30px;
	text-align: right;
	color: #020101;
	padding: 6px;
	background: #ffffff;
	position: relative;
	height: 120px;

	@media screen and (max-width: 660px) {
		font-size: 1rem;
		height: 40px;
		padding: 3px;
		line-height: 15px;
	}

	&:hover {
		.cell-wrapper {
			padding: 6px;
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			overflow: visible;
			height: fit-content;
			z-index: 2;
			box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);

			@media screen and (max-width: 660px) {
				padding: 3px;
			}
		}
	}

	&:nth-child(6),
	&:nth-child(7n + 6),
	&:nth-child(7n) {
		color: #1900b2;
	}
}

.disabled {
	background: #ebebeb;

	span {
		opacity: 0.5;
	}
}

.today > div > span {
	color: #00a349;
}

.notes-container {
	text-align: left;
	margin-top: 7px;

	@media screen and (max-width: 660px) {
		margin-top: 0;
	}
}

.note {
	position: relative;
	font-style: normal;
	font-weight: 600;
	font-size: 0.6875rem;
	line-height: 13px;
	border-radius: 3px;
	width: 100%;
	overflow: hidden;
	text-overflow: ellipsis;
	padding: 2px 7px;
	min-width: 100%;

	@media screen and (max-width: 660px) {
		font-size: 0.6rem;
		line-height: 8px;
		padding: 2px 3px;
	}

	&:hover {
		overflow: visible;
		width: max-content;
		z-index: 1;
	}

	&:not(:last-child) {
		margin-bottom: 3px;
	}

	&.green {
		background: #deefe8;
		color: #82d2a5;
	}

	&.yellow {
		background: #fbe3ce;
		color: #e2b48c;
	}

	&.red {
		background: #f9e7e7;
		color: #d58287;
	}

	span {
		white-space: nowrap;
	}
}
</style>
