<template>
	<section class="auth-page" id="login-page">
		<main>
			<event-alert v-if="isSuccess" :messages="successMsg" />
			<event-alert
				v-else-if="isError"
				:messages="errorMsg"
				typeAlert="danger"
			/>
			<h2 class="text-center">Login</h2>
			<form action="" class="auth-page__form" @submit.prevent="onSubmit">
				<div class="form-group">
					<label for="email">Email</label>
					<input
						id="email"
						v-model="email"
						type="email"
						name="email"
						class="form-control"
						placeholder="example@gmail.com"
						aria-describedby="helpId"
					/>
				</div>
				<div class="form-group">
					<label for="password">Password</label>
					<input
						id="password"
						v-model="password"
						type="password"
						name="password"
						class="form-control"
						placeholder="Enter your password"
						aria-describedby="helpId"
					/>
				</div>
				<div class="form-group">
					<button type="submit" class="btn btn-outline-success">
						Login
					</button>
					<button type="reset" class="btn btn-secondary">
						Reset
					</button>
				</div>
			</form>
			<div class="other text-center">
				<span
					>Have not your account?
					<NuxtLink tag="a" to="/register"
						>Register here!</NuxtLink
					></span
				>
			</div>
		</main>
	</section>
</template>

<script>
import EventAlert from "../../components/Alerts/EventAlert.vue";
export default {
	components: { EventAlert },
	layout: "auth",
	data() {
		return {
			email: "",
			password: "",
			isSuccess: false,
      isError: false,
      isLogin: true,
			errorMsg: "",
			successMsg: "",
		};
	},
	methods: {
		onSubmit() {
			// console.log('Success!')
			this.$store.dispatch('authenticateUser', {
        email: this.email,
        password: this.password,
        isLogin: this.isLogin,
      }).then((response) => {
        if(response.success) {
          this.isSuccess = true
          this.successMsg = 'Login success!'
          this.$router.push('/decks')
        }
      }).catch((err) => {
        // console.log(err)
        this.isError = true
        this.errorMsg = err.data.error.message
      })
		},
	},
};
</script>

<style lang="scss" scoped>
</style>
