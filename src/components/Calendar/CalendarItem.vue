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
						pink: note.priority == 2,
						orange: note.priority == 3,
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

	& > span {
		background: #ff6300;
		background: radial-gradient(
			ellipse farthest-corner at center center,
			#ff6300 35%,
			#000000 100%
		);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;

		&::selection {
			background: #ff3eef;
			-webkit-text-fill-color: white;
		}
	}
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
	border: 1px solid #000000;
	border-radius: 5px;
	font-family: 'Montserrat';
	font-style: normal;
	font-weight: 700;
	font-size: 1.5625rem;
	line-height: 30px;
	text-align: right;
	padding: 6px 12px 6px 0;
	background: #17141d;
	position: relative;
	height: 150px;

	@media screen and (max-width: 1024px) {
		height: 120px;
	}

	@media screen and (max-width: 660px) {
		font-size: 1rem;
		height: 40px;
		padding: 3px 6px 3px 0;
		line-height: 15px;
	}

	&:hover {
		.cell-wrapper {
			padding: 6px 12px 6px 0;
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			overflow: visible;
			height: fit-content;
			z-index: 2;
			box-shadow: 0px 2px 10px 2px rgb(19 226 200 / 99%);

			@media screen and (max-width: 660px) {
				padding: 3px 6px 3px 0;
			}
		}
	}

	&:nth-child(6),
	&:nth-child(7n + 6),
	&:nth-child(7n) {
		.cell-wrapper > span {
			background: #fc3af6;
			background: radial-gradient(
				ellipse farthest-corner at center center,
				#fc3af6 10%,
				#1919ff 100%
			);
			-webkit-background-clip: text;
			-webkit-text-fill-color: transparent;
		}
	}
}

.disabled {
	background: #211d2a;

	span {
		background: #100e17 !important;
		background: radial-gradient(
			ellipse farthest-corner at center center,
			#100e17 46%,
			#100e17 100%
		) !important;
		-webkit-background-clip: text !important;
		-webkit-text-fill-color: transparent !important;
	}
}

.today > .cell-wrapper > span {
	background: #00ff3c !important;
	background: radial-gradient(
		ellipse farthest-corner at center center,
		#94ff00 -20%,
		#fffe00 100%
	) !important;
	-webkit-background-clip: text !important;
	-webkit-text-fill-color: transparent !important;
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
	font-size: 0.65rem;
	line-height: 13px;
	border-radius: 0 3px 3px 0;
	width: 100%;
	overflow: hidden;
	text-overflow: ellipsis;
	padding: 2px 7px;
	min-width: 100%;

	@media screen and (max-width: 660px) {
		font-size: 0.6rem;
		line-height: 8px;
		padding: 0px 3px;
	}

	&:hover {
		overflow: visible;
		width: max-content;
		z-index: 1;
	}

	&:not(:last-child) {
		margin-bottom: 6px;

		@media screen and (max-width: 660px) {
			margin-bottom: 3px;
		}
	}

	&.green {
		background: inherit;
		border-top: 1px solid #78fe9c;
		border-right: 1px solid #78fe9c;
		border-bottom: 1px solid #78fe9c;
		color: #78fe9c;
	}

	&.pink {
		background: inherit;
		border-top: 1px solid #ff6efa;
		border-right: 1px solid #ff6efa;
		border-bottom: 1px solid #ff6efa;
		color: #ff6efa;
	}

	&.orange {
		background: inherit;
		border-top: 1px solid #ff914c;
		border-right: 1px solid #ff914c;
		border-bottom: 1px solid #ff914c;
		color: #ff914c;
	}

	span {
		white-space: nowrap;

		&::selection {
			background: #ff3eef;
			color: white;
		}
	}
}
</style>
