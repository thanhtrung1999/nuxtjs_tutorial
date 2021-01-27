<template>
	<div
		class="col-md-3"
		style="margin-bottom: 1rem"
	>
		<div class="card">
			<div class="card__front">
				<img :src="urlImage" />
			</div>
			<div class="card__back">
				<h6>{{ keyword }}</h6>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  props: {
    urlImage: {
      type: String,
      required: true
    },
    keyword: {
      type: String,
      required: true
    }
  }
};
</script>

<style>
</style>
