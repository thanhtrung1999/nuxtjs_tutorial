<template>
	<li class="decks-list__li">
		<NuxtLink :to="`decks/${id}`" class="decks__link">
			<div class="card decks__card">
				<img :src="thumpnail" alt="Thumpnail card" />
				<div class="card-body">
					<h3 class="card-title">{{ name }}</h3>
					<div
						class="card__description"
						v-html="description"
					></div>
				</div>
			</div>
		</NuxtLink>
	</li>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    description: {
      type: String,
      default: ''
    },
    thumpnail: {
      type: String,
      required: true
    }
  }
}
</script>
