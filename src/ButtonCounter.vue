<template>
    <button
        @click="counter.increaseCounter(1)"
        :class="greenOrYellow"
    >
        {{ counter.count }}
        <div>oddOrEven from computed: {{ oddOrEven }}</div>
        <div>oddOrEven from store getter: {{ counter.oddOrEven }}</div>
    </button>
</template>

<script setup>
import { computed } from 'vue';
import { useCounterStore } from '@/stores/counter.js';

//To access the Pinia store, we need to put it into a variable. This is it. 
let counter = useCounterStore();

let oddOrEven = computed(() => {
  if (counter.count % 2 === 0) {
    return 'even';
  }
  return 'odd';
});

let greenOrYellow = computed(() => {
  if (counter.count % 2 === 0) {
    return 'green';
  }
  return 'yellow';
});

</script>

<style scoped>

.green {
    font-size: 20px;
    padding: 10px;
    background-color: green;
}

.yellow {
    font-size: 20px;
    padding: 10px;
    background-color: yellow;
}
</style>