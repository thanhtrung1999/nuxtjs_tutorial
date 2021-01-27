<template>
	<div class="container">
		<div class="decks-list">
			<div class="d-flex justify-content-between my-3">
				<h2>List of your decks:</h2>
				<button
					type="button"
					class="btn btn-success"
					@click.prevent="openModal"
				>
					Create a deck
				</button>
			</div>
			<ul class="nav decks-list__ul">
				<DeckItem
					v-for="deck in decks"
					:key="deck._id"
					:id="deck._id"
					:name="deck.name"
					:description="deck.description"
					:thumpnail="deck.thumpnail"
				/>
			</ul>
		</div>
		<!-- Modal -->
		<v-modal name="CreateDeckModal">
			<h2>Create a new deck</h2>
      <DeckForm @saveForm="onSubmit" @closeModal="closeModal"/>
		</v-modal>
	</div>
</template>

<script>
import axios from 'axios'

import DeckItem from "@/components/Decks/DeckItem.vue";
import DeckForm from "@/components/Decks/DeckForm.vue";
export default {
	// asyncData(context) {
  //   console.log("asyncData is excuted!");
	// 	return new Promise((resolve, reject) => {
	// 		setTimeout(() => {
	// 			resolve({
	// 				decks: [
	// 					{
	// 						_id: 1,
	// 						name: "Learn English",
	// 						description:
	// 							"<p>Exercitation donec metus facilisis sociosqu aut egestas dignissimos, quisquam vestibulum assumenda autem? Et magni pharetra vestibulum, dolores taciti, commodo aliqua.</p>",
	// 						thumpnail:
	// 							"https://msquynhphuong.gnomio.com/pluginfile.php/2/course/section/1/english-course.jpg",
	// 					},
	// 					{
	// 						_id: 2,
	// 						name: "Learn Japanese",
	// 						description:
	// 							"<p>Tempora suscipit ridiculus porro morbi blandit porro suscipit sint curabitur, wisi donec quisque perferendis ante, porttitor qui commodi alias accusamus.</p>",
	// 						thumpnail:
	// 							"https://msquynhphuong.gnomio.com/pluginfile.php/2/course/section/1/english-course.jpg",
	// 					},
	// 					{
	// 						_id: 3,
	// 						name: "Learn Chinese",
	// 						description:
	// 							"<p>Dui sagittis, similique interdum, facilis beatae inventore ultricies varius porttitor. Pretium hymenaeos dolorum rhoncus nostra, imperdiet risus, adipisicing elit provident.</p>",
	// 						thumpnail:
	// 							"https://msquynhphuong.gnomio.com/pluginfile.php/2/course/section/1/english-course.jpg",
	// 					},
	// 				],
	// 			});
  //     }, 1000);
	// 	}).then(data => {
  //     return data
  //   }).catch(e => {
  //     context.error(e)
  //   });
  // },
  /* fetch(context) {
    console.log("asyncData is excuted!");
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve({
					decks: [
						{
							_id: 1,
							name: "Learn English",
							description:
								"<p>Exercitation donec metus facilisis sociosqu aut egestas dignissimos, quisquam vestibulum assumenda autem? Et magni pharetra vestibulum, dolores taciti, commodo aliqua.</p>",
							thumpnail:
								"https://msquynhphuong.gnomio.com/pluginfile.php/2/course/section/1/english-course.jpg",
						},
						{
							_id: 2,
							name: "Learn Japanese",
							description:
								"<p>Tempora suscipit ridiculus porro morbi blandit porro suscipit sint curabitur, wisi donec quisque perferendis ante, porttitor qui commodi alias accusamus.</p>",
							thumpnail:
								"https://msquynhphuong.gnomio.com/pluginfile.php/2/course/section/1/english-course.jpg",
						},
						{
							_id: 3,
							name: "Learn Chinese",
							description:
								"<p>Dui sagittis, similique interdum, facilis beatae inventore ultricies varius porttitor. Pretium hymenaeos dolorum rhoncus nostra, imperdiet risus, adipisicing elit provident.</p>",
							thumpnail:
								"https://msquynhphuong.gnomio.com/pluginfile.php/2/course/section/1/english-course.jpg",
						},
					],
				});
      }, 1000);
		}).then(data => {
      context.store.dispatch('setDecks', data.decks)
    }).catch(e => {
      context.error(e)
    });
  }, */
  /* created() {
    this.$store.dispatch('setDecks', this.decks)
    console.log(this.$store.getters.decks)
  }, */
  computed: {
    decks() {
      return this.$store.getters.decks
    }
  },
	methods: {
		openModal() {
			this.$modal.open({ name: "CreateDeckModal" });
    },
    closeModal() {
      this.$modal.close({ name: "CreateDeckModal" });
    },
    onSubmit(deckData) {
      const uri = "https://nuxtjs-tutorial-7151f-default-rtdb.firebaseio.com/decks.json"
      axios.post(uri, deckData)
      .then(data => {
        console.log(data)
      })
      .catch(error => {
        console(error)
      })
    }
  },
  components: {
    DeckItem,
    DeckForm
  }
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
