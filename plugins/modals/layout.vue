<template>
	<div modal="true">
		<div>
			<div :data-modal="name" v-if="visible">
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
import VModal from 'handle.js'
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
  methods: {
    show(params) {
      this.visible = true
    }
  },
  beforeMount() {
    VModal.EventBus.$on('open', params => {
      if(this.name === params.name) {
        this.open(params)
      }
    })
  }
}
</script>
