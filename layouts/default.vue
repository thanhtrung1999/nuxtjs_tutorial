<template>
	<div>
		<DefaultHeader />
		<Nuxt />
		<!-- Modal -->
		<v-modal v-slot="payload" name="DeckFormModal">
			<h2>
				{{
					payload && payload.payload
						? "Edit deck"
						: "Create a new deck"
				}}
			</h2>
			<DeckForm
				:deck="payload.payload"
				@saveForm="onSubmit"
				@closeModal="closeModal"
			/>
		</v-modal>
		<DefaultFooter />
	</div>
</template>

<script>
import DefaultHeader from "../components/Header/DefaultHeader";
import DefaultFooter from "../components/Footer/DefaultFooter";
import DeckForm from "@/components/Decks/DeckForm.vue";
export default {
	methods: {
		onSubmit(deckData) {
			if (deckData && !deckData._id) {
        this.$store.dispatch('addDeck', deckData).then(this.closeModal())
			} else {
				this.$store.dispatch('editDeck', deckData).then(() => {
          this.closeModal()
          this.$router.push('/decks')
        })
			}
		},
		closeModal() {
			this.$modal.close({ name: "DeckFormModal" });
		},
	},
	components: { DefaultHeader, DefaultFooter, DeckForm },
};
</script>
