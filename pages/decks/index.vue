<template>
	<div class="container">
		<div class="decks-list">
			<h2>List of your decks:</h2>
			<ul class="nav decks-list__ul">
				<li class="nav-item decks-list__li">
					<NuxtLink to="decks/1" class="decks__link">
						<div class="card decks__card">
							<img
								src="https://msquynhphuong.gnomio.com/pluginfile.php/2/course/section/1/english-course.jpg"
								alt="Thumpnail card"
							/>
							<div class="card-body">
								<h3 class="card-title">Title card</h3>
								<div class="card__description">
									<p>Description card</p>
								</div>
							</div>
						</div>
					</NuxtLink>
				</li>
				<li class="nav-item decks-list__li">
					<NuxtLink to="decks/2" class="decks__link">
						<div class="card decks__card">
							<img
								src="https://msquynhphuong.gnomio.com/pluginfile.php/2/course/section/1/english-course.jpg"
								alt="Thumpnail card"
							/>
							<div class="card-body">
								<h3 class="card-title">Title card</h3>
								<div class="card__description">
									<p>Description card</p>
								</div>
							</div>
						</div>
					</NuxtLink>
				</li>
				<li class="nav-item decks-list__li">
					<NuxtLink to="decks/3" class="decks__link">
						<div class="card decks__card">
							<img
								src="https://msquynhphuong.gnomio.com/pluginfile.php/2/course/section/1/english-course.jpg"
								alt="Thumpnail card"
							/>
							<div class="card-body">
								<h3 class="card-title">Title card</h3>
								<div class="card__description">
									<p>Description card</p>
								</div>
							</div>
						</div>
					</NuxtLink>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
	data: () => ({
		deckID: "1",
	}),
	methods: {

	},
};
</script>

<style lang="scss">
.decks-list {
	.decks-list__ul {
		margin: 0;
		padding: 0;
		flex-direction: column;
		.decks-list__li {
			margin-bottom: 1rem;
			&:last-child {
				margin-bottom: 0;
			}
			.decks__link {
				display: block;
				.decks__card {
					display: flex;
					flex-direction: row;
					img {
						width: 250px;
					}
				}
			}
		}
	}
}
</style>
