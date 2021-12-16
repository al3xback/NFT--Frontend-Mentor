<template>
	<div class="card">
		<transition-group name="card">
			<div class="card__head" :class="{active: !detailsAreVisible}">
				<figure class="card__image">
					<a @click="toggleDetails">
						<img src="@/assets/images/equilibrium.jpg" alt="" />
					</a>
				</figure>
			</div>
			<div class="card__body" v-if="detailsAreVisible">
				<div class="card__content">
					<slot></slot>
				</div>
				<div class="card__foot">
					<slot name="foot"></slot>
				</div>
			</div>
		</transition-group>
	</div>
</template>

<script>
export default {
	data() {
		return {
			detailsAreVisible: true
		}
	},
	methods: {
		toggleDetails() {
			this.detailsAreVisible = !this.detailsAreVisible;
		}
	}
}
</script>

<style scoped lang="scss">
	.card {
		position: relative;
		width: 100%;
		max-width: 350/16 +0em;
		border-radius: 15/16 +0em;
		box-shadow: 0 25/16 +0em 50/16 +0em rgba(0, 0, 0, 0.0952917);
	}
	
	.card__head,
	.card__body {
		background-color: $bg-card;
	}

	.card__head {
		position: relative;
		z-index: 1;
		padding: 24/16 +0em;
		border-radius: 15/16 +0em 15/16 +0em 0 0;
	}

	.card__head.active {
		border-radius: 15/16 +0em;
	}

	.card__image {
		position: relative;
		height: 0;
		padding-bottom: 100%;
		background-color: $soft-blue;
		overflow: hidden;
		border-radius: 8/16 +0em;
	}

	.card__image a,
	.card__image a::before,
	.card__image img {
		border-radius: inherit;
	}

	.card__image a {
		position: absolute;
		top: 0;
		bottom: 0;
		right: 0;
		left: 0;
		cursor: pointer;
	}

	.card__image a::before,
	.card__image a::after {
		content: "";
		position: absolute;
		inset: 0;
		transition: all 0.3s;
	}

	.card__image a::before {
		z-index: 1;
		background: $soft-cyan url('~@/assets/images/icons/view.svg') no-repeat center;
		background-size: 48/16 +0em;
		opacity: 0;
	}

	.card__image a::after {
		z-index: 2;
		width: 6/16 +0em;
		height: 52/16 +0em;
		margin: auto;
		background-color: $white;
		border-radius: 4/16 +0em;
		opacity: 0;
		transform: rotate(45deg) scale(1, 0);
	}

	.card__image a:hover::before {
		opacity: 1;
	}

	.card__head.active .card__image a:hover::after {
		opacity: 1;
		transform: rotate(45deg) scale(1, 1);
	}

	.card__body {
		padding: 0 24/16 +0em 24/16 +0em;
		border-radius: 0 0 15/16 +0em 15/16 +0em;
	}

	.card__foot {
		padding-top: 16/16 +0em;
		margin-top: 16/16 +0em;
		border-top: 1px solid $bg-line;
	}

	.card-enter-from,
	.card-leave-to {
		opacity: 0;
		transform: translate(0, -100%);
	}

	.card-enter-active,
	.card-leave-active {
		transition: all 0.4s;
	}

	.card-leave-active {
		position: absolute;
	}

	.card-enter-to,
	.card-leave-from {
		opacity: 1;
		transform: translate(0, 0);
	}

	.card-move {
		transition: all 0.4s;
	}

	@media (min-width: 48em) {
		.card__body {
			padding-bottom: 32/16 +0em;
		}

		.card__foot {
			margin-top: 24/16 +0em;
		}
	}
</style>
