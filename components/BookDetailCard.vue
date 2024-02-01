<script setup lang="ts">
import dayjs from 'dayjs'

const props = defineProps<{
  title: string
  coverImageUrl: string
  authorName: string
  publishedDate: string
}>()

defineEmits<{
  clickRead: []
}>()

const formatPublishedDate = computed(() => dayjs(props.publishedDate).format('MMMM D YYYY'))
</script>

<template>
  <UCard class="inline-block w-full">
    <NuxtImg class="mx-auto h-[210px] w-[145px]" :src="coverImageUrl" loading="lazy" fit="cover" />
    <template #footer>
      <div class="flex flex-col">
        <span>{{ title }}</span>
        <span>by <ULink to="#" class="text-[#2F80ED] underline">{{ authorName }}</ULink></span>
        <span>date <ULink to="#" class="text-[#2F80ED]">{{ formatPublishedDate }}</ULink> </span>
      </div>

      <div class="flex gap-2 pt-2">
        <UButton @click="$emit('clickRead')">
          Read
        </UButton>
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
