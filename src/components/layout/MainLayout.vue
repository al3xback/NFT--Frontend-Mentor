<template>
	<div class="wrapper">
		<the-main></the-main>
		<the-footer></the-footer>
	</div>
</template>

<script>
import TheMain from './TheMain.vue';
import TheFooter from './TheFooter.vue';

export default {
	components: {
		TheMain,
		TheFooter
	}
}
</script>

<style scoped>
	.wrapper {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}
</style>
