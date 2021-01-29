<template>
	<section class="auth-page" id="register-page">
		<main>
			<event-alert v-if="isSuccess" :messages="successMsg" />
			<event-alert
				v-else-if="isError"
				:messages="errorMsg"
				typeAlert="danger"
			/>
			<h2 class="text-center">Register</h2>
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
					<label for="confirm-password">Confirm password</label>
					<input
						id="confirm-password"
						v-model="confirmPassword"
						type="password"
						name="confirm_password"
						class="form-control"
						placeholder="Enter your password again"
						aria-describedby="helpId"
					/>
				</div>
				<div class="form-group">
					<button type="submit" class="btn btn-outline-success">
						Register
					</button>
					<button type="reset" class="btn btn-secondary">
						Reset
					</button>
				</div>
			</form>
			<div class="other text-center">
				<span
					>Have your account?
					<NuxtLink tag="a" to="/login">Login here!</NuxtLink></span
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
			confirmPassword: "",
			isSuccess: false,
			isError: false,
			errorMsg: "",
			successMsg: "",
		};
	},
	methods: {
		checkValidPassword() {
			return this.password === this.confirmPassword;
		},
		onSubmit() {
			const validPassword = this.checkValidPassword();

			if (validPassword) {
				// console.log('Success!')
				this.$store.dispatch("authenticateUser", {
					email: this.email,
					password: this.password,
					isLogin: false,
				}).then(() => {
          if(response.success) {
            this.isSuccess = true
            this.successMsg = 'Register success!'
            this.$router.push('/login')
          }
        }).catch(err => {
          this.isError = true
          this.errorMsg = err.data.error.message
        });
			} else {
				this.isError = true;
				this.errorMsg = "Password is not valid";
			}
		},
	},
};
</script>
