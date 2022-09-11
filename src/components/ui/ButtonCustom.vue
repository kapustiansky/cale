<script>
export default {
	name: 'ButtonCustom',
	props: ['type', 'form', 'clazz', 'text'],
};
</script>

<template>
	<button :type="type" :form="form" :class="`btn ${clazz ? clazz : ''}`">
		{{ text }}
	</button>
</template>

<style scoped lang="scss">
.btn {
	width: 100%;
	background: #17141d;
	border: 1px solid #000000;
	border-radius: 7px;
	padding: 9px;
	font-style: normal;
	font-weight: 400;
	font-size: 1.25rem;
	line-height: 27px;
	background: #fc3af6;
	background: radial-gradient(
		ellipse farthest-corner at center center,
		#fc3af6 10%,
		#1919ff 100%
	);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	box-shadow: inset 2px 2px 5px rgb(0, 0, 0, 0.5),
		inset -2px -2px 5px rgb(80, 80, 80, 0.13), 2px 2px 5px rgb(0, 0, 0, 0.5),
		-2px -2px 5px rgb(80, 80, 80, 0.13);
	transition: box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1);

	&:hover {
		box-shadow: 3px 3px 5px rgb(0, 0, 0), 0px 0px 16px rgb(19, 226, 198);
	}

	&:focus-visible {
		outline: none;
		box-shadow: 2px 2px 16px rgb(19, 226, 198, 0.3),
			-2px -2px 16px rgb(19, 226, 198, 0.3);
	}

	&:active {
		outline: none;
		box-shadow: 2px 2px 16px rgb(19, 226, 198, 0.3),
			-2px -2px 16px rgb(19, 226, 198, 0.3);
	}
}
</style>
