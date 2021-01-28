<template>
	<form @submit.prevent="onSave">
		<div class="form-group">
			<label for="name">Name</label>
			<input
				v-model="editedDeck.name"
				type="text"
				id="name"
				class="form-control"
				placeholder="Please enter name deck"
			/>
		</div>
		<div class="form-group">
			<label for="description">Description</label>
			<textarea
				v-model="editedDeck.description"
				id="description"
				class="form-control"
				cols="30"
				rows="6"
				placeholder="Please enter your description"
			></textarea>
		</div>
		<div class="form-group">
			<label for="thumpnail">Thumpnail</label>
			<input
				v-model="editedDeck.thumpnail"
				type="text"
				id="thumpnail"
				class="form-control"
				placeholder="https://example.com/example.png"
			/>
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
			<button type="submit" class="btn btn-outline-success">
				{{ editedDeck && editedDeck._id ? 'Edit' : 'Create' }}
			</button>
		</div>
	</form>
</template>

<script>
export default {
	props: {
		deck: {
			type: Object,
			required: false,
			default: () => ({
				name: "",
				description: "",
				thumpnail: "",
			}),
		},
	},
	data() {
		return {
			editedDeck: this.deck
				? { ...this.deck }
				: {
						name: "",
						description: "",
						thumpnail: "",
          },
		};
	},
	methods: {
		onSave() {
			this.$emit("saveForm", this.editedDeck);
		},
		closeModal() {
			this.$emit("closeModal");
		},
	},
};
</script>

<style>
</style>
