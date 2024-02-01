<script setup lang="ts">
defineProps<{ title: string, coverImageUrl: string, authorName: string }>()
</script>

<template>
  <UCard class="inline-block w-full">
    <NuxtImg class="mx-auto h-[210px] w-[145px]" :src="coverImageUrl" loading="lazy" fit="cover" />
    <template #footer>
      <div class="flex flex-col">
        <span>{{ title }}</span>
        <span>by <ULink to="#" class="text-[#2F80ED] underline">{{ authorName }}</ULink></span>
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
