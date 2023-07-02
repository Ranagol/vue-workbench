<template>
    <button
        @click="counter.increaseCounter(1)"
    >
        {{ counter.count }}
    </button>
</template>

<script setup>
import { useCounterStore } from '@/stores/counter.js';

//To access the Pinia store, we need to put it into a variable. This is it. 
let counter = useCounterStore();


</script>