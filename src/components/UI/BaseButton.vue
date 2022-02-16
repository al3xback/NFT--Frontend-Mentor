<template>
	<a :href="to" class="btn btn--link">
		<slot></slot>
	</a>
</template>

<script>
export default {
	props: {
		to: {
			type: String,
			required: false,
			default: '#',
		},
	},
};
</script>

<style scoped lang="scss">
.btn {
	color: inherit;
	text-decoration: none;
	display: inline-block;
}

.btn--link {
	color: $neutral-4;
	transition: opacity 0.3s;
}

.btn--link:hover {
	color: $primary-2;
}
</style>
