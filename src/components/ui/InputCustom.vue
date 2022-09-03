<script>
export default {
	name: 'InputCustom',
	props: {
		type: String,
		name: String,
		form: String,
		required: String,
		placeholder: String,
		value: String,
		clazz: String,
		min: String,
	},
};
</script>

<template>
	<input
		:type="type"
		:placeholder="placeholder"
		:name="name"
		:form="form"
		:required="!!required"
		class="input"
		:value="value"
		@input="$emit('input', $event.target.value)"
		:class="clazz"
		:min="min"
	/>
</template>

<style scoped lang="scss">
.datapiker {
	width: 100%;
	max-width: 221px;
}
</style>
