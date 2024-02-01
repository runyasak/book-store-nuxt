<script setup lang="ts"></script>

<template>
  <UCard class="inline-block w-full">
    <NuxtImg class="mx-auto h-[210px] w-[145px]" src="https://picsum.photos/200/300" fit="cover" />
    <template #footer>
      <div class="flex flex-col">
        <span>The Housemaid</span>
        <span>by <ULink to="#" class="text-[#2F80ED] underline">Freida McFadden</ULink></span>
        <span>date <ULink to="#" class="text-[#2F80ED]">August 2023</ULink> </span>
      </div>

      <div class="flex gap-2 pt-2">
        <UButton>Read</UButton>
        <UButton color="brown">
          Edit
        </UButton>

        <UButton color="danger">
          Delete
        </UButton>
      </div>
    </template>
  </UCard>
</template>
