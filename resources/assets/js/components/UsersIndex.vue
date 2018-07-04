<template>
	<div class="template-wrapper">
		<div class="users">
			<div class="loading" v-if="loading">
				Loading...
			</div>

			<div v-if="error" class="error">
				<p>{{ error }}</p>

				<p>
					<button @click.prevent="fetchData">
						Try Again
					</button>
				</p>
			</div>

			<ul v-if="users">
				<li v-for="{ name, email } in users">
					<strong>Name:</strong> {{ name }},
					<strong>Email:</strong> {{ email }}
				</li>
			</ul>
		</div>
	</div>
</template>

<script type="text/javascript" scoped>
export default {
	data() {
		return {
			loading: false,
			users: null,
			error: null,
		};
	},
	created() {
		this.fetchData();
	},
	methods: {
		fetchData() {
			this.error = this.users = null;
			this.loading = true;
			axios
			.get('/api/users')
			.then(response => {
				console.log(response);
				this.loading = false;
				this.users = response.data.data;
			})
			.catch(error => {
				this.loading = false;
				this.error = error.response.data.message || error.message;
			});
		}
	}
}
</script>

<style type="text/css" scoped></style>