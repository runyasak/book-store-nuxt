<script setup lang="ts">
const { data } = await useAsyncData(
  'pokemon',
  () => $fetch('https://pokeapi.co/api/v2/pokemon/1/'),
)

console.log(data.value.name)
// useAsyncData('https://pokeapi.co/api/v2/pokemon/1/')
</script>

<template>
  <header class="bg-purple-400 p-2">
    <UContainer class="flex">
      <NuxtLink class="font-bold" :to="{ path: '/' }">
        Book Store Management
      </NuxtLink>
      <span class="ml-auto">
        YOUR NAME
      </span>
    </UContainer>
  </header>
  <slot />
</template>
