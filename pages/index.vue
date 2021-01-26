<template>
  <div class="container" id="root">
    <div class="banner">
      <div class="thumpnail"></div>
    </div>
    <div class="popular-decks">
      <h3 class="text-center my-3">3 Popular decks for you</h3>
      <div class="row">
        <div class="col-md-4">
          <div class="card">
            <p>Deck 1</p>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card">
            <p>Deck 2</p>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card">
            <p>Deck 3</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.banner {
  height: 220px;
  margin-top: 3rem;
  .thumpnail {
    height: inherit;
    background: url('~assets/images/banner.jpg') center center;
    background-size: cover;
    background-repeat: no-repeat;
  }
}
</style>
