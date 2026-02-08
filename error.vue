<template>
  <v-app>
    <v-container class="text-center">
      <h1 v-if="error?.statusCode === 404" class="text-h3 my-4">
        {{ pageNotFound }}
      </h1>
      <h1 v-else class="text-h3 my-4">
        {{ otherError }}
      </h1>
      <p v-if="error?.message" class="my-4">
        {{ error.message }}
      </p>
      <v-btn to="/" variant="outlined" class="mt-4">
        Home page
      </v-btn>
    </v-container>
  </v-app>
</template>

<script setup>
const props = defineProps({
  error: {
    type: Object,
    default: null,
  },
})

const pageNotFound = '404 Not Found'
const otherError = 'An error occurred'

useHead({
  title: props.error?.statusCode === 404 ? pageNotFound : otherError,
})
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
