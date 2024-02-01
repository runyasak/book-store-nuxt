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
