<template>
	<div class="wrapper">
		<the-header></the-header>
		<the-main></the-main>
		<the-footer></the-footer>
	</div>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue';
import TheMain from './components/layout/TheMain.vue';
import TheFooter from './components/layout/TheFooter.vue';

export default {
	name: 'App',
	components: {
		TheHeader,
		TheMain,
		TheFooter,
	},
};
</script>

<style scoped>
.wrapper {
	display: flex;
	flex-direction: column;
	min-height: 100vh;
}
</style>
