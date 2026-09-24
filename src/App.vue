<script setup>
import { onMounted, ref } from "vue";
import Header from "./components/Header.vue";
import { getUser } from "./api/posts";

const user = ref(null);

onMounted(async () => {
  user.value = await getUser();
});
</script>

<template>
  <Header v-if="user" :user="user" />
  <h1>You did it!</h1>
  <p>
    Visit
    <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to
    read the documentation
  </p>
</template>

<style scoped></style>
