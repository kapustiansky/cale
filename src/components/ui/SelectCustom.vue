<script>
export default {
	name: 'SelectCustom',
	props: {
		name: String,
		form: String,
		required: String,
		placeholder: String,
		value: String,
		clazz: String,
		options: Array,
		selected: String,
	},
};
</script>

<template>
	<select
		:name="name"
		:form="form"
		:required="!!required"
		:class="clazz"
		:value="value"
		@input="$emit('input', $event.target.value)"
	>
		<option v-for="option in options" :key="option.id" :value="option.id">
			{{ option.name }}
		</option>
	</select>
</template>

<style scoped lang="scss">
.priorities {
	width: 100%;
	max-width: 221px;
}
</style>
