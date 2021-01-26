<template>
  <div>
    <DefaultHeader />
    <Nuxt />
    <DefaultFooter />
  </div>
</template>

<script>
import DefaultHeader from '../components/Header/DefaultHeader'
import DefaultFooter from '../components/Footer/DefaultFooter'
export default {
	components: { DefaultHeader, DefaultFooter },
}
</script>
