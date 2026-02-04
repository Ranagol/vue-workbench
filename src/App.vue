<template>
	<div class="home">
		<h1>App.vue</h1>
        <PropsReceiver 
            :message="data.propsMessage"
        ></PropsReceiver>

        <p>{{ data.message }}</p>

        <hr>

		<div>

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
import { reactive } from 'vue';
import PropsReceiver from './PropsReceiver.vue';

let data = reactive({
    message: "Reactive data testing successfull!",
    propsMessage: "Props testing successfull!"
});





</script>
