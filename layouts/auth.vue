<template>
	<div style="height: 100%">
		<transition name="auth">
      <Nuxt />
    </transition>
	</div>
</template>

<style lang="scss">
html,
body,
#__nuxt,
#__layout {
	height: 100%;
	section.auth-page {
		width: 100%;
		height: 100%;
		display: flex;
		position: relative;
		main {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			min-width: 350px;
			width: 35vw;
			padding: 20px;
			border: 1px solid #0a0a0a;
			border-radius: 10px;
			background: #f5f4f4;
			box-shadow: -10px 10px 30px 0px rgba(0, 0, 0, 0.5);
		}
	}
}
.auth-enter-active,
.auth-leave-active {
	transition: opacity 1s;
}
.auth-enter,
.auth-leave-active {
	opacity: 0;
}
</style>
