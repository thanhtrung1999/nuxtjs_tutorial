<template>
	<div modal="true">
		<div>
			<div v-if="visible" :data-modal="name" class="modal">
				<div
					aria-modal="true"
					data-reach-dialog-content="true"
					tabindex="-1"
					class="modal__mask"
				>
					<div class="modal__body">
						<slot :payload="payload" />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import VModal from './handle'
export default {
  data () {
    return {
      payload: null,
      visible: false
    }
  },
  props: {
    name: {
      type: String,
      required: true
    }
  },
  beforeMount() {
    // open event
    VModal.EventBus.$on('open', params => {
      if(this.name === params.name) {
        this.open(params)
      }
    })
    // close event
    VModal.EventBus.$on('close', params => {
      if(this.name === params.name) {
        this.close(params)
      }
    })
  },
  methods: {
    open(params) {
      this.payload = params.payload
      this.visible = true
    },
    close(params) {
      this.visible = false
    }
  }
}
</script>

<style lang="scss" scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(14, 14, 14, 0.6);
  z-index: 999;
  padding: 10px 0;
  &__body {
    background-color: #f1f1f1;
    padding: 1.2rem;
    min-width: 40vw;
    max-width: 60vw;
  }
}
</style>
