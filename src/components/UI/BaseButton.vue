<template>
	<button v-if="!link" type="button" class="btn">
		<slot></slot>
	</button>
	<a v-else :href="to" class="btn btn--link">
		<slot></slot>
	</a>
</template>

<script>
export default {
	props: {
		link: {
			type: Boolean,
			required: false,
			default: false,
		},
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
	color: $white;
	transition: opacity 0.3s;
}

.btn--link:hover {
	color: $primary-2;
}
</style>
