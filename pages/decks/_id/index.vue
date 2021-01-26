<template>
	<section>
		<div class="row text-center">
			<div class="container">
				<h3>Deck #{{ $route.params.id }}: Learn English by ...</h3>
				<div class="tools">
					<button type="button" class="btn btn-outline-success">
						Start now
					</button>
					<button type="button" class="btn btn-primary">
						Create a card
					</button>
				</div>
				<hr class="divide" />
				<div class="row">
					<div class="col-md-3">
						<div class="card">
							<div class="card__front">
								<img src="https://media-cdn.tripadvisor.com/media/photo-s/10/c9/ff/66/old-florida-book-shop.jpg" alt="Thumpnail card" />
							</div>
							<div class="card__back">
								<h6>Shop</h6>
							</div>
						</div>
					</div>
					<div class="col-md-3">
						<div class="card">
							<div class="card__front">
								<img src="https://media-cdn.tripadvisor.com/media/photo-s/10/c9/ff/66/old-florida-book-shop.jpg" alt="Thumpnail card" />
							</div>
							<div class="card__back">
								<h6>Shop</h6>
							</div>
						</div>
					</div>
					<div class="col-md-3">
						<div class="card">
							<div class="card__front">
								<img src="https://media-cdn.tripadvisor.com/media/photo-s/10/c9/ff/66/old-florida-book-shop.jpg" alt="Thumpnail card" />
							</div>
							<div class="card__back">
								<h6>Shop</h6>
							</div>
						</div>
					</div>
					<div class="col-md-3">
						<div class="card">
							<div class="card__front">
								<img src="https://media-cdn.tripadvisor.com/media/photo-s/10/c9/ff/66/old-florida-book-shop.jpg" alt="Thumpnail card" />
							</div>
							<div class="card__back">
								<h6>Shop</h6>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	validate({ params }) {
		return /^[0-9]$/.test(params.id);
	},
};
</script>

<style lang="scss">
section {
	padding: 3rem;
	.divide {
		margin: 2rem 0;
  }
  .card {
    padding: 1rem;
    img {
      width: 80%;
    }
  }
}
</style>
