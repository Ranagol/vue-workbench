<template>
	<div class="home">
		<h1>App.vue</h1>

		<p>Navbar</p>

		<div>

			<div>Links are here:</div>
			<RouterLink to="/about">About</RouterLink>
			<span>||</span>
			<RouterLink to="/home">Home</RouterLink>

		</div>

		<div>
			<RouterView></RouterView>
		</div>

	</div>
</template>

<script setup>





</script>
