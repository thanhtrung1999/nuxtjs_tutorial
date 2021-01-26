import layout from 'layout.vue'

const VModal = {
  install(Vue) {
    this.EventBus = new Vue()

    Vue.component('v-modal', layout)

    Vue.prototype.$modal = {
      open(params) {
        VModal.EventBus.$emit('open', params)
      },
      close() {
        VModal.EventBus.$emit('close', params)
      }
    }
  }
}

export default VModal
