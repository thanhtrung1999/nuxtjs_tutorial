<template>
  <div class="alert" :class="`alert-${typeAlert}`" role="alert">
    <strong>{{ messages }}</strong>
  </div>
</template>

<script>
export default {
  props: {
    messages: {
      type: String,
      required: true
    },
    typeAlert: {
      type: String,
      required: false,
      default: 'success'
    }
  }
}
</script>
