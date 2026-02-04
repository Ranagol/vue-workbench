<template>
    <p>{{ props.message }}</p>
</template>

<script setup>

let props = defineProps({
    message: String
});

</script>