<template>
	<main>
		<base-container>
			<base-card>
				<template #default>
					<h2 class="card__title">
						<base-button link>Equilibrium #3429</base-button>
					</h2>
					<p class="card__desc">
						Our Equilibrium collection promotes balance and calm.
					</p>
					<div class="card__stats">
						<div class="card__stat card__stat-value">
							<i class="icon-ethereum" aria-hidden="true"></i>
							<span>0.041 ETH</span>
						</div>
						<div class="card__stat card__stat-countdown">
							<i class="icon-clock" aria-hidden="true"></i>
							<span>3 days left</span>
						</div>
					</div>
				</template>
				<template #foot>
					<div class="card__author">
						<figure class="card__author-avatar">
							<img
								width="33"
								height="33"
								src="@/assets/images/avatar.png"
								alt="Avatar" />
						</figure>
						<p class="card__author-text">
							Creation of
							<base-button link>Jules Wyvern</base-button>
						</p>
					</div>
				</template>
			</base-card>
		</base-container>
	</main>
</template>

<style scoped lang="scss">
main,
main .container {
	display: flex;
	flex: auto;
}

main {
	padding: 24/16 +0em 0;
}

main .container {
	justify-content: center;
	align-items: center;
}

.card__title {
	margin-bottom: 12/22 +0em;
	line-height: 28/22 +0em;
	font-size: 22/16 +0em;
	font-weight: $fw-600;
}

.card__desc {
	margin-bottom: 16/18 +0em;
	line-height: 26/18 +0em;
	font-size: 18/16 +0em;
	font-weight: $fw-300;
}

.card__stats,
.card__author-text {
	font-size: 15/16 +0em;
}

.card__stats {
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.card__stat {
	display: flex;
	align-items: center;
}

.card__stat-value {
	font-weight: $fw-600;
	color: $primary-2;
}

.card__stat i {
	margin-right: 7.7/16 +0em;
}

.card__author {
	display: flex;
	align-items: center;
	font-size: 16/16 +0em;
}

.card__author-avatar {
	flex-shrink: 0;
	margin-right: 16/16 +0em;
}

.card__author-avatar img {
	width: 33/16 +0em;
	height: auto;
	border: 1px solid $white;
	border-radius: 50%;
}

@media (min-width: 48em) {
	.card__title {
		margin-bottom: 16/22 +0em;
	}

	.card__desc {
		margin-bottom: 24/18 +0em;
	}

	.card__stats,
	.card__author-text {
		font-size: 1em;
	}
}
</style>
