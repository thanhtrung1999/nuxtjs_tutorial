<template>
	<section>
		<div class="row text-center">
			<div class="container">
				<h3>Deck: {{ deck.name }}</h3>
				<div class="tools">
					<button type="button" class="btn btn-outline-success">
						Start now
					</button>
					<button
						type="button"
						class="btn btn-primary"
						@click.prevent="openModal('CreateCardModal')"
					>
						Create a card
					</button>
					<button
						type="button"
						class="btn btn-warning"
						@click.prevent="openModal('DeckFormModal')"
					>
						Edit deck
					</button>
				</div>
				<hr class="divide" />
				<div class="row">
					<CardItem
						v-for="card in cards"
						:key="card._id"
						:urlImage="card.urlImage"
						:keyword="card.keyword"
					/>
				</div>
			</div>
		</div>
		<!-- Modal -->
		<v-modal name="CreateCardModal">
			<h2>Create a new card</h2>
			<form action="">
				<div class="form-group">
					<label for="name">Name</label>
					<input
						type="text"
						id="name"
						class="form-control"
						placeholder="Please enter name deck"
					/>
				</div>
				<div class="form-group">
					<label for="description">Description</label>
					<textarea
						id="description"
						class="form-control"
						cols="30"
						rows="10"
						placeholder="Please enter your description"
					></textarea>
				</div>
				<div class="form-group">
					<label for="thumpnail">Thumpnail</label>
					<input type="file" id="thumpnail" />
					<div class="preview"></div>
				</div>
				<div class="form-group d-flex justify-content-end">
					<button
						type="button"
						class="btn btn-danger mr-2"
						@click.prevent="closeModal"
					>
						Close
					</button>
					<button
						type="button"
						class="btn btn-outline-success"
						@click.prevent="createDeck"
					>
						Create
					</button>
				</div>
			</form>
		</v-modal>
	</section>
</template>

<script>
import axios from "axios";

import CardItem from "@/components/Cards/CardItem";
export default {
	/* validate({ params }) {
		return /^[0-9]$/.test(params.id);
	}, */
	asyncData(context) {
		console.log(context.route.params.id);
		const uri = `https://nuxtjs-tutorial-7151f-default-rtdb.firebaseio.com/decks/${context.route.params.id}.json`;
		return axios
			.get(uri)
			.then((response) => {
				return {
					deck: response.data,
				};
			})
			.catch((err) => {
				context.error(err);
			});
	},
	data: () => ({
		cards: [
			{
				_id: 1,
				urlImage:
					"https://media-cdn.tripadvisor.com/media/photo-s/10/c9/ff/66/old-florida-book-shop.jpg",
				keyword: "Shop",
			},
			{
				_id: 2,
				urlImage:
					"https://media-cdn.tripadvisor.com/media/photo-s/10/c9/ff/66/old-florida-book-shop.jpg",
				keyword: "Shop",
			},
			{
				_id: 3,
				urlImage:
					"https://media-cdn.tripadvisor.com/media/photo-s/10/c9/ff/66/old-florida-book-shop.jpg",
				keyword: "Shop",
			},
			{
				_id: 4,
				urlImage:
					"https://media-cdn.tripadvisor.com/media/photo-s/10/c9/ff/66/old-florida-book-shop.jpg",
				keyword: "Shop",
			},
			{
				_id: 5,
				urlImage:
					"https://media-cdn.tripadvisor.com/media/photo-s/10/c9/ff/66/old-florida-book-shop.jpg",
				keyword: "Shop",
			},
		],
	}),
	methods: {
		openModal(name) {
			switch (name) {
				case "CreateCardModal": {
					this.$modal.open({ name });
					break;
				}
				case "DeckFormModal": {
					this.$modal.open({
						name,
						payload: { ...this.deck, _id: this.$route.params.id },
					});
					break;
				}
			}
		},
		closeModal() {
			this.$modal.close({ name: "CreateCardModal" });
		},
  },
  head() {
    return {
      title: `Deck: ${this.deck.name}`
    }
  }
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
