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
	max-width: 221px;
	background: #0085ff;
	border-radius: 7px;
	padding: 7px;
	font-style: normal;
	font-weight: 400;
	font-size: 1.375rem;
	line-height: 27px;
	color: #ffffff;
	transition: opacity 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);

	&:hover {
		opacity: 0.7;
	}
}
</style>
